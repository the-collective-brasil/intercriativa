/* Biblioteca Digital — importada da base Notion
   "Component Test · Digital Library Entries" (bd987fd49dd54566af6c41735c714253).

   Regras da fonte de verdade:
   - O conteúdo das entradas é VERBATIM do Notion. Não reescrever nem resumir.
   - Só entradas com status "Done" ficam visíveis à educadora. As outras mostram
     o marcador com código, título e categoria.
   - O Type do Notion define a categoria: Rotina, Estratégia, Material,
     Proposta, Avaliação, Guia.
   - "descricao" é a Descrição do Notion e vira o subtítulo do cartão.
   - Os códigos vêm da Parte 4 do documento-fonte. Nunca inventar, renumerar
     nem reutilizar um código. Entradas sem código ainda não têm um atribuído.
   - Nos textos: [código biblioteca] vira link para outra entrada da Biblioteca;
     [biblioteca digital] vira link para uma página da criança.
   - Entradas marcadas com "foraDaBase" têm código na Parte 4 mas ainda não têm
     linha na base do Teste de Componente. Aparecem como marcador.

   CÓDIGOS APOSENTADOS — nunca reutilizar:
     EI5.PRO.03  era Experimentar com Aquarela, incorporada em PRO.01.
     Cartão de Entrevista  substituído por Fichas de Votação (MAT.07).
*/
window.BIBLIOTECA_APOSENTADOS = ['EI5.PRO.03'];

