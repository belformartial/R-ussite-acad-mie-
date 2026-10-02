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
    console.error(
      "❌ RA_PROGRAMME est introuvable."
    );
    return null;
  }
  return window.RA_PROGRAMME;
}
/* ======================================================
   BANQUE DE QUESTIONS
====================================================== */
function getQuestionBank() {
  if (!window.RA_QUESTIONS) {
    console.error(
      "❌ RA_QUESTIONS est introuvable."
    );
    console.error(
      "Vérifie que questions.js est chargé AVANT game.js."
    );
    return null;
  }
  return window.RA_QUESTIONS;
}
/* ======================================================
   INITIALISATION
====================================================== */
document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log(
      "✅ RÉUSSITE ACADÉMIE — game.js chargé."
    );
    console.log(
      "RA_PROGRAMME :",
      !!window.RA_PROGRAMME
    );
    console.log(
      "RA_QUESTIONS :",
      !!window.RA_QUESTIONS
    );
    /* ----------------------------------------------
       EXAMENS
    ---------------------------------------------- */
    $("bepcButton")?.addEventListener(
      "click",
      () => startExam("BEPC")
    );
    $("bacButton")?.addEventListener(
      "click",
      () => startExam("BAC")
    );
    /* ----------------------------------------------
       RETOURS
    ---------------------------------------------- */
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
    /* ----------------------------------------------
       SÉRIES BAC
    ---------------------------------------------- */
    document
      .querySelectorAll(".series-card")
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            const series =
              button.dataset.series;
            if (!series) {
              return;
            }
            state.series = series;
            showSubjects(series);
          }
        );
      });
    /* ----------------------------------------------
       ANCIEN SYSTÈME DE COURS
    ---------------------------------------------- */
    disableOldRevisionInterface();
    /* ----------------------------------------------
       RÉSULTATS
    ---------------------------------------------- */
    $("retryButton")?.addEventListener(
      "click",
      () => {
        if (!state.chapter) {
          return;
        }
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
    /* ----------------------------------------------
       NAVIGATION
    ---------------------------------------------- */
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
    /* ----------------------------------------------
       QUIZ
    ---------------------------------------------- */
    $("nextQuestion")?.addEventListener(
      "click",
      () => nextQuestion()
    );
    $("finishQuiz")?.addEventListener(
      "click",
      () => finishQuiz()
    );
    /* ----------------------------------------------
       ÉCRAN INITIAL
    ---------------------------------------------- */
    showSection("selection");
  }
);
/* ======================================================
   ANCIEN MODE RÉVISION
====================================================== */
function disableOldRevisionInterface() {
  const revisionButton =
    $("revisionButton");
  const challengeButton =
    $("challengeButton");
  const lessonContent =
    $("lessonContent");
  if (lessonContent) {
    lessonContent.innerHTML = "";
    lessonContent.style.display =
      "none";
  }
  if (revisionButton) {
    revisionButton.style.display =
      "none";
  }
  if (challengeButton) {
    challengeButton.style.display =
      "none";
  }
  const modeGrid =
    document.querySelector(
      ".mode-grid"
    );
  if (modeGrid) {
    modeGrid.style.display =
      "none";
  }
}
/* ======================================================
   CHOIX DE L'EXAMEN
====================================================== */
function startExam(exam) {
  console.log(
    "🎓 Examen sélectionné :",
    exam
  );
  state.exam = exam;
  state.series = null;
  state.subject = null;
  state.chapter = null;
  if (exam === "BAC") {
    showSection(
      "seriesSection"
    );
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
  const programme =
    getProgramme();
  if (!programme) {
    return;
  }
  const subjectsList =
    $("subjectsList");
  if (!subjectsList) {
    console.error(
      "❌ subjectsList introuvable."
    );
    return;
  }
  subjectsList.innerHTML = "";
  let subjects = [];
  /* ----------------------------------------------
     BEPC
  ---------------------------------------------- */
  if (state.exam === "BEPC") {
    if (
      window.RA_PROGRAMME_UTILS &&
      typeof window
        .RA_PROGRAMME_UTILS
        .getBEPCSubjects ===
        "function"
    ) {
      subjects =
        window
          .RA_PROGRAMME_UTILS
          .getBEPCSubjects();
    } else {
      subjects =
        Object.keys(
          programme.BEPC?.matieres || {}
        );
    }
  }
  /* ----------------------------------------------
     BAC
  ---------------------------------------------- */
  if (state.exam === "BAC") {
    const selectedSeries =
      series || state.series;
    if (!selectedSeries) {
      showSection(
        "seriesSection"
      );
      return;
    }
    state.series =
      selectedSeries;
    if (
      window.RA_PROGRAMME_UTILS &&
      typeof window
        .RA_PROGRAMME_UTILS
        .getBACSubjects ===
        "function"
    ) {
      subjects =
        window
          .RA_PROGRAMME_UTILS
          .getBACSubjects(
            selectedSeries
          );
    } else {
      subjects =
        Object.keys(
          programme.BAC
            ?.series
            ?.[
              selectedSeries
            ]
            ?.matieres || {}
        );
    }
  }
  console.log(
    "📚 Matières :",
    subjects
  );
  $("subjectsTitle").textContent =
    state.exam === "BAC"
      ? `Matières — Série ${state.series}`
      : "Matières — BEPC";
  subjects.forEach(
    (subject) => {
      const button =
        document.createElement(
          "button"
        );
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
          state.subject =
            subject;
          console.log(
            "📖 Matière sélectionnée :",
            subject
          );
          showChapters();
        }
      );
      subjectsList.appendChild(
        button
      );
    }
  );
  showSection(
    "subjectsSection"
  );
}
/* ======================================================
   CHAPITRES
====================================================== */
function showChapters() {
  const programme =
    getProgramme();
  if (
    !programme ||
    !state.subject
  ) {
    console.error(
      "❌ Impossible d'afficher les chapitres.",
      {
        programme: !!programme,
        subject: state.subject
      }
    );
    return;
  }
  const chaptersList =
    $("chaptersList");
  if (!chaptersList) {
    console.error(
      "❌ chaptersList introuvable."
    );
    return;
  }
  chaptersList.innerHTML = "";
  let chapters = [];
  /* ----------------------------------------------
     BEPC
  ---------------------------------------------- */
  if (state.exam === "BEPC") {
    if (
      window.RA_PROGRAMME_UTILS &&
      typeof window
        .RA_PROGRAMME_UTILS
        .getBEPCChapters ===
        "function"
    ) {
      chapters =
        window
          .RA_PROGRAMME_UTILS
          .getBEPCChapters(
            state.subject
          );
    } else {
      chapters =
        programme
          .BEPC
          ?.matieres
          ?.[state.subject] || [];
    }
  }
  /* ----------------------------------------------
     BAC
  ---------------------------------------------- */
  if (state.exam === "BAC") {
    if (
      window.RA_PROGRAMME_UTILS &&
      typeof window
        .RA_PROGRAMME_UTILS
        .getBACChapters ===
        "function"
    ) {
      chapters =
        window
          .RA_PROGRAMME_UTILS
          .getBACChapters(
            state.series,
            state.subject
          );
    } else {
      chapters =
        programme
          .BAC
          ?.series
          ?.[state.series]
          ?.matieres
          ?.[state.subject] || [];
    }
  }
  console.log(
    "📖 Chapitres trouvés :",
    chapters
  );
  $("chaptersTitle").textContent =
    `${state.subject} — Chapitres`;
  if (!chapters.length) {
    chaptersList.innerHTML = `
      <div class="empty-message">
        Aucun chapitre disponible
        pour cette matière.
      </div>
    `;
    showSection(
      "chaptersSection"
    );
    return;
  }
  chapters.forEach(
    (chapter, index) => {
      const button =
        document.createElement(
          "button"
        );
      button.type = "button";
      button.className =
        "chapter-card";
      button.innerHTML = `
        <span class="chapter-number">
          ${String(
            index + 1
          ).padStart(2, "0")}
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
        () => {
          console.log(
            "🟢 Chapitre sélectionné :",
            chapter
          );
          chooseChapter(
            chapter
          );
        }
      );
      chaptersList.appendChild(
        button
      );
    }
  );
  showSection(
    "chaptersSection"
  );
}
/* ======================================================
   CHOIX DU CHAPITRE
====================================================== */
function chooseChapter(
  chapter
) {
  state.chapter =
    chapter;
  console.log(
    "🎯 Défi demandé :",
    {
      exam: state.exam,
      series: state.series,
      subject: state.subject,
      chapter: state.chapter
    }
  );
  startQuiz();
}
/* ======================================================
   RÉCUPÉRER LES QUESTIONS
====================================================== */
function getQuestionsForChapter() {
  const questionBank =
    getQuestionBank();
  if (!questionBank) {
    return [];
  }
  let questions = [];
  /* ----------------------------------------------
     BEPC
  ---------------------------------------------- */
  if (state.exam === "BEPC") {
    questions =
      questionBank
        ?.BEPC
        ?.["Français"]
        ?.[state.chapter]
        || [];
    /*
      Pour les autres matières BEPC,
      on utilise la matière sélectionnée.
    */
    if (
      state.subject !==
      "Français"
    ) {
      questions =
        questionBank
          ?.BEPC
          ?.[state.subject]
          ?.[state.chapter]
          || [];
    }
  }
  /* ----------------------------------------------
     BAC
  ---------------------------------------------- */
  if (state.exam === "BAC") {
    questions =
      questionBank
        ?.BAC
        ?.[state.series]
        ?.[state.subject]
        ?.[state.chapter]
        || [];
  }
  console.log(
    "🔎 Recherche des questions :",
    {
      exam: state.exam,
      series: state.series,
      subject: state.subject,
      chapter: state.chapter
    }
  );
  console.log(
    "📝 Questions trouvées :",
    questions.length
  );
  /*
     Maximum 10 questions
  */
  return questions.slice(
    0,
    10
  );
}
/* ======================================================
   DÉMARRER LE DÉFI
====================================================== */
function startQuiz() {
  console.log(
    "🚀 Démarrage du défi..."
  );
  state.questions =
    getQuestionsForChapter();
  state.currentQuestion =
    0;
  state.score =
    0;
  state.answered =
    false;
  /* ----------------------------------------------
     AUCUNE QUESTION
  ---------------------------------------------- */
  if (
    !state.questions.length
  ) {
    console.error(
      "❌ Aucune question trouvée.",
      {
        exam: state.exam,
        series: state.series,
        subject: state.subject,
        chapter: state.chapter
      }
    );
    if ($("resultSummary")) {
      $("resultSummary").innerHTML = `
        <strong>
          Défi bientôt disponible
        </strong>
        <br><br>
        Aucune question n'a été trouvée
        pour :
        <br><br>
        <strong>
          ${escapeHTML(
            state.chapter || ""
          )}
        </strong>
      `;
    }
    showSection(
      "resultsSection"
    );
    return;
  }
  /* ----------------------------------------------
     TITRE
  ---------------------------------------------- */
  if ($("quizTitle")) {
    $("quizTitle").textContent =
      `DÉFI — ${state.chapter}`;
  }
  /* ----------------------------------------------
     SCORE
  ---------------------------------------------- */
  if ($("quizScore")) {
    $("quizScore").textContent =
      "Points : 0";
  }
  /* ----------------------------------------------
     AFFICHAGE QUIZ
  ---------------------------------------------- */
  showSection(
    "quizSection"
  );
  renderQuestion();
}
/* ======================================================
   AFFICHER LA QUESTION
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
  if (!question) {
    finishQuiz();
    return;
  }
  state.answered =
    false;
  /* ----------------------------------------------
     PROGRESSION
  ---------------------------------------------- */
  if ($("quizProgress")) {
    $("quizProgress").textContent =
      `Question ${
        state.currentQuestion + 1
      } / ${questions.length}`;
  }
  /* ----------------------------------------------
     QUESTION
  ---------------------------------------------- */
  if ($("questionText")) {
    $("questionText").textContent =
      question.question;
  }
  /* ----------------------------------------------
     SCORE
  ---------------------------------------------- */
  if ($("quizScore")) {
    $("quizScore").textContent =
      `Points : ${state.score}`;
  }
  /* ----------------------------------------------
     BARRE DE PROGRESSION
  ---------------------------------------------- */
  if ($("progressBar")) {
    $("progressBar").style.width =
      `${
        (
          state.currentQuestion /
          questions.length
        ) * 100
      }%`;
  }
  /* ----------------------------------------------
     FEEDBACK
  ---------------------------------------------- */
  if ($("answerFeedback")) {
    $("answerFeedback").textContent =
      "";
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
  /* ----------------------------------------------
     RÉPONSES
  ---------------------------------------------- */
  const answersList =
    $("answersList");
  if (!answersList) {
    console.error(
      "❌ answersList introuvable."
    );
    return;
  }
  answersList.innerHTML = "";
  if (
    !Array.isArray(
      question.answers
    )
  ) {
    console.error(
      "❌ Les réponses de la question sont invalides.",
      question
    );
    return;
  }
  question.answers.forEach(
    (answer, index) => {
      const button =
        document.createElement(
          "button"
        );
      button.type =
        "button";
      button.className =
        "answer-button";
      button.textContent =
        `${String.fromCharCode(
          65 + index
        )}. ${answer}`;
      button.addEventListener(
        "click",
        () => selectAnswer(
          index
        )
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
function selectAnswer(
  answerIndex
) {
  if (
    state.answered
  ) {
    return;
  }
  state.answered =
    true;
  const question =
    state.questions[
      state.currentQuestion
    ];
  if (!question) {
    return;
  }
  const answersList =
    $("answersList");
  if (!answersList) {
    return;
  }
  const buttons =
    [
      ...answersList
        .querySelectorAll(
          "button"
        )
    ];
  buttons.forEach(
    (button) => {
      button.disabled =
        true;
    }
  );
  /* ----------------------------------------------
     BONNE RÉPONSE
  ---------------------------------------------- */
  if (
    answerIndex ===
    question.correct
  ) {
    state.score++;
    buttons[
      answerIndex
    ]?.classList.add(
      "correct"
    );
    if ($("answerFeedback")) {
      $("answerFeedback").textContent =
        "✅ Bonne réponse !";
    }
  }
  /* ----------------------------------------------
     MAUVAISE RÉPONSE
  ---------------------------------------------- */
  else {
    buttons[
      answerIndex
    ]?.classList.add(
      "wrong"
    );
    buttons[
      question.correct
    ]?.classList.add(
      "correct"
    );
    if ($("answerFeedback")) {
      $("answerFeedback").textContent =
        "❌ Mauvaise réponse.";
    }
  }
  /* ----------------------------------------------
     EXPLICATION
  ---------------------------------------------- */
  if (
    question.explanation &&
    $("answerFeedback")
  ) {
    $("answerFeedback").textContent +=
      ` ${question.explanation}`;
  }
  /* ----------------------------------------------
     SCORE
  ---------------------------------------------- */
  if ($("quizScore")) {
    $("quizScore").textContent =
      `Points : ${state.score}`;
  }
  /* ----------------------------------------------
     FIN OU QUESTION SUIVANTE
  ---------------------------------------------- */
  const lastQuestion =
    state.currentQuestion >=
    state.questions.length - 1;
  if (lastQuestion) {
    $("finishQuiz")
      ?.classList
      .remove("hidden");
  } else {
    $("nextQuestion")
      ?.classList
      .remove("hidden");
  }
}
/* ======================================================
   QUESTION SUIVANTE
====================================================== */
function nextQuestion() {
  if (
    !state.answered
  ) {
    return;
  }
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
          (
            state.score /
            total
          ) * 100
        )
      : 0;
  if ($("resultSummary")) {
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
  }
  saveLocalScore();
  showSection(
    "resultsSection"
  );
}
/* ======================================================
   CLASSEMENT LOCAL
====================================================== */
function showLeaderboard() {
  const list =
    $("leaderboardList");
  if (!list) {
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
  let name =
    localStorage.getItem(
      "raPlayerName"
    );
  if (!name) {
    name =
      prompt(
        "Entre ton prénom ou ton pseudo :"
      );
    if (
      !name ||
      !name.trim()
    ) {
      return;
    }
    name =
      name.trim();
    localStorage.setItem(
      "raPlayerName",
      name
    );
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
  const newScore = {
    name,
    score: state.score,
    exam: state.exam,
    series: state.series,
    subject: state.subject,
    chapter: state.chapter,
    date: Date.now()
  };
  scores.push(
    newScore
  );
  localStorage.setItem(
    "raLeaderboard",
    JSON.stringify(
      scores
    )
  );
}
/* ======================================================
   RÉINITIALISATION
====================================================== */
function resetState() {
  state.exam =
    null;
  state.series =
    null;
  state.subject =
    null;
  state.chapter =
    null;
  state.questions =
    [];
  state.currentQuestion =
    0;
  state.score =
    0;
  state.answered =
    false;
}
/* ======================================================
   SÉCURITÉ HTML
====================================================== */
function escapeHTML(
  value
) {
  return String(
    value
  )
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
/* ======================================================
   FIN
====================================================== */
