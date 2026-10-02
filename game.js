"use strict";

/* =========================================================
   RÉUSSITE ACADÉMIE
   Gestion principale de l'application
   Créé par Belfort
========================================================= */

const APP_NAME = "RÉUSSITE ACADÉMIE";
const CREATOR = "Belfort martial";

const STORAGE_KEY = "reussiteAcademieProgress";
const PLAYER_KEY = "reussiteAcademiePlayer";

const QUESTION_TIME = 20;
const POINTS_PER_CORRECT = 1;

/* =========================================================
   1. PROGRAMMES
========================================================= */

const curriculum = {
  BEPC: {
    label: "BEPC — Troisième",
    series: null,
    subjects: window.RA_PROGRAMME?.BEPC?.matieres || {}
  },

  BAC: Object.fromEntries(
    Object.entries(window.RA_PROGRAMME?.BAC?.series || {}).map(
      ([series, programme]) => [
        series,
        {
          label: `BAC — Terminale série ${series}`,
          subjects: programme.matieres || {}
        }
      ]
    )
  )
};

/* =========================================================
   2. BANQUE DE QUESTIONS
========================================================= */

const questionBank = {
  "Mathématiques": [
    {
      question: "Combien vaut 3² + 4 ?",
      answers: ["10", "13", "14", "16"],
      correct: 1,
      explanation: "3² = 9, puis 9 + 4 = 13."
    },
    {
      question: "Résous l'équation : x + 5 = 12.",
      answers: ["5", "6", "7", "17"],
      correct: 2,
      explanation: "On soustrait 5 des deux côtés : x = 12 − 5 = 7."
    },
    {
      question: "Quelle est la dérivée de f(x) = x² ?",
      answers: ["x", "2x", "x²", "2"],
      correct: 1,
      explanation: "La dérivée de x² est 2x."
    }
  ],

  "Français": [
    {
      question:
        "Dans la phrase « Les élèves révisent leurs leçons », quel est le verbe ?",
      answers: ["élèves", "leurs", "révisent", "leçons"],
      correct: 2,
      explanation: "« Révisent » est le verbe conjugué de la phrase."
    },
    {
      question: "Quel est le contraire du mot « courageux » ?",
      answers: ["Brave", "Audacieux", "Lâche", "Vaillant"],
      correct: 2,
      explanation: "« Lâche » est un antonyme de « courageux »."
    }
  ],

  "Physique-chimie": [
    {
      question: "Quelle est l'unité SI de la vitesse ?",
      answers: [
        "Kilogramme",
        "Mètre par seconde",
        "Newton",
        "Joule"
      ],
      correct: 1,
      explanation:
        "La vitesse s'exprime en mètre par seconde (m/s) dans le système international."
    },
    {
      question:
        "Quel instrument mesure l'intensité du courant électrique ?",
      answers: [
        "Voltmètre",
        "Thermomètre",
        "Ampèremètre",
        "Balance"
      ],
      correct: 2,
      explanation:
        "L'ampèremètre mesure l'intensité du courant électrique."
    }
  ],

  "Physique": [
    {
      question: "Quelle est l'unité SI de la force ?",
      answers: ["Joule", "Newton", "Watt", "Pascal"],
      correct: 1,
      explanation: "La force se mesure en newtons (N)."
    },
    {
      question:
        "Quelle relation donne le travail d'une force constante dans la direction du déplacement ?",
      answers: [
        "W = F × d",
        "W = m × V",
        "W = d / F",
        "W = F + d"
      ],
      correct: 0,
      explanation:
        "Lorsque la force est dans la direction du déplacement, le travail vaut W = F × d."
    }
  ],

  "Chimie": [
    {
      question: "Quel est le symbole chimique de l'oxygène ?",
      answers: ["Ox", "O", "Og", "Oy"],
      correct: 1,
      explanation: "Le symbole chimique de l'oxygène est O."
    },
    {
      question:
        "Quelle particule porte une charge électrique négative ?",
      answers: ["Proton", "Neutron", "Électron", "Noyau"],
      correct: 2,
      explanation:
        "L'électron porte une charge électrique négative."
    }
  ],

  "SVT": [
    {
      question:
        "Quelle structure est considérée comme l'unité de base du vivant ?",
      answers: [
        "L'organe",
        "La cellule",
        "Le tissu",
        "L'organisme"
      ],
      correct: 1,
      explanation:
        "La cellule est l'unité structurale et fonctionnelle fondamentale des êtres vivants."
    },
    {
      question:
        "Quel organe pompe le sang dans le corps humain ?",
      answers: [
        "Le foie",
        "Le poumon",
        "Le cœur",
        "L'estomac"
      ],
      correct: 2,
      explanation:
        "Le cœur propulse le sang dans le système circulatoire."
    }
  ],

  "Histoire": [
    {
      question:
        "Quel est l'objectif général d'une chronologie en histoire ?",
      answers: [
        "Classer les événements dans le temps",
        "Mesurer les distances",
        "Calculer les surfaces",
        "Décrire les climats"
      ],
      correct: 0,
      explanation:
        "Une chronologie permet de situer et d'ordonner les événements dans le temps."
    },
    {
      question:
        "Quel document historique peut être une source écrite ?",
      answers: [
        "Un journal d'époque",
        "Une température",
        "Une montagne",
        "Un fleuve"
      ],
      correct: 0,
      explanation:
        "Un journal publié à l'époque étudiée peut être une source historique écrite."
    }
  ],

  "Géographie": [
    {
      question:
        "À quoi sert principalement une légende sur une carte ?",
      answers: [
        "À expliquer les symboles utilisés",
        "À donner l'heure",
        "À mesurer la température",
        "À raconter une histoire"
      ],
      correct: 0,
      explanation:
        "La légende explique la signification des couleurs, des lignes et des symboles de la carte."
    },
    {
      question:
        "Quel outil permet de représenter la répartition de la population ?",
      answers: [
        "Une carte thématique",
        "Un thermomètre",
        "Un calendrier",
        "Une boussole seule"
      ],
      correct: 0,
      explanation:
        "Une carte thématique représente une information particulière, comme la répartition de la population."
    }
  ],

  "Histoire-géographie": [
    {
      question:
        "Quel outil permet de représenter la répartition de la population ?",
      answers: [
        "Une carte thématique",
        "Un thermomètre",
        "Un calendrier",
        "Une boussole seule"
      ],
      correct: 0,
      explanation:
        "Une carte thématique permet de représenter la répartition de la population."
    },
    {
      question:
        "À quoi sert une chronologie historique ?",
      answers: [
        "À ordonner les événements dans le temps",
        "À mesurer les distances",
        "À calculer les revenus",
        "À identifier les reliefs"
      ],
      correct: 0,
      explanation:
        "Elle permet de situer les événements et de comprendre leur succession."
    }
  ],

  "Histoire-Géographie": [
    {
      question:
        "Quel outil permet de représenter la répartition de la population ?",
      answers: [
        "Une carte thématique",
        "Un thermomètre",
        "Un calendrier",
        "Une boussole seule"
      ],
      correct: 0,
      explanation:
        "Une carte thématique permet de représenter la répartition de la population."
    },
    {
      question:
        "À quoi sert une chronologie historique ?",
      answers: [
        "À ordonner les événements dans le temps",
        "À mesurer les distances",
        "À calculer les revenus",
        "À identifier les reliefs"
      ],
      correct: 0,
      explanation:
        "Elle permet de situer les événements et de comprendre leur succession."
    }
  ],

  "Anglais": [
    {
      question: "Choose the correct translation of « Bonjour ».",
      answers: [
        "Goodbye",
        "Hello",
        "Thanks",
        "Please"
      ],
      correct: 1,
      explanation:
        "« Hello » signifie « Bonjour » en anglais."
    },
    {
      question: "Choose the correct sentence.",
      answers: [
        "She go to school.",
        "She goes to school.",
        "She going school.",
        "She gone to school."
      ],
      correct: 1,
      explanation:
        "Au présent simple, à la troisième personne du singulier, on ajoute généralement -s au verbe."
    }
  ],

  "Éducation civique": [
    {
      question:
        "Quel comportement illustre le respect des biens publics ?",
      answers: [
        "Dégrader les équipements",
        "Protéger les équipements collectifs",
        "Jeter les déchets dans la rue",
        "Ignorer les règles communes"
      ],
      correct: 1,
      explanation:
        "Les biens publics appartiennent à la collectivité et doivent être protégés."
    },
    {
      question:
        "Quel principe favorise la vie en société ?",
      answers: [
        "La violence",
        "La discrimination",
        "Le respect mutuel",
        "L'intimidation"
      ],
      correct: 2,
      explanation:
        "Le respect mutuel contribue à une vie collective pacifique."
    }
  ],

  "Économie": [
    {
      question: "Quel est le rôle général d'un marché ?",
      answers: [
        "Organiser les échanges entre offreurs et demandeurs",
        "Supprimer tous les besoins",
        "Remplacer toutes les entreprises",
        "Fixer toutes les décisions personnelles"
      ],
      correct: 0,
      explanation:
        "Un marché met en relation les offreurs et les demandeurs d'un bien ou d'un service."
    },
    {
      question: "Lequel est un facteur de production ?",
      answers: [
        "Le travail",
        "La météo du jour uniquement",
        "Une publicité seule",
        "Un prix affiché"
      ],
      correct: 0,
      explanation:
        "Le travail est l'un des facteurs de production, avec notamment le capital."
    }
  ],

  "Sciences Économiques et Sociales": [
    {
      question: "Quel est le rôle général d'un marché ?",
      answers: [
        "Organiser les échanges entre offreurs et demandeurs",
        "Supprimer tous les besoins",
        "Remplacer toutes les entreprises",
        "Fixer toutes les décisions personnelles"
      ],
      correct: 0,
      explanation:
        "Un marché met en relation les offreurs et les demandeurs."
    },
    {
      question: "Lequel est un facteur de production ?",
      answers: [
        "Le travail",
        "La météo du jour uniquement",
        "Une publicité seule",
        "Un prix affiché"
      ],
      correct: 0,
      explanation:
        "Le travail constitue un facteur de production."
    }
  ],

  "Philosophie": [
    {
      question:
        "Quel est l'objectif principal d'une dissertation philosophique ?",
      answers: [
        "Développer une réflexion argumentée",
        "Recopier un dictionnaire",
        "Donner uniquement son opinion sans argument",
        "Énumérer des dates"
      ],
      correct: 0,
      explanation:
        "Une dissertation philosophique examine un problème en construisant un raisonnement argumenté."
    },
    {
      question: "Que signifie argumenter ?",
      answers: [
        "Soutenir une idée avec des raisons",
        "Répéter une phrase",
        "Changer de sujet",
        "Éviter toute explication"
      ],
      correct: 0,
      explanation:
        "Argumenter consiste à justifier une thèse par des raisons et des exemples."
    }
  ]
};

