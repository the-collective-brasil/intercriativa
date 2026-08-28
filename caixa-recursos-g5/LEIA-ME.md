# Caixa de Recursos Digitais · G5

Protótipo funcional do Teste de Componentes — projeto *A Natureza é Para Todos*, Educação Infantil G5.

## Como abrir

Clique duas vezes em `index.html`. Não precisa de servidor, internet ou instalação.

## O que é real e o que ainda é marcador

**Real:** as nove sessões, com o conteúdo completo vindo das páginas do Notion
*Lesson Plans · Week 1/2/3*, conferidas contra a fonte em 28/08. A revisão seção por seção, o timer, o progresso,
as notas, as dúvidas e o PDF funcionam de verdade.

**Real também:** as Orientações do Dia e a tabela de Resultados e documentação
das três semanas, vindas das páginas Notion "Orientações do Dia · Semana 1/2/3".

**Real também:** as 14 entradas da Semana 1 na Biblioteca Digital, com o texto
verbatim do Notion na estrutura Resumo · Quando utilizar · Como conduzir · Dica ·
Recursos relacionados · Onde aparece.

**Marcador:** as imagens das Páginas da Criança, os arquivos para baixar, e as
entradas da Biblioteca cujo status ainda não é Done — essas mostram código,
título, categoria e o status atual.

## Estrutura

```
index.html          Início · Revista · Semana · Biblioteca · Materiais
sessao.html         a página da sessão, com a revisão
shared/             estilos e comportamento
  print.css         o layout do PDF
data/
  projeto.js        projeto, semanas, categorias, cores
  orientacoes.js    Orientações do Dia e a tabela de resultados, por semana
  sessoes.js        Semana 1
  sessoes-s2.js     Semana 2
  sessoes-s3.js     Semana 3
  biblioteca.js     entradas da Biblioteca, importadas da base Notion
                    "Component Test · Digital Library Entries"
tools/
  planilha-apps-script.gs   o código para ligar o envio à planilha
```

Nada é escrito à mão na interface: "3 semanas · 9 sessões", "6 de 8 seções
revisadas" e as contagens por categoria saem sempre dos dados. Acrescente uma
sessão em `data/` e as contagens, a página da semana e a navegação anterior e
próxima se atualizam sozinhas.

## Envio para a planilha

**Ligado e testado.** Ao concluir uma revisão, o botão **Enviar resultados**
grava uma linha na planilha: sessão, semana, tempo, quantas seções ficaram
confirmadas, para adaptar e em dúvida, e o texto de cada nota e pergunta.

O endereço está em `shared/review.js`, na linha `var SHEET_ENDPOINT`. Para
apontar para outra planilha, basta trocar esse endereço — o código do Apps
Script continua em `tools/planilha-apps-script.gs`.

A resposta da planilha é lida de verdade: se o envio falhar, a educadora vê um
aviso claro e as marcações continuam guardadas no aparelho. O botão nunca diz
"enviado" sem ter sido.

## Publicar

Como é um site estático, qualquer hospedagem serve. Pelo GitHub Pages:

1. Crie um repositório novo, por exemplo `caixa-recursos-g5`.
2. Suba o conteúdo desta pasta na raiz do repositório.
3. Settings → Pages → Source: `main`, pasta `/root`. Salvar.
4. O endereço fica `https://<seu-usuario>.github.io/caixa-recursos-g5/`.

As rotas usam `#` (por exemplo `#/revista/semana/1`) justamente para que os
links funcionem numa hospedagem estática, sem 404 ao recarregar a página.

## Decisões tomadas

| Ponto | Decisão |
|---|---|
| Início do timer | Botão explícito **Iniciar revisão**, não ao abrir a página |
| Se fechar no meio | Tudo fica guardado no navegador do aparelho e volta ao reabrir |
| Reabrir revisão concluída | Sim; o tempo registrado continua o da primeira passagem |
| Trocar de opção | O texto já escrito é preservado, com aviso antes de deixar de aparecer |
| Links da Biblioteca | Painel lateral no notebook, página inteira no celular; volta ao bloco de origem |
| Nome do PDF | `Plano-Revisado_<código>_<data>` |
| Seções revisáveis | Cada passo numerado e a Dica. Resultados e documentação têm aba própria; os materiais estão nas Orientações do Dia |

## Como uma aula é nomeada

O nome de uma aula é o seu **tipo canônico** — Hora do Conto, Brincar ao Ar Livre,
Oficina de Descobertas, Centros de Aprendizagem, Painel do Projeto — como na
Orientações do Educador impressas. O texto descritivo do Notion ("Pesquisa com Amigos",
"Ideias na Cabeça") é o **assunto do dia** e aparece como subtítulo, nunca como
nome da aula. O componente (Alfabetização, Matemática) não entra no nome: as
duas Oficinas de Descobertas da Semana 2 se distinguem pelo código e pelo
assunto, e o componente continua visível no campo Foco de cada sessão.

Isso vale em todo lugar: cartões da semana, cabeçalho da sessão, migalhas,
navegação anterior e próxima, busca e PDF. A regra está em `shared/util.js`.

## De onde vem o visual

