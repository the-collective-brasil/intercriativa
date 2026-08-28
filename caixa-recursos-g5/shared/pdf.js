(function () {
  'use strict';

  var LABEL = { confirmada: 'Confirmada', adaptar: 'Adaptar', duvida: 'Dúvida' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function corpoDoBloco(b, sess) {
    if (b.kind === 'resultados') {
      return '<ul>' + b.outcomes.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul>' +
        b.documentacao.map(function (d) {
          return '<p class="p-doc"><b>' + esc(d.label) + '</b> ' + d.text + '</p>';
        }).join('');
    }
    if (b.kind === 'materiais') {
      var out0 = '<ul>' + sess.materials.map(function (m) {
        return '<li>' + esc(m.text) + ' <span class="p-org">(' +
          ({ caixa: 'na Caixa', escola: 'na escola', preparar: 'preparar', imprimir: 'imprimir' }[m.origem] || m.origem) +
          ')</span></li>';
      }).join('') + '</ul>';
      if (sess.antesDaAula) out0 += '<p><b>Antes da aula</b> ' + esc(sess.antesDaAula) + '</p>';
      if (sess.bancoDePalavras && sess.bancoDePalavras.length) {
        out0 += '<p><b>Banco de Palavras</b> ' + esc(sess.bancoDePalavras.join(' · ')) + '</p>';
      }
      return out0;
    }
    var out = (b.intro ? '<p>' + b.intro + '</p>' : '') +
              '<ul>' + (b.items || []).map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';
    if (b.propostas) {
      var rotulo = b.subLabel || 'Proposta';
      out += b.propostas.map(function (pr) {
        return '<div class="p-prop"><p><b>' + esc(rotulo + ' ' + pr.n + ' · ' + pr.title) + '</b></p><p>' + pr.html + '</p></div>';
      }).join('');
    }
    return out;
  }

  function imprimir(o) {
    var antigo = document.title;
    var nome = 'Plano-Revisado_' + o.sessao.code + '_' + o.data;

    var velho = document.getElementById('printRoot');
    if (velho) velho.remove();

    var blocos = o.blocos.map(function (b) {
      var m = o.marks[b.id] || {};
      var num = b.kind === 'step' ? b.n + ' | ' : '';
      var reg = '';
      if (m.nota && m.nota.trim()) {
        reg += '<div class="p-reg p-reg--nota"><span class="p-reg__l">Notas · o que vou mudar</span><p>' + esc(m.nota) + '</p></div>';
      }
      if (m.pergunta && m.pergunta.trim()) {
        reg += '<div class="p-reg p-reg--perg"><span class="p-reg__l">Perguntas / Dúvidas</span><p>' + esc(m.pergunta) + '</p></div>';
      }
      return '<section class="p-blk">' +
        '<h3>' + esc(num + b.title) + (b.minutes ? ' <span class="p-min">· ' + b.minutes + ' min</span>' : '') +
          '<span class="p-mark p-mark--' + (m.opt || 'sem') + '">' + (m.opt ? LABEL[m.opt] : 'Sem marcação') + '</span></h3>' +
        corpoDoBloco(b, o.sessao) + reg +
      '</section>';
    }).join('');

    function conta(opt) {
      return o.blocos.filter(function (b) { return (o.marks[b.id] || {}).opt === opt; }).length;
    }

    var codes = (o.sessao.bncc || []).concat(o.sessao.eixos || []);

    var root = document.createElement('div');
    root.id = 'printRoot';
    root.innerHTML =
      '<header class="p-head">' +
        '<img class="p-logo" src="assets/intercriativa.png" alt="Metodologia InterCriativa">' +
        '<p class="p-prog">' + esc(o.projeto.espaco) + '</p>' +
        '<p class="p-ctx">' + esc(o.projeto.projeto) + ' · ' + esc(o.projeto.turma) +
          ' · Semana ' + o.sessao.week + ' · ' + esc(o.semana.fase) + ' · ' + esc(o.sessao.code) + '</p>' +
        '<h1>' + esc(window.CRD.nome(o.sessao)) + '</h1>' +
        '<p class="p-assunto">' + esc(o.sessao.title) + '</p>' +
        (o.sessao.modoDeBrincar
          ? '<p class="p-modo"><span>Modo de Brincar</span> ' + esc(o.sessao.modoDeBrincar) + '</p>'
          : '') +
        '<p class="p-obj">' + o.sessao.objective + '</p>' +
        '<p class="p-meta">' + esc(o.sessao.block) + ' · ' + esc(o.sessao.duration) +
          (window.CRD.componente(o.sessao) ? ' · ' + esc(window.CRD.componente(o.sessao)) : '') +
          (o.sessao.foco ? ' · Foco: ' + esc(o.sessao.foco) : '') + '</p>' +
        (codes.length ? '<p class="p-meta">' + esc(codes.join(' · ')) + '</p>' : '') +
      '</header>' +

      '<div class="p-sum">' +
        '<span><b>' + o.tempo + '</b> tempo de revisão do plano</span>' +
        '<span><b>' + conta('confirmada') + '</b> ' + (conta('confirmada') === 1 ? 'confirmada' : 'confirmadas') + '</span>' +
        '<span><b>' + conta('adaptar') + '</b> a adaptar</span>' +
        '<span><b>' + conta('duvida') + '</b> ' + (conta('duvida') === 1 ? 'dúvida' : 'dúvidas') + '</span>' +
        '<span>Gerado em ' + esc(o.data) + '</span>' +
      '</div>' +

      blocos +

      '<footer class="p-foot">' + esc(o.projeto.espaco) + ' · plano revisado por quem vai ensinar · ' + esc(o.data) + '</footer>';

    document.body.appendChild(root);
    document.title = nome;           // o navegador sugere este nome ao salvar em PDF

    function limpar() {
      document.title = antigo;
      window.removeEventListener('afterprint', limpar);
    }
    window.addEventListener('afterprint', limpar);

    /* O logotipo é inserido agora; se imprimirmos antes de ele carregar, o PDF
       sai sem marca. Espera o carregamento, com saída garantida em 1,5 s. */
    function imprimirAgora() {
      if (imprimirAgora.feito) return;
      imprimirAgora.feito = true;
      window.print();
      setTimeout(limpar, 1500);      // Safari nem sempre dispara afterprint
    }

    var logo = root.querySelector('.p-logo');
    if (logo && !(logo.complete && logo.naturalWidth > 0)) {
      logo.addEventListener('load', imprimirAgora);
      logo.addEventListener('error', imprimirAgora);
      setTimeout(imprimirAgora, 1500);
    } else {
      imprimirAgora();
    }
  }

  window.CRD_PDF = { imprimir: imprimir };
})();
