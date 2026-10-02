"use strict";

/*
 * ============================================================
 * RÉUSSITE ACADÉMIE — BIBLIOTHÈQUE DE COURS
 * ============================================================
 *
 * Compatible avec :
 *   - programme.js
 *   - game.js
 *   - index.html actuels
 *
 * Structure attendue par game.js :
 *
 * BEPC :
 * RA_COURS.BEPC.matieres["Mathématiques"]["Équations et inéquations"]
 *
 * BAC :
 * RA_COURS.BAC.series["C"].matieres["Mathématiques"]["Dérivation"]
 *
 * Créé par Belfort
 * ============================================================
 */

(function () {

  const RA = window.RA_COURS = window.RA_COURS || {};

  /* ==========================================================
     OUTILS
     ========================================================== */

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function has(text, ...words) {
    const value = normalize(text);

    return words.some(word =>
      value.includes(normalize(word))
    );
  }

  /* ==========================================================
     BASE PÉDAGOGIQUE PAR MATIÈRE
     ========================================================== */

  const BASE = {

    "Mathématiques": {
      intro:
        "Les mathématiques permettent de modéliser des situations, de raisonner avec précision et de vérifier un résultat.",

      notions: [
        "Définitions et notations du chapitre",
        "Propriétés et règles de calcul",
        "Méthode de résolution",
        "Vérification du résultat"
      ],

      method:
        "Lire attentivement l'énoncé, identifier les données et la question, choisir la propriété ou la formule adaptée, effectuer les calculs proprement puis vérifier la cohérence du résultat."
    },

    "Français": {
      intro:
        "Ce chapitre développe la maîtrise de la langue et les méthodes nécessaires pour comprendre, analyser et produire un texte.",

      notions: [
        "Vocabulaire essentiel",
        "Règles de langue ou notions littéraires",
        "Méthode d'analyse",
        "Organisation d'une réponse"
      ],

      method:
        "Lire attentivement le texte ou le sujet, relever les éléments importants, organiser les idées et justifier les réponses par des éléments précis."
    },

    "Physique-chimie": {
      intro:
        "La physique-chimie étudie la matière, les mouvements, les interactions et les transformations à partir de grandeurs mesurables et de lois.",

      notions: [
        "Grandeurs physiques",
        "Unités",
        "Lois et relations",
        "Méthode de résolution"
      ],

      method:
        "Lister les données avec leurs unités, identifier la grandeur recherchée, choisir la relation adaptée, calculer puis vérifier l'unité du résultat."
    },

    "Physique": {
      intro:
        "La physique permet de décrire quantitativement les mouvements, les forces, l'énergie, l'électricité et les phénomènes ondulatoires.",

      notions: [
        "Grandeurs physiques",
        "Lois et relations",
        "Unités SI",
        "Interprétation du résultat"
      ],

      method:
        "Faire un schéma si nécessaire, relever les données, choisir la loi pertinente, effectuer le calcul avec les unités SI et contrôler le résultat."
    },

    "Chimie": {
      intro:
        "La chimie étudie la constitution de la matière et ses transformations à l'aide de modèles, d'équations et de grandeurs mesurables.",

      notions: [
        "Espèces chimiques",
        "Quantités et unités",
        "Équations chimiques",
        "Transformations de la matière"
      ],

      method:
        "Identifier les espèces chimiques, écrire ou exploiter l'équation, vérifier les coefficients, utiliser les unités adaptées puis interpréter le résultat."
    },

    "SVT": {
      intro:
        "Les sciences de la vie et de la Terre expliquent le fonctionnement des êtres vivants, leur transmission génétique, leur santé et leur environnement.",

      notions: [
        "Vocabulaire scientifique",
        "Mécanismes biologiques",
        "Schémas et observations",
        "Relations de cause à effet"
      ],

      method:
        "Identifier le phénomène étudié, partir des observations, mobiliser les connaissances, établir les liens de cause à effet et conclure clairement."
    },

    "Histoire": {
      intro:
        "L'histoire étudie les sociétés et les événements dans le temps en confrontant des dates, des acteurs, des faits et des sources.",

      notions: [
        "Repères chronologiques",
        "Acteurs et événements",
        "Causes et conséquences",
        "Vocabulaire historique"
      ],

      method:
        "Situer l'événement dans le temps et l'espace, identifier les acteurs, expliquer les causes et les conséquences puis organiser la réponse."
    },

    "Géographie": {
      intro:
        "La géographie étudie les territoires, les populations, les ressources et les activités humaines ainsi que leurs relations avec l'espace.",

      notions: [
        "Territoires et populations",
        "Ressources et activités",
        "Échelles géographiques",
        "Cartes et documents"
      ],

      method:
        "Identifier le territoire et l'échelle, lire les données du document, relever les tendances principales, expliquer les relations spatiales et conclure."
    },

    "Histoire-géographie": {
      intro:
        "L'histoire-géographie combine l'analyse du temps et celle des territoires afin de comprendre les sociétés et les grands enjeux contemporains.",

      notions: [
        "Repères historiques",
        "Territoires et populations",
        "Documents",
        "Causes et conséquences"
      ],

      method:
        "Identifier le thème, situer les faits ou territoires, exploiter les documents, organiser les informations et répondre avec des exemples précis."
    },

    "Anglais": {
      intro:
        "L'objectif est de comprendre et de produire un anglais correct dans des situations scolaires et de communication courante.",

      notions: [
        "Vocabulaire du thème",
        "Structures grammaticales",
        "Temps verbaux",
        "Compréhension et expression"
      ],

      method:
        "Repérer les mots-clés, identifier le temps et la structure de la phrase puis construire une réponse simple, correcte et cohérente."
    },

    "Éducation civique": {
      intro:
        "L'éducation civique aide à comprendre les droits, les devoirs, les institutions et les comportements nécessaires à la vie collective.",

      notions: [
        "Droits et devoirs",
        "Responsabilités",
        "Institutions",
        "Valeurs civiques"
      ],

      method:
        "Définir les notions, distinguer droits et devoirs, donner un exemple concret et expliquer pourquoi le comportement étudié est important pour la collectivité."
    },

    "Éducation Civique et Morale": {
      intro:
        "L'éducation civique et morale permet de comprendre les règles de la vie collective, les valeurs civiques et les responsabilités du citoyen.",

      notions: [
        "Citoyenneté",
        "Droits et devoirs",
        "Institutions",
        "Valeurs et responsabilités"
      ],

      method:
        "Définir la notion étudiée, identifier les responsabilités concernées et illustrer par une situation concrète."
    },

    "Philosophie": {
      intro:
        "La philosophie apprend à construire une réflexion argumentée sur une question en distinguant les notions, les problèmes et les arguments.",

      notions: [
        "Définition des notions",
        "Problématique",
        "Arguments",
        "Exemples et objections"
      ],

      method:
        "Définir les termes du sujet, faire apparaître le problème, examiner plusieurs positions, argumenter avec des exemples puis construire une conclusion."
    },

    "Sciences Économiques et Sociales": {
      intro:
        "Les sciences économiques et sociales analysent les mécanismes de production, d'échange, de consommation et les transformations de la société.",

      notions: [
        "Agents économiques",
        "Mécanismes économiques",
        "Indicateurs",
        "Relations de cause à effet"
      ],

      method:
        "Définir les termes, identifier les acteurs, exploiter les données et expliquer les mécanismes avec un raisonnement structuré."
    },

    "Économie": {
      intro:
        "L'économie étudie la manière dont les ressources sont produites, réparties, échangées et utilisées pour satisfaire les besoins.",

      notions: [
        "Agents économiques",
        "Production",
        "Échanges",
        "Marchés et indicateurs"
      ],

      method:
        "Définir les notions, identifier les agents concernés, expliquer le mécanisme puis illustrer avec un exemple."
    }

  };

  /* ==========================================================
     COURS SPÉCIFIQUES
     ========================================================== */

  const SPECIALS = [

    /* --------------------------------------------------------
       MATHÉMATIQUES
       -------------------------------------------------------- */

    {
      test: c =>
        has(c, "Équations et inéquations", "Calcul littéral et équations"),

      title: "Équations et inéquations",

      notions: [
        "Inconnue et solution",
        "Égalité et équivalence",
        "Équation du premier degré",
        "Inéquation et intervalle"
      ],

      parts: [

        [
          "1. Définition",
          "Une équation est une égalité contenant une inconnue. Résoudre une équation consiste à déterminer la valeur ou les valeurs de l'inconnue qui rendent l'égalité vraie."
        ],

        [
          "2. Règle fondamentale",
          "Pour conserver une égalité, on effectue la même opération sur les deux membres. Le but est généralement d'isoler l'inconnue."
        ],

        [
          "3. Exemple",
          "Résolvons : 2x + 4 = 16.\n\nOn soustrait 4 :\n2x = 12.\n\nOn divise par 2 :\nx = 6.\n\nVérification : 2 × 6 + 4 = 16."
        ],

        [
          "4. Inéquations",
          "Une inéquation compare deux expressions avec les signes <, >, ≤ ou ≥. Lorsqu'on multiplie ou divise une inéquation par un nombre négatif, le sens du signe s'inverse."
        ],

        [
          "5. Conseil examen",
          "Écris chaque étape. Une réponse sans justification peut être difficile à vérifier. Termine par une vérification lorsque cela est possible."
        ]

      ],

      qcm: [

        {
          question: "Résous : 2x + 4 = 16.",

          answers: [
            "4",
            "6",
            "8",
            "10"
          ],

          correct: 1,

          explanation:
            "2x = 12, donc x = 6."
        },

        {
          question:
            "Que se passe-t-il lorsqu'on multiplie une inéquation par un nombre négatif ?",

          answers: [
            "Le sens du signe s'inverse",
            "Le signe disparaît",
            "Rien ne change",
            "L'inconnue disparaît"
          ],

          correct: 0,

          explanation:
            "Multiplier ou diviser une inéquation par un nombre négatif inverse le sens de l'inégalité."
        }

      ]

    },

    {
      test: c => has(c, "Pythagore"),

      title: "Théorème de Pythagore",

      notions: [
        "Triangle rectangle",
        "Hypoténuse",
        "Relation de Pythagore",
        "Réciproque"
      ],

      parts: [

        [
          "1. Théorème",
          "Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés."
        ],

        [
          "2. Relation",
          "Si c est l'hypoténuse et a et b les deux autres côtés, alors : c² = a² + b²."
        ],

        [
          "3. Calcul d'une longueur",
          "Pour calculer l'hypoténuse : c = √(a² + b²).\n\nPour calculer un côté de l'angle droit, on utilise une différence de carrés."
        ],

        [
          "4. Réciproque",
          "Si le carré du plus grand côté est égal à la somme des carrés des deux autres côtés, alors le triangle est rectangle."
        ],

        [
          "5. Méthode",
          "Identifier l'hypoténuse, écrire la relation, remplacer par les valeurs, calculer puis donner l'unité."
        ]

      ]

    },

    {
      test: c => has(c, "Thalès"),

      title: "Théorème de Thalès",

      notions: [
        "Droites parallèles",
        "Proportionnalité",
        "Rapports de longueurs",
        "Réciproque"
      ],

      parts: [

        [
          "1. Principe",
          "Lorsque deux droites sécantes sont coupées par deux droites parallèles, les longueurs correspondantes sont proportionnelles."
        ],

        [
          "2. Écrire les rapports",
          "On écrit une égalité entre les rapports des longueurs correspondantes."
        ],

        [
          "3. Produit en croix",
          "Une fois les rapports écrits correctement, le produit en croix permet de calculer une longueur inconnue."
        ],

        [
          "4. Réciproque",
          "Des rapports de longueurs égaux peuvent permettre de démontrer que deux droites sont parallèles lorsque les conditions géométriques sont réunies."
        ]

      ]

    },

    {
      test: c => has(c, "Trigonométrie"),

      title: "Trigonométrie",

      notions: [
        "Sinus",
        "Cosinus",
        "Tangente",
        "Triangle rectangle"
      ],

      parts: [

        [
          "1. Sinus",
          "Dans un triangle rectangle : sin(angle) = côté opposé / hypoténuse."
        ],

        [
          "2. Cosinus",
          "Dans un triangle rectangle : cos(angle) = côté adjacent / hypoténuse."
        ],

        [
          "3. Tangente",
          "Dans un triangle rectangle : tan(angle) = côté opposé / côté adjacent."
        ],

        [
          "4. Choisir la bonne formule",
          "Repère l'angle connu et les deux côtés concernés. Choisis sinus, cosinus ou tangente selon les côtés connus et recherchés."
        ],

        [
          "5. Calculatrice",
          "Vérifie le mode de la calculatrice. Pour les exercices dont les angles sont donnés en degrés, utilise le mode degrés."
        ]

      ]

    },

    {
      test: c =>
        has(
          c,
          "Dérivation",
          "Dérivation et étude de fonctions",
          "Fonctions et dérivation"
        ),

      title: "Dérivation et étude de fonctions",

      notions: [
        "Nombre dérivé",
        "Fonction dérivée",
        "Signe de la dérivée",
        "Variations"
      ],

      parts: [

        [
          "1. Idée",
          "La dérivée d'une fonction permet notamment d'étudier la manière dont cette fonction varie."
        ],

        [
          "2. Règles de base",
          "La dérivée d'une constante est 0. La dérivée de x est 1. La dérivée de x² est 2x. Plus généralement, la dérivée de x^n est n x^(n−1) pour les puissances usuelles."
        ],

        [
          "3. Variations",
          "Lorsque f'(x) est positive sur un intervalle, f est croissante sur cet intervalle. Lorsqu'elle est négative, f est décroissante."
        ],

        [
          "4. Méthode",
          "Déterminer f'(x), étudier son signe, puis dresser le tableau de variations."
        ]

      ]

    },

    {
      test: c => has(c, "Suites numériques"),

      title: "Suites numériques",

      notions: [
        "Terme d'une suite",
        "Suite explicite",
        "Suite récurrente",
        "Suite arithmétique et géométrique"
      ],

      parts: [

        [
          "1. Définition",
          "Une suite associe à chaque entier naturel considéré un nombre appelé terme de la suite."
        ],

        [
          "2. Suite explicite",
          "Une formule explicite donne directement un terme en fonction de son rang."
        ],

        [
          "3. Suite récurrente",
          "Une relation de récurrence permet de calculer un terme à partir d'un ou plusieurs termes précédents."
        ],

        [
          "4. Suites usuelles",
          "Dans une suite arithmétique, on ajoute une même raison. Dans une suite géométrique, on multiplie par une même raison."
        ]

      ]

    },

    {
      test: c => has(c, "Probabilités"),

      title: "Probabilités",

      notions: [
        "Expérience aléatoire",
        "Événement",
        "Probabilité",
        "Événement contraire"
      ],

      parts: [

        [
          "1. Expérience aléatoire",
          "Une expérience aléatoire possède plusieurs résultats possibles et son résultat exact ne peut pas être prévu avec certitude avant l'expérience."
        ],

        [
          "2. Probabilité",
          "Une probabilité est comprise entre 0 et 1. Une probabilité de 0 correspond à un événement impossible et une probabilité de 1 à un événement certain."
        ],

        [
          "3. Événement contraire",
          "Pour un événement A : P(non A) = 1 − P(A)."
        ],

        [
          "4. Méthode",
          "Définis l'univers, identifie l'événement étudié puis applique la formule adaptée."
        ]

      ]

    },

    {
      test: c => has(c, "Statistiques"),

      title: "Statistiques",

      notions: [
        "Population",
        "Caractère",
        "Effectif",
        "Fréquence",
        "Moyenne"
      ],

      parts: [

        [
          "1. Vocabulaire",
          "La population est l'ensemble étudié. Le caractère est la variable observée. L'effectif indique le nombre d'individus correspondant à une valeur."
        ],

        [
          "2. Fréquence",
          "La fréquence d'une valeur est son effectif divisé par l'effectif total."
        ],

        [
          "3. Moyenne",
          "La moyenne pondérée est obtenue en additionnant les produits valeur × effectif puis en divisant par l'effectif total."
        ],

        [
          "4. Graphiques",
          "Toujours lire le titre, les axes, les unités et la légende avant d'interpréter un graphique."
        ]

      ]

    },

    {
      test: c => has(c, "Limites et continuité", "Limites"),

      title: "Limites et continuité",

      notions: [
        "Limite",
        "Voisinage",
        "Continuité",
        "Comportement d'une fonction"
      ],

      parts: [

        [
          "1. Limite",
          "La limite décrit le comportement d'une fonction lorsque la variable se rapproche d'une valeur donnée ou devient très grande en valeur absolue."
        ],

        [
          "2. Continuité",
          "Une fonction est continue en un point lorsque sa limite en ce point existe et correspond à sa valeur en ce point."
        ],

        [
          "3. Méthode",
          "Identifier la situation, simplifier si nécessaire puis appliquer les règles de calcul des limites."
        ],

        [
          "4. Interprétation",
          "Les limites peuvent notamment permettre d'étudier le comportement d'une courbe et d'identifier certaines asymptotes."
        ]

      ]

    },

    {
      test: c => has(c, "Fonction exponentielle"),

      title: "Fonction exponentielle",

      notions: [
        "Fonction exponentielle",
        "Propriétés",
        "Dérivée",
        "Croissance"
      ],

      parts: [

        [
          "1. Définition",
          "La fonction exponentielle est définie sur l'ensemble des nombres réels et est strictement positive."
        ],

        [
          "2. Propriété fondamentale",
          "Pour tous réels a et b : exp(a + b) = exp(a) × exp(b)."
        ],

        [
          "3. Dérivée",
          "La dérivée de exp(x) est exp(x). Cette propriété permet notamment d'étudier ses variations."
        ],

        [
          "4. Méthode",
          "Utilise les propriétés de l'exponentielle pour transformer les expressions et résoudre les équations adaptées."
        ]

      ]

    },

    {
      test: c => has(c, "Fonction logarithme", "Logarithmes et exponentielles"),

      title: "Fonction logarithme",

      notions: [
        "Domaine de définition",
        "Logarithme népérien",
        "Propriétés",
        "Équations"
      ],

      parts: [

        [
          "1. Définition",
          "Le logarithme népérien ln(x) est défini uniquement pour x > 0."
        ],

        [
          "2. Propriété",
          "Pour a et b positifs : ln(ab) = ln(a) + ln(b)."
        ],

        [
          "3. Quotient",
          "Pour a et b positifs : ln(a/b) = ln(a) − ln(b)."
        ],

        [
          "4. Vigilance",
          "Avant toute transformation contenant un logarithme, vérifie que son argument est strictement positif."
        ]

      ]

    },

    {
      test: c => has(c, "Nombres complexes"),

      title: "Nombres complexes",

      notions: [
        "Unité imaginaire",
        "Forme algébrique",
        "Conjugué",
        "Module"
      ],

      parts: [

        [
          "1. Définition",
          "Un nombre complexe s'écrit z = a + ib, où a et b sont réels et i² = −1."
        ],

        [
          "2. Calcul",
          "Les opérations se font en regroupant les parties réelles et imaginaires et en utilisant i² = −1."
        ],

        [
          "3. Conjugué",
          "Le conjugué de a + ib est a − ib."
        ],

        [
          "4. Méthode",
          "Effectue les calculs étape par étape et sépare clairement les parties réelle et imaginaire."
        ]

      ]

    },

    {
      test: c => has(c, "Calcul intégral", "Primitives et intégrales"),

      title: "Primitives et intégrales",

      notions: [
        "Primitive",
        "Intégrale",
        "Aire algébrique",
        "Bornes"
      ],

      parts: [

        [
          "1. Primitive",
          "Une fonction F est une primitive de f si F'(x) = f(x)."
        ],

        [
          "2. Intégrale",
          "Lorsqu'une primitive est connue, l'intégrale sur un intervalle peut être calculée à partir de ses valeurs aux bornes."
        ],

        [
          "3. Formule",
          "∫ de a à b f(x) dx = F(b) − F(a)."
        ],

        [
          "4. Méthode",
          "Cherche une primitive, évalue-la aux deux bornes puis calcule la différence."
        ]

      ]

    },

    /* --------------------------------------------------------
       PHYSIQUE
       -------------------------------------------------------- */

    {
      test: c => has(c, "Masse et poids"),

      title: "Masse et poids",

      notions: [
        "Masse",
        "Poids",
        "Gravité",
        "Newton"
      ],

      parts: [

        [
          "1. Masse",
          "La masse mesure la quantité de matière d'un objet. Son unité SI est le kilogramme."
        ],

        [
          "2. Poids",
          "Le poids est une force exercée notamment par la gravité. Il se mesure en newtons."
        ],

        [
          "3. Relation",
          "Près de la surface terrestre : P = m × g."
        ],

        [
          "4. Méthode",
          "Convertis les unités si nécessaire, applique P = mg et vérifie que le résultat est exprimé en newtons."
        ]

      ]

    },

    {
      test: c =>
        has(
          c,
          "Vitesse et mouvement",
          "Mouvement et vitesse",
          "Cinématique"
        ),

      title: "Mouvement et vitesse",

      notions: [
        "Référentiel",
        "Trajectoire",
        "Distance",
        "Vitesse"
      ],

      parts: [

        [
          "1. Mouvement",
          "Un objet est en mouvement lorsque sa position change au cours du temps par rapport à un référentiel."
        ],

        [
          "2. Vitesse moyenne",
          "La vitesse moyenne se calcule par v = d / t."
        ],

        [
          "3. Unités",
          "Dans le système international, la distance est en mètres, le temps en secondes et la vitesse en mètres par seconde."
        ],

        [
          "4. Méthode",
          "Convertis les unités dans un système cohérent, applique la relation puis vérifie le résultat."
        ]

      ]

    },

    {
      test: c => has(c, "Loi d'Ohm"),

      title: "Loi d'Ohm",

      notions: [
        "Tension",
        "Intensité",
        "Résistance",
        "Relation U = RI"
      ],

      parts: [

        [
          "1. Relation",
          "Pour un conducteur ohmique : U = R × I."
        ],

        [
          "2. Grandeurs",
          "U est la tension en volts, R la résistance en ohms et I l'intensité en ampères."
        ],

        [
          "3. Formules",
          "U = RI, I = U/R et R = U/I lorsque les unités sont cohérentes."
        ],

        [
          "4. Conseil",
          "Écris toujours la relation littérale avant de remplacer les valeurs numériques."
        ]

      ]

    },

    {
      test: c => has(c, "Intensité et tension", "Électricité"),

      title: "Électricité : intensité et tension",

      notions: [
        "Courant électrique",
        "Intensité",
        "Tension",
        "Ampèremètre et voltmètre"
      ],

      parts: [

        [
          "1. Intensité",
          "L'intensité du courant se mesure en ampères avec un ampèremètre branché en série."
        ],

        [
          "2. Tension",
          "La tension se mesure en volts avec un voltmètre branché en dérivation aux bornes du dipôle."
        ],

        [
          "3. Circuit en série",
          "Dans un circuit en série, l'intensité est la même dans les différents dipôles."
        ],

        [
          "4. Circuit en dérivation",
          "Dans un montage en dérivation, la tension est la même aux bornes des branches reliées aux mêmes nœuds."
        ]

      ]

    },

    {
      test: c => has(c, "Puissance et énergie électrique"),

      title: "Puissance et énergie électrique",

      notions: [
        "Puissance",
        "Énergie",
        "Watt",
        "Kilowattheure"
      ],

      parts: [

        [
          "1. Puissance",
          "La puissance indique le rythme auquel l'énergie est transférée. Dans un cas électrique simple : P = U × I."
        ],

        [
          "2. Énergie",
          "L'énergie consommée dépend de la puissance et de la durée : E = P × t."
        ],

        [
          "3. Unités",
          "La puissance s'exprime en watts. L'énergie peut être exprimée en joules ou en kilowattheures."
        ],

        [
          "4. Méthode",
          "Vérifie les unités du temps avant d'effectuer le calcul."
        ]

      ]

    },

    /* --------------------------------------------------------
       CHIMIE
       -------------------------------------------------------- */

    {
      test: c =>
        has(
          c,
          "Atomes et ions",
          "Structure de la matière",
          "Quantité de matière"
        ),

      title: "Atomes, ions et quantité de matière",

      notions: [
        "Noyau",
        "Protons et neutrons",
        "Électrons",
        "Ions",
        "Mole"
      ],

      parts: [

        [
          "1. Atome",
          "Un atome possède un noyau constitué de protons et de neutrons, entouré d'électrons."
        ],

        [
          "2. Atome neutre",
          "Un atome électriquement neutre possède autant d'électrons que de protons."
        ],

        [
          "3. Ions",
          "Un ion se forme lorsqu'un atome ou un groupe d'atomes gagne ou perd des électrons."
        ],

        [
          "4. Quantité de matière",
          "La quantité de matière se mesure en mole. Pour relier une masse m à une masse molaire M, on utilise notamment n = m/M."
        ]

      ]

    },

    {
      test: c => has(c, "Acides et bases"),

      title: "Acides et bases",

      notions: [
        "Solution acide",
        "Solution basique",
        "pH",
        "Neutralité"
      ],

      parts: [

        [
          "1. pH",
          "Le pH caractérise l'acidité ou la basicité d'une solution aqueuse."
        ],

        [
          "2. Interprétation",
          "À température usuelle, une solution neutre a un pH proche de 7, une solution acide un pH inférieur à 7 et une solution basique un pH supérieur à 7."
        ],

        [
          "3. Mesure",
          "Le pH peut être estimé à l'aide d'un indicateur coloré ou mesuré plus précisément avec un pH-mètre."
        ],

        [
          "4. Conseil",
          "Toujours distinguer la valeur du pH et la concentration d'une espèce chimique : elles ne sont pas synonymes."
        ]

      ]

    },

    {
      test: c => has(c, "Radioactivité"),

      title: "Radioactivité",

      notions: [
        "Noyau instable",
        "Désintégration",
        "Rayonnement",
        "Demi-vie"
      ],

      parts: [

        [
          "1. Principe",
          "Certains noyaux atomiques sont instables et peuvent se transformer spontanément en émettant des rayonnements."
        ],

        [
          "2. Désintégration",
          "La désintégration radioactive est aléatoire à l'échelle d'un noyau, mais son comportement statistique est prévisible pour un grand nombre de noyaux."
        ],

        [
          "3. Demi-vie",
          "La demi-vie est la durée nécessaire pour que la moitié des noyaux radioactifs initiaux se soient désintégrés en moyenne."
        ],

        [
          "4. Applications",
          "La radioactivité possède des applications scientifiques et médicales encadrées par des règles de radioprotection."
        ]

      ]

    },

    /* --------------------------------------------------------
       SVT
       -------------------------------------------------------- */

    {
      test: c => has(c, "ADN et information génétique", "Génétique et hérédité", "Hérédité"),

      title: "ADN et information génétique",

      notions: [
        "ADN",
        "Chromosome",
        "Gène",
        "Allèle"
      ],

      parts: [

        [
          "1. ADN",
          "L'ADN est une molécule qui porte une grande partie de l'information génétique."
        ],

        [
          "2. Chromosomes",
          "L'ADN est organisé notamment sous forme de chromosomes dans les cellules."
        ],

        [
          "3. Gènes",
          "Un gène correspond à une région d'ADN associée à une information biologique."
        ],

        [
          "4. Allèles",
          "Des versions différentes d'un même gène sont appelées allèles."
        ],

        [
          "5. À retenir",
          "Il faut distinguer correctement ADN, chromosome, gène et allèle."
        ]

      ]

    },

    {
      test: c => has(c, "Immunité", "Immunité et santé"),

      title: "Immunité et santé",

      notions: [
        "Agents pathogènes",
        "Réponse immunitaire",
        "Anticorps",
        "Mémoire immunitaire"
      ],

      parts: [

        [
          "1. Défense de l'organisme",
          "Le système immunitaire reconnaît et combat de nombreux agents ou éléments étrangers à l'organisme."
        ],

        [
          "2. Réponse immunitaire",
          "Certaines réponses sont rapides et générales tandis que d'autres sont plus spécifiques."
        ],

        [
          "3. Anticorps",
          "Certains lymphocytes participent à la production d'anticorps capables de reconnaître des éléments spécifiques."
        ],

        [
          "4. Mémoire immunitaire",
          "Après certaines rencontres avec un antigène, l'organisme peut conserver une mémoire permettant une réponse plus rapide lors d'une nouvelle exposition."
        ]

      ]

    },

    {
      test: c => has(c, "Régulation de la glycémie"),

      title: "Régulation de la glycémie",

      notions: [
        "Glycémie",
        "Insuline",
        "Glucagon",
        "Pancréas"
      ],

      parts: [

        [
          "1. Glycémie",
          "La glycémie désigne la concentration de glucose dans le sang."
        ],

        [
          "2. Insuline",
          "Après une augmentation de la glycémie, l'insuline favorise notamment l'utilisation et le stockage du glucose, ce qui contribue à faire diminuer la glycémie."
        ],

        [
          "3. Glucagon",
          "Lorsque la glycémie diminue, le glucagon participe à la mobilisation des réserves de glucose, notamment au niveau du foie."
        ],

        [
          "4. Bilan",
          "L'insuline et le glucagon ont des effets opposés et participent ensemble à la régulation de la glycémie."
        ]

      ]

    },

    {
      test: c => has(c, "Reproduction humaine"),

      title: "Reproduction humaine",

      notions: [
        "Gamètes",
        "Appareil reproducteur",
        "Fécondation",
        "Cycle reproducteur"
      ],

      parts: [

        [
          "1. Gamètes",
          "Les gamètes sont les cellules reproductrices."
        ],

        [
          "2. Fécondation",
          "La fécondation correspond à la fusion de deux gamètes et conduit à la formation d'une cellule-œuf."
        ],

        [
          "3. Fonction reproductive",
          "La reproduction humaine implique des organes et des mécanismes hormonaux coordonnés."
        ],

        [
          "4. Santé reproductive",
          "La connaissance du fonctionnement du corps et la prévention font partie de l'éducation à la santé."
        ]

      ]

    },

    /* --------------------------------------------------------
       PHILOSOPHIE
       -------------------------------------------------------- */

    {
      test: c => has(c, "Conscience"),

      title: "La conscience",

      notions: [
        "Conscience de soi",
        "Perception",
        "Réflexion",
        "Responsabilité"
      ],

      parts: [

        [
          "1. Définition",
          "La conscience peut désigner la capacité à avoir une expérience de soi, du monde et de ses propres pensées."
        ],

        [
          "2. Question philosophique",
          "Être conscient de soi signifie-t-il nécessairement se connaître parfaitement ? Cette question permet d'examiner les possibilités et les limites de la conscience."
        ],

        [
          "3. Argumenter",
          "Une dissertation philosophique ne consiste pas seulement à donner une opinion. Il faut définir les notions, poser un problème et construire une argumentation."
        ],

        [
          "4. Méthode",
          "Présente une idée, explique-la, donne un exemple puis examine éventuellement une objection."
        ]

      ]

    },

    {
      test: c => has(c, "Liberté"),

      title: "La liberté",

      notions: [
        "Libre arbitre",
        "Contraintes",
        "Autonomie",
        "Responsabilité"
      ],

      parts: [

        [
          "1. Définition",
          "Être libre peut signifier pouvoir choisir, agir sans contrainte ou être autonome dans ses décisions."
        ],

        [
          "2. Liberté et contraintes",
          "Une réflexion sur la liberté doit distinguer les contraintes extérieures, les habitudes, les règles et les déterminations possibles."
        ],

        [
          "3. Responsabilité",
          "La responsabilité suppose généralement qu'une personne puisse être considérée comme l'auteur de ses actes dans certaines conditions."
        ],

        [
          "4. Méthode",
          "Présente plusieurs conceptions de la liberté et examine leurs conséquences."
        ]

      ]

    },

    {
      test: c => has(c, "Vérité"),

      title: "La vérité",

      notions: [
        "Vrai et faux",
        "Opinion",
        "Preuve",
        "Connaissance"
      ],

      parts: [

        [
          "1. Vérité",
          "La vérité concerne l'accord entre une proposition et ce qu'elle affirme comme réel, selon le cadre de connaissance considéré."
        ],

        [
          "2. Opinion",
          "Une opinion peut être affirmée sans justification suffisante. Une connaissance cherche des raisons ou des méthodes permettant de la justifier."
        ],

        [
          "3. Preuve",
          "La manière de justifier une affirmation dépend du domaine : démonstration en mathématiques, observation et expérimentation dans les sciences, argumentation en philosophie."
        ],

        [
          "4. À retenir",
          "Dans une dissertation, distingue toujours l'affirmation, l'argument et l'exemple."
        ]

      ]

    }

  ];

  /* ==========================================================
     COURS GÉNÉRIQUE POUR TOUS LES AUTRES CHAPITRES
     ========================================================== */

  function genericLesson(subject, chapter) {

    const base =
      BASE[subject] ||
      BASE["Français"];

    let parts = [

      [
        "1. Comprendre le chapitre",

        `${base.intro}

Dans ce chapitre, l'objectif est de comprendre les notions liées à « ${chapter} » et de savoir les utiliser dans une situation d'examen.`
      ],

      [
        "2. Notions essentielles",

        `${base.notions.join(". ")}.`
      ],

      [
        "3. Méthode de travail",

        base.method
      ],

      [
        "4. Application",

        `Pour réviser « ${chapter} », commence par définir les termes importants, puis étudie les propriétés, mécanismes ou règles du chapitre. Termine par un exercice d'application et vérifie chaque étape de ton raisonnement.`
      ],

      [
        "5. Préparation à l'examen",

        "Lis précisément la consigne, réponds avec les notions du cours, justifie les étapes importantes et relis ta réponse avant de la valider."
      ]

    ];

    let notions = [
      ...base.notions
    ];

    /* DISSERTATION / ARGUMENTATION */

    if (
      has(
        chapter,
        "dissertation",
        "argumentation",
        "rédaction",
        "essay"
      )
    ) {

      notions = [
        "Compréhension du sujet",
        "Problématique ou idée directrice",
        "Arguments",
        "Exemples",
        "Organisation du devoir"
      ];

      parts = [

        [
          "1. Comprendre le sujet",
          "Repère les mots importants du sujet et définis les notions principales."
        ],

        [
          "2. Construire la réflexion",
          "Cherche les idées principales, les arguments, les exemples et les éventuelles objections."
        ],

        [
          "3. Organiser le devoir",
          "Construis une introduction claire, un développement organisé et une conclusion qui répond réellement au sujet."
        ],

        [
          "4. Rédiger",
          "Utilise des phrases complètes, des connecteurs logiques et des exemples pertinents."
        ],

        [
          "5. Relire",
          "Vérifie la cohérence, les accords, la ponctuation et le respect du sujet."
        ]

      ];
    }

    /* GRAMMAIRE */

    else if (
      has(
        chapter,
        "grammaire",
        "propositions subordonnées",
        "conjugaison",
        "orthographe"
      )
    ) {

      parts = [

        [
          "1. Identifier",
          `Commence par repérer les éléments grammaticaux étudiés dans le chapitre « ${chapter} » et leur rôle dans la phrase.`
        ],

        [
          "2. Comprendre la règle",
          "Une règle de langue doit être comprise puis appliquée à plusieurs exemples."
        ],

        [
          "3. Analyser",
          "Observe la relation entre les mots, les groupes et les propositions. Utilise les indices grammaticaux pour justifier ton analyse."
        ],

        [
          "4. Appliquer",
          "Transforme ou complète plusieurs phrases en expliquant la règle utilisée."
        ],

        [
          "5. Réviser",
          "Apprends les règles essentielles et entraîne-toi avec des phrases différentes de celles du cours."
        ]

      ];
    }

    /* ANGLAIS */

    else if (
      has(
        chapter,
        "reported speech",
        "passive voice",
        "conditionals",
        "present simple",
        "past simple",
        "future forms"
      )
    ) {

      parts = [

        [
          "1. Identifier la structure",
          `Le chapitre « ${chapter} » demande de reconnaître la structure grammaticale utilisée et le contexte dans lequel elle s'emploie.`
        ],

        [
          "2. Règle essentielle",
          "Repère le sujet, le verbe, le temps et les compléments. Vérifie la forme verbale."
        ],

        [
          "3. Exemple",
          "Lis plusieurs phrases modèles puis transforme une phrase en respectant la règle étudiée."
        ],

        [
          "4. Vocabulaire",
          "Mémorise les mots et expressions utiles au thème afin de comprendre les textes et construire tes propres phrases."
        ],

        [
          "5. Expression",
          "Écris quelques phrases personnelles en utilisant correctement la structure étudiée."
        ]

      ];
    }

    return {

      titre: chapter,

      objectifs: [

        `Comprendre les notions essentielles de « ${chapter} ».`,

        "Maîtriser le vocabulaire et les règles du chapitre.",

        "Savoir appliquer la méthode dans un exercice.",

        "Être capable de justifier une réponse à l'examen."

      ],

      notions,

      lecon: parts,

      resume:
        `À retenir : pour réussir le chapitre « ${chapter} », il faut connaître les définitions essentielles, comprendre la méthode et savoir l'appliquer dans des exercices. Une réponse d'examen doit être claire, justifiée et vérifiée.`,

      qcm: [

        {
          question:
            `Quel est le meilleur objectif pour réviser « ${chapter} » ?`,

          answers: [
            "Comprendre puis savoir appliquer le cours",
            "Mémoriser sans comprendre",
            "Éviter les exercices",
            "Répondre au hasard"
          ],

          correct: 0,

          explanation:
            "Une bonne révision associe compréhension, mémorisation des notions essentielles et entraînement."
        },

        {
          question:
            "Que faut-il faire avant de commencer un exercice ?",

          answers: [
            "Lire la consigne et identifier les données",
            "Choisir une réponse au hasard",
            "Ignorer les unités",
            "Passer directement à la conclusion"
          ],

          correct: 0,

          explanation:
            "La lecture de la consigne et l'identification des données permettent de choisir une méthode adaptée."
        }

      ]

    };

  }

  /* ==========================================================
     TRANSFORMER UN COURS SPÉCIFIQUE EN OBJET COMPLET
     ========================================================== */

  function makeLesson(subject, chapter) {

    const found = SPECIALS.find(
      item => item.test(normalize(chapter), normalize(subject))
    );

    const generic = genericLesson(
      subject,
      chapter
    );

    if (!found) {

      return generic;

    }

    return {

      titre:
        found.title || chapter,

      objectifs: [

        `Comprendre « ${found.title || chapter} ».`,

        "Connaître les définitions et propriétés essentielles.",

        "Savoir appliquer la méthode dans un exercice.",

        "Justifier et vérifier son résultat."

      ],

      notions:
        found.notions || generic.notions,

      lecon:
        found.parts || generic.lecon,

      resume:
        `À retenir : ${(
          found.notions ||
          []
        ).join(", ")}. Il faut connaître les propriétés, savoir choisir la méthode adaptée et vérifier le résultat.`,

      qcm:
        found.qcm || generic.qcm

    };

  }

  /* ==========================================================
     PROXY POUR LES MATIÈRES
     ========================================================== */

  function createSubjectProxy(subject) {

    const target = {};

    return new Proxy(target, {

      get(obj, chapter) {

        if (typeof chapter !== "string") {

          return obj[chapter];

        }

        if (!obj[chapter]) {

          obj[chapter] =
            makeLesson(
              subject,
              chapter
            );

        }

        return obj[chapter];

      },

      set(obj, chapter, value) {

        obj[chapter] =
          value;

        return true;

      }

    });

  }

  /* ==========================================================
     PROXY POUR LES MATIÈRES
     ========================================================== */

  function createMatieresProxy() {

    const target = {};

    return new Proxy(target, {

      get(obj, subject) {

        if (typeof subject !== "string") {

          return obj[subject];

        }

        if (!obj[subject]) {

          obj[subject] =
            createSubjectProxy(
              subject
            );

        }

        return obj[subject];

      },

      set(obj, subject, value) {

        obj[subject] =
          value;

        return true;

      }

    });

  }

  /* ==========================================================
     PROXY POUR LES SÉRIES DU BAC
     ========================================================== */

  function createSeriesProxy() {

    const target = {};

    return new Proxy(target, {

      get(obj, series) {

        if (typeof series !== "string") {

          return obj[series];

        }

        if (!obj[series]) {

          obj[series] = {

            matieres:
              createMatieresProxy()

          };

        }

        return obj[series];

      },

      set(obj, series, value) {

        obj[series] =
          value;

        return true;

      }

    });

  }

  /* ==========================================================
     INITIALISATION BEPC
     ========================================================== */

  RA.BEPC =
    RA.BEPC || {};

  RA.BEPC.matieres =
    createMatieresProxy();

  /* ==========================================================
     INITIALISATION BAC
     ========================================================== */

  RA.BAC =
    RA.BAC || {};

  RA.BAC.series =
    createSeriesProxy();

  /* ==========================================================
     PRÉREMPLISSAGE DU PROGRAMME OFFICIEL DU FICHIER
     programme.js
     ========================================================== */

  if (window.RA_PROGRAMME) {

    /* ---------- BEPC ---------- */

    const bepc =
      window.RA_PROGRAMME
        .BEPC
        ?.matieres || {};

    Object.entries(
      bepc
    ).forEach(
      ([subject, chapters]) => {

        const store =
          RA.BEPC
            .matieres[subject];

        chapters.forEach(
          chapter => {

            store[chapter] =
              makeLesson(
                subject,
                chapter
              );

          }
        );

      }
    );

    /* ---------- BAC ---------- */

    const series =
      window.RA_PROGRAMME
        .BAC
        ?.series || {};

    Object.entries(
      series
    ).forEach(
      ([serie, data]) => {

        const subjects =
          data
            ?.matieres || {};

        Object.entries(
          subjects
        ).forEach(
          ([subject, chapters]) => {

            const store =
              RA.BAC
                .series[serie]
                .matieres[subject];

            chapters.forEach(
              chapter => {

                store[chapter] =
                  makeLesson(
                    subject,
                    chapter
                  );

              }
            );

          }
        );

      }
    );

  }

  /* ==========================================================
     COMPATIBILITÉ AVEC LES NOMS DE MATIÈRES DU GAME.JS
     ========================================================== */

  /*
   * game.js utilise parfois :
   * "Physique-chimie"
   * alors que programme.js utilise :
   * "Physique-Chimie"
   *
   * On prépare donc les deux accès.
   */

  RA.BEPC.matieres["Physique-chimie"] =
    RA.BEPC.matieres["Physique-chimie"];

  RA.BEPC.matieres["Histoire"] =
    RA.BEPC.matieres["Histoire"];

  RA.BEPC.matieres["Géographie"] =
    RA.BEPC.matieres["Géographie"];

  RA.BEPC.matieres["Éducation civique"] =
    RA.BEPC.matieres["Éducation civique"];

  /*
   * Fin de la bibliothèque.
   */

  window.RA_COURS =
    RA;

})();
