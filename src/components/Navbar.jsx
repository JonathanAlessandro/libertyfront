import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
export default function Navbar(){return <><Navigation className={"nav"} role={"navigation"}>
<div className={"nav-inner"}>
<img alt={"Liberty Saúde"} fetchPriority={"high"} className={"nav-logo"} src={"/assets/images/image-c0cd7413fee8.png"}/>
<ul className={"nav-links"}>
<li><Link to={"/#topo"}>{"Home"}</Link></li>
<li><Link to={"/#sobre"}>{"Quem somos"}</Link></li>
<li className={"nav-dropdown"}>
<button type="button" className={"nav-dropdown-trigger"} title={"Nossos planos de saúde"}>{"\n          Planos\n          "}<svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<path d={"m6 9 6 6 6-6"}></path>
</svg>
</button>
<ul className={"nav-dropdown-menu"}>
<li><Link to={"/pages/plano-de-saude-empresarial.html"} title={"Plano de Saúde Empresarial"}>{"Plano Empresarial"}</Link>
</li>
<li><Link to={"/pages/plano-de-saude-individual.html"} title={"Plano de Saúde Individual e Familiar"}>{"Plano\n              Individual e Familiar"}</Link></li>
<li><Link to={"/pages/comparativo-planos-de-saude.html"} title={"Comparativo de Planos de Saúde"}>{"Comparar\n              Operadoras"}</Link></li>
</ul>
</li>
<li><Link to={"/#operadoras"}>{"Operadoras"}</Link></li>
<li><Link to={"/cotacao.html"}>{"Contato"}</Link></li>
</ul>
<Link className={"nav-cta"} to={"/cotacao.html"}>{"\n      Fale com um especialista\n    "}</Link>
</div>
</Navigation></>;}
