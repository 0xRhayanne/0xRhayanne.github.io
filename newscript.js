
document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0);

  var options = {
    strings: [
      "Hi, I'm Rhayanne, a nice person.",
      "Obrigada pela visita!",
      "Agora pode fechar a aba antes que eu quebre algo.",
      "404: Motivation not found.",
      "Debugando a vida desde sempre.",
      "I taught 'students', and survived to tell the tale.",
      "Full stack em resolver perrengue.",
      "My code works, I have no idea why, but it works.",
      "try: viver; except: surtar.",
      "I proofread texts until commas started haunting my dreams.",
      "Tava bom, meio ruim, mas piorou...",
      "Real developers count from zero.",
      "Erro? Nope, comportamento inesperado.",
      "Translating: turning chaos into slightly different chaos."

    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    cursorChar: ""
  };

  var typed = new Typed("#typed-output", options);

// language bar

  const languageLevels = {
    portuguese: '500px',
    english: '460px',
    spanish: '310px',
    japanese: '150px'
  };

  setTimeout(function () {
    for (const language in languageLevels) {
      const bar = document.getElementById(language);
      bar.style.width = languageLevels[language];
    }
  }, 500);

  const donut = document.querySelector('.donut');
  const colors = ['#00CED1', '#9370DB', '#B22222', '#8FBC8F', '#FFDAB9'];
  let currentColorIndex = 0;
  let progress = 0;
  const holdTime = 3000;
  let isFilling = false;

  function startFilling() {
    setTimeout(() => {
      isFilling = true;
    }, 3000);
  }

  function fillDonut() {
    if (isFilling) {
      progress += 1;
      if (progress >= 100) {
        setTimeout(() => {
          currentColorIndex = (currentColorIndex + 1) % colors.length;
          progress = 0;
        }, holdTime);
      }
    }

    donut.style.background = `
    conic-gradient(
      ${colors[currentColorIndex]} 0% ${progress}%,
      transparent ${progress}% 100%
    )
    `;
  }

  setInterval(fillDonut, 100);
  startFilling();
});

// === Button Actions ===

// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
let darkMode = false;

themeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  darkMode = !darkMode;

  // Toggle body dark class
   document.body.classList.toggle('dark-mode');
  // Change Void Pulse color
  const specular = document.getElementById('void-specular');
  if (document.body.classList.contains('dark-mode')) {
    specular.setAttribute('lighting-color', '#000080'); // dark mode color
  } else {
    specular.setAttribute('lighting-color', '#FFFFFF'); // light mode color
  }

  // Body background and text
  document.body.style.backgroundColor = darkMode ? '#111' : '#f7f7f7';
  document.body.style.color = darkMode ? '#f7f7f7' : '#333';

  // Keep carousel card titles black
document.querySelectorAll('#recent-hobbies .carousel-card h3').forEach(h3 => {
  h3.style.color = '#000'; // black always
});

  // Update Typed.js text color
  const typedOutput = document.getElementById('typed-output');
  typedOutput.style.color = darkMode ? '#ffffff' : '#000000';

  // Update Languages section
  const languageSection = document.getElementById('languages');
  languageSection.style.color = darkMode ? '#ffffff' : '#333';

  // Update headings inside Languages
  languageSection.querySelectorAll('h2').forEach(h2 => {
    h2.style.color = darkMode ? '#ffffff' : '#333';
  });

  // Update language labels
  languageSection.querySelectorAll('span').forEach(span => {
    span.style.color = darkMode ? '#ffffff' : '#333';
  });

  // Update OS names for dark mode
document.querySelectorAll('.os-names span').forEach(span => {
  span.style.color = darkMode ? '#ffffff' : '#333';
});
});

// === Translate Page Text (except Typed.js) ===
const translateBtn = document.getElementById('translate-btn');
let translated = false;

translateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  translated = !translated;

  // Headings
  document.querySelectorAll('h2').forEach(h2 => {
    if (translated) {
      if (h2.textContent.includes("Languages")) h2.textContent = "Idiomas";
      else if (h2.textContent.includes("OS Experience")) h2.textContent = "Experiência com SO's";
      else if (h2.textContent.includes("Recent Hobbies")) h2.textContent = "Passatempos Recentes";
    } else {
      if (h2.textContent.includes("Idiomas")) h2.textContent = "Languages";
      else if (h2.textContent.includes("Experiência")) h2.textContent = "OS Experience";
      else if (h2.textContent.includes("Hobbies")) h2.textContent = "Recent Hobbies";
    }
  });

  // Cards (Facts)
  const cardTexts = [
    ["Once taught humans from all over the world. Former teacher, still grading life choices. Patience level: Legendary.",
    "Já ensinei humanos do mundo todo. Ex-professora, ainda avaliando as escolhas da vida. Nível de paciência: Lendário."],
    ["Used to turn words into other words. I left translation, but the voices in different languages stayed.",
    "Costumava transformar palavras em outras palavras. Saí da tradução, mas as vozes em diferentes idiomas ficaram."],
    ["Learning everything except how to rest. Always upgrading, brain under continuous construction.",
    "Aprendo de tudo, menos a descansar. Sempre atualizando, cérebro em obra contínua."],
    ["Just one more chapter (said three hours ago). Still waiting for life to have a plot twist this good.",
    "Só mais um capítulo (disse eu há três horas). Ainda esperando a vida ter um enredo tão bom quanto esses."],
    ["Strategic thinker, fast reflexes, and a top-tier respawner. I’m not ignoring you, I’m just in a fight...",
    "Pensadora estratégica, reflexos rápidos e top em 'renascer'. Não estou te ignorando, só estou em uma luta..."],
    ["Doesn’t matter if it’s a hamster or a hydra, I’m already trying to pet it. Species optional, snuggles required.",
    "Não importa se é um hamster ou uma hidra, já estou tentando fazer carinho. Espécie é opcional, carinho é obrigatório."],
    ["Will travel for snacks. Adventurous palate, zero regrets. Calories? I prefer to call them ‘flavor points.’",
    "Viajo por comida. Paladar aventureiro, zero arrependimentos. Calorias? Prefiro chamar de ‘pontos de sabor’."],
    ["Finishes series faster than Netflix recommends them. I have a PhD in ‘Just one more episode.",
    "Termino séries mais rápido do que a Netflix recomenda. Tenho PhD em ‘só mais um episódio’."]
  ];

  document.querySelectorAll('#cards .card p').forEach((p, i) => {
    p.textContent = translated ? cardTexts[i][1] : cardTexts[i][0];
  });

  // Card Titles (Facts)
const cardTitles = [
  ["Teacher 🗺️", "Professora 🗺️"],
  ["Translator 🔠", "Tradutora 🔠"],
  ["Learner ✏️", "Autoditadata ✏️"],
  ["Reader 📖", "Leitora 📖"],
  ["Gamer 🕹️", "Jogadora 🕹️"],
  ["Animal 🦖Lover", "Apaixonada por animais 🦖"],
  ["Foodie 🫔", "Comilona 🫔"],
  ["Binger 📺", "Maratonista 📺"]
];

