"use strict";

/*
 * ============================================================
 * RÉUSSITE ACADÉMIE — COURS BEPC MATHÉMATIQUES
 * ============================================================
 * Niveau : Troisième
 * Matière : Mathématiques
 * 13 chapitres
 *
 * Compatible avec :
 *   - programme.js
 *   - game.js
 *   - index.html
 *   - style.css
 *
 * Structure :
 * RA_COURS.BEPC.matieres["Mathématiques"]["Nom du chapitre"]
 *
 * Créé par Belfort
 * ============================================================
 */

window.RA_COURS = window.RA_COURS || {};

window.RA_COURS.BEPC = window.RA_COURS.BEPC || {};
window.RA_COURS.BEPC.matieres =
  window.RA_COURS.BEPC.matieres || {};

window.RA_COURS.BEPC.matieres["Mathématiques"] = {

  /* ==========================================================
     1. CALCUL NUMÉRIQUE
     ========================================================== */

  "Calcul numérique": {

    titre: "Calcul numérique",

    objectifs: [
      "Maîtriser les opérations sur les nombres.",
      "Respecter les priorités de calcul.",
      "Utiliser correctement les fractions et les nombres relatifs.",
      "Savoir effectuer un calcul numérique proprement."
    ],

    notions: [
      "Nombres relatifs",
      "Fractions",
      "Puissances",
      "Priorités opératoires",
      "Calculs avec parenthèses"
    ],

    lecon: [

      {
        titre: "1. Les nombres relatifs",
        texte:
          "Un nombre relatif peut être positif ou négatif. " +
          "Les nombres positifs sont supérieurs ou égaux à zéro et les nombres négatifs sont inférieurs ou égaux à zéro. " +
          "Pour comparer deux nombres relatifs, on peut les placer sur une droite graduée.\n\n" +
          "Exemple : -5 < -2 car -5 est situé à gauche de -2 sur la droite graduée."
      },

      {
        titre: "2. Addition et soustraction",
        texte:
          "Pour additionner deux nombres de même signe, on additionne leurs distances à zéro et on conserve le signe commun.\n\n" +
          "Exemple : (-4) + (-7) = -11.\n\n" +
          "Pour deux nombres de signes différents, on soustrait les distances à zéro et on conserve le signe du nombre ayant la plus grande distance à zéro.\n\n" +
          "Exemple : (-8) + 3 = -5."
      },

      {
        titre: "3. Multiplication et division",
        texte:
          "Pour multiplier ou diviser des nombres relatifs, on applique la règle des signes.\n\n" +
          "Même signe : résultat positif.\n" +
          "Signes différents : résultat négatif.\n\n" +
          "Exemples :\n" +
          "(-4) × (-3) = 12.\n" +
          "(-20) ÷ 5 = -4."
      },

      {
        titre: "4. Fractions",
        texte:
          "Pour additionner ou soustraire deux fractions, il faut les réduire au même dénominateur.\n\n" +
          "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux.\n\n" +
          "Pour diviser par une fraction non nulle, on multiplie par son inverse.\n\n" +
          "Exemple : 2/3 × 5/4 = 10/12 = 5/6."
      },

      {
        titre: "5. Priorités opératoires",
        texte:
          "Dans une expression numérique, on effectue les calculs dans l'ordre suivant :\n\n" +
          "1. Parenthèses.\n" +
          "2. Puissances.\n" +
          "3. Multiplications et divisions.\n" +
          "4. Additions et soustractions.\n\n" +
          "Exemple : 3 + 2 × 5 = 3 + 10 = 13.\n\n" +
          "Il ne faut donc pas effectuer les opérations simplement de gauche à droite."
      },

      {
        titre: "6. Méthode pour réussir un calcul",
        texte:
          "Recopie l'expression correctement, respecte les priorités opératoires, détaille les étapes et simplifie le résultat final.\n\n" +
          "Pour un calcul avec fractions, vérifie toujours les signes et cherche à simplifier la fraction."
      }

    ],

    resume:
      "Un calcul numérique correct dépend principalement du respect des signes, des règles sur les fractions et des priorités opératoires."
  },


  /* ==========================================================
     2. CALCUL LITTÉRAL
     ========================================================== */

  "Calcul littéral": {

    titre: "Calcul littéral",

    objectifs: [
      "Comprendre la notion d'expression littérale.",
      "Réduire une expression.",
      "Calculer la valeur d'une expression pour une valeur donnée.",
      "Utiliser correctement les parenthèses."
    ],

    notions: [
      "Expression littérale",
      "Terme",
      "Coefficient",
      "Réduction",
      "Valeur numérique"
    ],

    lecon: [

      {
        titre: "1. Qu'est-ce qu'une expression littérale ?",
        texte:
          "Une expression littérale est une expression mathématique contenant une ou plusieurs lettres représentant des nombres.\n\n" +
          "Exemple : 3x + 5, 2a - 7 ou 4x² + 3x."
      },

      {
        titre: "2. Réduire une expression",
        texte:
          "Réduire une expression consiste à regrouper les termes de même nature.\n\n" +
          "Exemple :\n" +
          "3x + 5x = 8x.\n\n" +
          "De même :\n" +
          "7a - 2a = 5a.\n\n" +
          "On ne peut pas additionner directement des termes qui ne sont pas semblables."
      },

      {
        titre: "3. Développer une expression simple",
        texte:
          "La distributivité permet de supprimer des parenthèses.\n\n" +
          "a(b + c) = ab + ac.\n\n" +
          "Exemple :\n" +
          "3(x + 4) = 3x + 12."
      },

      {
        titre: "4. Calculer une valeur numérique",
        texte:
          "Pour calculer la valeur d'une expression littérale, on remplace les lettres par les nombres donnés puis on effectue le calcul en respectant les priorités opératoires.\n\n" +
          "Exemple : si x = 2, alors 3x + 5 = 3 × 2 + 5 = 11."
      },

      {
        titre: "5. Attention aux signes",
        texte:
          "Lorsque l'on remplace une lettre par un nombre négatif, il est préférable d'utiliser des parenthèses.\n\n" +
          "Exemple : pour x = -2, l'expression x² devient (-2)² = 4."
      }

    ],

    resume:
      "Le calcul littéral utilise des lettres pour représenter des nombres. Il faut savoir réduire, développer et calculer la valeur d'une expression."
  },


  /* ==========================================================
     3. DÉVELOPPEMENT ET FACTORISATION
     ========================================================== */

  "Développement et factorisation": {

    titre: "Développement et factorisation",

    objectifs: [
      "Maîtriser la distributivité.",
      "Développer une expression.",
      "Factoriser une expression.",
      "Reconnaître les identités remarquables simples."
    ],

    notions: [
      "Distributivité simple",
      "Double distributivité",
      "Factorisation",
      "Facteur commun",
      "Identités remarquables"
    ],

    lecon: [

      {
        titre: "1. Développer avec la distributivité",
        texte:
          "Développer consiste à transformer un produit en somme ou différence.\n\n" +
          "La règle fondamentale est :\n" +
          "a(b + c) = ab + ac.\n\n" +
          "Exemple :\n" +
          "5(x + 2) = 5x + 10."
      },

      {
        titre: "2. Double distributivité",
        texte:
          "Pour développer un produit de deux parenthèses, chaque terme de la première parenthèse doit être multiplié par chaque terme de la deuxième.\n\n" +
          "Exemple :\n" +
          "(x + 2)(x + 3)\n" +
          "= x² + 3x + 2x + 6\n" +
          "= x² + 5x + 6."
      },

      {
        titre: "3. Factoriser avec un facteur commun",
        texte:
          "Factoriser consiste à transformer une somme ou une différence en produit.\n\n" +
          "Exemple :\n" +
          "6x + 12 = 6(x + 2).\n\n" +
          "Le nombre 6 est le facteur commun."
      },

      {
        titre: "4. Carré d'une somme",
        texte:
          "L'identité remarquable suivante est importante :\n\n" +
          "(a + b)² = a² + 2ab + b².\n\n" +
          "Exemple :\n" +
          "(x + 3)² = x² + 6x + 9."
      },

      {
        titre: "5. Carré d'une différence",
        texte:
          "(a - b)² = a² - 2ab + b².\n\n" +
          "Exemple :\n" +
          "(x - 4)² = x² - 8x + 16."
      },

      {
        titre: "6. Différence de deux carrés",
        texte:
          "Une autre identité remarquable est :\n\n" +
          "a² - b² = (a - b)(a + b).\n\n" +
          "Exemple :\n" +
          "x² - 25 = (x - 5)(x + 5)."
      }

    ],

    resume:
      "Développer transforme un produit en somme. Factoriser transforme une somme en produit. Les identités remarquables permettent de réaliser rapidement certaines transformations."
  },


  /* ==========================================================
     4. ÉQUATIONS ET INÉQUATIONS
     ========================================================== */

  "Équations et inéquations": {

    titre: "Équations et inéquations",

    objectifs: [
      "Comprendre la notion d'équation.",
      "Résoudre une équation du premier degré.",
      "Résoudre une inéquation simple.",
      "Vérifier une solution."
    ],

    notions: [
      "Inconnue",
      "Solution",
      "Équation",
      "Inéquation",
      "Équivalence"
    ],

    lecon: [

      {
        titre: "1. Définition d'une équation",
        texte:
          "Une équation est une égalité contenant une inconnue, souvent représentée par x.\n\n" +
          "Exemple :\n" +
          "3x + 2 = 11.\n\n" +
          "Résoudre cette équation consiste à trouver la valeur de x qui rend l'égalité vraie."
      },

      {
        titre: "2. Principe d'équivalence",
        texte:
          "On peut ajouter, soustraire, multiplier ou diviser les deux membres d'une équation par un même nombre non nul sans changer ses solutions.\n\n" +
          "Le but est d'isoler l'inconnue."
      },

      {
        titre: "3. Résoudre une équation",
        texte:
          "Exemple :\n" +
          "3x + 2 = 11.\n\n" +
          "On soustrait 2 aux deux membres :\n" +
          "3x = 9.\n\n" +
          "On divise par 3 :\n" +
          "x = 3.\n\n" +
          "La solution est donc x = 3."
      },

      {
        titre: "4. Vérifier une solution",
        texte:
          "Pour vérifier une solution, on remplace l'inconnue par la valeur obtenue dans l'équation de départ.\n\n" +
          "Pour x = 3 :\n" +
          "3 × 3 + 2 = 11.\n\n" +
          "L'égalité est vraie : la solution est correcte."
      },

      {
        titre: "5. Comprendre une inéquation",
        texte:
          "Une inéquation utilise les signes <, >, inférieur ou égal, ou supérieur ou égal.\n\n" +
          "Exemple :\n" +
          "2x + 1 < 7.\n\n" +
          "On obtient :\n" +
          "2x < 6,\n" +
          "donc x < 3."
      },

      {
        titre: "6. Attention au changement de signe",
        texte:
          "Lorsqu'on multiplie ou divise une inéquation par un nombre négatif, le sens de l'inégalité change.\n\n" +
          "Exemple :\n" +
          "-2x < 6.\n\n" +
          "En divisant par -2, on obtient :\n" +
          "x > -3."
      }

    ],

    resume:
      "Pour résoudre une équation, on isole l'inconnue en conservant l'équivalence. Pour une inéquation, le sens du signe change lorsqu'on multiplie ou divise par un nombre négatif."
  },


  /* ==========================================================
     5. SYSTÈMES D'ÉQUATIONS
     ========================================================== */

  "Systèmes d'équations": {

    titre: "Systèmes d'équations",

    objectifs: [
      "Comprendre un système de deux équations.",
      "Résoudre un système par substitution.",
      "Résoudre un système par combinaison.",
      "Vérifier une solution."
    ],

    notions: [
      "Système",
      "Inconnues",
      "Substitution",
      "Combinaison",
      "Couple solution"
    ],

    lecon: [

      {
        titre: "1. Définition d'un système",
        texte:
          "Un système de deux équations à deux inconnues cherche deux nombres x et y qui vérifient simultanément les deux équations.\n\n" +
          "Exemple :\n" +
          "x + y = 10\n" +
          "x - y = 2."
      },

      {
        titre: "2. Méthode par substitution",
        texte:
          "On exprime une inconnue en fonction de l'autre dans une équation, puis on remplace cette expression dans la deuxième équation.\n\n" +
          "Exemple :\n" +
          "x + y = 10 donne x = 10 - y.\n\n" +
          "On remplace ensuite x dans la deuxième équation."
      },

      {
        titre: "3. Méthode par combinaison",
        texte:
          "La méthode par combinaison consiste à multiplier éventuellement une ou plusieurs équations afin d'obtenir des coefficients opposés pour une inconnue.\n\n" +
          "On additionne ensuite les équations afin d'éliminer cette inconnue."
      },

      {
        titre: "4. Exemple complet",
        texte:
          "Considérons :\n" +
          "x + y = 10\n" +
          "x - y = 2.\n\n" +
          "En additionnant les deux équations :\n" +
          "2x = 12.\n\n" +
          "Donc x = 6.\n\n" +
          "Puis 6 + y = 10, donc y = 4.\n\n" +
          "La solution est (6 ; 4)."
      },

      {
        titre: "5. Vérification",
        texte:
          "On remplace x et y par les valeurs obtenues dans chacune des équations de départ.\n\n" +
          "6 + 4 = 10.\n" +
          "6 - 4 = 2.\n\n" +
          "Les deux égalités sont vraies."
      }

    ],

    resume:
      "Un système doit être résolu en trouvant un couple (x ; y) qui vérifie toutes les équations simultanément."
  },


  /* ==========================================================
     6. FONCTIONS LINÉAIRES ET AFFINES
     ========================================================== */

  "Fonctions linéaires et affines": {

    titre: "Fonctions linéaires et affines",

    objectifs: [
      "Reconnaître une fonction linéaire.",
      "Reconnaître une fonction affine.",
      "Calculer une image.",
      "Déterminer un antécédent simple.",
      "Lire une représentation graphique."
    ],

    notions: [
      "Fonction",
      "Image",
      "Antécédent",
      "Fonction linéaire",
      "Fonction affine",
      "Coefficient directeur"
    ],

    lecon: [

      {
        titre: "1. Notion de fonction",
        texte:
          "Une fonction associe à un nombre x un unique nombre appelé son image.\n\n" +
          "On peut noter y = f(x).\n\n" +
          "Exemple : f(x) = 2x + 1.\n\n" +
          "Pour x = 3 : f(3) = 2 × 3 + 1 = 7."
      },

      {
        titre: "2. Fonction linéaire",
        texte:
          "Une fonction linéaire est de la forme f(x) = ax, où a est un nombre appelé coefficient.\n\n" +
          "Sa représentation graphique est une droite qui passe par l'origine du repère."
      },

      {
        titre: "3. Fonction affine",
        texte:
          "Une fonction affine est de la forme f(x) = ax + b.\n\n" +
          "a est le coefficient directeur et b est l'ordonnée à l'origine.\n\n" +
          "Sa représentation graphique est une droite."
      },

      {
        titre: "4. Calculer une image",
        texte:
          "Pour calculer l'image d'un nombre, on remplace x par ce nombre.\n\n" +
          "Exemple :\n" +
          "f(x) = 3x - 2.\n\n" +
          "f(4) = 3 × 4 - 2 = 10."
      },

      {
        titre: "5. Trouver un antécédent",
        texte:
          "Pour trouver l'antécédent d'un nombre, on résout l'équation f(x) = nombre.\n\n" +
          "Exemple :\n" +
          "f(x) = 2x + 1.\n\n" +
          "Pour trouver l'antécédent de 7 :\n" +
          "2x + 1 = 7,\n" +
          "2x = 6,\n" +
          "x = 3."
      }

    ],

    resume:
      "Une fonction linéaire est de la forme ax. Une fonction affine est de la forme ax + b. Il faut savoir calculer images et antécédents et interpréter une droite."
  },


  /* ==========================================================
     7. THÉORÈME DE PYTHAGORE
     ========================================================== */

  "Théorème de Pythagore": {

    titre: "Théorème de Pythagore",

    objectifs: [
      "Identifier l'hypoténuse d'un triangle rectangle.",
      "Utiliser le théorème de Pythagore.",
      "Calculer une longueur.",
      "Utiliser la réciproque du théorème."
    ],

    notions: [
      "Triangle rectangle",
      "Hypoténuse",
      "Théorème de Pythagore",
      "Réciproque"
    ],

    lecon: [

      {
        titre: "1. Identifier l'hypoténuse",
        texte:
          "Dans un triangle rectangle, l'hypoténuse est le côté opposé à l'angle droit. C'est également le côté le plus long du triangle."
      },

      {
        titre: "2. Énoncé du théorème",
        texte:
          "Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.\n\n" +
          "Si ABC est rectangle en A :\n" +
          "BC² = AB² + AC²."
      },

      {
        titre: "3. Calculer l'hypoténuse",
        texte:
          "Si les deux côtés de l'angle droit mesurent 3 cm et 4 cm :\n\n" +
          "BC² = 3² + 4²\n" +
          "BC² = 9 + 16\n" +
          "BC² = 25\n\n" +
          "Donc BC = 5 cm."
      },

      {
        titre: "4. Calculer un côté de l'angle droit",
        texte:
          "Si l'hypoténuse mesure 10 cm et un côté mesure 6 cm :\n\n" +
          "x² = 10² - 6²\n" +
          "x² = 100 - 36\n" +
          "x² = 64\n\n" +
          "Donc x = 8 cm."
      },

      {
        titre: "5. Réciproque du théorème",
        texte:
          "La réciproque permet de démontrer qu'un triangle est rectangle.\n\n" +
          "Si, pour le plus grand côté c, on a :\n" +
          "c² = a² + b²,\n\n" +
          "alors le triangle est rectangle."
      }

    ],

    resume:
      "Dans un triangle rectangle, hypoténuse² = côté² + côté². La réciproque permet de démontrer qu'un triangle est rectangle."
  },


  /* ==========================================================
     8. THÉORÈME DE THALÈS
     ========================================================== */

  "Théorème de Thalès": {

    titre: "Théorème de Thalès",

    objectifs: [
      "Reconnaître une configuration de Thalès.",
      "Écrire les rapports correspondants.",
      "Calculer une longueur.",
      "Utiliser la réciproque de Thalès."
    ],

    notions: [
      "Triangles",
      "Droites parallèles",
      "Proportionnalité",
      "Rapports de longueurs",
      "Réciproque"
    ],

    lecon: [

      {
        titre: "1. Configuration de Thalès",
        texte:
          "Le théorème de Thalès s'utilise notamment lorsque deux droites sont coupées par des droites sécantes et qu'une paire de droites est parallèle."
      },

      {
        titre: "2. Énoncé du théorème",
        texte:
          "Lorsque deux triangles sont formés par des droites sécantes et une droite parallèle, les longueurs correspondantes sont proportionnelles.\n\n" +
          "On peut écrire une égalité de rapports entre les côtés correspondants."
      },

      {
        titre: "3. Calculer une longueur",
        texte:
          "Pour calculer une longueur inconnue, on écrit d'abord correctement les rapports de longueurs correspondantes, puis on utilise le produit en croix."
      },

      {
        titre: "4. Produit en croix",
        texte:
          "Si a/b = c/x, alors a × x = b × c.\n\n" +
          "On peut ensuite isoler x.\n\n" +
          "Il faut toujours vérifier que les longueurs placées dans les rapports correspondent bien aux mêmes directions."
      },

      {
        titre: "5. Réciproque de Thalès",
        texte:
          "La réciproque du théorème de Thalès permet de démontrer que deux droites sont parallèles lorsque les rapports de longueurs correspondantes sont égaux."
      }

    ],

    resume:
      "Le théorème de Thalès permet d'établir des rapports de proportionnalité dans une configuration comportant des droites parallèles."
  },


  /* ==========================================================
     9. TRIGONOMÉTRIE
     ========================================================== */

  "Trigonométrie": {

    titre: "Trigonométrie dans le triangle rectangle",

    objectifs: [
      "Identifier les côtés par rapport à un angle.",
      "Utiliser sinus, cosinus et tangente.",
      "Calculer une longueur.",
      "Déterminer un angle."
    ],

    notions: [
      "Sinus",
      "Cosinus",
      "Tangente",
      "Côté opposé",
      "Côté adjacent",
      "Hypoténuse"
    ],

    lecon: [

      {
        titre: "1. Les côtés d'un triangle rectangle",
        texte:
          "Par rapport à un angle aigu, on distingue trois côtés : l'hypoténuse, le côté opposé à l'angle et le côté adjacent à l'angle."
      },

      {
        titre: "2. Le cosinus",
        texte:
          "Dans un triangle rectangle :\n\n" +
          "cos(angle) = côté adjacent / hypoténuse.\n\n" +
          "Le cosinus permet notamment de calculer une longueur lorsqu'on connaît un angle et l'hypoténuse."
      },

      {
        titre: "3. Le sinus",
        texte:
          "Dans un triangle rectangle :\n\n" +
          "sin(angle) = côté opposé / hypoténuse.\n\n" +
          "Il permet de relier un angle, le côté opposé et l'hypoténuse."
      },

      {
        titre: "4. La tangente",
        texte:
          "Dans un triangle rectangle :\n\n" +
          "tan(angle) = côté opposé / côté adjacent.\n\n" +
          "Elle est particulièrement utile lorsque l'on connaît les deux côtés qui ne sont pas l'hypoténuse."
      },

      {
        titre: "5. Calculer un angle",
        texte:
          "Lorsque le rapport trigonométrique est connu, on utilise la fonction réciproque correspondante sur la calculatrice : arccos, arcsin ou arctan.\n\n" +
          "Il faut vérifier que la calculatrice est réglée en degrés lorsque l'exercice travaille en degrés."
      }

    ],

    resume:
      "Dans un triangle rectangle : sin = opposé/hypoténuse, cos = adjacent/hypoténuse et tan = opposé/adjacent."
  },


  /* ==========================================================
     10. RACINES CARRÉES
     ========================================================== */

  "Racines carrées": {

    titre: "Racines carrées",

    objectifs: [
      "Comprendre la racine carrée.",
      "Calculer des racines carrées simples.",
      "Simplifier certaines racines.",
      "Effectuer des calculs avec des racines."
    ],

    notions: [
      "Carré d'un nombre",
      "Racine carrée",
      "Produit",
      "Quotient",
      "Simplification"
    ],

    lecon: [

      {
        titre: "1. Définition",
        texte:
          "Pour un nombre positif a, la racine carrée de a est le nombre positif dont le carré vaut a.\n\n" +
          "Par exemple : √25 = 5 car 5² = 25."
      },

      {
        titre: "2. Racines carrées usuelles",
        texte:
          "Il est utile de connaître les carrés parfaits :\n\n" +
          "1² = 1\n" +
          "2² = 4\n" +
          "3² = 9\n" +
          "4² = 16\n" +
          "5² = 25\n" +
          "6² = 36\n" +
          "7² = 49\n" +
          "8² = 64\n" +
          "9² = 81\n" +
          "10² = 100."
      },

      {
        titre: "3. Produit de racines",
        texte:
          "Pour des nombres positifs :\n\n" +
          "√a × √b = √(ab).\n\n" +
          "Exemple :\n" +
          "√2 × √8 = √16 = 4."
      },

      {
        titre: "4. Simplifier une racine",
        texte:
          "On peut rechercher un carré parfait comme facteur du nombre sous la racine.\n\n" +
          "Exemple :\n" +
          "√12 = √(4 × 3) = √4 × √3 = 2√3."
      },

      {
        titre: "5. Attention aux erreurs",
        texte:
          "La racine carrée d'un nombre positif est toujours positive.\n\n" +
          "Par exemple, √25 = 5 et non -5.\n\n" +
          "En revanche, l'équation x² = 25 possède deux solutions : x = 5 et x = -5."
      }

    ],

    resume:
      "La racine carrée de a est le nombre positif dont le carré vaut a. Pour simplifier une racine, on recherche notamment des facteurs qui sont des carrés parfaits."
  },


  /* ==========================================================
     11. VECTEURS ET TRANSLATIONS
     ========================================================== */

  "Vecteurs et translations": {

    titre: "Vecteurs et translations",

    objectifs: [
      "Comprendre la notion de vecteur.",
      "Identifier direction, sens et longueur.",
      "Utiliser les coordonnées d'un vecteur.",
      "Comprendre une translation."
    ],

    notions: [
      "Vecteur",
      "Direction",
      "Sens",
      "Norme",
      "Coordonnées",
      "Translation"
    ],

    lecon: [

      {
        titre: "1. Définition d'un vecteur",
        texte:
          "Un vecteur est caractérisé par une direction, un sens et une longueur appelée norme.\n\n" +
          "Le vecteur AB représente le déplacement qui permet d'aller du point A au point B."
      },

      {
        titre: "2. Coordonnées d'un vecteur",
        texte:
          "Dans un repère, si A(xA ; yA) et B(xB ; yB), alors :\n\n" +
          "AB = (xB - xA ; yB - yA).\n\n" +
          "On soustrait donc les coordonnées du point de départ de celles du point d'arrivée."
      },

      {
        titre: "3. Égalité de vecteurs",
        texte:
          "Deux vecteurs sont égaux lorsqu'ils ont la même direction, le même sens et la même longueur.\n\n" +
          "Des vecteurs égaux correspondent à des déplacements identiques."
      },

      {
        titre: "4. Translation",
        texte:
          "Une translation déplace tous les points d'une figure selon le même vecteur.\n\n" +
          "La forme, les longueurs et les angles de la figure sont conservés."
      },

      {
        titre: "5. Calcul avec les vecteurs",
        texte:
          "Pour additionner deux vecteurs, on additionne leurs coordonnées composante par composante.\n\n" +
          "Exemple :\n" +
          "(2 ; 3) + (4 ; -1) = (6 ; 2)."
      }

    ],

    resume:
      "Un vecteur décrit un déplacement par sa direction, son sens et sa longueur. Une translation déplace une figure selon un même vecteur."
  },


  /* ==========================================================
     12. STATISTIQUES ET PROBABILITÉS
     ========================================================== */

  "Statistiques et probabilités": {

    titre: "Statistiques et probabilités",

    objectifs: [
      "Calculer une fréquence.",
      "Calculer une moyenne.",
      "Lire un tableau statistique.",
      "Comprendre une expérience aléatoire.",
      "Calculer une probabilité simple."
    ],

    notions: [
      "Population",
      "Effectif",
      "Fréquence",
      "Moyenne",
      "Événement",
      "Probabilité"
    ],

    lecon: [

      {
        titre: "1. Vocabulaire statistique",
        texte:
          "La population est l'ensemble des individus étudiés.\n\n" +
          "Le caractère est la propriété observée.\n\n" +
          "L'effectif d'une valeur est le nombre de fois où cette valeur apparaît."
      },

      {
        titre: "2. Fréquence",
        texte:
          "La fréquence d'une valeur se calcule par :\n\n" +
          "fréquence = effectif / effectif total.\n\n" +
          "Pour obtenir un pourcentage, on multiplie la fréquence par 100."
      },

      {
        titre: "3. Moyenne",
        texte:
          "Lorsque les valeurs ont des effectifs différents, on calcule une moyenne pondérée.\n\n" +
          "Moyenne = somme des produits (valeur × effectif) / effectif total."
      },

      {
        titre: "4. Expérience aléatoire",
        texte:
          "Une expérience aléatoire possède plusieurs résultats possibles et on ne peut pas prévoir avec certitude le résultat avant l'expérience.\n\n" +
          "Exemple : lancer une pièce ou un dé."
      },

      {
        titre: "5. Probabilité",
        texte:
          "Une probabilité est comprise entre 0 et 1.\n\n" +
          "0 correspond à un événement impossible.\n" +
          "1 correspond à un événement certain.\n\n" +
          "Dans une situation équiprobable :\n" +
          "P(A) = nombre de cas favorables / nombre de cas possibles."
      },

      {
        titre: "6. Événement contraire",
        texte:
          "Si A est un événement, son événement contraire est noté non-A.\n\n" +
          "On a :\n" +
          "P(non-A) = 1 - P(A)."
      }

    ],

    resume:
      "Les statistiques permettent d'organiser et d'analyser des données. Les probabilités mesurent la possibilité qu'un événement se réalise."
  },


  /* ==========================================================
     13. GÉOMÉTRIE DANS L'ESPACE
     ========================================================== */

  "Géométrie dans l'espace": {

    titre: "Géométrie dans l'espace",

    objectifs: [
      "Reconnaître les principaux solides.",
      "Calculer des longueurs dans l'espace.",
      "Calculer une aire.",
      "Calculer un volume.",
      "Utiliser les formules adaptées."
    ],

    notions: [
      "Cube",
      "Pavé droit",
      "Prisme",
      "Cylindre",
      "Pyramide",
      "Volume",
      "Aire"
    ],

    lecon: [

      {
        titre: "1. Le pavé droit",
        texte:
          "Un pavé droit possède trois dimensions : longueur, largeur et hauteur.\n\n" +
          "Son volume est :\n" +
          "V = longueur × largeur × hauteur."
      },

      {
        titre: "2. Le cube",
        texte:
          "Un cube possède six faces carrées identiques.\n\n" +
          "Si son côté mesure a :\n" +
          "Aire d'une face = a².\n\n" +
          "Volume = a³."
      },

      {
        titre: "3. Le prisme",
        texte:
          "Le volume d'un prisme droit est obtenu en multipliant l'aire de sa base par sa hauteur.\n\n" +
          "V = aire de la base × hauteur."
      },

      {
        titre: "4. Le cylindre",
        texte:
          "Pour un cylindre de rayon r et de hauteur h :\n\n" +
          "Volume = π × r² × h.\n\n" +
          "Il faut utiliser les mêmes unités pour toutes les longueurs."
      },

      {
        titre: "5. La pyramide",
        texte:
          "Le volume d'une pyramide est :\n\n" +
          "V = (aire de la base × hauteur) / 3."
      },

      {
        titre: "6. Les unités de volume",
        texte:
          "Les volumes s'expriment en unités cubes : cm³, m³, dm³, etc.\n\n" +
          "Il faut être attentif aux conversions car une conversion de longueur n'est pas identique à une conversion de volume."
      },

      {
        titre: "7. Méthode pour résoudre un problème",
        texte:
          "Commence par identifier le solide et les dimensions données. Choisis la formule correspondant à la grandeur recherchée. Remplace les lettres par les valeurs numériques, effectue le calcul puis indique clairement l'unité du résultat."
      }

    ],

    resume:
      "En géométrie dans l'espace, il faut reconnaître le solide, identifier ses dimensions et appliquer la formule adaptée pour calculer une aire ou un volume."
  }

};


/* ============================================================
   FIN DU COURS BEPC MATHÉMATIQUES
   ============================================================ */

console.log(
  "RÉUSSITE ACADÉMIE : cours BEPC Mathématiques chargé — 13 chapitres."
);
