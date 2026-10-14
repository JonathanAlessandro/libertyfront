import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

export default function HapvidaSaudeLanding(){return <>
<Navigation className={"nav"}>
<div className={"nav-inner"}>
<div className={"nav-brandrow"}>
<Link to={"/index.html"}><img src={"/assets/images/embedded-4712ccbe7016.png"} alt={"Hapvida"} className={"nav-logo"}/></Link>
<span className={"nav-via"}>{"via"}<br/><strong>{"Liberty Saúde"}</strong></span>
</div>
<ul className={"nav-links"}>
<li><Link to={"#home"}>{"Home"}</Link></li>
<li><Link to={"#sobre"}>{"Sobre"}</Link></li>
<li><Link to={"#planos"}>{"Planos"}</Link></li>
<li><Link to={"#cobertura"}>{"Cobertura"}</Link></li>
<li><Link to={"#rede-credenciada"}>{"Rede Credenciada"}</Link></li>
<li><Link to={"/cotacao.html"}>{"Contato"}</Link></li>
</ul>
<Link to={"/cotacao.html"} className={"nav-cta"}>{"Solicitar cotação"}</Link>
</div>
</Navigation>
<main>
<section className={"hero"} id={"home"}>
<div className={"hero-photo"}>
<img src={"/assets/images/embedded-61e19976095a.jpeg"} alt={"Médica e paciente sorrindo"}/>
</div>
<div className={"hero-orb o1"}></div>
<div className={"hero-orb o2"}></div>
<div className={"hero-orb o3"}></div>
<div className={"hero-content"}>
<span className={"eyebrow"}>{"Operadora Hapvida"}</span>
<h1>{"Hapvida"}<span className={"accent"}>{"na sua vida e na de quem você ama."}</span></h1>
<p className={"lead"}>{"Mais tranquilidade para você e quem ama, com um plano de saúde que acompanha todas as fases da\n          vida — rede própria, atendimento ágil e cobertura nacional, com a consultoria da Liberty Saúde."}</p>
<div style={{"display":"flex","gap":"16px","flexWrap":"wrap"}}>
<Link to={"/cotacao.html"} className={"btn-primary"}>{"Quero minha cotação Hapvida"}</Link>
<Link to={"#planos"} className={"btn-ghost"}>{"Ver planos"}</Link>
</div>
</div>
</section>
<section className={"sobre"} id={"sobre"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Sobre a Hapvida"}</span></div>
<h2>{"A maior operadora de saúde "}<span className={"accent"}>{"e odontologia da América Latina."}</span></h2>
<p className={"sub"}>{"Há mais de 80 anos, o propósito da Hapvida é cuidar da vida dos brasileiros. É um ecossistema\n        completo de saúde, que reúne estrutura, parceiros e profissionais dedicados a estar ao seu lado em todos os\n        momentos — com presença nacional e atuação conjunta em medicina e odontologia. A rede própria conta com mais de\n        800 unidades, entre hospitais, prontos atendimentos, clínicas e centros de diagnóstico, todas conectadas a um\n        único sistema: o histórico de saúde de cada paciente fica disponível em qualquer unidade do país, garantindo\n        mais\n        agilidade, segurança e continuidade no cuidado."}</p>
<div className={"info-grid"}>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}></path>
</svg></div>
<h3>{"+80 anos"}</h3>
<p>{"De atuação cuidando da saúde e do bem-estar de famílias e empresas no Brasil."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path>
<circle cx={"9"} cy={"7"} r={"4"}></circle>
<path d={"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"}></path>
</svg></div>
<h3>{"+16 milhões"}</h3>
<p>{"De beneficiários atendidos em todo o país, entre planos de saúde e odontológicos."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"3"} y={"4"} width={"18"} height={"16"} rx={"2"}></rect>
<path d={"M3 10h18M8 2v4M16 2v4"}></path>
</svg></div>
<h3>{"+800 unidades"}</h3>
<p>{"Próprias, entre hospitais, prontos atendimentos, clínicas e centros de diagnóstico."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 12h-4l-3 9L9 3l-3 9H2"}></path>
</svg></div>
<h3>{"Rede própria integrada"}</h3>
<p>{"Prontuário eletrônico único, com histórico disponível em qualquer unidade do país."}</p>
</div>
</div>
</section>
<section className={"planos"} id={"planos"}>
<div className={"planos-head"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Nossos planos"}</span></div>
<h2>{"Um plano Hapvida "}<span className={"accent"}>{"para cada momento."}</span></h2>
<p>{"Clique e conheça as opções para pessoa física, pessoa jurídica e micro empresas."}</p>
</div>
<div className={"plan-tabs"}>
<button className={"plan-tab is-active"} data-tab={"pf"}>{"Pessoa Física"}</button>
<button className={"plan-tab"} data-tab={"pj"}>{"Pessoa Jurídica"}</button>
<button className={"plan-tab"} data-tab={"micro"}>{"Micro Empresa"}</button>
</div>

<div className={"plan-panel is-active"} data-panel={"pf"}>
<div className={"plan-card"}>
<div>
<h3>{"Planos de saúde para você e sua família"}</h3>
<p>{"Mais tranquilidade para você e quem ama, com um plano de saúde individual acessível e que acompanha todas\n              as fases da vida."}</p>
<div className={"plan-card-cta"}><Link to={"/cotacao.html"} className={"btn-primary"} style={{"padding":"13px 26px","fontSize":"14px"}}>{"Solicitar cotação"}</Link></div>
</div>
<div>
<h5 style={{"fontSize":"12px","textTransform":"uppercase","letterSpacing":"0.06em","color":"var(--ink-soft)","marginBottom":"14px","fontWeight":"600"}}>{"\n              Conheça alguns benefícios"}</h5>
<ul className={"plan-benefits"}>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Atendimento ágil em clínicas e hospitais"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Cobertura completa para consultas e exames"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Rede própria e credenciada nacional"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Planos familiares para toda a família"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Profissionais qualificados e confiáveis"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Acesso fácil via app e canais digitais"}</li>
</ul>
</div>
</div>
</div>

<div className={"plan-panel"} data-panel={"pj"}>
<div className={"plan-card"}>
<div>
<h3>{"Plano de saúde empresarial Hapvida"}</h3>
<p>{"Contrate o plano de saúde empresarial da Hapvida e ofereça para o seu time o cuidado de quem é a maior\n              operadora de planos de saúde e odontológicos da América Latina, com 16 milhões de beneficiários e 80 anos\n              de\n              experiência. Nossa rede própria integrada, aliada à tecnologia e a programas preventivos, garante cuidado\n              contínuo, previsível e de qualidade para quem move o seu negócio todos os dias."}</p>
<div className={"plan-card-cta"}><Link to={"/cotacao.html"} className={"btn-primary"} style={{"padding":"13px 26px","fontSize":"14px"}}>{"Solicitar cotação"}</Link></div>
</div>
<div>
<h5 style={{"fontSize":"12px","textTransform":"uppercase","letterSpacing":"0.06em","color":"var(--ink-soft)","marginBottom":"14px","fontWeight":"600"}}>{"\n              O que sua empresa ganha"}</h5>
<ul className={"plan-benefits"}>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Rede própria integrada em todas as regiões do Brasil"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Tecnologia que conecta prontuários, exames e diagnósticos"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Programas preventivos e cuidado coordenado"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Mais controle de custos e previsibilidade para o RH"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Fortalecimento dos benefícios empresariais"}</li>
</ul>
</div>
</div>
</div>

<div className={"plan-panel"} data-panel={"micro"}>
<div className={"plan-card"}>
<div>
<h3>{"Plano de saúde para Micro Empresas"}</h3>
<p>{"Com mais de 16 milhões de beneficiários e 80 anos de experiência, a Hapvida é a maior operadora de saúde\n              da\n              América Latina. São mais de 800 unidades próprias espalhadas pelo país, garantindo atendimento rápido, de\n              qualidade e perto de você."}</p>
<p>{"Tenha acesso a uma rede própria de qualidade, com acomodação em quarto compartilhado e cobertura nacional\n              para urgência e emergência na rede Hapvida. Mais segurança e cuidado para sua equipe, onde ela estiver.\n            "}</p>
<div className={"plan-card-cta"}><Link to={"/cotacao.html"} className={"btn-primary"} style={{"padding":"13px 26px","fontSize":"14px"}}>{"Solicitar cotação"}</Link></div>
</div>
<div>
<h5 style={{"fontSize":"12px","textTransform":"uppercase","letterSpacing":"0.06em","color":"var(--ink-soft)","marginBottom":"14px","fontWeight":"600"}}>{"\n              Ideal para quem está começando"}</h5>
<ul className={"plan-benefits"}>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Contratação facilitada para pequenos times"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Acomodação em quarto compartilhado"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Cobertura nacional para urgência e emergência"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Rede própria de qualidade, perto de você"}</li>
<li><svg viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"m9 12 2 2 4-4"} stroke={"#fff"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
</svg>{"Custo previsível para o orçamento da empresa"}</li>
</ul>
</div>
</div>
</div>
<p style={{"textAlign":"center","marginTop":"22px","fontSize":"13px","color":"var(--ink-soft)"}}>{"Rede, coparticipação e\n        carências variam por praça e produto. "}<Link to={"/cotacao.html"} style={{"color":"var(--orange)","fontWeight":"600"}}>{"Fale com\n          um\n          especialista Liberty Saúde"}</Link>{" para uma simulação sob medida."}</p>
</section>
<section className={"coverage"} id={"cobertura"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Proteção e cuidado onde estiver"}</span></div>
<h2>{"Rede própria "}<span className={"accent"}>{"em todo o Brasil."}</span></h2>
<p className={"sub"}>{"Um ecossistema completo de saúde, com presença nacional e atuação conjunta em medicina e\n        odontologia\n        — para acompanhar cada etapa da sua jornada de cuidado."}</p>
<p className={"coverage-note"}>{"* Consulte a rede conforme o plano e a região contratados."}</p>
<div className={"coverage-stat-row"}>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"+800"}</div>
<div className={"coverage-stat-label"}>{"Unidades próprias"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"+16 mi"}</div>
<div className={"coverage-stat-label"}>{"Beneficiários"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"+80 anos"}</div>
<div className={"coverage-stat-label"}>{"De atuação"}</div>
</div>
<div className={"coverage-stat"}>
<div className={"coverage-stat-num"}>{"100%"}</div>
<div className={"coverage-stat-label"}>{"Presença nacional"}</div>
</div>
</div>
<div className={"coverage-feature-row"}>
<div className={"coverage-feature"}>
<div className={"coverage-feature-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"}></path>
</svg></div>
<h3>{"Hospitais próprios"}</h3>
<p>{"Unidades hospitalares integradas, com prontuário eletrônico único em todo o Brasil."}</p>
</div>
<div className={"coverage-feature"}>
<div className={"coverage-feature-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"}></path>
</svg></div>
<h3>{"Prontos atendimentos"}</h3>
<p>{"Urgência e emergência com cobertura nacional, sem necessidade de autorização prévia."}</p>
</div>
<div className={"coverage-feature"}>
<div className={"coverage-feature-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"3"} y={"4"} width={"18"} height={"14"} rx={"2"}></rect>
<path d={"M8 21h8M12 18v3"}></path>
</svg></div>
<h3>{"Clínicas e diagnóstico"}</h3>
<p>{"Rede própria de clínicas e centros de diagnóstico conectados a um único sistema."}</p>
</div>
</div>
</section>
<section className={"partners"} id={"rede-credenciada"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Além da rede própria"}</span></div>
<h2>{"Rede credenciada "}<span className={"accent"}>{"de referência."}</span></h2>
<p className={"sub"}>{"Somando-se à rede própria Hapvida, alguns planos contam ainda com acesso a hospitais, laboratórios\n        e\n        centros de diagnóstico credenciados de referência, conforme a região e o produto contratado."}</p>
<div className={"partners-grid"}>
<div className={"partner-card"}><img src={"/assets/images/embedded-d1c2b944cbc3.png"} alt={"Hospital Alemão Oswaldo Cruz"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-7539cef5f465.png"} alt={"Hospital Leforte Liberdade"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-ab6e02269ace.png"} alt={"Hospital Samaritano Americas"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-3af339fe2c98.png"} alt={"Pro Matre Paulista"} loading={"lazy"} className={"logo-boost"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-2b0a97785531.png"} alt={"Hospital Sírio-Libanês"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-8e15e93d8d3b.png"} alt={"Hospital Santa Catarina Paulista"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-625aac13be14.png"} alt={"Hospital Nove de Julho"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-f16954597209.png"} alt={"Sabará Hospital Infantil"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-a7a8ba381cf6.png"} alt={"CEMA"} loading={"lazy"} className={"logo-boost"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-49d75a38c825.png"} alt={"Hcor"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-17dd4c6cb26c.png"} alt={"Hospital Salvalus"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-dc1cdd3bcdc1.png"} alt={"Santa Cruz Hospital e Maternidade"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-0e22ab8577b0.png"} alt={"Hospital Vitória"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-880d29e0b1e8.png"} alt={"a+ Medicina Diagnóstica"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-efc8edc18823.png"} alt={"CDB Medicina Diagnóstica"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-eb7fa61bdf38.png"} alt={"Hermes Pardini"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-f145743033b6.png"} alt={"NotreLabs"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-b6ddb175c43e.png"} alt={"Hospital Israelita Albert Einstein"} loading={"lazy"} className={"logo-boost"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-d71369f9e11c.png"} alt={"Rede D'Or São Luiz"} loading={"lazy"}/></div>
<div className={"partner-card"}><img src={"/assets/images/embedded-2dbce43a7454.png"} alt={"Femme Laboratório da Mulher"} loading={"lazy"}/></div>
</div>
<p className={"partners-note"}>{"* A rede credenciada varia por plano, praça e produto contratado. Consulte a rede vigente\n        com um especialista Liberty Saúde antes da contratação."}</p>
</section>
<section className={"form-section"} id={"contato"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Por que escolher a Hapvida pela Liberty Saúde?"}</span>
<h2>{"A Hapvida, com a consultoria "}<span className={"accent"}>{"da Liberty ao seu lado."}</span></h2>
<ul className={"form-list"}>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Cotação personalizada para você ou sua empresa"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Ajuda para escolher entre Pessoa Física, Jurídica ou Micro Empresa"}</li>
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
<img src={"/assets/images/embedded-4712ccbe7016.png"} alt={"Hapvida"} className={"footer-logo"}/>
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
<p>{"© 2026 Liberty Saúde Corretora de Seguros. Hapvida é marca de sua respectiva operadora — condições sujeitas a\n        análise e aprovação."}</p>
</div>
</footer>
<a href={"https://wa.me/5511989152642?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20plano%20Hapvida."} target={"_blank"} rel={"noopener"} className={"wa-float"} id={"waFloatBtn"} aria-label={"Falar no WhatsApp"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>



</>;}
