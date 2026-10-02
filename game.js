/* =========================================================
   RÉUSSITE ACADÉMIE
   game.js
   Navigation + défis
   Créé par Belfort
   ========================================================= */
"use strict";
/* =========================================================
   ÉTAT DU JEU
   ========================================================= */
const state = {
  exam: null,
  series: null,
  subject: null,
  chapter: null,
  questions: [],
  currentQuestion: 0,
  score: 0,
  answered: false
};
/* =========================================================
   OUTILS DOM
   ========================================================= */
const $ = (id) => document.getElementById(id);
const sections = [
  "home",
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
function showSection(id) {
  sections.forEach((sectionId) => {
    const section = $(sectionId);
    if (section) {
      section.classList.toggle("hidden", sectionId !== id);
    }
  });
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
/* =========================================================
   PROGRAMME
   ========================================================= */
function getProgramme() {
  if (!window.RA_PROGRAMME) {
    console.error("RA_PROGRAMME est introuvable.");
    return null;
  }
  return window.RA_PROGRAMME;
}
/* =========================================================
   INITIALISATION
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------------------
     Boutons principaux
     ------------------------------------------------------- */
  $("bepcButton")?.addEventListener("click", () => {
    startExam("BEPC");
  });
  $("bacButton")?.addEventListener("click", () => {
    startExam("BAC");
  });
  /* -------------------------------------------------------
     Retour
     ------------------------------------------------------- */
  $("backToExams")?.addEventListener("click", () => {
    showSection("selection");
  });
  $("backToSeries")?.addEventListener("click", () => {
    showSection("seriesSection");
  });
  $("backToSubjects")?.addEventListener("click", () => {
    if (state.exam === "BAC") {
      showSubjects(state.series);
    } else {
      showSubjects();
    }
  });
  $("backToChapters")?.addEventListener("click", () => {
    showChapters();
  });
  /* -------------------------------------------------------
     Séries
     ------------------------------------------------------- */
  document.querySelectorAll(".series-card").forEach((button) => {
    button.addEventListener("click", () => {
      const series = button.dataset.series;
      if (!series) return;
      state.series = series;
      showSubjects(series);
    });
  });
  /* -------------------------------------------------------
     ANCIEN MODE RÉVISION
     -------------------------------------------------------
     On ne l'utilise plus.
     On cache les anciens boutons :
     - Réviser le cours
     - Faire un défi
     Le chapitre ouvre directement le défi.
     ------------------------------------------------------- */
  disableOldRevisionInterface();
  /* -------------------------------------------------------
     Résultats
     ------------------------------------------------------- */
  $("retryButton")?.addEventListener("click", () => {
    if (!state.chapter) return;
    startQuiz();
  });
  $("resultsHomeButton")?.addEventListener("click", () => {
    resetState();
    showSection("selection");
  });
  /* -------------------------------------------------------
     Navigation bas de page
     ------------------------------------------------------- */
  $("homeButton")?.addEventListener("click", () => {
    resetState();
    showSection("selection");
  });
  $("leaderboardButton")?.addEventListener("click", () => {
    showLeaderboard();
  });
  $("leaderboardHomeButton")?.addEventListener("click", () => {
    showSection("selection");
  });
  $("aboutButton")?.addEventListener("click", () => {
    showSection("aboutSection");
  });
  $("aboutHomeButton")?.addEventListener("click", () => {
    showSection("selection");
  });
  /* -------------------------------------------------------
     Quiz
     ------------------------------------------------------- */
  $("nextQuestion")?.addEventListener("click", () => {
    nextQuestion();
  });
  $("finishQuiz")?.addEventListener("click", () => {
    finishQuiz();
  });
  /* -------------------------------------------------------
     État initial
     ------------------------------------------------------- */
  showSection("selection");
});
/* =========================================================
   SUPPRESSION DE L'ANCIEN SYSTÈME DE RÉVISION
   ========================================================= */