/* =========================================================
   3. ÉTAT DE L'APPLICATION
========================================================= */

const state = {
  exam: null,
  series: null,
  subject: null,
  chapter: null,

  questions: [],
  questionIndex: 0,
  score: 0,

  answered: false,
  timer: null,
  timeLeft: QUESTION_TIME,

  player: "",
  lastResult: null
};

const $ = (id) => document.getElementById(id);

const sections = [
  "selection",
  "seriesSection",
  "subjectsSection",
  "chaptersSection",
  "chapterSection",
  "quizSection",
  "resultsSection",
  "leaderboardSection",
  "aboutSection"
];

/* =========================================================
   4. NAVIGATION
========================================================= */

function showSection(sectionId) {
  sections.forEach((id) => {
    const element = $(id);
    if (element) {
      element.classList.add("hidden");
    }
  });

  const target = $(sectionId);

  if (target) {
    target.classList.remove("hidden");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goHome() {
  stopTimer();

  state.exam = null;
  state.series = null;
  state.subject = null;
  state.chapter = null;
  state.questions = [];
  state.questionIndex = 0;
  state.score = 0;
  state.answered = false;

  showSection("selection");
}

function getCurrentProgram() {
  if (state.exam === "BEPC") {
    return curriculum.BEPC;
  }

  if (state.exam === "BAC" && state.series) {
    return curriculum.BAC[state.series];
  }

  return null;
}

/* =========================================================
   5. CHOIX BEPC / BAC
========================================================= */

function chooseExam(exam) {
  if (!["BEPC", "BAC"].includes(exam)) {
    return;
  }

  stopTimer();

  state.exam = exam;
  state.series = null;
  state.subject = null;
  state.chapter = null;

  if (exam === "BEPC") {
    renderSubjects();
  } else {
    showSection("seriesSection");
  }
}

function chooseSeries(series) {
  if (!curriculum.BAC[series]) {
    return;
  }

  state.series = series;
  state.subject = null;
  state.chapter = null;

  renderSubjects();
}

/* =========================================================
   6. MATIÈRES
========================================================= */

function renderSubjects() {
  const program = getCurrentProgram();

  if (!program) {
    return;
  }

  const title = $("subjectsTitle");
  const list = $("subjectsList");

  if (!title || !list) {
    return;
  }

  title.textContent = `${program.label} — Matières`;

  list.replaceChildren();

  Object.keys(program.subjects).forEach((subject) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "subject-card";

    const info = document.createElement("span");

    const subjectTitle = document.createElement("strong");
    subjectTitle.textContent = subject;

    const description = document.createElement("small");
    description.textContent =
      `${program.subjects[subject].length} chapitres proposés`;

    info.append(subjectTitle, description);

    const arrow = document.createElement("span");
    arrow.textContent = "›";
    arrow.setAttribute("aria-hidden", "true");

    button.append(info, arrow);

    button.addEventListener("click", () => {
      chooseSubject(subject);
    });

    list.appendChild(button);
  });

  showSection("subjectsSection");
}

/* =========================================================
   7. CHAPITRES
========================================================= */

function chooseSubject(subject) {
  const program = getCurrentProgram();

  if (!program || !program.subjects[subject]) {
    return;
  }

  state.subject = subject;
  state.chapter = null;

  const title = $("chaptersTitle");
  const list = $("chaptersList");

  if (!title || !list) {
    return;
  }

  title.textContent = `${subject} — Chapitres`;

  list.replaceChildren();

  program.subjects[subject].forEach((chapter, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "chapter-card";

    const info = document.createElement("span");

    const chapterTitle = document.createElement("strong");
    chapterTitle.textContent =
      `Chapitre ${index + 1} : ${chapter}`;

    const description = document.createElement("small");

    const available =
      getLessonForChapter(chapter) !== null;

    description.textContent = available
      ? "Cours disponible • Réviser ou faire le défi"
      : "Cours en préparation";

    info.append(chapterTitle, description);

    const arrow = document.createElement("span");
    arrow.textContent = "›";
    arrow.setAttribute("aria-hidden", "true");

    button.append(info, arrow);

    button.addEventListener("click", () => {
      chooseChapter(chapter);
    });

    list.appendChild(button);
  });

  showSection("chaptersSection");
}

/* =========================================================
   8. RÉCUPÉRATION DU COURS
========================================================= */

function getLessonForChapter(chapter) {
  if (!chapter || !state.subject) {
    return null;
  }

  if (state.exam === "BEPC") {
    return (
      window.RA_COURS?.BEPC?.matieres?.[state.subject]?.[chapter] ||
      null
    );
  }

  if (state.exam === "BAC") {
    return (
      window.RA_COURS?.BAC?.series?.[state.series]?.matieres?.[
        state.subject
      ]?.[chapter] || null
    );
  }

  return null;
}

/* =========================================================
   9. AFFICHAGE DU COURS
========================================================= */

function chooseChapter(chapter) {
  if (!chapter) {
    return;
  }

  state.chapter = chapter;

  const title = $("chapterTitle");
  const content = $("lessonContent");

  if (!title || !content) {
    return;
  }

  title.textContent = chapter;

  content.replaceChildren();

  const lesson = getLessonForChapter(chapter);

  const box = document.createElement("div");
  box.className = "lesson-box";

  function addHeading(text) {
    if (!text) return;

    const heading = document.createElement("h3");
    heading.textContent = text;

    box.appendChild(heading);
  }

  function addParagraph(text) {
    if (!text) return;

    const paragraph = document.createElement("p");

    paragraph.textContent = text;
    paragraph.style.whiteSpace = "pre-line";

    box.appendChild(paragraph);
  }

  function addList(items) {
    if (!Array.isArray(items) || !items.length) {
      return;
    }

    const ul = document.createElement("ul");

    items.forEach((item) => {
      const li = document.createElement("li");

      if (typeof item === "string") {
        li.textContent = item;
      } else if (item && typeof item === "object") {
        li.textContent =
          item.texte ||
          item.text ||
          item.nom ||
          item.titre ||
          JSON.stringify(item);
      }

      ul.appendChild(li);
    });

    box.appendChild(ul);
  }

  if (!lesson) {
    addHeading("Cours en préparation");

    addParagraph(
      `La fiche détaillée du chapitre « ${chapter} » n'est pas encore disponible.`
    );

    addParagraph(
      "Tu peux néanmoins utiliser le défi de démonstration pour t'entraîner."
    );
  } else {
    addHeading(lesson.titre || chapter);

    if (lesson.objectifs?.length) {
      addHeading("Objectifs de révision");
      addList(lesson.objectifs);
    }

    if (lesson.notions?.length) {
      addHeading("Notions essentielles");
      addList(lesson.notions);
    }

    if (Array.isArray(lesson.lecon)) {
      lesson.lecon.forEach((partie) => {
        if (!partie) return;

        addHeading(
          partie.titre ||
          partie.nom ||
          "Leçon"
        );

        addParagraph(
          partie.texte ||
          partie.text ||
          partie.contenu ||
          ""
        );

        if (Array.isArray(partie.points)) {
          addList(partie.points);
        }
      });
    }

    if (lesson.resume) {
      addHeading("Résumé à retenir");
      addParagraph(lesson.resume);
    }

    if (lesson.formules?.length) {
      addHeading("Formules essentielles");
      addList(lesson.formules);
    }

    if (lesson.exemples?.length) {
      addHeading("Exemples");

      lesson.exemples.forEach((exemple) => {
        if (typeof exemple === "string") {
          addParagraph(exemple);
        } else if (exemple) {
          addHeading(exemple.titre || "Exemple");
          addParagraph(
            exemple.texte ||
            exemple.solution ||
            exemple.contenu ||
            ""
          );
        }
      });
    }
  }

  content.appendChild(box);

  showSection("chapterSection");
}

/* =========================================================
   10. JOUEUR
========================================================= */

function getPlayerName() {
  if (state.player) {
    return state.player;
  }

  try {
    const saved = localStorage.getItem(PLAYER_KEY);

    if (saved) {
      state.player = saved;
      return saved;
    }
  } catch (error) {
    console.warn(
      "Stockage local indisponible.",
      error
    );
  }

  const input = window.prompt(
    "Choisis un prénom ou un pseudo (18 caractères maximum) :"
  );

  if (input === null) {
    return "";
  }

  const name = input
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 18);

  if (!name) {
    window.alert(
      "Entre un prénom ou un pseudo pour commencer."
    );

    return "";
  }

  state.player = name;

  try {
    localStorage.setItem(
      PLAYER_KEY,
      name
    );
  } catch (error) {
    console.warn(
      "Impossible de sauvegarder le pseudo.",
      error
    );
  }

  return name;
}

