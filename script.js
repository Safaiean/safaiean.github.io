document.getElementById('year').textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.case, .capability, .section-head, .about-grid').forEach((el) => {
  el.classList.add('reveal');
  reveal.observe(el);
});

const style = document.createElement('style');
style.textContent = `.reveal{opacity:0;transform:translateY(18px);transition:opacity .65s ease,transform .65s ease}.reveal.visible{opacity:1;transform:none}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.reveal{opacity:1;transform:none;transition:none}}`;
document.head.appendChild(style);