function disableOldRevisionInterface() {
  const revisionButton = $("revisionButton");
  const challengeButton = $("challengeButton");
  const lessonContent = $("lessonContent");
  /*
   * On supprime complètement le contenu du cours.
   */
  if (lessonContent) {
    lessonContent.innerHTML = "";
    lessonContent.style.display = "none";
  }
  /*
   * L'ancien bouton "Réviser le cours" disparaît.
   */
  if (revisionButton) {
    revisionButton.style.display = "none";
  }
  /*
   * L'ancien bouton "Faire un défi" disparaît aussi.
   * Le chapitre lancera directement le défi.
   */
  if (challengeButton) {
    challengeButton.style.display = "none";
  }
  /*
   * On supprime l'ancien mode-grid visuellement.
   */
  const modeGrid = document.querySelector(".mode-grid");
  if (modeGrid) {
    modeGrid.style.display = "none";
  }
}
/* =========================================================
   EXAMEN
   ========================================================= */
function startExam(exam) {
  state.exam = exam;
  state.series = null;
  state.subject = null;
  state.chapter = null;
  if (exam === "BAC") {
    showSection("seriesSection");
    return;
  }
  if (exam === "BEPC") {
    showSubjects();
    return;
  }
}
/* =========================================================
   MATIÈRES
   ========================================================= */
function showSubjects(series = null) {
  const programme = getProgramme();
  if (!programme) return;
  const subjectsList = $("subjectsList");
  if (!subjectsList) return;
  subjectsList.innerHTML = "";
  let subjects = [];
  /* -------------------------------------------------------
     BEPC
     ------------------------------------------------------- */
  if (state.exam === "BEPC") {
    subjects = window.RA_PROGRAMME_UTILS
      ? window.RA_PROGRAMME_UTILS.getBEPCSubjects()
      : Object.keys(programme.BEPC.matieres || {});
  }
  /* -------------------------------------------------------
     BAC
     ------------------------------------------------------- */
  if (state.exam === "BAC") {
    const selectedSeries = series || state.series;
    if (!selectedSeries) {
      showSection("seriesSection");
      return;
    }
    subjects = window.RA_PROGRAMME_UTILS
      ? window.RA_PROGRAMME_UTILS.getBACSubjects(selectedSeries)
      : Object.keys(
          programme.BAC.series[selectedSeries]?.matieres || {}
        );
  }
  $("subjectsTitle").textContent =
    state.exam === "BAC"
      ? `Matières — Série ${state.series}`
      : "Matières — BEPC";
  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "subject-card";
    button.innerHTML = `
      <span class="card-icon">📚</span>
      <span class="card-title">${escapeHTML(subject)}</span>
      <span class="card-action">Voir les chapitres →</span>
    `;
    button.addEventListener("click", () => {
      state.subject = subject;
      showChapters();
    });
    subjectsList.appendChild(button);
  });
  showSection("subjectsSection");
}
/* =========================================================
   CHAPITRES
   ========================================================= */
function showChapters() {
  const programme = getProgramme();
  if (!programme || !state.subject) return;
  const chaptersList = $("chaptersList");
  if (!chaptersList) return;
  chaptersList.innerHTML = "";
  let chapters = [];
  /* -------------------------------------------------------
     BEPC
     ------------------------------------------------------- */
  if (state.exam === "BEPC") {
    chapters = window.RA_PROGRAMME_UTILS
      ? window.RA_PROGRAMME_UTILS.getBEPCChapters(state.subject)
      : programme.BEPC.matieres[state.subject] || [];
  }
  /* -------------------------------------------------------
     BAC
     ------------------------------------------------------- */
  if (state.exam === "BAC") {
    chapters = window.RA_PROGRAMME_UTILS
      ? window.RA_PROGRAMME_UTILS.getBACChapters(
          state.series,
          state.subject
        )
      : programme.BAC.series[state.series]
          ?.matieres?.[state.subject] || [];
  }
  $("chaptersTitle").textContent =
    `${state.subject} — Chapitres`;
  if (!chapters.length) {
    chaptersList.innerHTML = `
      <div class="empty-message">
        Aucun chapitre disponible pour cette matière.
      </div>
    `;
    showSection("chaptersSection");
    return;
  }
  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-card";
    button.innerHTML = `
      <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="chapter-info">
        <strong>${escapeHTML(chapter)}</strong>
        <small>Défi disponible →</small>
      </span>
      <span class="chapter-arrow">→</span>
    `;
    button.addEventListener("click", () => {
      chooseChapter(chapter);
    });
    chaptersList.appendChild(button);
  });
  showSection("chaptersSection");
}
/* =========================================================
   CHOIX D'UN CHAPITRE
   ========================================================= */
