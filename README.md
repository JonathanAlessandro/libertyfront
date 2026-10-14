# Liberty Saúde — React

Site completo em React, com 13 páginas, navegação interna pelo React Router e HTML pré-renderizado para cada endereço. A hospedagem continua estática: Node é necessário apenas para desenvolver e gerar o build.

## Desenvolvimento

Requer Node.js 20 ou superior.

```sh
npm ci
npm run dev
```

Abra `http://localhost:8080`. O comando gera o site, inicia o servidor local e recompila ao alterar `src/` ou `public/`; recarregue o navegador para ver suas alterações. `npm run preview` serve um build já gerado.

## Estrutura

- `src/pages/`: componentes das páginas inicial, planos, operadoras e documentos legais.
- `src/cotacao.jsx`: formulário em etapas, com nome e telefone obrigatórios no final.
- `src/components/`: navegação, cabeçalho, rodapé e comportamento do chat.
- `src/routes.json`: URLs, metadados SEO, dados estruturados e estilos de cada página.
- `src/styles/`: estilos existentes; o build os isola por página para evitar conflitos durante a navegação.
- `public/`: imagens, ícones, manifesto e sitemap.
- `scripts/build.mjs`: compila o React e pré-renderiza as páginas em `dist/`.
- `legacy-static/`: cópia de referência do site anterior, preservada e excluída do build.

## Deploy

```sh
npm ci
npm run build
```

**Publique o conteúdo de `dist/` na raiz do domínio.** Em serviços com build automático, configure o comando `npm run build` e o diretório de publicação `dist`. Não publique a pasta de código-fonte como site pronto.

As URLs atuais foram mantidas: `/`, `/pages/amil-saude-landing.html`, as demais páginas de planos e operadoras, `/politica-de-privacidade.html`, `/termos-de-servico.html` e `/cotacao.html`. Cada endereço tem um arquivo HTML físico, portanto acesso direto e atualização de página funcionam sem uma regra de fallback para a SPA. Configure `404.html` como página de erro da hospedagem, quando houver essa opção.

O build inclui conteúdo, título, descrição, canonical e dados estruturados no HTML inicial. O React hidrata esse conteúdo e atualiza os metadados ao navegar. Os arquivos JS e CSS recebem hash para evitar cache de versões antigas; publique a pasta completa de forma atômica quando a hospedagem permitir.

## Formulário e API

Fluxo: possui plano → operadora (se possui) → hospital → idades → possui CNPJ → CNPJ (se possui) → contato. Avançar e voltar preserva as respostas em memória, sem recarregar. Nome e telefone com DDD são obrigatórios; e-mail e autorizações são opcionais. Atualizar a página limpa o formulário.

O envio continua em `https://api.libertysaude.com.br/api/clientes`, com os campos `nome`, `email`, `telefone`, `cnpj`, `noCnpj`, `hospital`, `plano_atual`, `idades`, `aceitaEmails`, `aceitaWhatsapp` e `versaoPoliticaPrivacidade`.

O backend em `Documents/liberty` foi ajustado para aceitar e-mail opcional e exigir telefone com DDD. Publique e reinicie esse backend antes de disponibilizar o novo formulário: a inicialização torna `CLIENTES.email` anulável, preservando a unicidade dos e-mails preenchidos. O build do front não executa essa alteração no banco.

## Verificação

```sh
npm test
```

Os testes Playwright usam o Microsoft Edge instalado. Em outro ambiente, instale-o com `npx playwright install msedge`. Os testes verificam as 13 URLs, HTML pré-renderizado, hidratação, navegação sem recarga, metadados, estilos, menu móvel, chat, 404 e os caminhos do formulário. As requisições de cadastro são interceptadas; os testes não criam clientes reais.
