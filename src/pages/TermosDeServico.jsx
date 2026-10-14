import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import ChatWidget from '../components/ChatWidget.jsx';

export default function TermosDeServico(){return <>
<header className={"top-block"} id={"topo"}>
<div id="navbar-container"><Navbar/></div>
<div className={"terms-hero"}>
<span className={"eyebrow on-navy"}>{"Clareza em nosso atendimento"}</span>
<h1>{"Termos de Serviço"}</h1>
<p>{"Conheça as condições para utilizar o site e os canais de atendimento da Liberty Saúde."}</p>
</div>
</header>
<main className={"terms-main"}>
<article className={"terms-card"}>
<p className={"terms-updated"}><strong>{"Última atualização:"}</strong>{" 10 de setembro de 2026."}</p>
<section>
<h2>{"1. Aceitação dos termos"}</h2>
<p>{"Estes Termos de Serviço regulam o acesso ao site e aos canais digitais da Liberty Saúde Corretora de Seguros (“Liberty Saúde”, “nós”). Ao utilizar esses canais ou solicitar atendimento, você declara que leu e aceita estas condições. Se não concordar, interrompa o uso dos serviços."}</p>
</section>
<section>
<h2>{"2. Nossos serviços"}</h2>
<p>{"A Liberty Saúde atua na intermediação e consultoria de planos e seguros de saúde. Nosso site e nossos canais permitem solicitar informações, comparar alternativas, pedir cotações e iniciar o atendimento para uma possível contratação."}</p>
<p>{"A Liberty Saúde não é operadora de plano de saúde nem seguradora. A contratação, as coberturas, a rede credenciada, os preços, as carências, a aceitação da proposta e as demais condições do produto são definidos pela respectiva operadora ou seguradora e constam nos documentos contratuais aplicáveis."}</p>
</section>
<section>
<h2>{"3. Cotações e contratação"}</h2>
<p>{"Simulações e cotações têm caráter informativo e podem mudar após análise dos dados, atualização de tabelas, regras comerciais, disponibilidade regional ou avaliação da operadora. Uma cotação não representa garantia de preço, cobertura, aceitação ou contratação."}</p>
<p>{"Antes de contratar, confira a proposta, as condições gerais, a rede credenciada, as exclusões, as carências e os documentos fornecidos pela operadora ou seguradora. A contratação somente se conclui após o cumprimento das exigências e a confirmação pelas partes responsáveis."}</p>
</section>
<section>
<h2>{"4. Responsabilidades do usuário"}</h2>
<p>{"Ao utilizar nossos canais, você se compromete a:"}</p>
<ul>
<li>{"fornecer informações verdadeiras, atuais e completas;"}</li>
<li>{"não se passar por outra pessoa nem fornecer dados de terceiros sem autorização;"}</li>
<li>{"conferir os dados, valores e condições antes de aceitar uma proposta;"}</li>
<li>{"usar o site e os canais de forma lícita, sem tentar comprometer sua segurança ou funcionamento;"}</li>
<li>{"manter seus dispositivos e meios de contato protegidos contra acessos indevidos."}</li>
</ul>
</section>
<section>
<h2>{"5. Comunicações por e-mail, SMS, RCS e WhatsApp"}</h2>
<p>{"Com sua solicitação ou autorização, podemos entrar em contato por telefone, e-mail, SMS, RCS ou WhatsApp para dar continuidade ao atendimento, enviar cotações, avisos e comunicações relacionadas aos serviços."}</p>
<p>{"Comunicações promocionais poderão conter opções de resposta, links e botões. Você pode solicitar o encerramento dessas comunicações a qualquer momento pelos mecanismos indicados na mensagem ou por nossos canais de contato. O pedido não impede comunicações necessárias a uma contratação ou atendimento em andamento."}</p>
</section>
<section>
<h2>{"6. Conteúdo e propriedade intelectual"}</h2>
<p>{"Textos, marcas, logotipos, elementos visuais, códigos e demais conteúdos do site pertencem à Liberty Saúde ou são utilizados mediante autorização. É permitido acessar o conteúdo para uso pessoal e informativo. Reprodução, alteração, distribuição ou exploração comercial dependem de autorização prévia, salvo quando permitidas por lei."}</p>
</section>
<section>
<h2>{"7. Links e serviços de terceiros"}</h2>
<p>{"O site pode conter links para operadoras, seguradoras, WhatsApp e outros serviços externos. Esses ambientes possuem termos, políticas e práticas próprias. A Liberty Saúde não controla a disponibilidade, a segurança ou o conteúdo de plataformas de terceiros."}</p>
</section>
<section>
<h2>{"8. Privacidade e dados pessoais"}</h2>
<p>{"O tratamento de dados pessoais relacionado ao site e aos atendimentos segue nossa "}<Link to={"/politica-de-privacidade.html"}>{"Política de Privacidade"}</Link>{". Consulte esse documento para saber quais dados coletamos, como os utilizamos e como exercer seus direitos."}</p>
</section>
<section>
<h2>{"9. Disponibilidade dos canais"}</h2>
<p>{"Trabalhamos para manter nossos canais acessíveis e seguros, mas eles podem ficar temporariamente indisponíveis por manutenção, falhas de fornecedores, problemas de conexão ou eventos fora de nosso controle. Quando possível, adotaremos medidas para restabelecer o funcionamento."}</p>
</section>
<section>
<h2>{"10. Responsabilidade"}</h2>
<p>{"A Liberty Saúde responde por seus atos de intermediação e atendimento nos limites da legislação aplicável. Não somos responsáveis por decisões, sistemas ou obrigações próprias de operadoras, seguradoras e outros terceiros, sem prejuízo dos direitos assegurados ao consumidor."}</p>
<p>{"Nada nestes termos exclui ou restringe direitos ou responsabilidades que não possam ser afastados pela legislação brasileira."}</p>
</section>
<section>
<h2>{"11. Alterações destes termos"}</h2>
<p>{"Podemos atualizar estes termos para refletir mudanças legais, operacionais ou nos serviços. A versão vigente será publicada nesta página com a data de atualização. O uso dos canais após a publicação fica sujeito à nova versão."}</p>
</section>
<section>
<h2>{"12. Legislação e solução de conflitos"}</h2>
<p>{"Estes termos são regidos pela legislação brasileira. Dúvidas ou divergências poderão ser encaminhadas primeiro aos nossos canais de atendimento. Permanecem assegurados ao consumidor os meios de proteção e o foro competente previstos em lei."}</p>
</section>
<section className={"terms-contact"}>
<h2>{"13. Contato"}</h2>
<p>{"Para dúvidas sobre estes termos, entre em contato pelo e-mail "}<a href={"mailto:tecnologia@libertysaude.com.br"}>{"tecnologia@libertysaude.com.br"}</a>{" ou pelo WhatsApp "}<a href={"https://wa.me/5511989152642"}>{"(11) 98915-2642"}</a>{"."}</p>
</section>
</article>
</main>
<div id="footer-container"><Footer/></div>

</>;}
