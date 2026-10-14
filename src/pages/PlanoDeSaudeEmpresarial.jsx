import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

export default function PlanoDeSaudeEmpresarial(){return <>
<div className={"top-block"} id={"topo"}>
<div id="navbar-container"><Navbar/></div>
<section className={"hero"}>
<div className={"hero-grid"}>
<div className={"hero-content"}>
<span className={"eyebrow on-navy"}>{"Plano de Saúde Empresarial"}</span>
<h1>{"Plano de saúde empresarial"}<span className={"accent"}>{"com desconto por CNPJ."}</span></h1>
<p className={"lead"}>{"Comparamos as principais operadoras para encontrar o plano ideal para sua\n                        empresa, a partir de 2 vidas — com cotação gratuita e sem compromisso."}</p>
<div className={"empresarial-badges"}>
<span className={"empresarial-badge"}>{"A partir de 2 vidas"}</span>
<span className={"empresarial-badge"}>{"Aceita MEI"}</span>
<span className={"empresarial-badge"}>{"Desconto por CNPJ"}</span>
</div>
<div className={"hero-features"}>
<div className={"hero-feature"}>
<div className={"hero-feature-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}></path>
</svg></div>
<div className={"hero-feature-text"}>{"Consultoria personalizada"}</div>
</div>
<div className={"hero-feature"}>
<div className={"hero-feature-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M12 2 3 6v6c0 5.2 3.6 9.7 9 11 5.4-1.3 9-5.8 9-11V6z"}></path>
</svg></div>
<div className={"hero-feature-text"}>{"As melhores operadoras"}</div>
</div>
<div className={"hero-feature"}>
<div className={"hero-feature-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<circle cx={"12"} cy={"12"} r={"9"}></circle>
<path d={"M12 7v5l3 3"}></path>
</svg></div>
<div className={"hero-feature-text"}>{"Economia para sua empresa"}</div>
</div>
</div>
<div className={"hero-actions"}>
<Link className={"btn-primary"} to={"/cotacao.html"}>{"Quero uma cotação empresarial"}</Link>
</div>
</div>
<div className={"hero-visual"}>
<div className={"hero-visual-shape"}>
<svg viewBox={"0 0 440 440"} xmlns={"http://www.w3.org/2000/svg"}>
<defs>
<linearGradient id={"ringGrad2"} x1={"0%"} x2={"100%"} y1={"0%"} y2={"100%"}>
<stop offset={"0%"} stopColor={"#FAF6EE"} stopOpacity={"0.5"}></stop>
<stop offset={"100%"} stopColor={"#FAF6EE"} stopOpacity={"0.05"}></stop>
</linearGradient>
<linearGradient id={"orbGrad2"} x1={"0%"} x2={"100%"} y1={"0%"} y2={"100%"}>
<stop offset={"0%"} stopColor={"#9C4B4F"}></stop>
<stop offset={"100%"} stopColor={"#5C2126"}></stop>
</linearGradient>
</defs>
<circle cx={"220"} cy={"220"} fill={"none"} r={"210"} stroke={"url(#ringGrad2)"} strokeWidth={"1"}>
</circle>
<circle cx={"220"} cy={"220"} fill={"none"} r={"170"} stroke={"rgba(250,246,238,0.12)"} strokeWidth={"1"}></circle>
<circle cx={"220"} cy={"155"} fill={"url(#orbGrad2)"} opacity={"0.9"} r={"88"}></circle>
<circle cx={"80"} cy={"330"} fill={"#FAF6EE"} opacity={"0.4"} r={"4"}></circle>
<circle cx={"360"} cy={"90"} fill={"#FAF6EE"} opacity={"0.3"} r={"3"}></circle>
<circle cx={"370"} cy={"340"} fill={"#9C4B4F"} opacity={"0.6"} r={"5"}></circle>
</svg>
</div>
</div>
</div>
</section>
</div>
<section className={"sobre"} id={"sobre"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Por que contratar via CNPJ"}</span></div>
<h2>{"Mais economia para "}<span className={"accent"}>{"você e sua equipe."}</span></h2>
<p className={"sub"}>{"Planos empresariais costumam ter mensalidades menores que planos individuais equivalentes,\n            porque são contratados como apólice coletiva. A maioria das operadoras aceita empresas a partir de 2 ou\n            3 vidas — inclusive MEI, em algumas condições."}</p>
<div className={"feature-grid"}>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<circle cx={"9"} cy={"7"} r={"4"}></circle>
<path d={"M2 21c0-4 3.1-7 7-7s7 3 7 7"}></path>
<circle cx={"17"} cy={"7"} r={"3"}></circle>
<path d={"M23 21c0-3-2-5.5-4.5-6.4"}></path>
</svg></div>
<h3>{"A partir de 2 vidas"}</h3>
<p>{"Empresas pequenas também têm acesso a condições de plano coletivo empresarial."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M3 3v18h18"}></path>
<path d={"m19 9-5 5-4-4-4 4"}></path>
</svg></div>
<h3>{"Comparação entre operadoras"}</h3>
<p>{"Analisamos preço, rede credenciada e cobertura para o perfil da sua empresa."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<rect height={"16"} rx={"2"} width={"18"} x={"3"} y={"4"}></rect>
<path d={"M3 10h18"}></path>
</svg></div>
<h3>{"Aceita MEI"}</h3>
<p>{"Diversas operadoras aceitam microempreendedores individuais em condições específicas."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M12 2 3 6v6c0 5.2 3.6 9.7 9 11 5.4-1.3 9-5.8 9-11V6z"}></path>
<path d={"m9 12 2 2 4-4"}></path>
</svg></div>
<h3>{"Suporte completo"}</h3>
<p>{"Acompanhamento em todas as etapas: cotação, contratação e pós-venda."}</p>
</div>
</div>
</section>
<section className={"operadoras"} id={"operadoras"}>
<span className={"eyebrow on-navy"}>{"As melhores opções do mercado"}</span>
<h2>{"Operadoras disponíveis para plano empresarial"}</h2>
<div className={"op-grid"}>
<Link to={"/pages/alice-saude-landing.html"} className={"op-card"}>
<img alt={"Alice Saúde - Plano de saúde empresarial com atendimento humanizado"} src={"/assets/images/image-b29a62633097.png"}/>
</Link>
<Link to={"/pages/amil-saude-landing.html"} className={"op-card"}>
<img alt={"Amil - Plano de saúde empresarial"} src={"/assets/images/image-c6a25ff368ba.png"}/>
</Link>
<Link to={"/pages/bradesco-saude-landing.html"} className={"op-card"}>
<img alt={"Bradesco Saúde para empresas"} src={"/assets/images/image-eacfe23ed692.png"}/>
</Link>
<Link to={"/pages/hapvida-saude-landing.html"} className={"op-card"}>
<img alt={"Hapvida NotreDame Intermédica - Plano de saúde empresarial acessível"} src={"/assets/images/image-fdb704a2efb8.png"}/>
</Link>
<Link to={"/pages/porto-saude-landing.html"} className={"op-card"}>
<img alt={"Porto Saúde - Plano empresarial"} src={"/assets/images/image-fa19ee573a93.png"}/>
</Link>
<Link to={"/pages/sulamerica-saude-landing.html"} className={"op-card"}>
<img alt={"SulAmérica Saúde - Plano empresarial com cobertura completa"} src={"/assets/images/image-7ee8dd8affd8.png"}/>
</Link>
</div>
<p className={"op-note"}>{"E muitas outras, incluindo Unimed. Temos a solução ideal para o porte da sua empresa."}</p>
</section>
<section className={"faq-section"} id={"faq"}>
<div className={"faq-wrap"}>
<div className={"faq-header"}>
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Dúvidas frequentes"}</span></div>
<h2>{"O que as empresas mais "}<span className={"accent"}>{"perguntam."}</span></h2>
</div>
<div className={"faq-item"}>
<h3>{"Qual o valor de um plano de saúde empresarial?"}</h3>
<p>{"Varia conforme operadora, número de vidas, faixa etária e abrangência da rede. Em geral, sai mais\n                    barato que um plano individual equivalente. Fazemos a cotação comparando várias operadoras sem\n                    custo."}</p>
</div>
<div className={"faq-item"}>
<h3>{"Qual é o melhor plano de saúde para empresa?"}</h3>
<p>{"Depende do número de funcionários, região de atuação, orçamento e rede hospitalar desejada.\n                    Comparamos Amil, Bradesco Saúde, Hapvida, SulAmérica, Unimed e outras para indicar a opção mais\n                    adequada ao seu caso."}</p>
</div>
<div className={"faq-item"}>
<h3>{"Quem tem CNPJ paga mais barato em plano de saúde?"}</h3>
<p>{"Na maioria dos casos, sim — planos via CNPJ são classificados como contratação coletiva\n                    empresarial, com mensalidades menores. Muitas operadoras aceitam empresas a partir de 2 ou 3\n                    vidas, incluindo MEI."}</p>
</div>
<div className={"faq-item"}>
<h3>{"Qual o valor do plano Unimed empresarial?"}</h3>
<p>{"A Unimed opera por cooperativas regionais, então o valor muda conforme a cidade, número de vidas e\n                    faixa etária. Fazemos uma cotação personalizada comparando a Unimed com outras operadoras para o\n                    seu CNPJ."}</p>
</div>
</div>
</section>
<section className={"form-section"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Por que escolher a Liberty Saúde?"}</span>
<h2>{"Mais que corretora, "}<span className={"accent"}>{"compromisso com sua empresa."}</span></h2>
<ul className={"form-list"}>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Especialistas em planos de saúde empresariais"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Atendimento rápido e humanizado"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Soluções sob medida para o porte da sua empresa"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Atuação em todo o território nacional"}</li>
</ul>
<div className={"form-callout"}>
<div className={"form-callout-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}>
</path>
</svg></div>
<div>
<div className={"form-callout-title"}>{"Fale agora com um especialista"}</div>
<a className={"form-callout-value"} href={"https://wa.me/5511945189498"} rel={"noopener"} target={"_blank"}>{"(11) 94518-9498"}</a>
</div>
</div>
</div>

<div className={"form-card"}><h3>{"Sua cotação, uma pergunta de cada vez"}</h3><p>{"Conte o que você precisa e receba uma proposta personalizada."}</p><Link className={"btn-primary"} to={"/cotacao.html"}>{"Começar minha cotação"}</Link></div>
</div>
</section>


<footer className={"footer"}>
<div className={"footer-top"}>
<img alt={"Liberty Saúde Corretora de Planos de Saúde - Sua corretora de seguros saúde"} className={"footer-logo"} src={"/assets/images/image-c0cd7413fee8.png"}/>
<div className={"footer-contacts"}>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}>
</path>
</svg></div>
<div>
<div className={"footer-contact-title"}>{"(11) 98915-2642"}</div>
<div className={"footer-contact-sub"}>{"Fale no WhatsApp"}</div>
</div>
</div>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<rect height={"16"} rx={"2"} width={"20"} x={"2"} y={"4"}></rect>
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
<p>{"© 2026 Liberty Saúde Corretora de Seguros. Todos os direitos reservados."}</p>
</div>
</footer>

<a aria-label={"Falar no WhatsApp"} className={"wa-float"} href={"https://wa.me/5511989152642?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20plano%20de%20sa%C3%BAde%20empresarial."} rel={"noopener"} target={"_blank"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>



</>;}