function chooseChapter(chapter) {
  state.chapter = chapter;
  /*
   * IMPORTANT :
   *
   * Il n'y a plus d'écran :
   * "Réviser le cours"
   *
   * Le chapitre lance directement le défi.
   */
  startQuiz();
}
/* =========================================================
   QUESTIONS
   ========================================================= */
/*
 * Structure :
 *
 * questionBank[EXAM][SERIE][MATIERE][CHAPITRE]
 *
 * Pour le moment, les quelques questions ci-dessous
 * servent de base de fonctionnement.
 *
 * Nous pourrons ensuite remplir CHAQUE chapitre
 * avec ses propres QCM.
 */
const questionBank = {
  BEPC: {
    "Mathématiques": {
      "Calcul numérique": [
        {
          question: "Combien vaut 25 + 17 ?",
          answers: ["32", "42", "52", "62"],
          correct: 1,
          explanation: "25 + 17 = 42."
        },
        {
          question: "Combien vaut 8 × 7 ?",
          answers: ["54", "56", "64", "72"],
          correct: 1,
          explanation: "8 × 7 = 56."
        },
        {
          question: "Combien vaut 100 ÷ 4 ?",
          answers: ["20", "25", "30", "40"],
          correct: 1,
          explanation: "100 ÷ 4 = 25."
        }
      ],
      "Calcul littéral": [
        {
          question: "Réduis : 3x + 2x.",
          answers: ["5", "5x", "6x", "x"],
          correct: 1,
          explanation: "3x + 2x = 5x."
        },
        {
          question: "Dans 7x, quel est le coefficient de x ?",
          answers: ["0", "1", "7", "x"],
          correct: 2,
          explanation: "Le coefficient de x est 7."
        }
      ],
      "Équations et inéquations": [
        {
          question: "Résous : x + 5 = 12.",
          answers: ["5", "6", "7", "8"],
          correct: 2,
          explanation: "x = 12 − 5 = 7."
        }
      ]
    },
    "Français": {
      "Grammaire et analyse de la phrase": [
        {
          question: "Dans « Les élèves travaillent », quel est le sujet ?",
          answers: [
            "Les",
            "élèves",
            "travaillent",
            "Les élèves travaillent"
          ],
          correct: 1,
          explanation: "Le groupe sujet est « Les élèves »."
        }
      ],
      "Conjugaison et concordance des temps": [
        {
          question: "Quel est le temps du verbe dans « Il avait travaillé » ?",
          answers: [
            "Présent",
            "Passé composé",
            "Plus-que-parfait",
            "Futur antérieur"
          ],
          correct: 2,
          explanation: "« Avait travaillé » est au plus-que-parfait."
        }
      ]
    },
    "SVT": {
      "Reproduction humaine": [
        {
          question: "Quel organe produit principalement les spermatozoïdes ?",
          answers: [
            "Les ovaires",
            "Les testicules",
            "L'utérus",
            "La prostate"
          ],
          correct: 1,
          explanation: "Les spermatozoïdes sont produits dans les testicules."
        }
      ]
    },
    "Physique-Chimie": {
      "Masse et poids": [
        {
          question: "Quelle est l'unité du poids dans le Système international ?",
          answers: [
            "Le kilogramme",
            "Le gramme",
            "Le newton",
            "Le joule"
          ],
          correct: 2,
          explanation: "Le poids est une force et s'exprime en newtons (N)."
        }
      ]
    }
  },
  BAC: {
    A: {
      "Français": {
        "La dissertation littéraire": [
          {
            question: "Quel est l'objectif principal d'une dissertation littéraire ?",
            answers: [
              "Raconter une histoire",
              "Développer une réflexion argumentée",
              "Résumer uniquement un texte",
              "Décrire un personnage"
            ],
            correct: 1,
            explanation: "La dissertation développe une réflexion organisée et argumentée."
          }
        ]
      },
      "Philosophie": {
        "La conscience": [
          {
            question: "La conscience peut-elle être définie comme une connaissance de soi ?",
            answers: [
              "Oui, uniquement",
              "Non, jamais",
              "Elle implique notamment une connaissance de soi",
              "Elle concerne seulement le monde extérieur"
            ],
            correct: 2,
            explanation: "La conscience implique notamment la capacité à se représenter soi-même."
          }
        ]
      }
    },
    B: {
      "Mathématiques": {
        "Suites numériques": [
          {
            question: "Une suite arithmétique de premier terme 3 et de raison 2 a pour deuxième terme :",
            answers: ["4", "5", "6", "7"],
            correct: 1,
            explanation: "u₂ = 3 + 2 = 5."
          }
        ]
      }
    },
    C: {
      "Mathématiques": {
        "Dérivation": [
          {
            question: "Quelle est la dérivée de f(x) = x² ?",
            answers: [
              "x",
              "2x",
              "x²",
              "2"
            ],
            correct: 1,
            explanation: "La dérivée de x² est 2x."
          }
        ]
      }
    },
    D: {
      "Mathématiques": {
        "Limites et continuité": [
          {
            question: "Quelle est la limite de 1/x lorsque x tend vers +∞ ?",
            answers: [
              "0",
              "1",
              "+∞",
              "-∞"
            ],
            correct: 0,
            explanation: "Lorsque x devient très grand, 1/x tend vers 0."
          }
        ]
      }
    }
  }
};
/* =========================================================
   RÉCUPÉRER LES QUESTIONS DU CHAPITRE
   ========================================================= */
