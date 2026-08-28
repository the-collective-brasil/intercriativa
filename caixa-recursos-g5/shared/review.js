(function () {
  'use strict';

  var P = window.PROJETO, S = window.SESSOES || [], B = window.BIBLIOTECA || [], C = window.CRD;

  /* Planilha que recebe os resultados (Apps Script · doPost).
     Trocar aqui é tudo o que é preciso para apontar para outra planilha. */
  var SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyVkEOVWLgvfZbo4YXPbaFg0wM4jfjP-Aib6HlMj9499xztFMwPiiyIe-It08llJ4M/exec';

  var main   = document.getElementById('sessMain'),
      crumbs = document.getElementById('crumbs'),
      scrim  = document.getElementById('scrim'),
      panel  = document.getElementById('panel');

  var code = decodeURIComponent(location.hash.replace(/^#/, '')) || (S[0] && S[0].code);
  var sess = S.filter(function (s) { return s.code === code; })[0];

  if (!sess) {
    main.innerHTML = '<div class="placeholder" style="margin-top:40px"><h2>Sessão não encontrada</h2>' +
      '<p>Verifique o endereço ou volte às Orientações do Educador.</p>' +
      '<p style="margin-top:18px"><a class="btn btn--plain btn--sm" href="index.html#/revista">Orientações do Educador</a></p></div>';
    return;
  }

  var semana = P.semanas.filter(function (w) { return w.numero === sess.week; })[0];

  /* Semana trancada: a sessão não abre, nem por link direto. */
  if (P.semanasLiberadas && P.semanasLiberadas.indexOf(sess.week) === -1) {
    crumbs.innerHTML = '<ol><li><a href="index.html#/">Início</a></li>' +
      '<li><a href="index.html#/revista">Orientações do Educador</a></li>' +
      '<li><span aria-current="page">Semana ' + sess.week + '</span></li></ol>';
    document.title = 'Semana ' + sess.week + ' · trancada';
    main.innerHTML = '<article class="sheet" style="text-align:center">' +
      '<p style="color:var(--muted)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<rect x="4" y="10.5" width="16" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg></p>' +
      '<h1 class="t-h2" style="margin-top:10px">Semana ' + sess.week + ' ainda <b>trancada</b></h1>' +
      '<p class="t-body" style="margin:12px auto 0;max-width:46ch">' + esc(semana ? semana.fase : '') +
      ' abre mais perto do dia das sessões. Enquanto isso, a Semana 1 está disponível por completo.</p>' +
      '<p style="margin-top:24px"><a class="btn" href="index.html#/revista/semana/1">Ir para a Semana 1</a></p></article>';
    document.getElementById('tabs').innerHTML = '';
    return;
  }
  var accent = (P.coresAula && P.coresAula[C.nome(sess)]) || 'var(--navy)';

  /* Seções revisáveis: os passos numerados e a Dica.
     Resultados e documentação vivem na sua própria aba; os materiais, nas
     Orientações do Dia. A sessão é a sequência da aula. */
  var reviewables = sess.sections.filter(function (b) { return b.kind === 'step' || b.kind === 'dica'; });
  var TOTAL = reviewables.length;

  document.title = sess.code + ' · ' + C.nome(sess);
  var accentTxt = (P.coresAulaTexto && P.coresAulaTexto[C.nome(sess)]) || accent;
  var accentTint = (P.coresAulaTint && P.coresAulaTint[C.nome(sess)]) || 'var(--sunk)';
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-txt', accentTxt);
  document.documentElement.style.setProperty('--accent-tint', accentTint);

  /* ── Estado ────────────────────────────────────────────── */
  var KEY = 'crd-g5:' + sess.code;
  var st = load();
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var o = JSON.parse(raw); o.marks = o.marks || {}; return o; }
    } catch (e) {}
    return { started: false, startedAt: null, elapsedMs: 0, finished: false, marks: {} };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  var hadSaved = st.started || Object.keys(st.marks).length > 0;

  /* ── Utilidades ────────────────────────────────────────── */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function recurso(slug) { return B.filter(function (r) { return r.slug === slug; })[0]; }
  function marcadas() { return reviewables.filter(function (b) { return st.marks[b.id] && st.marks[b.id].opt; }).length; }
  function pendentes() { return reviewables.filter(function (b) { return !(st.marks[b.id] && st.marks[b.id].opt); }); }
  function contar(o) { return reviewables.filter(function (b) { return st.marks[b.id] && st.marks[b.id].opt === o; }).length; }
  function elapsed() { return st.elapsedMs + (st.started && !st.finished && st.startedAt ? Date.now() - st.startedAt : 0); }
  function fmt(ms) {
    var t = Math.floor(ms / 1000), m = Math.floor(t / 60), s = t % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function hoje() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  /* "Hora do Conto" → "Hora do <b>Conto</b>" */
  function tituloDestacado(nome) {
    var p = nome.split(' ');
    if (p.length === 1) return '<b>' + esc(nome) + '</b>';
    return esc(p.slice(0, -1).join(' ')) + ' <b>' + esc(p[p.length - 1]) + '</b>';
  }

  /* ── Migalhas e abas ───────────────────────────────────── */
  crumbs.innerHTML = '<ol>' +
    '<li><a href="index.html#/">Início</a></li>' +
    '<li><a href="index.html#/revista">Orientações do Educador</a></li>' +
    '<li><a href="index.html#/revista/semana/' + sess.week + '">Semana ' + sess.week + '</a></li>' +
    '<li><span aria-current="page">' + esc(C.nome(sess)) + '</span></li></ol>';

  var irmas = S.filter(function (s) { return s.week === sess.week; });
  var sequencia = [
    { label: 'Orientações do Dia', href: 'index.html#/revista/semana/' + sess.week + '/orientacoes' },
    { label: 'Resultados e documentação', href: 'index.html#/revista/semana/' + sess.week + '/resultados' }
  ].concat(irmas.map(function (s) {
    return { label: C.nome(s), href: 'sessao.html#' + s.code, atual: s.code === sess.code };
  }));

  document.getElementById('tabs').innerHTML =
    '<nav class="tabs" aria-label="Partes do dia">' + sequencia.map(function (t) {
      return '<a class="tab" href="' + t.href + '"' + (t.atual ? ' aria-current="page"' : '') + '>' + esc(t.label) + '</a>';
    }).join('') + '</nav>';

  /* ── Render ────────────────────────────────────────────── */
  var LABEL = { confirmada: 'Confirmada', adaptar: 'Adaptar', duvida: 'Dúvida' };
  var ICONE = {
    confirmada: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 12.5 5.2 5.2L20 7"/></svg>',
    adaptar:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M14 6.5 17.5 10"/></svg>',
    duvida:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M9.2 9a3 3 0 1 1 4.3 3c-.9.6-1.5 1.3-1.5 2.4"/><circle cx="12" cy="18.2" r="1.3" fill="currentColor" stroke="none"/></svg>'
  };

  function corpo(b) {
    var out = '';
    if (b.intro) out += '<p class="passo__intro">' + b.intro + '</p>';
    out += '<ul class="dashes">' + (b.items || []).map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';
    if (b.propostas) {
      var rotulo = b.subLabel || 'Proposta';
      out += '<div class="propostas"><p class="propostas__t">' + esc(rotulo === 'Cantinho' ? 'Cantinhos' : 'Propostas') + '</p>' +
        '<div class="propostas__g">' + b.propostas.map(function (pr) {
          var link = pr.bib
            ? '<button type="button" class="bib" data-bib="' + esc(pr.bib) + '">' + esc(pr.title) + '</button>'
            : '<span class="bib bib--pend">' + esc(pr.title) + '</span>';
          return '<div class="proposta">' +
            '<p class="proposta__n">' + (pr.icon ? pr.icon + ' ' : '') + esc(rotulo) + ' ' + pr.n + '</p>' +
            '<h4>' + link + '</h4><p>' + pr.html + '</p></div>';
        }).join('') + '</div></div>';
    }
    return out;
  }

  function revisaoHTML(b) {
    var m = st.marks[b.id] || {};
    return '<div class="rev" data-blk="' + b.id + '">' +
      '<span class="rev__l">Esta seção está</span>' +
      '<div class="rev__opts" role="group" aria-label="Como está esta seção?">' +
        ['confirmada', 'adaptar', 'duvida'].map(function (o) {
          return '<button type="button" class="opt opt--' + o + '" data-opt="' + o + '" aria-pressed="' +
            (m.opt === o ? 'true' : 'false') + '">' + ICONE[o] + '<span>' + LABEL[o] + '</span></button>';
        }).join('') +
      '</div>' +
      '<div class="field" id="f-nota-' + b.id + '"' + (m.opt === 'adaptar' ? '' : ' hidden') + '>' +
        '<label for="nota-' + b.id + '">Notas · o que vou mudar</label>' +
        '<textarea id="nota-' + b.id + '" data-field="nota" data-blk="' + b.id + '" rows="3">' + esc(m.nota || '') + '</textarea>' +
      '</div>' +
      '<div class="field" id="f-perg-' + b.id + '"' + (m.opt === 'duvida' ? '' : ' hidden') + '>' +
        '<label for="perg-' + b.id + '">Perguntas / Dúvidas</label>' +
        '<textarea id="perg-' + b.id + '" data-field="pergunta" data-blk="' + b.id + '" rows="3">' + esc(m.pergunta || '') + '</textarea>' +
      '</div>' +
    '</div>';
  }

  function blocoHTML(b) {
    var m = st.marks[b.id] || {};
    if (b.kind === 'dica') {
      return '<section class="dica" id="blk-' + b.id + '"' + (m.opt ? ' data-state="' + m.opt + '"' : '') + '>' +
        '<p class="dica__t">Dica</p>' +
        '<ul class="dashes">' + b.items.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' +
        revisaoHTML(b) + '</section>';
    }
    return '<section class="passo" id="blk-' + b.id + '"' + (m.opt ? ' data-state="' + m.opt + '"' : '') + '>' +
      '<h2 class="passo__h"><span class="passo__n">' + (b.n < 10 ? '0' : '') + b.n + '</span>' +
        esc(b.title) + (b.minutes ? ' <i>· ' + b.minutes + ' minutos</i>' : '') + '</h2>' +
      corpo(b) + revisaoHTML(b) + '</section>';
  }

  function recursosDaSessao() {
    return B.filter(function (r) { return (r.sessoes || []).indexOf(sess.code) > -1; });
  }

  function render() {
    var idx = irmas.indexOf(sess);
    var prev = idx > 0 ? { label: C.nome(irmas[idx - 1]), href: 'sessao.html#' + irmas[idx - 1].code }
                       : { label: 'Resultados e documentação', href: sequencia[1].href };
    var next = idx < irmas.length - 1 ? { label: C.nome(irmas[idx + 1]), href: 'sessao.html#' + irmas[idx + 1].code } : null;

    var pags = sess.paginasDaCrianca || [];

    main.innerHTML =
      '<article class="sheet">' +
        '<div class="sheet__top">' +
          '<p class="eyebrow" style="color:' + accent + '">' + esc(semana.fase) + '</p>' +
          '<p class="eyebrow eyebrow--muted">Semana ' + sess.week + ' · Dia 1 · ' + esc(sess.code) + '</p>' +
        '</div>' +
        '<h1 class="sheet__h1" style="--accent:' + accent + '">' + tituloDestacado(C.nome(sess)) + '</h1>' +
        '<p class="sheet__obj">' + sess.objective + '</p>' +
        /* Painel do Projeto não tem Modo de Brincar na fonte — o campo some
           em vez de mostrar um valor inventado. */
        '<p class="modo">' +
          (sess.modoDeBrincar
            ? '<span>Modo de Brincar</span><em>' + esc(sess.modoDeBrincar) + '</em>'
            : '') +
          '<i>' + esc(sess.duration) + '</i></p>' +

        '<div id="startZone"></div>' +
        '<hr class="sheet__hr">' +

        '<div id="blocos">' + reviewables.map(blocoHTML).join('') + '</div>' +

        (pags.length ? paginasHTML(pags) : '') +

        '<div id="finishZone"></div>' +

        '<nav class="pager" aria-label="Outras partes do dia">' +
          '<a class="pager__a" href="' + prev.href + '">← Anterior · ' + esc(prev.label) + '</a>' +
          '<a class="btn btn--plain btn--sm" href="index.html#/revista/semana/' + sess.week + '">Voltar para a semana</a>' +
          (next ? '<a class="pager__a pager__a--r" href="' + next.href + '">Próxima · ' + esc(next.label) + ' →</a>'
                : '<span class="pager__a"></span>') +
        '</nav>' +
      '</article>' +

      /* Barra fixa: cronômetro, progresso e conclusão */
      '<div class="bar" id="bar"></div>';

    upgradeBibLinks();
    renderStartZone();
    renderFinishZone();
    renderBar();
  }

  /* As Páginas da Criança só aparecem nas semanas liberadas em
     PROJETO.paginasLiberadas. Nas demais, a seção fica trancada: a educadora
     vê que existem, mas ainda não as vê. */
  function paginasHTML(pags) {
    var liberada = (P.paginasLiberadas || []).indexOf(sess.week) > -1;
    if (!liberada) {
      return '<h2 class="rule rule--muted">Páginas da criança</h2>' +
        '<div class="trancado">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
            '<rect x="4" y="10.5" width="16" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>' +
          '<div><p class="trancado__t">' + pags.length + (pags.length === 1 ? ' página ainda não liberada' : ' páginas ainda não liberadas') + '</p>' +
          '<p class="trancado__s">As páginas da Semana ' + sess.week + ' abrem mais perto do dia da sessão.</p></div>' +
        '</div>';
    }
    return '<h2 class="rule rule--muted">Páginas da criança</h2>' +
      '<div class="pags">' + pags.map(function (x) {
        return '<figure class="pag">' +
          (x.imagem
            ? '<img class="pag__img pag__img--real" src="' + esc(x.imagem) + '" alt="' + esc(x.titulo) + '" loading="lazy">'
            : '<div class="pag__img">Imagem da página</div>') +
          '<figcaption><span class="pag__c">' + esc(x.caderno) + '</span>' + esc(x.titulo) + '</figcaption></figure>';
      }).join('') + '</div>';
  }

  function upgradeBibLinks() {
    Array.prototype.forEach.call(main.querySelectorAll('a.bib[data-bib]'), function (a) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = a.className;
      b.setAttribute('data-bib', a.getAttribute('data-bib'));
      b.innerHTML = a.innerHTML;
      a.parentNode.replaceChild(b, a);
    });
  }

  /* ── Início da revisão ─────────────────────────────────── */
  function renderStartZone() {
    var z = document.getElementById('startZone'); if (!z) return;
    if (!st.started) {
      z.innerHTML = '<div class="startbar">' +
        '<p>Leia cada seção e diga se pode manter, se vai adaptar ou se ficou uma dúvida.</p>' +
        '<button class="btn btn--sm" id="btnStart">Iniciar revisão</button></div>';
      document.getElementById('btnStart').addEventListener('click', iniciar);
    } else {
      z.innerHTML = (hadSaved && !st.finished)
        ? '<p class="resumed">Retomando sua revisão — as suas marcações e anotações ficaram guardadas neste aparelho.</p>' : '';
    }
  }

  function iniciar() {
    st.started = true; st.startedAt = Date.now(); save();
    renderStartZone(); renderBar(); tick();
    var first = document.querySelector('.passo');
    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ── Conclusão ─────────────────────────────────────────── */
  function renderFinishZone() {
    var z = document.getElementById('finishZone'); if (!z) return;
    if (st.finished) {
      z.innerHTML = '<div class="done">' +
        '<h2>Revisão concluída</h2>' +
        '<p>Tempo de revisão do plano: <strong>' + fmt(st.elapsedMs) + '</strong> · ' + TOTAL + ' seções revisadas.</p>' +
        '<div class="done__acts">' +
          '<button class="btn btn--sm" id="btnPdf">Salvar plano revisado</button>' +
          '<button class="btn btn--plain btn--sm" id="btnSend">' + (st.enviado ? 'Enviar de novo' : 'Enviar resultados') + '</button>' +
          '<button class="btn btn--plain btn--sm" id="btnReopen">Reabrir revisão</button>' +
        '</div><p class="hint" id="sendMsg">' + (st.enviado ? 'Já enviado para a planilha.' : '') + '</p></div>';
      document.getElementById('btnPdf').addEventListener('click', gerarPdf);
      document.getElementById('btnReopen').addEventListener('click', reabrir);
      document.getElementById('btnSend').addEventListener('click', enviar);
    } else {
      z.innerHTML = '<p class="alert" id="incompleto" hidden></p>';
    }
  }

  function concluir() {
    var pend = pendentes();
    if (pend.length) {
      var box = document.getElementById('incompleto');
      if (box) {
        box.hidden = false;
        box.textContent = pend.length === 1
          ? 'Falta 1 seção sem marcação: “' + pend[0].title + '”.'
          : 'Faltam ' + pend.length + ' seções sem marcação. A primeira é “' + pend[0].title + '”.';
      }
      var alvo = document.getElementById('blk-' + pend[0].id);
      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
        alvo.classList.add('is-target');
        setTimeout(function () { alvo.classList.remove('is-target'); }, 2200);
        var b = alvo.querySelector('.opt'); if (b) b.focus({ preventScroll: true });
      }
      return;
    }
    st.elapsedMs = elapsed(); st.startedAt = null; st.finished = true; save();
    renderFinishZone(); renderBar();
    document.querySelector('.done').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function reabrir() { st.finished = false; save(); renderFinishZone(); renderBar(); }

  function gerarPdf() {
    window.CRD_PDF.imprimir({
      projeto: P, sessao: sess, semana: semana,
      marks: st.marks, tempo: fmt(st.elapsedMs), data: hoje(), blocos: reviewables
    });
  }

  function enviar() {
    var msg = document.getElementById('sendMsg');
    var btn = document.getElementById('btnSend');
    if (!SHEET_ENDPOINT) {
      msg.textContent = 'O envio ainda não está ligado. Falta colar a URL da planilha em shared/review.js.';
      return;
    }
    btn.disabled = true;
    msg.textContent = 'Enviando…';

    /* A planilha responde com CORS liberado, então dá para ler a resposta de
       verdade. Sem isso o botão diria "enviado" mesmo quando falhasse. */
    fetch(SHEET_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        sessao: sess.code, titulo: C.nome(sess), assunto: sess.title, semana: sess.week,
        tempoSegundos: Math.round(st.elapsedMs / 1000), data: new Date().toISOString(),
        confirmadas: contar('confirmada'), adaptacoes: contar('adaptar'), duvidas: contar('duvida'),
        marcacoes: reviewables.map(function (b) {
          var m = st.marks[b.id] || {};
          return { secao: b.title, opcao: m.opt || '', nota: m.nota || '', pergunta: m.pergunta || '' };
        })
      })
    }).then(function (r) {
      return r.text().then(function (t) {
        if (r.ok && t.indexOf('erro') !== 0) {
          st.enviado = true; save();
          msg.textContent = 'Resultados enviados. Obrigada!';
          btn.textContent = 'Enviar de novo';
          btn.disabled = false;
        } else {
          throw new Error(t);
        }
      });
    }).catch(function () {
      msg.textContent = 'Não conseguimos enviar agora. As suas marcações continuam salvas neste aparelho — tente de novo mais tarde ou envie o PDF.';
      btn.disabled = false;
    });
  }

  /* ── Barra fixa ────────────────────────────────────────── */
  function renderBar() {
    var n = marcadas(), pct = TOTAL ? Math.round(n / TOTAL * 100) : 0;
    document.getElementById('bar').innerHTML =
      '<div class="bar__in">' +
        '<span class="bar__timer' + (st.started ? '' : ' is-off') + '" id="timer">' + fmt(elapsed()) + '</span>' +
        '<div class="bar__prog">' +
          '<p class="bar__txt" role="status">' + n + ' de ' + TOTAL + ' seções revisadas</p>' +
          '<div class="bar__track"><div class="bar__fill" style="width:' + pct + '%"></div></div>' +
        '</div>' +
        '<div class="bar__tally">' +
          '<span class="t t--c">' + contar('confirmada') + '</span>' +
          '<span class="t t--a">' + contar('adaptar') + '</span>' +
          '<span class="t t--d">' + contar('duvida') + '</span>' +
        '</div>' +
        (st.finished
          ? '<button class="btn btn--sm" id="btnPdf2">Salvar plano revisado</button>'
          : '<button class="btn btn--sm" id="btnDone"' + (st.started ? '' : ' disabled') + '>Concluir revisão</button>') +
      '</div>';
    var d = document.getElementById('btnDone'); if (d) d.addEventListener('click', concluir);
    var p2 = document.getElementById('btnPdf2'); if (p2) p2.addEventListener('click', gerarPdf);
  }

  function tick() {
    var t = document.getElementById('timer');
    if (t) { t.textContent = fmt(elapsed()); t.classList.toggle('is-off', !st.started); }
  }
  setInterval(tick, 1000);

  /* ── Interações ────────────────────────────────────────── */
  main.addEventListener('click', function (e) {
    var opt = e.target.closest('.opt'); if (opt) return escolher(opt);
    var bib = e.target.closest('.bib');
    if (bib && bib.hasAttribute('data-bib')) return abrirRecurso(bib);
  });

  function escolher(btn) {
    var id = btn.closest('.rev').getAttribute('data-blk');
    var novo = btn.getAttribute('data-opt');
    var m = st.marks[id] || {};

    var perderia = (m.opt === 'adaptar' && novo !== 'adaptar' && (m.nota || '').trim())
                || (m.opt === 'duvida'  && novo !== 'duvida'  && (m.pergunta || '').trim());
    if (perderia && !confirm('Você já escreveu algo nesta seção. Trocar a opção mantém o texto guardado, mas ele deixa de aparecer. Continuar?')) return;

    m.opt = (m.opt === novo) ? null : novo;
    st.marks[id] = m; save();

    var rev = btn.closest('.rev');
    rev.querySelectorAll('.opt').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-opt') === m.opt));
    });
    var blk = document.getElementById('blk-' + id);
    if (m.opt) blk.setAttribute('data-state', m.opt); else blk.removeAttribute('data-state');

    document.getElementById('f-nota-' + id).hidden = m.opt !== 'adaptar';
    document.getElementById('f-perg-' + id).hidden = m.opt !== 'duvida';
    if (m.opt === 'adaptar') document.getElementById('nota-' + id).focus();
    if (m.opt === 'duvida') document.getElementById('perg-' + id).focus();

    var alerta = document.getElementById('incompleto');
    if (alerta && !pendentes().length) alerta.hidden = true;
    renderBar();
  }

  main.addEventListener('input', function (e) {
    var ta = e.target.closest('textarea[data-blk]'); if (!ta) return;
    var id = ta.getAttribute('data-blk');
    st.marks[id] = st.marks[id] || {};
    st.marks[id][ta.getAttribute('data-field')] = ta.value;
    save();
  });

  /* ── Painel da Biblioteca ──────────────────────────────── */
  var lastFocus = null;
  function abrirRecurso(el) {
    var r = recurso(el.getAttribute('data-bib')); if (!r) return;
    var bloco = el.closest('.passo, .dica');
    var origem = bloco ? bloco.id : null;
    var tituloBloco = bloco ? (bloco.querySelector('.passo__h') || bloco.querySelector('.dica__t')).textContent.trim() : '';
    lastFocus = el;
    var cat = P.categoriasBiblioteca.filter(function (c) { return c.slug === r.categoria; })[0] || {};

    panel.innerHTML =
      '<div class="panel__top">' +
        '<div><p class="panel__from">' + esc(sess.code) + (tituloBloco ? ' · ' + esc(tituloBloco) : '') + '</p>' +
        '<p class="eyebrow" style="color:var(--teal);margin-top:4px">' + esc(cat.nome || '') + '</p></div>' +
        '<button class="panel__x" id="panelX"><span class="sr-only">Fechar</span>' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button>' +
      '</div>' +
      '<div class="panel__body">' +
        '<h2 id="panelTitle">' + esc(r.titulo) + '</h2>' +
        (r.descricao ? '<p>' + esc(r.descricao) + '</p>' : '') +
        (r.pronto && r.conteudo ? painelConteudo(r.conteudo) :
          '<p style="margin-top:18px"><span class="soon">' + esc(r.status || 'Em breve') + '</span></p>' +
          '<p style="margin-top:14px;color:var(--muted);font-size:14px">Esta entrada ainda não está pronta na Biblioteca.</p>') +
        '<p style="margin-top:22px"><a href="index.html#/biblioteca/recurso/' + esc(r.slug) + '" style="font-weight:600">Abrir na Biblioteca</a></p>' +
      '</div>' +
      '<div class="panel__foot"><button class="btn" id="panelBack">Voltar para a sessão</button></div>';

    panel.hidden = false; scrim.hidden = false;
    requestAnimationFrame(function () { panel.classList.add('is-open'); scrim.classList.add('is-open'); });
    document.getElementById('panelX').focus();

    function fechar() {
      panel.classList.remove('is-open'); scrim.classList.remove('is-open');
      setTimeout(function () { panel.hidden = true; scrim.hidden = true; }, 240);
      if (origem) {
        var alvo = document.getElementById(origem);
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (lastFocus) lastFocus.focus({ preventScroll: true });
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') fechar(); }
    document.getElementById('panelX').addEventListener('click', fechar);
    document.getElementById('panelBack').addEventListener('click', fechar);
    scrim.addEventListener('click', fechar, { once: true });
    document.addEventListener('keydown', onKey);
  }

  render();
  window.addEventListener('hashchange', function () { location.reload(); });
})();
