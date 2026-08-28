/* Como uma sessão é nomeada.

   O nome de uma aula é o seu TIPO CANÔNICO — Hora do Conto, Brincar ao Ar Livre,
   Oficina de Descobertas, Centros de Aprendizagem, Painel do Projeto. É assim que
   a educadora reconhece a aula, e é assim que as Orientações do Educador impressas nomeiam.
   O texto descritivo do Notion ("Pesquisa com Amigos", "Ideias na Cabeça") não é
   nome de aula: é o assunto daquele dia, e entra como subtítulo.

   O componente (Alfabetização, Matemática) NÃO entra no nome da aula — decisão
   de 28/08. Ele continua visível no campo Foco de cada sessão. As funções abaixo
   ainda sabem separar um "Tipo | Componente" caso ele volte aos dados. */
window.CRD = {

  nome: function (s) { return s.lessonType.split('|')[0].trim(); },

  componente: function (s) {
    var p = s.lessonType.split('|');
    return p[1] ? p[1].trim() : '';
  },

  /* Nome + componente, para quando não há espaço para duas linhas. */
  nomeCompleto: function (s) { return s.lessonType.replace(/\s*\|\s*/g, ' · '); },

  /* O assunto do dia — o antigo "título". */
  assunto: function (s) { return s.title; },

  /* Os três Modos de Brincar aprovados. */
  MODOS: ['Dirigida pelo educador', 'Guiada pelo educador', 'Dirigida pela criança']
};
