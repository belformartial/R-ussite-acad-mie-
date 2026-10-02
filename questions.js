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
/* =====================================================
   BEPC — FRANÇAIS
   40 questions supplémentaires
   Créé par Belfort
===================================================== */
"Le conditionnel et l’hypothèse": [
  {
    question: "Dans « Si j'avais le temps, je voyagerais », quel temps est employé dans « je voyagerais » ?",
    answers: [
      "Le futur simple",
      "Le conditionnel présent",
      "L'imparfait",
      "Le conditionnel passé"
    ],
    correct: 1,
    explanation: "« Je voyagerais » est au conditionnel présent. Il exprime ici une conséquence soumise à une condition."
  },
  {
    question: "Dans « Si tu travaillais davantage, tu réussirais », quel temps est employé après « si » ?",
    answers: [
      "L'imparfait",
      "Le futur simple",
      "Le présent",
      "Le conditionnel"
    ],
    correct: 0,
    explanation: "Dans une hypothèse portant sur le présent ou le futur, « si » est suivi ici de l'imparfait."
  },
  {
    question: "Quelle phrase respecte la construction correcte de l'hypothèse ?",
    answers: [
      "Si tu viendras, je partirai.",
      "Si tu viens, je partirai.",
      "Si tu viendrais, je partirai.",
      "Si tu viendras, je partirais."
    ],
    correct: 1,
    explanation: "Avec une condition réelle ou possible, on emploie le présent après « si » et généralement le futur dans la principale."
  },
  {
    question: "Dans « Si j'avais étudié, j'aurais réussi », quel temps est « j'aurais réussi » ?",
    answers: [
      "Le conditionnel présent",
      "Le futur antérieur",
      "Le conditionnel passé",
      "Le plus-que-parfait"
    ],
    correct: 2,
    explanation: "« J'aurais réussi » est au conditionnel passé."
  },
  {
    question: "Quelle phrase exprime une hypothèse peu probable ou imaginaire dans le présent ?",
    answers: [
      "Si tu viens, nous mangerons.",
      "Si tu étais riche, tu voyagerais beaucoup.",
      "Quand tu viendras, nous sortirons.",
      "Tu viens et nous partons."
    ],
    correct: 1,
    explanation: "L'imparfait après « si » et le conditionnel présent dans la principale expriment une hypothèse."
  },
  {
    question: "Dans « Je voudrais réussir mon examen », le conditionnel exprime principalement :",
    answers: [
      "Un souhait",
      "Un ordre",
      "Une certitude",
      "Une action passée"
    ],
    correct: 0,
    explanation: "« Je voudrais » exprime ici un souhait ou un désir."
  },
  {
    question: "Quelle phrase contient un conditionnel présent ?",
    answers: [
      "Il travaille beaucoup.",
      "Il travaillera demain.",
      "Il travaillerait davantage avec plus de temps.",
      "Il a travaillé hier."
    ],
    correct: 2,
    explanation: "« Travaillerait » est une forme du conditionnel présent."
  },
  {
    question: "Dans « Si nous avions su, nous serions venus », que marque cette phrase ?",
    answers: [
      "Une hypothèse passée non réalisée",
      "Une certitude passée",
      "Une action habituelle",
      "Un ordre"
    ],
    correct: 0,
    explanation: "Le plus-que-parfait après « si » et le conditionnel passé dans la principale expriment une hypothèse passée non réalisée."
  },
  {
    question: "Quelle forme complète correctement : « Si j'avais plus de temps, je ___ davantage. »",
    answers: [
      "travaille",
      "travaillerai",
      "travaillerais",
      "travaillais"
    ],
    correct: 2,
    explanation: "Après l'imparfait « avais » dans la proposition introduite par « si », on emploie ici le conditionnel présent : « travaillerais »."
  },
  {
    question: "Quelle phrase exprime une demande polie ?",
    answers: [
      "Donne-moi ton livre !",
      "Tu me donnes ton livre.",
      "Pourrais-tu me prêter ton livre ?",
      "Tu donneras ton livre."
    ],
    correct: 2,
    explanation: "« Pourrais-tu... ? » utilise le conditionnel pour formuler une demande de manière polie."
  }
],
"L’argumentation": [
  {
    question: "Quel est le but principal d'un texte argumentatif ?",
    answers: [
      "Raconter uniquement une histoire",
      "Décrire un paysage",
      "Défendre une idée et convaincre ou persuader",
      "Présenter uniquement des personnages"
    ],
    correct: 2,
    explanation: "Un texte argumentatif cherche notamment à défendre une thèse et à agir sur l'opinion du lecteur."
  },
  {
    question: "Comment appelle-t-on l'idée principale défendue dans un texte argumentatif ?",
    answers: [
      "La thèse",
      "Le décor",
      "La péripétie",
      "La description"
    ],
    correct: 0,
    explanation: "La thèse est l'idée ou la position que l'auteur cherche à défendre."
  },
  {
    question: "Qu'est-ce qu'un argument ?",
    answers: [
      "Un personnage",
      "Une raison utilisée pour défendre une thèse",
      "Un lieu",
      "Un titre"
    ],
    correct: 1,
    explanation: "Un argument est une raison avancée pour soutenir une idée ou une thèse."
  },
  {
    question: "Qu'est-ce qu'un exemple dans un texte argumentatif ?",
    answers: [
      "Une illustration concrète d'une idée",
      "Une conclusion obligatoire",
      "Une question sans réponse",
      "Une erreur grammaticale"
    ],
    correct: 0,
    explanation: "L'exemple permet d'illustrer ou de rendre plus concret un argument."
  },
  {
    question: "Quel connecteur exprime la cause ?",
    answers: [
      "Donc",
      "Cependant",
      "Parce que",
      "Enfin"
    ],
    correct: 2,
    explanation: "« Parce que » introduit une cause."
  },
  {
    question: "Quel connecteur exprime la conséquence ?",
    answers: [
      "Car",
      "Donc",
      "Bien que",
      "Afin que"
    ],
    correct: 1,
    explanation: "« Donc » introduit ou marque généralement une conséquence."
  },
  {
    question: "Quel mot exprime l'opposition ?",
    answers: [
      "Cependant",
      "Parce que",
      "Ainsi",
      "Donc"
    ],
    correct: 0,
    explanation: "« Cependant » est un connecteur d'opposition ou de contraste."
  },
  {
    question: "Convaincre un lecteur consiste principalement à :",
    answers: [
      "Utiliser uniquement des émotions",
      "S'appuyer sur des arguments et un raisonnement",
      "Raconter une aventure",
      "Décrire un personnage"
    ],
    correct: 1,
    explanation: "Convaincre fait principalement appel à la raison, aux arguments et au raisonnement."
  },
  {
    question: "Persuader cherche davantage à agir sur :",
    answers: [
      "Les émotions et les sentiments",
      "Les dates historiques",
      "Les calculs mathématiques",
      "La ponctuation"
    ],
    correct: 0,
    explanation: "La persuasion cherche notamment à influencer les sentiments et les émotions du destinataire."
  },
  {
    question: "Dans une argumentation, quel élément permet généralement de terminer le raisonnement ?",
    answers: [
      "La conclusion",
      "Le titre",
      "Le personnage",
      "Le décor"
    ],
    correct: 0,
    explanation: "La conclusion permet de faire le bilan du raisonnement et de rappeler ou renforcer la thèse."
  }
],
"Le résumé de texte": [
  {
    question: "Quel est l'objectif principal d'un résumé ?",
    answers: [
      "Copier le texte original",
      "Réduire le texte en conservant ses idées essentielles",
      "Ajouter de nouvelles informations",
      "Changer complètement le sujet"
    ],
    correct: 1,
    explanation: "Un résumé restitue les idées essentielles d'un texte de manière plus courte et fidèle."
  },
  {
    question: "Dans un résumé, faut-il conserver tous les exemples du texte original ?",
    answers: [
      "Oui, toujours",
      "Non, on conserve surtout les idées essentielles",
      "Oui, mais uniquement les plus longs",
      "Seulement les exemples personnels"
    ],
    correct: 1,
    explanation: "Les exemples secondaires peuvent généralement être supprimés ou regroupés afin de respecter la concision."
  },
  {
    question: "Un bon résumé doit respecter principalement :",
    answers: [
      "Les idées essentielles du texte",
      "Les opinions personnelles du résumé",
      "Un nouveau sujet",
      "Toutes les répétitions du texte"
    ],
    correct: 0,
    explanation: "Le résumé doit rester fidèle aux idées essentielles du texte de départ."
  },
  {
    question: "Que faut-il éviter dans un résumé ?",
    answers: [
      "La reformulation",
      "La fidélité aux idées",
      "Les commentaires personnels",
      "La concision"
    ],
    correct: 2,
    explanation: "Le résumé doit restituer le contenu du texte sans ajouter de jugement personnel."
  },
  {
    question: "Pourquoi faut-il reformuler dans un résumé ?",
    answers: [
      "Pour montrer qu'on a compris le texte",
      "Pour changer son sens",
      "Pour ajouter des arguments",
      "Pour rendre le texte plus long"
    ],
    correct: 0,
    explanation: "La reformulation permet de restituer fidèlement les idées avec ses propres mots."
  },
  {
    question: "Quel élément doit être conservé lors du résumé d'un texte argumentatif ?",
    answers: [
      "Uniquement les exemples",
      "La logique et les idées essentielles de l'auteur",
      "Toutes les phrases",
      "Les fautes de langue"
    ],
    correct: 1,
    explanation: "Il faut préserver la logique du texte ainsi que ses idées principales."
  },
  {
    question: "Un résumé doit-il normalement être plus court que le texte original ?",
    answers: [
      "Oui",
      "Non",
      "Seulement s'il est narratif",
      "Seulement s'il contient des dialogues"
    ],
    correct: 0,
    explanation: "Le résumé consiste précisément à réduire le texte en conservant l'essentiel."
  },
  {
    question: "Quelle pratique est la plus adaptée pour commencer un résumé ?",
    answers: [
      "Identifier le thème et les idées principales",
      "Copier la première phrase",
      "Inventer un nouveau titre",
      "Supprimer toutes les idées"
    ],
    correct: 0,
    explanation: "Il faut d'abord comprendre le thème et repérer les idées essentielles avant de rédiger."
  },
  {
    question: "Dans un résumé scolaire, le rédacteur doit généralement utiliser :",
    answers: [
      "Uniquement la première personne",
      "Une formulation personnelle fidèle au texte",
      "Des informations extérieures obligatoires",
      "Des commentaires personnels"
    ],
    correct: 1,
    explanation: "Le résumé est reformulé par le rédacteur tout en restant fidèle au contenu du texte."
  },
  {
    question: "Quelle qualité est essentielle dans un bon résumé ?",
    answers: [
      "La longueur",
      "La fidélité",
      "L'exagération",
      "L'invention"
    ],
    correct: 1,
    explanation: "La fidélité au sens et aux idées essentielles du texte est fondamentale."
  }
],
"La versification": [
  {
    question: "Comment appelle-t-on le nombre de syllabes d'un vers ?",
    answers: [
      "La strophe",
      "La mesure du vers",
      "Le rythme",
      "La rime"
    ],
    correct: 1,
    explanation: "Le nombre de syllabes constitue la mesure du vers. En poésie française, on parle notamment d'alexandrin pour un vers de douze syllabes."
  },
  {
    question: "Combien de syllabes compte traditionnellement un alexandrin ?",
    answers: [
      "8",
      "10",
      "12",
      "14"
    ],
    correct: 2,
    explanation: "L'alexandrin classique compte douze syllabes."
  },
  {
    question: "Comment appelle-t-on un ensemble de vers regroupés dans un poème ?",
    answers: [
      "Une strophe",
      "Une phrase",
      "Une proposition",
      "Une périphrase"
    ],
    correct: 0,
    explanation: "Une strophe est un ensemble organisé de vers formant une unité dans un poème."
  },
  {
    question: "Comment appelle-t-on la répétition de sons à la fin de plusieurs vers ?",
    answers: [
      "La rime",
      "La métaphore",
      "L'ellipse",
      "La comparaison"
    ],
    correct: 0,
    explanation: "La rime correspond à la répétition de sons en fin de vers."
  },
  {
    question: "Une strophe de quatre vers s'appelle :",
    answers: [
      "Un distique",
      "Un tercet",
      "Un quatrain",
      "Un quintil"
    ],
    correct: 2,
    explanation: "Une strophe composée de quatre vers est appelée un quatrain."
  },
  {
    question: "Une strophe de trois vers s'appelle :",
    answers: [
      "Un tercet",
      "Un quatrain",
      "Un distique",
      "Un sonnet"
    ],
    correct: 0,
    explanation: "Une strophe de trois vers est appelée un tercet."
  },
  {
    question: "Une strophe de deux vers s'appelle :",
    answers: [
      "Un tercet",
      "Un distique",
      "Un quatrain",
      "Un alexandrin"
    ],
    correct: 1,
    explanation: "Une strophe composée de deux vers est appelée un distique."
  },
  {
    question: "Dans un poème, l'alternance régulière des sons et des accents contribue notamment à créer :",
    answers: [
      "Le rythme",
      "Le personnage",
      "Le décor",
      "Le titre"
    ],
    correct: 0,
    explanation: "Le rythme organise les sonorités et les mouvements du vers."
  },
  {
    question: "Comment appelle-t-on un poème de quatorze vers organisé traditionnellement en deux quatrains et deux tercets ?",
    answers: [
      "Une fable",
      "Un sonnet",
      "Une épopée",
      "Un distique"
    ],
    correct: 1,
    explanation: "Le sonnet traditionnel comporte quatorze vers, généralement répartis en deux quatrains et deux tercets."
  },
  {
    question: "Dans « La mer murmure doucement », la répétition du son [m] au début de plusieurs mots est une :",
    answers: [
      "Assonance",
      "Allitération",
      "Hyperbole",
      "Antithèse"
    ],
    correct: 1,
    explanation: "La répétition d'un même son consonantique est une allitération."
  }
]