O sistema visual foi importado do projeto Claude Design **"teste - digital
library"**, arquivo `Intercriativa Lab · Recursos Digitais.dc.html`. Dali vêm a
tipografia, a paleta, as métricas de coluna e o formato dos cartões, das abas e
das folhas. `shared/tokens.css` é a tradução desse arquivo.

## Marca, tipografia e cores

O logotipo está em `assets/intercriativa.png` (versão escura, para fundo claro).
`assets/intercriativa-claro.png` é a versão para fundo escuro, ainda sem uso.

**Uma família só: Archivo.** Os títulos grandes são de peso leve (400) com a
última palavra em negrito e na cor da aula — é o gesto tipográfico da marca.

Fundo **#F4F5F8**, cartões brancos, tinta **#1B1D22**, roxo **#8830EC** com
**#6A16C4** para texto e links.

Cores das aulas, direto do design: azul **#123F72**, teal **#17AFB9**, laranja
**#E8912D**, roxo **#6E4B9E**, rosa **#D9245E**.

Duas delas reprovam em contraste quando carregam texto — o teal dá 2,7:1 e o
laranja 2,5:1, contra os 4,5:1 exigidos. Por isso cada cor tem um par: a cor do
design para faixas, fios, fundos e etiquetas, e uma versão escurecida
(`--teal-txt`, `--laranja-txt`) só para texto. O tom é o mesmo; muda a
legibilidade.

O design é denso para notebook: corpo de 12 a 14 px. No celular o corpo sobe
para 16 px e os alvos de toque para 44 px, como o PRD exige.

| Onde | Cor |
|---|---|
| Estrutura, Orientações do Dia | roxo |
| Hora do Conto, Orientações do Educador | azul |
| Oficina de Descobertas | teal |
| Centros de Aprendizagem | roxo da aula |
| Brincar ao Ar Livre, Materiais da Criança | laranja |
| Painel do Projeto | rosa |

A cor identifica o **tipo de aula**, não o bloco de aprendizagem — é assim que as
Orientações do Educador impressas funcionam. Está em `coresAula`, em `data/projeto.js`.

## Padrões de interface

- **Cartões horizontais.** Faixa colorida à esquerda, título com um fio curto na
  cor do cartão, descrição, contagem e a ação num botão contornado à direita.
- **Rótulo de seção.** Versalete espaçado seguido de um fio que ocupa o resto da
  linha (`.rule`).
- **Abas do dia.** Orientações do Dia · Resultados e documentação · e as três
  sessões pelo nome canônico. Aparecem nas Orientações e dentro de cada sessão,
  para trocar de parte do dia sem voltar.
- **Folha branca** (`.sheet`) para páginas de leitura, como no material impresso.

## Convenções de texto na sessão

- **Itálico** para tudo o que a educadora diz às crianças (`<em class="fala">`).
- **Negrito** para todo nome de recurso ou estratégia. Quando existe entrada na
  Biblioteca, o nome também é link (`<a class="bib">`); quando não existe, fica só
  em negrito (`<em class="mat">`).
- Não há mais lista de recursos no pé da sessão: cada recurso é link no ponto
  exato da instrução onde a educadora precisa dele.

## Biblioteca Digital

Importada da base Notion **Component Test · Digital Library Entries**. Regras:

- O conteúdo é **verbatim**. Não reescrever, resumir nem reformatar.
- Só entradas com **Status = Done** ficam visíveis; as outras mostram o
  marcador com código, título, categoria e status.
- O **Type** do Notion define a categoria: Rotina, Estratégia, Material,
  Proposta, Avaliação, Guia.
- A **Descrição** de uma linha é o subtítulo do cartão na lista.
- Os **códigos** vêm da Parte 4 do documento-fonte. Nunca inventar, renumerar
  nem reutilizar um código. **EI5.PRO.03 está aposentado** (era Experimentar com
  Aquarela, incorporada em PRO.01) e o Cartão de Entrevista foi substituído por
  Fichas de Votação (MAT.07). O registro está em `BIBLIOTECA_APOSENTADOS`.
- Entradas marcadas com `foraDaBase` têm código na Parte 4 mas ainda não têm
  linha na base do Teste de Componente. Aparecem como marcador.
- `[código biblioteca]` vira link para outra entrada; `[biblioteca digital]`
  vira chip tracejado laranja, para página da criança. São visualmente distintos.

## O que a educadora pode abrir

Duas listas em `data/projeto.js` controlam isso. Hoje as duas valem `[1]`.

| Lista | O que libera |
|---|---|
| `semanasLiberadas` | a semana inteira |
| `paginasLiberadas` | só as imagens das Páginas da Criança, dentro de uma semana já liberada |

**Semana trancada.** Fora de `semanasLiberadas`, a semana some do caminho: o
cartão na Revista aparece cinza com cadeado e não abre, as abas do dia não
aparecem, as páginas de Orientações do Dia e Resultados mostram o aviso de
trancada, a busca não devolve as sessões daquela semana, e a sessão não abre nem
por link direto. Hoje **as Semanas 2 e 3 estão trancadas**. Para liberar a
Semana 2, escreva `[1, 2]`.