/* =========================================================
   11. PROGRESSION LOCALE
========================================================= */

function readProgress() {
  try {
    const data = localStorage.getItem(
      STORAGE_KEY
    );

    const parsed = JSON.parse(data || "[]");

    return Array.isArray(parsed)
      ? parsed
      : [];
  } catch (error) {
    return [];
  }
}

function saveResult() {
  const records = readProgress();

  const key =
    `${state.exam}-${state.series || "commun"}-${state.player}`;

  const previous = records.find(
    (record) => record.key === key
  );

  const result = {
    key,
    player: state.player,
    exam: state.exam,
    series: state.series || "",
    score: state.score,
    subject: state.subject,
    chapter: state.chapter,
    date: new Date().toISOString()
  };

  if (previous) {
    previous.score = Math.max(
      previous.score,
      result.score
    );

    previous.subject = result.subject;
    previous.chapter = result.chapter;
    previous.date = result.date;
  } else {
    records.push(result);
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(records)
    );
  } catch (error) {
    console.warn(
      "Impossible de sauvegarder les résultats.",
      error
    );
  }

  state.lastResult = result;
}

/* =========================================================
   12. QUESTIONS
========================================================= */

function normalizeSubjectForQuestions(subject) {
  if (!subject) {
    return null;
  }

  const aliases = {
    "Histoire-Géographie": "Histoire-géographie",
    "Histoire – Géographie": "Histoire-géographie",
    "Histoire / Géographie": "Histoire-géographie",
    "Éducation Civique et Morale": "Éducation civique",
    "Sciences Économiques et Sociales": "Sciences Économiques et Sociales",
    "Physique-Chimie": "Physique-chimie"
  };

  return aliases[subject] || subject;
}

