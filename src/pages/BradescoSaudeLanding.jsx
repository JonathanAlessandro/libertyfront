import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

export default function BradescoSaudeLanding(){return <>
<Navigation className={"nav"}>
<div className={"nav-inner"}>
<div className={"nav-logo-wrap"}>
<Link to={"/index.html"}><img src={"/assets/images/embedded-eda00eb5a181.png"} alt={"Bradesco Saúde"} className={"nav-logo"}/></Link>
<div className={"nav-logo-divider"}></div>
<div className={"nav-logo-via"}><span>{"via"}</span><span>{"Liberty Saúde"}</span></div>
</div>
<ul className={"nav-links"}>
<li><Link to={"#home"}>{"Home"}</Link></li>
<li><Link to={"#sobre"}>{"Sobre"}</Link></li>
<li><Link to={"#diferenciais"}>{"Diferenciais"}</Link></li>
<li><Link to={"#planos"}>{"Planos"}</Link></li>
<li><Link to={"#rede-credenciada"}>{"Rede credenciada"}</Link></li>
<li><Link to={"/cotacao.html"}>{"Contato"}</Link></li>
</ul>
<Link to={"/cotacao.html"} className={"nav-cta"}>{"Solicitar cotação"}</Link>
</div>
</Navigation>
<main>
<section className={"hero"} id={"home"}>
<div className={"hero-photo"}>
<img src={"/assets/images/embedded-c8ba8a1d04fd.png"} alt={"Atendimento médico Bradesco Saúde"}/>
</div>
<div className={"hero-orb o1"}></div>
<div className={"hero-orb o2"}></div>
<div className={"hero-orb o3"}></div>
<div className={"hero-content"}>
<span className={"eyebrow"}>{"Bradesco Saúde"}</span>
<h1>{"Cuidado que acompanha "}<span className={"accent"}>{"sua empresa em todo o Brasil."}</span></h1>
<p className={"lead"}>{"Planos de saúde empresariais com cobertura nacional ou regional, rede de excelência,\n          telemedicina\n          e programas de bem-estar pensados para o seu time."}</p>
<div style={{"display":"flex","gap":"16px","flexWrap":"wrap"}}>
<Link to={"/cotacao.html"} className={"btn-primary"}>{"Quero minha cotação Bradesco Saúde"}</Link>
<Link to={"#planos"} className={"btn-ghost"}>{"Ver planos"}</Link>
</div>
</div>
</section>
<section className={"sobre"} id={"sobre"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Sobre a Bradesco Saúde"}</span></div>
<h2>{"Parte do Grupo Bradesco Seguros, "}<span className={"accent"}>{"líder no Brasil e na América Latina."}</span></h2>
<p className={"sub"}>{"O Grupo Bradesco Seguros trabalha para oferecer as melhores soluções de proteção e o melhor\n        atendimento a quem confia em nós. Com atuação multilinha, reunimos seguro auto, residencial, plano de saúde,\n        dental, capitalização, vida e previdência em um portfólio diversificado. A Bradesco Saúde nasce dessa força:\n        planos empresariais com cobertura nacional ou regional, rede qualificada e uma experiência cada vez mais digital\n        para simplificar a rotina do seu RH."}</p>
<div className={"info-grid"}>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 12h-4l-3 9L9 3l-3 9H2"}></path>
</svg></div>
<h3>{"Líder de mercado"}</h3>
<p>{"Uma das maiores seguradoras do Brasil e da América Latina, com atuação multilinha."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path>
<circle cx={"9"} cy={"7"} r={"4"}></circle>
<path d={"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"}></path>
</svg></div>
<h3>{"Milhões de clientes"}</h3>
<p>{"Atendimento em todo o Brasil, de pequenas empresas a grandes corporações."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"3"} y={"4"} width={"18"} height={"16"} rx={"2"}></rect>
<path d={"M3 10h18M8 2v4M16 2v4"}></path>
</svg></div>
<h3>{"Cobertura nacional e regional"}</h3>
<p>{"Planos pensados para cada perfil de empresa, com rede em todo o país ou por região."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}></path>
</svg></div>
<h3>{"Multilinha"}</h3>
<p>{"Saúde, dental, vida e previdência sob o mesmo grupo, com a solidez do Bradesco."}</p>
</div>
</div>
</section>
<section className={"diferenciais"} id={"diferenciais"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Diferenciais e benefícios"}</span></div>
<h2>{"Tudo o que os planos "}<span className={"accent"}>{"Bradesco Saúde oferecem para o seu time."}</span></h2>
<div className={"feature-grid"}>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"}></path>
</svg></div>
<h3>{"Abrangência nacional e regional"}</h3>
<p>{"Atendimento de saúde de acordo com a necessidade da sua empresa, com a qualidade que só a Bradesco Saúde\n            tem.\n          "}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 12h-4l-3 9L9 3l-3 9H2"}></path>
</svg></div>
<h3>{"Cobertura completa"}</h3>
<p>{"Urgência e emergência, consultas, exames, terapias, internações, cirurgias e parto."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M6 2v6l-2 4v10h16V12l-2-4V2"}></path>
<path d={"M6 12h12"}></path>
</svg></div>
<h3>{"Quarto individual ou enfermaria"}</h3>
<p>{"Opção de acomodação para os colaboradores, com conforto e qualidade no atendimento."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 1 0-7.65 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 0 0 0-7.65z"}></path>
</svg></div>
<h3>{"Meu Doutor Novamed"}</h3>
<p>{"Consultas e exames em diversas especialidades em um só lugar, para cuidar da saúde com facilidade."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"2"} y={"4"} width={"20"} height={"16"} rx={"2"}></rect>
<path d={"m22 6-10 7L2 6"}></path>
</svg></div>
<h3>{"Telemedicina"}</h3>
<p>{"Atendimento à distância com médicos de diversas especialidades e psicólogos."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}></path>
</svg></div>
<h3>{"Programas de saúde"}</h3>
<p>{"Acolhimento à pessoa com TEA, Meu Doutor e Juntos pela Saúde para cuidar da sua empresa."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}></path>
</svg></div>
<h3>{"Clube+Saúde"}</h3>
<p>{"Descontos, cashback e outros benefícios relacionados à saúde e ao bem-estar."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M4 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"}></path>
<path d={"M8 4h8v4H8z"}></path>
</svg></div>
<h3>{"Carteirinha única"}</h3>
<p>{"Na contratação simultânea do plano de saúde e dental, tenha uma única carteirinha de identificação."}</p>
</div>
</div>
</section>
<section className={"planos"} id={"planos"}>
<div className={"planos-head"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Nossos planos"}</span></div>
<h2>{"Planos Bradesco Saúde com "}<span className={"accent"}>{"cobertura nacional ou regional."}</span></h2>
<p>{"Com contratação para CNPJ e CAEPFs a partir de 3 pessoas, escolha a cobertura ideal para a sua empresa."}</p>
</div>
<div className={"plan-tabs"}>
<button className={"plan-tab is-active"} data-tab={"nacional"}>{"Cobertura Nacional"}</button>
<button className={"plan-tab"} data-tab={"regional"}>{"Cobertura Regional"}</button>
</div>

<div className={"plan-panel is-active"} data-panel={"nacional"}>
<p className={"plan-note"}>{"Sua empresa pode ter como benefício um plano de saúde com atendimento em todo o Brasil."}</p>
<div className={"plan-card-grid"}>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7z"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Plano Premium"}</h3>
<p>{"Garante atendimento em todas as regiões do Brasil e os serviços exclusivos do Bradesco Saúde Concierge.\n                Reembolso de despesas em todo o território nacional ou no exterior."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M3 21h18M5 21V7l7-4 7 4v14M9 9h1M9 13h1M14 9h1M14 13h1M9 21v-4h6v4"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Plano Nacional Plus"}</h3>
<p>{"Garante assistência em todo o Brasil e serviços exclusivos do Bradesco Saúde Concierge, com reembolso\n                de\n                custos no país ou no exterior."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<circle cx={"12"} cy={"12"} r={"9"}></circle>
<path d={"M12 7v5l3 3"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Plano Nacional"}</h3>
<p>{"Ideal para empresas que querem oferecer o melhor atendimento aos funcionários, com ampla rede em todas\n                as\n                regiões e reembolso no Brasil e no exterior."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}></path>
<circle cx={"12"} cy={"7"} r={"4"}></circle>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Plano Ideal"}</h3>
<p>{"Atendimento de abrangência nacional que alia quantidade e qualidade na medida certa, com diversas\n                opções\n                de prestadores em todas as regiões do Brasil."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Plano Flex"}</h3>
<p>{"Ideal para quem quer oferecer aos funcionários atendimento em todas as regiões do Brasil, com reembolso\n                de despesas médicas em território nacional."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"2"} y={"4"} width={"20"} height={"16"} rx={"2"}></rect>
<path d={"m22 6-10 7L2 6"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Efetivo Plus"}</h3>
<p>{"Um plus para a sua rede: presença nacional, com rede com ainda mais opções de atendimento,\n                especialmente\n                desenhada para a sua região."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M4.8 4.8a4 4 0 0 1 6.4-1L12 4.6l.8-.8a4 4 0 1 1 5.7 5.6L12 15.8 5.5 9.4a4 4 0 0 1-.7-4.6z"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Plano Efetivo"}</h3>
<p>{"Com o Efetivo, os funcionários da sua empresa têm atendimento em todas as regiões do Brasil, com\n                possibilidade de reembolso de despesas em território nacional."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
</div>
</div>

<div className={"plan-panel"} data-panel={"regional"}>
<p className={"plan-note"}>{"Conte com cobertura em grupos de municípios com a qualidade que só a Bradesco Saúde tem.\n          Contrate a partir de 3 pessoas com o seu CNPJ ou CAEPF."}</p>
<div className={"plan-card-grid"}>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Saúde+"}</h3>
<p>{"Atendimento nas capitais do Rio de Janeiro e de São Paulo e seu entorno, com Central de Agendamento\n                exclusiva e reembolso de despesas realizadas no Brasil."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"}></path>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Plano Regional Goiás"}</h3>
<p>{"Criado exclusivamente para atender a um grupo de municípios de Goiás, conte com a qualidade que a\n                Bradesco Saúde oferece aos funcionários da sua empresa."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
<div className={"plan-card"}>
<div className={"plan-card-top"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"}></path>
<circle cx={"12"} cy={"10"} r={"2.5"}></circle>
</svg></div>
<div className={"plan-card-body"}>
<h3>{"Regional Noroeste Paulista"}</h3>
<p>{"Pensado exclusivamente para atender ao interior paulista, conte com a qualidade que a Bradesco Saúde\n                oferece aos funcionários da sua empresa."}</p>
<Link to={"/cotacao.html"} className={"plan-card-link"}>{"Saber mais "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M9 18l6-6-6-6"}></path>
</svg></Link>
</div>
</div>
</div>
<p style={{"textAlign":"center","marginTop":"22px","fontSize":"13px","color":"var(--ink-soft)"}}>{"Rede, coparticipação e\n          carências variam por praça e produto. "}<Link to={"/cotacao.html"} style={{"color":"var(--red)","fontWeight":"600"}}>{"Fale com\n            um\n            especialista"}</Link>{" para uma simulação sob medida."}</p>
</div>
</section>
<section className={"coverage"} id={"cobertura"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Rede de atendimento"}</span></div>
<h2>{"Uma rede pensada para "}<span className={"accent"}>{"estar perto de quem importa."}</span></h2>
<p className={"sub"}>{"Hospitais, laboratórios e clínicas credenciadas em todo o país, para atender sua empresa onde ela\n        estiver — da capital ao interior."}</p>
<div className={"coverage-stat-row"}>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"7"}</div>
<div className={"coverage-stat-label"}>{"planos empresariais"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"Nacional"}</div>
<div className={"coverage-stat-label"}>{"e regional"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"3+"}</div>
<div className={"coverage-stat-label"}>{"vidas para contratar"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"24h"}</div>
<div className={"coverage-stat-label"}>{"telemedicina"}</div>
</div>
</div>
</section>
<section className={"credenciada"} id={"rede-credenciada"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Rede credenciada"}</span></div>
<h2>{"Hospitais e laboratórios de "}<span className={"accent"}>{"referência na sua rede."}</span></h2>
<p className={"sub"}>{"Conte com uma das redes mais qualificadas do país, com hospitais e laboratórios de ponta em\n        diversas\n        regiões do Brasil."}</p>
<div className={"credenciada-grid"}>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-06769873a3db.png"} alt={"Hospital Israelita Albert Einstein"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-1c363399f437.png"} alt={"Hospital Sírio-Libanês"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-68151794556c.png"} alt={"Femme Laboratório da Mulher"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-95a0280a14b0.png"} alt={"Rede D'Or São Luiz"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-3ab1f3e503ec.png"} alt={"a+ Medicina Diagnóstica"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-8a8988abda8f.png"} alt={"Fleury Medicina e Saúde"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-44d34e25520f.png"} alt={"Hospital Nove de Julho"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-6b20ec995689.png"} alt={"Hospital Samaritano Americas"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-95dd13a8e7c8.png"} alt={"Vila Nova Star Rede D'Or"}/></div>
<div className={"credenciada-card"}><img src={"/assets/images/embedded-5725d0846c05.png"} alt={"Hospital Santa Catarina Paulista"}/></div>
</div>
<p className={"credenciada-note"}>{"Rede sujeita a alteração e variação por praça e produto contratado. Consulte a rede\n        completa disponível para o seu plano com um especialista."}</p>
</section>
<section className={"form-section"} id={"contato"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Fale com a gente"}</span>
<h2>{"Peça agora sua cotação "}<span className={"accent"}>{"Bradesco Saúde para sua empresa."}</span></h2>
<ul className={"form-list"}>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6L9 17l-5-5"}></path>
</svg>{" Cotação sem compromisso"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6L9 17l-5-5"}></path>
</svg>{" Planos a partir de 3 vidas"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6L9 17l-5-5"}></path>
</svg>{" Cobertura nacional ou regional"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6L9 17l-5-5"}></path>
</svg>{" Atendimento humano e especializado"}</li>
</ul>
<div className={"form-callout"}>
<div className={"form-callout-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path>
</svg></div>
<div>
<div className={"form-callout-title"}>{"Fale no WhatsApp"}</div>
<div className={"form-callout-value"}>{"Preencha o formulário ao lado"}</div>
</div>
</div>
</div>
<div className={"form-card"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Cotação empresarial"}</span></div>
<h3>{"Solicite sua cotação Bradesco Saúde"}</h3>
<div className={"form-card"}><h3>{"Sua cotação, uma pergunta de cada vez"}</h3><p>{"Conte o que você precisa e receba uma proposta personalizada."}</p><Link className={"btn-primary"} to={"/cotacao.html"}>{"Começar minha cotação"}</Link></div>
</div>
</div>
</section>
</main>
<footer className={"footer"}>
<div className={"footer-top"}>
<div style={{"display":"flex","alignItems":"center","gap":"14px"}}>
<img src={"/assets/images/embedded-eda00eb5a181.png"} alt={"Bradesco Saúde"} className={"footer-logo"}/>
<div style={{"width":"1px","height":"22px","background":"rgba(255,255,255,0.25)"}}></div>
<div style={{"display":"flex","flexDirection":"column","lineHeight":"1.15"}}>
<span style={{"fontSize":"9.5px","letterSpacing":"0.08em","textTransform":"uppercase","color":"rgba(255,255,255,0.55)"}}>{"via"}</span>
<span style={{"fontSize":"13px","fontWeight":"600","color":"#fff"}}>{"Liberty Saúde"}</span>
</div>
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
<p>{"© 2026 Liberty Saúde Corretora de Seguros. Bradesco Saúde é marca de sua respectiva operadora — condições\n        sujeitas a análise e aprovação."}</p>
</div>
</footer>
<a href={"https://wa.me/5511945189498?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20plano%20Bradesco%20Sa%C3%BAde."} target={"_blank"} rel={"noopener"} className={"wa-float"} id={"waFloatBtn"} aria-label={"Falar no WhatsApp"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>



</>;}
