(function () {
  'use strict';

  var P = window.PROJETO, S = window.SESSOES || [], B = window.BIBLIOTECA || [], C = window.CRD;
  var main = document.getElementById('conteudo');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function semana(n) { return P.semanas.filter(function (w) { return w.numero === +n; })[0]; }
  function sessoesDaSemana(n) { return S.filter(function (s) { return s.week === +n; }); }
  function sessao(code) { return S.filter(function (s) { return s.code === code; })[0]; }
  function categoria(slug) { return P.categoriasBiblioteca.filter(function (c) { return c.slug === slug; })[0]; }
  function recursosDa(slug) { return B.filter(function (r) { return r.categoria === slug; }); }
  function recurso(slug) { return B.filter(function (r) { return r.slug === slug; })[0]; }
  /* A cor identifica o TIPO de aula, como no material impresso. */
  /* Uma semana fora de semanasLiberadas fica trancada por inteiro. */
  function semanaLiberada(n) {
    var L = P.semanasLiberadas;
    return !L || L.indexOf(+n) > -1;
  }

  function corAula(s) { return (P.coresAula && P.coresAula[C.nome(s)]) || 'var(--roxo)'; }
  function corAulaTxt(s) { return (P.coresAulaTexto && P.coresAulaTexto[C.nome(s)]) || corAula(s); }
  function tintAula(s) { return (P.coresAulaTint && P.coresAulaTint[C.nome(s)]) || 'var(--sunk)'; }
  function corBloco(b) { return (P.coresBloco && P.coresBloco[b]) || 'var(--roxo)'; }
  function softAula(s) { return tintAula(s); }

  /* Migalhas vivem numa faixa própria, fora do conteúdo */
  var CADEADO = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
    '<rect x="4" y="10.5" width="16" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>';

  var crumbBar = document.getElementById('crumbs');
  function crumbs(items) {
    if (!items) { crumbBar.hidden = true; return; }
    crumbBar.hidden = false;
    crumbBar.innerHTML = '<ol>' + items.map(function (it, i) {
      var last = i === items.length - 1;
      return '<li>' + (last ? '<span aria-current="page">' + esc(it.label) + '</span>'
                            : '<a href="' + it.href + '">' + esc(it.label) + '</a>') + '</li>';
    }).join('') + '</ol>';
  }

  function cardHTML(o) {
    return '<article class="card' + (o.classe ? ' ' + o.classe : '') + '"' +
        ' style="--accent:' + o.cor + ';--accent-txt:' + (o.corTexto || o.cor) +
        ';--accent-tint:' + (o.tint || 'var(--sunk)') + '">' +
      '<div class="card__strip"></div>' +
      '<div class="card__in">' +
        '<div class="card__body">' +
          (o.code ? '<span class="card__code">' + esc(o.code) + '</span>' : '') +
          '<h3><a class="card__link" href="' + o.href + '">' + esc(o.titulo) + '</a></h3>' +
          '<div class="card__rule"></div>' +
          (o.sub ? '<p class="card__sub">' + esc(o.sub) + '</p>' : '') +
          (o.desc ? '<p class="card__desc">' + esc(o.desc) + '</p>' : '') +
          (o.meta ? '<p class="card__meta">' + esc(o.meta) + '</p>' : '') +
        '</div>' +
        '<div class="card__act"><span class="btn btn--ghost">' + esc(o.acao) + '</span></div>' +
      '</div>' +
    '</article>';
  }

  /* ── Início ────────────────────────────────────────────── */
  function viewInicio() {
    document.title = 'Recursos Digitais · Metodologia InterCriativa';
    crumbs(null);
    main.innerHTML =
      '<section class="hero">' +
        '<p class="eyebrow">Bem-vindos ao Intercriativa Lab</p>' +
        '<h1 class="t-h1">Prepare experiências significativas para as crianças da sua turma em <b>menos tempo</b>.</h1>' +
        '<p class="t-body">Encontre planos, orientações e materiais para personalizar cada sessão com o seu conhecimento da turma, valorizando o brincar, a participação ativa e o desenvolvimento integral de cada criança.</p>' +
        '<p style="margin-top:26px"><a class="btn" href="#/revista">Preparar minha próxima sessão</a></p>' +
      '</section>' +
      '<section class="section">' +
        '<h2 class="rule">O que você precisa acessar?</h2>' +
        '<div class="cards">' +
          cardHTML({ href: '#/revista', cor: 'var(--azul)', corTexto: 'var(--azul-txt)', tint: 'var(--azul-tint)',
            titulo: 'Orientações do Educador', desc: 'Prepare ou retome as sessões das três semanas.',
            meta: P.semanas.length + ' semanas · ' + S.length + ' sessões', acao: 'Abrir revista' }) +
          cardHTML({ href: '#/biblioteca', cor: 'var(--teal)', corTexto: 'var(--teal-txt)', tint: 'var(--teal-tint)',
            titulo: 'Biblioteca Digital', desc: 'Consulte orientações e estratégias quando precisar.',
            meta: B.length + ' recursos · ' + P.categoriasBiblioteca.length + ' categorias', acao: 'Abrir biblioteca' }) +
          cardHTML({ href: '#/materiais', cor: 'var(--laranja)', corTexto: 'var(--laranja-txt)', tint: 'var(--laranja-tint)',
            titulo: 'Materiais da Criança', desc: 'Acesse os materiais para baixar, imprimir e usar com as crianças.',
            acao: 'Ver materiais' }) +
        '</div>' +
      '</section>';
  }

  /* ── Orientações do Educador ───────────────────────────────────── */
  function viewRevista() {
    document.title = 'Orientações do Educador · Recursos Digitais';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Orientações do Educador' }]);
    main.innerHTML =
      '<header class="phead">' +
        '<p class="eyebrow">' + esc(P.projeto) + '</p>' +
        '<h1 class="t-h2">Orientações do <b>Educador</b></h1>' +
      '</header>' +
      '<div class="cards" style="margin-top:30px">' + P.semanas.map(function (w) {
        if (!semanaLiberada(w.numero)) {
          return '<article class="card card--trancado">' +
            '<div class="card__strip"></div>' +
            '<div class="card__in"><div class="card__body">' +
              '<span class="card__code">Semana ' + w.numero + '</span>' +
              '<h3>' + esc(w.fase) + '</h3><div class="card__rule"></div>' +
              '<p class="card__desc">Esta semana abre mais perto do dia das sessões.</p>' +
            '</div><div class="card__act"><span class="trancado__sel">' + CADEADO + ' Trancada</span></div></div>' +
          '</article>';
        }
        return cardHTML({ href: '#/revista/semana/' + w.numero, cor: w.corFase, corTexto: w.corFase,
          code: 'Semana ' + w.numero, titulo: w.fase, sub: w.tituloDoDia,
          meta: sessoesDaSemana(w.numero).length + ' sessões', acao: 'Abrir semana' });
      }).join('') + '</div>';
  }

  /* ── Página da semana ──────────────────────────────────── */
  function viewSemana(n) {
    if (!semanaLiberada(n)) return viewTrancado(n);
    var w = semana(n); if (!w) return viewNaoEncontrado();
    document.title = 'Semana ' + w.numero + ' · Orientações do Educador';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Orientações do Educador', href: '#/revista' },
            { label: 'Semana ' + w.numero }]);

    main.innerHTML =
      '<header class="phead">' +
        '<p class="eyebrow">Semana ' + w.numero + ' · ' + esc(w.fase) + '</p>' +
        '<h1 class="t-h2">' + esc(w.tituloDoDia) + '</h1>' +
        '<p class="phead__sub">' + esc(w.objetivo) + '</p>' +
      '</header>' +
      '<div class="cards" style="margin-top:30px">' +
        cardHTML({ href: '#/revista/semana/' + w.numero + '/orientacoes', cor: 'var(--roxo)', corTexto: 'var(--roxo-forte)', tint: 'var(--roxo-tint)', classe: 'orient', code: 'Planejamento do dia',
          titulo: 'Orientações do Dia',
          desc: 'Objetivos, materiais e preparação para o dia inteiro.', acao: 'Ver orientações' }) +
        sessoesDaSemana(n).map(function (s) {
          return cardHTML({ href: 'sessao.html#' + s.code, cor: corAula(s), corTexto: corAulaTxt(s), tint: tintAula(s),
            code: s.code, titulo: C.nome(s), sub: s.title,
            meta: (s.modoDeBrincar ? s.modoDeBrincar + ' · ' : '') + s.duration, acao: 'Abrir sessão' });
        }).join('') +
      '</div>';
  }

  /* ── Abas do dia ───────────────────────────────────────── */
  function tabsHTML(n, atual) {
    if (!semanaLiberada(n)) return '';
    var w = semana(n);
    var itens = [
      { id: 'orientacoes', label: 'Orientações do Dia', href: '#/revista/semana/' + n + '/orientacoes' },
      { id: 'resultados', label: 'Resultados e documentação', href: '#/revista/semana/' + n + '/resultados' }
    ].concat(sessoesDaSemana(n).map(function (s) {
      return { id: s.code, label: C.nome(s), href: 'sessao.html#' + s.code };
    }));
    return '<nav class="tabs" aria-label="Partes do dia">' + itens.map(function (t) {
      return '<a class="tab" href="' + t.href + '"' + (t.id === atual ? ' aria-current="page"' : '') + '>' +
        esc(t.label) + '</a>';
    }).join('') + '</nav>';
  }

  function sheetTop(w) {
    return '<div class="sheet__top">' +
      '<p class="eyebrow">' + esc(w.fase) + '</p>' +
      '<p class="eyebrow eyebrow--muted">Semana ' + w.numero + ' · Dia 1</p>' +
    '</div>';
  }

  /* ── Orientações do Dia ────────────────────────────────── */
  function viewOrientacoes(n) {
    if (!semanaLiberada(n)) return viewTrancado(n);
    var w = semana(n), O = (window.ORIENTACOES || {})[n];
    if (!w || !O) return viewNaoEncontrado();
    document.title = 'Orientações do Dia · Semana ' + w.numero;
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Orientações do Educador', href: '#/revista' },
            { label: 'Semana ' + w.numero, href: '#/revista/semana/' + w.numero },
            { label: 'Orientações do Dia' }]);

    main.innerHTML =
      tabsHTML(n, 'orientacoes') +
      '<article class="sheet">' +
        faixaHTML(O) +
        '<h1>Orientações do <b>Dia</b></h1>' +

        '<h2 class="rule">Objetivos do dia</h2>' +
        '<div class="rows">' + O.objetivos.map(function (o, i) {
          var s = sessoesDaSemana(n)[i];
          return '<div class="row"><span class="row__k"' +
            (s ? ' style="color:' + corAulaTxt(s) + '"' : '') + '>' + esc(o.aula) + '</span>' +
            '<span class="row__v">' + o.objetivo + '</span></div>';
        }).join('') + '</div>' +

        '<h2 class="rule">Materiais e preparação</h2>' +
        '<div class="grid2">' + O.materiais.map(function (g) {
          var s = g.code ? sessao(g.code) : null;
          var cor = s ? corAula(s) : 'var(--muted)', corTxt = s ? corAulaTxt(s) : 'var(--muted)';
          return '<div><h3 class="grid2__h" style="--accent:' + cor + ';--accent-txt:' + corTxt + '">' + esc(g.titulo) + '</h3>' +
            '<ul class="dashes">' + g.itens.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>';
        }).join('') + '</div>' +

        '<h2 class="rule">Perfil da Criança Protagonista</h2>' +
        '<div class="chips" style="margin-bottom:38px">' + O.perfil.map(function (t) {
          return '<span class="chip chip--flat">' + esc(t) + '</span>';
        }).join('') + '</div>' +

        '<h2 class="rule rule--muted">Da Biblioteca Digital</h2>' +
        '<div class="chips">' + O.biblioteca.map(function (t) {
          var r = porTitulo(t);
          if (!r) return '<span class="chip chip--flat">' + esc(t) + '</span>';
          var cat = categoria(r.categoria) || {};
          /* A cor do chip é a da categoria em que o recurso está guardado.
             O nome da categoria vai no aria-label e no title, para que a
             informação não dependa só da cor. */
          return '<a class="chip chip--cat" href="#/biblioteca/recurso/' + r.slug + '"' +
            ' style="--accent:' + (cat.cor || 'var(--teal)') + ';--accent-txt:' + (cat.corTexto || 'var(--teal-txt)') + '"' +
            ' title="' + esc(cat.nome || '') + '" aria-label="' + esc(t + ' · ' + (cat.nome || '')) + '">' +
            '<span class="chip__dot"></span>' + esc(t) + '</a>';
        }).join('') + '</div>' +

        pagerDia(n, 'orientacoes') +
      '</article>';
  }

  /* Casa um nome da lista com uma entrada da Biblioteca, ignorando o prefixo
     "Proposta:" que aparece nas Orientações. */
  function porTitulo(t) {
    var limpo = t.replace(/^Proposta:\s*/i, '').trim().toLowerCase();
    return B.filter(function (r) { return r.titulo.toLowerCase() === limpo; })[0];
  }

  function faixaHTML(O) {
    var p = O.faixa.split('|');
    return '<div class="sheet__top">' +
      '<p class="eyebrow">' + esc(p[0].trim()) + '</p>' +
      '<p class="eyebrow eyebrow--muted">' + esc((p[1] || '').trim()) + '</p></div>';
  }

  /* ── Resultados e documentação ─────────────────────────── */
  function viewResultados(n) {
    if (!semanaLiberada(n)) return viewTrancado(n);
    var w = semana(n), O = (window.ORIENTACOES || {})[n];
    if (!w || !O) return viewNaoEncontrado();
    document.title = 'Resultados e documentação · Semana ' + w.numero;
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Orientações do Educador', href: '#/revista' },
            { label: 'Semana ' + w.numero, href: '#/revista/semana/' + w.numero },
            { label: 'Resultados e documentação' }]);

    main.innerHTML =
      tabsHTML(n, 'resultados') +
      '<article class="sheet">' +
        faixaHTML(O) +
        '<h1>Resultados e <b>documentação</b></h1>' +
        '<div class="tabela">' +
          '<div class="tabela__h">' +
            '<span>Atividade</span><span>Resultados da aprendizagem</span><span>Documentação pedagógica</span>' +
          '</div>' +
          O.resultados.map(function (r) {
            var s = sessao(r.code), cor = s ? corAulaTxt(s) : 'var(--ink)';
            var codes = s ? (s.bncc || []) : [], eixos = s ? (s.eixos || []) : [];
            return '<div class="tabela__r">' +
              '<div class="tabela__a">' +
                '<a href="sessao.html#' + esc(r.code) + '" class="tabela__n" style="color:' + cor + '">' + esc(r.aula) + '</a>' +
                (s ? '<span class="tabela__m">' + esc(s.modoDeBrincar) + '</span>' : '') +
                (codes.length ? '<span class="tabela__c">' + esc(codes.join('; ')) + '</span>' : '') +
                (eixos.length ? '<span class="tabela__c tabela__c--e" style="color:' + cor + '">' + esc(eixos.join('; ')) + '</span>' : '') +
              '</div>' +
              '<ul class="dashes">' + r.outcomes.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul>' +
              '<ul class="dashes">' + r.doc.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul>' +
            '</div>';
          }).join('') +
        '</div>' +
        pagerDia(n, 'resultados') +
      '</article>';
  }

  /* Navegação inferior, igual à das sessões */
  function pagerDia(n, atual) {
    var ss = sessoesDaSemana(n);
    var seq = [{ label: 'Orientações do Dia', href: '#/revista/semana/' + n + '/orientacoes' },
               { label: 'Resultados e documentação', href: '#/revista/semana/' + n + '/resultados' }]
      .concat(ss.map(function (s) { return { label: C.nome(s), href: 'sessao.html#' + s.code }; }));
    var i = atual === 'orientacoes' ? 0 : 1;
    var prev = seq[i - 1], next = seq[i + 1];
    return '<nav class="pager" aria-label="Outras partes do dia">' +
      (prev ? '<a class="pager__a" href="' + prev.href + '">← Anterior · ' + esc(prev.label) + '</a>' : '<span class="pager__a"></span>') +
      '<a class="btn btn--plain btn--sm" href="#/revista/semana/' + n + '">Voltar para a semana</a>' +
      (next ? '<a class="pager__a pager__a--r" href="' + next.href + '">Próxima · ' + esc(next.label) + ' →</a>' : '<span class="pager__a"></span>') +
    '</nav>';
  }

  /* ── Biblioteca ────────────────────────────────────────── */
  function viewBiblioteca() {
    document.title = 'Biblioteca Digital · Recursos Digitais';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Biblioteca Digital' }]);
    main.innerHTML =
      '<header class="phead">' +
        '<p class="eyebrow">Recursos Digitais</p>' +
        '<h1 class="t-h2">Biblioteca <b>Digital</b></h1>' +
        '<p class="phead__sub">Encontre estratégias, orientações, materiais e atividades para apoiar diferentes momentos da sua prática.</p>' +
      '</header>' +
      '<div class="cards" style="margin-top:30px">' + P.categoriasBiblioteca.map(function (c) {
        var n = recursosDa(c.slug).length;
        return cardHTML({ href: '#/biblioteca/categoria/' + c.slug, cor: c.cor || 'var(--teal)',
          corTexto: c.corTexto, titulo: c.nome, desc: c.descricao,
          meta: n + (n === 1 ? ' recurso' : ' recursos'), acao: 'Explorar' });
      }).join('') + '</div>';
  }

  function viewCategoria(slug) {
    var c = categoria(slug); if (!c) return viewNaoEncontrado();
    document.title = c.nome + ' · Biblioteca Digital';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Biblioteca Digital', href: '#/biblioteca' },
            { label: c.nome }]);
    var rs = recursosDa(slug);
    main.innerHTML =
      '<header class="phead">' +
        '<p class="eyebrow">Biblioteca Digital</p>' +
        '<h1 class="t-h2">' + esc(c.nome) + '</h1>' +
        '<p class="phead__sub">' + esc(c.descricao) + '</p>' +
      '</header>' +
      '<div class="cards" style="margin-top:30px">' + rs.map(function (r) {
        return cardHTML({ href: '#/biblioteca/recurso/' + r.slug, cor: c.cor || 'var(--teal)',
          corTexto: c.corTexto, code: r.codigo, titulo: r.titulo,
          desc: r.descricao, meta: r.ondeAparece,
          acao: r.pronto ? 'Abrir recurso' : 'Em breve' });
      }).join('') + '</div>';
  }

  function viewRecurso(slug) {
    var r = recurso(slug); if (!r) return viewNaoEncontrado();
    var c = categoria(r.categoria);
    document.title = r.titulo + ' · Biblioteca Digital';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Biblioteca Digital', href: '#/biblioteca' },
            { label: c.nome, href: '#/biblioteca/categoria/' + c.slug }, { label: r.titulo }]);

    main.innerHTML =
      '<article class="sheet" style="--accent:' + (c.cor || 'var(--teal)') +
        ';--accent-txt:' + (c.corTexto || 'var(--teal-txt)') + '">' +
        '<div class="sheet__top">' +
          '<p class="eyebrow" style="color:' + (c.corTexto || 'var(--teal-txt)') + '">' + esc(c.nome) + '</p>' +
          (r.codigo ? '<p class="eyebrow eyebrow--muted">' + esc(r.codigo) + '</p>' : '') +
        '</div>' +
        '<h1>' + esc(r.titulo) + '</h1>' +
        (r.descricao ? '<p class="sheet__obj">' + esc(r.descricao) + '</p>' : '') +
        (r.pronto && r.conteudo ? conteudoHTML(r) : marcadorHTML(r)) +
        (r.ondeAparece ? '<h2 class="rule rule--muted">Onde aparece</h2>' +
          '<p class="onde">' + esc(r.ondeAparece) + '</p>' : '') +
      '</article>';
  }

  /* O conteúdo vem verbatim do Notion, na estrutura confirmada:
     Resumo · Quando utilizar · Como conduzir · Dica · Recursos relacionados. */
  function conteudoHTML(r) {
    var k = r.conteudo;
    return (k.resumo ? '<h2 class="rule">Resumo</h2><p class="entrada">' + k.resumo + '</p>' : '') +
      (k.quandoUtilizar ? '<h2 class="rule">Quando utilizar</h2><p class="entrada">' + k.quandoUtilizar + '</p>' : '') +
      /* Os guias de fase trazem "O que acontece" no lugar de "Quando utilizar". */
      (k.oQueAcontece ? '<h2 class="rule">O que acontece</h2><p class="entrada">' + k.oQueAcontece + '</p>' : '') +
      (k.comoConduzir && k.comoConduzir.length
        ? '<h2 class="rule">Como conduzir</h2><ol class="passos">' +
          k.comoConduzir.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ol>' : '') +
      (k.dica && k.dica.length
        ? '<h2 class="rule">Dica</h2><ul class="dashes">' +
          k.dica.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' : '') +
      (k.recursos && k.recursos.length
        ? '<h2 class="rule rule--muted">Recursos relacionados</h2><div class="chips">' +
          k.recursos.map(function (x) {
            var alvo = recurso(x.slug);
            return alvo
              ? '<a class="chip chip--cat" href="#/biblioteca/recurso/' + x.slug + '"' +
                ' style="--accent:' + (categoria(alvo.categoria) || {}).cor +
                ';--accent-txt:' + (categoria(alvo.categoria) || {}).corTexto + '">' +
                '<span class="chip__dot"></span>' + esc(x.titulo) + '</a>'
              : '<span class="chip chip--pagina">' + esc(x.titulo) + '</span>';
          }).join('') + '</div>' : '');
  }

  function marcadorHTML(r) {
    return '<p style="margin-top:22px"><span class="soon">' + esc(r.status || 'Em breve') + '</span></p>' +
      '<p style="margin-top:12px;color:var(--muted);font-size:13px">' +
      'Esta entrada ainda não está pronta na Biblioteca. Quando o status virar Done no Notion, o conteúdo aparece aqui.</p>';
  }

  /* ── Materiais da Criança ──────────────────────────────── */
  /* ── Materiais da Criança ──────────────────────────────
     Uma página da criança existe em dois lugares: a imagem, gerada do PDF do
     caderno, e o texto de como usá-la, que vive na Biblioteca. Aqui os dois se
     encontram. A ordem é a das semanas, porque é assim que a educadora imprime.
     Semana trancada mostra só a contagem — as páginas ficam guardadas. */

  function paginasDaSemana(n) {
    var out = [];
    sessoesDaSemana(n).forEach(function (s) {
      (s.paginasDaCrianca || []).forEach(function (pg) {
        out.push({ pg: pg, sessao: s });
      });
    });
    return out;
  }

  function pagina(n, id) {
    return paginasDaSemana(n).filter(function (x) { return x.pg.id === id; })[0];
  }

  function viewMateriais() {
    document.title = 'Materiais da Criança · Recursos Digitais';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Materiais da Criança' }]);

    var secoes = P.semanas.map(function (w) {
      var pags = paginasDaSemana(w.numero);
      var cabeca = '<h2 class="rule" style="margin-top:34px">Semana ' + w.numero + ' · ' + esc(w.fase) + '</h2>';

      if (!semanaLiberada(w.numero)) {
        return cabeca + '<div class="trancado">' + CADEADO +
          '<div><p class="trancado__t">' + pags.length + (pags.length === 1 ? ' página guardada' : ' páginas guardadas') + '</p>' +
          '<p class="trancado__s">Abrem junto com a semana.</p></div></div>';
      }

      return cabeca + '<div class="pgs">' + pags.map(function (x) {
        var r = recurso(x.pg.bib);
        return '<a class="pg" href="#/materiais/' + w.numero + '/' + esc(x.pg.id) + '">' +
          '<span class="pg__fig">' + (x.pg.imagem
            ? '<img src="' + esc(x.pg.imagem) + '" alt="">'
            : '<span class="pg__semimg">imagem em breve</span>') + '</span>' +
          '<span class="pg__txt">' +
            '<span class="pg__cad">' + esc(x.pg.caderno) + '</span>' +
            '<span class="pg__t">' + esc(x.pg.titulo) + '</span>' +
            '<span class="pg__m">' + esc(C.nome(x.sessao)) + ' · ' + esc(x.sessao.code) + '</span>' +
            /* Três estados honestos: texto pronto, entrada aberta sem passo a
               passo, e página que ainda não tem entrada nenhuma. */
            (r && r.conteudo ? '<span class="pg__ok">Como usar na Biblioteca</span>'
             : r            ? '<span class="pg__meio">Entrada sem passo a passo</span>'
                            : '<span class="pg__falta">Sem entrada na Biblioteca</span>') +
          '</span></a>';
      }).join('') + '</div>';
    }).join('');

    main.innerHTML =
      '<header class="phead">' +
        '<p class="eyebrow">Recursos Digitais</p>' +
        '<h1 class="t-h2">Materiais da <b>Criança</b></h1>' +
        '<p class="phead__sub">As páginas dos cadernos, na ordem das semanas. Toque numa página para ver como ela é e como conduzi-la.</p>' +
      '</header>' + secoes;
  }

  function viewPagina(n, id) {
    if (!semanaLiberada(n)) return viewTrancado(n);
    var x = pagina(n, id);
    if (!x) return viewNaoEncontrado();
    var pg = x.pg, r = recurso(pg.bib);

    document.title = pg.titulo + ' · Materiais da Criança';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Materiais da Criança', href: '#/materiais' },
            { label: pg.titulo }]);

    var comoUsar;
    if (r && r.conteudo) {
      comoUsar = conteudoHTML(r) +
        '<p style="margin-top:26px"><a class="btn btn--plain btn--sm" href="#/biblioteca/recurso/' +
          esc(r.slug) + '">Abrir ' + esc(r.titulo) + ' na Biblioteca</a></p>';
    } else if (r) {
      comoUsar = '<h2 class="rule">Como usar</h2>' +
        '<p class="entrada">' + esc(r.descricao || '') + '</p>' +
        '<div class="aviso"><b>O texto completo ainda não está na Biblioteca.</b> ' +
          'A entrada <b>' + esc(r.codigo || r.titulo) + '</b> existe, mas ainda sem o passo a passo.</div>' +
        '<p style="margin-top:22px"><a class="btn btn--plain btn--sm" href="#/biblioteca/recurso/' +
          esc(r.slug) + '">Abrir ' + esc(r.titulo) + ' na Biblioteca</a></p>';
    } else {
      comoUsar = '<div class="aviso"><b>Esta página ainda não tem entrada na Biblioteca.</b> ' +
        'A imagem está aqui, mas o texto de como conduzi-la ainda precisa ser escrito.</div>';
    }

    main.innerHTML =
      '<article class="sheet sheet--pg" style="margin-top:26px">' +
        '<p class="eyebrow eyebrow--muted">Semana ' + n + ' · ' + esc(pg.caderno) + '</p>' +
        '<h1 class="t-h2" style="margin:8px 0 0">' + esc(pg.titulo) + '</h1>' +
        '<p class="t-meta" style="margin-top:8px">Usada em <a href="sessao.html#' + esc(x.sessao.code) + '">' +
          esc(C.nome(x.sessao)) + ' · ' + esc(x.sessao.code) + '</a></p>' +
        (pg.imagem
          ? '<figure class="pgfull"><img src="' + esc(pg.imagem) + '" alt="Página ' + esc(pg.titulo) + '"></figure>'
          : '<div class="trancado" style="margin-top:22px">' + CADEADO +
            '<div><p class="trancado__t">Imagem em breve</p>' +
            '<p class="trancado__s">Esta página ainda não foi gerada a partir do caderno.</p></div></div>') +
        comoUsar +
      '</article>';
  }

  function viewTrancado(n) {
    var w = semana(n);
    document.title = 'Semana ' + n + ' · trancada';
    crumbs([{ label: 'Início', href: '#/' }, { label: 'Orientações do Educador', href: '#/revista' },
            { label: 'Semana ' + n }]);
    main.innerHTML = '<article class="sheet" style="margin-top:34px;text-align:center">' +
      '<p style="color:var(--muted)">' + CADEADO + '</p>' +
      '<h1 class="t-h2" style="margin-top:10px">Semana ' + n + ' ainda <b>trancada</b></h1>' +
      '<p class="t-body" style="margin:12px auto 0;max-width:46ch">' +
        (w ? esc(w.fase) + ' abre mais perto do dia das sessões. ' : '') +
        'Enquanto isso, a Semana 1 está disponível por completo.</p>' +
      '<p style="margin-top:24px"><a class="btn" href="#/revista/semana/1">Ir para a Semana 1</a></p>' +
    '</article>';
  }

  function viewNaoEncontrado() {
    document.title = 'Não encontrado';
    crumbs(null);
    main.innerHTML = '<div class="placeholder" style="margin-top:44px">' +
      '<h2>Não encontramos esta página</h2><p>O endereço pode ter mudado.</p>' +
      '<p style="margin-top:18px"><a class="btn btn--plain btn--sm" href="#/">Voltar ao Início</a></p></div>';
  }

  /* ── Busca ─────────────────────────────────────────────── */
  var q = document.getElementById('q'), resultsBox = document.getElementById('results'),
      searchBox = document.getElementById('searchBox'), searchToggle = document.getElementById('searchToggle');

  function buscar(term) {
    term = term.trim().toLowerCase();
    if (term.length < 2) return [];
    var hits = [];
    B.forEach(function (r) {
      var hay = [r.titulo, r.slug, r.resumo, (r.assuntos || []).join(' '),
                 (r.palavrasChave || []).join(' '), (r.sessoes || []).join(' '),
                 (categoria(r.categoria) || {}).nome].join(' ').toLowerCase();
      if (hay.indexOf(term) > -1) {
        hits.push({ t: r.titulo, m: (categoria(r.categoria) || {}).nome, href: '#/biblioteca/recurso/' + r.slug });
      }
    });
    S.forEach(function (s) {
      if (!semanaLiberada(s.week)) return;
      var hay = [s.code, s.title, s.lessonType, s.block, s.objective].join(' ').toLowerCase();
      if (hay.indexOf(term) > -1) {
        hits.push({ t: C.nome(s), m: 'Sessão ' + s.code + ' · ' + s.title, href: 'sessao.html#' + s.code });
      }
    });
    return hits.slice(0, 10);
  }

  function renderResultados(hits) {
    if (!q.value.trim() || q.value.trim().length < 2) { hideResults(); return; }
    resultsBox.hidden = false; q.setAttribute('aria-expanded', 'true');
    resultsBox.innerHTML = hits.length
      ? hits.map(function (h) {
          return '<button class="results__item" role="option" aria-selected="false" data-href="' + h.href + '">' +
            '<span class="results__t">' + esc(h.t) + '</span><br><span class="results__m">' + esc(h.m) + '</span></button>';
        }).join('')
      : '<p class="results__empty">Nada encontrado. Tente outras palavras ou escolha uma categoria.</p>';
  }
  function hideResults() { resultsBox.hidden = true; q.setAttribute('aria-expanded', 'false'); }

  if (q) {
    q.addEventListener('input', function () { renderResultados(buscar(q.value)); });
    q.addEventListener('keydown', function (e) {
      var opts = Array.prototype.slice.call(resultsBox.querySelectorAll('.results__item'));
      if (e.key === 'Escape') { hideResults(); q.blur(); return; }
      if (!opts.length) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); opts[0].focus(); }
    });
    resultsBox.addEventListener('keydown', function (e) {
      var opts = Array.prototype.slice.call(resultsBox.querySelectorAll('.results__item'));
      var cur = opts.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); (opts[cur + 1] || opts[0]).focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); cur <= 0 ? q.focus() : opts[cur - 1].focus(); }
      if (e.key === 'Escape') { hideResults(); q.focus(); }
    });
    resultsBox.addEventListener('click', function (e) {
      var b = e.target.closest('.results__item'); if (!b) return;
      location.href = b.getAttribute('data-href'); q.value = ''; hideResults();
    });
    document.addEventListener('click', function (e) {
      if (!searchBox.contains(e.target) && e.target !== searchToggle) hideResults();
    });
  }

  if (searchToggle) {
    searchToggle.addEventListener('click', function () {
      var abrir = searchBox.hasAttribute('hidden');
      if (abrir) { searchBox.removeAttribute('hidden'); q.focus(); } else { searchBox.setAttribute('hidden', ''); }
      searchToggle.setAttribute('aria-expanded', String(abrir));
    });
    function syncSearch() {
      if (window.matchMedia('(max-width:760px)').matches) {
        if (searchToggle.getAttribute('aria-expanded') !== 'true') searchBox.setAttribute('hidden', '');
      } else { searchBox.removeAttribute('hidden'); }
    }
    syncSearch();
    window.addEventListener('resize', syncSearch);
  }

  /* ── Router ────────────────────────────────────────────── */
  function router() {
    hideResults();
    var p = (location.hash.replace(/^#/, '') || '/').split('/').filter(Boolean);
    if (!p.length) return viewInicio();
    if (p[0] === 'revista') {
      if (p.length === 1) return viewRevista();
      if (p[1] === 'semana' && p[2]) {
        if (p[3] === 'orientacoes') return viewOrientacoes(p[2]);
        if (p[3] === 'resultados') return viewResultados(p[2]);
        return viewSemana(p[2]);
      }
    }
    if (p[0] === 'biblioteca') {
      if (p.length === 1) return viewBiblioteca();
      if (p[1] === 'categoria' && p[2]) return viewCategoria(p[2]);
      if (p[1] === 'recurso' && p[2]) return viewRecurso(p[2]);
    }
    if (p[0] === 'materiais') {
      if (p[1] && p[2]) return viewPagina(+p[1], p[2]);
      return viewMateriais();
    }
    return viewNaoEncontrado();
  }

  window.addEventListener('hashchange', function () { router(); window.scrollTo(0, 0); });
  router();
})();
