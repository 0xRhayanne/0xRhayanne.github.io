// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener("DOMContentLoaded", () => {

  // Always start from top
  window.scrollTo(0, 0);

  let userScrolled = false;

  window.addEventListener("scroll", () => {
    userScrolled = true;
  });

  // === Fun Loading Messages ===
  const messages = [
    "Deploying the fun...",
    "Loading creativity...",
    "Booting up ideas...",
    "Generating pixels...",
    "Brewing some coffee...",
    "Summoning GIFs...",
    "Adding final polish..."
  ];

  const loadingText = document.getElementById("loading-text");
  loadingText.textContent = messages[Math.floor(Math.random() * messages.length)];

  // Hide loading screen after short delay
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("fade-out");
  }, 2000); // ⏳ Adjust as needed


  // === Dark Mode & Language Toggles (Fixed) ===
  const darkBtn = document.getElementById("toggle-dark");
  const langBtn = document.getElementById("toggle-lang");

  let isDark = false;
  let currentLang = "en";

  // Update Dark Mode Button Text based on current state + language
  function updateDarkBtnText() {
    if (currentLang === "en") {
      darkBtn.textContent = isDark ? "☀️ Light Mode" : "🌑 Dark Mode";
    } else {
      darkBtn.textContent = isDark ? "☀️ Modo Claro" : "🌑 Modo Escuro";
    }
  }

  // --- DARK MODE ---
  darkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("dark-mode");
    isDark = document.body.classList.contains("dark-mode");
    updateDarkBtnText();
  });





  // --- LANGUAGE TOGGLE ---
    langBtn.addEventListener("click", (event) => {
      event.preventDefault();
      currentLang = currentLang === "en" ? "pt" : "en";

      // Update all translatable elements
      document.querySelectorAll("[data-en]").forEach(el => {
        const translation = el.getAttribute(`data-${currentLang}`);

        // If it's an input or textarea → update placeholder ONLY
        if (el.tagName === "TEXTAREA" || el.tagName === "INPUT") {
          if (translation) el.placeholder = translation;
          return;
        }

        // If it's normal text → update innerHTML
        // If it's not an input or textarea → update innerHTML (supports HTML)
      if (!(el instanceof HTMLInputElement) && !(el instanceof HTMLTextAreaElement)) {
          if (translation) el.innerHTML = translation;
      }
    });


  // ✅ Update form placeholders
  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
    const translation = el.getAttribute(`data-${currentLang}`);
    if (translation) el.placeholder = translation;
  });

  // Translate submit buttons
  document.querySelectorAll('input[type="submit"][data-en]').forEach(el => {
    el.value = el.getAttribute(`data-${currentLang}`);
  });

  // Update the language toggle button text
  langBtn.textContent = currentLang === "en" ? "🇧🇷 Português" : "🇺🇸 English";

  // Update dark mode button text for new language
  updateDarkBtnText();
});


  // Initialize correct label on page load
  updateDarkBtnText();

  // === Typed.js Typing Animation ===
  new Typed("#typed-intro", {
    strings: [
      "Welcome to my world.",
      "Criando coisas com código.",
      "Hope you like GIFs!",
      "Se a vida fosse código, os bugs seriam experiências.",
      "Bug? Feature!",
      "Depurar é filosofar com o computador.",
      "Comments explain, code convinces.",
      "Programo, logo debugo."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  });

  // === Fake Terminal Typing ===
  const terminalLines = [
    "> Initializing portfolio...",
    "> Loading creativity module...",
    "> Fetching coffee...",
    "> Running dev mode...",
    "> Welcome, human!"
  ];

  let terminalIndex = 0;
  const terminalOutput = document.getElementById("terminal-lines");

  function typeTerminalLine() {
    if (terminalIndex >= terminalLines.length) {
      revealIntroLines(); // Reveal name + tagline
      return;
    }

    const line = terminalLines[terminalIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      terminalOutput.textContent += line[charIndex];
      charIndex++;

      if (charIndex >= line.length) {
        clearInterval(interval);
        terminalOutput.textContent += '\n';
        terminalIndex++;
        setTimeout(typeTerminalLine, 600);
      }
    }, 50);
  }

  typeTerminalLine();

  function simulateSmoothScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    function animationStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animationStep);
      }
    }

    requestAnimationFrame(animationStep);
  }

  function revealIntroLines() {
    const nameEl = document.getElementById("intro-name");
    const taglineEl = document.getElementById("intro-tagline");

    setTimeout(() => {
      nameEl.classList.remove("hidden");
      nameEl.classList.add("visible");
    }, 800);

    setTimeout(() => {
      taglineEl.classList.remove("hidden");
      taglineEl.classList.add("visible");
    }, 1600);

    // Only auto-scroll if user hasn't manually scrolled
    setTimeout(() => {
      if (!userScrolled) {
        simulateSmoothScrollTo(document.querySelector("header").offsetTop, 1500);
      }
    }, 3000);
  }

  // === tsParticles Background ===
  tsParticles.load("particles-js", {
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#ff9f43"] },
      shape: { type: ["circle", "square", "triangle", "star"], options: { star: { sides: 5 } } },
      opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
      size: { value: 5, random: { enable: true, minimumValue: 3 }, anim: { enable: true, speed: 4, size_min: 2, sync: false } },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, outModes: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: { events: { onHover: { enable: false }, onClick: { enable: false }, resize: true } },
    detectRetina: true
  });

  // === FORM SUBMISSION WITH ALERT POP-UPS ===
  const contactForm = document.getElementById("contact_form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData
        });

        if (response.ok) {
          const message = currentLang === 'en'
            ? "✅ Your message has been sent!"
            : "✅ Sua mensagem foi enviada!";
          alert(message);
          contactForm.reset();
        } else {
          const errorMsg = currentLang === 'en'
            ? "❌ Error sending message"
            : "❌ Erro ao enviar mensagem";
          alert(errorMsg);
        }
      } catch (err) {
        const errorMsg = currentLang === 'en'
          ? "❌ Error sending message"
          : "❌ Erro ao enviar mensagem";
        alert(errorMsg);
      }
    });
  }

});