window.BIBLIOTECA = [
  {
    "slug": "documentacao-pedagogica",
    "titulo": "Documentação Pedagógica",
    "categoria": "avaliacao-e-feedback",
    "tipo": "Avaliação",
    "status": null,
    "pronto": false,
    "codigo": "EI5.AVA.01",
    "foraDaBase": true
  },
  {
    "slug": "registro-de-observacao",
    "titulo": "Registro de Observação",
    "categoria": "avaliacao-e-feedback",
    "tipo": "Avaliação",
    "status": null,
    "pronto": false,
    "codigo": "EI5.AVA.02",
    "foraDaBase": true
  },
  {
    "slug": "perguntas-para-reflexao",
    "titulo": "Perguntas para Reflexão",
    "categoria": "avaliacao-e-feedback",
    "tipo": "Avaliação",
    "status": null,
    "pronto": false,
    "codigo": "EI5.AVA.03",
    "foraDaBase": true
  },
  {
    "slug": "leitura-compartilhada",
    "titulo": "Leitura Compartilhada",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.EST.01",
    "descricao": "Estratégia central da Hora do Conto: ler a história inteira com voz, expressão e pausas naturais, sem interromper para perguntar. A conversa vem depois.",
    "ondeAparece": "S1.D1.A1",
    "conteudo": {
      "resumo": "Na Leitura Compartilhada, o educador lê a história inteira, com voz, expressão e pausas naturais, sem interromper para perguntar. A criança vive a narrativa completa de uma vez, e a conversa vem depois. É a estratégia central da Hora do Conto e a base sobre a qual o <a class=\"bib\" data-bib=\"passeio-pelas-imagens\">Passeio pelas Imagens</a> e a conversa se apoiam.",
      "quandoUtilizar": "Na primeira leitura de qualquer história. Perguntas e pausas planejadas entram só em releituras, quando o roteiro pedir.",
      "comoConduzir": [
        "Conheça o livro antes. Pratique a leitura em voz alta até se sentir confiante e decida onde a voz muda, onde vale desacelerar e onde uma pausa natural deixa a ilustração respirar.",
        "Leia do começo ao fim sem interromper com perguntas. Deixe o livro virado para o grupo o tempo todo e dê tempo para as crianças observarem cada ilustração enquanto escutam.",
        "Acolha a participação espontânea sem quebrar o fluxo: crianças que antecipam palavras ou entram nas repetições estão dentro da história, não atrapalhando.",
        "Ao terminar, permaneça alguns segundos em silêncio na imagem final. Escute os comentários que surgirem antes de abrir a conversa."
      ],
      "dica": [
        "<strong>Se as crianças se dispersarem no meio da leitura:</strong> baixe a voz em vez de levantar, e aproxime o livro. O mistério puxa mais que o volume.",
        "<strong>Se o grupo conhecer bem a história:</strong> pare antes das palavras que rimam ou repetem e deixe as crianças completarem em coro.",
        "Resista à tentação de explicar ou testar palavras durante a leitura. O contexto e as ilustrações fazem esse trabalho na primeira leitura, e a conversa vem depois."
      ],
      "recursos": [
        {
          "titulo": "Rotina da Hora do Conto",
          "slug": "rotina-da-hora-do-conto"
        },
        {
          "titulo": "Passeio pelas Imagens",
          "slug": "passeio-pelas-imagens"
        },
        {
          "titulo": "Cartões A3 do Paradidático 1",
          "slug": "cartoes-a3-do-paradidatico-1"
        }
      ]
    }
  },
  {
    "slug": "passeio-pelas-imagens",
    "titulo": "Passeio pelas Imagens",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.EST.02",
    "descricao": "Depois da leitura, o grupo volta a ilustrações escolhidas para observar, descrever, comparar e explicar a partir de evidências visuais.",
    "ondeAparece": "S1.D1.A1",
    "conteudo": {
      "resumo": "Depois da leitura, o grupo volta a algumas ilustrações escolhidas e conversa sobre o que vê. A ilustração vira objeto de investigação: a criança observa, descreve, compara e constrói explicações a partir de evidências visuais. É aqui que a compreensão da história se torna visível e audível.",
      "quandoUtilizar": "Depois da Leitura Compartilhada, na conversa sobre a história. Também funciona para retomar a história em outros dias sem reler o livro inteiro.",
      "comoConduzir": [
        "Escolha antes 2 a 4 ilustrações que carregam o centro da história. Menos imagens com mais conversa vale mais que folhear tudo.",
        "Mostre 1 imagem e pergunte: <em class=\"fala\">\"O que vocês percebem aqui?\"</em> Espere. O silêncio de alguns segundos é tempo de observação, não de constrangimento.",
        "Peça a evidência com naturalidade: <em class=\"fala\">\"O que você viu na imagem que fez você pensar isso?\"</em>",
        "Para comparar, coloque 2 imagens lado a lado e pergunte: <em class=\"fala\">\"O que mudou?\"</em> Deixe as crianças apontarem nas imagens enquanto explicam.",
        "Anote falas interessantes palavra por palavra para os <a class=\"bib\" data-bib=\"baloes-de-fala\">Balões de Fala</a>."
      ],
      "dica": [
        "<strong>Se as respostas ficarem em 1 palavra:</strong> devolva a fala ampliando: <em class=\"fala\">\"Uma árvore... e o que tem perto dela?\"</em>",
        "<strong>Se as crianças já descreverem com facilidade:</strong> puxe para a explicação: <em class=\"fala\">\"Por que será que isso aconteceu?\"</em>",
        "Aceite leituras diferentes da sua. O que a criança percebe na imagem diz o que ela está compreendendo, e é isso que a estratégia quer ver."
      ],
      "recursos": [
        {
          "titulo": "Leitura Compartilhada",
          "slug": "leitura-compartilhada"
        },
        {
          "titulo": "Cartões A3 do Paradidático 1",
          "slug": "cartoes-a3-do-paradidatico-1"
        },
        {
          "titulo": "Balões de Fala",
          "slug": "baloes-de-fala"
        }
      ]
    }
  },
  {
    "slug": "ver-fazer-sentir",
    "titulo": "Ver, Fazer, Sentir",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.EST.03",
    "descricao": "3 perguntas com gestos fixos, feitas antes e depois de uma experiência, para a criança conectar o lugar, a ação e o sentimento. A comparação gera a evidência.",
    "ondeAparece": "S1.D1.A2; S3.D1.A2",
    "conteudo": {
      "resumo": "São 3 perguntas curtas que ajudam a criança a perceber um lugar, a própria ação e o próprio sentimento: <em class=\"fala\">\"Como é este lugar?\"</em>, <em class=\"fala\">\"O que você está fazendo?\"</em>, <em class=\"fala\">\"Como você está se sentindo?\"</em>. Feitas antes e depois de uma experiência, elas revelam o que mudou, e é dessa comparação que sai a evidência para o projeto.",
      "quandoUtilizar": "Na abertura e no fechamento do Brincar ao Ar Livre, e sempre que quiser que a criança conecte um espaço ao que sente e faz nele.",
      "comoConduzir": [
        "Dê a cada pergunta 1 gesto fixo: mãos nos olhos para ver, mãos que trabalham para fazer, mão no peito para sentir. Com os gestos, as crianças antecipam as perguntas e logo as fazem sozinhas.",
        "Faça as 3 perguntas na mesma ordem, com as mesmas palavras, todas as vezes.",
        "Na abertura, anote 2 ou 3 falas exatamente como foram ditas.",
        "No fechamento, repita as 3 perguntas e retome 1 fala anotada: <em class=\"fala\">\"Lá no começo, você disse que... e agora?\"</em> Compare em voz alta com o grupo.",
        "Leve as falas mais reveladoras para os <a class=\"bib\" data-bib=\"baloes-de-fala\">Balões de Fala</a>."
      ],
      "dica": [
        "<strong>Se a criança responder sempre \"legal\" na pergunta do sentir:</strong> ofereça 2 opções concretas: <em class=\"fala\">\"Seu corpo está agitado ou calminho?\"</em>",
        "<strong>Se o grupo já dominar as 3 perguntas:</strong> convide 1 criança a fazer as perguntas com os gestos no fechamento.",
        "A comparação entre antes e depois é onde mora a evidência. Sem retomar a fala do começo, a estratégia vira só uma conversa agradável."
      ],
      "recursos": [
        {
          "titulo": "Rotina do Brincar ao Ar Livre",
          "slug": "rotina-do-brincar-ao-ar-livre"
        },
        {
          "titulo": "Balões de Fala",
          "slug": "baloes-de-fala"
        }
      ]
    }
  },
  {
    "slug": "pensar-em-duplas",
    "titulo": "Pensar em Duplas",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.EST.04",
    "descricao": "Tempo de pensar em silêncio, conversa em duplas e algumas respostas na roda, para que mais crianças cheguem à conversa com algo para dizer.",
    "ondeAparece": "S1.D1.A1",
    "conteudo": {
      "resumo": "A estratégia dá a cada criança tempo de pensar antes de falar e uma dupla para ensaiar a ideia antes do grupo. Primeiro alguns segundos de silêncio, depois a conversa a 2, por fim algumas respostas na roda. Assim, quem fala não é sempre quem pensa mais rápido, e mais crianças chegam à roda com algo para dizer.",
      "quandoUtilizar": "Quando uma pergunta merece resposta de todos e não só dos rápidos. Funciona em qualquer roda de conversa.",
      "comoConduzir": [
        "Faça a pergunta e marque o tempo de pensar com 1 gesto fixo, como o dedo na têmpora: <em class=\"fala\">\"Primeiro cada um pensa sozinho, sem falar.\"</em> Conte alguns segundos em silêncio.",
        "Diga: <em class=\"fala\">\"Agora conta para a sua dupla.\"</em> Duplas fixas por semana poupam o tempo de escolher.",
        "Circule e escute 2 ou 3 duplas. É a sua chance de ouvir as crianças que não falam na roda.",
        "Chame o grupo de volta com o chant de atenção da turma e recolha 4 ou 5 respostas. Convide também quem você ouviu nas duplas: <em class=\"fala\">\"Conta para todo mundo o que você contou para o colega?\"</em>"
      ],
      "dica": [
        "<strong>Se uma dupla ficar em silêncio:</strong> dê um início de frase para os 2: <em class=\"fala\">\"Eu acho que...\"</em>",
        "<strong>Se as duplas já conversarem com fluência:</strong> peça que cada criança conte a ideia do colega, não a própria.",
        "O tempo de pensar em silêncio é a parte mais fácil de pular e a mais importante de manter. Segure a própria pressa."
      ],
      "recursos": [
        {
          "titulo": "Rotina da Hora do Conto",
          "slug": "rotina-da-hora-do-conto"
        },
        {
          "titulo": "Compartilhamento em Roda",
          "slug": "compartilhamento-em-roda"
        }
      ]
    }
  },
  {
    "slug": "compartilhamento-em-roda",
    "titulo": "Compartilhamento em Roda",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": "Not started",
    "pronto": false,
    "ondeAparece": "S3.D1.A3",
    "codigo": "EI5.EST.05"
  },
  {
    "slug": "pesque-vire-e-organize",
    "titulo": "Pesque, Vire e Organize",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": null,
    "pronto": false,
    "codigo": "EI5.EST.06",
    "foraDaBase": true
  },
  {
    "slug": "eu-faco-nos-fazemos-e-voce-faz",
    "titulo": "Eu Faço, Nós Fazemos e Você Faz",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": null,
    "pronto": false,
    "codigo": "EI5.EST.07",
    "foraDaBase": true
  },
  {
    "slug": "o-que-voce-prefere",
    "titulo": "O Que Você Prefere?",
    "categoria": "estrategias-de-ensino",
    "tipo": "Estratégia",
    "status": null,
    "pronto": false,
    "codigo": "EI5.EST.08",
    "foraDaBase": true
  },
  {
    "slug": "centro-de-investigacao-e-descoberta",
    "titulo": "Centro de Investigação e Descoberta",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "descricao": "Orientações para organizar investigações com objetos, fenômenos e materiais naturais ou cotidianos.",
    "ondeAparece": "Centros de Aprendizagem",
    "codigo": "EI5.GUI.01"
  },
  {
    "slug": "centro-de-construcao-e-engenharia",
    "titulo": "Centro de Construção e Engenharia",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "descricao": "Orientações para promover planejamento, construção, testes e resolução de problemas com materiais abertos.",
    "ondeAparece": "Centros de Aprendizagem",
    "codigo": "EI5.GUI.02"
  },
  {
    "slug": "centro-atelie-de-arte",
    "titulo": "Centro Ateliê de Arte",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "descricao": "Orientações para organizar explorações abertas de materiais, técnicas e formas de expressão visual.",
    "ondeAparece": "Centros de Aprendizagem",
    "codigo": "EI5.GUI.03"
  },
  {
    "slug": "centro-de-linguagem-e-letramento",
    "titulo": "Centro de Linguagem e Letramento",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "descricao": "Orientações para criar convites significativos de escrita com finalidade, escolha e autoria infantil.",
    "ondeAparece": "Centros de Aprendizagem",
    "codigo": "EI5.GUI.04"
  },
  {
    "slug": "centro-de-faz-de-conta-e-pequenos-mundos",
    "titulo": "Centro de Faz de Conta e Pequenos Mundos",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "descricao": "Orientações para apoiar narrativas, papéis, relações sociais e linguagem por meio do brincar imaginativo.",
    "ondeAparece": "Centros de Aprendizagem",
    "codigo": "EI5.GUI.05"
  },
  {
    "slug": "centro-de-jogos-matematica-e-manipulativos",
    "titulo": "Centro de Jogos, Matemática e Manipulativos",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "descricao": "Orientações para promover contagem, classificação, padrões, medidas e resolução de problemas por meio do brincar.",
    "ondeAparece": "Centros de Aprendizagem",
    "codigo": "EI5.GUI.06"
  },
  {
    "slug": "convites-para-brincar-nos-centros-de-aprendizagem",
    "titulo": "Convites para Brincar nos Centros de Aprendizagem",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "descricao": "Orientações gerais para organizar convites e ampliar a aprendizagem por meio da brincadeira guiada.",
    "ondeAparece": "Centros de Aprendizagem",
    "codigo": "EI5.GUI.07"
  },
  {
    "slug": "papel-do-educador-durante-os-centros-de-aprendizagem",
    "titulo": "Papel do Educador Durante os Centros de Aprendizagem",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false,
    "codigo": "EI5.GUI.08"
  },
  {
    "slug": "supervisione-sem-tomar-a-brincadeira-para-si",
    "titulo": "Supervisione sem Tomar a Brincadeira para Si",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Not started",
    "pronto": false,
    "ondeAparece": "Brincar ao Ar Livre · Centros de Aprendizagem",
    "codigo": "EI5.GUI.09"
  },
  {
    "slug": "conexoes-texto-mundo",
    "titulo": "Conexões Texto-Mundo",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Done",
    "pronto": true,
    "ondeAparece": "Hora do Conto · Mural do Projeto · Semana 1",
    "codigo": "EI5.GUI.10"
  },
  {
    "slug": "brincar-guiado-pelo-adulto",
    "titulo": "Brincar Guiado pelo Adulto",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": null,
    "pronto": false,
    "codigo": "EI5.GUI.11",
    "foraDaBase": true
  },
  {
    "slug": "caixa-misteriosa",
    "titulo": "Caixa Misteriosa",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.MAT.01",
    "descricao": "Caixa fechada que chega à roda sem explicação, com o objeto que abre a investigação do dia. Antes de ver, a criança pesa, escuta, imagina e argumenta.",
    "ondeAparece": "S1.D1.A1; S3.D1.A2",
    "conteudo": {
      "resumo": "Uma caixa fechada e bonita que chega à roda sem explicação. Dentro dela, o objeto que abre a investigação do dia. A caixa transforma a apresentação de um objeto em levantamento de hipóteses: antes de ver, a criança pesa, escuta, imagina e argumenta. O mistério é o material.",
      "quandoUtilizar": "Para lançar uma investigação ou um objeto novo com o máximo de curiosidade. Perde a força se aparecer todo dia: reserve para os lançamentos.",
      "comoConduzir": [
        "Prepare a caixa antes, longe dos olhos das crianças, e traga-a fechada para o centro da roda. Não explique. Deixe o grupo perceber e reagir.",
        "Ofereça pistas sensoriais antes da visão: movimente a caixa devagar perto do ouvido de algumas crianças. <em class=\"fala\">\"Parece pesado ou leve?\"</em>; <em class=\"fala\">\"Faz barulho?\"</em>",
        "Recolha hipóteses e peça os porquês: <em class=\"fala\">\"O que faz você pensar isso?\"</em> Acolha todas sem confirmar nem negar.",
        "Abra devagar. Deixe o objeto passar de mão em mão quando for possível.",
        "Guarde o objeto de volta à vista das crianças quando ele for voltar em outro momento. A caixa guarda a promessa."
      ],
      "dica": [
        "<strong>Se as crianças tentarem abrir a caixa antes da hora:</strong> dê a uma delas o papel de guardiã da caixa, responsável por mantê-la fechada até o combinado.",
        "<strong>Se as hipóteses se esgotarem rápido:</strong> acrescente 1 pista de cada vez: balance, cheire, dê uma espiada e descreva sem mostrar.",
        "O objetivo não é acertar o que tem dentro. É pensar em voz alta. Hipótese \"errada\" bem argumentada é a estratégia funcionando."
      ],
      "recursos": [
        {
          "titulo": "Rotina da Hora do Conto",
          "slug": "rotina-da-hora-do-conto"
        },
        {
          "titulo": "Centro de Investigação e Descoberta",
          "slug": "centro-de-investigacao-e-descoberta"
        }
      ]
    }
  },
  {
    "slug": "baloes-de-fala",
    "titulo": "Balões de Fala",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.MAT.02",
    "descricao": "Balões de papel onde o educador registra a fala da criança palavra por palavra, com o nome de quem falou, para pendurar no Painel do Projeto.",
    "ondeAparece": "S1.D1.A3; S3.D1.A2; S3.D1.A3",
    "conteudo": {
      "resumo": "Balões de papel em forma de balão de fala onde o educador registra, palavra por palavra, o que a criança disse, com o nome de quem falou. Pendurados no Painel do Projeto, eles tornam o pensamento das crianças visível e permanente: a turma vê que o que ela diz vira parte do projeto.",
      "quandoUtilizar": "Sempre que uma fala revelar pensamento: uma hipótese, uma explicação, uma ideia, uma comparação. Nas rodas, no brincar e nos centros.",
      "comoConduzir": [
        "Registre a fala exatamente como foi dita, sem corrigir a gramática nem completar a ideia. A fala é da criança.",
        "Escreva o nome da criança no balão. A autoria importa tanto quanto o conteúdo.",
        "Leia o balão em voz alta antes de pendurar, dizendo o nome de quem falou, e convide a criança a escolher onde colar no painel.",
        "Volte aos balões nas aulas seguintes: <em class=\"fala\">\"Semana passada, a Alice disse que... vocês ainda pensam assim?\"</em> Balão que não é relido vira decoração."
      ],
      "dica": [
        "<strong>Se a fala for longa demais para o balão:</strong> pergunte à criança qual parte é a mais importante e registre essa parte.",
        "<strong>Se a mesma criança dominar os balões da semana:</strong> anote falas durante o brincar, quando as crianças mais quietas falam mais.",
        "Registrar na frente da criança, devagar, repetindo as palavras dela em voz alta, é um dos gestos de letramento mais poderosos que existem."
      ],
      "recursos": [
        {
          "titulo": "Canvas do Projeto",
          "slug": "canvas-do-projeto"
        },
        {
          "titulo": "Documentação Pedagógica",
          "slug": "documentacao-pedagogica"
        }
      ]
    }
  },
  {
    "slug": "canvas-do-projeto",
    "titulo": "Canvas do Projeto",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.MAT.03",
    "descricao": "O Canvas guarda o que a turma já pode assumir como referência estável: um campo só muda quando há evidência, conclusão ou decisão suficiente para sustentá-lo.",
    "ondeAparece": "S1.D1.A3; S2.D1.A3",
    "conteudo": {
      "resumo": "O Painel do Projeto guarda o percurso em construção: perguntas, hipóteses, evidências, falas e mudanças de ideia. O <strong>Canvas do Projeto</strong> guarda o que a turma já pode assumir como referência estável para continuar o trabalho. Por isso ele não é atualizado em todos os encontros: um campo só muda quando a turma tem evidência, conclusão ou decisão suficiente para sustentá-lo.",
      "quandoUtilizar": "Quando a turma já reuniu evidências suficientes para registrar uma conclusão ou decisão estável em um campo do Canvas. Não precisa acontecer em todos os encontros.",
      "comoConduzir": [
        "Prepare o momento: exponha o Canvas ao lado do Painel do Projeto, escolha 1 único campo para revisar ou preencher e separe os registros que serão retomados, como fotografias, desenhos, contagens, <a class=\"bib\" data-bib=\"baloes-de-fala\">Balões de Fala</a> ou resultados de testes. Use cartões removíveis ou outro suporte que permita substituir uma formulação.",
        "Retome as evidências: reúna as crianças diante do Painel, mostre 2 ou 3 evidências ligadas ao campo escolhido e leia em voz alta as palavras já registradas pelas crianças.",
        "Nomeie o campo: aponte para ele no Canvas, leia o título, explique em 1 frase o que a turma precisa registrar ali e faça uma pergunta concreta, apoiada nos registros visíveis. No início do projeto, as perguntas são: <em class=\"fala\">\"Qual é o problema que a gente percebeu?\"</em> para O Problema; <em class=\"fala\">\"Por que a gente quer mudar isso?\"</em> para Por Que Importa Para Nós; <em class=\"fala\">\"Quem vive, usa ou sente esse problema?\"</em> para Quem É Afetado; <em class=\"fala\">\"O que podemos tentar?\"</em> para Nossa Ideia.",
        "Construa a formulação com o grupo: escute as ideias, registre palavras importantes em <em class=\"mat\">Balões de Fala</em> ou cartões provisórios e compare com as evidências: <em class=\"fala\">\"O que aqui mostra que essa ideia faz sentido?\"</em> Junte as contribuições em 1 frase curta e leia para a turma.",
        "Confirme ou mantenha em aberto: pergunte <em class=\"fala\">\"A gente já pode usar esta ideia para continuar ou ainda precisa descobrir mais?\"</em> Registre no Canvas somente a conclusão ou decisão que o grupo pode sustentar. Se ainda houver dúvida, a ideia fica no Painel como hipótese ou pergunta. No início do projeto, registre as primeiras ideias como hipóteses: <em class=\"fala\">\"A gente ainda não sabe se são as ideias certas. Vamos investigar e perguntar para outras pessoas.\"</em>",
        "Atualize o registro: retire ou substitua uma formulação antiga quando uma nova evidência mudar o que a turma pensa. Leia o campo atualizado e diga como ele será usado no próximo passo do projeto. Nas retomadas, volte somente ao campo relacionado às evidências do momento: uma nova evidência pode confirmar, ampliar ou substituir o registro anterior."
      ],
      "dica": [
        "<strong>Se não houver uma conclusão ou decisão estável:</strong> não atualize o Canvas. Uma pergunta bem registrada no Painel é um resultado válido para aquele encontro.",
        "<strong>Se as crianças já acompanharem os campos com facilidade:</strong> convide-as a decidir o que sai do Canvas quando uma formulação é substituída, e a explicar qual evidência mudou a ideia da turma.",
        "O Canvas registra com as palavras da turma, não com as do educador."
      ],
      "recursos": [
        {
          "titulo": "Balões de Fala",
          "slug": "baloes-de-fala"
        },
        {
          "titulo": "Jornada do Projeto",
          "slug": "jornada-do-projeto"
        },
        {
          "titulo": "Documentação Pedagógica",
          "slug": "documentacao-pedagogica"
        }
      ]
    }
  },
  {
    "slug": "jornada-do-projeto",
    "titulo": "Jornada do Projeto",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.MAT.04",
    "descricao": "Mapa visual das fases do projeto que cada criança marca com adesivos: a criança vê onde está, o que já aconteceu e o que ainda vem.",
    "ondeAparece": "S1.D1.A3; S2.D1.A3; S3.D1.A3",
    "conteudo": {
      "resumo": "Um mapa visual das fases do projeto que cada criança marca com adesivos conforme a turma avança. Funciona como um cronograma visual na escala do projeto: a criança vê onde está, o que já aconteceu e o que ainda vem. Para quem ainda não lê, é a linha do tempo que se lê com os olhos.",
      "quandoUtilizar": "Nas aulas de Painel do Projeto, no momento de marcar a fase, e sempre que uma criança perguntar o que vem depois.",
      "comoConduzir": [
        "Mantenha a Jornada em exposição na altura dos olhos das crianças, não guardada.",
        "No momento de marcar, nomeie a fase com a mesma frase todas as vezes: <em class=\"fala\">\"Hoje a gente descobriu um problema e já começou a investigar.\"</em> A repetição constrói o vocabulário do projeto.",
        "Convide cada criança a colar o próprio adesivo. O gesto de marcar é dela.",
        "Use a Jornada para situar, não só para registrar: <em class=\"fala\">\"Aponta onde a gente está. O que já passou? O que falta?\"</em>"
      ],
      "dica": [
        "<strong>Se a criança não souber onde colar:</strong> percorra a Jornada com o dedo desde o início, relembrando 1 coisa que aconteceu em cada fase, até chegar ao hoje.",
        "<strong>Se as crianças já dominarem as fases:</strong> convide-as a contar a jornada a um visitante ou a outra turma, apontando fase por fase.",
        "Antecipar o que vem reduz a ansiedade e aumenta o engajamento. A Jornada responde à pergunta que toda criança faz: <em class=\"fala\">\"E depois?\"</em>"
      ],
      "recursos": [
        {
          "titulo": "Canvas do Projeto",
          "slug": "canvas-do-projeto"
        },
        {
          "titulo": "Certificado do Protagonista",
          "slug": "certificado-do-protagonista"
        }
      ]
    }
  },
  {
    "slug": "cartas-meu-parquinho",
    "titulo": "Cartas - Meu Parquinho",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": null,
    "pronto": false,
    "codigo": "EI5.MAT.05",
    "foraDaBase": true
  },
  {
    "slug": "cartela-meu-parquinho",
    "titulo": "Cartela - Meu Parquinho",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": null,
    "pronto": false,
    "codigo": "EI5.MAT.06",
    "foraDaBase": true
  },
  {
    "slug": "fichas-de-votacao",
    "titulo": "Fichas de Votação",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": null,
    "pronto": false,
    "codigo": "EI5.MAT.07",
    "foraDaBase": true
  },
  {
    "slug": "cartoes-da-historia-da-proposta",
    "titulo": "Cartões da História da Proposta",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": null,
    "pronto": false,
    "codigo": "EI5.MAT.08",
    "foraDaBase": true
  },
  {
    "slug": "registro-da-decisao-do-diretor",
    "titulo": "Registro da Decisão do Diretor",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": null,
    "pronto": false,
    "codigo": "EI5.MAT.09",
    "foraDaBase": true
  },
  {
    "slug": "cartoes-a3-do-paradidatico-1",
    "titulo": "Cartões A3 do Paradidático 1",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.MAT.10",
    "descricao": "Cartões A3 com a capa e as ilustrações centrais de Bia e a Semente Dourada, para a conversa na roda: explorar a capa, revisitar cenas e comparar imagens lado a lado.",
    "ondeAparece": "S1.D1.A1; S3.D1.A1",
    "conteudo": {
      "resumo": "Cartões em formato A3 com a capa e as ilustrações centrais de <em class=\"mat\">Bia e a Semente Dourada</em>, grandes o suficiente para a roda inteira ver ao mesmo tempo. Eles liberam as ilustrações do livro: dá para comparar 2 cenas lado a lado, voltar a uma imagem sem folhear e deixar uma cena em exposição no Painel do Projeto.",
      "quandoUtilizar": "Na exploração da capa, no <a class=\"bib\" data-bib=\"passeio-pelas-imagens\">Passeio pelas Imagens</a> e em qualquer comparação entre cenas da história. O livro segue sendo o material da leitura; os cartões são o material da conversa.",
      "comoConduzir": [
        "Escolha antes da aula os cartões que a conversa vai usar e deixe-os na ordem, virados para baixo, ao seu lado.",
        "Segure o cartão na altura dos olhos das crianças e dê tempo de observação em silêncio antes da primeira pergunta.",
        "Para comparar, coloque 2 cartões lado a lado no chão da roda ou no painel: <em class=\"fala\">\"O que mudou?\"</em> Deixe as crianças se aproximarem e apontarem.",
        "Depois da aula, considere deixar 1 cartão em exposição no painel para as crianças revisitarem sozinhas."
      ],
      "dica": [
        "<strong>Se as crianças quiserem todas apontar ao mesmo tempo:</strong> coloque os cartões no chão no centro da roda e combine que se aponta com os olhos primeiro, com o dedo depois.",
        "<strong>Se o grupo já conhecer bem as cenas:</strong> embaralhe 3 cartões e convide a turma a colocá-los na ordem da história, justificando.",
        "Os cartões no chão convidam o corpo da criança para a conversa. Na parede, convidam a memória. Escolha conforme o momento."
      ],
      "recursos": [
        {
          "titulo": "Passeio pelas Imagens",
          "slug": "passeio-pelas-imagens"
        },
        {
          "titulo": "Leitura Compartilhada",
          "slug": "leitura-compartilhada"
        },
        {
          "titulo": "Caixa Misteriosa",
          "slug": "caixa-misteriosa"
        }
      ]
    }
  },
  {
    "slug": "cartoes-como-cuidar-de-uma-planta",
    "titulo": "Cartões Como Cuidar de uma Planta",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.MAT.11",
    "descricao": "Cartões ilustrados com as etapas do plantio e do cuidado, para a criança consultar por conta própria durante o plantio e acompanhar o crescimento nas semanas seguintes.",
    "ondeAparece": "S1.D1.A2",
    "conteudo": {
      "resumo": "Cartões ilustrados com as etapas do plantio e do cuidado: preparar a terra, plantar, regar, dar luz, esperar e observar o crescimento. A criança consulta os cartões por conta própria durante o plantio, como quem lê um manual de imagens. O material ensina a planta e, de quebra, ensina que imagem carrega instrução.",
      "quandoUtilizar": "Na proposta <a class=\"bib\" data-bib=\"plantar-a-nossa-semente\">Plantar a Nossa Semente</a> e durante as semanas seguintes, no acompanhamento dos vasos.",
      "comoConduzir": [
        "Deixe os cartões na área do plantio, ao alcance das crianças, e apresente-os sem transformá-los em aula: <em class=\"fala\">\"Se você não lembrar o que vem depois, os cartões contam.\"</em>",
        "Quando uma criança perguntar o que fazer, aponte para os cartões antes de responder: <em class=\"fala\">\"O que o cartão mostra?\"</em>",
        "Depois do plantio, mantenha os cartões perto dos vasos. Nas semanas seguintes, as crianças comparam a própria planta com as etapas de crescimento: <em class=\"fala\">\"O seu vaso está em qual cartão?\"</em>",
        "Convide as crianças a usarem os cartões para explicar o plantio a um colega que não participou."
      ],
      "dica": [
        "<strong>Se a criança pular etapas do plantio:</strong> não corrija. Convide-a a conferir nos cartões: <em class=\"fala\">\"Olha o que vem antes de regar. O que falta no seu vaso?\"</em>",
        "<strong>Se a criança já dominar a sequência:</strong> convide-a a prever: <em class=\"fala\">\"Qual cartão a sua planta vai alcançar primeiro? Quanto tempo você acha que leva?\"</em>",
        "Cartão consultado pela criança vale mais que cartão explicado pelo educador. Resista a narrar as etapas por ela."
      ],
      "recursos": [
        {
          "titulo": "Plantar a Nossa Semente",
          "slug": "plantar-a-nossa-semente"
        },
        {
          "titulo": "Vamos Plantar uma Horta",
          "slug": "vamos-plantar-uma-horta"
        }
      ]
    }
  },
  {
    "slug": "certificado-do-protagonista",
    "titulo": "Certificado do Protagonista",
    "categoria": "materiais-e-recursos",
    "tipo": "Material",
    "status": null,
    "pronto": false,
    "codigo": "EI5.MAT.12",
    "foraDaBase": true
  },
  {
    "slug": "onde-tem-natureza",
    "titulo": "Proposta: Onde Tem Natureza?",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "Done",
    "pronto": true,
    "descricao": "Ateliê ao ar livre de frente para o parquinho: a criança experimenta a aquarela e depois registra onde encontra natureza no espaço da escola. Usa as páginas Experimentar com Aquarela e Onde Tem Natureza?.",
    "ondeAparece": "S1.D1.A2",
    "codigo": "EI5.PRO.01"
  },
  {
    "slug": "plantar-a-nossa-semente",
    "titulo": "Proposta: Plantar a Nossa Semente",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "Done",
    "pronto": true,
    "descricao": "Proposta de exploração e descoberta em que a criança planta uma semente (abóbora, girassol, feijão ou milho) e acompanha seu ciclo de crescimento ao longo da semana, usando o baralho de cartões correspondente como guia.",
    "ondeAparece": "S1.D1.A2; S2 · Durante a Semana",
    "codigo": "EI5.PRO.02"
  },
  {
    "slug": "correr-pular-subir",
    "titulo": "Proposta: Correr, Pular, Subir",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "Done",
    "pronto": true,
    "ondeAparece": "S1.D1.A2",
    "codigo": "EI5.PRO.04"
  },
  {
    "slug": "construcao-com-pecas-soltas",
    "titulo": "Proposta: Construção com Peças Soltas",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "Done",
    "pronto": true,
    "ondeAparece": "S2 · Durante a Semana",
    "codigo": "EI5.PRO.05"
  },
  {
    "slug": "atelie-ao-ar-livre",
    "titulo": "Proposta: Ateliê ao Ar Livre",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "Done",
    "pronto": true,
    "descricao": "Papel grande, giz de cera, tinta, giz de calçada e materiais naturais para desenhar a proposta escolhida de outro jeito: em vista de cima, em detalhe, ou direto no chão onde a coisa vai ficar.",
    "ondeAparece": "S2 · Durante a Semana",
    "codigo": "EI5.PRO.06"
  },
  {
    "slug": "vamos-plantar-uma-horta",
    "titulo": "Proposta: Vamos Plantar uma Horta",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "Done",
    "pronto": true,
    "descricao": "Relacionar plantas às sementes, plantar com massa de modelar, contar e registrar quantidades.",
    "ondeAparece": "Centros de Aprendizagem · G5 Projeto 2",
    "codigo": "EI5.PRO.07"
  },
  {
    "slug": "caca-ao-tesouro-ao-ar-livre",
    "titulo": "Proposta: Caça ao Tesouro ao Ar Livre",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "Done",
    "pronto": true,
    "ondeAparece": "Centros de Aprendizagem · Brincar ao Ar Livre",
    "codigo": "EI5.PRO.08"
  },
  {
    "slug": "tapete-de-massinha-flores-brasileiras",
    "titulo": "Tapete de Massinha · Flores Brasileiras",
    "categoria": "atividades-e-brincadeiras",
    "tipo": "Proposta",
    "status": "In progress",
    "pronto": false,
    "ondeAparece": "Centros de Aprendizagem · Semanas 1–3",
    "codigo": "EI5.PRO.09"
  },
  {
    "slug": "rotina-da-hora-do-conto",
    "titulo": "Rotina da Hora do Conto",
    "categoria": "rotinas-e-organizacao",
    "tipo": "Rotina",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.ROT.01",
    "descricao": "Sequência previsível que leva o grupo até a história: canção da história, deslocamento, lugar de sentar, abertura do livro e encerramento com palmas.",
    "ondeAparece": "S1.D1.A1; S3.D1.A1",
    "conteudo": {
      "resumo": "A Rotina da Hora do Conto é a sequência previsível que leva o grupo da roda até a história: um sinal conhecido, o caminho, o lugar de sentar, a abertura do livro e o encerramento. Quando essa sequência é sempre igual, a criança não gasta atenção tentando adivinhar o que vem depois. A atenção fica livre para a história.",
      "quandoUtilizar": "Em toda aula de Hora do Conto, do chamado até o encerramento da leitura.",
      "comoConduzir": [
        "Escolha uma canção ou um chant curto que signifique 1 coisa só: está na hora da história. Use sempre a mesma canção, com o mesmo gesto. Com poucas repetições, as crianças cantam junto e começam a se mover sozinhas.",
        "Ensine a rotina em partes pequenas, 1 etapa por vez, mostrando com o corpo: cantar, caminhar, sentar, olhar para o livro. Use as mesmas frases todas as vezes: <em class=\"fala\">\"Quando a canção começa, a gente vai para o espaço de leitura.\"</em>",
        "Conduza o deslocamento cantando. A canção funciona como relógio: quando ela termina, todo mundo está sentado com o corpo voltado para você e para o livro. Fileiras curtas funcionam melhor que a roda fechada: a atenção vai para onde o corpo aponta, e todas as crianças enxergam as ilustrações, o seu rosto e os seus gestos.",
        "Confirme que o grupo está pronto com uma pergunta e uma resposta combinadas: <em class=\"fala\">\"Prontos para a história?\"</em> As crianças respondem com o corpo, um aceno ou um polegar para cima. A resposta com o gesto confere a atenção sem virar cobrança.",
        "Abra sempre do mesmo jeito: mostre a capa, leia o título passando o dedo sob as palavras, diga o nome de quem escreveu e de quem ilustrou, e dê alguns segundos de silêncio antes de começar.",
        "Encerre sempre do mesmo jeito: um <em class=\"fala\">\"Fim!\"</em> caprichado, uma salva de palmas para a história e um agradecimento que nomeia algo específico: <em class=\"fala\">\"Adorei ler para vocês hoje. Vocês repararam em cada detalhe das imagens.\"</em>",
        "Com o tempo, entregue pedaços da rotina às crianças: 1 ajudante puxa a canção, outra carrega o livro até o espaço de leitura."
      ],
      "dica": [
        "<strong>Se o grupo chegar agitado ao espaço de leitura:</strong> repita a última linha da canção cada vez mais baixo, até o sussurro. O volume da sua voz regula o volume do grupo.",
        "<strong>Se a rotina já estiver fluindo:</strong> convide 1 criança a ser a ajudante da história do dia, chamando o grupo com a canção.",
        "A canção da história precisa ser diferente da canção de guardar. Cada sinal tem 1 significado só."
      ],
      "recursos": [
        {
          "titulo": "Leitura Compartilhada",
          "slug": "leitura-compartilhada"
        },
        {
          "titulo": "Passeio pelas Imagens",
          "slug": "passeio-pelas-imagens"
        },
        {
          "titulo": "Cartões A3 do Paradidático 1",
          "slug": "cartoes-a3-do-paradidatico-1"
        },
        {
          "titulo": "Rotina de Organização",
          "slug": "rotina-de-organizacao"
        }
      ]
    }
  },
  {
    "slug": "rotina-do-brincar-ao-ar-livre",
    "titulo": "Rotina do Brincar ao Ar Livre",
    "categoria": "rotinas-e-organizacao",
    "tipo": "Rotina",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.ROT.02",
    "descricao": "Rotina que sustenta o bloco ao ar livre: saída organizada, combinados com gestos, escolha livre entre as propostas, chant de chamada a distância e aviso antes do fim.",
    "ondeAparece": "S1.D1.A2",
    "conteudo": {
      "resumo": "Esta rotina sustenta o bloco inteiro ao ar livre: a saída organizada, os combinados, a escolha livre entre as propostas e a volta. O segredo dela é um sinal de atenção que funcione a distância, porque lá fora a voz falada não alcança. Com a rotina firme, o educador fica livre para observar e brincar junto, em vez de administrar o espaço.",
      "quandoUtilizar": "Em toda aula de Brincar ao Ar Livre, da saída da sala até a transição de volta.",
      "comoConduzir": [
        "Combine com a turma um chant de chamada e resposta: você canta a primeira parte, as crianças respondem e param onde estão, olhando para você. Um chant curto atravessa o pátio melhor que qualquer frase. Ensaie dentro da sala primeiro, como brincadeira.",
        "Antes de sair, revise os combinados com gestos, sempre com as mesmas palavras: cuidar do corpo e dos colegas, esperar a vez, cuidar dos materiais.",
        "Apresente as propostas do dia no próprio espaço, área por área, e convide as crianças a escolher onde começar e a mudar quando quiserem.",
        "Avise o grupo pouco antes do fim: <em class=\"fala\">\"Mais 1 vez cada um e a gente guarda.\"</em> Depois do aviso, puxe a canção de guardar da <a class=\"bib\" data-bib=\"rotina-de-organizacao\">Rotina de Organização</a>."
      ],
      "dica": [
        "<strong>Se as crianças não responderem ao chant a distância:</strong> transforme o chant em jogo por alguns dias. Cante em momentos inesperados e comemore a resposta rápida do grupo.",
        "<strong>Se o grupo já dominar a rotina:</strong> convide 1 criança a puxar o chant de chamada no lugar do educador.",
        "O aviso antes do fim importa ainda mais ao ar livre. A criança precisa de tempo para terminar o percurso ou a rega que começou."
      ],
      "recursos": [
        {
          "titulo": "Ver, Fazer, Sentir",
          "slug": "ver-fazer-sentir"
        },
        {
          "titulo": "Rotina de Organização",
          "slug": "rotina-de-organizacao"
        },
        {
          "titulo": "Supervisione sem Tomar a Brincadeira para Si",
          "slug": "supervisione-sem-tomar-a-brincadeira-para-si"
        }
      ]
    }
  },
  {
    "slug": "rotina-dos-centros-de-aprendizagem",
    "titulo": "Rotina dos Centros de Aprendizagem",
    "categoria": "rotinas-e-organizacao",
    "tipo": "Rotina",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.ROT.03",
    "descricao": "Rotina que organiza os momentos de troca entre centros: 3 combinados da troca, vagas visíveis, chant de atenção e encerramento com aviso de tempo e canção de guardar.",
    "ondeAparece": "S3.D1.A2",
    "conteudo": {
      "resumo": "Os centros funcionam ou desmoronam nos momentos de troca. Esta rotina organiza exatamente esses momentos: 3 combinados de troca, vagas visíveis em cada centro e sinais sonoros consistentes. Quando a troca é previsível, a criança decide sozinha quando sair, o que deixar pronto e para onde ir, e o educador fica livre para acompanhar a aprendizagem em vez de dirigir o trânsito.",
      "quandoUtilizar": "Em toda aula de Centros de Aprendizagem, da abertura dos centros até a canção de guardar.",
      "comoConduzir": [
        "Ensine os 3 combinados da troca em partes pequenas, com 1 gesto para cada um, sempre com as mesmas palavras: <em class=\"fala\">\"Termino o que estou fazendo. Deixo o material pronto para a próxima criança. Escolho um centro com vaga.\"</em>",
        "Deixe as vagas visíveis: 1 cartão, colar ou prendedor por vaga em cada centro. A criança vê sozinha se cabe mais alguém, sem perguntar ao educador.",
        "Use um chant curto de atenção antes de qualquer instrução ao grupo todo. Mesmo som, mesmo significado: parar, olhar, escutar. Nunca use o chant para outra coisa.",
        "Fique por perto nas primeiras trocas. Observe quem resolve sozinho e quem trava, e comente em vez de resolver: <em class=\"fala\">\"Você deixou os pincéis prontos para o próximo. Qual centro tem vaga agora?\"</em>",
        "Encerre com 2 sinais, sempre nesta ordem: primeiro o aviso de tempo, depois a canção de guardar. A canção serve de relógio: quando ela termina, os centros estão prontos.",
        "Com o tempo, passe papéis às crianças: 1 ajudante confere as vagas, outra puxa a canção de guardar."
      ],
      "dica": [
        "<strong>Se muitas crianças trocarem ao mesmo tempo e os centros lotarem:</strong> volte ao combinado 3 com o gesto e espere. Aponte as vagas visíveis em vez de designar lugares.",
        "<strong>Se as trocas já estiverem fluindo:</strong> desafie a turma a fazer 1 troca inteira sem nenhuma fala do educador, só com os combinados e as vagas.",
        "Criança que permanece muito tempo no mesmo centro não é um problema. Investigação longa é sinal de envolvimento, não de troca travada."
      ],
      "recursos": [
        {
          "titulo": "Rotina de Organização",
          "slug": "rotina-de-organizacao"
        },
        {
          "titulo": "Papel do Educador Durante os Centros de Aprendizagem",
          "slug": "papel-do-educador-durante-os-centros-de-aprendizagem"
        },
        {
          "titulo": "Convites para Brincar nos Centros de Aprendizagem",
          "slug": "convites-para-brincar-nos-centros-de-aprendizagem"
        }
      ]
    }
  },
  {
    "slug": "rotina-de-organizacao",
    "titulo": "Rotina de Organização",
    "categoria": "rotinas-e-organizacao",
    "tipo": "Rotina",
    "status": "Done",
    "pronto": true,
    "codigo": "EI5.ROT.04",
    "descricao": "Rotina de fechamento das aulas: aviso de tempo, canção de guardar como relógio, lugar fixo para cada material, mesma ordem sempre e papéis de ajudante.",
    "ondeAparece": "S1.D1.A2; S1.D1.A3; S2.D1.A1; S2.D1.A2; S2.D1.A3; S3.D1.A1; S3.D1.A2; S3.D1.A3",
    "conteudo": {
      "resumo": "É a rotina que fecha quase todas as aulas: guardar os materiais, arrumar o espaço e fazer a transição para o que vem depois. Ela transforma o guardar em parte da aprendizagem, com a criança responsável pelo espaço, e não em uma corrida comandada pelo adulto. A mesma sequência vale para sala, pátio e centros.",
      "quandoUtilizar": "No fim de toda aula, exceto a Hora do Conto, que fecha pela própria rotina.",
      "comoConduzir": [
        "Avise o grupo cerca de 1 minuto antes, sempre com a mesma frase e o mesmo gesto: <em class=\"fala\">\"Mais 1 minutinho e a gente guarda.\"</em> O aviso protege o que a criança está terminando.",
        "Puxe a canção de guardar. Ela significa 1 coisa só: guardar começou. A duração da canção é o relógio da turma: quando a música acabar, o espaço está pronto.",
        "Dê a cada material 1 lugar fixo, marcado com foto ou símbolo. A criança devolve sozinha porque o lugar se explica.",
        "Siga sempre a mesma ordem: primeiro os materiais, depois o espaço, por fim o corpo, sentando ou formando o grupo para a transição.",
        "Distribua papéis de ajudante que rodam durante a semana: quem recolhe os pincéis, quem confere o tapete, quem leva as páginas ao varal."
      ],
      "dica": [
        "<strong>Se a canção terminar e ainda houver material fora do lugar:</strong> não recomece a música. Termine junto com as crianças e, no dia seguinte, reduza a quantidade de material disponível.",
        "<strong>Se a turma já guardar com autonomia:</strong> convide as crianças a decidirem os lugares dos materiais novos e a fazerem as marcações.",
        "Guardar bem feito é evidência de cuidado com o espaço comum. Vale 1 comentário específico: <em class=\"fala\">\"Você achou o lugar certo da peça sem ajuda.\"</em>"
      ],
      "recursos": [
        {
          "titulo": "Rotina do Brincar ao Ar Livre",
          "slug": "rotina-do-brincar-ao-ar-livre"
        },
        {
          "titulo": "Rotina dos Centros de Aprendizagem",
          "slug": "rotina-dos-centros-de-aprendizagem"
        }
      ]
    }
  },
  {
    "slug": "convites-para-escrever",
    "titulo": "Convites para Escrever",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false
  },
  {
    "slug": "guia-propostas-ao-ar-livre",
    "titulo": "Guia: Propostas ao Ar Livre",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false
  },
  {
    "slug": "modelagem-de-jogos-antes-do-centro",
    "titulo": "Modelagem de Jogos Antes do Centro",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "In progress",
    "pronto": false
  },
  {
    "slug": "transicao-do-brincar-guiado-para-o-brincar-livre",
    "titulo": "Transição do Brincar Guiado para o Brincar Livre",
    "categoria": "rotinas-e-organizacao",
    "tipo": "Rotina",
    "status": "In progress",
    "pronto": false
  },
  {
    "slug": "fase-de-imersao",
    "titulo": "Fase de Imersão",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Done",
    "pronto": true,
    "faseOrdem": 1,
    "origem": "Fornecido pela autora — ainda sem linha na base do Notion e sem código na Parte 4",
    "descricao": "A Imersão protege o projeto de começar raso.",
    "conteudo": {
      "resumo": "A Imersão protege o projeto de começar raso. Num projeto comum, o adulto anuncia o tema e parte para as atividades; as crianças participam de algo que nunca foi delas. Aqui a questão chega como um encontro: as crianças descobrem, se encantam e começam a se importar antes de qualquer explicação. É esse apego que sustenta a motivação pelo resto do projeto.",
      "oQueAcontece": "Na roda, uma surpresa passa de mão em mão e vira encantamento: algo pequeno, vivo, cheio de possibilidade. Vêm as histórias, as primeiras conversas, a primeira saída para o pátio. As crianças começam a reparar nos lugares onde brincam: onde tem natureza, onde não tem, o que gostariam que tivesse. As primeiras falas e curiosidades entram no Painel do Projeto, com as palavras das próprias crianças. Sem perceber, a turma já está dentro da pergunta do projeto.",
      "comoConduzir": [
        "Deixe a descoberta vir antes da explicação. A criança que se encanta sozinha se importa; a que só ouve o anúncio, não.",
        "Escute e registre as primeiras reações. Elas mostram por onde a curiosidade do grupo já caminha.",
        "Devolva o espanto em pergunta. Se quiser, diga: <em class=\"fala\">\"Isso que você percebeu, ainda não sabemos explicar. Vamos guardar essa pergunta?\"</em>"
      ]
    }
  },
  {
    "slug": "fase-de-investigacao",
    "titulo": "Fase de Investigação",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Done",
    "pronto": true,
    "faseOrdem": 2,
    "origem": "Fornecido pela autora — ainda sem linha na base do Notion e sem código na Parte 4",
    "descricao": "A Investigação protege o projeto de se construir sobre suposições.",
    "conteudo": {
      "resumo": "A Investigação protege o projeto de se construir sobre suposições. Sem ela, o grupo decide a partir do que acha; com ela, decide a partir do que descobriu. As crianças agem como investigadoras de verdade: observam de perto, comparam, registram e contam ao grupo o que encontraram.",
      "oQueAcontece": "As crianças investigam os espaços da escola com o corpo inteiro: procuram natureza, olham de perto o que encontram, plantam e acompanham o que plantaram, pintam e desenham o que viram. Cada descoberta volta para o grupo e entra no Painel do Projeto. Ideias do começo se confirmam; outras caem. A turma vai trocando o \"achamos\" pelo \"descobrimos\", e é com essas descobertas que as próximas decisões serão tomadas.",
      "comoConduzir": [
        "Ensine a olhar de novo. Convide a criança a descrever o que vê antes de concluir. Se quiser, pergunte: <em class=\"fala\">\"O que você percebeu que ninguém tinha visto ainda?\"</em>",
        "Quando uma descoberta contradisser o que o grupo pensava, celebre. Mudar de ideia diante de evidência é o que investigadores fazem.",
        "Registre com as crianças, não por elas. A evidência vale mais quando a criança reconhece que foi ela que encontrou."
      ]
    }
  },
  {
    "slug": "fase-de-criacao",
    "titulo": "Fase de Criação",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Done",
    "pronto": true,
    "faseOrdem": 3,
    "origem": "Fornecido pela autora — ainda sem linha na base do Notion e sem código na Parte 4",
    "descricao": "A Criação protege a autoria das crianças.",
    "conteudo": {
      "resumo": "A Criação protege a autoria das crianças. Num projeto comum, esta seria a hora do trabalho manual com modelo pronto: 20 produções iguais secando na janela. Aqui não há modelo. Cada criança imagina o seu lugar de brincar com mais natureza, escolhe e monta a própria ideia, e das ideias das crianças nascem as propostas da turma.",
      "oQueAcontece": "A imaginação vira coisa concreta. As crianças montam as suas ideias e constroem com o que a natureza oferece: gravetos, pedrinhas, folhas, sementes. Você vê escolha, negociação e orgulho: cada criança decide o que entra no seu lugar de brincar e mostra ao grupo o que criou. Nenhuma produção é igual à outra, e é isso que mostra que a fase funcionou. O que a turma cria aqui é o que vai ser posto à prova na fase seguinte.",
      "comoConduzir": [
        "Abra espaço para muitas ideias antes de qualquer escolha. Toda criança diz, desenha ou monta a sua.",
        "Ofereça técnica quando ela se tornar útil ao que a criança está tentando fazer, não antes.",
        "Proteja a autoria: a criação é das crianças, mesmo quando outra versão parece melhor aos olhos adultos."
      ]
    }
  },
  {
    "slug": "fase-de-experimentacao",
    "titulo": "Fase de Experimentação",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Done",
    "pronto": true,
    "faseOrdem": 4,
    "origem": "Fornecido pela autora — ainda sem linha na base do Notion e sem código na Parte 4",
    "descricao": "A Experimentação é a fase que um projeto comum não tem.",
    "conteudo": {
      "resumo": "A Experimentação é a fase que um projeto comum não tem. Normalmente o trabalho fica pronto e vai direto para a parede; ninguém opina, nada muda. Aqui as ideias da turma saem da sala e encontram outras pessoas, e o que os outros dizem passa a contar de verdade na decisão do grupo.",
      "oQueAcontece": "As crianças vão descobrir o que a escola inteira pensa: perguntam a crianças de outras turmas o que preferem, e cada opinião ouvida vira um voto guardado. De volta à sala, os votos viram um gráfico que a turma monta e lê junto, e o resultado aparece diante dos olhos de todos. O grupo compara, conversa e decide qual proposta segue adiante. Algumas crianças veem a própria ideia não ser a escolhida, e aprendem que a decisão veio do que o grupo descobriu, não da vontade de um adulto.",
      "comoConduzir": [
        "Prepare as crianças para escutar os outros: o que queremos saber, como se pergunta, como se agradece.",
        "Deixe o resultado falar. Monte e leia o gráfico com as crianças, sem antecipar a conclusão.",
        "Acolha quem torcia por outra ideia. Se quiser, diga: <em class=\"fala\">\"A sua ideia ajudou a turma a chegar até aqui.\"</em>"
      ]
    }
  },
  {
    "slug": "fase-de-apresentacao",
    "titulo": "Fase de Apresentação",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Done",
    "pronto": true,
    "faseOrdem": 5,
    "origem": "Fornecido pela autora — ainda sem linha na base do Notion e sem código na Parte 4",
    "descricao": "A Apresentação protege o trabalho das crianças de virar espetáculo.",
    "conteudo": {
      "resumo": "A Apresentação protege o trabalho das crianças de virar espetáculo. Num projeto comum, as crianças decoram falas e os adultos assistem. Aqui a turma conta uma história real para um público que pode fazer algo com ela: a proposta é apresentada a quem tem o poder de decidir, e a resposta é de verdade.",
      "oQueAcontece": "A turma organiza a história da sua proposta do começo ao fim: o que percebemos, o que descobrimos, o que criamos, o que a escola escolheu e o que queremos construir. Então chega a visita. As crianças apresentam a proposta ao diretor, que escuta na altura delas, pergunta com interesse e registra a sua decisão diante do grupo. Não há falas decoradas: como a história é das crianças, elas contam o que viveram. E percebem que o que fizeram importa para além da sala.",
      "comoConduzir": [
        "Construa a apresentação com as crianças, a partir do percurso real do grupo, sem roteiro para decorar.",
        "Ofereça formas diferentes de participar: falar, mostrar, segurar, entregar. Nenhuma criança fica de fora por timidez.",
        "Prepare o visitante, não só as crianças: combine antes o papel de escutar com atenção, perguntar com cuidado e responder com honestidade."
      ]
    }
  },
  {
    "slug": "fase-de-avaliacao-e-reflexao",
    "titulo": "Fase de Avaliação e Reflexão",
    "categoria": "guias-pedagogicos",
    "tipo": "Guia",
    "status": "Done",
    "pronto": true,
    "faseOrdem": 6,
    "origem": "Fornecido pela autora — ainda sem linha na base do Notion e sem código na Parte 4",
    "descricao": "A Avaliação e Reflexão protege o projeto de terminar quando a visita vai embora.",
    "conteudo": {
      "resumo": "A Avaliação e Reflexão protege o projeto de terminar quando a visita vai embora. Num projeto comum, a apresentação é o fim; aqui, o fim é olhar para trás e perceber o próprio crescimento. Não há prova nem comparação entre crianças: cada criança olha de onde partiu e o que construiu, comparada só com ela mesma.",
      "oQueAcontece": "Na roda de encerramento, a turma percorre a jornada inteira mais uma vez: o encantamento do início, as descobertas, as criações, a escolha da escola, a visita. Cada criança diz ou mostra o que aprendeu, do seu jeito: falando, desenhando ou com escrita espontânea. O grupo celebra o que construiu junto, e cada criança leva para casa o registro da própria jornada, que abre a conversa com a família sobre tudo o que ela viveu.",
      "comoConduzir": [
        "Reviva o percurso com o grupo pelo Painel do Projeto, do primeiro dia até a visita, e deixe as crianças reconhecerem o próprio caminho.",
        "Convide cada criança a mostrar o que aprendeu do seu jeito. Se quiser, pergunte: <em class=\"fala\">\"De qual parte da jornada você mais gostou? Por quê?\"</em>",
        "Compare a criança com ela mesma, nunca com outra, e celebre o crescimento de cada uma."
      ]
    }
  }
];
