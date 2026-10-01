
window.RA_COURS = window.RA_COURS || {};

window.RA_COURS.BEPC = window.RA_COURS.BEPC || {};
window.RA_COURS.BEPC.matieres =
  window.RA_COURS.BEPC.matieres || {};

window.RA_COURS.BEPC.matieres["Mathématiques"] =
  window.RA_COURS.BEPC.matieres["Mathématiques"] || {};

window.RA_COURS.BEPC.matieres["Mathématiques"]
  ["Équations et inéquations"] = {
    titre: "Les équations du premier degré",

    objectifs: [
      "Comprendre la notion d'équation.",
      "Résoudre une équation du premier degré.",
      "Vérifier une solution.",
      "Résoudre un petit problème à l'aide d'une équation."
    ],

    notions: [
      "Inconnue : nombre recherché, souvent représenté par x.",
      "Équation : égalité contenant une inconnue.",
      "Solution : valeur qui rend l'égalité vraie."
    ],

    lecon: [
      {
        titre: "1. Définition",
        texte:
          "Une équation est une égalité dans laquelle apparaît une inconnue. Résoudre une équation, c'est trouver la valeur de cette inconnue."
      },
      {
        titre: "2. La règle à connaître",
        texte:
          "Pour conserver l'égalité, on effectue la même opération sur les deux membres. Le but est d'isoler l'inconnue x."
      },
      {
        titre: "3. Exemple simple",
        texte:
          "Résoudre : x + 5 = 12.\n\nOn soustrait 5 des deux côtés :\nx = 12 - 5\nx = 7.\n\nLa solution est x = 7."
      },
      {
        titre: "4. Avec une multiplication",
        texte:
          "Résoudre : 3x = 18.\n\nOn divise les deux membres par 3 :\nx = 18 / 3\nx = 6."
      },
      {
        titre: "5. Équation en deux étapes",
        texte:
          "Résoudre : 2x + 4 = 16.\n\nOn soustrait 4 : 2x = 12.\nOn divise par 2 : x = 6.\n\nVérification : 2 × 6 + 4 = 16."
      },
      {
        titre: "6. Petit problème",
        texte:
          "Un nombre augmenté de 8 donne 20. Quel est ce nombre ?\n\nOn appelle x le nombre recherché.\nL'équation est x + 8 = 20.\nDonc x = 20 - 8 = 12.\n\nLe nombre recherché est 12."
      }
    ],

    resume:
      "Pour résoudre une équation, on isole l'inconnue en effectuant la même opération des deux côtés de l'égalité. On vérifie ensuite la réponse en la remplaçant dans l'équation de départ.",

    qcm: [
      {
        question: "Résous : x + 5 = 12.",
        answers: ["5", "7", "17", "6"],
        correct: 1,
        explanation:
          "On soustrait 5 : x = 12 - 5 = 7."
      },
      {
        question: "Résous : 3x = 18.",
        answers: ["3", "9", "6", "15"],
        correct: 2,
        explanation:
          "On divise 18 par 3 : x = 6."
      },
      {
        question: "Résous : 2x + 4 = 16.",
        answers: ["6", "8", "10", "4"],
        correct: 0,
        explanation:
          "On soustrait 4 : 2x = 12. Puis on divise par 2 : x = 6."
      },
      {
        question: "Une équation est :",
        answers: [
          "Une égalité avec une inconnue",
          "Toujours une multiplication",
          "Un nombre sans opération",
          "Une figure géométrique"
        ],
        correct: 0,
        explanation:
          "Une équation est une égalité qui contient une ou plusieurs inconnues."
      },
      {
        question: "Comment vérifier une solution ?",
        answers: [
          "Changer le signe au hasard",
          "Remplacer l'inconnue par la valeur trouvée",
          "Multiplier toujours par 2",
          "Supprimer tous les nombres"
        ],
        correct: 1,
        explanation:
          "On remplace l'inconnue par la valeur obtenue et on vérifie si l'égalité est vraie."
      }
    ]
  };
