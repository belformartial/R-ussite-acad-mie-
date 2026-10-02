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
          correct: 2,
          explanation:
            "« Qui habite ici » est une proposition subordonnée relative car elle est introduite par le pronom relatif « qui »."
        }
      ]
    }
  }
};
