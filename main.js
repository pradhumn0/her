/* Builds the page from content.js. You normally never need to edit this file. */
(() => {
const C = CONTENT, RM = matchMedia('(prefers-reduced-motion:reduce)').matches, app = document.getElementById('app');
const R = n => Math.random() * n;
const el = (t, c, x, p) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; if (p) p.append(e); return e; };
const sv = (inner, cls, vb = '0 0 24 24') => { const d = el('span', cls); d.innerHTML = `<svg viewBox="${vb}" aria-hidden="true">${inner}</svg>`; return d; };
const IC = ['<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.5-8 11-8 11z"/>',
  '<path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/>',
  '<circle cx="12" cy="5" r="4"/><circle cx="19" cy="12" r="4"/><circle cx="12" cy="19" r="4"/><circle cx="5" cy="12" r="4"/><circle cx="12" cy="12" r="3" fill="#ffd36e"/>',
  '<path d="M12 2c1 6 4 9 10 10-6 1-9 4-10 10-1-6-4-9-10-10 6-1 9-4 10-10z"/>'];
const BC = ['#ff9ebb', '#c9b3ff', '#ffd36e', '#9fd0ff', '#ffb78f'];
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); e.target.dispatchEvent(new Event('revealed')); } }), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
const rv = (e, d) => { e.classList.add('rv'); if (d) e.style.setProperty('--d', d + 'ms'); io.observe(e); return e; };
const paras = (txt, p, cls, base = 0) => String(txt).split('\n\n').forEach((t, i) => rv(el('p', cls, t, p), base + i * 80));
function spark(h) { if (RM) return; for (let i = 0; i < 6; i++) { const s = el('span', 'sp', i % 2 ? '✦' : '♥', h); s.style.cssText = `left:${R(100)}%;top:${R(60)}%;animation-delay:${i * 120}ms`; s.addEventListener('animationend', () => s.remove()); } }
function balloons(p, n) { for (let i = 0; i < n; i++) { const b = el('span', 'bln', null, p); b.style.cssText = `left:${4 + i * (88 / n)}%;--c:${BC[i % 5]};animation-duration:${10 + R(8)}s;animation-delay:-${R(14)}s;scale:${.7 + R(.6)}`; b.innerHTML = '<svg viewBox="0 0 40 80" aria-hidden="true"><ellipse cx="20" cy="24" rx="17" ry="22" fill="currentColor"/><path d="M20 46l-4 6h8z" fill="currentColor"/><path d="M20 52q-8 12 0 26" stroke="#b58" fill="none"/></svg>'; } }

/* confetti (canvas, runs only while particles exist) */
const cv = document.getElementById('cf'), cx = cv.getContext('2d'); let ps = [], run = false, W, H;
const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; }; size(); addEventListener('resize', size);
const COL = ['#ff8fb1', '#ffc2d4', '#d9c9ff', '#ffd36e', '#b9dcff', '#ffb78f'];
function burst(n = 80, hearts) { if (RM) return; for (let i = 0; i < n; i++) ps.push({ x: W / 2 + R(160) - 80, y: H * .6, vx: R(16) - 8, vy: -R(16) - 6, r: R(5) + 4, a: R(6), va: R(.3) - .15, c: COL[i % 6], h: hearts }); if (!run) { run = true; requestAnimationFrame(tick); } }
function tick() { cx.clearRect(0, 0, W, H); ps = ps.filter(p => p.y < H + 30); ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.fillStyle = p.c; if (p.h) { cx.font = p.r * 3 + 'px serif'; cx.fillText('♥', 0, 0); } else cx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); cx.restore(); }); if (ps.length) requestAnimationFrame(tick); else { run = false; cx.clearRect(0, 0, W, H); } }

/* rising hearts + hero */
const fx = document.getElementById('fx');
for (let i = 0; i < (innerWidth < 700 ? 9 : 16); i++) { const s = el('span', null, i % 3 ? '♥' : '✦', fx); s.style.cssText = `left:${R(100)}%;font-size:${12 + R(16)}px;animation-duration:${14 + R(14)}s;animation-delay:-${R(24)}s`; }
document.title = `${C.greeting}, ${C.name}`;
const $ = i => document.getElementById(i), ob = $('open'); $('hello').textContent = C.greeting; $('hname').textContent = C.name; $('tag').textContent = C.tagline; ob.textContent = C.openButton;
balloons($('hbal'), 6);
ob.onclick = () => { burst(60); document.getElementById('message').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); };