function getQuestionsForSubject(subject) {
  const normalized =
    normalizeSubjectForQuestions(subject);

  const bank =
    questionBank[normalized] ||
    questionBank[subject];

  if (Array.isArray(bank) && bank.length) {
    return bank.map((item) => ({
      ...item,
      answers: [...item.answers]
    }));
  }

  return [
    {
      question:
        `Quel est l'objectif principal d'une bonne révision en ${subject} ?`,
      answers: [
        "Comprendre les notions et savoir les appliquer",
        "Mémoriser sans comprendre",
        "Éviter les exercices",
        "Ignorer les corrections"
      ],
      correct: 0,
      explanation:
        "Une bonne révision associe compréhension, entraînement et correction."
    },
    {
      question:
        `Que faut-il faire après avoir étudié un chapitre de ${subject} ?`,
      answers: [
        "Vérifier sa compréhension avec des exercices",
        "Ne plus jamais revoir le chapitre",
        "Ignorer ses erreurs",
        "Apprendre uniquement le titre"
      ],
      correct: 0,
      explanation:
        "Les exercices permettent de vérifier si les notions étudiées sont réellement comprises."
    }
  ];
}

/* =========================================================
   13. DÉMARRER LE DÉFI
========================================================= */

function startQuiz() {
  const player = getPlayerName();

  if (!player) {
    return;
  }

  if (!state.subject || !state.chapter) {
    window.alert(
      "Choisis d'abord une matière et un chapitre."
    );

    return;
  }

  stopTimer();

  state.player = player;
  state.questions =
    getQuestionsForSubject(state.subject);

  state.questionIndex = 0;
  state.score = 0;
  state.answered = false;
  state.timeLeft = QUESTION_TIME;

  if ($("quizScore")) {
    $("quizScore").textContent = "Points : 0";
  }

  if ($("answerFeedback")) {
    $("answerFeedback").textContent = "";
  }

  if ($("nextQuestion")) {
    $("nextQuestion").classList.add("hidden");
  }

  if ($("finishQuiz")) {
    $("finishQuiz").classList.add("hidden");
  }

  showSection("quizSection");

  displayQuestion();
}

