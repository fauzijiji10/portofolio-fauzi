// script.js - animasi ringan dan interaksi
document.addEventListener('DOMContentLoaded', function(){
  // smooth-scrolling button
  document.getElementById('btn-contact').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  });

  // reveal on scroll (Intersection Observer)
  const panels = document.querySelectorAll('.panel');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('show');
        o.unobserve(e.target);
      }
    });
  }, {threshold: 0.18});
  panels.forEach(p => {
    p.classList.add('hidden');
    obs.observe(p);
  });

  // tiny typing accent in the header (non-blocking)
  const accent = document.querySelector('.accent');
  if(accent){
    const text = accent.textContent;
    accent.textContent = '';
    let i = 0;
    const typer = setInterval(()=> {
      accent.textContent += text.charAt(i);
      i++;
      if(i>=text.length) clearInterval(typer);
    }, 45);
  }
});
