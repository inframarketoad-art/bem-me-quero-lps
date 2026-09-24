// ============================================================
//  CONFIGURAÇÃO — o único lugar que precisa ser editado
// ============================================================

// WhatsApp do studio: DDI + DDD + número, só dígitos. Ex.: '5511987654321'
const WHATSAPP = '55SEUNUMERO';

// Link de inscrição/pagamento dos cursos (Kiwify, Hotmart, Sympla...).
// Deixe vazio ('') para que os botões de inscrição abram o WhatsApp.
const INSCRICAO_URL = '';

// ============================================================

const waLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Todo elemento com data-wa="mensagem" vira um link de WhatsApp com a mensagem pronta.
document.querySelectorAll('[data-wa]').forEach((el) => {
  el.href = waLink(el.dataset.wa);
  el.target = '_blank';
  el.rel = 'noopener';
});

// Botões de inscrição: vão pro checkout se houver, senão pro WhatsApp.
document.querySelectorAll('[data-inscricao]').forEach((el) => {
  el.href = INSCRICAO_URL || waLink(el.dataset.inscricao);
  el.target = '_blank';
  el.rel = 'noopener';
});

// Nav: fundo sólido depois do topo + menu mobile
const nav = document.querySelector('.nav');
const mbar = document.querySelector('.mbar');
const onScroll = () => {
  const y = window.scrollY;
  nav?.classList.toggle('is-solid', y > 40);
  mbar?.classList.toggle('is-on', y > window.innerHeight * 0.7);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  })
);

// Revelar seções ao rolar
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Abas da oferta (página de cursos)
const tabs = document.querySelectorAll('.offer-tabs [role="tab"]');
tabs.forEach((tab) =>
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', on);
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  })
);