/* =========================================================
   14. CHRONOMÈTRE
========================================================= */

function stopTimer() {
  if (state.timer !== null) {
    clearInterval(state.timer);
    state.timer = null;
  }
}

function startTimer() {
  stopTimer();

  state.timeLeft = QUESTION_TIME;

  updateTimerLabel();

  state.timer = setInterval(() => {
    state.timeLeft -= 1;

    updateTimerLabel();

    if (state.timeLeft <= 0) {
      stopTimer();

      if (!state.answered) {
        selectAnswer(-1, true);
      }
    }
  }, 1000);
}

function updateTimerLabel() {
  const total =
    state.questions.length || 0;

  const progress =
    $("quizProgress");

  if (!progress) {
    return;
  }

  progress.textContent =
    `Question ${state.questionIndex + 1} / ${total} · ${state.timeLeft}s`;
}

/* =========================================================
   15. AFFICHAGE D'UNE QUESTION
========================================================= */

function displayQuestion() {
  const question =
    state.questions[state.questionIndex];

  if (!question) {
    finishQuiz();
    return;
  }

  state.answered = false;

  $("questionText").textContent =
    question.question;

  $("answerFeedback").textContent = "";

  $("nextQuestion").classList.add("hidden");
  $("finishQuiz").classList.add("hidden");

  const list = $("answersList");

  list.replaceChildren();

  question.answers.forEach(
    (answer, index) => {
      const button =
        document.createElement("button");

      button.type = "button";
      button.className = "answer-option";

      button.textContent =
        `${String.fromCharCode(65 + index)}. ${answer}`;

      button.addEventListener(
        "click",
        () => selectAnswer(index, false)
      );

      list.appendChild(button);
    }
  );

  $("quizScore").textContent =
    `Points : ${state.score}`;

  $("progressBar").style.width =
    `${(state.questionIndex / state.questions.length) * 100}%`;

  startTimer();
}

