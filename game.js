"use strict";

/*
 * =========================================================
 * RÉUSSITE ACADÉMIE
 * VERSION DÉFIS
 * Créé par Belfort
 *
 * Fonctionnement :
 *
 * BEPC → Matière → Chapitre → DÉFI
 * BAC  → Série → Matière → Chapitre → DÉFI
 *
 * Aucun cours affiché.
 * Aucun bouton "Réviser le cours".
 * =========================================================
 */

const APP_NAME = "RÉUSSITE ACADÉMIE";
const CREATOR = "Belfort martial";

const STORAGE_KEY = "reussiteAcademieProgress";
const PLAYER_KEY = "reussiteAcademiePlayer";

const QUESTION_TIME = 20;
const POINTS_PER_CORRECT = 1;


/* =========================================================
   1. PROGRAMME
========================================================= */

const curriculum = {
  BEPC: {
    label: "BEPC — Troisième",
    series: null,
    subjects: window.RA_PROGRAMME?.BEPC?.matieres || {}
  },

  BAC: Object.fromEntries(
    Object.entries(
      window.RA_PROGRAMME?.BAC?.series || {}
    ).map(([series, programme]) => [
      series,
      {
        label: `BAC — Terminale série ${series}`,
        subjects: programme.matieres || {}
      }
    ])
  )
};


/* =========================================================
   2. BANQUE DE QUESTIONS
   VERSION DE DÉMONSTRATION

   Pour l'instant, les questions sont liées à la matière.
   Nous améliorerons ensuite le système pour avoir une
   banque différente pour CHAQUE chapitre.
========================================================= */

