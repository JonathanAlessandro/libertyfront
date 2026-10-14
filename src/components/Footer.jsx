import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
export default function Footer(){return <><footer className={"footer"} role={"contentinfo"}>
<div className={"footer-top"}>
<img src={"/assets/images/image-c0cd7413fee8.png"} alt={"Liberty Saúde"} className={"footer-logo"}/>
<div className={"footer-contacts"}>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}>
<svg fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"} aria-hidden={"true"}>
<path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path>
</svg>
</div>
<div>
<div className={"footer-contact-title"}>{"(11) 98915-2642"}</div>
<div className={"footer-contact-sub"}>{"Fale no WhatsApp"}</div>
</div>
</div>
<div className={"footer-contact"}>
<div className={"footer-contact-icon"}>
<svg fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} viewBox={"0 0 24 24"} aria-hidden={"true"}>
<rect height={"16"} rx={"2"} width={"20"} x={"2"} y={"4"}></rect>
<path d={"m22 6-10 7L2 6"}></path>
</svg>
</div>
<div>
<div className={"footer-contact-title"}>{"\n            comercial@libertysaude.com.br\n          "}</div>
<div className={"footer-contact-sub"}>{"Envie um e-mail"}</div>
</div>
</div>
</div>
</div>
<div className={"footer-bottom"}>
<p>{"\n      © 2026 Liberty Saúde Corretora de Seguros. Todos os direitos reservados.\n    "}</p>
<p className={"footer-legal"}>
<Link to={"/politica-de-privacidade.html"}>{"Política de Privacidade"}</Link>
<span aria-hidden={"true"}>{" · "}</span>
<Link to={"/termos-de-servico.html"}>{"Termos de Serviço"}</Link>
</p>
</div>
</footer>
</>;}