/* =========================================================
   16. RÉPONSE
========================================================= */

function selectAnswer(
  selectedIndex,
  timedOut
) {
  if (state.answered) {
    return;
  }

  state.answered = true;

  stopTimer();

  const question =
    state.questions[state.questionIndex];

  const correct =
    selectedIndex === question.correct;

  const buttons =
    $("answersList").querySelectorAll(
      "button"
    );

  buttons.forEach(
    (button, index) => {
      button.disabled = true;

      if (index === question.correct) {
        button.classList.add("correct");
      } else if (
        index === selectedIndex &&
        !correct
      ) {
        button.classList.add("incorrect");
      }
    }
  );

  if (correct) {
    state.score +=
      POINTS_PER_CORRECT;

    $("answerFeedback").textContent =
      `Bonne réponse ! +${POINTS_PER_CORRECT} point${POINTS_PER_CORRECT > 1 ? "s" : ""}. ${question.explanation}`;
  } else {
    $("answerFeedback").textContent =
      `${timedOut ? "Temps écoulé." : "Pas tout à fait."} ${question.explanation}`;
  }

  $("quizScore").textContent =
    `Points : ${state.score}`;

  $("progressBar").style.width =
    `${((state.questionIndex + 1) / state.questions.length) * 100}%`;

  if (
    state.questionIndex ===
    state.questions.length - 1
  ) {
    $("finishQuiz").classList.remove(
      "hidden"
    );
  } else {
    $("nextQuestion").classList.remove(
      "hidden"
    );
  }
}

