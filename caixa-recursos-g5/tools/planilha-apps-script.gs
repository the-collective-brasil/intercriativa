/**
 * Recebe os resultados de uma revisão e grava uma linha na planilha.
 *
 * COMO LIGAR (5 minutos, precisa ser você — é a sua conta Google):
 *  1. Crie uma planilha nova. Sugestão de nome: "Teste de Componentes — Revisões".
 *  2. Menu Extensões → Apps Script.
 *  3. Apague o que estiver lá e cole este arquivo inteiro. Salve.
 *  4. Botão Implantar → Nova implantação → tipo "App da Web".
 *       Executar como: Eu
 *       Quem pode acessar: Qualquer pessoa
 *  5. Autorize quando pedir. Copie o URL que termina em /exec.
 *  6. Cole esse URL em shared/review.js, na linha:  var SHEET_ENDPOINT = '';
 *
 * Cada revisão vira UMA linha, com uma coluna por seção marcada.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var d = JSON.parse(e.postData.contents);
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sh.getLastRow() === 0) {
      sh.appendRow([
        'Recebido em', 'Sessão', 'Título', 'Semana',
        'Tempo (min:seg)', 'Tempo (segundos)',
        'Confirmadas', 'Adaptações', 'Dúvidas',
        'Marcações por seção', 'Notas de adaptação', 'Perguntas e dúvidas'
      ]);
      sh.getRange(1, 1, 1, 12).setFontWeight('bold');
      sh.setFrozenRows(1);
    }

    var seg = Number(d.tempoSegundos) || 0;
    var mmss = Math.floor(seg / 60) + ':' + ('0' + (seg % 60)).slice(-2);

    var marcacoes = (d.marcacoes || []).map(function (m) {
      return m.secao + ' → ' + (m.opcao || 'sem marcação');
    }).join('\n');

    var notas = (d.marcacoes || []).filter(function (m) { return m.nota; })
      .map(function (m) { return m.secao + ': ' + m.nota; }).join('\n\n');

    var perguntas = (d.marcacoes || []).filter(function (m) { return m.pergunta; })
      .map(function (m) { return m.secao + ': ' + m.pergunta; }).join('\n\n');

    sh.appendRow([
      new Date(), d.sessao, d.titulo, d.semana,
      mmss, seg,
      d.confirmadas, d.adaptacoes, d.duvidas,
      marcacoes, notas, perguntas
    ]);

    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('erro: ' + err);
  } finally {
    lock.releaseLock();
  }
}
