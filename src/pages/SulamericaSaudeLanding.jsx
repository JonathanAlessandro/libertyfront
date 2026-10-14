import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

export default function SulamericaSaudeLanding(){return <>
<Navigation className={"nav"}>
<div className={"nav-inner"}>
<div className={"nav-brandrow"}>
<Link to={"/index.html"}><img src={"/assets/images/embedded-24a207888ee2.png"} alt={"SulAmérica"} className={"nav-logo"}/></Link>
<span className={"nav-via"}>{"via"}<br/><strong>{"Liberty Saúde"}</strong></span>
</div>
<ul className={"nav-links"}>
<li><Link to={"#home"}>{"Home"}</Link></li>
<li><Link to={"#sobre"}>{"Sobre"}</Link></li>
<li><Link to={"#planos"}>{"Planos"}</Link></li>
<li><Link to={"#cobertura"}>{"Cobertura"}</Link></li>
<li><Link to={"/cotacao.html"}>{"Contato"}</Link></li>
</ul>
<Link to={"/cotacao.html"} className={"nav-cta"}>{"Solicitar cotação"}</Link>
</div>
</Navigation>
<main>
<section className={"hero"} id={"home"}>
<div className={"hero-photo"}>
<img src={"/assets/images/embedded-c811831a3767.jpeg"} alt={"Médica conversando com paciente"}/>
</div>
<div className={"hero-orb o1"}></div>
<div className={"hero-orb o2"}></div>
<div className={"hero-orb o3"}></div>
<div className={"hero-content"}>
<span className={"eyebrow"}>{"Operadora SulAmérica"}</span>
<h1>{"SulAmérica Saúde"}<span className={"accent"}>{"na sua vida. Pra vida toda."}</span></h1>
<p className={"lead"}>{"Destaque na Pesquisa de Satisfação da ANS. A escolha certa para cuidar da saúde dos seus\n          colaboradores, com ampla rede de hospitais e laboratórios, planos personalizados e coparticipação sem\n          surpresa.\n        "}</p>
<div style={{"display":"flex","gap":"16px","flexWrap":"wrap"}}>
<Link to={"/cotacao.html"} className={"btn-primary"}>{"Quero minha cotação SulAmérica"}</Link>
<Link to={"#planos"} className={"btn-ghost"}>{"Ver planos"}</Link>
</div>
</div>
</section>
<section className={"sobre"} id={"sobre"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Sobre a SulAmérica"}</span></div>
<h2>{"Mais de 130 anos de história "}<span className={"accent"}>{"cuidando da vida dos brasileiros."}</span></h2>
<p className={"sub"}>{"Fundada em 1895, no Rio de Janeiro, a SulAmérica é uma das maiores seguradoras independentes do\n        Brasil e assumiu a liderança do mercado de saúde em 1995 — posição que mantém desde então. São mais de 7 milhões\n        de clientes, entre pessoas físicas e empresas, atendidos por uma das redes mais qualificadas do país, com\n        hospitais, laboratórios e profissionais de referência. Seja para pequenas equipes ou grandes corporações, a\n        SulAmérica oferece planos personalizados, com ou sem coparticipação, organizados em três linhas de produto —\n        SulAmérica, Vital e Profissões — com a consultoria da Liberty Saúde para te ajudar a escolher a certa."}</p>
<div className={"info-grid"}>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}></path>
</svg></div>
<h3>{"+130 anos"}</h3>
<p>{"De história cuidando da saúde e do bem-estar de famílias e empresas no Brasil."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path>
<circle cx={"9"} cy={"7"} r={"4"}></circle>
<path d={"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"}></path>
</svg></div>
<h3>{"+7 milhões"}</h3>
<p>{"De clientes atendidos em todo o país, de pessoas físicas a grandes empresas."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 12h-4l-3 9L9 3l-3 9H2"}></path>
</svg></div>
<h3>{"Líder desde 1995"}</h3>
<p>{"Na liderança do mercado nacional de seguro saúde, posição mantida até hoje."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"3"} y={"4"} width={"18"} height={"16"} rx={"2"}></rect>
<path d={"M3 10h18M8 2v4M16 2v4"}></path>
</svg></div>
<h3>{"3 linhas de produto"}</h3>
<p>{"SulAmérica, Vital e Profissões — cada uma pensada para um perfil de empresa."}</p>
</div>
</div>
</section>
<section className={"linhas"} id={"linhas"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Soluções para o seu negócio"}</span></div>
<h2>{"Conheça as linhas de produto "}<span className={"accent"}>{"feitas para a sua empresa."}</span></h2>
<div className={"feature-grid"}>
<div className={"feature-card"}>
<span className={"feature-card-tag"}>{"Linha SulAmérica"}</span>
<h3>{"Planos personalizados a partir de 3 vidas"}</h3>
<p>{"Rede de excelência, flexibilidade para escolha de acomodação, além de modelos com e sem coparticipação. Um\n            cuidado completo com previsibilidade no orçamento para a sua empresa."}</p>
</div>
<div className={"feature-card"}>
<span className={"feature-card-tag"}>{"Linha Vital"}</span>
<h3>{"Planos a partir de 3 vidas"}</h3>
<p>{"Hospitais e laboratórios com excelência assistencial. Flexibilidade para escolha de acomodação, além de\n            modelos com e sem coparticipação. Um cuidado completo com mais previsibilidade no investimento em saúde."}</p>
</div>
<div className={"feature-card"}>
<span className={"feature-card-tag"}>{"Linha Profissões"}</span>
<h3>{"Plano de Saúde Hospitalar com Seguro de Vida"}</h3>
<p>{"Check-up inclusos. Contratação empresarial de 3 a 29 vidas: para médicos, dentistas, advogados,\n            engenheiros,\n            psicólogos, corretores (SUSEP) e outros profissionais. Cuidado e segurança para você e sua empresa."}</p>
</div>
</div>
</section>
<section className={"planos"} id={"planos"}>
<div className={"planos-head"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Nossos planos"}</span></div>
<h2>{"Conheça os planos "}<span className={"accent"}>{"de cada linha SulAmérica."}</span></h2>
<p>{"Clique nas linhas de produto e conheça as opções em cada uma."}</p>
</div>
<div className={"plan-tabs"}>
<button className={"plan-tab is-active"} data-tab={"sulamerica"}>{"Linha SulAmérica"}</button>
<button className={"plan-tab"} data-tab={"vital"}>{"Linha Vital"}</button>
<button className={"plan-tab"} data-tab={"profissoes"}>{"Linha Profissões"}</button>
</div>

<div className={"plan-panel is-active"} data-panel={"sulamerica"}>
<div className={"plan-accordion"}>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Direto Regional"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"A combinação ideal entre rede de excelência e um cuidado completo. Mais acessível\n                  em\n                  preço para sua empresa."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Regional com urgência e emergência nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Opções de Apartamento (com privacidade e conforto) ou excelente\n                    custo-benefício da Enfermaria (quarto coletivo). Ambos com a mesma excelência assistencial."}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li><strong>{"Hospitalar:"}</strong>{" Concentra os hospitais de referência atendidos na região."}</li>
<li><strong>{"Laboratorial:"}</strong>{" Reúne os laboratórios credenciados na área de cobertura."}</li>
<li><strong>{"Ambulatorial:"}</strong>{" Contempla clínicas e serviços ambulatoriais disponíveis na região.\n                  "}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Direto Nacional"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"Cobertura nacional com custo otimizado. A segurança da Rede Direto Nacional para o\n                  RH, garantindo atendimento em qualquer região do país com custo que cabe no orçamento da sua empresa.\n                "}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Enfermaria e Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+850 Hospitais"}</li>
<li>{"+1.175 Laboratórios"}</li>
<li>{"+13.390 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Exato"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"Oferece o equilíbrio que seu RH precisa: qualidade SulAmérica e cobertura nacional\n                  para os colaboradores, com custo que cabe no orçamento da sua empresa."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Enfermaria e Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.125 Hospitais"}</li>
<li>{"+2.165 Laboratórios"}</li>
<li>{"+16.020 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Clássico 100"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"O que já era Clássico, ficou ainda melhor! A solução para o RH que busca rede ampla\n                  e\n                  flexibilidade em saúde como diferencial competitivo."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Enfermaria"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.185 Hospitais"}</li>
<li>{"+2.245 Laboratórios"}</li>
<li>{"+16.240 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Especial 100"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"A solução ideal para empresas que buscam cuidado de qualidade para seus\n                  colaboradores, com ampla rede credenciada nacional."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas,\n                    honorários médicos, entre outros)"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
<li><strong>{"Coleta domiciliar:"}</strong>{" Atendimento no conforto de casa pelo LabIN"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.219 Hospitais"}</li>
<li>{"+2.266 Laboratórios"}</li>
<li>{"+16.340 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Especial Mais"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"Solução em saúde para empresas que buscam amplo acesso à rede credenciada,\n                  incluindo\n                  o Hospital Vila Nova Star, de alto padrão e máximo conforto."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas,\n                    honorários médicos, entre outros)"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
<li><strong>{"Coleta domiciliar:"}</strong>{" Atendimento no conforto de casa pelo LabIN"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.221 Hospitais"}</li>
<li>{"+2.275 Laboratórios"}</li>
<li>{"+16.345 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Executivo"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"O plano certo para empresas que buscam oferecer um atendimento diferenciado e de\n                  alto\n                  nível em saúde."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas,\n                    honorários médicos, entre outros)"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Seguro viagem:"}</strong>{" Seguro Viagem Internacional"}</li>
<li><strong>{"Coleta domiciliar:"}</strong>{" Atendimento no conforto de casa pelo LabIN"}</li>
<li><strong>{"Check-up:"}</strong>{" Exames preventivos completos para titular"}</li>
<li><strong>{"Atendimento Exclusivo:"}</strong>{" Concierge SulAmérica e Central Exclusiva"}</li>
<li><strong>{"Sala VIP:"}</strong>{" Atendimento exclusivo"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.235 Hospitais, incluindo Rede Star, Hospital Israelita Einstein e Sírio-Libanês"}</li>
<li>{"+2.285 Laboratórios"}</li>
<li>{"+16.420 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Prestige"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"Uma experiência em saúde de alto padrão para quem valoriza atendimento completo e\n                  exclusivo."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas,\n                    honorários médicos, entre outros)"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Seguro viagem:"}</strong>{" Seguro Viagem Internacional"}</li>
<li><strong>{"Coleta domiciliar:"}</strong>{" Atendimento no conforto de casa pelo LabIN"}</li>
<li><strong>{"Check-up:"}</strong>{" Exames preventivos completos para titular e dependentes"}</li>
<li><strong>{"Atendimento Exclusivo:"}</strong>{" Concierge SulAmérica e Central Exclusiva"}</li>
<li><strong>{"Sala VIP:"}</strong>{" Atendimento exclusivo"}</li>
<li><strong>{"Atendimento Domiciliar:"}</strong>{" Consulta e Fisioterapia domiciliar (via reembolso)"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.235 Hospitais, incluindo Rede Star, Hospital Israelita Einstein e Sírio-Libanês"}</li>
<li>{"+2.285 Laboratórios"}</li>
<li>{"+16.430 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
</div>
<p style={{"textAlign":"center","marginTop":"22px","fontSize":"13px","color":"var(--ink-soft)"}}>{"Rede, coparticipação e\n          carências variam por praça e produto. "}<Link to={"/cotacao.html"} style={{"color":"var(--orange)","fontWeight":"600"}}>{"Fale\n            com\n            um especialista Liberty Saúde"}</Link>{" para uma simulação sob medida."}</p>
</div>

<div className={"plan-panel"} data-panel={"vital"}>
<div className={"plan-accordion"}>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Clássico Vital"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"Qualidade e acesso aos quais você já está acostumado, com foco ainda maior na sua\n                  rede hospitalar de preferência e na eficiência que você busca."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Enfermaria"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.155 Hospitais"}</li>
<li>{"+2.245 Laboratórios"}</li>
<li>{"+16.240 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Especial Vital"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"Cobertura nacional e rede hospitalar diferenciada: a solução completa em saúde para\n                  sua empresa."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas,\n                    honorários médicos, entre outros)"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
<li><strong>{"Coleta domiciliar:"}</strong>{" Atendimento no conforto de casa pelo LabIN"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.175 Hospitais"}</li>
<li>{"+2.266 Laboratórios"}</li>
<li>{"+16.340 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Especial Mais Vital"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"O plano entrega a excelência de uma rede premium, garantindo acesso a uma seleção\n                  de\n                  hospitais renomados e de referência nacional."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas,\n                    honorários médicos, entre outros)"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento, consultas médicas nas diferentes\n                    especialidades\n                    e terapeutas."}</li>
<li><strong>{"Seguro viagem:"}</strong>{" Seguro Viagem Internacional"}</li>
<li><strong>{"Coleta domiciliar:"}</strong>{" Atendimento no conforto de casa pelo LabIN"}</li>
<li><strong>{"Vacinas:"}</strong>{" Vacinas do calendário OMS e Viajante"}</li>
<li><strong>{"Check-up:"}</strong>{" Exames preventivos completos para titular"}</li>
<li><strong>{"Atendimento Exclusivo:"}</strong>{" Concierge SulAmérica e Central Exclusiva"}</li>
<li><strong>{"Sala VIP:"}</strong>{" Atendimento exclusivo"}</li>
</ul>
<h5>{"Rede de Atendimento"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.177 Hospitais"}</li>
<li>{"+2.275 Laboratórios"}</li>
<li>{"+16.345 Ambulatórios"}</li>
</ul>
</div>
</div>
</div>
</div>
<p style={{"textAlign":"center","marginTop":"22px","fontSize":"13px","color":"var(--ink-soft)"}}>{"Rede, coparticipação e\n          carências variam por praça e produto. "}<Link to={"/cotacao.html"} style={{"color":"var(--orange)","fontWeight":"600"}}>{"Fale\n            com\n            um especialista Liberty Saúde"}</Link>{" para uma simulação sob medida."}</p>
</div>

<div className={"plan-panel"} data-panel={"profissoes"}>
<div className={"plan-accordion"}>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Especial 100 Profissões"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"O plano de saúde ideal para quem busca conforto, oferecendo uma rede de atendimento\n                  robusta e capilarizada para garantir assistência completa e necessária."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas de\n                    urgência e emergência e honorários médicos)"}</li>
<li><strong>{"Seguro de vida:"}</strong>{" Seguro de vida e Assistências"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento"}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
<li><strong>{"Seguro viagem:"}</strong>{" Seguro Viagem Internacional"}</li>
</ul>
<h5>{"Rede Hospitalar"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.219 hospitais"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Especial Mais Profissões"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"Conforto e exclusividade para seus colaboradores, com acesso ao Hospital Vila Nova\n                  Star e uma estrutura desenhada para oferecer atenção total em cada etapa."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas de\n                    urgência e emergência e honorários médicos)"}</li>
<li><strong>{"Seguro de vida:"}</strong>{" Seguro de vida e Assistências"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento"}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
<li><strong>{"Seguro viagem:"}</strong>{" Seguro Viagem Internacional"}</li>
<li><strong>{"Vacinas:"}</strong>{" Vacinas do calendário OMS e Viajante"}</li>
<li><strong>{"Check-up:"}</strong>{" Exames preventivos completos para titular"}</li>
<li><strong>{"Atendimento Exclusivo:"}</strong>{" Concierge SulAmérica e Central Exclusiva"}</li>
<li><strong>{"Sala VIP:"}</strong>{" Atendimento exclusivo"}</li>
</ul>
<h5>{"Rede Hospitalar"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.235 hospitais, com atendimento na Rede Star"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Executivo Profissões"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"O plano ideal para empresas que buscam oferecer uma rede de atendimento\n                  diferenciada\n                  e de alto nível em saúde."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas de\n                    urgência e emergência e honorários médicos)"}</li>
<li><strong>{"Seguro de vida:"}</strong>{" Seguro de vida e Assistências"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento"}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
<li><strong>{"Seguro viagem:"}</strong>{" Seguro Viagem Internacional"}</li>
<li><strong>{"Vacinas:"}</strong>{" Vacinas do calendário OMS e Viajante"}</li>
<li><strong>{"Check-up:"}</strong>{" Exames preventivos completos para titular"}</li>
<li><strong>{"Atendimento Exclusivo:"}</strong>{" Concierge SulAmérica e Central Exclusiva"}</li>
<li><strong>{"Sala VIP:"}</strong>{" Atendimento exclusivo"}</li>
</ul>
<h5>{"Rede Hospitalar"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.235 hospitais, com atendimento na Rede Star, Hospital Israelita Einstein e Sírio-Libanês"}</li>
</ul>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Prestige Profissões"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<p className={"plan-desc"}>{"O plano oferece um universo de serviços de alto padrão para quem valoriza uma\n                  experiência única em saúde."}</p>
<h5>{"Características"}</h5>
<ul className={"plan-char-list"}>
<li><strong>{"Abrangência:"}</strong>{" Rede Nacional"}</li>
<li><strong>{"Acomodação:"}</strong>{" Apartamento"}</li>
<li><strong>{"Coparticipação:"}</strong>{" Opcional"}</li>
<li><strong>{"Reembolso:"}</strong>{" Personalizável conforme tipo de atendimento (consultas médicas de\n                    urgência e emergência e honorários médicos)"}</li>
<li><strong>{"Seguro de vida:"}</strong>{" Seguro de vida e Assistências"}</li>
<li><strong>{"Saúde na tela:"}</strong>{" Pronto atendimento"}</li>
<li><strong>{"Assistência viagem:"}</strong>{" Assistência viagem nacional"}</li>
<li><strong>{"Seguro viagem:"}</strong>{" Seguro Viagem Internacional"}</li>
<li><strong>{"Vacinas:"}</strong>{" Vacinas do calendário OMS e Viajante"}</li>
<li><strong>{"Check-up:"}</strong>{" Exames preventivos completos para titular e dependentes"}</li>
<li><strong>{"Atendimento Exclusivo:"}</strong>{" Concierge SulAmérica e Central Exclusiva"}</li>
<li><strong>{"Sala VIP:"}</strong>{" Atendimento exclusivo"}</li>
</ul>
<h5>{"Rede Hospitalar"}</h5>
<ul className={"plan-rede-list"}>
<li>{"+1.235 hospitais, com atendimento na Rede Star, Hospital Israelita Einstein e Sírio-Libanês"}</li>
</ul>
</div>
</div>
</div>
</div>
<p style={{"textAlign":"center","marginTop":"22px","fontSize":"13px","color":"var(--ink-soft)"}}>{"Rede, coparticipação e\n          carências variam por praça e produto. "}<Link to={"/cotacao.html"} style={{"color":"var(--orange)","fontWeight":"600"}}>{"Fale\n            com\n            um especialista Liberty Saúde"}</Link>{" para uma simulação sob medida."}</p>
</div>
</section>
<section className={"coverage"} id={"cobertura"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Proteção e cuidado onde estiver"}</span></div>
<h2>{"Rede de atendimento "}<span className={"accent"}>{"em todo o Brasil."}</span></h2>
<p className={"sub"}>{"Uma das maiores e mais qualificadas redes de atendimento do país. Presença nacional para garantir\n        cuidado, acesso e qualidade onde sua equipe estiver."}</p>
<p className={"coverage-note"}>{"* Consulte a rede conforme o plano contratado."}</p>
<div className={"coverage-stat-row"}>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"+14 mil"}</div>
<div className={"coverage-stat-label"}>{"Hospitais, clínicas e consultórios"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"+2,5 mil"}</div>
<div className={"coverage-stat-label"}>{"Laboratórios"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"+55 mil"}</div>
<div className={"coverage-stat-label"}>{"Médicos e terapeutas"}</div>
</div>
</div>
<div className={"network-grid logo-grid"}>
<div className={"logo-card"}><img src={"/assets/images/embedded-ffe8c9bb3737.png"} alt={"Hospital São Luiz"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-482a789ddfa9.png"} alt={"Hospital Vila Nova Star"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-003af961aca6.png"} alt={"São Luiz Star Maternidade"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-6fce0c8353f5.png"} alt={"Hospital Santa Catarina Paulista"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-0164add77d2d.png"} alt={"Sabará Hospital Infantil"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-6208f35e5ce0.png"} alt={"A.C.Camargo Cancer Center"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-1853c63eb337.png"} alt={"DF Star Rede D'Or"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-326ffd6c1293.png"} alt={"CDB Medicina Diagnóstica"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-37c838a15b33.png"} alt={"Alta Diagnósticos"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-000b3e1e47db.png"} alt={"Delboni Medicina Diagnóstica"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-7171b35843b2.png"} alt={"Glória D'Or Hospital"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-cc746e74c679.png"} alt={"Hospital e Maternidade Santa Joana"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-48e7d3292af0.png"} alt={"Richet"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-896baa8cf830.png"} alt={"a+ Medicina Diagnóstica"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-caf3131e0580.png"} alt={"Hospital Balbino"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-390e99fdd9ee.png"} alt={"Jutta Batista Hospital Pediátrico"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-af8001fb702c.png"} alt={"Barra D'Or Hospital"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-bc9da93e9c0a.png"} alt={"Copa D'Or Hospital"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-514f680040a9.png"} alt={"CEMA"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-a76043bcaaad.png"} alt={"Hospital Vera Cruz"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-81d44e074e48.png"} alt={"Hospital Villa Lobos"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-b8a571e2c13b.png"} alt={"Hospital São Lucas"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-388410501192.png"} alt={"Hermes Pardini"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-b625d1892c51.png"} alt={"Hospital São Carlos"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-a283fb947b52.png"} alt={"Hospital Gênesis"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-e726b5509482.png"} alt={"São Camilo Hospital Cura d'Ars"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-ea6ed27e08fe.png"} alt={"Clínica Felippe Mattoso"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-2bf205fb8f4e.png"} alt={"Sabin Diagnóstico e Saúde"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-2218b73bce36.png"} alt={"Oto Santos Dumont"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-429aa2a25875.png"} alt={"Lavoisier Laboratório e Imagem"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-4b5b4c882f8f.png"} alt={"Confiance Medicina Diagnóstica"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-5d9b22595dda.png"} alt={"Oto Kora Saúde"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-c82ce61388d6.png"} alt={"RCC"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-e669957dde0e.png"} alt={"Oto Meireles"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-9e2a55f94163.png"} alt={"Salomão Zoppi Medicina Diagnóstica"}/></div>
<div className={"logo-card"}><img src={"/assets/images/embedded-def4989a90eb.png"} alt={"LabPasteur Medicina Diagnóstica"}/></div>
</div>
</section>
<section className={"form-section"} id={"contato"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Por que escolher a SulAmérica pela Liberty Saúde?"}</span>
<h2>{"A SulAmérica, com a consultoria "}<span className={"accent"}>{"da Liberty ao seu lado."}</span></h2>
<ul className={"form-list"}>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Cotação personalizada para você ou sua empresa"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Ajuda para escolher entre Linha SulAmérica, Vital e Profissões"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Comparação com outras operadoras do mercado"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Suporte em todas as etapas da contratação"}</li>
</ul>
<div className={"form-callout"}>
<div className={"form-callout-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path>
</svg></div>
<div>
<div className={"form-callout-title"}>{"Fale agora com um especialista"}</div>
<a href={"https://wa.me/5511945189498"} target={"_blank"} rel={"noopener"} className={"form-callout-value"}>{"(11)\n                94518-9498"}</a>
</div>
</div>
</div>
<div className={"form-card"}><h3>{"Sua cotação, uma pergunta de cada vez"}</h3><p>{"Conte o que você precisa e receba uma proposta personalizada."}</p><Link className={"btn-primary"} to={"/cotacao.html"}>{"Começar minha cotação"}</Link></div>
</div>
</section>
</main>
<footer className={"footer"}>
<div className={"footer-top"}>
<div className={"footer-brandrow"}>
<img src={"/assets/images/embedded-24a207888ee2.png"} alt={"SulAmérica"} className={"footer-logo"}/>
<span className={"footer-via"}>{"via"}<br/><strong>{"Liberty Saúde"}</strong></span>
</div>
<div className={"footer-contacts"}>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path>
</svg></div>
<div>
<div className={"footer-contact-title"}>{"(11) 98915-2642"}</div>
<div className={"footer-contact-sub"}>{"Fale no WhatsApp"}</div>
</div>
</div>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"2"} y={"4"} width={"20"} height={"16"} rx={"2"}></rect>
<path d={"m22 6-10 7L2 6"}></path>
</svg></div>
<div>
<div className={"footer-contact-title"}>{"comercial@libertysaude.com.br"}</div>
<div className={"footer-contact-sub"}>{"Envie um e-mail"}</div>
</div>
</div>
</div>
</div>
<div className={"footer-bottom"}>
<p>{"© 2026 Liberty Saúde Corretora de Seguros. SulAmérica é marca de sua respectiva operadora — condições sujeitas\n        a análise e aprovação."}</p>
</div>
</footer>
<a href={"https://wa.me/5511989152642?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20plano%20SulAm%C3%A9rica."} target={"_blank"} rel={"noopener"} className={"wa-float"} id={"waFloatBtn"} aria-label={"Falar no WhatsApp"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>



</>;}