/* =========================================================
   17. QUESTION SUIVANTE
========================================================= */

function nextQuestion() {
  if (!state.answered) {
    return;
  }

  state.questionIndex += 1;

  displayQuestion();
}

/* =========================================================
   18. FIN DU DÉFI
========================================================= */

function finishQuiz() {
  stopTimer();

  if (!state.questions.length) {
    return;
  }

  saveResult();

  const total =
    state.questions.length;

  const correctAnswers =
    state.score / POINTS_PER_CORRECT;

  $("resultSummary").textContent =
    `${state.player}, tu as obtenu ${state.score} point${state.score > 1 ? "s" : ""} sur ${total * POINTS_PER_CORRECT}. ` +
    `Réponses correctes : ${correctAnswers} sur ${total}.`;

  showSection("resultsSection");
}

/* =========================================================
   19. CLASSEMENT LOCAL
========================================================= */

function renderLeaderboard() {
  const list =
    $("leaderboardList");

  if (!list) {
    return;
  }

  list.replaceChildren();

  const records =
    readProgress()
      .filter(
        (record) =>
          record.exam === state.exam ||
          !state.exam
      )
      .filter(
        (record) =>
          !state.series ||
          record.series === state.series
      )
      .sort(
        (a, b) =>
          Number(b.score || 0) -
          Number(a.score || 0)
      )
      .slice(0, 20);

  if (!records.length) {
    const empty =
      document.createElement("p");

    empty.textContent =
      "Aucun résultat enregistré sur cet appareil pour le moment. Fais un défi pour commencer !";

    list.appendChild(empty);

    return;
  }

  records.forEach(
    (record, index) => {
      const row =
        document.createElement("div");

      row.className =
        "chapter-card";

      const info =
        document.createElement("span");

      const name =
        document.createElement("strong");

      const detail =
        document.createElement("small");

      name.textContent =
        `${index + 1}. ${record.player}`;

      detail.textContent =
        `${record.exam}` +
        `${record.series ? " — Série " + record.series : ""}` +
        ` · ${record.subject}`;

      const score =
        document.createElement("strong");

      score.textContent =
        `${record.score} pts`;

      info.append(
        name,
        detail
      );

      row.append(
        info,
        score
      );

      list.appendChild(row);
    }
  );
}

function openLeaderboard() {
  stopTimer();

  state.exam = null;
  state.series = null;

  renderLeaderboard();

  showSection(
    "leaderboardSection"
  );
}

/* =========================================================
   20. ÉVÉNEMENTS
========================================================= */