A Biblioteca Digital continua inteira o tempo todo — ela é referência, não
material de semana.

## Materiais da Criança

A página reúne as Páginas da Criança na ordem das semanas. Cada página junta as
duas metades que antes viviam separadas: a **imagem**, gerada do PDF do caderno
e guardada em `assets/paginas/`, e o **texto de como conduzi-la**, que vem da
Biblioteca. Ao tocar numa página, a educadora vê a folha inteira e, abaixo dela,
o Resumo, o Quando utilizar, o Como conduzir e a Dica da entrada correspondente.

O elo é o campo `bib` de cada item em `paginasDaCrianca` (em `data/sessoes*.js`),
que guarda o slug da entrada. Nada é escrito duas vezes: se o texto mudar na
Biblioteca, muda aqui também.

O selo no cartão diz o estado de cada página, sem maquiar:

| Selo | O que significa |
|---|---|
| **Como usar na Biblioteca** (verde) | a entrada existe e tem o passo a passo completo |
| **Entrada sem passo a passo** (âmbar) | a entrada existe, mas só com a descrição de uma linha |
| **Sem entrada na Biblioteca** (vermelho) | a página não tem entrada nenhuma — o texto ainda precisa ser escrito |

Semanas 2 e 3 mostram só a contagem de páginas guardadas, e a página de detalhe
não abre nem por link direto.

### Páginas cujo texto ainda não está na Biblioteca

| Semana | Página | Situação |
|---|---|---|
| 1 | Experimentar com Aquarela | Coberta por **EI5.PRO.01** (o código próprio, PRO.03, foi aposentado). A entrada está Done, mas só com a descrição de uma linha. |
| 1 | Onde Tem Natureza? | **EI5.PRO.01**, Done, ainda sem passo a passo. |
| 1 | **Adesivos das Fases** | **Sem entrada.** Nem código na Parte 4. |
| 2 | **Ideias na Cabeça** | **Sem entrada.** |
| 2 | Cartela · Meu Parquinho | **EI5.MAT.06**, fora da base, marcador. |
| 2 | **O Que Você Prefere no Parque?** | **Sem entrada para a página.** Existe **EI5.EST.08 · O Que Você Prefere?**, mas é a estratégia, não a folha. |
| 2 | Fichas de Votação | **EI5.MAT.07**, marcador. |
| 3 | Cartões da História da Proposta | **EI5.MAT.08**, marcador. |
| 3 | **Autoavaliação do Protagonista** | **Sem entrada.** O mais próximo é **EI5.MAT.12 · Certificado do Protagonista**, que é outra coisa. |

As quatro em negrito precisam de código novo na Parte 4 antes de virarem entrada.
As de Semana 1 são as urgentes: são as que a educadora abre no piloto.

## Modo de Brincar

Três valores aprovados, e só esses: **Dirigida pelo educador**, **Guiada pelo
educador**, **Dirigida pela criança**.

**As três aulas de Painel do Projeto não têm Modo de Brincar** — a fonte no
Notion não o traz para elas, e faz sentido: não são momentos de brincar. Nessas
sessões o campo simplesmente não aparece, em vez de mostrar um valor inventado.
Nas outras seis ele aparece com destaque no cabeçalho da sessão, no cartão da
semana e no PDF.

## Pendências

- **Brincar ao Ar Livre (S1.D1.A2) · Modo de Brincar.** O plano de aula no Notion
  diz *Guiada pelo educador*. As Orientações do Educador aprovadas trazem Brincar ao Ar Livre
  como *Dirigida pela criança*. Mantivemos o que diz o plano de aula, porque é a
  fonte deste piloto — mas as duas fontes se contradizem e a decisão é pedagógica.
  Hoje nenhuma das nove sessões usa *Dirigida pela criança*.
- Confirmar os títulos do dia das três semanas (`tituloDoDia` em `data/projeto.js`):
  foram redigidos a partir do objetivo da semana, porque o Notion não traz esse campo.
- Migrar o conteúdo das entradas da Biblioteca Digital. O projeto do Claude
  Design já traz 31 entradas com código (EI5.ROT.01 e afins) e 15 delas com
  resumo, passos e dica escritos — é de lá que a migração deve sair.
- Confirmar as referências das Semanas 2 e 3: no Notion elas ainda são
  `[código biblioteca]` sem link. Aqui já apontam para entradas da Biblioteca,
  mas vale conferir se são as entradas certas.
- Materiais da Criança: anexar os PDFs para baixar.
- Páginas da Criança das Semanas 2 e 3: as imagens ainda não foram geradas, e
  as seções estão trancadas.
- **Semana 2 · Painel do Projeto.** As Orientações do Dia trazem o Modo de Brincar
  como *Instrução Explícita*, fora dos três valores aprovados. A interface mostra
  *Dirigida pelo educador*, como nas outras sessões de Painel.
- **Resultados e documentação virou uma aba.** O guia visual mostra essa aba, mas
  o PRD diz que resultados e documentação não devem existir como página separada.
  Seguimos o guia; se valer o PRD, é só tirar a aba de `tabsHTML` em
  `shared/app.js` e de `shared/review.js`.
