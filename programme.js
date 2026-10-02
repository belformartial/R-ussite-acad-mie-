/* =========================================================
   RÉUSSITE ACADÉMIE — Programme pédagogique
   Centrafrique — BEPC (Troisième) + BAC (Terminale A, B, C, D)

   Ce fichier contient la STRUCTURE des matières et chapitres.
   Base pédagogique à faire relire/valider par un enseignant
   centrafricain avant de la présenter comme programme officiel.

   Créé par Belfort
========================================================= */

window.RA_PROGRAMME = {

  "meta": {
    "nom": "RÉUSSITE ACADÉMIE",
    "pays": "Centrafrique",
    "version": "1.0",
    "auteur": "Belfort",
    "note": "Structure pédagogique proposée à valider avec un enseignant avant diffusion comme programme officiel.",
    "bac_series": {
      "A": "Terminale A4",
      "B": "Terminale B",
      "C": "Terminale C",
      "D": "Terminale D"
    }
  },

  /* ===================================================
     BEPC
  =================================================== */

  "BEPC": {

    "niveau": "Troisième",
    "series": null,

    "matieres": {

      /* =================================================
         FRANÇAIS — 7 CHAPITRES
      ================================================= */

      "Français": [
        "Grammaire et analyse de la phrase",
        "Les propositions subordonnées",
        "Conjugaison et concordance des temps",
        "Orthographe et vocabulaire",
        "Le résumé de texte",
        "L'argumentation",
        "La rédaction"
      ],

      /* =================================================
         MATHÉMATIQUES
      ================================================= */

      "Mathématiques": [
        "Le théorème de Thalès",
        "La trigonométrie dans le triangle rectangle",
        "Les racines carrées",
        "Fonctions linéaires et affines",
        "Les statistiques",
        "Calcul littéral : développement et factorisation",
        "Équations, inéquations et systèmes",
        "Théorème de Pythagore et réciproque",
        "Vecteurs et translations",
        "Repérage dans le plan : coordonnées",
        "Géométrie dans l’espace : solides et volumes",
        "Angles inscrits et polygones réguliers"
      ],

      /* =================================================
         PHYSIQUE-CHIMIE
      ================================================= */

      "Physique-Chimie": [
        "La loi d’Ohm",
        "La puissance et l’énergie électrique",
        "Les ions et les solutions",
        "Les réactions chimiques",
        "La vitesse",
        "Oxydation et combustions",
        "Acides, bases, sels et pH",
        "Courant électrique : intensité et tension",
        "Lentilles minces et l’œil",
        "Le poids et la masse",
        "Circuits en série et en dérivation",
        "Les changements d’état de la matière"
      ],

      /* =================================================
         SVT
      ================================================= */

      "SVT": [
        "La grossesse et le développement de l’enfant",
        "Le système nerveux",
        "L’hérédité",
        "La tectonique des plaques",
        "L’immunité",
        "La contraception et la planification familiale",
        "Les groupes sanguins et la transfusion sanguine",
        "Les fossiles et l’histoire de la Terre",
        "La biodiversité et sa protection"
      ],

      /* =================================================
         HISTOIRE-GÉOGRAPHIE
      ================================================= */

      "Histoire-Géographie": [
        "Les deux guerres mondiales",
        "La décolonisation et l’indépendance de la RCA",
        "Les grandes organisations internationales",
        "La mondialisation",
        "Les défis du développement en Afrique",
        "Le milieu naturel de la République centrafricaine",
        "Le fleuve Oubangui et les voies de communication",
        "Barthélemy Boganda et la naissance de la RCA",
        "La République centrafricaine indépendante : de 1960 à nos jours",
        "Population et peuplement de la République centrafricaine"
      ],

      /* =================================================
         ANGLAIS
      ================================================= */

      "Anglais": [
        "Le present perfect",
        "Le futur (will) et le first conditional",
        "Les propositions relatives",
        "La voix passive",
        "Le discours indirect"
      ],

      /* =================================================
         ÉDUCATION CIVIQUE ET MORALE
      ================================================= */

      "Éducation Civique et Morale": [
        "Les symboles de la République centrafricaine",
        "La citoyenneté : droits et devoirs",
        "Les institutions de la République centrafricaine",
        "Démocratie, élections et décentralisation",
        "La RCA dans le monde et le civisme au quotidien"
      ]
    }
  },


  /* ===================================================
     BAC
  =================================================== */

  "BAC": {

    "niveau": "Terminale",

    "series": {

      /* =================================================
         SÉRIE A
      ================================================= */

      "A": {

        "label": "Série A (Terminale A4)",

        "matieres": {

          "Anglais": [
            "Reported speech (le discours rapporté)",
            "Conditionals (les conditionnelles)",
            "The passive voice (la voix passive)",
            "Expressing opinion (l’essai argumentatif)",
            "The world of work (CV et entretien)",
            "Exprimer la cause et la conséquence",
            "Exprimer le contraste et la concession",
            "Exprimer le but",
            "La tournure causative : have / get something done",
            "Formation des mots et phrasal verbs",
            "Le Royaume-Uni et le Commonwealth"
          ],

          "Éducation Civique et Morale": [
            "L’État de droit et la hiérarchie des normes",
            "Les droits de l’Homme et leur protection",
            "La démocratie pluraliste et la citoyenneté active",
            "La culture de la paix et l’unité nationale",
            "Développement durable et bonne gouvernance"
          ],

          "Français": [
            "La dissertation littéraire",
            "Le commentaire composé",
            "La poésie de la Négritude",
            "Le théâtre : texte et représentation",
            "L’argumentation : convaincre et persuader"
          ],

          "Histoire-Géographie": [
            "La Guerre froide (1947-1991)",
            "L’Afrique depuis les indépendances",
            "Les États-Unis, une superpuissance",
            "La Chine, une puissance émergente",
            "L’Afrique dans la mondialisation"
          ],

          "Mathématiques": [
            "Suites numériques et applications financières",
            "Étude de fonctions et dérivation",
            "Fonctions logarithme népérien et exponentielle",
            "Statistiques et ajustement linéaire",
            "Dénombrement et probabilités",
            "Systèmes linéaires et programmation linéaire"
          ],

          "Philosophie": [
            "Qu’est-ce que la philosophie ?",
            "La conscience et l’inconscient",
            "La liberté et le déterminisme",
            "La vérité",
            "La morale et le devoir",
            "Méthodologie : la dissertation et l’explication de texte",
            "Le travail et la technique",
            "L’État, la justice et le droit",
            "La culture et la philosophie africaine",
            "Autrui et le rapport à autrui",
            "Le désir",
            "Le bonheur",
            "La raison et la croyance",
            "L’art et le beau"
          ]
        }
      },


      /* =================================================
         SÉRIE B
      ================================================= */

      "B": {

        "label": "Série B (Terminale B)",

        "matieres": {

          "Anglais": [
            "Reported speech (le discours rapporté)",
            "Conditionals (les conditionnelles)",
            "The passive voice (la voix passive)",
            "Expressing opinion (l’essai argumentatif)",
            "The world of work (CV et entretien)",
            "Exprimer la cause et la conséquence",
            "Exprimer le contraste et la concession",
            "Exprimer le but",
            "La tournure causative : have / get something done",
            "Formation des mots et phrasal verbs",
            "Le Royaume-Uni et le Commonwealth"
          ],

          "Éducation Civique et Morale": [
            "L’État de droit et la hiérarchie des normes",
            "Les droits de l’Homme et leur protection",
            "La démocratie pluraliste et la citoyenneté active",
            "La culture de la paix et l’unité nationale",
            "Développement durable et bonne gouvernance"
          ],

          "Histoire-Géographie": [
            "La Guerre froide (1947-1991)",
            "L’Afrique depuis les indépendances",
            "Les États-Unis, une superpuissance",
            "La Chine, une puissance émergente",
            "L’Afrique dans la mondialisation"
          ],

          "Mathématiques": [
            "Suites numériques et applications financières",
            "Étude de fonctions et dérivation",
            "Fonctions logarithme népérien et exponentielle",
            "Statistiques et ajustement linéaire",
            "Dénombrement et probabilités",
            "Systèmes linéaires et programmation linéaire"
          ],

          "Philosophie": [
            "Qu’est-ce que la philosophie ?",
            "La conscience et l’inconscient",
            "La liberté et le déterminisme",
            "La vérité",
            "La morale et le devoir",
            "Méthodologie : la dissertation et l’explication de texte",
            "Le travail et la technique",
            "L’État, la justice et le droit",
            "La culture et la philosophie africaine",
            "Autrui et le rapport à autrui",
            "Le désir",
            "Le bonheur",
            "La raison et la croyance",
            "L’art et le beau"
          ],

          "Sciences Économiques et Sociales": [
            "La croissance économique",
            "Le développement économique",
            "La mondialisation et le commerce international",
            "La monnaie et l’inflation",
            "Le rôle de l’État dans l’économie"
          ]
        }
      },


      /* =================================================
         SÉRIE C
      ================================================= */

      "C": {

        "label": "Série C (Terminale C)",

        "matieres": {

          "Anglais": [
            "Reported speech (le discours rapporté)",
            "Conditionals (les conditionnelles)",
            "The passive voice (la voix passive)",
            "Expressing opinion (l’essai argumentatif)",
            "The world of work (CV et entretien)",
            "Exprimer la cause et la conséquence",
            "Exprimer le contraste et la concession",
            "Exprimer le but",
            "La tournure causative : have / get something done",
            "Formation des mots et phrasal verbs",
            "Le Royaume-Uni et le Commonwealth"
          ],

          "Éducation Civique et Morale": [
            "L’État de droit et la hiérarchie des normes",
            "Les droits de l’Homme et leur protection",
            "La démocratie pluraliste et la citoyenneté active",
            "La culture de la paix et l’unité nationale",
            "Développement durable et bonne gouvernance"
          ],

          "Histoire-Géographie": [
            "La Guerre froide (1947-1991)",
            "L’Afrique depuis les indépendances",
            "Les États-Unis, une superpuissance",
            "La Chine, une puissance émergente",
            "L’Afrique dans la mondialisation"
          ],

          "Mathématiques": [
            "Limites et continuité",
            "La fonction exponentielle",
            "La fonction logarithme népérien",
            "Le calcul intégral",
            "Les nombres complexes",
            "Dérivation et étude de fonctions",
            "Suites numériques",
            "Probabilités",
            "Équations différentielles",
            "Dénombrement et analyse combinatoire",
            "Produit scalaire et géométrie dans l’espace",
            "Barycentre",
            "Statistiques à deux variables",
            "Arithmétique : divisibilité et congruences"
          ],

          "Philosophie": [
            "Qu’est-ce que la philosophie ?",
            "La conscience et l’inconscient",
            "La liberté et le déterminisme",
            "La vérité",
            "La morale et le devoir",
            "Méthodologie : la dissertation et l’explication de texte",
            "Le travail et la technique",
            "L’État, la justice et le droit",
            "La culture et la philosophie africaine",
            "Autrui et le rapport à autrui",
            "Le désir",
            "Le bonheur",
            "La raison et la croyance",
            "L’art et le beau"
          ],

          "Physique-Chimie": [
            "Les lois de Newton et le mouvement",
            "La radioactivité",
            "Les acides et les bases : le pH",
            "L’oxydoréduction et les piles",
            "La chimie organique",
            "Cinématique du point matériel",
            "Énergie cinétique et énergie mécanique",
            "Champ magnétique et force de Laplace",
            "Induction électromagnétique",
            "Oscillations électriques dans un circuit RLC",
            "Cinétique chimique",
            "Mouvements dans les champs de force"
          ],

          "SVT": [
            "L’ADN, support de l’information génétique",
            "La méiose et le brassage génétique",
            "La transmission des caractères héréditaires",
            "La communication nerveuse",
            "La régulation de la glycémie",
            "De l’ADN à la protéine : l’expression du gène",
            "Génétique humaine et maladies héréditaires",
            "Les échanges membranaires et l’osmorégulation",
            "Évolution et origine de l’Homme",
            "Écologie : dynamique des populations et équilibres"
          ]
        }
      },


      /* =================================================
         SÉRIE D
      ================================================= */

      "D": {

        "label": "Série D (Terminale D)",

        "matieres": {

          "Anglais": [
            "Reported speech (le discours rapporté)",
            "Conditionals (les conditionnelles)",
            "The passive voice (la voix passive)",
            "Expressing opinion (l’essai argumentatif)",
            "The world of work (CV et entretien)",
            "Exprimer la cause et la conséquence",
            "Exprimer le contraste et la concession",
            "Exprimer le but",
            "La tournure causative : have / get something done",
            "Formation des mots et phrasal verbs",
            "Le Royaume-Uni et le Commonwealth"
          ],

          "Éducation Civique et Morale": [
            "L’État de droit et la hiérarchie des normes",
            "Les droits de l’Homme et leur protection",
            "La démocratie pluraliste et la citoyenneté active",
            "La culture de la paix et l’unité nationale",
            "Développement durable et bonne gouvernance"
          ],

          "Histoire-Géographie": [
            "La Guerre froide (1947-1991)",
            "L’Afrique depuis les indépendances",
            "Les États-Unis, une superpuissance",
            "La Chine, une puissance émergente",
            "L’Afrique dans la mondialisation"
          ],

          "Mathématiques": [
            "Limites et continuité",
            "La fonction exponentielle",
            "La fonction logarithme népérien",
            "Le calcul intégral",
            "Les nombres complexes",
            "Dérivation et étude de fonctions",
            "Suites numériques",
            "Probabilités",
            "Équations différentielles",
            "Dénombrement et analyse combinatoire",
            "Produit scalaire et géométrie dans l’espace",
            "Barycentre",
            "Statistiques à deux variables",
            "Arithmétique : divisibilité et congruences"
          ],

          "Philosophie": [
            "Qu’est-ce que la philosophie ?",
            "La conscience et l’inconscient",
            "La liberté et le déterminisme",
            "La vérité",
            "La morale et le devoir",
            "Méthodologie : la dissertation et l’explication de texte",
            "Le travail et la technique",
            "L’État, la justice et le droit",
            "La culture et la philosophie africaine",
            "Autrui et le rapport à autrui",
            "Le désir",
            "Le bonheur",
            "La raison et la croyance",
            "L’art et le beau"
          ],

          "Physique-Chimie": [
            "Les lois de Newton et le mouvement",
            "La radioactivité",
            "Les acides et les bases : le pH",
            "L’oxydoréduction et les piles",
            "La chimie organique",
            "Cinématique du point matériel",
            "Énergie cinétique et énergie mécanique",
            "Champ magnétique et force de Laplace",
            "Induction électromagnétique",
            "Oscillations électriques dans un circuit RLC",
            "Cinétique chimique",
            "Mouvements dans les champs de force"
          ],

          "SVT": [
            "L’ADN, support de l’information génétique",
            "La méiose et le brassage génétique",
            "La transmission des caractères héréditaires",
            "La communication nerveuse",
            "La régulation de la glycémie",
            "De l’ADN à la protéine : l’expression du gène",
            "Génétique humaine et maladies héréditaires",
            "Les échanges membranaires et l’osmorégulation",
            "Évolution et origine de l’Homme",
            "Écologie : dynamique des populations et équilibres"
          ]
        }
      }

    }
  }

};


/* =========================================================
   OUTILS DU PROGRAMME
========================================================= */

window.RA_PROGRAMME_UTILS = {

  getBEPCSubjects() {
    return Object.keys(window.RA_PROGRAMME.BEPC.matieres);
  },

  getBEPCChapters(subject) {
    return window.RA_PROGRAMME.BEPC.matieres[subject] || [];
  },

  getBACSeries() {
    return Object.keys(window.RA_PROGRAMME.BAC.series);
  },

  getBACSubjects(series) {
    return Object.keys(
      window.RA_PROGRAMME.BAC.series[series]?.matieres || {}
    );
  },

  getBACChapters(series, subject) {
    return (
      window.RA_PROGRAMME.BAC.series[series]?.matieres?.[subject] || []
    );
  },

  getAllChapters(level, series, subject) {
    return level === "BEPC"
      ? this.getBEPCChapters(subject)
      : this.getBACChapters(series, subject);
  }

};
