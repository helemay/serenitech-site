import { en, type Dict } from "./en";

// Rule (16/09/2026): texts that belong to AI-generated images and to the animated drawings (hero HUD,
// system schematic, live console readouts) stay in the original English in every language.

export const de: Dict = {
  htmlLang: "de",
  brand: {
    alt: "Serenitech — Gelassenheit jenseits der Wasserlinie",
  },
  nav: {
    home: "Start",
    services: "Leistungen",
    sectors: "Sektoren",
    technology: "Technologie",
    company: "Unternehmen",
    contact: "Kontakt",
    cta: "Technisches Briefing anfordern",
    menu: "Menü öffnen",
    close: "Menü schließen",
    language: "Sprache",
  },
  meta: {
    home: {
      title: "Serenitech — KI-gestützte kognitive Robotik für das Unterwassermanagement",
      description:
        "Serenitech ist ein Unternehmen für KI-gestützte kognitive Robotik zum Unterwassermanagement kritischer Hafeninfrastruktur, Offshore-Plattformen, Subsea-Strukturen und der Schiffbau- und Marineindustrie. Sensorik, Monitoring, Messungen und Cloud-Dienste jenseits der Wasserlinie — unter einer technischen Leitung mit 27 Jahren Forschung in Unterwasser-Telekommunikation, Sensorik und eingebetteter KI.",
    },
    services: {
      title: "Kognitive Services — Serenitech",
      description:
        "Sechs cloud-native Module — Lärm & Vibration, Schiffsidentifikation, prädiktive Versandungsanalyse, Tiefgangsüberwachung, Strukturintegrität, APIs und digitaler 3D-Zwilling — plus maßgeschneiderte Beratung & Consulting.",
    },
    sectors: {
      title: "Sektoren — Serenitech Unterwasser-Intelligenz",
      description:
        "Häfen & Terminals, Offshore Öl & Gas, Subsea-Strukturen und die Schiffbau- und Marineindustrie unter kontinuierlicher Überwachung unterhalb der Wasseroberfläche.",
    },
    technology: {
      title: "Technologie — Vom Meeresboden bis zur API | Serenitech",
      description:
        "Fünf Schichten von der Sensorik bis zu den Schnittstellen: Unterwasserverbindungen, frugale Edge-KI, Cloud-Engine, APIs und ein digitaler 3D-Zwilling, mit Security by Design.",
    },
    company: {
      title: "Unternehmen — Serenitech Deep-Tech-Gruppe",
      description:
        "Eine globale Deep-Tech-Gruppe, die sich der Welt unter der Wasseroberfläche widmet, mit Hauptsitzen und Laboren in Monaco und Florianópolis.",
    },
    contact: {
      title: "Technisches Briefing anfordern — Serenitech",
      description:
        "Berichten Sie uns von Ihrer Fahrrinne, Ihrem Terminal, Ihrer Plattform oder Anlage. Unsere Ingenieure antworten mit einem Vorschlag für die Zusammenarbeit sowie mit Umfang und Budget eines ersten Audits und einer Machbarkeitsstudie.",
    },
  },
  home: {
    eyebrow: "KI-GESTÜTZTE KOGNITIVE ROBOTIK FÜR DAS UNTERWASSERMANAGEMENT",
    // Soft hyphen (\u00AD): lets the long compound break as "Unterwasser-augen" only where the column is too narrow (~1024px).
    h1: "Die Unterwasser\u00ADaugen Ihrer Infrastruktur.",
    sub: "Serenitech ist ein Unternehmen für KI-gestützte kognitive Robotik zum Unterwassermanagement kritischer Infrastrukturen — Häfen, Offshore-Plattformen, Subsea-Strukturen und Schiffbau- und Marineindustrie. Unsere kognitiven Robotereinheiten nehmen physikalische Phänomene unter der Wasseroberfläche wahr — Akustik, Vibration, Strukturbewegung, Bathymetrie und Hydrodynamik —, schlussfolgern am Edge und handeln, indem sie operative Echtzeitdaten als sicheren Cloud-Dienst liefern. Dahinter stehen drei Jahrzehnte Forschung in Unterwasser-Telekommunikation, Sensorik und eingebetteter KI.",
    ctaPrimary: "Technisches Briefing anfordern",
    ctaSecondary: "Leistungen entdecken",
    heroAlt:
      "Geteilte Ansicht eines an einer Betonkaimauer festgemachten Containerschiffs: Bug und Kräne über der Wasserlinie; darunter der Rumpf, die Kaipfähle, ein sandiger Fahrrinnenboden mit Seegras, eine Meeresschildkröte, ein Fischschwarm und zwei Delfine",
    hud: en.home.hud,
    trustSectors: [
      "Häfen & Terminals",
      "Offshore Öl & Gas",
      "Subsea-Strukturen",
      "Schiffbau & Marine",
    ],
    trustRegions: ["Monaco", "Brasilien", "USA"],
    problem: {
      eyebrow: "DAS PROBLEM",
      title:
        "Kritische Infrastruktur hängt davon ab, was unter Wasser geschieht. Fast nichts davon wird kontinuierlich und online überwacht.",
      items: [
        {
          title: "Über die Tiefe wird auf Basis alter Daten entschieden.",
          text: "Kielfreiheit (UKC), Versandung und Baggerprioritäten stützen sich noch immer auf periodische Vermessungen — während sich die Fahrrinne mit jeder Tide verändert.",
        },
        {
          title: "Stöße und Ermüdung hinterlassen keine Aufzeichnung.",
          text: "Anlegekollisionen, Vibrationen und strukturelle Drift an kritischen Bauwerken — Piers, Dalben, Jacket-Beinen — bleiben ungemessen, bis eine Reparatur ansteht oder ein Streitfall.",
        },
        {
          title: "Blinde Flecken bei Sicherheit und Compliance.",
          text: "Schiffe ohne AIS, Grenzwerte für Unterwasserlärm und Umweltberichterstattung werden ohne kontinuierliche Nachweise von unterhalb der Wasseroberfläche gehandhabt.",
        },
      ],
    },
    advisory: {
      eyebrow: "MASSGESCHNEIDERTE BERATUNG",
      title:
        "Beratung, konzipiert für Ihre kritische Infrastruktur — nicht für den Durchschnittshafen.",
      text: "Anwendbarkeits- und Machbarkeitsstudien, Bewertungen der Umweltauswirkungen, strukturelle und operative Risikobewertungen, Beratung zu KI- und Deep-Tech-Architekturen, Unterwasserkonnektivität unter anspruchsvollen Bedingungen — Fall für Fall erbracht, auf internationalem Niveau, unter einer technischen Leitung mit 27 Jahren Forschung in Unterwasser-Telekommunikation, Sensorik und eingebetteter KI.",
      chips: [
        "Anwendbarkeit & Machbarkeit",
        "Bewertung der Umweltauswirkungen",
        "KI- & Deep-Tech-Architektur",
      ],
      cta: "Zu den Beratungsleistungen",
    },
    signature: {
      eyebrow: "JEDES SCHIFF HINTERLÄSST EINE SIGNATUR",
      title:
        "Am Grund der Fahrrinne erfasst. An der Spezifikation gemessen.",
      text: "Unsere kognitiven Robotereinheiten erfassen die akustische, hydrodynamische und strukturelle Einwirkung jedes passierenden Schiffs, vergleichen sie mit der Spezifikation des Hafens und markieren diejenigen, die sie überschreiten — einschließlich derer, die Fischen und Meeressäugern schaden.",
      legendOk: "Innerhalb der Spezifikation",
      legendFlag: "Außerhalb der Spezifikation — markiert",
      alt: "Unterwasseransicht vom Grund der Fahrrinne: Schiffsrümpfe darüber mit akustischen Ringen, einer bernsteinfarben markiert, Delfine dahinter",
    },
    solution: {
      eyebrow: "DIE LÖSUNG",
      title: "Ein kognitiver Dienst. Vier Domänen unter der Wasseroberfläche.",
      text: "Serenitech verschmilzt hydroakustische Arrays, strukturmechanische Felder, multidirektionale hydrodynamische Gradienten, akustische Echolotung und die Erfassung der Wassersäule zu einem einzigen operativen Gesamtbild. Die gesamte Instrumentierung ist in abstrakten Funktionsschichten gekapselt: Sie beziehen Daten, Alarme und einen digitalen Zwilling — keine Hardware.",
      domains: [
        { title: "Hydroakustik", text: "Schalldruck, Spektren, Signaturen" },
        { title: "Strukturmechanik", text: "Vibration, Verschiebung, Stöße" },
        {
          title: "Hydrodynamik & Bathymetrie",
          text: "Tiefe, Sediment, Strömung, Tiefgang",
        },
        { title: "Wassersäule", text: "Temperatur, Salinität, Trübung, Schallgeschwindigkeit" },
      ],
    },
    field: {
      eyebrow: "FELDANSICHTEN",
      title: "Was die kognitiven Einheiten sehen.",
      text: "Szenen aus den Domänen, die wir instrumentieren — Fahrrinnenböden, Kaimauern, Offshore-Strukturen, Subsea-Anlagen und die Rümpfe darüber — mit den Messwerten, Sensorknoten und Wellenfronten, die unser System erzeugt. Öffnen Sie ein beliebiges Bild, um die Details zu sehen.",
      open: "In voller Größe öffnen",
      items: [
        {
          caption: "Kaimauer und festgemachtes Containerschiff — Kielfreiheit, Anlegelasten und die akustischen Wellenfronten des Propellers.",
        },
        {
          caption: "Fahrrinnenboden unter einem passierenden Schiff — bathymetrische Oberfläche, dynamischer Tiefgang und die Propeller-Ruder-Signatur.",
        },
        {
          caption: "Kaimauer — strukturelle Dehnung, Pfahlintegrität und Versandung, Pfahl für Pfahl gemessen.",
        },
        {
          caption: "Offshore-Pipelines unter einer Plattform — Vibration, Kolk und Integritätskartierung.",
        },
        {
          caption: "Jacket-Beine — Dehnung, Korrosion und Annäherungserkennung durch Sensorknoten an der Struktur.",
        },
        {
          caption: "Subsea-Pipeline und Manifold — Vermessungsraster, Veränderungen des Meeresbodens und Ereigniserkennung.",
        },
        {
          caption: "Fahrrinnenboden aus der Perspektive der Einheiten — mehrere Schiffe verifiziert, eines als außerhalb der Spezifikation markiert.",
        },
        {
          caption: "Propeller eines Megaschiffs — Lärm- und Kavitationssignatur, Wellenfronten breiten sich achteraus aus.",
        },
        {
          caption: "Kognitive Konsole — digitaler Zwilling eines Demonstrationsbeckens als Vermessungs-Rendering: Fächerecholot-Bathymetrie (Multibeam) und Lidar-Punktwolken mit Schiffen und Einheiten, UKC-Kennwerte, Querschnitt, akustisches Spektrum und Ereignisse.",
        },
        {
          caption: "3D-Zwillingsansicht — Liegeplatz B12 und Wendebecken bei −15,0/−16,0 m CD: Kaifront, festgemachtes Schiff und kognitive Einheiten, erfasst in einem 0,5-m-Raster (synthetisches Layout).",
        },
      ],
    },
    cognitive: {
      eyebrow: "KI-GESTÜTZTE KOGNITIVE ROBOTIK",
      title: "Wahrnehmen. Schlussfolgern. Handeln.",
      steps: [
        {
          title: "Wahrnehmen",
          text: "Kognitive Robotereinheiten — fest installiert und mobil, unter Wasser und an der Oberfläche — erfassen kontinuierlich die hydroakustischen, strukturellen und hydrodynamischen Felder rund um Ihre kritische Infrastruktur.",
        },
        {
          title: "Schlussfolgern",
          text: "In jeder Einheit läuft frugale, physikinformierte KI: Sie klassifiziert Signaturen, erkennt Anomalien und passt ihre eigene Abtastung an — mit oder ohne Live-Verbindung zum Land.",
        },
        {
          title: "Handeln",
          text: "Die Einheiten lösen Alarme aus, verifizieren gegenseitig ihre Messwerte und speisen die kognitive Cloud-Engine, die alle Einheiten zu einem einzigen operativen Lagebild verschmilzt: APIs, Dashboards und der digitale 3D-Zwilling.",
        },
      ],
    },
    services: {
      eyebrow: "LEISTUNGEN",
      title: "Serenitech Cognitive Services",
      link: "Details",
      items: [
        {
          title: "Schutz vor Umweltlärm & Vibration",
          text: "Kontinuierliche akustische Energiematrix unter Wasser und strukturelle Dehnungskarten, mit Alarmen bei Grenzwertüberschreitung je Hafensektor.",
        },
        {
          title: "Automatisierte digitale Schiffsidentifikation",
          text: "Akustischer und hydrodynamischer Fingerabdruck, abgeglichen mit AIS; sofortige Dark-Vessel-Alarme (Schiffe ohne AIS).",
        },
        {
          title: "Prädiktive Versandungs- & Verschlickungsanalyse",
          text: "Versandungs-Geschwindigkeitsvektoren und volumetrische Abweichungsdiagramme, die Baggerungen priorisieren, bevor Schwellenwerte erreicht werden.",
        },
        {
          title: "Dynamische Tiefgangsüberwachung für Fahrrinne & Liegeplatz",
          text: "Live-Tiefgang am Bug, mittschiffs und am Heck, kontinuierliche Kielfreiheit (UKC), Squat- sowie Krängungs- und Rollanalysen.",
        },
        {
          title: "Überwachung von Strukturintegrität & Anlegestößen",
          text: "Autonome kognitive Robotereinheiten an kritischen Bauwerken — Piers, Dalben, Kaimauern, Jacket-Beinen und Subsea-Anlagen: Verschiebung, Vibrationsspektrum, Stoß- und Aufprallaufzeichnungen.",
        },
        {
          title: "Cloud-Plattform: APIs, Dashboards, Alarme & digitaler 3D-Zwilling",
          text: "REST- und Streaming-APIs, Executive-Kontroll-Dashboard, Alarm-Engine zur Richtliniendurchsetzung und ein browserbasierter 3D-Zwilling des Hafens oder der Anlage.",
        },
      ],
    },
    how: {
      eyebrow: "WIE WIR ARBEITEN",
      title: "Von der Machbarkeitsstudie zum kontinuierlichen Dienst.",
      steps: [
        {
          title: "Audit & Machbarkeitsberatung",
          text: "Ein maßgeschneidertes Projekt für Ihre Fahrrinne, Ihr Becken, Ihre Liegeplätze oder Ihre Anlage: strategische Diagnose des Betriebs, Verbesserungspotenziale, Ziele und KPIs, Messplan und Machbarkeitsbewertung — die Grundlage des definitiven Projekts und des Angebots für den Dienstleistungsvertrag.",
        },
        {
          title: "Einsatz der Robotereinheiten",
          text: "Kognitive Robotereinheiten, unter Wasser und an der Oberfläche, installiert, betrieben und gewartet von Serenitech; keine Investitionskosten (Capex) für den Betreiber.",
        },
        {
          title: "Cloud-Aktivierung",
          text: "APIs, Dashboards, Alarmrichtlinien und der digitale Zwilling, angebunden an Ihr VTMIS, SCADA oder ERP.",
        },
        {
          title: "Kontinuierlicher Dienst",
          text: "24/7-Monitoring, Modellaktualisierungen, Umwelt- und Integritätsberichte — als Abonnement im Rahmen des Dienstleistungsvertrags.",
        },
      ],
    },
    twin: {
      eyebrow: "DIGITALER ZWILLING",
      title: "Ein lebendiges 3D-Modell Ihres Hafens — vom Grund aufwärts.",
      bullets: [
        "Farbcodierte bathymetrische Oberfläche mit Versandungsdichte und kritischen Flachwasserzonen",
        "Dynamische Schiffsblöcke mit Tiefgang, Stampfen, Rollen und Krängung in Echtzeit",
        "Wellenfront-Overlays unter der Wasseroberfläche, die akustische und strukturelle Ereignisse lokalisieren",
        "Alles im Browser gerendert, gespeist von denselben APIs, die Ihre Systeme nutzen",
      ],
      panelLabel: "Stilisierte Illustration",
      legend: [
        "UKC 1,9 m",
        "Versandung +3,2 %",
        "Dark Vessel: keines",
        "Becken 3 · live",
      ],
      console: {
        ...en.home.twin.console,
        open: "Konsolenbildschirm in voller Größe öffnen",
        alt: "Kognitive Konsole von Serenitech: 3D-Ansicht in Vermessungsqualität einer Zufahrtsrinne und eines Wendebeckens — Fächerecholot-Bathymetrie in einer Tiefen-Farbskala, Lidar-Punktwolken von Kai, Kränen und Schiffen — mit Kennwerten, Querschnittsprofil, akustischem Spektrum und Ereignisprotokoll",
        caption: "Synthetisches Demonstrationsbecken — das Layout ist fiktiv; Fahrrinne −15,0 m CD, 220 m breit, Böschungen 1:3, Wendebecken Ø 600 m, Schiffe von 347 m / 294 m und Tide +0,9 m sind Kennwerte der Klasse Miami/Santos. Gerendert als Fächerecholot- und Lidar-Vermessung aus demselben Datenmodell, auf dem auch die Konsole basiert.",
      },
    },
    ai: {
      eyebrow: "KI-STACK",
      title: "Deep Tech, im eigenen Haus entwickelt.",
      items: [
        "Frugale Edge-KI in jeder kognitiven Robotereinheit — Klassifikation dort, wo das Signal entsteht.",
        "Physikinformierte Modelle — Akustik, Hydrodynamik und Strukturmechanik leiten das Lernen.",
        "Mehrschichtige Intelligenz — Einheit → Gateway → Cloud, resilient gegenüber intermittierenden Verbindungen.",
        "Föderiertes Lernen und Over-the-Air-Modellaktualisierungen über Standorte hinweg.",
        "Security by Design — verschlüsselte Verbindungen, signierte Messwerte, rollenbasierter Zugriff, vollständiger Audit-Trail.",
        "Forschungslinie — Promotionsarbeiten in Signal- und Bildverarbeitung sowie in Hochfrequenzelektronik, IEEE-OCEANS- und EuCAP-Veröffentlichungen zu Unterwassersensoren mit hoher Datenrate und das europäische EdgeAI-Programm hinter unserem Edge-Intelligence-Design.",
      ],
    },
    presence: {
      eyebrow: "GLOBALE PRÄSENZ",
      title: "Eine Plattform, lokal betrieben, global geführt.",
      items: [
        { place: "Monaco", text: "Hauptsitz der Gruppe & Labor — Avenue J. F. Kennedy, Port Hercule" },
        {
          place: "Florianópolis, Brasilien",
          text: "Hauptsitz Brasilien, Büro & Labor — Sapiens Parque, Brasiliens größter Technologiepark",
        },
        { place: "Coral Gables, Florida, USA", text: "Geschäftsbetrieb Nordamerika — Valencia Avenue" },
      ],
    },
    finalCta: {
      eyebrow: "WIE WIR BEGINNEN",
      title: "Es beginnt mit einer strategischen Diagnose Ihres Betriebs.",
      text: "Ein strukturiertes, budgetiertes Beratungsprojekt, maßgeschneidert auf Ihre Fahrrinne, Ihr Terminal, Ihre Plattform oder Anlage und aufgebaut auf einem tiefen Verständnis dafür, wie Ihr Betrieb wirklich funktioniert. Seine Schlussfolgerungen werden zum definitiven Projekt und zum Angebot für den langfristigen Dienstleistungsvertrag.",
      steps: [
        {
          title: "Strategische Diagnose",
          text: "Tiefes Verständnis des aktuellen Betriebs — Routinen, Daten, Risiken und Randbedingungen, so wie sie tatsächlich ablaufen.",
        },
        {
          title: "Verbesserungspotenziale",
          text: "Wo kontinuierliche Intelligenz unter der Wasseroberfläche das Ergebnis verändert — lokalisiert, quantifiziert und priorisiert.",
        },
        {
          title: "Ziele & KPIs",
          text: "Die Zielwerte und Kennzahlen, an denen das definitive Projekt gemessen wird, abgestimmt mit Ihrem Team.",
        },
        {
          title: "Definitives Projekt",
          text: "Entwicklungs- und Einsatzplan, Budget und das Angebot für den Dienstleistungsvertrag.",
        },
      ],
      button: "Technisches Briefing anfordern",
      imageAlt: "Jacket-Struktur einer Offshore-Plattform, gesehen von jenseits der Oberfläche",
    },
  },
  services: {
    eyebrow: "KOGNITIVE SERVICES",
    title: "Serenitech Cognitive Services",
    intro:
      "Serenitech Cognitive Services — die Cloud-Schicht unseres KI-gestützten kognitiven Robotiksystems: eine einheitliche, cloud-native Plattform, die physikalische Phänomene unter der Wasseroberfläche mit Hochtechnologie in granulare, operative Echtzeit-Datenströme verwandelt. Kontinuierliche Online-Überwachung der kritischen Infrastruktur: Zufahrtsrinne, Manövrierbecken, Anlegepiers — und für Offshore- und Subsea-Betreiber die kritische Struktur selbst. Jedes Modul wird unter einer technischen Leitung mit 27 Jahren Forschung in medienübergreifender Telekommunikation, Unterwasser-Sensornetzen, Signalverarbeitung und Edge-KI entwickelt — veröffentlicht bei IEEE und durch Patentanmeldungen geschützt. Wenn die Situation es erfordert, liefern wir auch maßgeschneiderte Beratung.",
    mandateLabel: "Architekturauftrag",
    mandate:
      "In klarer Abkehr von einem dezentralen, hardwarezentrierten Modell kapselt der Dienst die gesamte zugrunde liegende Instrumentierung in abstrakten Funktionsschichten, die über sichere APIs mit niedriger Latenz an Kontroll-Dashboards, Echtzeit-Alarmsysteme und einen detailgetreuen räumlichen digitalen 3D-Zwilling ausgeliefert werden.",
    columns: {
      measure: "Was wir messen",
      get: "Was Sie erhalten",
      matters: "Warum es zählt",
    },
    moduleLabel: "Modul",
    modules: [
      {
        title: "Schutz vor Umweltlärm & Vibration",
        measure:
          "Kontinuierliche Unterwasser-Schalldruckpegel über Frequenzbänder; mikroseismische und niederfrequente mechanische Energie, die sich durch Piers und Kaimauern ausbreitet; Wassertemperatur- und Salinitätsprofile zur Berechnung lokaler Schallgeschwindigkeitsvektoren.",
        get: "Akustische Energiematrix in Echtzeit (dB re 1 µPa), aktualisiert über Terzbänder von 10 Hz bis 20 kHz; Strukturzustands-Dehnungskarten mit Vibrationsamplituden, Geschwindigkeitsvektoren und Anomalien der Spitzen-Partikelbeschleunigung; sofortige Alarme bei Grenzwertüberschreitung, verknüpft mit bestimmten Hafensektoren.",
        matters:
          "Nachweis der Einhaltung von Unterwasserlärm-Grenzwerten, Schutz von Meeresfauna und Bauwerken, Evidenz für die Umweltberichterstattung.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Automatisierte digitale Schiffsidentifikation",
        measure:
          "Hochauflösende breit- und schmalbandige akustische Emissionssignaturen; Blattfrequenz-Modulationen (fundamentale Propellersignatur); lokalisierte niederfrequente hydrodynamische Drucksignaturen und das vom fahrenden Rumpf erzeugte Nachstrommuster.",
        get: "Eindeutiges akustisches Fingerabdruckprofil (Zündfrequenzen der Motoren, Wellendrehzahl, Blattzahl, harmonische Spitzen); hydrodynamische Druckprofile zur Schätzung von Rumpfgröße, Tiefgang und Geschwindigkeit; Multi-Einfluss-Verifikationsmatrix, die Echtzeit-Signaturen mit den obligatorischen AIS-Daten abgleicht; sofortige Dark-Vessel-Alarme, wenn nicht autorisierte oder stille Schiffe räumliche Grenzen überschreiten.",
        matters:
          "Sicherheit der Zufahrtsrinne und der Sperrzonen, Verifikation des gemeldeten Verkehrs, forensische Aufzeichnung jeder Bewegung.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Prädiktive Versandungs- & Verschlickungsanalyse",
        measure:
          "Multifrequenz-akustische Rückstreuung zur Kartierung suspendierter Sedimente; bathymetrische Tiefenmatrizen über die volle Schwadbreite in Fahrrinnen und Liegeplatzbereichen; lokale Strömungsgeschwindigkeiten und Sohlschubspannungsvektoren.",
        get: "Vektoren der Versandungs-Ablagerungsgeschwindigkeit, die Kubikmeter Akkumulation je Rasterkoordinate und Zeiteinheit vorhersagen; volumetrische Abweichungsdiagramme in Echtzeit gegenüber historischen Referenzwerten; automatisierte Alarme für kritische Baggerungen, die Zonen nahe regulatorischer Sicherheitsschwellen priorisieren.",
        matters:
          "Baggerung geplant auf Basis von Prognosen statt periodischer Vermessungen — geringere Baggerkosten, keine überraschenden Untiefen, dokumentierte Sicherheit.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Dynamische Tiefgangsüberwachung für Fahrrinne & Liegeplatz",
        measure:
          "Hochdichte vertikale Abstandsmatrizen zwischen Rumpf und aktueller Fahrrinnensohle; hydrostatische Druckgradienten an mehreren Punkten entlang des Rumpfes; dynamischer Tidenstand, Wasserdichte und welleninduzierte Vertikalbewegung.",
        get: "Dynamischer Schiffstiefgang in Echtzeit am Bug, am Heck und mittschiffs; kontinuierliche Sicherheitsmargen der Kielfreiheit (UKC) während der Passage; Squat-Effekt (dynamische Tiefertauchung) sowie Krängungs- und Rollanalysen; räumliche Grundberührungs-Risikoprognosen, die Hotspots geringer Kielfreiheit kartieren.",
        matters:
          "Sicherere Passagen, engere Tiefgangsfenster, mehr Ladung pro Hafenanlauf — mit der Evidenz zur Untermauerung jeder Entscheidung.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Überwachung von Strukturintegrität & Anlegestößen",
        measure:
          "Autonome kognitive Robotereinheiten, fest installiert an Pfählen, Dalben, Fendern, Kaimauern, Vertäuungseinrichtungen, Jacket-Beinen, Risern und Subsea-Anlagen — dreiachsige Beschleunigung, Winkelbewegung und Verschiebung, Stoß-/Aufprallerkennung, vollständiges Vibrationsspektrum und Modalanalyse; Datenübertragung über drahtlose Unterwasserverbindungen zu Oberflächen-Gateways (Mobilfunk, Satellit oder Langstreckenfunk mit geringem Energiebedarf) mit mehrjähriger Autonomie.",
        get: "Verschiebungs- und Drifttrends, Ermüdungs- und Modalsignaturen, zeitgestempelte Aufprallaufzeichnungen, die bei Anlegekollisionen das verantwortliche Schiff identifizieren, schwellenwertbasierte Anomaliealarme, direkte SCADA-Integration.",
        matters:
          "Evidenz für Haftungs- und Versicherungsfragen, weniger ungeplante Reparaturen, Integritätsmanagement für kritische Bauwerke, die kein Taucher täglich inspiziert.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Cloud-Plattform: APIs, Dashboards, Alarme & digitaler Zwilling",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "APIs",
            text: "Entwicklerorientierte REST-Endpunkte für Strukturabfragen und WebSocket-Streams für Echtzeitanwendungen; sofortige Integration in VTMIS, SCADA, ERP und PMS.",
          },
          {
            label: "Executive-Kontroll-Dashboard",
            text: "Mandantenfähige Ansicht des Hafenzustands — Umgebungslärm-Indizes, Liegeplätze innerhalb sicherer UKC, Baggerprioritäten, Protokolle der Schiffsbewegungen.",
          },
          {
            label: "Intelligente Ereignisalarme & Engine zur Richtliniendurchsetzung",
            text: "Regeln mit niedriger Latenz, die visuelle, SMS- und Webhook-Alarme auslösen — Umweltverstöße, Sicherheitsereignisse, Gefahren für die Betriebssicherheit.",
          },
          {
            label: "Räumlicher digitaler 3D-Zwilling",
            text: "Interaktives browserbasiertes Modell mit volumetrischen Sohlen-Renderings, dynamischen Schiffsblöcken und Wellenfront-Overlays unter der Wasseroberfläche.",
          },
        ],
      },
      {
        title: "Beratung & Consulting — Fall für Fall konzipiert",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "Anwendbarkeits- & Machbarkeitsstudien",
            text: "Lässt sich Ihre Fahrrinne, Ihr Terminal, Ihre Plattform oder Ihre Subsea-Anlage kontinuierlich erfassen — und wozu? Wir kartieren die relevanten Phänomene, die erforderlichen Einheiten und Positionen, die erwartete Datenqualität und den Business Case — vor jedem Einsatz.",
          },
          {
            label: "Bewertung der Umweltauswirkungen",
            text: "Bewertungen von Unterwasserlärm und Vibration bei Baggerung, Rammarbeiten, Bauarbeiten und Schiffsverkehr; Baseline-Kampagnen, Monitoringpläne und die kontinuierliche Evidenz, die Aufsichts- und Genehmigungsbehörden verlangen.",
          },
          {
            label: "Strukturelle & operative Risikobewertung",
            text: "Studien zu Anlege- und Vertäuungsstößen, Richtlinien für dynamischen Tiefgang und Kielfreiheit, Versandungs- und Baggerstrategie, Integritätspläne für Piers, Dalben, Jackets, Riser und Pipelines.",
          },
          {
            label: "Beratung zu KI- & Deep-Tech-Architektur",
            text: "Unabhängige Prüfung und Gestaltung von Sensorik-, Edge-KI-, Cloud- und Digital-Twin-Architekturen; Datenstrategie, Integration mit VTMIS, SCADA und ERP, Cybersicherheit und Data Governance.",
          },
          {
            label: "Unterwasserkonnektivität unter anspruchsvollen Bedingungen",
            text: "Auslegung akustischer und optischer Verbindungen, Autonomie und Überlebensfähigkeit der Einheiten bei hoher Schlickbelastung, dichtem Verkehr und in Tiefwasser, Einsatz- und Wartungs-Engineering.",
          },
          {
            label: "Spezifikation, Beschaffung & Owner's Engineer",
            text: "Technische Spezifikationen, Lieferantenbewertung, Abnahmetests und unabhängige Überwachung von Monitoringprogrammen nach internationalen Standards.",
          },
        ],
      },
    ],
    apiLabel: "API-Beispiel",
    advisoryIntro:
      "Jeder Hafen, jede Plattform und jede kritische Struktur ist anders. Unsere Beratung wird Fall für Fall von dem Team konzipiert, das die kognitiven Robotereinheiten, die KI und die Unterwasserverbindungen baut, unter der Leitung von Dr. Thierry Deschamps de Paillette — agrégé, promoviert in Hochfrequenzelektronik, Photonik und Systemen, 27 Jahre Forschung in medienübergreifender Telekommunikation, Unterwasser-Sensornetzen und Edge-KI, IEEE-Autor und -Gutachter. Expertise auf internationalem Niveau in KI, Deep Tech und Unterwasserkonnektivität unter anspruchsvollen Bedingungen, angewandt auf Ihre Situation.",
    headerAlt:
      "Unterwasseransicht einer Kaimauer mit kognitiven Robotereinheiten und 3D-Messwerten",
    commercial: {
      eyebrow: "GESCHÄFTSMODELL",
      title: "Monitoring-as-a-Service",
      text: "Monitoring-as-a-Service-Abonnement — kognitive Robotereinheiten installiert, im Eigentum und gewartet von Serenitech; Open-Book-Preisgestaltung zu lokalen Marktbedingungen; Engineering-Studien und Technologieentwicklung als Consulting verfügbar.",
    },
  },
  sectors: {
    eyebrow: "SEKTOREN",
    title: "Vier Sektoren, eine Plattform unter der Wasseroberfläche.",
    outcomeLabel: "Ergebnis",
    headerAlt:
      "Jacket-Struktur einer Offshore-Plattform mit kognitiven Robotereinheiten unter Wasser",
    items: [
      {
        title: "Häfen & Terminals",
        text: "Zufahrtsrinne, Manövrierbecken und Liegeplätze — die kritische Infrastruktur des Hafens — unter kontinuierlicher Online-Überwachung unterhalb der Wasseroberfläche: dynamischer Tiefgang und UKC, prädiktive Versandung, Einhaltung der Unterwasserlärm-Grenzwerte, Schiffsverifikation und Aufzeichnung von Anlegestößen. Integriert sich in VTMIS und Hafen-ERP-Systeme.",
        outcome:
          "Sicherere Passagen, optimierte Baggerung, dokumentierte Compliance, weniger Streitfälle.",
        alt: "Kaimauer und festgemachtes Schiff, unter Wasser gesehen",
      },
      {
        title: "Offshore Öl & Gas",
        text: "Kritische Strukturen — Jacket-Beine, Riser, Verankerungssysteme und Subsea-Ausrüstung — online überwacht auf Bewegung, Vibration, Stöße und Kolk; Annäherungserkennung nicht identifizierter Schiffe rund um die Plattform; Überwachung von Unterwasserlärm während Bohr- und Bauarbeiten.",
        outcome:
          "Integritätsmanagement mit kontinuierlicher Evidenz, Sicherheitsperimeter jenseits der Oberfläche, Umwelt-Compliance.",
        alt: "Jacket-Beine einer Offshore-Plattform unter Wasser mit akustischen Robotersensoreinheiten",
      },
      {
        title: "Subsea-Strukturen",
        text: "Kritische Subsea-Infrastruktur — Pipelines, Manifolds, Kabel, Ausleitungen und Offshore-Windfundamente: strukturelle Bewegung und Vibration, Veränderungen des Meeresbodens und Sedimentdynamik rund um die Anlage, Ereigniserkennung und Langzeitdrift — durch kognitive Robotereinheiten, die jahrelang keinen Tauchereinsatz benötigen.",
        outcome:
          "Weniger Inspektionskampagnen, frühere Warnungen, ein digitaler Zwilling der Anlage auf dem Meeresboden.",
        alt: "Subsea-Pipeline und Manifold auf dem Meeresboden mit Vermessungsraster-Overlay",
      },
      {
        title: "Schiffbau- und Marineindustrie",
        text: "Werften, Flotten und Schiffs- und Marinetechnik: Messung des abgestrahlten Unterwasserschalls und der akustischen Signatur von Rümpfen und Propellern, Signaturdrift als Zustandsindikator, Überwachung von Becken und Trockendocks, strukturelle Instrumentierung von Rümpfen und Anlegebauwerken — fundiert auf zwei Jahrzehnten Forschung in Signalverarbeitung und Unterwasser-Telemetrie.",
        outcome:
          "Messbare akustische Leistung und kontinuierliche Daten für Konstruktion, Wartung und Zertifizierungsunterstützung.",
        alt: "Propeller eines Ultra-Großcontainerschiffs mit akustischen Ringen und 3D-Drahtgittermodell",
      },
    ],
  },
  technology: {
    eyebrow: "TECHNOLOGIE",
    title: "Vom Meeresboden bis zur API.",
    headerAlt: "Bathymetrische 3D-Oberfläche über dem Boden einer Hafenfahrrinne",
    headerLine:
      "Serenitech ist ein KI-gestütztes kognitives Robotiksystem: Einheiten, die wahrnehmen, schlussfolgern und handeln, orchestriert von einer kognitiven Cloud-Engine. Seine Architektur geht auf zwei Jahrzehnte Forschung zu Unterwasser-Telekommunikation und Sensornetzen sowie auf die europäischen KI-Programme AI4DI und EdgeAI zurück.",
    layersTitle: "Fünf Schichten",
    // Drawing texts stay English (rule above); only the accessible description is localised.
    schematic: {
      ...en.technology.schematic,
      alt: "Animierter Vertikalschnitt eines Liegeplatzes: Sensorik an Gewässerboden und Pfählen, kognitive Robotereinheiten und eine Vermessungseinheit, Kai-Gateway mit Edge-Intelligenz, kognitive Cloud-Engine und Bedieneroberflächen, mit Datenpaketen, die entlang der Verbindungen wandern",
    },
    layers: [
      {
        title: "Schnittstellen",
        text: "REST- und WebSocket-APIs, Executive-Dashboards, Alarm- und Richtlinien-Engine, digitaler 3D-Zwilling.",
      },
      {
        title: "Cloud-Engine",
        text: "Datenaufnahme, optimiert für massive Zeitreihen-Arrays und räumliche Daten; Verarbeitung vollständig entkoppelt von der Hardware im Hafen; mandantenfähig, skalierbar, sicher.",
      },
      {
        title: "Edge-Intelligenz",
        text: "Jede Einheit schlussfolgert lokal: Frugale KI-Modelle klassifizieren Ereignisse dort, wo sie auftreten, und senken Bandbreite und Latenz.",
      },
      {
        title: "Konnektivitätsschicht",
        text: "Drahtlose Unterwasserverbindungen (akustisch und optisch) zu Oberflächen-Gateways; Backhaul über Mobilfunk, Satellit und Langstreckenfunk mit geringem Energiebedarf; Store-and-Forward-Resilienz.",
      },
      {
        title: "Robotische Sensorikschicht",
        text: "Kognitive Robotereinheiten mit hydroakustischen Arrays, Inertial- und Vibrationssensorik, Druck- und Abstandsmatrizen, Echolotung und Wassersäulensonden (Temperatur, Salinität, Trübung), fest an Bauwerken installiert oder in der Fahrrinne ausgebracht.",
      },
    ],
    security: {
      eyebrow: "SICHERHEIT & DATA GOVERNANCE",
      title: "Sicherheit & Data Governance",
      items: [
        "Ende-zu-Ende verschlüsselte Verbindungen",
        "Signierte Messwerte mit unveränderlichem Audit-Trail",
        "Rollenbasierter Zugriff je Mandant und Sektor",
        "Optionen für Datenresidenz je Land",
        "Integration hinter der Firewall des Betreibers auf Anfrage",
      ],
    },
    research: {
      eyebrow: "FORSCHUNGS-DNA",
      title: "Forschungs-DNA",
      text: "Hochfrequenzelektronik, Photonik, Unterwasser-Telekommunikation, Signalverarbeitung und KI — eine Laborkultur in Monaco und Florianópolis, die sich der Umwelt unter der Wasseroberfläche widmet und in 27 Jahren Forschung verwurzelt ist: Promotionsarbeiten am Labor L3i (La Rochelle) und in Orléans, IEEE-OCEANS- und EuCAP-Veröffentlichungen zu Unterwassersensoren und -antennen mit hoher Datenrate, Gutachtertätigkeit für das IEEE Journal of Oceanic Engineering, zwei Patentanmeldungen zu KI-gesteuerter Unterwasserkommunikation und die europäischen KI-Programme AI4DI und EdgeAI.",
    },
  },
  company: {
    eyebrow: "UNTERNEHMEN",
    title: "Eine globale Deep-Tech-Gruppe, die sich der Welt unter der Wasseroberfläche widmet.",
    about:
      "Ein Großteil der kritischen Infrastruktur der Welt liegt teilweise unter Wasser — und wird nahezu blind überwacht. Serenitech baut die KI-gestützte kognitive Robotik — Sensorik, Konnektivität, künstliche Intelligenz und Cloud-Dienste — auf drei Jahrzehnten Forschung in Unterwasser-Telekommunikation, Sensorik und eingebetteter KI auf und gibt Hafenbehörden, Offshore-Betreibern, Eigentümern von Subsea-Anlagen und der Schiffbau- und Marineindustrie kontinuierliche Sicht, Gedächtnis und Voraussicht jenseits der Wasserlinie. Der Name sagt es: Gelassenheit durch Technologie.",
    technicalEyebrow: "TECHNISCHE & WISSENSCHAFTLICHE LEITUNG",
    technicalTitle: "Drei Jahrzehnte Forschung in Unterwasser-Sensorik, Telekommunikation und eingebetteter KI — an der Spitze unseres Engineerings.",
    technicalIntro: "Serenitech ist ein spezialisiertes technisches Dienstleistungsunternehmen. Seine Technologie, seine Labore und seine Produktarchitektur werden von Dr. Thierry Deschamps de Paillette geleitet — agrégé in Elektrotechnik und Elektronik, promoviert in Hochfrequenzelektronik, Photonik und Systemen, mit Promotionsforschung in Signal- und Bildverarbeitung und 27 Jahren fortgeschrittener Forschung, angewandt auf medienübergreifende Telekommunikationssysteme, Unterwasser-Sensornetze, Signalverarbeitung und Edge-KI. Industrieprodukte, IEEE-Veröffentlichungen, Patentanmeldungen und die europäischen KI-Programme AI4DI und EdgeAI bilden das technische Fundament jeder Leistung auf dieser Seite.",
    proofPoints: [
      { value: "27 Jahre", label: "fortgeschrittener Forschung — Hochfrequenzelektronik, Photonik, Systeme und KI" },
      { value: "Agrégé · Ph.D.", label: "Frankreichs selektivstes nationales Auswahlverfahren in der Disziplin; Promotion mit félicitations du jury" },
      { value: "IEEE", label: "Veröffentlichungen bei OCEANS und EuCAP; Gutachter für das IEEE Journal of Oceanic Engineering" },
      { value: "2 Patentanmeldungen", label: "KI-gesteuerte Auswahl des Unterwasser-Kommunikationsmodus (EP · PCT), alleiniger Erfinder" },
      { value: "AI4DI · EdgeAI", label: "europäische KI-Programme, geleitet mit großen Industriekonzernen und Start-ups" },
      { value: "20 Jahre", label: "Industrieproduktentwicklung — Crouzet, Micrelec, TECHNEXT" },
    ],
    photoCaptionShort: "Sapiens Parque, Florianópolis — Hauptsitz und Labor in Brasilien, im größten Technologiepark des Landes.",
    showMore: "Mehr anzeigen",
    showLess: "Weniger anzeigen",
    linkedin: "LinkedIn →",
    openLabel: "Öffnen",
    lead: {
      name: "Dr. Thierry Deschamps de Paillette",
      role: "Chief Technology Officer · Technische & wissenschaftliche Leitung",
      bio: "Dr. Thierry Deschamps de Paillette ist agrégé in Elektrotechnik und Elektronik — Frankreichs selektivstes nationales Auswahlverfahren in der Disziplin — und promovierte an der Université de La Rochelle mit félicitations du jury, der höchsten Auszeichnung. Er bringt 27 Jahre fortgeschrittener Forschung in Hochfrequenzelektronik, Photonik und Systemen mit, angewandt auf KI, Kybernetik und medienübergreifende Telekommunikationssysteme in Zusammenarbeit mit großen Industriekonzernen. Seine jüngsten Forschungs- und Engineering-Arbeiten umfassen eine neue Generation von Unterwasser-Telekommunikations- und Sensornetzen. Seit zwei Jahrzehnten entwickelt er Industrieprodukte — Crouzet, Micrelec, TECHNEXT — und ist der benannte Erfinder in Patentanmeldungen zur KI-gesteuerten Auswahl des Unterwasser-Kommunikationsmodus. Als Professor der höheren Lehrstuhlstufe (professeur de chaire supérieure) im französischen nationalen Bildungssystem saß er in den nationalen Prüfungsausschüssen, die agrégés in den Ingenieurwissenschaften rekrutieren. Er publiziert bei IEEE und begutachtet für das IEEE Journal of Oceanic Engineering; als KI-Berater, Referent und Experte in Clustern wie dem Institut EuropIA und Cluster-IA leitete er die europäischen KI-Programme AI4DI und EdgeAI mit großen Industriekonzernen und Start-ups. Bei Serenitech leitet er Technologie, Labore und Produktarchitektur — die kognitiven Robotereinheiten, den Unterwasser-Kommunikationsstack und die Schichten für KI-Sensorik und Edge-Intelligenz.",
      link: "https://www.linkedin.com/in/thierry-deschamps-de-paillette-b1669821/",
      panels: [
        {
          title: "Referenzen",
          items: [
            {
              title: "Gutachter, IEEE Journal of Oceanic Engineering",
            },
            {
              title: "Experte, KI & Ozeane — Institut EuropIA",
              link: "https://instituteuropia.eu/experts",
            },
            {
              title: "Vizepräsident — Cluster-IA",
            },
            {
              title: "AI4DI — Artificial Intelligence for Digitizing Industry · H2020 / ECSEL JU, Grant Agreement 826060",
              link: "https://ai4di.eu/",
            },
            {
              title: "EdgeAI — Edge AI Technologies for Optimised Performance Embedded Processing · Horizon Europe / KDT JU, Grant Agreement 101097300",
              link: "https://cordis.europa.eu/project/id/101097300",
            },
            {
              title: "Jurymitglied der französischen nationalen Agrégation-Prüfungsausschüsse für die Rekrutierung von Professoren (agrégés) in den Ingenieurwissenschaften",
              link: "https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/concours-examens/833/833-rapport-jury-agreg-ext-ssi-et-ingenierie-electrique.pdf",
            },
            {
              title: "Industrieproduktentwicklung für Crouzet, Micrelec und TECHNEXT",
            },
            {
              title: "EWTS HYD Energie- und Wasserzählsystem — Lehrmaterial im französischen nationalen Ingenieur-Lehrplan",
              link: "https://sti.eduscol.education.fr/ressources_techniques/ewts-hyd-systeme-de-comptage-energetique",
            },
            {
              title: "Entwickler der 400-kHz-FSK- und der breitbandigen magnetoinduktiven Unterwassermodems — Hardware, Firmware und Inbetriebnahme",
            },
            {
              title: "INPI-Soleau-Hinterlegung zum Prioritätsnachweis DSO2019007239 (2019) — breitbandige magnetoinduktive Unterwasserverbindung mit OFDM-Modulation",
            },
            {
              title: "Edge-to-Cloud-Intelligenzarchitekturen und KI für raue Umgebungen",
            },
          ],
        },
        {
          title: "Ausbildung",
          items: [
            {
              year: "2015 — 2020",
              title: "Université de La Rochelle — Labor L3i",
              venue: "Ph.D., Hochfrequenzelektronik, Photonik und Systeme · mit félicitations du jury · La Rochelle, Frankreich · verteidigt am 22. Oktober 2020 · Betreuer Prof. Alain Gaugue",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2011 — 2012",
              title: "Approved Training Organisation (ATO)",
              venue: "PPL-A Privatpilotenlizenz, einmotorig — Glascockpit und FADEC · Frankreich",
            },
            {
              year: "2007 — 2008",
              title: "Université d'Orléans",
              venue: "Forschungspromotion, Signal- und Bildverarbeitung · Zielverfolgung in Videosequenzen unter erschwerten Bedingungen · Orléans, Frankreich",
            },
            {
              year: "1998",
              title: "Ministère de l'Éducation nationale",
              venue: "Agrégation externe — Elektrotechnik, Elektronik und industrielle Informatik · bestanden · Frankreich",
            },
            {
              year: "1996 — 1997",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "DEA, forschungsorientierter Master in Elektronik und Systemen — maschinelles Sehen für Robotersysteme · Clermont-Ferrand, Frankreich",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Master, Elektrotechnik — Mikroelektronik · Clermont-Ferrand, Frankreich",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Licence, Elektrotechnik (EEA) — Elektronik, elektromechanische Systeme, Regelungstechnik · Clermont-Ferrand, Frankreich",
            },
            {
              year: "1993 — 1994",
              title: "Institut Universitaire de Technologie, Université Blaise Pascal",
              venue: "DUT, Elektrotechnik — Regelungstechnik und industrielle Informatik, C3/C4I-Systeme · Clermont-Ferrand, Frankreich",
            },
            {
              year: "1990 — 1992",
              title: "Lycée Godefroy de Bouillon",
              venue: "Baccalauréat F3, Elektromechanik · Frankreich",
            },
          ],
        },
        {
          title: "Erfahrung",
          items: [
            {
              year: "2013 — 2026",
              title: "Ministère de l'Éducation nationale",
              venue: "Professor für Elektrotechnik und Informatik, höherer Lehrstuhl (professeur de chaire supérieure) · Frankreich",
            },
            {
              year: "2007 — 2026",
              title: "TECHNEXT",
              venue: "Wissenschaftlicher Berater · Cannes, Frankreich",
            },
            {
              year: "2015 — 2020",
              title: "Labor L3i, Université de La Rochelle",
              venue: "Forscher — Unterwasser-Telekommunikation und submarine Telemetrienetze · La Rochelle, Frankreich",
            },
            {
              year: "2011 — 2015",
              title: "Concours national d'Agrégation",
              venue: "Jurymitglied, externer Rekrutierungsausschuss für Professoren (agrégés) in den Ingenieurwissenschaften · Frankreich",
            },
            {
              year: "2011 — 2014",
              title: "TECHNEXT",
              venue: "Autor — eingebettete Systeme, Task-Scheduling und Entwurf komplexer Algorithmen · Cannes, Frankreich",
            },
            {
              year: "2005 — 2009",
              title: "Concours national d'Agrégation",
              venue: "Jurymitglied, interner Rekrutierungsausschuss für Professoren (agrégés) in den Ingenieurwissenschaften · Frankreich",
            },
            {
              year: "1998 — 2011",
              title: "Ministère de l'Éducation nationale",
              venue: "Lehrer für Elektrotechnik — Mathématiques spéciales · Frankreich",
            },
          ],
        },
        {
          title: "Patente",
          items: [
            {
              year: "EP4645718A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Europäische Patentanmeldung · alleiniger Erfinder · eingereicht am 29. April 2024, veröffentlicht am 5. November 2025",
              link: "https://patents.google.com/patent/EP4645718A1/en",
            },
            {
              year: "WO2025228988A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Internationale PCT-Anmeldung PCT/EP2025/061717 · alleiniger Erfinder · veröffentlicht am 6. November 2025",
              link: "https://patents.google.com/patent/WO2025228988A1/en",
            },
          ],
          footnote: "Zwei veröffentlichte Patentanmeldungen, die eine Erfindung abdecken, alleiniger Erfinder. Die Erfindung wählt zwischen akustischer, elektromagnetischer und optischer Unterwasserkommunikation mittels eines neuronalen Netzes, das mit Sensormesswerten, Kanaleigenschaften und Netzwerk-Feedback gespeist wird. IPC H04B 11/00 und H04B 13/02.",
        },
        {
          title: "Wissenschaft",
          items: [
            {
              year: "2024",
              title: "Enhancing Communication in Multi-Domain Ad-Hoc Networks for Maritime Critical Infrastructure Protection",
              venue: "OCEANS 2024 Halifax, IEEE · mit K. Brandl, J. Weid und A. Hahn",
              link: "https://doi.org/10.1109/OCEANS55160.2024.10754334",
            },
            {
              year: "2020",
              title: "Antenna Adaptation Circuits for High Data Rate Magneto-Inductive Underwater Communications",
              venue: "14th European Conference on Antennas and Propagation (EuCAP), Kopenhagen, IEEE, S. 1–5 · mit A. Gaugue",
              link: "https://doi.org/10.23919/EuCAP48036.2020.9135359",
            },
            {
              year: "2020",
              title: "Transmissions numériques sans-fil pour la surveillance environnementale en milieu sous-marin",
              venue: "Dissertation, Université de La Rochelle · HAL tel-03349746",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2019",
              title: "High Data Rate Wireless Underwater Sensors for Environmental Monitoring",
              venue: "MTS/IEEE OCEANS 2019, Marseille, S. 1–10 · mit A. Gaugue",
              link: "https://doi.org/10.1109/OCEANSE.2019.8867364",
            },
            {
              year: "2017",
              title: "Antenna design for underwater wireless telemetry systems",
              venue: "11th European Conference on Antennas and Propagation (EuCAP), Paris, IEEE, S. 2251–2255 · mit A. Gaugue, E. Parlier und S. Dardenne",
              link: "https://doi.org/10.23919/EuCAP.2017.7928513",
            },
            {
              year: "2017",
              title: "Télémétrie sous-marine à ondes électromagnétiques",
              venue: "XXèmes Journées Nationales Micro-ondes, Saint-Malo · mit A. Gaugue",
            },
          ],
          footnote: "Forschungsgebiete: elektromagnetische und magnetoinduktive Unterwasserkommunikation, Antennenentwurf und Impedanzanpassung, OFDM für Unterwasserverbindungen, Multi-Domain-Ad-hoc-Netze und KI für raue Umgebungen.",
        },
      ],
    },
    presenceTitle: "Globale Präsenz",
    presence: [
      {
        place: "Monaco",
        text: "Hauptsitz der Gruppe und Labor; Technologieentwicklung und Engineering.",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Monaco", "Fürstentum Monaco"],
      },
      {
        place: "Florianópolis, Brasilien",
        text: "Hauptsitz Brasilien mit Büro und Labor im Sapiens Parque, Brasiliens größtem Technologiepark; Geschäftsbetrieb für Hafen-, Offshore- und Schiffbaukunden in Brasilien.",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brasilien"],
      },
      {
        place: "Coral Gables, Florida, USA",
        text: "Geschäftsbetrieb Nordamerika.",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "Vereinigte Staaten von Amerika"],
      },
      {
        place: "Serenitech Global Corporation",
        text: "Holdinggesellschaft der Gruppe und aller ihrer Tochtergesellschaften.",
        address: [] as string[],
      },
    ],
    photoCaption:
      "Hauptsitz Brasilien — Büro und Labor im Sapiens Parque, Florianópolis (SC), Brasiliens größtem Technologiepark.",
    photoAlt:
      "Luftaufnahme des verglasten Bürogebäudes des Hauptsitzes Brasilien im Sapiens Parque, Florianópolis, an einem See",
  },
  contact: {
    eyebrow: "KONTAKT",
    title: "Technisches Briefing anfordern.",
    text: "Berichten Sie uns von Ihrer Fahrrinne, Ihrem Terminal, Ihrer Plattform oder Ihrer kritischen Anlage. Unsere technische Leitung meldet sich mit einem Vorschlag für die Zusammenarbeit sowie mit Umfang und Budget des ersten Audits und der Machbarkeitsstudie zurück.",
    fields: {
      name: "Name",
      email: "E-Mail",
      organisation: "Organisation",
      role: "Funktion",
      country: "Land",
      sector: "Sektor",
      sectorPlaceholder: "Sektor auswählen",
      message: "Nachricht",
      submit: "Anfrage senden",
    },
    sectorOptions: [
      "Häfen & Terminals",
      "Offshore Öl & Gas",
      "Subsea-Strukturen",
      "Schiffbau- und Marineindustrie",
      "Sonstiges",
    ],
    required: "Dieses Feld ist erforderlich.",
    sending: "Wird gesendet…",
    successTitle: "Vielen Dank",
    success: "Anfrage erhalten. Unsere Ingenieure antworten innerhalb eines Werktags.",
    error:
      "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an contact@serenitech.global.",
    again: "Weitere Anfrage senden",
    locationsTitle: "Standorte",
    locations: [
      {
        place: "Monaco",
        role: "Hauptsitz der Gruppe & Labor",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Monaco", "Fürstentum Monaco"],
      },
      {
        place: "Florianópolis, Brasilien",
        role: "Hauptsitz Brasilien & Labor — Sapiens Parque, Brasiliens größter Technologiepark",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brasilien"],
      },
      {
        place: "Coral Gables, Florida, USA",
        role: "Geschäftsbetrieb Nordamerika",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "Vereinigte Staaten von Amerika"],
      },
    ],
    emailLabel: "E-Mail",
  },
  footer: {
    descriptor:
      "Serenitech — Unterwasser-Intelligenz. KI-gestützte kognitive Robotik für das Unterwassermanagement.",
    companyCol: "Unternehmen",
    servicesCol: "Leistungen",
    sectorsCol: "Sektoren",
    groupTitle: "Gruppe",
    group: ["Serenitech Global Corporation — Holdinggesellschaft aller Serenitech-Tochtergesellschaften"],
    privacy: "Datenschutz",
    rights: "© 2026 Serenitech Global Corporation. Alle Rechte vorbehalten.",
  },
};
