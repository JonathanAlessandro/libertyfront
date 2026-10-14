import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

export default function AmilSaudeLanding(){return <>
<Navigation className={"nav"}>
<div className={"nav-inner"}>
<div className={"nav-brandrow"}>
<Link to={"/index.html"}><img src={"/assets/images/embedded-a6326e15a30e.png"} alt={"Amil"} className={"nav-logo"}/></Link>
<span className={"nav-via"}>{"via"}<br/><strong>{"Liberty Saúde"}</strong></span>
</div>
<ul className={"nav-links"}>
<li><Link to={"#home"}>{"Home"}</Link></li>
<li><Link to={"#sobre"}>{"Sobre"}</Link></li>
<li><Link to={"#planos"}>{"Planos"}</Link></li>
<li><Link to={"#black-banner"}>{"Amil Black"}</Link></li>
<li><Link to={"#cobertura"}>{"Cobertura"}</Link></li>
<li><Link to={"/cotacao.html"}>{"Contato"}</Link></li>
</ul>
<Link to={"/cotacao.html"} className={"nav-cta"}>{"Solicitar cotação"}</Link>
</div>
</Navigation>
<main>
<section className={"hero"} id={"home"}>
<div className={"hero-photo"}>
<img src={"/assets/images/embedded-76b0d73c3276.jpeg"} alt={"Mulher usando o celular ao ar livre"}/>
</div>
<div className={"hero-orb o1"}></div>
<div className={"hero-orb o2"}></div>
<div className={"hero-content"}>
<span className={"eyebrow"}>{"Operadora Amil"}</span>
<h1>{"O plano de saúde que cuida de você"}<span className={"accent"}>{"em qualquer lugar do Brasil."}</span></h1>
<p className={"lead"}>{"Cotação personalizada em todo o portfólio Amil — Amil, Amil Black e Amil Dental — com a\n          consultoria da Liberty Saúde do início ao fim da contratação."}</p>
<div style={{"display":"flex","gap":"16px","flexWrap":"wrap"}}>
<Link to={"/cotacao.html"} className={"btn-primary"}>{"Quero minha cotação Amil"}</Link>
<Link to={"#planos"} className={"btn-ghost"}>{"Ver planos"}</Link>
</div>
</div>
</section>
<section className={"black-banner black-banner--compact"} id={"black-teaser"}>
<div className={"black-banner-photo"}>
<img src={"/assets/images/embedded-9ce13fedea3e.jpeg"} alt={"Roberto Justus segurando o cartão Amil Black"}/>
</div>
<div className={"black-banner-flex"}>
<div className={"black-banner-text"}>
<h2>{"Chegou Amil Black."}<span className={"accent"}>{"O melhor plano de saúde do mundo."}</span></h2>
<p>{"Retaguarda de hospitais como Einstein e Sírio-Libanês, telemedicina exclusiva, agências de atendimento\n            dedicadas e assistência de viagem internacional — tudo isso na linha premium da Amil, agora reunida em uma\n            única marca: Black I, Black II, S2500 e S6500 Black."}</p>
<Link to={"#black-banner"} className={"btn-dark"}>{"Saiba mais"}</Link>
</div>
<div className={"black-card"}><img src={"/assets/images/embedded-7fd6dbe14980.png"} alt={"Cartão Amil Black"}/></div>
</div>
</section>
<section className={"sobre"} id={"sobre"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Sobre a Amil"}</span></div>
<h2>{"Uma das maiores redes de saúde "}<span className={"accent"}>{"do Brasil, há mais de 40 anos."}</span></h2>
<p className={"sub"}>{"A Amil é uma das maiores operadoras de saúde do país, com mais de 6,1 milhões de beneficiários e a\n        liderança em vendas de planos de saúde no Brasil. São planos para todos os momentos: do individual ao\n        empresarial,\n        passando por opções odontológicas com a linha Amil Dental e pela linha Black, voltada a quem busca o que há de\n        mais completo em atendimento e rede credenciada nacional e internacional. Presença em todo o território\n        nacional,\n        telemedicina e Central de Libras — tudo isso com a consultoria da Liberty Saúde para te ajudar a escolher o\n        plano\n        certo."}</p>
<div className={"info-grid"}>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}></path>
</svg></div>
<h3>{"Urgência e emergência"}</h3>
<p>{"Cobertura nacional para atendimentos de urgência, em qualquer plano da linha."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 5v14M5 12h14"}></path>
</svg></div>
<h3>{"Reembolso"}</h3>
<p>{"Opções com reembolso de consultas e procedimentos fora da rede, conforme o plano."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path>
</svg></div>
<h3>{"Orientação por telefone"}</h3>
<p>{"Atendimento pré-hospitalar e orientação médica por telefone, disponível 24h."}</p>
</div>
<div className={"info-card"}>
<div className={"info-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}></path>
<path d={"m9 12 2 2 4-4"}></path>
</svg></div>
<h3>{"Rede nacional"}</h3>
<p>{"Retaguarda com hospitais de referência, como Einstein e Sírio-Libanês, conforme o plano."}</p>
</div>
</div>
</section>
<section className={"planos"} id={"planos"}>
<div className={"planos-head"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Nossos planos"}</span></div>
<h2>{"A Amil tem o plano certo "}<span className={"accent"}>{"para você viver o seu melhor."}</span></h2>
<p>{"Clique e conheça as opções em cada linha de produto."}</p>
</div>
<div className={"plan-tabs"}>
<button className={"plan-tab is-active"} data-tab={"amil"}>{"amil"}</button>
<button className={"plan-tab"} data-tab={"black"}>{"amil black"}</button>
<button className={"plan-tab"} data-tab={"dental"}>{"amil dental"}</button>
</div>

<div className={"plan-panel is-active"} data-panel={"amil"}>
<div className={"plan-accordion"}>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"S380"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<div className={"sel-card"}>
<h4>{"Diferenciais"}</h4>
<ul className={"sel-list"}>
<li>{"Cobertura nacional"}</li>
<li>{"Hospitais de referência em:\n                      "}<div className={"sel-hosp-block"}>
<p><strong>{"SP:"}</strong>{" Hospital Samaritano Paulista, Hospital Paulistano, Hospital\n                          Metropolitano,\n                          Hospital Vitória e Leforte – Morumbi."}</p>
<p><strong>{"RJ:"}</strong>{" Casa de Saúde Santa Lúcia*, Hospital Pasteur, Hospital Pan-Americano,\n                          Hospital de Clínicas Mário Lioni, Hospital Clínicas de Jacarepaguá, Hospital São Vicente de\n                          Paulo, Centro Pediátrico da Lagoa e Hospital Icaraí."}</p>
<p><strong>{"DF:"}</strong>{" Hospital Alvorada Brasília e Hospital Daher."}</p>
<p><strong>{"MG:"}</strong>{" Hospital Mater Dei Betim."}</p>
<p><strong>{"PR:"}</strong>{" Hospital Marcelino Champagnat."}</p>
<p><strong>{"SC:"}</strong>{" SOS Cardio."}</p>
<p><strong>{"RS:"}</strong>{" Hospital Mãe de Deus."}</p>
<p><strong>{"BA:"}</strong>{" Hospital Santa Izabel, Hospital Santo Amaro, Hospital da Bahia e\n                          Hospital\n                          Aeroporto – L. de Freitas."}</p>
<p><strong>{"CE:"}</strong>{" Hospital Monte Klinikum, Hospital Cura Dars e Hospital Gênesis."}</p>
<p><strong>{"PE:"}</strong>{" Hospital Santa Joana Recife, Hospital Jayme Da Fonte e Hospital\n                          Esperança\n                          – Olinda."}</p>
</div>
<p className={"sel-note"}>{"*apenas QP"}</p>
</li>
<li>{"Com coparticipação total ou parcial (PME)**\n                      "}<p className={"sel-note"}>{"**Coparticipação customizável nos contratos acima de 100 vidas (PJ)."}</p>
</li>
<li>{"Reembolso"}</li>
<li>{"Telemedicina Amil"}</li>
<li>{"Desconto farmácia"}</li>
<li>{"Transplantes adicionais"}</li>
<li>{"Disponível contratação de Amil Resgate"}</li>
<li>{"Disponível contratação de Assistência Viagem Internacional"}</li>
<li>{"Disponível contratação de atendimento Pré-Hospitalar e Orientação Médica por Telefone"}</li>
</ul>
<Link to={"/cotacao.html"} className={"sel-cta"}>{"Comparar os planos"}</Link>
</div>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"S450"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<div className={"sel-card"}>
<h4>{"Diferenciais"}</h4>
<ul className={"sel-list"}>
<li>{"Cobertura nacional"}</li>
<li>{"Hospitais de referência em:\n                      "}<div className={"sel-hosp-block"}>
<p><strong>{"SP:"}</strong>{" Leforte Liberdade, AACD, BP, Hospital São Camilo Santana, Hospital Villa\n                          Lobos, Maternidade Santa Joana*, Hospital Santa Catarina* e Hospital São Luiz Jabaquara."}</p>
<p><strong>{"RJ:"}</strong>{" Hospital Vitória, Casa de Saúde São José*, Hospital São Lucas e CHN."}</p>
<p><strong>{"DF:"}</strong>{" Home Hospital, Hospital Brasília Águas Claras e Hospital Santa Lúcia –\n                          Asa\n                          Sul."}</p>
<p><strong>{"MG:"}</strong>{" Hosp. Mater Dei – Sto. Agostinho, Hosp. Mater Dei – Contorno* e Hosp.\n                          UMC\n                          – Uberlândia."}</p>
<p><strong>{"RS:"}</strong>{" Hospital Moinhos de Vento."}</p>
<p><strong>{"PR:"}</strong>{" Hospital Santa Cruz."}</p>
<p><strong>{"BA:"}</strong>{" Hospital Português."}</p>
<p><strong>{"CE:"}</strong>{" Hospital São Mateus e Hospital Gastroclínica."}</p>
<p><strong>{"PE:"}</strong>{" Real Hospital Português, Hospital Esperança e Hospital Memorial São\n                          José.\n                        "}</p>
<p><strong>{"AM:"}</strong>{" Check Up Clínicas Hospital."}</p>
</div>
<p className={"sel-note"}>{"*apenas QP"}</p>
</li>
<li>{"Com coparticipação total ou parcial (PME)**\n                      "}<p className={"sel-note"}>{"**Coparticipação customizável nos contratos acima de 100 vidas (PJ)."}</p>
</li>
<li>{"Reembolso"}</li>
<li>{"Telemedicina Amil"}</li>
<li>{"Desconto farmácia"}</li>
<li>{"Transplantes adicionais"}</li>
<li>{"Disponível contratação de Amil Resgate"}</li>
<li>{"Disponível contratação de Assistência Viagem Internacional"}</li>
<li>{"Disponível contratação de atendimento Pré-Hospitalar e Orientação Médica por Telefone"}</li>
</ul>
<Link to={"/cotacao.html"} className={"sel-cta"}>{"Comparar os planos"}</Link>
</div>
</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"S750"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>
<div className={"sel-card"}>
<h4>{"Diferenciais"}</h4>
<ul className={"sel-list"}>
<li>{"Cobertura nacional"}</li>
<li>{"Hospitais de referência em:\n                      "}<div className={"sel-hosp-block"}>
<p><strong>{"SP:"}</strong>{" Hospital Oswaldo Cruz – Paulista, AC Camargo, Hospital Nove de Julho,\n                          HCOR\n                          – Paraíso, Hospital São Luiz (Itaim, Anália Franco e São Caetano) e Hospital São Luiz –\n                          Morumbi.\n                        "}</p>
<p><strong>{"DF:"}</strong>{" Hospital Urológico de Brasília."}</p>
<p><strong>{"PR:"}</strong>{" Hospital Cardiológico Costantini."}</p>
<p><strong>{"RJ:"}</strong>{" Hospital Pró-Cardíaco, Hospital Samaritano Botafogo, Hospital Samaritano\n                          Barra e Hospital Barra D'Or."}</p>
<p><strong>{"BA:"}</strong>{" Hospital Aliança."}</p>
<p><strong>{"PE:"}</strong>{" IOFV – Inst. de Olhos Fernando Ventura."}</p>
</div>
</li>
<li>{"Ambulatório de hospitais de referência em SP, PR, SC, RS, MG, BA, PE, CE, RN, MA e PB."}</li>
<li>{"Com coparticipação total ou parcial (PME)*\n                      "}<p className={"sel-note"}>{"*Coparticipação customizável nos contratos acima de 100 vidas (PJ)."}</p>
</li>
<li>{"03 níveis de reembolso"}</li>
<li>{"Telemedicina Amil"}</li>
<li>{"Desconto farmácia"}</li>
<li>{"Cirurgia oftalmológica refrativa sem limite de grau"}</li>
<li>{"Sessões de escleroterapia além do Rol da ANS"}</li>
<li>{"Transplantes adicionais"}</li>
<li>{"Disponível contratação de Amil Resgate"}</li>
<li>{"Disponível contratação de Assistência Viagem Internacional"}</li>
<li>{"Disponível contratação de atendimento Pré-Hospitalar e Orientação Médica por Telefone"}</li>
</ul>
<Link to={"/cotacao.html"} className={"sel-cta"}>{"Comparar os planos"}</Link>
</div>
</div>
</div>
</div>
</div>
<div className={"plan-accordion"} style={{"marginTop":"12px"}}>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze SP"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Plano de entrada com rede credenciada na Grande São Paulo. Peça uma\n                simulação com um especialista Liberty para valores e carências atualizados."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze SP Mais"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Versão ampliada do Bronze SP, com rede mais completa na região de São\n                Paulo."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze RJ"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Plano de entrada com rede credenciada no Rio de Janeiro."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze RJ Mais"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Versão ampliada do Bronze RJ, com rede mais completa na região do Rio.\n              "}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze DF"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Plano de entrada com rede credenciada no Distrito Federal."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze PR"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Plano de entrada com rede credenciada no Paraná."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Prata"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Intermediário, com rede mais ampla que a linha Bronze. Consulte\n                disponibilidade na sua região."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Prata II"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Versão ampliada da linha Prata."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Ouro"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Rede ampliada, com mais opções de hospitais e prontos-socorros."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Ouro II"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Versão ampliada da linha Ouro."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Platinum"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"O mais completo da linha regular Amil, com a maior rede credenciada do\n                portfólio."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Platinum Mais"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Versão ampliada do Platinum, com rede ainda mais abrangente."}</div>
</div>
</div>
</div>
<p style={{"textAlign":"center","marginTop":"22px","fontSize":"13px","color":"var(--ink-soft)"}}>{"Rede, coparticipação e\n          carências variam por praça e produto. "}<Link to={"/cotacao.html"} style={{"color":"var(--blue)","fontWeight":"600"}}>{"Fale com\n            um\n            especialista Liberty Saúde"}</Link>{" para uma simulação sob medida."}</p>
</div>

<div className={"plan-panel"} data-panel={"black"}>
<div className={"black-table-wrap"}>
<table className={"black-table"}>
<thead>
<tr>
<th className={"th-name"}></th>
<th>{"Black I"}</th>
<th>{"S2500"}</th>
<th>{"Black II"}</th>
<th>{"S6500 Black"}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{"Amil Espaço Saúde*"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Programa Primeiros Cuidados"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Desconto Farmácia"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Urgência e Emergência Nacional"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Seguro e Assistência de Viagem Internacional"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Atendimento Pré-hospitalar e Orientação Médica por Telefone"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Amil Dental Promo**"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"dash"}>{"–"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Reembolso"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Retaguarda do Samaritano (SP e RJ)"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Coleta Domiciliar"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Telemedicina Amil Black"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Acompanhante na Internação (alimentação)"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Amil Resgate"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Agências de Atendimento Exclusivas"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Vacinas e Vacina do Viajante"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Retaguarda completa Einstein e Sírio-Libanês"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Consulta Domiciliar"}</td>
<td className={"dash"}>{"–"}</td>
<td className={"dash"}>{"–"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
<tr>
<td>{"Amil Black Dental"}</td>
<td className={"dash"}>{"–"}</td>
<td className={"dash"}>{"–"}</td>
<td className={"chk"}>{"✓"}</td>
<td className={"chk"}>{"✓"}</td>
</tr>
</tbody>
</table>
<p className={"black-table-note"}>{"– Não embutido  ·  ✓ Embutido  ·  * Consulte disponibilidade\n            de\n            unidades na área de abrangência do produto  ·  ** Amil Dental Promo: condição válida por 12 meses\n            para os portes PME I, II e PJ."}</p>
</div>
<div className={"black-cta-row"}>
<Link to={"/cotacao.html"}>{"Contratar Black I"}</Link>
<Link to={"/cotacao.html"}>{"Contratar S2500"}</Link>
<Link to={"/cotacao.html"}>{"Contratar Black II"}</Link>
<Link to={"/cotacao.html"}>{"Contratar S6500 Black"}</Link>
</div>
</div>

<div className={"plan-panel"} data-panel={"dental"}>
<div className={"plan-accordion"}>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Plano odontológico de entrada, com cobertura essencial."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze Mais"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Versão ampliada do Bronze, com mais procedimentos cobertos."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Bronze Doc"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Linha Bronze com foco em documentação e procedimentos específicos."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Prata Clareia"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Cobertura intermediária com procedimento de clareamento incluso."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Ouro Orto"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Cobertura ampliada com foco em ortodontia."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Ouro Prot"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"Cobertura ampliada com foco em prótese dentária."}</div>
</div>
</div>
<div className={"plan-item"}>
<div className={"plan-item-head"}>{"Platinum"}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg></div>
<div className={"plan-item-body"}>
<div className={"plan-item-body-inner"}>{"O plano mais completo da linha Amil Dental."}</div>
</div>
</div>
</div>
<div className={"dental-banner"}>
<svg viewBox={"0 0 24 24"} fill={"none"} stroke={"#fff"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"18"} height={"18"}>
<circle cx={"12"} cy={"12"} r={"9"}></circle>
<path d={"M12 8v4l3 2"}></path>
</svg>{"\n          Todo cliente Amil Dental tem:\n        "}</div>
<div className={"dental-benefits"}>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-104b89378836.png"} alt={"Urgência e emergência"}/></div>
<div className={"dental-item-label"}>{"Urgência e emergência"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-418d6168492b.png"} alt={"Reembolso*"}/></div>
<div className={"dental-item-label"}>{"Reembolso*"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-a91612da2c9d.png"} alt={"Prevenção"}/></div>
<div className={"dental-item-label"}>{"Prevenção"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-863bca3ac803.png"} alt={"Consultas"}/></div>
<div className={"dental-item-label"}>{"Consultas"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-8c633420f809.png"} alt={"Radiografias"}/></div>
<div className={"dental-item-label"}>{"Radiografias"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-9b8d42be198a.png"} alt={"Periodontia"}/></div>
<div className={"dental-item-label"}>{"Periodontia"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-9b5f3629ca2c.png"} alt={"Odontopediatria"}/></div>
<div className={"dental-item-label"}>{"Odontopediatria"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-863bca3ac803.png"} alt={"Endopediatria"}/></div>
<div className={"dental-item-label"}>{"Endopediatria"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-c405d5fdf805.png"} alt={"Dentística"}/></div>
<div className={"dental-item-label"}>{"Dentística"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-3a06c5dca21a.png"} alt={"Cirurgias e extrações"}/></div>
<div className={"dental-item-label"}>{"Cirurgias e extrações"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-c6499695c410.png"} alt={"Prótese dentária — Rol ANS"}/></div>
<div className={"dental-item-label"}>{"Prótese dentária — Rol ANS"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-1c6d062d0d7d.png"} alt={"Até 60% de desconto em medicamentos**"}/></div>
<div className={"dental-item-label"}>{"Até 60% de desconto em medicamentos**"}</div>
</div>
<div className={"dental-item"}>
<div className={"dental-item-icon"}><img src={"/assets/images/embedded-8cf02574dd26.png"} alt={"Condição especial para alinhadores transparentes***"}/></div>
<div className={"dental-item-label"}>{"Condição especial para alinhadores transparentes***"}</div>
</div>
</div>
<p className={"dental-note"}>{"* Reembolso conforme rol de procedimentos contratado, respeitadas as condições da\n          apólice.\n          ** Desconto em farmácias parceiras, condições e valores variam por rede conveniada e podem ser alterados sem\n          aviso prévio. *** Condição especial para alinhadores transparentes sujeita a análise e disponibilidade por\n          região. Consulte um especialista Liberty Saúde para o detalhamento completo de cada plano."}</p>
</div>
</section>
<section className={"black-banner"} id={"black-banner"}>
<div className={"black-banner-photo"}>
<img src={"/assets/images/embedded-9ce13fedea3e.jpeg"} alt={"Roberto Justus segurando o cartão Amil Black"}/>
</div>
<div className={"black-banner-flex"}>
<div className={"black-banner-text"}>
<h2 style={{"fontSize":"clamp(32px, 4.2vw, 48px)"}}><span className={"accent"}>{"O melhor plano de saúde do mundo."}</span>
</h2>
<p>{"Retaguarda de hospitais como Einstein e Sírio-Libanês, telemedicina exclusiva, agências de atendimento\n            dedicadas e assistência de viagem internacional — tudo isso na linha premium da Amil, agora reunida em uma\n            única marca: Black I, Black II, S2500 e S6500 Black."}</p>
<Link to={"/cotacao.html"} className={"btn-dark"}>{"Saiba mais"}</Link>
</div>
<div className={"black-card"}><img src={"/assets/images/embedded-7fd6dbe14980.png"} alt={"Cartão Amil Black"}/></div>
</div>
</section>
<section className={"coverage"} id={"cobertura"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Cobertura nacional"}</span></div>
<h2>{"Presente "}<span className={"accent"}>{"em todo o território nacional."}</span></h2>
<p className={"sub"}>{"Uma das maiores redes credenciadas do país, com liderança em vendas de planos de saúde no Brasil.\n      "}</p>
<div className={"coverage-grid"}>
<div className={"coverage-card"}>
<div className={"coverage-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.35l-.77-.77a5.4 5.4 0 0 0-7.65 7.65l.77.77L12 21l7.65-7.65.77-.77a5.4 5.4 0 0 0 0-7.65z"}></path>
</svg></div>
<h3>{"Hospitais de referência"}</h3>
<p>{"Retaguarda com hospitais como Einstein, Sírio-Libanês, Samaritano e Santa Joana em produtos elegíveis."}</p>
</div>
<div className={"coverage-card"}>
<div className={"coverage-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"}></path>
</svg></div>
<h3>{"Cobertura em todo o Brasil"}</h3>
<p>{"Urgência e emergência com cobertura nacional, para quem viaja ou muda de cidade com frequência."}</p>
</div>
<div className={"coverage-card"}>
<div className={"coverage-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M22 12h-4l-3 9L9 3l-3 9H2"}></path>
</svg></div>
<h3>{"Liderança em crescimento"}</h3>
<p>{"A Amil lidera as vendas de planos de saúde no país, com uma das maiores bases de beneficiários do Brasil.\n          "}</p>
</div>
<div className={"coverage-card"}>
<div className={"coverage-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"}></path>
</svg></div>
<h3>{"Urgência e emergência com cobertura nacional"}</h3>
<p>{"Onde você estiver no Brasil, tem retaguarda de urgência e emergência garantida."}</p>
</div>
<div className={"coverage-card"}>
<div className={"coverage-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<rect x={"3"} y={"4"} width={"18"} height={"14"} rx={"2"}></rect>
<path d={"M8 21h8M12 18v3"}></path>
</svg></div>
<h3>{"Telemedicina e orientação médica por telefone"}</h3>
<p>{"Atendimento pré-hospitalar e orientação médica disponíveis a qualquer hora, direto do celular."}</p>
</div>
<div className={"coverage-card"}>
<div className={"coverage-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}></path>
<path d={"M13.73 21a2 2 0 0 1-3.46 0"}></path>
</svg></div>
<h3>{"Central de Libras e agências exclusivas"}</h3>
<p>{"Atendimento acessível e agências de atendimento exclusivas em diversas praças do país."}</p>
</div>
</div>
</section>
<section className={"form-section"} id={"contato"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Por que escolher a Amil pela Liberty Saúde?"}</span>
<h2>{"A Amil, com a consultoria "}<span className={"accent"}>{"da Liberty ao seu lado."}</span></h2>
<ul className={"form-list"}>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Cotação personalizada para você ou sua empresa"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Ajuda para escolher entre Amil, Amil Black e Amil Dental"}</li>
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
<img src={"/assets/images/embedded-a6326e15a30e.png"} alt={"Amil"} className={"footer-logo"}/>
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
<p>{"© 2026 Liberty Saúde Corretora de Seguros. Amil, Amil Black e Amil Dental são marcas de sua respectiva\n        operadora — condições sujeitas a análise e aprovação."}</p>
</div>
</footer>
<a href={"https://wa.me/5511989152642?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20plano%20Amil."} target={"_blank"} rel={"noopener"} className={"wa-float"} id={"waFloatBtn"} aria-label={"Falar no WhatsApp"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>



</>;}