function setupEvents() {
  const bepcButton =
    $("bepcButton");

  if (bepcButton) {
    bepcButton.addEventListener(
      "click",
      () => chooseExam("BEPC")
    );
  }

  const bacButton =
    $("bacButton");

  if (bacButton) {
    bacButton.addEventListener(
      "click",
      () => chooseExam("BAC")
    );
  }

  document
    .querySelectorAll(".series-card")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          chooseSeries(
            button.dataset.series
          );
        }
      );
    });

  const backToExams =
    $("backToExams");

  if (backToExams) {
    backToExams.addEventListener(
      "click",
      goHome
    );
  }

  const backToSeries =
    $("backToSeries");

  if (backToSeries) {
    backToSeries.addEventListener(
      "click",
      () => {
        if (state.exam === "BAC") {
          showSection(
            "seriesSection"
          );
        } else {
          goHome();
        }
      }
    );
  }

  const backToSubjects =
    $("backToSubjects");

  if (backToSubjects) {
    backToSubjects.addEventListener(
      "click",
      renderSubjects
    );
  }

  const backToChapters =
    $("backToChapters");

  if (backToChapters) {
    backToChapters.addEventListener(
      "click",
      () => {
        if (state.subject) {
          chooseSubject(
            state.subject
          );
        }
      }
    );
  }

  /* -----------------------------------------
     BOUTON RÉVISER LE COURS
  ----------------------------------------- */

  const revisionButton =
    $("revisionButton");

  if (revisionButton) {
    revisionButton.addEventListener(
      "click",
      () => {
        const lesson =
          getLessonForChapter(
            state.chapter
          );

        if (!lesson) {
          window.alert(
            "Le cours détaillé de ce chapitre est encore en préparation."
          );

          return;
        }

        showSection(
          "chapterSection"
        );

        const chapterSection =
          $("chapterSection");

        if (chapterSection) {
          chapterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    );
  }

  /* -----------------------------------------
     BOUTON DÉFI
  ----------------------------------------- */

  const challengeButton =
    $("challengeButton");

  if (challengeButton) {
    challengeButton.addEventListener(
      "click",
      startQuiz
    );
  }

  /* -----------------------------------------
     QCM
  ----------------------------------------- */

  const nextQuestionButton =
    $("nextQuestion");

  if (nextQuestionButton) {
    nextQuestionButton.addEventListener(
      "click",
      nextQuestion
    );
  }

  const finishQuizButton =
    $("finishQuiz");

  if (finishQuizButton) {
    finishQuizButton.addEventListener(
      "click",
      finishQuiz
    );
  }

  /* -----------------------------------------
     RÉSULTATS
  ----------------------------------------- */

  const retryButton =
    $("retryButton");

  if (retryButton) {
    retryButton.addEventListener(
      "click",
      startQuiz
    );
  }

  const resultsHomeButton =
    $("resultsHomeButton");

  if (resultsHomeButton) {
    resultsHomeButton.addEventListener(
      "click",
      goHome
    );
  }

  /* -----------------------------------------
     ACCUEIL
  ----------------------------------------- */

  const homeButton =
    $("homeButton");

  if (homeButton) {
    homeButton.addEventListener(
      "click",
      goHome
    );
  }

  /* -----------------------------------------
     CLASSEMENT
  ----------------------------------------- */

  const leaderboardButton =
    $("leaderboardButton");

  if (leaderboardButton) {
    leaderboardButton.addEventListener(
      "click",
      openLeaderboard
    );
  }

  const leaderboardHomeButton =
    $("leaderboardHomeButton");

  if (leaderboardHomeButton) {
    leaderboardHomeButton.addEventListener(
      "click",
      goHome
    );
  }

  /* -----------------------------------------
     À PROPOS
  ----------------------------------------- */

  const aboutButton =
    $("aboutButton");

  if (aboutButton) {
    aboutButton.addEventListener(
      "click",
      () => {
        showSection(
          "aboutSection"
        );
      }
    );
  }

  const aboutHomeButton =
    $("aboutHomeButton");

  if (aboutHomeButton) {
    aboutHomeButton.addEventListener(
      "click",
      goHome
    );
  }

  /* -----------------------------------------
     MENU
  ----------------------------------------- */

  const menuToggle =
    $("menuToggle");

  if (menuToggle) {
    menuToggle.addEventListener(
      "click",
      () => {
        const selection =
          $("selection");

        if (selection) {
          selection.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    );
  }
}

/* =========================================================
   21. INITIALISATION
========================================================= */

function initializeApp() {
  document.title = APP_NAME;

  setupEvents();

  showSection("selection");

  console.info(
    `${APP_NAME} initialisé — Créé par ${CREATOR}`
  );
}

initializeApp();
