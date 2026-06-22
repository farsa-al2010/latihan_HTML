document.getElementById("year").textContent = new Date().getFullYear();

const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

try {
  const savedTheme = localStorage.getItem("farsa-theme");
  if (savedTheme) htmlEl.classList.toggle("light", savedTheme === "light");
} catch (error) {}

function syncThemeButton() {
  const isLight = htmlEl.classList.contains("light");
  themeIcon.textContent = isLight ? "D" : "L";
  themeLabel.textContent = isLight ? "Dark" : "Light";
}

syncThemeButton();

toggleBtn.addEventListener("click", () => {
  const isLight = htmlEl.classList.toggle("light");
  syncThemeButton();
  try { localStorage.setItem("farsa-theme", isLight ? "light" : "dark"); } catch (error) {}
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

function closeMobile() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
}

const phrases = ["Frontend layout", "HTML & CSS", "Python logic", "JavaScript DOM"];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const typingEl = document.getElementById("typingText");

function typeWriter() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1400);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeWriter, deleting ? 45 : 75);
}

typeWriter();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = `${entry.target.dataset.width}%`;
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".prog-fill").forEach(element => barObserver.observe(element));

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});