/* section factory */
const secs = []; let n = 0;
function sec(id, t, sub, night) {
  const s = el('section', 'sec' + (night ? ' night' : ''), null, app); s.id = id;
  for (let i = 0; i < 2; i++) { const d = sv(IC[(n + i * 2) % 4], 'deco'); d.style.cssText = `${i ? 'right' : 'left'}:${2 + R(8)}%;top:${8 + R(75)}%;--k:${(i ? -.05 : .04) - R(.03)};--c:${BC[(n + i) % 5]}`; s.append(d); }
  n++; const w = el('div', 'wrap', null, s);
  if (t) { const h = rv(el('h2', null, t, w)); h.addEventListener('revealed', () => spark(h)); }
  if (sub && !/^\[OPTIONAL/.test(sub)) rv(el('p', 'sub', sub, w)); secs.push({ s, night }); return w;
}

/* 2 message */
let w = sec('message', C.message.title);
let p = el('div', 'paper msg', null, w); C.message.paragraphs.forEach((t, i) => rv(el('p', null, t, p), i * 100));
/* 3 special */
w = sec('special', C.special.title, C.special.sub); p = el('div', 'grid', null, w);
C.special.cards.forEach(([t, x], i) => { const c = rv(el('article', 'card', null, p), (i % 3) * 90); c.append(sv(IC[i % 4], 'ic')); el('h3', null, t, c); el('p', null, x, c); });
/* 4 story */
w = sec('story', C.story.title, C.story.sub); p = el('div', 'tl', null, w);
C.story.items.forEach((s, i) => { const it = rv(el('article', 'tli ' + (i % 2 ? 'r' : 'l'), null, p)); el('span', 'dot', null, it); const b = el('div', 'tlb', null, it); b.append(sv(IC[i % 4], 'tic')); el('small', null, s.date, b); el('h3', null, s.title, b); paras(s.text, b); if (s.note) el('p', 'hand', s.note, b); });
/* 5 little things */
w = sec('little', C.little.title, C.little.sub); p = el('div', 'little', null, w);
C.little.items.forEach(([s, f], i) => { const b = rv(el('button', 'lcard s' + (i % 4), null, p), (i % 3) * 90); b.type = 'button'; b.setAttribute('aria-expanded', 'false'); el('span', 'ls', s, b); el('i', null, 'tap to open', b); el('span', 'lf', f, b); b.onclick = () => b.setAttribute('aria-expanded', b.classList.toggle('open')); });
/* 6 open when */
w = sec('openwhen', C.openWhen.title, C.openWhen.sub); p = el('div', 'envs', null, w);
C.openWhen.items.forEach(([t, m], i) => { const a = rv(el('article', 'env', null, p), (i % 2) * 100); const b = el('button', 'ebtn', null, a); b.type = 'button'; b.setAttribute('aria-expanded', 'false'); el('span', 'flap', null, b); el('span', 'et', t, b); const pad = el('div', 'pad', null, el('div', null, null, el('div', 'lt', null, a))); String(m).split('\n\n').forEach(x => el('p', null, x, pad)); b.onclick = () => { const o = a.classList.toggle('open'); b.setAttribute('aria-expanded', o); if (o) burst(18, true); }; });
/* 7 notes */
w = sec('notes', C.notes.title, C.notes.sub); p = el('div', 'notes', null, w);
C.notes.items.forEach((t, i) => rv(el('div', 'note c' + (i % 4), t, p), (i % 3) * 80));
/* 8 wishes */
w = sec('wishes', C.wishes.title, C.wishes.sub, true); C.wishes.paragraphs.forEach((t, i) => rv(el('p', 'wish', t, w), i * 80));
for (let i = 0; i < 22; i++) { const s = el('span', 'star', null, w.parentNode); s.style.cssText = `left:${R(100)}%;top:${R(100)}%;animation-delay:-${R(3)}s`; }
/* 9 cake */
const cake = () => `<svg class="cake" viewBox="0 0 300 300" role="img" aria-label="A three-layer birthday cake with three candles"><ellipse cx="150" cy="282" rx="130" ry="13" fill="#ecd0dc"/><rect x="30" y="212" width="240" height="68" rx="14" fill="#ffc2d4"/><rect x="55" y="152" width="190" height="64" rx="14" fill="#fff0c9"/><rect x="80" y="98" width="140" height="58" rx="14" fill="#d9c9ff"/><path d="M30 222q20 18 40 0t40 0 40 0 40 0 40 0 40 0v-12H30z" fill="#fff"/><path d="M55 162q19 16 38 0t38 0 38 0 38 0 38 0v-10H55z" fill="#fff"/><path d="M80 108q14 14 28 0t28 0 28 0 28 0 28 0v-8H80z" fill="#fff"/><g fill="#ff8fb1"><circle cx="60" cy="250" r="6"/><circle cx="110" cy="256" r="6"/><circle cx="165" cy="252" r="6"/><circle cx="220" cy="256" r="6"/></g><g fill="#f3a53a"><circle cx="90" cy="194" r="5"/><circle cx="150" cy="198" r="5"/><circle cx="210" cy="194" r="5"/></g>${[120, 150, 180].map((x, i) => `<rect x="${x - 4}" y="66" width="8" height="34" rx="2" fill="${['#ff9ebb', '#9fd0ff', '#ffd36e'][i]}"/><g transform="translate(${x} 58)"><g class="fl"><ellipse rx="6" ry="11" fill="#ffb703"/><ellipse rx="3" ry="6" cy="3" fill="#fff3b0"/></g></g>`).join('')}</svg>`;
w = sec('cake', C.cake.title, C.cake.sub); p = el('div', 'cwrap', null, w); rv(p); p.insertAdjacentHTML('afterbegin', cake());
const st = el('p', 'status', '', p); st.setAttribute('aria-live', 'polite');
const bw = el('button', 'btn', C.cake.wishButton, p), bb = el('button', 'btn', C.cake.blowButton, p), br = el('button', 'btn', C.cake.relightButton, p);
[bw, bb, br].forEach(b => b.type = 'button'); br.hidden = true;
bw.onclick = () => { st.textContent = C.cake.wishText; burst(14, true); };
bb.onclick = () => { p.classList.add('out'); st.textContent = C.cake.doneText; burst(130); bb.hidden = true; bw.hidden = true; br.hidden = false; };
br.onclick = () => { p.classList.remove('out'); st.textContent = C.cake.wishText; bb.hidden = false; bw.hidden = false; br.hidden = true; };
/* 10 letter */
w = sec('letter', C.letter.title, C.letter.sub);
const lb = el('button', 'btn lbtn', C.letter.openButton, w); lb.type = 'button'; lb.setAttribute('aria-expanded', 'false');
const box = el('div', 'lt', null, w); const L = el('div', 'paper long', null, el('div', null, null, box));
el('p', 'hand', C.letter.opening, L); C.letter.paragraphs.forEach((t, i) => paras(t, L, null, (i % 3) * 60)); rv(el('p', null, C.letter.closing, L)); el('p', 'hand sign', C.letter.signature, L);
lb.onclick = () => { const o = box.classList.toggle('open'); lb.setAttribute('aria-expanded', o); lb.textContent = o ? C.letter.closeButton : C.letter.openButton; if (o) box.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'nearest' }); };
/* 11 surprises */
w = sec('surprises', C.surprises.title, C.surprises.sub); p = el('div', 'grid', null, w);
C.surprises.items.forEach((s, i) => {
  const c = rv(el('div', 'card sur ' + s.type, null, p), (i % 3) * 90);
  if (s.type === 'gift') c.insertAdjacentHTML('afterbegin', '<div class="gift" aria-hidden="true"><i class="gb"></i><i class="gl"></i></div>'); else c.prepend(sv(IC[[0, 0, 0, 1, 3, 2][i % 6]], 'ic'));
  const b = el('button', 'btn sm', s.button, c); b.type = 'button'; const nt = s.note ? el('p', 'sn', s.note, c) : null; if (nt) nt.hidden = true;
  b.onclick = () => { if (s.type === 'shower') burst(110, true); else if (nt) { nt.hidden = !nt.hidden; c.classList.toggle('open', !nt.hidden); if (!nt.hidden) burst(20, true); } };
});
/* 12 finale */
w = sec('finale', C.finale.title); w.parentNode.classList.add('finale'); balloons(el('div', 'fb', null, w.parentNode), 7);
const fh = w.querySelector('h2'); fh.after(el('p', 'nick', C.nickname));
const fc = el('div', null, null, w); fc.insertAdjacentHTML('afterbegin', cake());
C.finale.paragraphs.forEach(t => rv(el('p', 'fin', t, w))); rv(el('p', 'hand', C.finale.signoff, w));
const rp = el('button', 'btn', C.finale.replayButton, w); rp.type = 'button'; rp.onclick = () => { burst(160); setTimeout(() => burst(100, true), 500); };
fh.addEventListener('revealed', () => burst(140));

/* backgrounds: each section fades from the previous colour into the next */
const P = ['#fff1f5', '#f1eaff', '#fff3e8', '#eaf4ff', '#ffeaf1', '#f6efff'];
secs.forEach((x, i) => { const a = P[i % 6], b = P[(i + 1) % 6]; x.s.style.background = x.night ? `linear-gradient(${a},#3a2d63 22%,#3a2d63 78%,${b})` : `linear-gradient(${a},${b})`; });
})();
