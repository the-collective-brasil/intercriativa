# Adaptar esta Caixa de Recursos para o Ano 5

Este pacote é o protótipo funcional do **Teste de Componente da Educação
Infantil (G5 · Infantil 5)**, projeto *A Natureza é Para Todos*.

Abra `index.html` com dois cliques. Não precisa de servidor, internet, npm nem
build. Tudo é HTML, CSS e JavaScript comum; o conteúdo mora em `data/*.js`.

## O que trocar, em ordem

**1 · `data/projeto.js`** — nome do projeto, turma, as 3 semanas (fase, título
do dia, objetivo, produto), as cores por tipo de aula e as 6 categorias da
Biblioteca. É o arquivo mais rápido de adaptar e o que mais muda a cara do app.

**2 · `data/sessoes.js`, `sessoes-s2.js`, `sessoes-s3.js`** — as nove sessões.
Cada sessão tem código, tipo de aula, assunto, objetivo, BNCC, materiais e os
passos numerados. Trocar o conteúdo aqui já reescreve as páginas de aula, o
PDF e as contagens.

**3 · `data/orientacoes.js`** — as Orientações do Dia e a tabela de Resultados e
documentação, uma entrada por semana.

**4 · `data/biblioteca.js`** — as entradas da Biblioteca. Os códigos são do
registro canônico da Educação Infantil (prefixo `EI5.`). **O Ano 5 precisa do
seu próprio registro de códigos.** Nunca reaproveite um código EI5.

## O que provavelmente muda de vocabulário

- **crianças → estudantes** (aparece em quase todo texto de conteúdo)
- **Educação Infantil G5 → Ano 5**
- **Modo de Brincar** — pode não existir no Ano 5. O campo já é opcional: basta
  pôr `"modoDeBrincar": null` e ele some da tela, do cartão e do PDF.
- **Tipos de aula** — Hora do Conto, Brincar ao Ar Livre, Oficina de
  Descobertas, Centros de Aprendizagem e Painel do Projeto são nomes da
  Educação Infantil. Os do Ano 5 vão em `coresAula` e `coresAulaTexto`
  (`data/projeto.js`); a regra de nomenclatura está em `shared/util.js`.

## O que NÃO precisa mexer

`shared/` inteiro — layout, tipografia, cores da marca, a revisão por seção
(Confirmada / Adaptar / Dúvida), o cronômetro, o progresso, as notas, as
dúvidas, o PDF e o envio para a planilha. Tudo isso é genérico e funciona com
qualquer conteúdo.

## Duas coisas a configurar

- **Planilha.** `shared/review.js`, linha `var SHEET_ENDPOINT`. Aponta para a
  planilha do teste da Educação Infantil. O Ano 5 precisa da sua própria: o
  código do Apps Script está em `tools/planilha-apps-script.gs`.
- **Logotipo.** `assets/intercriativa.png`. Serve para os dois.

## Publicar

Site estático: qualquer hospedagem serve. No GitHub Pages, suba o conteúdo desta
pasta na raiz do repositório e ative Settings → Pages. As rotas usam `#`
justamente para não dar 404 ao recarregar.

Mais detalhes em `LEIA-ME.md`.
