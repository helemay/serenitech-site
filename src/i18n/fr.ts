import { en, type Dict } from "./en";

// Rule (16/09/2026): texts that belong to AI-generated images and to the animated drawings (hero HUD,
// system schematic, live console readouts) stay in the original English in every language.

export const fr: Dict = {
  htmlLang: "fr",
  brand: {
    alt: "Serenitech — La sérénité au-delà de la ligne de flottaison",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    sectors: "Secteurs",
    technology: "Technologie",
    company: "Entreprise",
    contact: "Contact",
    cta: "Demander un briefing technique",
    menu: "Ouvrir le menu",
    close: "Fermer le menu",
    language: "Langue",
  },
  meta: {
    home: {
      title: "Serenitech — Robotique cognitive IA pour la gestion sous-marine",
      description:
        "Serenitech est une société de robotique cognitive IA dédiée à la gestion sous-marine des infrastructures portuaires critiques, des plateformes offshore, des structures sous-marines et de l'industrie navale. Perception, surveillance, mesures et services cloud au-delà de la ligne de flottaison — sous une direction technique forte de 27 ans de recherche en télécommunications sous-marines, capteurs et IA embarquée.",
    },
    services: {
      title: "Services cognitifs — Serenitech",
      description:
        "Six modules cloud natifs — bruit et vibrations, identification des navires, intelligence de l'envasement, surveillance du tirant d'eau, intégrité structurelle, API et jumeau numérique 3D — plus un conseil et une expertise sur mesure.",
    },
    sectors: {
      title: "Secteurs — Serenitech Intelligence sous-marine",
      description:
        "Ports et terminaux, pétrole et gaz offshore, structures sous-marines et industrie navale, sous surveillance continue de ce qui se passe sous la surface.",
    },
    technology: {
      title: "Technologie — Du fond marin à l'API | Serenitech",
      description:
        "Cinq couches, de la perception aux interfaces : liaisons sous-marines, IA frugale en périphérie (edge), moteur cloud, API et jumeau numérique 3D, avec la sécurité dès la conception.",
    },
    company: {
      title: "Entreprise — Le groupe deep tech Serenitech",
      description:
        "Un groupe deep tech mondial dédié au monde sous la surface, avec sièges et laboratoires à Monaco et à Florianópolis.",
    },
    contact: {
      title: "Demander un briefing technique — Serenitech",
      description:
        "Parlez-nous de votre chenal, terminal, plateforme ou actif. Nos ingénieurs vous répondent avec une proposition d'engagement ainsi que le périmètre et le budget d'un audit et d'une étude de faisabilité initiaux.",
    },
  },
  home: {
    eyebrow: "ROBOTIQUE COGNITIVE IA POUR LA GESTION SOUS-MARINE",
    h1: "Les yeux sous-marins de votre infrastructure.",
    sub: "Serenitech est une société de robotique cognitive IA dédiée à la gestion sous-marine des infrastructures critiques — ports, plateformes offshore, structures sous-marines et industrie navale. Nos unités robotiques cognitives perçoivent les phénomènes physiques sous la surface — acoustique, vibrations, mouvements structurels, bathymétrie et hydrodynamique —, raisonnent en périphérie (edge) et agissent, en livrant des données opérationnelles en temps réel sous la forme d'un service cloud sécurisé. Derrière elles : trois décennies de recherche en télécommunications sous-marines, capteurs et IA embarquée.",
    ctaPrimary: "Demander un briefing technique",
    ctaSecondary: "Découvrir les services",
    heroAlt:
      "Vue en coupe d'un porte-conteneurs amarré à un quai en béton : étrave et grues au-dessus de la ligne de flottaison ; en dessous, la coque, les pieux du quai, un fond de chenal sableux avec des herbiers, une tortue marine, un banc de poissons et deux dauphins",
    hud: en.home.hud,
    trustSectors: [
      "Ports et terminaux",
      "Pétrole et gaz offshore",
      "Structures sous-marines",
      "Industrie navale",
    ],
    trustRegions: ["Monaco", "Brésil", "États-Unis"],
    problem: {
      eyebrow: "LE PROBLÈME",
      title:
        "Les infrastructures critiques dépendent de ce qui se passe sous l'eau. Presque rien n'y est supervisé en continu, en ligne.",
      items: [
        {
          title: "La profondeur se décide sur des données anciennes.",
          text: "Pied de pilote (UKC), envasement et priorités de dragage reposent encore sur des levés périodiques — alors que le chenal change à chaque marée.",
        },
        {
          title: "Impacts et fatigue ne laissent aucune trace.",
          text: "Collisions à l'accostage, vibrations et dérive structurelle des structures critiques — appontements, ducs-d'Albe, jambes de jacket — restent non mesurés jusqu'à la réparation, ou au litige.",
        },
        {
          title: "Angles morts en sûreté et en conformité.",
          text: "Navires sans AIS, limites de bruit sous-marin et rapports environnementaux sont gérés sans preuve continue de ce qui se passe sous la surface.",
        },
      ],
    },
    advisory: {
      eyebrow: "CONSEIL SUR MESURE",
      title:
        "Un conseil conçu pour votre infrastructure critique, pas pour le port moyen.",
      text: "Études d'applicabilité et de faisabilité, revues d'impact environnemental, évaluations des risques structurels et opérationnels, conseil en architecture IA et deep tech, connectivité sous-marine en conditions exigeantes — livrés au cas par cas, au niveau international, sous une direction technique forte de 27 ans de recherche en télécommunications sous-marines, capteurs et IA embarquée.",
      chips: [
        "Applicabilité et faisabilité",
        "Revue d'impact environnemental",
        "Architecture IA et deep tech",
      ],
      cta: "Voir les services de conseil",
    },
    signature: {
      eyebrow: "CHAQUE NAVIRE LAISSE UNE SIGNATURE",
      title:
        "Perçue au fond du chenal. Jugée à l'aune de la spécification.",
      text: "Nos unités robotiques cognitives captent l'interférence acoustique, hydrodynamique et structurelle de chaque navire en transit, la comparent à la spécification du port et signalent ceux qui la dépassent — y compris ceux qui nuisent aux poissons et aux mammifères marins.",
      legendOk: "Conforme à la spécification",
      legendFlag: "Hors spécification — signalé",
      alt: "Vue sous-marine depuis le fond du chenal : coques de navires au-dessus avec anneaux acoustiques, l'une signalée en ambre, dauphins au loin",
    },
    solution: {
      eyebrow: "LA SOLUTION",
      title: "Un service cognitif. Quatre domaines sous la surface.",
      text: "Serenitech fusionne réseaux hydroacoustiques, champs mécaniques structurels, gradients hydrodynamiques multidirectionnels, échosondage acoustique et mesure de la colonne d'eau en un seul tableau opérationnel. Toute l'instrumentation est encapsulée sous des couches fonctionnelles abstraites : vous consommez des données, des alertes et un jumeau numérique — pas du matériel.",
      domains: [
        { title: "Hydroacoustique", text: "pression acoustique, spectres, signatures" },
        { title: "Mécanique des structures", text: "vibrations, déplacements, impacts" },
        {
          title: "Hydrodynamique et bathymétrie",
          text: "profondeur, sédiments, courant, tirant d'eau",
        },
        { title: "Colonne d'eau", text: "température, salinité, turbidité, vitesse du son" },
      ],
    },
    field: {
      eyebrow: "VUES DE TERRAIN",
      title: "Ce que voient les unités cognitives.",
      text: "Scènes des domaines que nous instrumentons — fonds de chenal, murs de quai, structures offshore, actifs sous-marins et les coques au-dessus d'eux — avec les mesures, les nœuds de capteurs et les fronts d'onde que produit notre système. Ouvrez une image pour en voir le détail.",
      open: "Ouvrir en taille réelle",
      items: [
        {
          caption: "Mur de quai et porte-conteneurs amarré — pied de pilote (UKC), efforts d'accostage et fronts d'onde acoustiques de l'hélice.",
        },
        {
          caption: "Fond de chenal sous un navire en transit — surface bathymétrique, tirant d'eau dynamique et signature hélice-gouvernail.",
        },
        {
          caption: "Mur de quai — déformation structurelle, intégrité des pieux et envasement, mesurés pieu par pieu.",
        },
        {
          caption: "Pipelines offshore sous une plateforme — vibrations, affouillement et cartographie d'intégrité.",
        },
        {
          caption: "Jambes de jacket — déformation, corrosion et détection d'approche depuis des nœuds de capteurs fixés sur la structure.",
        },
        {
          caption: "Pipeline et manifold sous-marins — grille de levé, évolution du fond marin et détection d'événements.",
        },
        {
          caption: "Fond de chenal, du point de vue des unités — plusieurs navires vérifiés, un signalé hors spécification.",
        },
        {
          caption: "Hélice de très grand navire — signature de bruit et de cavitation, fronts d'onde se propageant vers l'arrière.",
        },
        {
          caption: "Console cognitive — jumeau numérique d'un bassin de démonstration rendu comme un levé : bathymétrie multifaisceaux et nuages de points lidar avec navires et unités, valeurs d'UKC, coupe transversale, spectre acoustique et événements.",
        },
        {
          caption: "Vue 3D du jumeau — poste à quai B12 et bassin d'évitage à −15,0/−16,0 m CD : front de quai, navire à quai et unités cognitives scannés sur une grille de 0,5 m (implantation synthétique).",
        },
      ],
    },
    cognitive: {
      eyebrow: "ROBOTIQUE COGNITIVE IA",
      title: "Percevoir. Raisonner. Agir.",
      steps: [
        {
          title: "Percevoir",
          text: "Les unités robotiques cognitives — fixes et mobiles, sous-marines et de surface — captent en continu les champs hydroacoustique, structurel et hydrodynamique autour de votre infrastructure critique.",
        },
        {
          title: "Raisonner",
          text: "Une IA frugale, informée par la physique, s'exécute dans chaque unité : elle classe les signatures, détecte les anomalies et adapte son propre échantillonnage — avec ou sans liaison active vers la terre.",
        },
        {
          title: "Agir",
          text: "Les unités émettent des alertes, recoupent mutuellement leurs relevés et alimentent le moteur cognitif cloud qui fusionne toutes les unités en une seule image opérationnelle : API, tableaux de bord et jumeau numérique 3D.",
        },
      ],
    },
    services: {
      eyebrow: "SERVICES",
      title: "Serenitech Cognitive Services",
      link: "Détails",
      items: [
        {
          title: "Protection environnementale contre le bruit et les vibrations",
          text: "Matrice continue d'énergie acoustique sous-marine et cartes de déformation structurelle, avec alertes de dépassement de seuil par secteur portuaire.",
        },
        {
          title: "Identification numérique automatisée des navires",
          text: "Empreinte acoustique et hydrodynamique recoupée avec l'AIS ; alerte instantanée de navire furtif (sans AIS).",
        },
        {
          title: "Intelligence prédictive de l'envasement et de l'ensablement",
          text: "Vecteurs de vitesse d'envasement et graphiques d'écart volumétrique qui priorisent le dragage avant que les seuils ne soient atteints.",
        },
        {
          title: "Surveillance dynamique du tirant d'eau en chenal et au poste à quai",
          text: "Tirant d'eau en direct à l'étrave, au milieu et à la poupe, pied de pilote (UKC) en continu, analyses de squat (enfoncement dynamique) et de gîte/roulis.",
        },
        {
          title: "Surveillance de l'intégrité structurelle et des impacts d'accostage",
          text: "Unités robotiques cognitives autonomes sur les structures critiques — appontements, ducs-d'Albe, murs de quai, jambes de jacket et actifs sous-marins : déplacements, spectre vibratoire, chocs et enregistrements d'impacts.",
        },
        {
          title: "Plateforme cloud : API, tableaux de bord, alertes et jumeau numérique 3D",
          text: "API REST et en flux continu, tableau de bord de pilotage exécutif, moteur d'alarmes d'application des règles et jumeau 3D du port ou de l'actif dans le navigateur.",
        },
      ],
    },
    how: {
      eyebrow: "COMMENT NOUS TRAVAILLONS",
      title: "De l'étude de faisabilité au service continu.",
      steps: [
        {
          title: "Audit et conseil en faisabilité",
          text: "Un projet sur mesure pour votre chenal, votre bassin, vos postes à quai ou votre actif : diagnostic stratégique de l'exploitation, opportunités d'amélioration, objectifs et KPI, plan de mesure et évaluation de viabilité — la base du projet définitif et de la proposition de contrat de services.",
        },
        {
          title: "Déploiement robotique",
          text: "Unités robotiques cognitives, sous-marines et de surface, installées, exploitées et maintenues par Serenitech ; aucun capex pour l'exploitant.",
        },
        {
          title: "Activation cloud",
          text: "API, tableaux de bord, politiques d'alerte et jumeau numérique connectés à votre VTMIS, SCADA ou ERP.",
        },
        {
          title: "Service continu",
          text: "Surveillance 24 h/24 et 7 j/7, mises à jour des modèles, rapports environnementaux et d'intégrité — par abonnement, dans le cadre du contrat de services.",
        },
      ],
    },
    twin: {
      eyebrow: "JUMEAU NUMÉRIQUE",
      title: "Un modèle 3D vivant de votre port — construit depuis le fond.",
      bullets: [
        "Surface bathymétrique en code couleur avec densité d'envasement et zones critiques de faible profondeur",
        "Blocs navires dynamiques avec tirant d'eau, tangage, roulis et gîte en temps réel",
        "Superpositions de fronts d'onde sous la surface localisant les événements acoustiques et structurels",
        "Le tout rendu dans le navigateur, alimenté par les mêmes API que vos systèmes",
      ],
      panelLabel: "Illustration stylisée",
      legend: [
        "UKC 1,9 m",
        "Envasement +3,2 %",
        "Navire furtif : aucun",
        "Bassin 3 · en direct",
      ],
      console: {
        ...en.home.twin.console,
        open: "Ouvrir l'écran de la console en taille réelle",
        alt: "Console cognitive Serenitech : vue 3D de qualité levé d'un chenal d'accès et d'un bassin d'évitage — bathymétrie multifaisceaux en rampe de couleurs de profondeur, nuages de points lidar du quai, des grues et des navires — avec valeurs numériques, profil en travers, spectre acoustique et journal d'événements",
        caption: "Bassin de démonstration synthétique — l'implantation est fictive ; chenal à −15,0 m CD, 220 m de large, talus 1:3, bassin d'évitage Ø 600 m, navires de 347 m / 294 m et marée +0,9 m sont des valeurs de classe Miami/Santos. Rendu comme un levé multifaisceaux et lidar à partir du même modèle de données que sert la console.",
      },
    },
    ai: {
      eyebrow: "STACK IA",
      title: "Deep tech, développée en interne.",
      items: [
        "IA frugale en périphérie (edge) dans chaque unité robotique cognitive — la classification là où naît le signal.",
        "Modèles informés par la physique — acoustique, hydrodynamique et mécanique des structures guident l'apprentissage.",
        "Intelligence en couches — unité → passerelle → cloud, résiliente aux liaisons intermittentes.",
        "Apprentissage fédéré et mises à jour des modèles à distance (over-the-air) entre les sites.",
        "Sécurité dès la conception — liaisons chiffrées, mesures signées, contrôle d'accès par rôles, piste d'audit complète.",
        "Filiation de recherche — travaux doctoraux en traitement du signal et des images et en électronique haute fréquence, publications IEEE OCEANS et EuCAP sur les capteurs sous-marins à haut débit, et le programme européen EdgeAI à l'origine de notre conception de l'intelligence en périphérie.",
      ],
    },
    presence: {
      eyebrow: "PRÉSENCE MONDIALE",
      title: "Une plateforme, exploitée localement, gouvernée globalement.",
      items: [
        { place: "Monaco", text: "Siège du groupe et laboratoire — Avenue J. F. Kennedy, Port Hercule" },
        {
          place: "Florianópolis, Brésil",
          text: "Siège brésilien, bureau et laboratoire — Sapiens Parque, le plus grand parc technologique du Brésil",
        },
        { place: "Coral Gables, Floride, États-Unis", text: "Opérations nord-américaines — Valencia Avenue" },
      ],
    },
    finalCta: {
      eyebrow: "COMMENT NOUS COMMENÇONS",
      title: "Tout commence par un diagnostic stratégique de votre exploitation.",
      text: "Un projet de conseil structuré et budgété, adapté à votre chenal, terminal, plateforme ou actif, et fondé sur une connaissance approfondie du fonctionnement réel de votre exploitation. Ses conclusions deviennent le projet définitif et la proposition de contrat de services de long terme.",
      steps: [
        {
          title: "Diagnostic stratégique",
          text: "Compréhension approfondie de l'exploitation actuelle — routines, données, risques et contraintes, tels qu'ils se présentent réellement.",
        },
        {
          title: "Opportunités d'amélioration",
          text: "Là où l'intelligence continue sous la surface change le résultat — localisées, quantifiées et priorisées.",
        },
        {
          title: "Objectifs et KPI",
          text: "Les cibles et les indicateurs qui mesureront le projet définitif, convenus avec votre équipe.",
        },
        {
          title: "Projet définitif",
          text: "Plan de développement et de déploiement, budget et proposition de contrat de services.",
        },
      ],
      button: "Demander un briefing technique",
      imageAlt: "Structure jacket d'une plateforme offshore vue depuis sous la surface",
    },
  },
  services: {
    eyebrow: "SERVICES COGNITIFS",
    title: "Serenitech Cognitive Services",
    intro:
      "Serenitech Cognitive Services — la couche cloud de notre système de robotique cognitive IA : une plateforme unifiée et cloud native qui transforme des phénomènes physiques de haute technologie, sous la surface, en flux de données opérationnelles granulaires et en temps réel. Supervision continue et en ligne de l'infrastructure critique : chenal d'accès, bassins de manœuvre, appontements d'accostage — et, pour les opérateurs offshore et sous-marins, la structure critique elle-même. Chaque module est conçu sous une direction technique forte de 27 ans de recherche en télécommunications inter-milieux, réseaux de capteurs sous-marins, traitement du signal et IA en périphérie (edge) — publiée à l'IEEE et protégée par des demandes de brevet. Lorsque la situation l'exige, nous délivrons aussi un conseil sur mesure.",
    mandateLabel: "Mandat d'architecture",
    mandate:
      "En rupture nette avec un modèle décentralisé centré sur le matériel, le service encapsule toute l'instrumentation sous-jacente sous des couches fonctionnelles abstraites, servies par des API sécurisées à faible latence aux tableaux de bord de pilotage, aux systèmes d'alerte en temps réel et à un jumeau numérique spatial 3D haute fidélité.",
    columns: {
      measure: "Ce que nous mesurons",
      get: "Ce que vous obtenez",
      matters: "Pourquoi c'est important",
    },
    moduleLabel: "Module",
    modules: [
      {
        title: "Protection environnementale contre le bruit et les vibrations",
        measure:
          "Niveaux de pression acoustique sous-marine en continu par bandes ; énergie mécanique microsismique et basse fréquence se propageant dans les appontements et les murs de quai ; profils de température et de salinité de l'eau pour calculer les vecteurs locaux de vitesse du son.",
        get: "Matrice d'énergie acoustique en temps réel (dB re 1 µPa) actualisée par bandes de tiers d'octave de 10 Hz à 20 kHz ; cartes de déformation de santé structurelle avec amplitudes vibratoires, vecteurs de vitesse et anomalies d'accélération particulaire de crête ; alertes immédiates de dépassement de seuil rattachées à des secteurs portuaires précis.",
        matters:
          "Preuve de conformité aux limites de bruit sous-marin, protection de la faune marine et des structures, éléments probants pour les rapports environnementaux.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Identification numérique automatisée des navires",
        measure:
          "Signatures d'émission acoustique large bande et bande étroite à haute résolution ; fréquences de modulation au passage des pales (signature fondamentale de l'hélice) ; signatures de pression hydrodynamique basse fréquence localisées et figure de sillage induite par la coque en mouvement.",
        get: "Profil d'empreinte acoustique unique (cadences d'allumage moteur, régime de l'arbre, nombre de pales, pics harmoniques) ; profils de pression hydrodynamique estimant la taille de la coque, le tirant d'eau et la vitesse ; matrice de vérification multi-influences recoupant les empreintes en temps réel avec les données AIS obligatoires ; alertes instantanées de navire furtif (sans AIS) lorsque des navires non autorisés ou silencieux franchissent des limites spatiales.",
        matters:
          "Sûreté du chenal d'accès et des zones réglementées, vérification du trafic déclaré, enregistrement forensique de chaque mouvement.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Intelligence prédictive de l'envasement et de l'ensablement",
        measure:
          "Rétrodiffusion acoustique multifréquence cartographiant les sédiments en suspension ; matrices bathymétriques pleine fauchée sur les chenaux et les souilles des postes à quai ; vitesses locales de courant et vecteurs de contrainte de cisaillement au fond.",
        get: "Vecteurs de vitesse de dépôt sédimentaire prédisant les mètres cubes accumulés par maille et par unité de temps ; graphiques d'écart volumétrique en temps réel par rapport aux références historiques ; alertes automatiques de dragage critique priorisant les zones qui approchent des seuils réglementaires de sécurité.",
        matters:
          "Un dragage planifié sur la prédiction plutôt que sur des levés périodiques — coût de dragage réduit, aucun ensablement surprise, sécurité documentée.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Surveillance dynamique du tirant d'eau en chenal et au poste à quai",
        measure:
          "Matrices haute densité de distance verticale entre la coque et le fond actif du chenal ; gradients de pression hydrostatique multipoints le long de la coque ; hauteur de marée dynamique, densité de l'eau et mouvement vertical induit par la houle.",
        get: "Tirant d'eau dynamique en temps réel à l'étrave, à la poupe et au milieu ; marges de sécurité de pied de pilote (UKC) en continu pendant le transit du navire ; analyses de l'effet de squat (enfoncement dynamique) et de gîte/roulis ; prédictions spatiales du risque d'échouement cartographiant les points chauds de faible marge.",
        matters:
          "Des transits plus sûrs, des fenêtres de tirant d'eau plus serrées, plus de cargaison par escale — avec les preuves à l'appui de chaque décision.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Surveillance de l'intégrité structurelle et des impacts d'accostage",
        measure:
          "Unités robotiques cognitives autonomes fixées sur pieux, ducs-d'Albe, défenses, murs de quai, ouvrages d'amarrage, jambes de jacket, risers et actifs sous-marins — accélération triaxiale, mouvement angulaire et déplacement, détection de chocs/impacts, spectre vibratoire complet et analyse modale ; données acheminées par liaisons sans fil sous-marines vers des passerelles de surface (cellulaire, satellite ou radio longue portée basse consommation) avec une autonomie de plusieurs années.",
        get: "Tendances de déplacement et de dérive, signatures de fatigue et modales, enregistrements d'impacts horodatés identifiant le navire responsable lors des collisions à l'accostage, alertes d'anomalie sur seuils, intégration directe au SCADA.",
        matters:
          "Preuves en matière de responsabilité et d'assurance, moins de réparations imprévues, gestion de l'intégrité des structures critiques qu'aucun plongeur n'inspecte chaque jour.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Plateforme cloud : API, tableaux de bord, alertes et jumeau numérique",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "API",
            text: "Points de terminaison REST orientés développeurs pour les requêtes structurelles et flux WebSocket pour les applications temps réel ; intégration immédiate à VTMIS, SCADA, ERP et PMS.",
          },
          {
            label: "Tableau de bord de pilotage exécutif",
            text: "Vue multi-locataire de la santé du port — indices de bruit ambiant, postes à quai dans l'UKC de sécurité, priorités de dragage, journaux des mouvements de navires.",
          },
          {
            label: "Alarmes intelligentes et moteur d'application des règles",
            text: "Règles à faible latence diffusant des alertes visuelles, SMS et webhook — infractions environnementales, événements de sûreté, dangers pour la sécurité.",
          },
          {
            label: "Jumeau numérique spatial 3D",
            text: "Modèle interactif dans le navigateur avec rendus volumétriques du fond, blocs navires dynamiques et superpositions de fronts d'onde sous la surface.",
          },
        ],
      },
      {
        title: "Conseil et expertise — conçus au cas par cas",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "Études d'applicabilité et de faisabilité",
            text: "Votre chenal, terminal, plateforme ou actif sous-marin peut-il être perçu en continu, et dans quel but ? Nous cartographions les phénomènes qui comptent, les unités et positions requises, la qualité de données attendue et le business case — avant tout déploiement.",
          },
          {
            label: "Revue d'impact environnemental",
            text: "Évaluations du bruit et des vibrations sous-marins pour le dragage, le battage de pieux, les travaux et le trafic ; campagnes d'état initial, plans de surveillance et preuves continues exigées par les régulateurs et les autorités délivrant les autorisations.",
          },
          {
            label: "Évaluation des risques structurels et opérationnels",
            text: "Études d'impact d'accostage et d'amarrage, politiques de tirant d'eau dynamique et de pied de pilote, stratégie d'envasement et de dragage, plans d'intégrité pour appontements, ducs-d'Albe, jackets, risers et pipelines.",
          },
          {
            label: "Conseil en architecture IA et deep tech",
            text: "Revue indépendante et conception d'architectures de perception, d'IA en périphérie (edge), de cloud et de jumeau numérique ; stratégie de données, intégration avec VTMIS, SCADA et ERP, cybersécurité et gouvernance des données.",
          },
          {
            label: "Connectivité sous-marine en conditions exigeantes",
            text: "Conception de liaisons acoustiques et optiques, autonomie et survivabilité des unités en eaux chargées de sédiments, à fort trafic et en grande profondeur, ingénierie de déploiement et de maintenance.",
          },
          {
            label: "Spécification, achats et ingénieur du maître d'ouvrage (owner's engineer)",
            text: "Spécifications techniques, évaluation des fournisseurs, essais de réception et supervision indépendante des programmes de surveillance, selon les normes internationales.",
          },
        ],
      },
    ],
    apiLabel: "Exemple d'API",
    advisoryIntro:
      "Chaque port, plateforme et structure critique est différent. Notre activité de conseil est conçue au cas par cas par l'équipe qui construit les unités robotiques cognitives, l'IA et les liaisons sous-marines, sous la direction du Dr Thierry Deschamps de Paillette — agrégé, docteur en électronique haute fréquence, photonique et systèmes, 27 ans de recherche en télécommunications inter-milieux, réseaux de capteurs sous-marins et IA en périphérie (edge), auteur et relecteur IEEE. Une expertise de niveau international en IA, deep tech et connectivité sous-marine en conditions exigeantes, appliquée à votre situation.",
    headerAlt:
      "Vue sous-marine d'un mur de quai avec unités robotiques cognitives et relevés 3D",
    commercial: {
      eyebrow: "MODÈLE COMMERCIAL",
      title: "Monitoring-as-a-Service",
      text: "Abonnement Monitoring-as-a-Service — unités robotiques cognitives installées, détenues et maintenues par Serenitech ; tarification en livre ouvert (open book) aux conditions du marché local ; études d'ingénierie et développement technologique disponibles en prestation de conseil.",
    },
  },
  sectors: {
    eyebrow: "SECTEURS",
    title: "Quatre secteurs, une plateforme sous la surface.",
    outcomeLabel: "Résultat",
    headerAlt:
      "Structure jacket de plateforme offshore avec unités robotiques cognitives sous l'eau",
    items: [
      {
        title: "Ports et terminaux",
        text: "Chenal d'accès, bassins de manœuvre et postes à quai — l'infrastructure critique du port — sous supervision continue et en ligne de ce qui se passe sous la surface : tirant d'eau dynamique et UKC, envasement prédictif, conformité au bruit environnemental, vérification des navires et enregistrement des impacts d'accostage. S'intègre au VTMIS et aux ERP portuaires.",
        outcome:
          "Des transits plus sûrs, un dragage optimisé, une conformité documentée, moins de litiges.",
        alt: "Mur de quai et navire amarré vus sous l'eau",
      },
      {
        title: "Pétrole et gaz offshore",
        text: "Structures critiques — jambes de jacket, risers, systèmes d'amarrage et équipements sous-marins — supervisées en ligne en mouvement, vibrations, impacts et affouillement ; détection d'approche de navires non identifiés autour de la plateforme ; surveillance du bruit sous-marin pendant le forage et la construction.",
        outcome:
          "Gestion de l'intégrité avec preuves continues, périmètre de sûreté au-delà de la surface, conformité environnementale.",
        alt: "Jambes de jacket d'une plateforme offshore sous l'eau avec unités robotiques de détection acoustique",
      },
      {
        title: "Structures sous-marines",
        text: "Infrastructures sous-marines critiques — pipelines, manifolds, câbles, émissaires et fondations d'éoliennes en mer : mouvements et vibrations structurels, évolution du fond marin et dynamique sédimentaire autour de l'actif, détection d'événements et dérive à long terme — depuis des unités robotiques cognitives qui n'exigent aucune visite de plongeur pendant des années.",
        outcome:
          "Moins de campagnes d'inspection, des alertes plus précoces, un jumeau numérique de l'actif sur le fond marin.",
        alt: "Pipeline et manifold sous-marins sur le fond marin avec superposition d'une grille de levé",
      },
      {
        title: "Industrie navale",
        text: "Chantiers navals, flottes et ingénierie navale : mesure du bruit rayonné sous-marin et de la signature acoustique des coques et des hélices, dérive de signature comme indicateur d'état, surveillance des bassins et des cales sèches, instrumentation structurelle des coques et des ouvrages d'accostage — ancrées dans deux décennies de recherche en traitement du signal et en télémétrie sous-marine.",
        outcome:
          "Performance acoustique mesurable et données continues pour la conception, la maintenance et l'appui à la certification.",
        alt: "Hélice d'un très grand porte-conteneurs avec anneaux acoustiques et maillage filaire 3D",
      },
    ],
  },
  technology: {
    eyebrow: "TECHNOLOGIE",
    title: "Du fond marin à l'API.",
    headerAlt: "Surface bathymétrique 3D au-dessus du fond d'un chenal portuaire",
    headerLine:
      "Serenitech est un système de robotique cognitive IA : des unités qui perçoivent, raisonnent et agissent, orchestrées par un moteur cognitif cloud. Son architecture descend de deux décennies de recherche sur les télécommunications et les réseaux de capteurs sous-marins et des programmes européens d'IA AI4DI et EdgeAI.",
    layersTitle: "Cinq couches",
    // Drawing texts stay English (rule above); only the accessible description is localised.
    schematic: {
      ...en.technology.schematic,
      alt: "Coupe verticale animée d'un poste à quai : capteurs sur le fond et les pieux, unités robotiques cognitives et une unité de levé, passerelle de quai avec intelligence en périphérie, moteur cognitif dans le cloud et interfaces opérateur, avec des paquets de données circulant le long des liaisons",
    },
    layers: [
      {
        title: "Interfaces",
        text: "API REST et WebSocket, tableaux de bord exécutifs, moteur d'alarmes et de règles, jumeau numérique 3D.",
      },
      {
        title: "Moteur cloud",
        text: "Ingestion optimisée pour les séries temporelles massives et les données spatiales ; traitement totalement découplé du matériel portuaire ; multi-locataire, évolutif, sécurisé.",
      },
      {
        title: "Intelligence en périphérie (edge)",
        text: "Chaque unité raisonne localement : des modèles d'IA frugaux classent les événements là où ils se produisent, réduisant bande passante et latence.",
      },
      {
        title: "Couche de connectivité",
        text: "Liaisons sans fil sous-marines (acoustiques et optiques) vers des passerelles de surface ; backhaul cellulaire, satellitaire et radio longue portée basse consommation ; résilience par stockage et retransmission (store-and-forward).",
      },
      {
        title: "Couche de perception robotique",
        text: "Unités robotiques cognitives embarquant des réseaux hydroacoustiques, des capteurs inertiels et vibratoires, des matrices de pression et de distance, un échosondage et des sondes de colonne d'eau (température, salinité, turbidité), fixées sur les structures ou déployées dans le chenal.",
      },
    ],
    security: {
      eyebrow: "SÉCURITÉ ET GOUVERNANCE DES DONNÉES",
      title: "Sécurité et gouvernance des données",
      items: [
        "Liaisons chiffrées de bout en bout",
        "Mesures signées avec piste d'audit immuable",
        "Contrôle d'accès par rôles, par locataire et par secteur",
        "Options de résidence des données par pays",
        "Intégration derrière le pare-feu de l'exploitant sur demande",
      ],
    },
    research: {
      eyebrow: "ADN DE RECHERCHE",
      title: "ADN de recherche",
      text: "Électronique haute fréquence, photonique, télécommunications sous-marines, traitement du signal et IA — une culture de laboratoire à Monaco et à Florianópolis dédiée au milieu sous la surface, enracinée dans 27 ans de recherche : travaux doctoraux au laboratoire L3i (La Rochelle) et à Orléans, publications IEEE OCEANS et EuCAP sur les capteurs et antennes sous-marins à haut débit, relecture pour l'IEEE Journal of Oceanic Engineering, deux demandes de brevet sur la communication sous-marine pilotée par IA, et les programmes européens d'IA AI4DI et EdgeAI.",
    },
  },
  company: {
    eyebrow: "ENTREPRISE",
    title: "Un groupe deep tech mondial dédié au monde sous la surface.",
    about:
      "Une grande partie des infrastructures critiques du monde se trouve partiellement sous l'eau, et elle est supervisée presque à l'aveugle. Serenitech construit la robotique cognitive IA — perception, connectivité, intelligence artificielle et services cloud — sur trois décennies de recherche en télécommunications sous-marines, capteurs et IA embarquée, offrant aux autorités portuaires, aux opérateurs offshore, aux propriétaires d'actifs sous-marins et à l'industrie navale une vision, une mémoire et une anticipation continues au-delà de la ligne de flottaison. Le nom le dit : la sérénité par la technologie.",
    technicalEyebrow: "DIRECTION TECHNIQUE ET SCIENTIFIQUE",
    technicalTitle: "Trois décennies de recherche en perception sous-marine, télécommunications et IA embarquée — à la tête de notre ingénierie.",
    technicalIntro: "Serenitech est une société de services techniques spécialisés. Sa technologie, ses laboratoires et son architecture produit sont dirigés par le Dr Thierry Deschamps de Paillette — agrégé de génie électrique et d'électronique, docteur en électronique haute fréquence, photonique et systèmes, avec des recherches doctorales en traitement du signal et des images, et 27 ans de recherche avancée appliquée aux systèmes de télécommunication inter-milieux, aux réseaux de capteurs sous-marins, au traitement du signal et à l'IA en périphérie (edge). Produits industriels, publications IEEE, demandes de brevet et les programmes européens d'IA AI4DI et EdgeAI forment le socle technique de chaque service de cette page.",
    proofPoints: [
      { value: "27 ans", label: "de recherche avancée — électronique haute fréquence, photonique, systèmes et IA" },
      { value: "Agrégé · Doctorat", label: "le concours national le plus sélectif de France dans la discipline ; doctorat obtenu avec les félicitations du jury" },
      { value: "IEEE", label: "publications à OCEANS et EuCAP ; relecteur pour l'IEEE Journal of Oceanic Engineering" },
      { value: "2 demandes de brevet", label: "sélection par IA du mode de communication sous-marine (EP · PCT), inventeur unique" },
      { value: "AI4DI · EdgeAI", label: "programmes européens d'IA menés avec de grands groupes industriels et des start-up" },
      { value: "20 ans", label: "de conception de produits industriels — Crouzet, Micrelec, TECHNEXT" },
    ],
    photoCaptionShort: "Sapiens Parque, Florianópolis — siège et laboratoire brésiliens, dans le plus grand parc technologique du Brésil.",
    showMore: "Voir plus",
    showLess: "Voir moins",
    linkedin: "LinkedIn →",
    openLabel: "Ouvrir",
    lead: {
      name: "Dr Thierry Deschamps de Paillette",
      role: "Chief Technology Officer · Direction technique et scientifique",
      bio: "Le Dr Thierry Deschamps de Paillette est agrégé de génie électrique et d'électronique — le concours national le plus sélectif de France dans la discipline — et titulaire d'un doctorat de l'Université de La Rochelle obtenu avec les félicitations du jury, la plus haute distinction. Il apporte 27 ans d'expérience en recherche avancée en électronique haute fréquence, photonique et systèmes, appliquée à l'IA, à la cybernétique et aux systèmes de télécommunication inter-milieux, en coopération avec de grands groupes industriels. Ses travaux récents de recherche et d'ingénierie portent sur une nouvelle génération de réseaux de télécommunication et de capteurs sous-marins. Il conçoit des produits industriels depuis deux décennies — Crouzet, Micrelec, TECHNEXT — et est l'inventeur désigné de demandes de brevet sur la sélection par IA du mode de communication sous-marine. Professeur de chaire supérieure au sein du système académique national français, il a siégé aux jurys nationaux qui recrutent les agrégés en sciences de l'ingénieur. Il publie à l'IEEE et relit pour l'IEEE Journal of Oceanic Engineering ; en tant que conseiller, conférencier et expert en IA au sein de clusters tels que l'Institut EuropIA et Cluster-IA, il a mené les programmes européens d'IA AI4DI et EdgeAI avec de grands groupes industriels et des start-up. Chez Serenitech, il dirige la technologie, les laboratoires et l'architecture produit — les unités robotiques cognitives, la pile de communication sous-marine et les couches de perception IA et d'intelligence en périphérie.",
      link: "https://www.linkedin.com/in/thierry-deschamps-de-paillette-b1669821/",
      panels: [
        {
          title: "Références",
          items: [
            {
              title: "Relecteur, IEEE Journal of Oceanic Engineering",
            },
            {
              title: "Expert, IA & Océans — Institut EuropIA",
              link: "https://instituteuropia.eu/experts",
            },
            {
              title: "Vice-président — Cluster-IA",
            },
            {
              title: "AI4DI — Artificial Intelligence for Digitizing Industry · H2020 / ECSEL JU, convention de subvention 826060",
              link: "https://ai4di.eu/",
            },
            {
              title: "EdgeAI — Edge AI Technologies for Optimised Performance Embedded Processing · Horizon Europe / KDT JU, convention de subvention 101097300",
              link: "https://cordis.europa.eu/project/id/101097300",
            },
            {
              title: "Membre de jury des concours nationaux d'Agrégation pour le recrutement des professeurs agrégés en sciences de l'ingénieur",
              link: "https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/concours-examens/833/833-rapport-jury-agreg-ext-ssi-et-ingenierie-electrique.pdf",
            },
            {
              title: "Conception de produits industriels pour Crouzet, Micrelec et TECHNEXT",
            },
            {
              title: "Système de comptage d'énergie et d'eau EWTS HYD — ressource pédagogique des programmes nationaux français de sciences de l'ingénieur",
              link: "https://sti.eduscol.education.fr/ressources_techniques/ewts-hyd-systeme-de-comptage-energetique",
            },
            {
              title: "Concepteur des modems sous-marins FSK 400 kHz et magnéto-inductif large bande — matériel, firmware et mise en service",
            },
            {
              title: "Dépôt d'antériorité INPI (enveloppe Soleau) DSO2019007239 (2019) — liaison sous-marine magnéto-inductive large bande à modulation OFDM",
            },
            {
              title: "Architectures d'intelligence de la périphérie au cloud (edge-to-cloud) et IA pour environnements sévères",
            },
          ],
        },
        {
          title: "Formation",
          items: [
            {
              year: "2015 — 2020",
              title: "Université de La Rochelle — laboratoire L3i",
              venue: "Doctorat, électronique haute fréquence, photonique et systèmes · obtenu avec les félicitations du jury · La Rochelle, France · soutenu le 22 octobre 2020 · directeur de thèse Pr Alain Gaugue",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2011 — 2012",
              title: "Organisme de formation agréé (ATO)",
              venue: "Licence de pilote privé PPL-A, monomoteur — glass cockpit et FADEC · France",
            },
            {
              year: "2007 — 2008",
              title: "Université d'Orléans",
              venue: "Doctorat de recherche, traitement du signal et des images · suivi de cibles dans des séquences vidéo en conditions sévères · Orléans, France",
            },
            {
              year: "1998",
              title: "Ministère de l'Éducation nationale",
              venue: "Agrégation externe — génie électrique, électronique et informatique industrielle · admis · France",
            },
            {
              year: "1996 — 1997",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "DEA, master recherche en électronique et systèmes — vision pour systèmes robotiques · Clermont-Ferrand, France",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Maîtrise, génie électrique — microélectronique · Clermont-Ferrand, France",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Licence, génie électrique (EEA) — électronique, systèmes électromécaniques, automatique · Clermont-Ferrand, France",
            },
            {
              year: "1993 — 1994",
              title: "Institut Universitaire de Technologie, Université Blaise Pascal",
              venue: "DUT, génie électrique — automatique et informatique industrielle, systèmes C3/C4I · Clermont-Ferrand, France",
            },
            {
              year: "1990 — 1992",
              title: "Lycée Godefroy de Bouillon",
              venue: "Baccalauréat F3, électromécanique · France",
            },
          ],
        },
        {
          title: "Expérience",
          items: [
            {
              year: "2013 — 2026",
              title: "Ministère de l'Éducation nationale",
              venue: "Professeur de chaire supérieure en génie électrique et informatique · France",
            },
            {
              year: "2007 — 2026",
              title: "TECHNEXT",
              venue: "Conseiller scientifique · Cannes, France",
            },
            {
              year: "2015 — 2020",
              title: "Laboratoire L3i, Université de La Rochelle",
              venue: "Chercheur — télécommunications sous-marines et réseaux de télémétrie sous-marine · La Rochelle, France",
            },
            {
              year: "2011 — 2015",
              title: "Concours national d'Agrégation",
              venue: "Membre du jury, concours externe de recrutement des professeurs agrégés en sciences de l'ingénieur · France",
            },
            {
              year: "2011 — 2014",
              title: "TECHNEXT",
              venue: "Auteur — systèmes embarqués, ordonnancement de tâches et conception d'algorithmes complexes · Cannes, France",
            },
            {
              year: "2005 — 2009",
              title: "Concours national d'Agrégation",
              venue: "Membre du jury, concours interne de recrutement des professeurs agrégés en sciences de l'ingénieur · France",
            },
            {
              year: "1998 — 2011",
              title: "Ministère de l'Éducation nationale",
              venue: "Professeur de génie électrique — Mathématiques spéciales · France",
            },
          ],
        },
        {
          title: "Brevets",
          items: [
            {
              year: "EP4645718A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Demande de brevet européen · inventeur unique · déposée le 29 avril 2024, publiée le 5 novembre 2025",
              link: "https://patents.google.com/patent/EP4645718A1/en",
            },
            {
              year: "WO2025228988A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Demande internationale PCT PCT/EP2025/061717 · inventeur unique · publiée le 6 novembre 2025",
              link: "https://patents.google.com/patent/WO2025228988A1/en",
            },
          ],
          footnote: "Deux demandes de brevet publiées couvrant une même invention, inventeur unique. L'invention sélectionne entre communication sous-marine acoustique, électromagnétique et optique au moyen d'un réseau de neurones alimenté par les relevés des capteurs, les caractéristiques du canal et le retour du réseau. IPC H04B 11/00 et H04B 13/02.",
        },
        {
          title: "Publications",
          items: [
            {
              year: "2024",
              title: "Enhancing Communication in Multi-Domain Ad-Hoc Networks for Maritime Critical Infrastructure Protection",
              venue: "OCEANS 2024 Halifax, IEEE · avec K. Brandl, J. Weid et A. Hahn",
              link: "https://doi.org/10.1109/OCEANS55160.2024.10754334",
            },
            {
              year: "2020",
              title: "Antenna Adaptation Circuits for High Data Rate Magneto-Inductive Underwater Communications",
              venue: "14th European Conference on Antennas and Propagation (EuCAP), Copenhague, IEEE, pp. 1–5 · avec A. Gaugue",
              link: "https://doi.org/10.23919/EuCAP48036.2020.9135359",
            },
            {
              year: "2020",
              title: "Transmissions numériques sans-fil pour la surveillance environnementale en milieu sous-marin",
              venue: "Thèse de doctorat, Université de La Rochelle · HAL tel-03349746",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2019",
              title: "High Data Rate Wireless Underwater Sensors for Environmental Monitoring",
              venue: "MTS/IEEE OCEANS 2019, Marseille, pp. 1–10 · avec A. Gaugue",
              link: "https://doi.org/10.1109/OCEANSE.2019.8867364",
            },
            {
              year: "2017",
              title: "Antenna design for underwater wireless telemetry systems",
              venue: "11th European Conference on Antennas and Propagation (EuCAP), Paris, IEEE, pp. 2251–2255 · avec A. Gaugue, E. Parlier et S. Dardenne",
              link: "https://doi.org/10.23919/EuCAP.2017.7928513",
            },
            {
              year: "2017",
              title: "Télémétrie sous-marine à ondes électromagnétiques",
              venue: "XXèmes Journées Nationales Micro-ondes, Saint-Malo · avec A. Gaugue",
            },
          ],
          footnote: "Domaines de recherche : communication sous-marine électromagnétique et magnéto-inductive, conception d'antennes et adaptation d'impédance, OFDM pour liaisons sous-marines, réseaux ad hoc multi-domaines et IA pour environnements sévères.",
        },
      ],
    },
    presenceTitle: "Présence mondiale",
    presence: [
      {
        place: "Monaco",
        text: "Siège du groupe et laboratoire ; développement technologique et ingénierie.",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Monaco", "Principauté de Monaco"],
      },
      {
        place: "Florianópolis, Brésil",
        text: "Siège brésilien avec bureau et laboratoire au Sapiens Parque, le plus grand parc technologique du Brésil ; opérations pour les clients portuaires, offshore et navals au Brésil.",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brésil"],
      },
      {
        place: "Coral Gables, Floride, États-Unis",
        text: "Opérations nord-américaines.",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "États-Unis d'Amérique"],
      },
      {
        place: "Serenitech Global Corporation",
        text: "Société holding du groupe et de l'ensemble de ses filiales.",
        address: [] as string[],
      },
    ],
    photoCaption:
      "Siège brésilien — bureau et laboratoire au Sapiens Parque, Florianópolis (SC), le plus grand parc technologique du Brésil.",
    photoAlt:
      "Vue aérienne de l'immeuble de bureaux en verre du siège brésilien au Sapiens Parque, Florianópolis, au bord d'un lac",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Demander un briefing technique.",
    text: "Parlez-nous de votre chenal, terminal, plateforme ou actif critique. Notre direction technique vous reviendra avec une proposition d'engagement ainsi que le périmètre et le budget de l'audit et de l'étude de faisabilité initiaux.",
    fields: {
      name: "Nom",
      email: "E-mail",
      organisation: "Organisation",
      role: "Fonction",
      country: "Pays",
      sector: "Secteur",
      sectorPlaceholder: "Sélectionnez un secteur",
      message: "Message",
      submit: "Envoyer la demande",
    },
    sectorOptions: [
      "Ports et terminaux",
      "Pétrole et gaz offshore",
      "Structures sous-marines",
      "Industrie navale",
      "Autre",
    ],
    required: "Ce champ est obligatoire.",
    sending: "Envoi en cours…",
    successTitle: "Merci",
    success: "Demande reçue. Nos ingénieurs vous répondront sous un jour ouvré.",
    error:
      "Nous n'avons pas pu envoyer votre demande. Veuillez réessayer ou écrire à contact@serenitech.global.",
    again: "Envoyer une autre demande",
    locationsTitle: "Implantations",
    locations: [
      {
        place: "Monaco",
        role: "Siège du groupe et laboratoire",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Monaco", "Principauté de Monaco"],
      },
      {
        place: "Florianópolis, Brésil",
        role: "Siège brésilien et laboratoire — Sapiens Parque, le plus grand parc technologique du Brésil",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brésil"],
      },
      {
        place: "Coral Gables, Floride, États-Unis",
        role: "Opérations nord-américaines",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "États-Unis d'Amérique"],
      },
    ],
    emailLabel: "E-mail",
  },
  footer: {
    descriptor:
      "Serenitech — Intelligence sous-marine. Robotique cognitive IA pour la gestion sous-marine.",
    companyCol: "Entreprise",
    servicesCol: "Services",
    sectorsCol: "Secteurs",
    groupTitle: "Groupe",
    group: ["Serenitech Global Corporation — société holding de l'ensemble des filiales Serenitech"],
    privacy: "Confidentialité",
    rights: "© 2026 Serenitech Global Corporation. Tous droits réservés.",
  },
};
