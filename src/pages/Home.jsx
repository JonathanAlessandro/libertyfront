import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

export default function Home(){return <>
<div className={"top-block"} id={"topo"}>
<div id="navbar-container"><Navbar/></div>
<section className={"hero"} role={"main"}>
<div className={"hero-grid"}>
<div className={"hero-content"}>
<span className={"eyebrow on-navy"}>{"Planos de saúde para você e sua empresa"}</span>
<h1>{"O plano de saúde ideal para você e sua empresa"}<span className={"accent"}>{"com o melhor\n                            custo-benefício."}</span></h1>
<p className={"lead"}>{"Comparamos as principais operadoras do mercado e encontramos a proposta certa para\n                        você, sua família ou sua empresa."}</p>
<div className={"hero-features"}>
<div className={"hero-feature"}>
<div className={"hero-feature-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<circle cx={"9"} cy={"7"} r={"4"}></circle>
<path d={"M2 21c0-4 3.1-7 7-7s7 3 7 7"}></path>
<circle cx={"17"} cy={"7"} r={"3"}></circle>
<path d={"M23 21c0-3-2-5.5-4.5-6.4"}></path>
</svg></div>
<div className={"hero-feature-text"}>{"Atendimento especializado"}</div>
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
<div className={"hero-feature-text"}>{"Economia e tranquilidade"}</div>
</div>
<div className={"hero-feature"}>
<div className={"hero-feature-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}></path>
</svg></div>
<div className={"hero-feature-text"}>{"Consultoria personalizada"}</div>
</div>
</div>
<div className={"hero-actions"}>
<Link className={"btn-primary"} to={"/cotacao.html"}>{"Quero uma cotação"}</Link>
</div>
</div>
<div className={"hero-visual"}>
<div className={"hero-visual-shape"}>
<svg viewBox={"0 0 440 440"} xmlns={"http://www.w3.org/2000/svg"}>
<defs>
<linearGradient id={"ringGrad"} x1={"0%"} x2={"100%"} y1={"0%"} y2={"100%"}>
<stop offset={"0%"} stopColor={"#FAF6EE"} stopOpacity={"0.5"}></stop>
<stop offset={"100%"} stopColor={"#FAF6EE"} stopOpacity={"0.05"}></stop>
</linearGradient>
<linearGradient id={"orbGrad"} x1={"0%"} x2={"100%"} y1={"0%"} y2={"100%"}>
<stop offset={"0%"} stopColor={"#9C4B4F"}></stop>
<stop offset={"100%"} stopColor={"#5C2126"}></stop>
</linearGradient>
</defs>
<circle cx={"220"} cy={"220"} fill={"none"} r={"210"} stroke={"url(#ringGrad)"} strokeWidth={"1"}>
</circle>
<circle cx={"220"} cy={"220"} fill={"none"} r={"170"} stroke={"rgba(250,246,238,0.12)"} strokeWidth={"1"}></circle>
<circle cx={"220"} cy={"155"} fill={"url(#orbGrad)"} opacity={"0.9"} r={"88"}></circle>
<image height={"260"} href={"data:image/png;base64,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"} preserveAspectRatio={"xMidYMid meet"} width={"242"} x={"99"} y={"75"}></image>
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
<div className={"rule-eyebrow"}><span className={"eyebrow"}>{"Sobre a Liberty Saúde"}</span></div>
<h2>{"Especialistas em cuidar do que "}<span className={"accent"}>{"mais importa: pessoas."}</span></h2>
<p className={"sub"}>{"A Liberty Saúde é uma corretora especializada em planos de saúde. Nossa missão é encontrar a\n            melhor solução para você ou para a sua empresa, com atendimento consultivo, transparente e focado nas suas\n            necessidades."}</p>
<div className={"feature-grid"}>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<circle cx={"9"} cy={"7"} r={"4"}></circle>
<path d={"M2 21c0-4 3.1-7 7-7s7 3 7 7"}></path>
<circle cx={"17"} cy={"7"} r={"3"}></circle>
<path d={"M23 21c0-3-2-5.5-4.5-6.4"}></path>
</svg></div>
<h3>{"Atendimento personalizado"}</h3>
<p>{"Entendemos o seu perfil ou o da sua empresa para indicar o plano mais adequado."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M3 3v18h18"}></path>
<path d={"m19 9-5 5-4-4-4 4"}></path>
</svg></div>
<h3>{"Análise e comparação"}</h3>
<p>{"Comparamos as principais operadoras do mercado para garantir o melhor custo-benefício."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M11 17a5 5 0 0 0 6.94-6.94L14 6"}></path>
<path d={"m7 13-4 4"}></path>
<path d={"m17 9-4-4"}></path>
<path d={"m5 11 8 8"}></path>
</svg></div>
<h3>{"Suporte completo"}</h3>
<p>{"Acompanhamento em todas as etapas: antes, durante e depois da contratação."}</p>
</div>
<div className={"feature-card"}>
<div className={"feature-card-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M12 2 3 6v6c0 5.2 3.6 9.7 9 11 5.4-1.3 9-5.8 9-11V6z"}></path>
<path d={"m9 12 2 2 4-4"}></path>
</svg></div>
<h3>{"Tranquilidade"}</h3>
<p>{"Mais segurança e bem-estar para você, sua família e as pessoas que trabalham com você."}</p>
</div>
</div>
</section>
<section className={"operadoras"} id={"operadoras"}>
<span className={"eyebrow on-navy"}>{"As melhores opções do mercado"}</span>
<h2>{"Trabalhamos com as principais operadoras"}</h2>
<div className={"op-grid"}>
<Link to={"/pages/alice-saude-landing.html"} className={"op-card"}>
<img alt={"Alice Saúde - Plano de saúde com atendimento humanizado"} src={"/assets/images/image-b29a62633097.webp"}/>
</Link>
<Link to={"/pages/amil-saude-landing.html"} className={"op-card"}>
<img alt={"Amil - Operadora de plano de saúde individual e empresarial"} src={"/assets/images/image-c6a25ff368ba.webp"}/>
</Link>
<Link to={"/pages/bradesco-saude-landing.html"} className={"op-card"}>
<img alt={"Bradesco Saúde - Convênio médico com ampla rede credenciada"} src={"/assets/images/image-eacfe23ed692.webp"}/>
</Link>
<Link to={"/pages/hapvida-saude-landing.html"} className={"op-card"}>
<img alt={"Hapvida NotreDame Intermédica - Plano de saúde acessível"} src={"/assets/images/image-fdb704a2efb8.webp"}/>
</Link>
<Link to={"/pages/porto-saude-landing.html"} className={"op-card"}>
<img alt={"Porto Saúde - Seguro saúde para você e sua família"} src={"/assets/images/image-fa19ee573a93.webp"}/>
</Link>
<Link to={"/pages/sulamerica-saude-landing.html"} className={"op-card"}>
<img alt={"SulAmérica Saúde - Plano médico nacional com cobertura completa"} src={"/assets/images/image-7ee8dd8affd8.webp"}/>
</Link>
</div>
<p className={"op-note"}>{"E muitas outras. Temos a solução ideal para o seu perfil."}</p>
<div className={"op-secondary"}>
<div className={"op-grid-secondary"}>
<div className={"op-card-sm"}><img alt={"MedSênior - Plano de saúde para idosos e melhores idades"} src={"/assets/images/image-0f8c8c1abf17.webp"}/></div>
<div className={"op-card-sm"}><img alt={"Prevent Senior - Convênio médico para a melhor idade"} src={"/assets/images/image-fcb0ceb5aa4b.webp"}/></div>
<div className={"op-card-sm"}><img alt={"Sami Saúde - Plano de saúde com foco em prevenção"} src={"/assets/images/image-6f2eda355e9e.webp"}/></div>
<div className={"op-card-sm"}><img alt={"Santa Helena Saúde - Operadora de plano médico credenciada"} src={"/assets/images/image-067fd0322fbd.webp"}/>
</div>
<div className={"op-card-sm"}><img alt={"São Cristóvão Saúde - Seguro saúde de qualidade"} src={"/assets/images/image-1665399e5df7.webp"}/>
</div>
<div className={"op-card-sm"}><img alt={"Seguros Unimed - Cooperativa médica nacional"} src={"/assets/images/image-7269115f0cc4.webp"}/></div>
<div className={"op-card-sm"}><img alt={"Uni Hosp Saúde - Plano de saúde com rede hospitalar própria"} src={"/assets/images/image-11a144cdc78f.webp"}/></div>
</div>
</div>
</section>
<section className={"form-section"}>
<div className={"form-wrap"}>
<div className={"form-copy"}>
<span className={"eyebrow"}>{"Por que escolher a Liberty Saúde?"}</span>
<h2>{"Mais que corretora, "}<span className={"accent"}>{"compromisso com você."}</span></h2>
<ul className={"form-list"}>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Especialistas em planos de saúde individuais e empresariais"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Atendimento rápido e humanizado"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Soluções sob medida para o seu perfil"}</li>
<li><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2.2"} viewBox={"0 0 24 24"}>
<path d={"M20 6 9 17l-5-5"}></path>
</svg>{"Atuação em todo o território nacional e internacional"}</li>
</ul>
<div className={"form-callout"}>
<div className={"form-callout-icon"}><svg fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}>
</path>
</svg></div>
<div>
<div className={"form-callout-title"}>{"Fale agora com um especialista"}</div>
<a className={"form-callout-value"} href={"https://wa.me/5511989152642"} rel={"noopener"} target={"_blank"}>{"(11) 98915-2642"}</a>
</div>
</div>
</div>
<div className={"form-card"}><h3>{"Sua cotação, uma pergunta de cada vez"}</h3><p>{"Conte o que você precisa e receba uma proposta personalizada."}</p><Link className={"btn-primary"} to={"/cotacao.html"}>{"Começar minha cotação"}</Link></div>
</div>
</section>

<footer className={"footer"}>
<div className={"footer-top"}>
<img alt={"Liberty Saúde Corretora de Planos de Saúde - Sua corretora de seguros saúde"} className={"footer-logo"} src={"/assets/images/image-c0cd7413fee8.webp"}/>
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
<p className={"footer-legal"}><Link to={"/politica-de-privacidade.html"}>{"Política de Privacidade"}</Link></p>
</div>
</footer>
<a aria-label={"Falar no WhatsApp"} className={"wa-float"} href={"https://wa.me/5511945189498?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20planos%20de%20sa%C3%BAde."} rel={"noopener"} target={"_blank"}>
<svg viewBox={"0 0 32 32"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.73-1.76a11.98 11.98 0 0 0 4.29.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm7.03 17.2c-.3.85-1.5 1.55-2.45 1.75-.65.14-1.5.25-4.36-.94-3.65-1.51-6-5.2-6.18-5.44-.18-.24-1.48-1.97-1.48-3.75 0-1.78.93-2.65 1.26-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"}></path>
</svg>
</a>


</>;}
