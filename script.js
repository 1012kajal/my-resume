// Typewriter Effect
const text = "Kajal Patil";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
window.onload = function () {
  typeWriter();
  scrollReveal();
  document.getElementById("year").innerText = new Date().getFullYear();
};

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Scroll Reveal Animation
function scrollReveal() {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => {
    observer.observe(sec);
  });
}
