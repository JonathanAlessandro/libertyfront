import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import ChatWidget from '../components/ChatWidget.jsx';

export default function AliceSaudeLanding(){return <>
<Navigation className={"nav"}>
<div className={"nav-inner"}>
<div className={"nav-brandrow"}>
<Link to={"/index.html"}><img src={"/assets/images/embedded-ff159dd955f8.png"} alt={"Alice"} className={"nav-logo"}/></Link>
<span className={"nav-via"}>{"via"}<br/><strong>{"Liberty Saúde"}</strong></span>
</div>
<ul className={"nav-links"}>
<li><Link to={"#home"}>{"Home"}</Link></li>
<li><Link to={"#sobre"}>{"Sobre Alice"}</Link></li>
<li><Link to={"#rede"}>{"Redes credenciadas"}</Link></li>
<li><Link to={"#comparativo"}>{"Comparativo"}</Link></li>
<li><Link to={"#coberturas"}>{"Coberturas"}</Link></li>
<li><Link to={"/cotacao.html"}>{"Contato"}</Link></li>
</ul>
<Link to={"/cotacao.html"} className={"nav-cta"}>{"Fazer cotação"}</Link>
</div>
</Navigation>
<main>
<section className={"hero"} id={"home"}>
<div className={"hero-bg"}>
<img src={"https://images.unsplash.com/photo-1758876023053-3aa541a0935b?fm=jpg&q=80&w=1600&auto=format&fit=crop"} alt={"Pessoa usando o Time de Saúde da Alice pelo aplicativo, em casa"}/>
</div>
<div className={"hero-content"}>
<span className={"eyebrow"}>{"Plano de saúde Alice"}</span>
<h1>{"Saúde como deve ser,"}<span className={"accent"}>{"para você e sua empresa."}</span></h1>
<p className={"lead"}>{"Um plano que une tecnologia, ciência e pessoas que se importam de verdade — com um Time de Saúde\n          disponível pelo app, sem filas e sem burocracia."}</p>
<Link to={"/cotacao.html"} className={"btn-primary"}>{"Quero conhecer a Alice"}</Link>
</div>
</section>
<section className={"sobre"} id={"sobre"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Sobre a Alice"}</span></div>
<h2>{"Um cuidado que acolhe, orienta "}<span className={"accent"}>{"e acompanha de verdade."}</span></h2>
<p className={"sub"}>{"A Alice nasceu para tornar o cuidado com a saúde mais simples e humano. Em vez de esperar você\n        adoecer, o modelo da Alice acompanha de perto cada beneficiário, com um Time de Saúde disponível pelo aplicativo\n        e\n        uma rede de especialistas muito bem avaliados — reduzindo desperdício, filas e burocracia no dia a dia."}</p>
</section>
<section className={"rede"} id={"rede"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Rede credenciada"}</span></div>
<h2>{"Os melhores hospitais e laboratórios do país"}</h2>
<p className={"sub"}>{"Cobertura nacional com hospitais, laboratórios e especialistas em todo o Brasil — incluindo boa\n        parte\n        dos hospitais mais bem avaliados do país."}</p>
<div className={"rede-stats"}>
<div>
<div className={"rede-stat-num"}>{"1.000+"}</div>
<div className={"rede-stat-label"}>{"hospitais na rede"}</div>
</div>
<div>
<div className={"rede-stat-num"}>{"5.000+"}</div>
<div className={"rede-stat-label"}>{"laboratórios"}</div>
</div>
<div>
<div className={"rede-stat-num"}>{"1.400"}</div>
<div className={"rede-stat-label"}>{"cidades atendidas"}</div>
</div>
<div>
<div className={"rede-stat-num"}>{"80%"}</div>
<div className={"rede-stat-label"}>{"dos hospitais mais bem avaliados do Brasil"}</div>
</div>
</div>
<div className={"hosp-featured"}>
<img src={"/assets/images/embedded-aade8d58b0bc.png"} alt={"Hospital Sírio-Libanês"}/>
<img src={"/assets/images/embedded-4d09e3107b95.png"} alt={"Hospital Israelita Albert Einstein"}/>
<img src={"/assets/images/embedded-7b62cbd327d1.png"} alt={"Laboratório Fleury Medicina e Saúde"}/>
</div>
<div className={"hosp-grid"}>
<img src={"/assets/images/embedded-5ee32d9cfc9a.png"} alt={"Alta Diagnósticos"}/>
<img src={"/assets/images/embedded-c643be2b169e.png"} alt={"Hermes Pardini"}/>
<img src={"/assets/images/embedded-09ae1aee6d79.png"} alt={"Hospital Português"}/>
<img src={"/assets/images/embedded-d367cbf13b3e.png"} alt={"Hospital Alvorada"}/>
<img src={"/assets/images/embedded-feb75afbf3be.png"} alt={"Hospital São Marcelino Champagnat"}/>
<img src={"/assets/images/embedded-72f458008ca7.png"} alt={"Hospital Infantil Sabará"}/>
<img src={"/assets/images/embedded-ba2bbc87a9e3.png"} alt={"Hospital e Maternidade Pro Matre"}/>
<img src={"/assets/images/embedded-10f465fa93c7.png"} alt={"Labclass Hermes Pardini"}/>
<img src={"/assets/images/embedded-17e502ca8b80.png"} alt={"Hospital Mater Dei"}/>
<img src={"/assets/images/embedded-09a4a57cb696.png"} alt={"Hospital do Coração"}/>
<img src={"/assets/images/embedded-f02fa4d1ac74.png"} alt={"Hospital Oswaldo Cruz"}/>
<img src={"/assets/images/embedded-e1c6d677cab2.png"} alt={"Hospital Santa Paula"}/>
</div>
<p className={"rede-note"}>{"E muitos outros hospitais, laboratórios e clínicas em todo o Brasil."}</p>
</section>
<section className={"compare"} id={"comparativo"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Comparativo de rede"}</span></div>
<h2>{"Veja como a rede Alice se compara a outras operadoras"}</h2>
<p className={"sub"}>{"Comparativo dos principais hospitais inclusos em cada operadora, na cidade de São Paulo."}</p>
<div className={"compare-table-wrap"}>
<table className={"compare-table"}>
<thead>
<tr>
<th className={"th-hosp"}></th>
<th className={"th-alice"}>{"Alice"}<span>{"Exclusivo"}</span></th>
<th>{"SulAmérica"}<span>{"Executivo"}</span></th>
<th>{"Porto Seguro"}<span>{"PSDQ"}</span></th>
<th>{"Bradesco"}<span>{"Nacional Plus"}</span></th>
<th>{"Amil"}<span>{"Platinum Mais"}</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>{"Hospital Israelita Albert Einstein"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td></td>
<td>{"✓"}</td>
<td></td>
</tr>
<tr>
<td>{"Hospital Sírio-Libanês"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Alemão Oswaldo Cruz"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Beneficência Portuguesa Mirante"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td></td>
</tr>
<tr>
<td>{"HCor"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Pro Matre"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Santa Catarina"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Infantil Sabará"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Alvorada"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Vitória"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td></td>
</tr>
<tr>
<td>{"Hospital Santa Joana"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Samaritano"}</td>
<td className={"yes-alice"}>{"✓"}</td>
<td>{"✓"}</td>
<td></td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
<tr>
<td>{"Hospital Rede D'Or São Luiz"}</td>
<td></td>
<td>{"✓"}</td>
<td></td>
<td>{"✓"}</td>
<td></td>
</tr>
<tr>
<td>{"Hospital Vila Nova Star"}</td>
<td></td>
<td>{"✓"}</td>
<td></td>
<td>{"✓"}</td>
<td></td>
</tr>
<tr>
<td>{"Hospital 9 de Julho"}</td>
<td></td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
<td>{"✓"}</td>
</tr>
</tbody>
</table>
</div>
<p className={"compare-note"}>{"Comparativo baseado em levantamento de Março de 2025, fontes: SulAmérica, Porto Seguro,\n        Bradesco e Amil. Informações sujeitas a alterações pelas próprias operadoras."}</p>
</section>
<section className={"coverage"} id={"coberturas"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Cobertura nacional"}</span></div>
<h2>{"A melhor rede credenciada "}<span className={"accent"}>{"para o seu time, em todo o Brasil."}</span></h2>
<p className={"sub"}>{"+1.400 cidades, +1.000 hospitais, +5.000 laboratórios em todas as regiões do país."}</p>
<div className={"city-grid"}>
<div className={"city-card is-active"}><img src={"/assets/images/embedded-c232f413901a.jpeg"} alt={"São Paulo"}/><span className={"city-card-label"}>{"São Paulo"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-d3f52de2d8ad.jpeg"} alt={"Região do ABCD"}/><span className={"city-card-label"}>{"Região do ABCD"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-12ca1d115943.jpeg"} alt={"Região Metropolitana"}/><span className={"city-card-label"}>{"Região Metropolitana"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-9dab58819c45.jpeg"} alt={"Rio de Janeiro"}/><span className={"city-card-label"}>{"Rio de Janeiro"}</span></div>
<div className={"city-card"}><img src={"https://images.unsplash.com/photo-1749092042994-618ea2d25c87?fm=jpg&q=70&w=500&auto=format&fit=crop"} alt={"Brasília"}/><span className={"city-card-label"}>{"Brasília"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-05384a23d675.jpeg"} alt={"Belo Horizonte"}/><span className={"city-card-label"}>{"Belo Horizonte"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-6efaafe91b2a.jpeg"} alt={"Vitória"}/><span className={"city-card-label"}>{"Vitória"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-811453b59de2.jpeg"} alt={"Recife"}/><span className={"city-card-label"}>{"Recife"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-78f9cbf88590.jpeg"} alt={"Salvador"}/><span className={"city-card-label"}>{"Salvador"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-e95c1fa57fe1.jpeg"} alt={"Curitiba"}/><span className={"city-card-label"}>{"Curitiba"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-cc6dc2c4af7f.jpeg"} alt={"Florianópolis"}/><span className={"city-card-label"}>{"Florianópolis"}</span></div>
<div className={"city-card"}><img src={"/assets/images/embedded-552f216afc80.jpeg"} alt={"Porto Alegre"}/><span className={"city-card-label"}>{"Porto Alegre"}</span></div>
</div>
</section>
<section className={"reajuste"}>
<div className={"reajuste-inner"}>
<div className={"reajuste-head"}>
<h2>{"Menor reajuste"}<span className={"accent"}>{"do mercado há 4 anos"}</span></h2>
<p>{"Controlado e previsível, para empresas de qualquer tamanho."}</p>
</div>
<div className={"reajuste-chart"}>
<div className={"reajuste-col is-alice"}>
<div className={"reajuste-value"}>{"11,20"}<sup>{"%"}</sup></div>
<div className={"reajuste-bar"} style={{"height":"90px"}}></div>
<div className={"reajuste-label"}>{"Alice"}</div>
</div>
<div className={"reajuste-col"}>
<div className={"reajuste-value"}>{"15,11"}<sup>{"%"}</sup></div>
<div className={"reajuste-bar"} style={{"height":"250px"}}></div>
<div className={"reajuste-label"}>{"Bradesco"}</div>
</div>
<div className={"reajuste-col"}>
<div className={"reajuste-value"}>{"15,23"}<sup>{"%"}</sup></div>
<div className={"reajuste-bar"} style={{"height":"266px"}}></div>
<div className={"reajuste-label"}>{"Sul América"}</div>
</div>
<div className={"reajuste-col"}>
<div className={"reajuste-value"}>{"15,87"}<sup>{"%"}</sup></div>
<div className={"reajuste-bar"} style={{"height":"298px"}}></div>
<div className={"reajuste-label"}>{"Porto Seguro"}</div>
</div>
<div className={"reajuste-col"}>
<div className={"reajuste-value"}>{"15,98"}<sup>{"%"}</sup></div>
<div className={"reajuste-bar"} style={{"height":"306px"}}></div>
<div className={"reajuste-label"}>{"Amil"}</div>
</div>
</div>
</div>
</section>
<section className={"vantagens"} id={"vantagens"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Vantagens Alice"}</span></div>
<h2>{"Resolutividade de verdade, "}<span className={"accent"}>{"no seu dia a dia."}</span></h2>
<div className={"feature-grid"}>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"}></path>
</svg></div>
<h3>{"70% das queixas de saúde são resolvidas em até 25 min"}</h3>
<p>{"Resolutividade de verdade, direto pelo Time de Saúde no aplicativo."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<circle cx={"12"} cy={"12"} r={"10"}></circle>
<path d={"M12 6v6l4 2"}></path>
</svg></div>
<h3>{"Resposta imediata, com atendimento em até 60s"}</h3>
<p>{"Rápido e simples, como deve ser — sem espera para ser ouvido."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M12 2 3 6v6c0 5.2 3.6 9.7 9 11 5.4-1.3 9-5.8 9-11V6z"}></path>
<path d={"m9 12 2 2 4-4"}></path>
</svg></div>
<h3>{"Profissionais especializados, 24h todos os dias"}</h3>
<p>{"Sempre disponível, a qualquer momento, para você e sua equipe."}</p>
</div>
</div>
</section>
<section className={"form-section"} id={"contato"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Por que escolher a Alice pela Liberty Saúde?"}</span>
<h2>{"A Alice, com a consultoria "}<span className={"accent"}>{"da Liberty ao seu lado."}</span></h2>
<ul className={"form-list"}>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Cotação personalizada para você ou sua empresa"}</li>
<li><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Atendimento rápido e humanizado"}</li>
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
<img src={"/assets/images/embedded-ff159dd955f8.png"} alt={"Alice"} className={"footer-logo"}/>
<span className={"footer-via"}>{"Cotação via"}<br/><strong>{"Liberty Saúde"}</strong></span>
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
<p>{"© 2026 Liberty Saúde Corretora de Seguros. Alice é marca de sua respectiva operadora — condições sujeitas a\n        análise e aprovação."}</p>
</div>
</footer>
<a href={"https://wa.me/5511989152642?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20plano%20Alice."} target={"_blank"} rel={"noopener"} className={"wa-float"} id={"waFloatBtn"} aria-label={"Falar no WhatsApp"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>
<ChatWidget className={"chat-widget"} id={"chatWidget"}>
<div className={"chat-widget-header"}>
<div className={"chat-widget-avatar"}>
<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<circle cx={"12"} cy={"8"} r={"4"}></circle>
<path d={"M4 21c0-4 3.6-7 8-7s8 3 8 7"}></path>
</svg>
</div>
<div>
<div className={"chat-widget-name"}>{"Ana · Liberty Saúde"}</div>
<div className={"chat-widget-status"}>{"Online agora"}</div>
</div>
<button className={"chat-widget-close"} id={"chatCloseBtn"} aria-label={"Fechar chat"}>{"✕"}</button>
</div>
<div className={"chat-widget-body"} id={"chatBody"}>
<div className={"chat-bubble-row"}>
<div className={"chat-bubble-avatar"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<circle cx={"12"} cy={"8"} r={"4"}></circle>
<path d={"M4 21c0-4 3.6-7 8-7s8 3 8 7"}></path>
</svg></div>
<div className={"chat-bubble"}>{"Oi, tudo bem? 😊"}</div>
</div>
<div className={"chat-bubble-row delay1"}>
<div className={"chat-bubble-avatar"}><svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<circle cx={"12"} cy={"8"} r={"4"}></circle>
<path d={"M4 21c0-4 3.6-7 8-7s8 3 8 7"}></path>
</svg></div>
<div className={"chat-bubble"}>{"Quer receber uma cotação do plano "}<strong>{"Alice"}</strong>{" agora mesmo, direto no\n          WhatsApp?"}</div>
</div>
<div className={"chat-cta-wrap"}>
<button className={"chat-cta-btn"} id={"chatCtaBtn"}>{"\n          SIM, EU QUERO!\n          "}<svg viewBox={"0 0 24 24"} fill={"none"} stroke={"#fff"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"M5 12h14M13 6l6 6-6 6"}></path>
</svg>
</button>
<p className={"chat-fineprint"}>{"Não vendemos seus dados. Veja nossa "}<Link to={"/politica-de-privacidade.html"}>{"Política de Privacidade"}</Link>{"."}</p>
</div>
</div>
</ChatWidget>


</>;}
