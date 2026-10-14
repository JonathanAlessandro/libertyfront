import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import ChatWidget from '../components/ChatWidget.jsx';

export default function ComparativoPlanosDeSaude(){return <>
<div className={"top-block"} id={"topo"} style={{"paddingBottom":"60px"}}>
<div id="navbar-container"><Navbar/></div>
<section className={"hero"} style={{"paddingBottom":"40px"}}>
<div className={"hero-grid"} style={{"gridTemplateColumns":"1fr"}}>
<div className={"hero-content"} style={{"textAlign":"center","maxWidth":"760px","margin":"0 auto"}}>
<span className={"eyebrow on-navy"}>{"Guia comparativo"}</span>
<h1>{"Comparativo de planos de saúde"}<span className={"accent"}>{"qual operadora combina com você?"}</span></h1>
<p className={"lead"} style={{"marginLeft":"auto","marginRight":"auto"}}>{"Reunimos o que observar antes de\n                        contratar e como as principais operadoras do mercado se posicionam, pra você decidir com mais\n                        segurança."}</p>
<div className={"hero-actions"}>
<Link className={"btn-primary"} to={"/cotacao.html"}>{"Quero uma cotação comparativa"}</Link>
</div>
</div>
</div>
</section>
</div>
<section className={"article-section"}>
<div className={"article-wrap"}>
<p className={"intro"}>{"Não existe uma operadora \"melhor\" de forma absoluta — cada uma tem pontos fortes\n                diferentes, e a escolha certa depende do seu orçamento, da sua região e do que você mais valoriza:\n                rede de hospitais, preço, tecnologia ou reembolso. Este guia resume o perfil geral de cada operadora\n                com quem trabalhamos, pra facilitar sua comparação."}</p>
<h2>{"Visão geral das principais operadoras"}</h2>
<div className={"compare-table-wrap"}>
<table className={"compare-table"}>
<thead>
<tr>
<th>{"Operadora"}</th>
<th>{"Perfil geral"}</th>
<th>{"Indicado para"}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{"Bradesco Saúde"}</td>
<td>{"Rede ampla e presença forte no segmento empresarial, com opções de reembolso."}</td>
<td>{"Empresas de todos os portes e quem valoriza reembolso."}</td>
</tr>
<tr>
<td>{"SulAmérica"}</td>
<td>{"Operadora tradicional, com boa relação entre custo e abrangência de rede."}</td>
<td>{"Famílias e profissionais liberais que buscam equilíbrio."}</td>
</tr>
<tr>
<td>{"Amil"}</td>
<td>{"Ampla rede própria e credenciada, presente em grandes centros urbanos."}</td>
<td>{"Quem prioriza acesso a hospitais de referência."}</td>
</tr>
<tr>
<td>{"Hapvida NotreDame"}</td>
<td>{"Modelo verticalizado (hospitais e clínicas próprios), com foco em custo acessível."}</td>
<td>{"Quem busca um plano com bom custo-benefício."}</td>
</tr>
<tr>
<td>{"Unimed"}</td>
<td>{"Cooperativa médica com forte presença nacional; a qualidade varia por unidade regional."}</td>
<td>{"Quem quer cobertura ampla, inclusive fora das capitais."}</td>
</tr>
<tr>
<td>{"Porto Saúde"}</td>
<td>{"Consolidando presença no mercado, com bom desempenho no segmento empresarial."}</td>
<td>{"Empresas em busca de uma alternativa mais recente no mercado."}</td>
</tr>
</tbody>
</table>
</div>
<p style={{"fontSize":"13px","color":"var(--ink-soft)","marginTop":"-24px","marginBottom":"40px"}}>{"Perfis gerais de\n                mercado, sujeitos a mudança conforme a região e o plano específico. Recomendamos sempre confirmar\n                cobertura, rede e valores atualizados na cotação."}</p>
<h2>{"O que avaliar antes de contratar"}</h2>
<ul className={"checklist"}>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg><span><b>{"Rede credenciada na sua região"}</b>{" — confirme se os hospitais e laboratórios que você usaria estão cobertos perto de você."}</span></li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg><span><b>{"Coparticipação"}</b>{" — alguns planos cobram uma taxa extra por uso; isso pode baixar a mensalidade, mas eleva o custo se você usa o plano com frequência."}</span></li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg><span><b>{"Carência"}</b>{" — prazos definidos pela ANS variam por procedimento; portabilidade pode ajudar se você já tem outro plano."}</span></li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg><span><b>{"Abrangência"}</b>{" — nacional ou regional, dependendo de onde você viaja ou pretende morar."}</span></li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg><span><b>{"Reembolso"}</b>{" — útil se você quer liberdade para escolher médicos fora da rede credenciada."}</span></li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg><span><b>{"Reputação"}</b>{" — vale conferir indicadores públicos como o IDSS da ANS e avaliações no Reclame Aqui."}</span></li>
</ul>
<div className={"cta-band"}>
<h3>{"Não sabe qual operadora escolher?"}</h3>
<p>{"Fazemos a comparação pra você, sem custo e sem compromisso."}</p>
<Link className={"btn-primary"} to={"/cotacao.html"}>{"Comparar planos agora"}</Link>
</div>
</div>
</section>
<section className={"faq-section"} id={"faq"}>
<div className={"faq-wrap"}>
<div className={"faq-header"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Dúvidas frequentes"}</span></div>
<h2>{"Perguntas sobre "}<span className={"accent"}>{"comparação de planos."}</span></h2>
</div>
<div className={"faq-item"}>
<h3>{"Qual é o melhor plano de saúde do Brasil?"}</h3>
<p>{"Não existe um \"melhor plano\" universal — cada operadora tem pontos fortes diferentes. O ideal\n                    depende do seu orçamento, região e prioridades. Fazemos uma comparação personalizada gratuita\n                    para o seu caso."}</p>
</div>
<div className={"faq-item"}>
<h3>{"Como comparar planos de saúde antes de contratar?"}</h3>
<p>{"Observe rede credenciada na sua região, coparticipação, carência, abrangência, reembolso e\n                    avaliação da operadora na ANS e no Reclame Aqui. Podemos comparar tudo isso por você, sem\n                    custo."}</p>
</div>
<div className={"faq-item"}>
<h3>{"Amil ou Bradesco Saúde: qual escolher?"}</h3>
<p>{"Depende do perfil: avalie a rede credenciada na sua cidade, se você prioriza reembolso, e o\n                    orçamento disponível. Recomendamos comparar cotações reais das duas antes de decidir."}</p>
</div>
</div>
</section>
<section className={"form-section"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Por que escolher a Liberty Saúde?"}</span>
<h2>{"Mais que corretora, "}<span className={"accent"}>{"compromisso com você."}</span></h2>
<ul className={"form-list"}>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg>{"Comparação imparcial entre operadoras"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg>{"Atendimento rápido e humanizado"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg>{"Soluções sob medida para o seu perfil"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}><path d={"M20 6 9 17l-5-5"}></path></svg>{"Atuação em todo o território nacional"}</li>
</ul>
<div className={"form-callout"}>
<div className={"form-callout-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}><path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path></svg></div>
<div>
<div className={"form-callout-title"}>{"Fale agora com um especialista"}</div>
<a className={"form-callout-value"} href={"https://wa.me/5511945189498"} rel={"noopener"} target={"_blank"}>{"(11) 94518-9498"}</a>
</div>
</div>
</div>
<div className={"form-card"}><h3>{"Sua cotação, uma pergunta de cada vez"}</h3><p>{"Conte o que você precisa e receba uma proposta personalizada."}</p><Link className={"btn-primary"} to={"/cotacao.html"}>{"Começar minha cotação"}</Link></div>
</div>
</section>
<ChatWidget className={"chat-widget"} id={"chatWidget"}>
<div className={"chat-widget-header"}>
<div className={"chat-widget-avatar"}>
<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><circle cx={"12"} cy={"8"} r={"4"}></circle><path d={"M4 21c0-4 3.6-7 8-7s8 3 8 7"}></path></svg>
</div>
<div>
<div className={"chat-widget-name"}>{"Ana · Liberty Saúde"}</div>
<div className={"chat-widget-status"}>{"Online agora"}</div>
</div>
<button className={"chat-widget-close"} id={"chatCloseBtn"} aria-label={"Fechar chat"}>{"✕"}</button>
</div>
<div className={"chat-widget-body"} id={"chatBody"}>
<div className={"chat-bubble-row"}>
<div className={"chat-bubble-avatar"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><circle cx={"12"} cy={"8"} r={"4"}></circle><path d={"M4 21c0-4 3.6-7 8-7s8 3 8 7"}></path></svg></div>
<div className={"chat-bubble"}>{"Oi, tudo bem? 😊"}</div>
</div>
<div className={"chat-bubble-row delay1"}>
<div className={"chat-bubble-avatar"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><circle cx={"12"} cy={"8"} r={"4"}></circle><path d={"M4 21c0-4 3.6-7 8-7s8 3 8 7"}></path></svg></div>
<div className={"chat-bubble"}>{"Quer que eu compare os planos pra você agora mesmo, direto no WhatsApp?"}</div>
</div>
<div className={"chat-cta-wrap"}>
<button className={"chat-cta-btn"} id={"chatCtaBtn"}>{"\n                    SIM, EU QUERO!\n                    "}<svg viewBox={"0 0 24 24"} fill={"none"} stroke={"#fff"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M5 12h14M13 6l6 6-6 6"}></path></svg>
</button>
<p className={"chat-fineprint"}>{"Não vendemos seus dados. Veja nossa "}<Link to={"/politica-de-privacidade.html"}>{"Política de Privacidade"}</Link>{"."}</p>
</div>
</div>
</ChatWidget>
<footer className={"footer"}>
<div className={"footer-top"}>
<img alt={"Liberty Saúde Corretora de Planos de Saúde - Sua corretora de seguros saúde"} className={"footer-logo"} src={"/assets/images/image-c0cd7413fee8.png"}/>
<div className={"footer-contacts"}>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}><path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path></svg></div>
<div>
<div className={"footer-contact-title"}>{"(11) 98915-2642"}</div>
<div className={"footer-contact-sub"}>{"Fale no WhatsApp"}</div>
</div>
</div>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}><rect height={"16"} rx={"2"} width={"20"} x={"2"} y={"4"}></rect><path d={"m22 6-10 7L2 6"}></path></svg></div>
<div>
<div className={"footer-contact-title"}>{"comercial@libertysaude.com.br"}</div>
<div className={"footer-contact-sub"}>{"Envie um e-mail"}</div>
</div>
</div>
</div>
</div>
<div className={"footer-bottom"}>
<p>{"© 2026 Liberty Saúde Corretora de Seguros. Todos os direitos reservados."}</p>
</div>
</footer>
<a aria-label={"Falar no WhatsApp"} className={"wa-float"} href={"https://wa.me/5511989152642?text=Ol%C3%A1!%20Gostaria%20de%20comparar%20planos%20de%20sa%C3%BAde."} rel={"noopener"} target={"_blank"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>


</>;}
