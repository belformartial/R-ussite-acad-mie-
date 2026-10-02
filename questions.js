/*
   =========================================================
   RÉUSSITE ACADÉMIE
   questions.js
   Banque de questions — BEPC
   Créé par Belfort
   =========================================================
*/
"use strict";
/*
 * =========================================================
 * BANQUE DE QUESTIONS
 * =========================================================
 *
 * Format compatible avec game.js :
 *
 * RA_QUESTIONS[EXAMEN][MATIÈRE][CHAPITRE]
 *
 * Chaque question contient :
 * - question
 * - answers
 * - correct
 * - explanation
 *
 * "correct" correspond à l'index de la bonne réponse :
 *
 * 0 = A
 * 1 = B
 * 2 = C
 * 3 = D
 */
window.RA_QUESTIONS = {
  /* =======================================================
     BEPC
     ======================================================= */
  BEPC: {
    /* =====================================================
       FRANÇAIS
       ===================================================== */
    "Français": {
      /* ===================================================
         LES PROPOSITIONS SUBORDONNÉES
         =================================================== */
      "Les propositions subordonnées": [
        {
          question:
            "Dans la phrase « Je pense que tu as raison », quelle est la proposition subordonnée ?",
          answers: [
            "Je pense",
            "que tu as raison",
            "Je pense que",
            "tu as raison"
          ],
          correct: 1,
          explanation:
            "La proposition « que tu as raison » dépend du verbe « pense » et est introduite par la conjonction « que »."
        },
        {
          question:
            "Quel mot introduit généralement une proposition subordonnée conjonctive complétive ?",
          answers: [
            "Qui",
            "Que",
            "Dont",
            "Lequel"
          ],
          correct: 1,
          explanation:
            "La proposition subordonnée conjonctive complétive est très souvent introduite par « que »."
        },
        {
          question:
            "Dans « L'élève qui travaille réussira », quelle est la nature de « qui travaille » ?",
          answers: [
            "Une proposition principale",
            "Une proposition subordonnée relative",
            "Une proposition indépendante",
            "Une proposition subordonnée circonstancielle"
          ],
          correct: 1,
          explanation:
            "« Qui travaille » complète le nom « élève » et est introduite par le pronom relatif « qui » : c'est une proposition subordonnée relative."
        },
        {
          question:
            "Dans « La fille que tu as rencontrée est ma sœur », quel est le pronom relatif ?",
          answers: [
            "La",
            "Tu",
            "Que",
            "Ma"
          ],
          correct: 2,
          explanation:
            "« Que » est le pronom relatif qui introduit la proposition « que tu as rencontrée »."
        },
        {
          question:
            "Dans « Lorsque la pluie cessera, nous sortirons », quelle est la proposition subordonnée ?",
          answers: [
            "Nous sortirons",
            "Lorsque la pluie cessera",
            "La pluie cessera",
            "Lorsque"
          ],
          correct: 1,
          explanation:
            "« Lorsque la pluie cessera » dépend de la proposition principale « nous sortirons » et indique le moment de l'action."
        },
        {
          question:
            "Dans « Il travaille parce qu'il veut réussir », quelle relation exprime « parce qu'il veut réussir » ?",
          answers: [
            "La cause",
            "La conséquence",
            "Le but",
            "La condition"
          ],
          correct: 0,
          explanation:
            "La conjonction « parce que » introduit une proposition subordonnée circonstancielle de cause."
        },
        {
          question:
            "Dans « Si tu travailles, tu réussiras », quelle relation exprime « Si tu travailles » ?",
          answers: [
            "La cause",
            "La condition",
            "La conséquence",
            "Le temps"
          ],
          correct: 1,
          explanation:
            "La conjonction « si » introduit ici une proposition subordonnée circonstancielle de condition."
        },
        {
          question:
            "Dans « Il travaille afin qu'il puisse réussir », quelle relation exprime « afin qu'il puisse réussir » ?",
          answers: [
            "La cause",
            "Le but",
            "La condition",
            "La comparaison"
          ],
          correct: 1,
          explanation:
            "« Afin que » introduit une proposition subordonnée circonstancielle de but."
        },
        {
          question:
            "Dans « Bien qu'il soit fatigué, il continue à travailler », quelle relation exprime « Bien qu'il soit fatigué » ?",
          answers: [
            "La cause",
            "Le but",
            "La concession",
            "La condition"
          ],
          correct: 2,
          explanation:
            "« Bien que » introduit une proposition subordonnée circonstancielle de concession."
        },
        {
          question:
            "Quelle proposition est une proposition subordonnée relative ?",
          answers: [
            "Parce qu'il pleut",
            "Quand il arrivera",
            "Qui habite ici",
            "Pour que tu réussisses"
          ],
          /* ===================================================
   GRAMMAIRE ET ANALYSE DE LA PHRASE
   =================================================== */
"Grammaire et analyse de la phrase": [
  {
    question: "Dans la phrase « Le professeur explique la leçon aux élèves », quel est le sujet du verbe « explique » ?",
    answers: [
      "La leçon",
      "Aux élèves",
      "Le professeur",
      "Explique"
    ],
    correct: 2,
    explanation: "« Le professeur » est celui qui fait l'action d'expliquer : c'est donc le sujet du verbe « explique »."
  },
  {
    question: "Dans « Marie lit un livre », quelle est la fonction de « un livre » ?",
    answers: [
      "Sujet",
      "Complément d'objet direct",
      "Complément d'objet indirect",
      "Attribut du sujet"
    ],
    correct: 1,
    explanation: "« Un livre » répond à la question « Marie lit quoi ? ». C'est donc un complément d'objet direct (COD)."
  },
  {
    question: "Dans « Paul parle à son frère », quelle est la fonction de « à son frère » ?",
    answers: [
      "COD",
      "Sujet",
      "COI",
      "Attribut"
    ],
    correct: 2,
    explanation: "« À son frère » complète le verbe « parle » avec la préposition « à ». C'est un complément d'objet indirect (COI)."
  },
  {
    question: "Quelle est la nature du mot « rapidement » dans « Il court rapidement » ?",
    answers: [
      "Nom",
      "Adjectif",
      "Adverbe",
      "Pronom"
    ],
    correct: 2,
    explanation: "« Rapidement » précise la manière dont il court. C'est un adverbe."
  },
  {
    question: "Dans « La petite fille porte une robe rouge », quelle est la fonction de « rouge » ?",
    answers: [
      "Sujet",
      "COD",
      "Épithète",
      "COI"
    ],
    correct: 2,
    explanation: "« Rouge » donne une précision sur le nom « robe ». Il est employé comme adjectif épithète."
  },
  {
    question: "Dans « Mon frère est médecin », quelle est la fonction de « médecin » ?",
    answers: [
      "COD",
      "Attribut du sujet",
      "COI",
      "Complément circonstanciel"
    ],
    correct: 1,
    explanation: "« Médecin » donne une information sur le sujet « mon frère » après le verbe d'état « est ». C'est un attribut du sujet."
  },
  {
    question: "Quelle phrase est une phrase interrogative ?",
    answers: [
      "Les élèves travaillent sérieusement.",
      "Comme ce paysage est magnifique !",
      "Est-ce que tu as terminé ton exercice ?",
      "Fermez vos livres."
    ],
    correct: 2,
    explanation: "La phrase « Est-ce que tu as terminé ton exercice ? » pose une question : c'est une phrase interrogative."
  },
  {
    question: "Dans « Lorsque la pluie tombe, les enfants restent à la maison », quelle est la proposition principale ?",
    answers: [
      "Lorsque la pluie tombe",
      "La pluie tombe",
      "Les enfants restent à la maison",
      "Lorsque les enfants restent"
    ],
    correct: 2,
    explanation: "« Les enfants restent à la maison » peut fonctionner seule : c'est la proposition principale."
  },
  {
    question: "Dans « Le garçon qui porte une chemise bleue est mon cousin », quelle est la nature de « qui porte une chemise bleue » ?",
    answers: [
      "Une proposition subordonnée relative",
      "Une proposition principale",
      "Une proposition indépendante",
      "Un groupe nominal"
    ],
    correct: 0,
    explanation: "La proposition « qui porte une chemise bleue » est introduite par le pronom relatif « qui » et complète le nom « garçon ». C'est une subordonnée relative."
  },
  {
    question: "Dans « Nous partirons demain matin », quelle est la fonction de « demain matin » ?",
    answers: [
      "COD",
      "COI",
      "Complément circonstanciel de temps",
      "Attribut du sujet"
    ],
    correct: 2,
    explanation: "« Demain matin » indique le moment où l'action se déroule. C'est un complément circonstanciel de temps."
  }
],
