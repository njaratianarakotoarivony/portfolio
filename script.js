// Form feedback
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Message envoyé avec succès !";
  this.reset();
});

// Animation au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