function getQuestionsForChapter() {
  let questions = [];
  /*
   * BEPC
   */
  if (state.exam === "BEPC") {
    questions =
      questionBank.BEPC
        ?. [state.subject]
        ?. [state.chapter]
      || [];
  }
  /*
   * BAC
   */
  if (state.exam === "BAC") {
    questions =
      questionBank.BAC
        ?. [state.series]
        ?. [state.subject]
        ?. [state.chapter]
      || [];
  }
  /*
   * Si le chapitre n'a pas encore de questions,
   * on utilise une question temporaire.
   *
   * Cela évite que le bouton du chapitre soit cassé.
   */
  if (!questions.length) {
    questions = [
      {
        question:
          `Le défi du chapitre « ${state.chapter} » sera bientôt disponible.`,
        answers: [
          "Continuer",
          "Revenir aux chapitres",
          "Choisir une autre matière",
          "Quitter"
        ],
        correct: 0,
        explanation:
          "Les questions spécifiques de ce chapitre seront ajoutées progressivement."
      }
    ];
  }
  return questions;
}
/* =========================================================
   DÉMARRER LE DÉFI
   ========================================================= */
function startQuiz() {
  state.questions = getQuestionsForChapter();
  state.currentQuestion = 0;
  state.score = 0;
  state.answered = false;
  if ($("quizTitle")) {
    $("quizTitle").textContent =
      state.chapter
        ? `DÉFI — ${state.chapter}`
        : "DÉFI";
  }
  $("quizScore").textContent = "Points : 0";
  showSection("quizSection");
  renderQuestion();
}
/* =========================================================
   AFFICHER UNE QUESTION
   ========================================================= */
function renderQuestion() {
  const questions = state.questions;
  if (!questions.length) {
    finishQuiz();
    return;
  }
  const question =
    questions[state.currentQuestion];
  state.answered = false;
  $("quizProgress").textContent =
    `Question ${state.currentQuestion + 1} / ${questions.length}`;
  $("questionText").textContent =
    question.question;
  $("quizScore").textContent =
    `Points : ${state.score}`;
  $("progressBar").style.width =
    `${(state.currentQuestion / questions.length) * 100}%`;
  $("answerFeedback").textContent = "";
  $("nextQuestion").classList.add("hidden");
  $("finishQuiz").classList.add("hidden");
  const answersList = $("answersList");
  answersList.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent =
      `${String.fromCharCode(65 + index)}. ${answer}`;
    button.addEventListener("click", () => {
      selectAnswer(index);
    });
    answersList.appendChild(button);
  });
}
/* =========================================================
   RÉPONSE
   ========================================================= */