document.querySelectorAll('#cards .card h3').forEach((h3, i) => {
  h3.textContent = translated ? cardTitles[i][1] : cardTitles[i][0];
});


  // === Carousel Cards (Hobbies) ===
  const hobbyTitles = [
    ["Book ✅", "Livro ✅"],
    ["Game ✅", "Jogo ✅"],
    ["Serie ✅", "Série ✅"],
    ["Book ✅", "Livro ✅"],
    ["Game ✅", "Jogo ✅"],
    ["Serie ✅", "Série ✅"],
    ["Book ⏳", "Livro ⏳"],
    ["Serie ⏳", "Série ⏳"],
    ["Game ⏳", "Jogo ⏳"]
  ];

  const hobbyTexts = [

    ["Funny, clever, and full of feathered chaos, loved it! Nature’s comedy, one insult at a time.",
    "Engraçado, inteligente e cheio de caos com penas, adorei! A natureza em sua forma mais cômica, com um insulto de cada vez."],
    ["A timeless classic that never stops inspiring awe. Feels fresh, plays legendary.",
    "Um clássico que nunca perde o encanto. Continua atual e absolutamente lendário."],
    ["A masterpiece! Great chemistry, gorgeous visuals, and a storyline that keeps you hooked from the first episode.",
    "Uma obra-prima! Elenco com química incrível, visual lindo e uma trama viciante do começo ao fim."],
    ["A wonderful continuation of an extraordinary true story. Equal parts humor and heart, it reminds us that even the smallest companions can make the biggest difference.",
    "Uma continuação encantadora de uma história incrível. Com doses perfeitas de humor e sentimento, mostra que até os menores companheiros podem transformar vidas."],
    ["A chilling blend of sci-fi horror and psychological terror, Dead Space meets Silent Hill.",
     "Uma mistura assustadora entre ficção científica e pesadelo psicológico, como se Dead Space e Silent Hill se encontrassem."],
    ["A charming mix of humor, family drama, and online adventure. A proof that even MMOs can bring people closer.",
    "Uma mistura encantadora de humor, drama familiar e aventura online. Prova de que até MMOs aproximam as pessoas."],
    ["Gripping and deeply moving, a heartbreaking, powerful story of love and survival in unimaginable circumstances.",
    "Comovente e poderoso, uma história de amor e sobrevivência em circunstâncias inimagináveis."],
    ["Grumpy, crossbows, motorcycles, and the occasional soft side, he makes surviving the zombie apocalypse look easy.",
    "Mal-humorado, com sua besta, motocicleta e um lado sensível de vez em quando, ele faz o apocalipse zumbi parecer fácil de sobreviver."],
    ["A haunting Belle Époque RPG where every scene feels like art. Every shadow hides a story, it’s brilliant and eerie.",
    "Um RPG cheio de estilo e mistério ambientado na Bela Época, onde cada cena parece uma obra de arte. Cada sombra esconde uma história, é brilhante e inquietante."]
  ];

  // === Apply translation to each carousel card ===
  document.querySelectorAll('#recent-hobbies .carousel-card').forEach((card, i) => {
    // Change title (h3)
    const title = card.querySelector('h3');
    if (title) {
      title.textContent = translated ? hobbyTitles[i % hobbyTitles.length][1] : hobbyTitles[i % hobbyTitles.length][0];
    }

    // Change <p> elements
      const pTags = card.querySelectorAll('p');

      // 2nd <p> = status line
      if (pTags.length > 1) {
        const statusP = pTags[1];
        const isFinished = hobbyTitles[i % hobbyTitles.length][0].includes("✅");
        statusP.textContent = translated
          ? (isFinished ? "Finalizado" : "Em progresso")
          : (isFinished ? "Finished" : "In progress");
      }

      // Last <p> = review text
      const lastP = pTags[pTags.length - 1];
      if (lastP) {
        lastP.textContent = translated
          ? hobbyTexts[i % hobbyTexts.length][1]
          : hobbyTexts[i % hobbyTexts.length][0];
      }
  });



  // Language section text
  const languageLabels = {
    "Brazilian Portuguese (Native)": "Português Brasileiro (Nativo)",
    "English (Advanced)": "Inglês (Avançado)",
    "Spanish (Intermediate)": "Espanhol (Intermediário)",
    "Japanese (Beginner)": "Japonês (Iniciante)"
  };

  document.querySelectorAll('#languages .language span').forEach(span => {
    if (translated) {
      span.textContent = languageLabels[span.textContent] || span.textContent;
    } else {
      const entry = Object.entries(languageLabels).find(([en, pt]) => pt === span.textContent);
      if (entry) span.textContent = entry[0];
    }
  });



  // OS labels
  const osLabels = {
    "Windows": "Windows",
    "macOS": "macOS",
    "Linux": "Linux",
    "Android": "Android",
    "iOS": "iOS"
  };

  document.querySelectorAll('.os-names span').forEach(span => {
    const label = span.childNodes[0];
    if (label.nodeType === 3) {
      const text = label.textContent.trim();
      if (translated) {
        label.textContent = osLabels[text] || text;
      } else {
        label.textContent = text; // Keep as is
      }
    }
  });
  // === Buttons ===
  // === Buttons ===
const themeToggleBtn = document.getElementById('theme-toggle');
const translateButton = document.getElementById('translate-btn');
const homeButton = document.getElementById('home-btn');

// Function to change only the text node (keeps spans intact)
function setButtonText(button, text) {
  // Remove any extra text nodes (cleanup)
  button.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = ''; // clear previous
    }
  });
  // Append new text node (inside the button)
  button.appendChild(document.createTextNode(text));
}

