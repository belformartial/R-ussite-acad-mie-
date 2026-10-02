/*
=========================================================
RÉUSSITE ACADÉMIE
game.js
Moteur principal des défis
Créé par Belfort
=========================================================
*/
"use strict";
/* ======================================================
   ÉTAT DU JEU
====================================================== */
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
/* ======================================================
   OUTILS
====================================================== */
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
      section.classList.toggle(
        "hidden",
        sectionId !== id
      );
    }
  });
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
/* ======================================================
   PROGRAMME
====================================================== */
function getProgramme() {
  if (!window.RA_PROGRAMME) {
    console.error("RA_PROGRAMME est introuvable.");
    return null;
  }
  return window.RA_PROGRAMME;
}
/* ======================================================
   INITIALISATION
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  $("bepcButton")?.addEventListener(
    "click",
    () => startExam("BEPC")
  );
  $("bacButton")?.addEventListener(
    "click",
    () => startExam("BAC")
  );
  $("backToExams")?.addEventListener(
    "click",
    () => showSection("selection")
  );
  $("backToSeries")?.addEventListener(
    "click",
    () => showSection("seriesSection")
  );
  $("backToSubjects")?.addEventListener(
    "click",
    () => {
      if (state.exam === "BAC") {
        showSubjects(state.series);
      } else {
        showSubjects();
      }
    }
  );
  $("backToChapters")?.addEventListener(
    "click",
    () => showChapters()
  );
  /* Séries BAC */
  document
    .querySelectorAll(".series-card")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const series = button.dataset.series;
        if (!series) return;
        state.series = series;
        showSubjects(series);
      });
    });
  /* Ancienne interface de cours */
  disableOldRevisionInterface();
  /* Résultats */
  $("retryButton")?.addEventListener(
    "click",
    () => {
      if (!state.chapter) return;
      startQuiz();
    }
  );
  $("resultsHomeButton")?.addEventListener(
    "click",
    () => {
      resetState();
      showSection("selection");
    }
  );
  /* Navigation */
  $("homeButton")?.addEventListener(
    "click",
    () => {
      resetState();
      showSection("selection");
    }
  );
  $("leaderboardButton")?.addEventListener(
    "click",
    () => showLeaderboard()
  );
  $("leaderboardHomeButton")?.addEventListener(
    "click",
    () => showSection("selection")
  );
  $("aboutButton")?.addEventListener(
    "click",
    () => showSection("aboutSection")
  );
  $("aboutHomeButton")?.addEventListener(
    "click",
    () => showSection("selection")
  );
  /* Questions */
  $("nextQuestion")?.addEventListener(
    "click",
    () => nextQuestion()
  );
  $("finishQuiz")?.addEventListener(
    "click",
    () => finishQuiz()
  );
  /* Écran initial */
  showSection("selection");
});
/* ======================================================
   DÉSACTIVER L'ANCIEN MODE RÉVISION
====================================================== */
function disableOldRevisionInterface() {
  const revisionButton = $("revisionButton");
  const challengeButton = $("challengeButton");
  const lessonContent = $("lessonContent");
  if (lessonContent) {
    lessonContent.innerHTML = "";
    lessonContent.style.display = "none";
  }
  if (revisionButton) {
    revisionButton.style.display = "none";
  }
  if (challengeButton) {
    challengeButton.style.display = "none";
  }
  const modeGrid = document.querySelector(".mode-grid");
  if (modeGrid) {
    modeGrid.style.display = "none";
  }
}
/* ======================================================
   CHOIX DE L'EXAMEN
====================================================== */
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
/* ======================================================
   MATIÈRES
====================================================== */
function showSubjects(series = null) {
  const programme = getProgramme();
  if (!programme) return;
  const subjectsList = $("subjectsList");
  if (!subjectsList) return;
  subjectsList.innerHTML = "";
  let subjects = [];
  /* BEPC */
  if (state.exam === "BEPC") {
    subjects =
      window.RA_PROGRAMME_UTILS
        ? window.RA_PROGRAMME_UTILS.getBEPCSubjects()
        : Object.keys(
            programme.BEPC?.matieres || {}
          );
  }
  /* BAC */
  if (state.exam === "BAC") {
    const selectedSeries =
      series || state.series;
    if (!selectedSeries) {
      showSection("seriesSection");
      return;
    }
    state.series = selectedSeries;
    subjects =
      window.RA_PROGRAMME_UTILS
        ? window.RA_PROGRAMME_UTILS.getBACSubjects(
            selectedSeries
          )
        : Object.keys(
            programme.BAC?.series?.[
              selectedSeries
            ]?.matieres || {}
          );
  }
  $("subjectsTitle").textContent =
    state.exam === "BAC"
      ? `Matières — Série ${state.series}`
      : "Matières — BEPC";
  subjects.forEach((subject) => {
    const button =
      document.createElement("button");
    button.type = "button";
    button.className =
      "subject-card";
    button.innerHTML = `
      <span class="card-icon">📚</span>
      <span class="card-title">
        ${escapeHTML(subject)}
      </span>
      <span class="card-action">
        Voir les chapitres →
      </span>
    `;
    button.addEventListener(
      "click",
      () => {
        state.subject = subject;
        showChapters();
      }
    );
    subjectsList.appendChild(button);
  });
  showSection("subjectsSection");
}
/* ======================================================
   CHAPITRES
====================================================== */
function showChapters() {
  const programme = getProgramme();
  if (!programme || !state.subject) return;
  const chaptersList =
    $("chaptersList");
  if (!chaptersList) return;
  chaptersList.innerHTML = "";
  let chapters = [];
  /* BEPC */
  if (state.exam === "BEPC") {
    chapters =
      window.RA_PROGRAMME_UTILS
        ? window.RA_PROGRAMME_UTILS.getBEPCChapters(
            state.subject
          )
        : programme.BEPC?.matieres?.[
            state.subject
          ] || [];
  }
  /* BAC */
  if (state.exam === "BAC") {
    chapters =
      window.RA_PROGRAMME_UTILS
        ? window.RA_PROGRAMME_UTILS.getBACChapters(
            state.series,
            state.subject
          )
        : programme.BAC?.series?.[
            state.series
          ]?.matieres?.[
            state.subject
          ] || [];
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
  chapters.forEach(
    (chapter, index) => {
      const button =
        document.createElement("button");
      button.type = "button";
      button.className =
        "chapter-card";
      button.innerHTML = `
        <span class="chapter-number">
          ${String(index + 1).padStart(2, "0")}
        </span>
        <span class="chapter-info">
          <strong>
            ${escapeHTML(chapter)}
          </strong>
          <small>
            Défi disponible →
          </small>
        </span>
        <span class="chapter-arrow">
          →
        </span>
      `;
      button.addEventListener(
        "click",
        () => chooseChapter(chapter)
      );
      chaptersList.appendChild(button);
    }
  );
  showSection("chaptersSection");
}
/* ======================================================
   CHOIX DU CHAPITRE
====================================================== */
function chooseChapter(chapter) {
  state.chapter = chapter;
  startQuiz();
}
/* ======================================================
   BANQUE DE QUESTIONS
====================================================== */
/*
   IMPORTANT :
   Toutes les questions viennent maintenant
   de questions.js.
   questions.js doit créer :
   window.RA_QUESTIONS
*/
function getQuestionsForChapter() {
  const questionBank =
    window.RA_QUESTIONS;
  if (!questionBank) {
    console.error(
      "RA_QUESTIONS est introuvable. Vérifie que questions.js est chargé avant game.js."
    );
    return [];
  }
  let questions = [];
  /* ==============================
     BEPC
  ============================== */
  if (state.exam === "BEPC") {
    questions =
      questionBank
        ?.BEPC
        ?. [state.subject]
        ?. [state.chapter]
      || [];
  }
  /* ==============================
     BAC
  ============================== */
  if (state.exam === "BAC") {
    questions =
      questionBank
        ?.BAC
        ?. [state.series]
        ?. [state.subject]
        ?. [state.chapter]
      || [];
  }
  /* ==============================
     VÉRIFICATION
  ============================== */
  if (!questions.length) {
    console.warn(
      "Aucune question trouvée pour :",
      state.exam,
      state.series,
      state.subject,
      state.chapter
    );
    return [];
  }
  /*
     RÈGLE :
     maximum 10 questions par défi.
  */
  return questions.slice(0, 10);
}
/* ======================================================
   DÉMARRER UN DÉFI
====================================================== */
function startQuiz() {
  state.questions =
    getQuestionsForChapter();
  state.currentQuestion = 0;
  state.score = 0;
  state.answered = false;
  /* Aucune question disponible */
  if (!state.questions.length) {
    $("resultSummary").innerHTML = `
      <strong>
        Défi bientôt disponible
      </strong>
      <br><br>
      Les questions de ce chapitre
      seront ajoutées prochainement.
    `;
    showSection("resultsSection");
    return;
  }
  if ($("quizTitle")) {
    $("quizTitle").textContent =
      state.chapter
        ? `DÉFI — ${state.chapter}`
        : "DÉFI";
  }
  $("quizScore").textContent =
    "Points : 0";
  showSection("quizSection");
  renderQuestion();
}
/* ======================================================
   AFFICHER UNE QUESTION
====================================================== */
function renderQuestion() {
  const questions =
    state.questions;
  if (!questions.length) {
    finishQuiz();
    return;
  }
  const question =
    questions[
      state.currentQuestion
    ];
  state.answered = false;
  $("quizProgress").textContent =
    `Question ${
      state.currentQuestion + 1
    } / ${questions.length}`;
  $("questionText").textContent =
    question.question;
  $("quizScore").textContent =
    `Points : ${state.score}`;
  $("progressBar").style.width =
    `${
      (state.currentQuestion /
        questions.length) *
      100
    }%`;
  $("answerFeedback").textContent =
    "";
  $("nextQuestion")
    .classList
    .add("hidden");
  $("finishQuiz")
    .classList
    .add("hidden");
  const answersList =
    $("answersList");
  answersList.innerHTML = "";
  question.answers.forEach(
    (answer, index) => {
      const button =
        document.createElement("button");
      button.type = "button";
      button.className =
        "answer-button";
      button.textContent =
        `${String.fromCharCode(
          65 + index
        )}. ${answer}`;
      button.addEventListener(
        "click",
        () => selectAnswer(index)
      );
      answersList.appendChild(
        button
      );
    }
  );
}
/* ======================================================
   RÉPONSE
====================================================== */
function selectAnswer(answerIndex) {
  if (state.answered) return;
  state.answered = true;
  const question =
    state.questions[
      state.currentQuestion
    ];
  const buttons =
    [
      ...$("answersList")
        .querySelectorAll("button")
    ];
  buttons.forEach(
    (button) => {
      button.disabled = true;
    }
  );
  /* Bonne réponse */
  if (
    answerIndex ===
    question.correct
  ) {
    state.score++;
    buttons[
      answerIndex
    ].classList.add("correct");
    $("answerFeedback").textContent =
      "✅ Bonne réponse !";
  }
  /* Mauvaise réponse */
  else {
    buttons[
      answerIndex
    ].classList.add("wrong");
    buttons[
      question.correct
    ].classList.add("correct");
    $("answerFeedback").textContent =
      "❌ Mauvaise réponse.";
  }
  $("quizScore").textContent =
    `Points : ${state.score}`;
  /* Explication */
  if (question.explanation) {
    $("answerFeedback").textContent +=
      ` ${question.explanation}`;
  }
  const lastQuestion =
    state.currentQuestion >=
    state.questions.length - 1;
  if (lastQuestion) {
    $("finishQuiz")
      .classList
      .remove("hidden");
  } else {
    $("nextQuestion")
      .classList
      .remove("hidden");
  }
}
/* ======================================================
   QUESTION SUIVANTE
====================================================== */
function nextQuestion() {
  if (!state.answered) return;
  state.currentQuestion++;
  renderQuestion();
}
/* ======================================================
   TERMINER LE DÉFI
====================================================== */
function finishQuiz() {
  const total =
    state.questions.length;
  const percentage =
    total > 0
      ? Math.round(
          (state.score / total) * 100
        )
      : 0;
  $("resultSummary").innerHTML = `
    <strong>
      ${escapeHTML(
        state.subject || ""
      )}
    </strong>
    <br>
    ${escapeHTML(
      state.chapter || ""
    )}
    <br><br>
    🎯 Score :
    <strong>
      ${state.score} / ${total}
    </strong>
    <br>
    📊 Résultat :
    <strong>
      ${percentage}%
    </strong>
  `;
  showSection("resultsSection");
}
/* ======================================================
   CLASSEMENT LOCAL
====================================================== */
function showLeaderboard() {
  const list =
    $("leaderboardList");
  if (!list) return;
  let scores = [];
  try {
    scores =
      JSON.parse(
        localStorage.getItem(
          "raLeaderboard"
        ) || "[]"
      );
  } catch (error) {
    scores = [];
  }
  scores.sort(
    (a, b) =>
      b.score - a.score
  );
  if (!scores.length) {
    list.innerHTML = `
      <p class="section-intro">
        Aucun score enregistré
        pour le moment.
      </p>
    `;
    showSection(
      "leaderboardSection"
    );
    return;
  }
  list.innerHTML =
    scores
      .slice(0, 50)
      .map(
        (item, index) => `
          <div class="leaderboard-row">
            <span>
              ${index + 1}
            </span>
            <strong>
              ${escapeHTML(
                item.name
              )}
            </strong>
            <span>
              ${item.score} pts
            </span>
          </div>
        `
      )
      .join("");
  showSection(
    "leaderboardSection"
  );
}
/* ======================================================
   ENREGISTRER UN SCORE LOCAL
====================================================== */
function saveLocalScore() {
  const name =
    prompt(
      "Entre ton prénom ou ton pseudo :"
    );
  if (
    !name ||
    !name.trim()
  ) {
    return;
  }
  let scores = [];
  try {
    scores =
      JSON.parse(
        localStorage.getItem(
          "raLeaderboard"
        ) || "[]"
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
/* ======================================================
   RÉINITIALISATION
====================================================== */
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
/* ======================================================
   SÉCURITÉ HTML
====================================================== */
function escapeHTML(value) {
  return String(value)
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}