function selectAnswer(answerIndex) {
  if (state.answered) return;
  state.answered = true;
  const question =
    state.questions[state.currentQuestion];
  const buttons =
    [...$("answersList").querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
  });
  if (answerIndex === question.correct) {
    state.score++;
    buttons[answerIndex].classList.add("correct");
    $("answerFeedback").textContent =
      "✅ Bonne réponse !";
  } else {
    buttons[answerIndex].classList.add("wrong");
    buttons[question.correct].classList.add("correct");
    $("answerFeedback").textContent =
      "❌ Mauvaise réponse.";
  }
  $("quizScore").textContent =
    `Points : ${state.score}`;
  if (question.explanation) {
    $("answerFeedback").textContent +=
      ` ${question.explanation}`;
  }
  const lastQuestion =
    state.currentQuestion >=
    state.questions.length - 1;
  if (lastQuestion) {
    $("finishQuiz").classList.remove("hidden");
  } else {
    $("nextQuestion").classList.remove("hidden");
  }
}
/* =========================================================
   QUESTION SUIVANTE
   ========================================================= */
function nextQuestion() {
  if (!state.answered) return;
  state.currentQuestion++;
  renderQuestion();
}
/* =========================================================
   FIN DU DÉFI
   ========================================================= */
function finishQuiz() {
  const total =
    state.questions.length;
  const percentage =
    total > 0
      ? Math.round((state.score / total) * 100)
      : 0;
  $("resultSummary").innerHTML = `
    <strong>${escapeHTML(state.subject || "")}</strong><br>
    ${escapeHTML(state.chapter || "")}<br><br>
    🎯 Score : <strong>${state.score} / ${total}</strong><br>
    📊 Résultat : <strong>${percentage}%</strong>
  `;
  showSection("resultsSection");
}
/* =========================================================
   CLASSEMENT LOCAL
   ========================================================= */
function showLeaderboard() {
  const list = $("leaderboardList");
  if (!list) return;
  let scores = [];
  try {
    scores =
      JSON.parse(
        localStorage.getItem("raLeaderboard") || "[]"
      );
  } catch (error) {
    scores = [];
  }
  scores.sort((a, b) => b.score - a.score);
  if (!scores.length) {
    list.innerHTML = `
      <p class="section-intro">
        Aucun score enregistré pour le moment.
      </p>
    `;
    showSection("leaderboardSection");
    return;
  }
  list.innerHTML = scores
    .slice(0, 50)
    .map((item, index) => `
      <div class="leaderboard-row">
        <span>${index + 1}</span>
        <strong>
          ${escapeHTML(item.name)}
        </strong>
        <span>
          ${item.score} pts
        </span>
      </div>
    `)
    .join("");
  showSection("leaderboardSection");
}
/* =========================================================
   SAUVEGARDER UN SCORE
   ========================================================= */
function saveLocalScore() {
  const name =
    prompt("Entre ton prénom ou ton pseudo :");
  if (!name || !name.trim()) return;
  let scores = [];
  try {
    scores =
      JSON.parse(
        localStorage.getItem("raLeaderboard") || "[]"
      );
  } catch (error) {
    scores = [];
  }
  scores.push({
    name: name.trim(),
    score: state.score,
    exam: state.exam,
    series: state.series,
    subject: state.subject,
    chapter: state.chapter,
    date: Date.now()
  });
  localStorage.setItem(
    "raLeaderboard",
    JSON.stringify(scores)
  );
}
/* =========================================================
   RÉINITIALISER
   ========================================================= */
function resetState() {
  state.exam = null;
  state.series = null;
  state.subject = null;
  state.chapter = null;
  state.questions = [];
  state.currentQuestion = 0;
  state.score = 0;
  state.answered = false;
}
/* =========================================================
   SÉCURITÉ HTML
   ========================================================= */
function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
