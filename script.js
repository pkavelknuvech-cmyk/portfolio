const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold: 0.08});

document.querySelectorAll(".project, .service, .about-copy").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
