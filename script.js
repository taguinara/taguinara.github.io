/* ===== ANIMAÇÃO AO ROLAR ===== */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

/* ===== IDIOMA ===== */
let currentLang = "pt";

function toggleLanguage() {
  currentLang = currentLang === "pt" ? "en" : "pt";

  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

/* ===== DARK MODE (CORRIGIDO) ===== */
const darkBtn = document.getElementById("darkBtn");

function updateDarkButton() {
  if (!darkBtn) return;

  darkBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  updateDarkButton();
}

/* ===== SINCRONIZA AO CARREGAR ===== */
window.addEventListener("DOMContentLoaded", updateDarkButton);