if (translated) {
  setButtonText(themeToggleBtn, "Claro/Escuro");
  setButtonText(translateButton, "Traduzir");
  setButtonText(homeButton, "Página Principal");
} else {
  setButtonText(themeToggleBtn, "Light/Dark");
  setButtonText(translateButton, "Translate");
  setButtonText(homeButton, "Main Page");
}



});




  // === Stick Figure Runner Animation ===
document.addEventListener('DOMContentLoaded', () => {
  const svgNS = "http://www.w3.org/2000/svg";
  const canvas = document.getElementById("stick-figure-canvas");
  if (!canvas) return; // make sure the element exists

  const groundY = 150;
  let xPos = 50;
  let t = 0;

  const bodyLength = 40;
  const upperLeg = 20;
  const lowerLeg = 20;
  const upperArm = 15;
  const lowerArm = 15;

  let isPaused = false;
  let hasPausedAtMiddle = false;
  const pauseDuration = 2000;
  const screenMiddle = window.innerWidth / 2;

  // Create stick figure elements
  const head = document.createElementNS(svgNS, "circle"); head.setAttribute("r",8); canvas.appendChild(head);
  const body = document.createElementNS(svgNS, "line"); canvas.appendChild(body);

  const parts = ["leftUpperArm","leftLowerArm","rightUpperArm","rightLowerArm",
                 "leftUpperLeg","leftLowerLeg","rightUpperLeg","rightLowerLeg"];
  const lines = {};
  parts.forEach(p => {
    lines[p] = document.createElementNS(svgNS, "line");
    canvas.appendChild(lines[p]);
  });

  const leftEye = document.createElementNS(svgNS,"circle");
  leftEye.setAttribute("r",2); leftEye.classList.add("eye"); leftEye.style.display="none"; canvas.appendChild(leftEye);
  const rightEye = document.createElementNS(svgNS,"circle");
  rightEye.setAttribute("r",2); rightEye.classList.add("eye"); rightEye.style.display="none"; canvas.appendChild(rightEye);

  function updateStickFigure(pos, tVal) {
    const bodyY = groundY - bodyLength + Math.sin(tVal)*4;
    head.setAttribute("cx", pos); head.setAttribute("cy", bodyY - bodyLength);
    body.setAttribute("x1", pos); body.setAttribute("y1", bodyY - bodyLength);
    body.setAttribute("x2", pos); body.setAttribute("y2", bodyY);

    const armSwing = Math.sin(tVal)*40;
    const legSwing = Math.sin(tVal)*30;

    const leftElbowX = pos - upperArm*Math.cos(armSwing*Math.PI/180);
    const leftElbowY = bodyY - bodyLength/2 + upperArm*Math.sin(armSwing*Math.PI/180);
    lines.leftUpperArm.setAttribute("x1",pos);
    lines.leftUpperArm.setAttribute("y1",bodyY-bodyLength/2);
    lines.leftUpperArm.setAttribute("x2",leftElbowX);
    lines.leftUpperArm.setAttribute("y2",leftElbowY);

    const leftHandX = leftElbowX - lowerArm*Math.cos(armSwing*Math.PI/180);
    const leftHandY = leftElbowY + lowerArm*Math.sin(armSwing*Math.PI/180);
    lines.leftLowerArm.setAttribute("x1",leftElbowX);
    lines.leftLowerArm.setAttribute("y1",leftElbowY);
    lines.leftLowerArm.setAttribute("x2",leftHandX);
    lines.leftLowerArm.setAttribute("y2",leftHandY);

    const rightElbowX = pos + upperArm*Math.cos(armSwing*Math.PI/180);
    const rightElbowY = bodyY - bodyLength/2 - upperArm*Math.sin(armSwing*Math.PI/180);
    lines.rightUpperArm.setAttribute("x1",pos);
    lines.rightUpperArm.setAttribute("y1",bodyY-bodyLength/2);
    lines.rightUpperArm.setAttribute("x2",rightElbowX);
    lines.rightUpperArm.setAttribute("y2",rightElbowY);

    const rightHandX = rightElbowX + lowerArm*Math.cos(armSwing*Math.PI/180);
    const rightHandY = rightElbowY - lowerArm*Math.sin(armSwing*Math.PI/180);
    lines.rightLowerArm.setAttribute("x1",rightElbowX);
    lines.rightLowerArm.setAttribute("y1",rightElbowY);
    lines.rightLowerArm.setAttribute("x2",rightHandX);
    lines.rightLowerArm.setAttribute("y2",rightHandY);

    const leftKneeX = pos - upperLeg*Math.sin(legSwing*Math.PI/180);
    const leftKneeY = bodyY + upperLeg*Math.cos(legSwing*Math.PI/180);
    lines.leftUpperLeg.setAttribute("x1",pos);
    lines.leftUpperLeg.setAttribute("y1",bodyY);
    lines.leftUpperLeg.setAttribute("x2",leftKneeX);
    lines.leftUpperLeg.setAttribute("y2",leftKneeY);

    const leftFootX = leftKneeX - lowerLeg*Math.sin(legSwing*Math.PI/180);
    const leftFootY = leftKneeY + lowerLeg*Math.cos(legSwing*Math.PI/180);
    lines.leftLowerLeg.setAttribute("x1",leftKneeX);
    lines.leftLowerLeg.setAttribute("y1",leftKneeY);
    lines.leftLowerLeg.setAttribute("x2",leftFootX);
    lines.leftLowerLeg.setAttribute("y2",leftFootY);

    const rightKneeX = pos + upperLeg*Math.sin(legSwing*Math.PI/180);
    const rightKneeY = bodyY + upperLeg*Math.cos(legSwing*Math.PI/180);
    lines.rightUpperLeg.setAttribute("x1",pos);
    lines.rightUpperLeg.setAttribute("y1",bodyY);
    lines.rightUpperLeg.setAttribute("x2",rightKneeX);
    lines.rightUpperLeg.setAttribute("y2",rightKneeY);

    const rightFootX = rightKneeX + lowerLeg*Math.sin(legSwing*Math.PI/180);
    const rightFootY = rightKneeY + lowerLeg*Math.cos(legSwing*Math.PI/180);
    lines.rightLowerLeg.setAttribute("x1",rightKneeX);
    lines.rightLowerLeg.setAttribute("y1",rightKneeY);
    lines.rightLowerLeg.setAttribute("x2",rightFootX);
    lines.rightLowerLeg.setAttribute("y2",rightFootY);

    if(isPaused){
      leftEye.setAttribute("cx", pos-3);
      leftEye.setAttribute("cy", bodyY-bodyLength-2);
      rightEye.setAttribute("cx", pos+3);
      rightEye.setAttribute("cy", bodyY-bodyLength-2);
    }
  }

  function update() {
    if(!isPaused && !hasPausedAtMiddle && Math.abs(xPos - screenMiddle) < 2){
      isPaused = true;
      hasPausedAtMiddle = true;
      leftEye.style.display="block";
      rightEye.style.display="block";
      setTimeout(()=>{
        isPaused=false;
        leftEye.style.display="none";
        rightEye.style.display="none";
      }, pauseDuration);
    }

    if(!isPaused){
      t += 0.1;
      xPos += 2;
      if(xPos > window.innerWidth + 50){
        xPos = -50;
        hasPausedAtMiddle=false;
      }
    }

    updateStickFigure(xPos, t);
    requestAnimationFrame(update);
  }

  update();
});

/* 🌈 Foil background animation script */

  const background = document.getElementById("background");
  const symbols = ["✽","❉","🟉","❈","✣","🞯","♦","✢","✤","✦","❇","✶","✳","✻","❋","✷","✴"];
  const count = 50;
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    div.style.setProperty("--symbol", `"${symbols[Math.floor(Math.random() * symbols.length)]}"`);
    div.style.setProperty("--pos_x", Math.random() * 100 + "vw");
    div.style.setProperty("--hue", Math.random() * 360 + "deg");
    div.style.setProperty("--size", Math.random() * 6 + 2 + "vw");
    div.style.setProperty("--duration_move", 6 + Math.random() * 5 + "s");
    div.style.setProperty("--delay_move", Math.random() * -10 + "s");
    span.style.setProperty("--duration_rotate", 1 + Math.random() * 2 + "s");
    div.appendChild(span);
    background.appendChild(div);
  }
