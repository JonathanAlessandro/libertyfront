import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const initial = { possuiPlano: '', plano_atual: '', hospital: '', idades: '', possuiCnpj: '', cnpj: '', nome: '', telefone: '', email: '' };
const digits = value => value.replace(/\D/g, '');
const formatCnpj = value => {
  const numbers = digits(value).slice(0, 14);
  return numbers.slice(0, 2)
    + (numbers.length > 2 ? '.' + numbers.slice(2, 5) : '')
    + (numbers.length > 5 ? '.' + numbers.slice(5, 8) : '')
    + (numbers.length > 8 ? '/' + numbers.slice(8, 12) : '')
    + (numbers.length > 12 ? '-' + numbers.slice(12) : '');
};
const phone = value => {
  const n = digits(value).slice(0, 11);
  if (n.length <= 2) return n;
  const split = n.length > 10 ? 7 : 6;
  return `(${n.slice(0, 2)}) ${n.slice(2, split)}${n.length > split ? '-' + n.slice(split) : ''}`;
};
export default function Cotacao() {
  const [data, setData] = useState(initial);
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccessActions, setShowSuccessActions] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const heading = useRef(null);
  const locked = useRef(false);
  const transitionLock = useRef(false);
  const transitionTimer = useRef(null);
  const steps = ['plano', ...(data.possuiPlano === 'sim' ? ['operadora'] : []), 'hospital', 'idades', 'cnpj', ...(data.possuiCnpj === 'sim' ? ['documento'] : []), 'contato'];
  const current = steps[step];
  const titles = { plano: 'Você possui plano de saúde?', operadora: 'Qual plano de saúde?', hospital: 'Qual hospital você prefere?', idades: 'Quais são as idades para cotação?', cnpj: 'Você possui CNPJ?', documento: 'Gostaria de informar o CNPJ?', contato: 'Como podemos falar com você?' };
  useEffect(() => { heading.current?.focus(); }, [step, success]);
  useEffect(() => () => clearTimeout(transitionTimer.current), []);
  useEffect(() => {
    if (!success) return;
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1100;
    const timer = setTimeout(() => setShowSuccessActions(true), delay);
    return () => clearTimeout(timer);
  }, [success]);
  function moveStep(direction) {
    if (transitionLock.current || locked.current) return;
    transitionLock.current = true;
    setTransitioning(true);
    setError('');
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180;
    transitionTimer.current = setTimeout(() => {
      setStep(previous => previous + direction);
      setTransitioning(false);
      transitionLock.current = false;
    }, duration);
  }
  const update = (name, value) => { setData(old => ({ ...old, [name]: value })); setError(''); };
  const choice = (name) => <div className="choices">{['sim', 'nao'].map(value => <button key={value} type="button" className={data[name] === value ? 'choice selected' : 'choice'} aria-pressed={data[name] === value} onClick={() => { if (transitionLock.current) return; update(name, value); moveStep(1); }}><span>{value === 'sim' ? 'Sim' : 'Não'}</span><span aria-hidden="true">{data[name] === value ? '✓' : '○'}</span></button>)}</div>;
  const input = (name, label, props = {}) => <div className="field"><label htmlFor={name}>{label}</label><input id={name} name={name} value={data[name]} onChange={event => update(name, event.target.value)} {...props}/></div>;
  function validate() {
    if (current === 'plano' && !data.possuiPlano || current === 'cnpj' && !data.possuiCnpj) return 'Selecione uma opção para continuar.';
    if (current === 'operadora' && !data.plano_atual.trim()) return 'Informe qual plano de saúde você possui.';
    if (current === 'hospital' && !data.hospital.trim()) return 'Informe um hospital de preferência. Se não tiver, digite “não”.';
    if (current === 'idades' && !/^\s*\d{1,3}(\s*,\s*\d{1,3})*\s*$/.test(data.idades)) return 'Informe as idades separadas por vírgula, como 35, 32, 8.';
    if (current === 'idades' && data.idades.split(',').some(age => Number(age) > 120)) return 'Informe idades entre 0 e 120 anos.';
    if (current === 'documento' && data.cnpj.trim() && digits(data.cnpj).length !== 14) return 'Informe os 14 números do CNPJ.';
    if (current === 'contato') {
      if (!data.nome.trim()) return 'Informe seu nome.';
      if (!/^[1-9]{2}\d{8,9}$/.test(digits(data.telefone))) return 'Informe um telefone válido com DDD.';
      if (!data.email.trim()) return 'Informe seu e-mail.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) return 'Informe um e-mail válido.';
    }
    return '';
  }
  async function next(event) {
    event.preventDefault();
    if (locked.current || transitionLock.current) return;
    const message = validate();
    if (message) { setError(message); return; }
    if (current !== 'contato') { moveStep(1); return; }
    locked.current = true;
    setSending(true); setError('');
    try {
      const response = await fetch('https://api.libertysaude.com.br/api/clientes', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: data.nome.trim(), telefone: digits(data.telefone), email: data.email.trim(), cnpj: data.possuiCnpj === 'sim' && data.cnpj.trim() ? digits(data.cnpj) : null, noCnpj: data.possuiCnpj === 'nao', hospital: data.hospital.trim(), plano_atual: data.possuiPlano === 'sim' ? data.plano_atual.trim() : 'não possuo plano', idades: data.idades.split(',').map(Number), aceitaEmails: false, aceitaWhatsapp: false, versaoPoliticaPrivacidade: '2026-09-23' })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.errors?.join(' ') || result.message || 'Não foi possível enviar sua cotação. Tente novamente.');
      setSuccess(true); setData(initial);
    } catch (err) { setError(err.message === 'Failed to fetch' ? 'Não foi possível conectar. Confira sua conexão e tente novamente.' : err.message); }
    finally { locked.current = false; setSending(false); }
  }
  return <div className="page"><header><Link to="/" aria-label="Liberty Saúde — início"><img src="/assets/images/logo.svg" alt="Liberty Saúde"/></Link><Link className="exit" to="/">Voltar ao site ↗</Link></header><main>
    {success ? <section className="success"><span className="success-icon" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none"><circle className="success-ring" cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="3"/><path className="success-tick" d="m24 40 11 11 22-24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span><p className="eyebrow">TUDO CERTO</p><h1 ref={heading} tabIndex="-1">Sua solicitação foi enviada!</h1><p>Um especialista da Liberty Saúde entrará em contato para ajudar você a encontrar seu plano.</p><div className="success-actions-slot">{showSuccessActions && <div className="success-actions"><a className="primary" href={'https://wa.me/5511989152642?text=' + encodeURIComponent('Preenchi seu formulário solicitando uma cotação e gostaria de saber mais.')} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp ↗</a><Link className="success-home" to="/">Voltar ao início</Link></div>}</div></section> : <>
      <div className="progress-label"><span>SUA COTAÇÃO PERSONALIZADA</span><span>Etapa {step + 1} de {steps.length}</span></div><progress value={step + 1} max={steps.length} aria-label="Progresso da cotação"/>
      <form key={current} className={`form-step${transitioning ? ' is-leaving' : ''}`} onSubmit={next} noValidate aria-busy={sending || transitioning}>
        <p className="eyebrow">VAMOS ENCONTRAR SEU PRÓXIMO PLANO</p><h1 tabIndex="-1" ref={heading}>{titles[current]}</h1>
        <p className="description">{current === 'documento' ? 'Com o CNPJ, podemos preparar uma cotação mais detalhada para sua empresa. Se preferir, continue sem informar.' : current === 'contato' ? 'Falta pouco! Informe seus dados para receber uma cotação personalizada.' : 'Uma pergunta de cada vez, para entender o que faz sentido para você.'}</p>
        <fieldset disabled={sending || transitioning}>
          {current === 'plano' && choice('possuiPlano')}
          {current === 'operadora' && input('plano_atual', 'Plano de saúde atual', { placeholder: 'Ex.: Amil, Unimed, Bradesco Saúde', required: true, maxLength: 50 })}
          {current === 'hospital' && <>{input('hospital', 'Hospital de preferência *', { placeholder: 'Ex.: São Luiz, Albert Einstein', maxLength: 200, required: true, 'aria-describedby': 'hospital-help' })}<p id="hospital-help" className="hint">Se não tiver um hospital de preferência, digite “não”.</p></>}
          {current === 'idades' && <>{input('idades', 'Idades dos beneficiários', { placeholder: 'Ex.: 35, 32, 8', required: true, inputMode: 'text', 'aria-describedby': 'age-help' })}<p id="age-help" className="hint">Inclua a idade de cada pessoa, separada por vírgula. Para bebês com menos de 1 ano, use 0.</p></>}
          {current === 'cnpj' && choice('possuiCnpj')}
          {current === 'documento' && input('cnpj', 'CNPJ (opcional)', { placeholder: '00.000.000/0000-00', inputMode: 'numeric', maxLength: 18, onChange: event => update('cnpj', formatCnpj(event.target.value)) })}
          {current === 'contato' && <>{input('nome', 'Nome completo *', { autoComplete: 'name', required: true, maxLength: 150 })}{input('telefone', 'Telefone com DDD *', { type: 'tel', autoComplete: 'tel', placeholder: '(11) 99999-9999', required: true, onChange: e => update('telefone', phone(e.target.value)) })}{input('email', 'E-mail *', { type: 'email', required: true, autoComplete: 'email', placeholder: 'voce@email.com', maxLength: 150 })}<p className="privacy">Usamos seus dados para responder à cotação e os compartilhamos quando necessário com operadoras, seguradoras e fornecedores. Não vendemos seus dados. <a href="/politica-de-privacidade.html" target="_blank" rel="noopener">Política de Privacidade</a>.</p></>}
        </fieldset>
        <div role="alert" className="error">{error}</div><div className="actions">{step > 0 && <button type="button" className="back" disabled={sending || transitioning} onClick={() => moveStep(-1)}>← Voltar</button>}{!['plano', 'cnpj'].includes(current) && <button className="primary" disabled={sending || transitioning} type="submit">{sending ? 'Enviando…' : current === 'contato' ? 'Solicitar minha cotação' : 'Continuar →'}</button>}</div>
      </form></>}
    </main><footer>Liberty Saúde · Cotação gratuita e sem compromisso</footer></div>;
}
