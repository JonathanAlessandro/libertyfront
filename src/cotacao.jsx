import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const initial = { possuiPlano: '', plano_atual: '', hospital: '', semHospital: false, idades: '', possuiCnpj: '', cnpj: '', nome: '', telefone: '', email: '', aceitaEmails: false, aceitaWhatsapp: false };
const digits = value => value.replace(/\D/g, '');
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
  const heading = useRef(null);
  const locked = useRef(false);
  const steps = ['plano', ...(data.possuiPlano === 'sim' ? ['operadora'] : []), 'hospital', 'idades', 'cnpj', ...(data.possuiCnpj === 'sim' ? ['documento'] : []), 'contato'];
  const current = steps[step];
  const titles = { plano: 'Você possui plano de saúde?', operadora: 'Qual é o seu plano atual?', hospital: 'Qual hospital você prefere?', idades: 'Quais são as idades de quem vai usar?', cnpj: 'Você possui CNPJ?', documento: 'Qual é o seu CNPJ?', contato: 'Como podemos falar com você?' };
  useEffect(() => { heading.current?.focus(); }, [step, success]);
  const update = (name, value) => { setData(old => ({ ...old, [name]: value })); setError(''); };
  const choice = (name) => <div className="choices">{['sim', 'nao'].map(value => <button key={value} type="button" className={data[name] === value ? 'choice selected' : 'choice'} aria-pressed={data[name] === value} onClick={() => update(name, value)}><span>{value === 'sim' ? 'Sim' : 'Não'}</span><span aria-hidden="true">{data[name] === value ? '✓' : '○'}</span></button>)}</div>;
  const input = (name, label, props = {}) => <div className="field"><label htmlFor={name}>{label}</label><input id={name} name={name} value={data[name]} onChange={event => update(name, event.target.value)} {...props}/></div>;
  const checkbox = (name, label) => <label className="check"><input type="checkbox" checked={data[name]} onChange={event => update(name, event.target.checked)}/><span>{label}</span></label>;
  function validate() {
    if (current === 'plano' && !data.possuiPlano || current === 'cnpj' && !data.possuiCnpj) return 'Selecione uma opção para continuar.';
    if (current === 'operadora' && !data.plano_atual.trim()) return 'Informe seu plano atual.';
    if (current === 'hospital' && !data.semHospital && !data.hospital.trim()) return 'Informe um hospital ou marque que não tem preferência.';
    if (current === 'idades' && !/^\s*\d{1,3}(\s*,\s*\d{1,3})*\s*$/.test(data.idades)) return 'Informe as idades separadas por vírgula, como 35, 32, 8.';
    if (current === 'idades' && data.idades.split(',').some(age => Number(age) > 120)) return 'Informe idades entre 0 e 120 anos.';
    if (current === 'documento' && digits(data.cnpj).length !== 14) return 'Informe os 14 números do CNPJ.';
    if (current === 'contato') {
      if (!data.nome.trim()) return 'Informe seu nome.';
      if (!/^[1-9]{2}\d{8,9}$/.test(digits(data.telefone))) return 'Informe um telefone válido com DDD.';
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) return 'Informe um e-mail válido ou deixe o campo vazio.';
      if (data.aceitaEmails && !data.email.trim()) return 'Informe seu e-mail para receber novidades.';
    }
    return '';
  }
  async function next(event) {
    event.preventDefault();
    if (locked.current) return;
    const message = validate();
    if (message) { setError(message); return; }
    if (current !== 'contato') { setStep(step + 1); return; }
    locked.current = true;
    setSending(true); setError('');
    try {
      const response = await fetch('https://api.libertysaude.com.br/api/clientes', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: data.nome.trim(), telefone: digits(data.telefone), email: data.email.trim(), cnpj: data.possuiCnpj === 'sim' ? digits(data.cnpj) : null, noCnpj: data.possuiCnpj === 'nao', hospital: data.semHospital ? 'Sem preferência' : data.hospital.trim(), plano_atual: data.possuiPlano === 'sim' ? data.plano_atual.trim() : 'não possuo plano', idades: data.idades.split(',').map(Number), aceitaEmails: data.aceitaEmails, aceitaWhatsapp: data.aceitaWhatsapp, versaoPoliticaPrivacidade: '2026-09-23' })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.errors?.join(' ') || result.message || 'Não foi possível enviar sua cotação. Tente novamente.');
      setSuccess(true); setData(initial);
    } catch (err) { setError(err.message === 'Failed to fetch' ? 'Não foi possível conectar. Confira sua conexão e tente novamente.' : err.message); }
    finally { locked.current = false; setSending(false); }
  }
  return <div className="page"><header><Link to="/" aria-label="Liberty Saúde — início"><img src="/assets/images/logo.svg" alt="Liberty Saúde"/></Link><Link className="exit" to="/">Voltar ao site ↗</Link></header><main>
    {success ? <section className="success"><span className="success-icon" aria-hidden="true">✓</span><p className="eyebrow">TUDO CERTO</p><h1 ref={heading} tabIndex="-1">Sua solicitação foi enviada!</h1><p>Um especialista da Liberty Saúde entrará em contato para ajudar você a encontrar seu plano.</p><Link className="primary" to="/">Voltar ao início</Link></section> : <>
      <div className="progress-label"><span>SUA COTAÇÃO PERSONALIZADA</span><span>Etapa {step + 1} de {steps.length}</span></div><progress value={step + 1} max={steps.length} aria-label="Progresso da cotação"/>
      <form onSubmit={next} noValidate aria-busy={sending}>
        <p className="eyebrow">VAMOS ENCONTRAR SEU PRÓXIMO PLANO</p><h1 tabIndex="-1" ref={heading}>{titles[current]}</h1>
        <p className="description">{current === 'contato' ? 'Falta pouco! Informe seus dados para receber uma cotação personalizada.' : 'Uma pergunta de cada vez, para entender o que faz sentido para você.'}</p>
        <fieldset disabled={sending}>
          {current === 'plano' && choice('possuiPlano')}
          {current === 'operadora' && input('plano_atual', 'Plano atual', { placeholder: 'Ex.: Amil, Unimed, Bradesco Saúde', required: true, maxLength: 50 })}
          {current === 'hospital' && <>{input('hospital', 'Hospital de preferência', { placeholder: 'Ex.: São Luiz, Albert Einstein', disabled: data.semHospital, required: !data.semHospital, maxLength: 200 })}{checkbox('semHospital', 'Não tenho preferência de hospital')}</>}
          {current === 'idades' && <>{input('idades', 'Idades dos beneficiários', { placeholder: 'Ex.: 35, 32, 8', required: true, inputMode: 'text', 'aria-describedby': 'age-help' })}<p id="age-help" className="hint">Inclua a idade de cada pessoa, separada por vírgula. Para bebês com menos de 1 ano, use 0.</p></>}
          {current === 'cnpj' && choice('possuiCnpj')}
          {current === 'documento' && input('cnpj', 'CNPJ', { placeholder: 'Digite os 14 números', inputMode: 'numeric', maxLength: 18, required: true })}
          {current === 'contato' && <>{input('nome', 'Nome completo *', { autoComplete: 'name', required: true, maxLength: 150 })}{input('telefone', 'Telefone com DDD *', { type: 'tel', autoComplete: 'tel', placeholder: '(11) 99999-9999', required: true, onChange: e => update('telefone', phone(e.target.value)) })}{input('email', 'E-mail (opcional)', { type: 'email', autoComplete: 'email', placeholder: 'voce@email.com', maxLength: 150 })}{checkbox('aceitaEmails', 'Quero receber ofertas e novidades por e-mail (opcional).')}{checkbox('aceitaWhatsapp', 'Autorizo contato pelo WhatsApp sobre esta cotação (opcional). Posso cancelar a qualquer momento.')}<p className="privacy">Usamos seus dados para responder à cotação e os compartilhamos quando necessário com operadoras, seguradoras e fornecedores. Não vendemos seus dados. <a href="/politica-de-privacidade.html" target="_blank" rel="noopener">Política de Privacidade</a>.</p></>}
        </fieldset>
        <div role="alert" className="error">{error}</div><div className="actions">{step > 0 && <button type="button" className="back" disabled={sending} onClick={() => { setError(''); setStep(step - 1); }}>← Voltar</button>}<button className="primary" disabled={sending} type="submit">{sending ? 'Enviando…' : current === 'contato' ? 'Solicitar minha cotação' : 'Continuar →'}</button></div>
      </form></>}
    </main><footer>Liberty Saúde · Cotação gratuita e sem compromisso</footer></div>;
}