const questionBank = {

  "Mathématiques": [

    {
      question: "Combien vaut 3² + 4 ?",
      answers: [
        "10",
        "13",
        "14",
        "16"
      ],
      correct: 1,
      explanation:
        "3² = 9, puis 9 + 4 = 13."
    },

    {
      question: "Résous l'équation : x + 5 = 12.",
      answers: [
        "5",
        "6",
        "7",
        "17"
      ],
      correct: 2,
      explanation:
        "On soustrait 5 aux deux membres : x = 12 − 5 = 7."
    },

    {
      question: "Quel est le résultat de 5 × 6 ?",
      answers: [
        "11",
        "25",
        "30",
        "35"
      ],
      correct: 2,
      explanation:
        "5 × 6 = 30."
    },

    {
      question: "Quelle est la racine carrée de 25 ?",
      answers: [
        "3",
        "4",
        "5",
        "6"
      ],
      correct: 2,
      explanation:
        "5² = 25, donc √25 = 5."
    },

    {
      question: "Dans un triangle rectangle, comment s'appelle le côté opposé à l'angle droit ?",
      answers: [
        "Le côté adjacent",
        "L'hypoténuse",
        "La médiane",
        "La hauteur"
      ],
      correct: 1,
      explanation:
        "Dans un triangle rectangle, le côté opposé à l'angle droit est l'hypoténuse."
    }

  ],


  "Français": [

    {
      question:
        "Dans la phrase « Les élèves travaillent », quel est le verbe ?",

      answers: [
        "Les",
        "élèves",
        "travaillent",
        "aucun"
      ],

      correct: 2,

      explanation:
        "« travaillent » est le verbe conjugué de la phrase."
    },

    {
      question:
        "Quel est le contraire du mot « courageux » ?",

      answers: [
        "Brave",
        "Audacieux",
        "Lâche",
        "Vaillant"
      ],

      correct: 2,

      explanation:
        "« Lâche » est un antonyme de « courageux »."
    }

  ],


  "Physique-Chimie": [

    {
      question:
        "Quelle est l'unité internationale de la vitesse ?",

      answers: [
        "Kilogramme",
        "Mètre par seconde",
        "Newton",
        "Joule"
      ],

      correct: 1,

      explanation:
        "Dans le système international, la vitesse s'exprime en mètre par seconde (m/s)."
    },

    {
      question:
        "Quel appareil mesure l'intensité du courant électrique ?",

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
      question:
        "Quelle est l'unité SI de la force ?",

      answers: [
        "Joule",
        "Newton",
        "Watt",
        "Pascal"
      ],

      correct: 1,

      explanation:
        "La force se mesure en newtons (N)."
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
      question:
        "Quel est le symbole chimique de l'oxygène ?",

      answers: [
        "Ox",
        "O",
        "Og",
        "Oy"
      ],

      correct: 1,

      explanation:
        "Le symbole chimique de l'oxygène est O."
    },

    {
      question:
        "Quelle particule porte une charge électrique négative ?",

      answers: [
        "Proton",
        "Neutron",
        "Électron",
        "Noyau"
      ],

      correct: 2,

      explanation:
        "L'électron porte une charge électrique négative."
    }

  ],


  "SVT": [

    {
      question:
        "Quelle est l'unité de base du vivant ?",

      answers: [
        "L'organe",
        "La cellule",
        "Le tissu",
        "L'organisme"
      ],

      correct: 1,

      explanation:
        "La cellule est l'unité structurale et fonctionnelle fondamentale du vivant."
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


  "Histoire-Géographie": [

    {
      question:
        "À quoi sert principalement une chronologie historique ?",

      answers: [
        "À classer les événements dans le temps",
        "À mesurer les distances",
        "À calculer les surfaces",
        "À décrire les climats"
      ],

      correct: 0,

      explanation:
        "Une chronologie permet d'ordonner les événements dans le temps."
    },

    {
      question:
        "À quoi sert une légende sur une carte ?",

      answers: [
        "À expliquer les symboles utilisés",
        "À donner l'heure",
        "À mesurer la température",
        "À raconter une histoire"
      ],

      correct: 0,

      explanation:
        "La légende explique les couleurs, lignes et symboles utilisés sur une carte."
    }

  ],


  "Anglais": [

    {
      question:
        "Choose the correct translation of « Bonjour ».",

      answers: [
        "Goodbye",
        "Hello",
        "Thanks",
        "Please"
      ],

      correct: 1,

      explanation:
        "« Hello » signifie « Bonjour »."
    },

    {
      question:
        "Choose the correct sentence.",

      answers: [
        "She go to school.",
        "She goes to school.",
        "She going school.",
        "She gone to school."
      ],

      correct: 1,

      explanation:
        "À la troisième personne du singulier au présent simple, le verbe prend généralement -s."
    }

  ],


  "Éducation Civique et Morale": [

    {
      question:
        "Quel comportement montre le respect des biens publics ?",

      answers: [
        "Dégrader les équipements",
        "Protéger les équipements collectifs",
        "Jeter les déchets dans la rue",
        "Ignorer les règles communes"
      ],

      correct: 1,

      explanation:
        "Les biens publics appartiennent à la collectivité et doivent être protégés."
    }

  ],


  "Philosophie": [

    {
      question:
        "Quel est l'objectif principal d'une dissertation philosophique ?",

      answers: [
        "Développer une réflexion argumentée",
        "Recopier un dictionnaire",
        "Donner une opinion sans argument",
        "Énumérer uniquement des dates"
      ],

      correct: 0,

      explanation:
        "Une dissertation philosophique construit une réflexion organisée et argumentée."
    },

    {
      question:
        "Que signifie argumenter ?",

      answers: [
        "Soutenir une idée avec des raisons",
        "Répéter une phrase",
        "Changer de sujet",
        "Éviter toute explication"
      ],

      correct: 0,

      explanation:
        "Argumenter consiste à justifier une idée par des raisons et des exemples."
    }

  ]

};


/* =========================================================
   3. ÉTAT DU JEU
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


/* =========================================================
   4. OUTIL DOM
========================================================= */

const $ = (id) =>
  document.getElementById(id);


/* =========================================================
   5. SECTIONS
========================================================= */

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
   6. NAVIGATION
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


/* =========================================================
   7. RETOUR ACCUEIL
========================================================= */

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


/* =========================================================
   8. PROGRAMME ACTUEL
========================================================= */

function getCurrentProgram() {

  if (state.exam === "BEPC") {
    return curriculum.BEPC;
  }

  if (
    state.exam === "BAC" &&
    state.series
  ) {
    return curriculum.BAC[state.series];
  }

  return null;
}


/* =========================================================
   9. CHOIX BEPC / BAC
========================================================= */

function chooseExam(exam) {

  if (
    exam !== "BEPC" &&
    exam !== "BAC"
  ) {
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


/* =========================================================
   10. CHOIX DE LA SÉRIE
========================================================= */

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
   11. AFFICHAGE DES MATIÈRES
========================================================= */

function renderSubjects() {

  const program =
    getCurrentProgram();

  if (!program) {
    return;
  }

  const title =
    $("subjectsTitle");

  const list =
    $("subjectsList");

  if (!title || !list) {
    return;
  }

  title.textContent =
    `${program.label} — Matières`;

  list.replaceChildren();

  Object.keys(program.subjects)
    .forEach((subject) => {

      const button =
        document.createElement("button");

      button.type = "button";
      button.className =
        "subject-card";

      const info =
        document.createElement("span");

      const subjectTitle =
        document.createElement("strong");

      subjectTitle.textContent =
        subject;

      const description =
        document.createElement("small");

      description.textContent =
        `${program.subjects[subject].length} chapitres`;

      info.append(
        subjectTitle,
        description
      );

      const arrow =
        document.createElement("span");

      arrow.textContent = "›";

      arrow.setAttribute(
        "aria-hidden",
        "true"
      );

      button.append(
        info,
        arrow
      );

      button.addEventListener(
        "click",
        () => chooseSubject(subject)
      );

      list.appendChild(button);

    });

  showSection(
    "subjectsSection"
  );
}


/* =========================================================
   12. CHOIX DE LA MATIÈRE
========================================================= */

function chooseSubject(subject) {

  const program =
    getCurrentProgram();

  if (
    !program ||
    !program.subjects[subject]
  ) {
    return;
  }

  state.subject = subject;
  state.chapter = null;

  const title =
    $("chaptersTitle");

  const list =
    $("chaptersList");

  if (!title || !list) {
    return;
  }

  title.textContent =
    `${subject} — Défis`;

  list.replaceChildren();

  program.subjects[subject]
    .forEach((chapter, index) => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className =
        "chapter-card";

      const info =
        document.createElement("span");

      const chapterTitle =
        document.createElement("strong");

      chapterTitle.textContent =
        `Défi ${index + 1} : ${chapter}`;

      const description =
        document.createElement("small");

      description.textContent =
        "🚀 Commencer le défi";

      info.append(
        chapterTitle,
        description
      );

      const arrow =
        document.createElement("span");

      arrow.textContent = "›";

      arrow.setAttribute(
        "aria-hidden",
        "true"
      );

      button.append(
        info,
        arrow
      );

      button.addEventListener(
        "click",
        () => chooseChapter(chapter)
      );

      list.appendChild(button);

    });

  showSection(
    "chaptersSection"
  );
}


/* =========================================================
   13. CHOIX DU CHAPITRE
   DIRECTEMENT → DÉFI
========================================================= */

function chooseChapter(chapter) {

  if (!chapter) {
    return;
  }

  state.chapter = chapter;

  /*
   * IMPORTANT :
   * Aucun cours n'est affiché.
   * Aucun RA_COURS n'est utilisé.
   *
   * Le chapitre ouvre directement le défi.
   */

  startQuiz();
}


/* =========================================================
   14. JOUEUR
========================================================= */

function getPlayerName() {

  if (state.player) {
    return state.player;
  }

  try {

    const saved =
      localStorage.getItem(
        PLAYER_KEY
      );

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

  const input =
    window.prompt(
      "Entre ton prénom ou ton pseudo (18 caractères maximum) :"
    );

  if (input === null) {
    return "";
  }

  const name =
    input
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
   15. PROGRESSION LOCALE
========================================================= */

function readProgress() {

  try {

    const data =
      localStorage.getItem(
        STORAGE_KEY
      );

    const parsed =
      JSON.parse(
        data || "[]"
      );

    return Array.isArray(parsed)
      ? parsed
      : [];

  } catch (error) {

    return [];

  }
}


/* =========================================================
   16. SAUVEGARDE DU RÉSULTAT
========================================================= */

function saveResult() {

  const records =
    readProgress();

  /*
   * Une même personne peut avoir
   * plusieurs défis différents.
   *
   * La clé contient donc :
   * examen + série + pseudo + matière + chapitre
   */

  const key =
    [
      state.exam,
      state.series || "commun",
      state.player,
      state.subject,
      state.chapter
    ].join("|");

  const result = {

    key,

    player:
      state.player,

    exam:
      state.exam,

    series:
      state.series || "",

    subject:
      state.subject,

    chapter:
      state.chapter,

    score:
      state.score,

    total:
      state.questions.length,

    date:
      new Date().toISOString()

  };

  const previous =
    records.find(
      (record) =>
        record.key === key
    );

  if (previous) {

    /*
     * On conserve le meilleur score.
     */

    if (
      Number(result.score) >
      Number(previous.score)
    ) {

      previous.score =
        result.score;

      previous.total =
        result.total;

      previous.date =
        result.date;

    }

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
      "Impossible de sauvegarder le résultat.",
      error
    );

  }

  state.lastResult =
    result;
}


/* =========================================================
   17. NORMALISATION DES MATIÈRES
========================================================= */

function normalizeSubjectForQuestions(
  subject
) {

  if (!subject) {
    return null;
  }

  const aliases = {

    "Physique-Chimie":
      "Physique-Chimie",

    "Physique-chimie":
      "Physique-Chimie",

    "Histoire-Géographie":
      "Histoire-Géographie",

    "Histoire-géographie":
      "Histoire-Géographie",

    "Éducation Civique et Morale":
      "Éducation Civique et Morale"

  };

  return (
    aliases[subject] ||
    subject
  );
}


/* =========================================================
   18. QUESTIONS DU DÉFI
========================================================= */

function getQuestionsForChapter() {

  const subject =
    normalizeSubjectForQuestions(
      state.subject
    );

  const bank =
    questionBank[subject];

  if (
    Array.isArray(bank) &&
    bank.length
  ) {

    /*
     * Copie indépendante des questions.
     */

    return bank.map(
      (item) => ({
        ...item,
        answers: [
          ...item.answers
        ]
      })
    );

  }

  /*
   * Si aucune banque n'existe
   * encore pour la matière,
   * on utilise un défi générique.
   */

  return [

    {
      question:
        `Le chapitre « ${state.chapter} » appartient à quelle matière ?`,

      answers: [

        state.subject,
        "Sport",
        "Musique",
        "Informatique"

      ],

      correct: 0,

      explanation:
        `Ce défi appartient à la matière ${state.subject}.`

    },

    {
      question:
        "Quelle est la meilleure manière de progresser ?",

      answers: [

        "S'entraîner et comprendre ses erreurs",
        "Répondre au hasard",
        "Ne jamais vérifier ses réponses",
        "Abandonner après une erreur"

      ],

      correct: 0,

      explanation:
        "L'entraînement et l'analyse des erreurs permettent de progresser."

    }

  ];
}


/* =========================================================
   19. DÉMARRER LE DÉFI
========================================================= */

function startQuiz() {

  const player =
    getPlayerName();

  if (!player) {
    return;
  }

  if (
    !state.exam ||
    !state.subject ||
    !state.chapter
  ) {

    window.alert(
      "Choisis d'abord un examen, une matière et un chapitre."
    );

    return;

  }

  stopTimer();

  state.player =
    player;

  state.questions =
    getQuestionsForChapter();

  state.questionIndex =
    0;

  state.score =
    0;

  state.answered =
    false;

  state.timeLeft =
    QUESTION_TIME;

  if ($("quizScore")) {

    $("quizScore").textContent =
      "Points : 0";

  }

  if ($("answerFeedback")) {

    $("answerFeedback")
      .textContent = "";

  }

  if ($("nextQuestion")) {

    $("nextQuestion")
      .classList
      .add("hidden");

  }

  if ($("finishQuiz")) {

    $("finishQuiz")
      .classList
      .add("hidden");

  }

  /*
   * On met directement le titre
   * du chapitre dans l'écran du défi
   * si l'élément existe.
   */

  if ($("quizTitle")) {

    $("quizTitle").textContent =
      `Défi — ${state.chapter}`;

  }

  showSection(
    "quizSection"
  );

  displayQuestion();
}


/* =========================================================
   20. CHRONOMÈTRE
========================================================= */

function stopTimer() {

  if (
    state.timer !== null
  ) {

    clearInterval(
      state.timer
    );

    state.timer =
      null;

  }
}


function startTimer() {

  stopTimer();

  state.timeLeft =
    QUESTION_TIME;

  updateTimerLabel();

  state.timer =
    setInterval(() => {

      state.timeLeft -= 1;

      updateTimerLabel();

      if (
        state.timeLeft <= 0
      ) {

        stopTimer();

        if (
          !state.answered
        ) {

          selectAnswer(
            -1,
            true
          );

        }

      }

    }, 1000);
}


function updateTimerLabel() {

  const total =
    state.questions.length;

  const progress =
    $("quizProgress");

  if (!progress) {
    return;
  }

  progress.textContent =
    `Question ${state.questionIndex + 1} / ${total} · ${state.timeLeft}s`;
}


/* =========================================================
   21. AFFICHAGE QUESTION
========================================================= */

function displayQuestion() {

  const question =
    state.questions[
      state.questionIndex
    ];

  if (!question) {

    finishQuiz();

    return;

  }

  state.answered =
    false;

  if ($("questionText")) {

    $("questionText")
      .textContent =
      question.question;

  }

  if ($("answerFeedback")) {

    $("answerFeedback")
      .textContent = "";

  }

  if ($("nextQuestion")) {

    $("nextQuestion")
      .classList
      .add("hidden");

  }

  if ($("finishQuiz")) {

    $("finishQuiz")
      .classList
      .add("hidden");

  }

  const list =
    $("answersList");

  if (!list) {
    return;
  }

  list.replaceChildren();

  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.type =
        "button";

      button.className =
        "answer-option";

      button.textContent =
        `${String.fromCharCode(65 + index)}. ${answer}`;

      button.addEventListener(
        "click",
        () =>
          selectAnswer(
            index,
            false
          )
      );

      list.appendChild(
        button
      );

    }
  );

  if ($("quizScore")) {

    $("quizScore")
      .textContent =
      `Points : ${state.score}`;

  }

  if ($("progressBar")) {

    $("progressBar")
      .style.width =
      `${(state.questionIndex / state.questions.length) * 100}%`;

  }

  startTimer();
}


/* =========================================================
   22. RÉPONSE
========================================================= */

function selectAnswer(
  selectedIndex,
  timedOut
) {

  if (state.answered) {
    return;
  }

  state.answered =
    true;

  stopTimer();

  const question =
    state.questions[
      state.questionIndex
    ];

  const correct =
    selectedIndex ===
    question.correct;

  const buttons =
    $("answersList")
      ?.querySelectorAll(
        "button"
      ) || [];

  buttons.forEach(
    (button, index) => {

      button.disabled =
        true;

      if (
        index ===
        question.correct
      ) {

        button.classList
          .add("correct");

      }

      else if (
        index === selectedIndex &&
        !correct
      ) {

        button.classList
          .add("incorrect");

      }

    }
  );


  if (correct) {

    state.score +=
      POINTS_PER_CORRECT;

    if ($("answerFeedback")) {

      $("answerFeedback")
        .textContent =
        `Bonne réponse ! +${POINTS_PER_CORRECT} point. ${question.explanation}`;

    }

  } else {

    if ($("answerFeedback")) {

      $("answerFeedback")
        .textContent =
        `${timedOut ? "Temps écoulé." : "Mauvaise réponse."} ${question.explanation}`;

    }

  }


  if ($("quizScore")) {

    $("quizScore")
      .textContent =
      `Points : ${state.score}`;

  }


  if ($("progressBar")) {

    $("progressBar")
      .style.width =
      `${((state.questionIndex + 1) / state.questions.length) * 100}%`;

  }


  if (
    state.questionIndex ===
    state.questions.length - 1
  ) {

    if ($("finishQuiz")) {

      $("finishQuiz")
        .classList
        .remove("hidden");

    }

  } else {

    if ($("nextQuestion")) {

      $("nextQuestion")
        .classList
        .remove("hidden");

    }

  }

}


/* =========================================================
   23. QUESTION SUIVANTE
========================================================= */

function nextQuestion() {

  if (!state.answered) {
    return;
  }

  state.questionIndex +=
    1;

  displayQuestion();
}


/* =========================================================
   24. FIN DU DÉFI
========================================================= */

function finishQuiz() {

  stopTimer();

  if (
    !state.questions.length
  ) {

    return;

  }

  saveResult();

  const total =
    state.questions.length;

  const correctAnswers =
    state.score /
    POINTS_PER_CORRECT;

  if ($("resultSummary")) {

    $("resultSummary")
      .textContent =
      `${state.player}, tu as obtenu ${state.score} point${state.score > 1 ? "s" : ""} sur ${total}. ` +
      `Réponses correctes : ${correctAnswers} sur ${total}.`;

  }

  showSection(
    "resultsSection"
  );
}


/* =========================================================
   25. CLASSEMENT LOCAL
   TEMPORAIRE
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
      .sort(
        (a, b) =>
          Number(b.score || 0) -
          Number(a.score || 0)
      )
      .slice(0, 20);

  if (!records.length) {

    const empty =
      document.createElement(
        "p"
      );

    empty.textContent =
      "Aucun défi réalisé pour le moment.";

    list.appendChild(
      empty
    );

    return;

  }

  records.forEach(
    (record, index) => {

      const row =
        document.createElement(
          "div"
        );

      row.className =
        "chapter-card";

      const info =
        document.createElement(
          "span"
        );

      const name =
        document.createElement(
          "strong"
        );

      const detail =
        document.createElement(
          "small"
        );

      name.textContent =
        `${index + 1}. ${record.player}`;

      detail.textContent =
        `${record.exam}` +
        `${
          record.series
            ? " — Série " +
              record.series
            : ""
        }` +
        ` · ${record.subject}` +
        ` · ${record.chapter}`;

      const score =
        document.createElement(
          "strong"
        );

      score.textContent =
        `${record.score}/${record.total}`;

      info.append(
        name,
        detail
      );

      row.append(
        info,
        score
      );

      list.appendChild(
        row
      );

    }
  );
}


function openLeaderboard() {

  stopTimer();

  renderLeaderboard();

  showSection(
    "leaderboardSection"
  );
}


/* =========================================================
   26. ÉVÉNEMENTS
========================================================= */

function setupEvents() {

  const bepcButton =
    $("bepcButton");

  if (bepcButton) {

    bepcButton.addEventListener(
      "click",
      () =>
        chooseExam("BEPC")
    );

  }


  const bacButton =
    $("bacButton");

  if (bacButton) {

    bacButton.addEventListener(
      "click",
      () =>
        chooseExam("BAC")
    );

  }


  document
    .querySelectorAll(
      ".series-card"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () =>
            chooseSeries(
              button.dataset.series
            )
        );

      }
    );


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

        if (
          state.exam === "BAC"
        ) {

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


  /*
   * L'ancien bouton "Réviser le cours"
   * n'a volontairement plus aucune action.
   *
   * Si index.html le contient encore,
   * il ne sera simplement pas utilisé.
   */

  const revisionButton =
    $("revisionButton");

  if (revisionButton) {

    revisionButton.classList
      .add("hidden");

  }


  /*
   * Bouton DÉFI
   */

  const challengeButton =
    $("challengeButton");

  if (challengeButton) {

    challengeButton.addEventListener(
      "click",
      startQuiz
    );

  }


  /*
   * Question suivante
   */

  const nextQuestionButton =
    $("nextQuestion");

  if (nextQuestionButton) {

    nextQuestionButton.addEventListener(
      "click",
      nextQuestion
    );

  }


  /*
   * Terminer
   */

  const finishQuizButton =
    $("finishQuiz");

  if (finishQuizButton) {

    finishQuizButton.addEventListener(
      "click",
      finishQuiz
    );

  }


  /*
   * Rejouer
   */

  const retryButton =
    $("retryButton");

  if (retryButton) {

    retryButton.addEventListener(
      "click",
      startQuiz
    );

  }


  /*
   * Accueil depuis résultats
   */

  const resultsHomeButton =
    $("resultsHomeButton");

  if (resultsHomeButton) {

    resultsHomeButton.addEventListener(
      "click",
      goHome
    );

  }


  /*
   * Accueil
   */

  const homeButton =
    $("homeButton");

  if (homeButton) {

    homeButton.addEventListener(
      "click",
      goHome
    );

  }


  /*
   * Classement
   */

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


  /*
   * À propos
   */

  const aboutButton =
    $("aboutButton");

  if (aboutButton) {

    aboutButton.addEventListener(
      "click",
      () =>
        showSection(
          "aboutSection"
        )
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


  /*
   * Menu
   */

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
   27. INITIALISATION
========================================================= */

function initializeApp() {

  document.title =
    APP_NAME;

  setupEvents();

  showSection(
    "selection"
  );

  console.info(
    `${APP_NAME} initialisé — Créé par ${CREATOR}`
  );

}


initializeApp();
