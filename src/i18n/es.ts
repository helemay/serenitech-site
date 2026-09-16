import { en, type Dict } from "./en";

// Rule (16/09/2026): texts that belong to AI-generated images and to the animated drawings (hero HUD,
// system schematic, live console readouts) stay in the original English in every language.

export const es: Dict = {
  htmlLang: "es",
  brand: {
    alt: "Serenitech — Serenidad más allá de la línea de flotación",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    sectors: "Sectores",
    technology: "Tecnología",
    company: "Empresa",
    contact: "Contacto",
    cta: "Solicitar un briefing técnico",
    menu: "Abrir menú",
    close: "Cerrar menú",
    language: "Idioma",
  },
  meta: {
    home: {
      title: "Serenitech — Robótica Cognitiva con IA para la Gestión Subacuática",
      description:
        "Serenitech es una empresa de robótica cognitiva con IA para la gestión subacuática de infraestructura portuaria crítica, plataformas offshore, estructuras submarinas e industria naval. Percepción, monitorización, mediciones y servicios en la nube más allá de la línea de flotación — bajo una dirección técnica con 27 años de investigación en telecomunicaciones subacuáticas, sensores e IA embebida.",
    },
    services: {
      title: "Servicios Cognitivos — Serenitech",
      description:
        "Seis módulos nativos en la nube — ruido y vibración, identificación de buques, inteligencia de sedimentación, monitorización del calado, integridad estructural, API y gemelo digital 3D — más asesoría y consultoría a medida.",
    },
    sectors: {
      title: "Sectores — Serenitech Inteligencia Subacuática",
      description:
        "Puertos y terminales, petróleo y gas offshore, estructuras submarinas e industria naval, bajo monitorización subacuática continua.",
    },
    technology: {
      title: "Tecnología — Del fondo marino a la API | Serenitech",
      description:
        "Cinco capas de la percepción a las interfaces: enlaces subacuáticos, IA frugal en el borde, motor en la nube, API y un gemelo digital 3D, con seguridad desde el diseño.",
    },
    company: {
      title: "Empresa — Grupo deep-tech Serenitech",
      description:
        "Un grupo global de deep tech dedicado al mundo bajo la superficie, con sedes y laboratorios en Mónaco y Florianópolis.",
    },
    contact: {
      title: "Solicitar un briefing técnico — Serenitech",
      description:
        "Cuéntenos sobre su canal, terminal, plataforma o activo. Nuestros ingenieros responden con una propuesta de colaboración y el alcance y presupuesto de una auditoría y estudio de viabilidad iniciales.",
    },
  },
  home: {
    eyebrow: "ROBÓTICA COGNITIVA CON IA PARA LA GESTIÓN SUBACUÁTICA",
    h1: "Los ojos subacuáticos de su infraestructura.",
    sub: "Serenitech es una empresa de robótica cognitiva con IA para la gestión subacuática de infraestructura crítica — puertos, plataformas offshore, estructuras submarinas e industria naval. Nuestras unidades robóticas cognitivas perciben los fenómenos físicos bajo la superficie — acústica, vibración, movimiento estructural, batimetría e hidrodinámica —, razonan en el borde y actúan, entregando datos operativos en tiempo real como un servicio seguro en la nube. Detrás de ellas: tres décadas de investigación en telecomunicaciones subacuáticas, sensores e IA embebida.",
    ctaPrimary: "Solicitar un briefing técnico",
    ctaSecondary: "Explorar los servicios",
    heroAlt:
      "Vista dividida de un buque portacontenedores atracado en un muelle de hormigón: proa y grúas sobre la línea de flotación; debajo, el casco, los pilotes del muelle, un fondo de canal arenoso con pastos marinos, una tortuga marina, un banco de peces y dos delfines",
    hud: en.home.hud,
    trustSectors: [
      "Puertos y terminales",
      "Petróleo y gas offshore",
      "Estructuras submarinas",
      "Industria naval",
    ],
    trustRegions: ["Mónaco", "Brasil", "EE. UU."],
    problem: {
      eyebrow: "EL PROBLEMA",
      title:
        "La infraestructura crítica depende de lo que ocurre bajo el agua. Casi nada de ella se supervisa de forma continua, en línea.",
      items: [
        {
          title: "La profundidad se decide con datos antiguos.",
          text: "El margen bajo quilla (UKC), la sedimentación y las prioridades de dragado siguen dependiendo de levantamientos periódicos — mientras el canal cambia con cada marea.",
        },
        {
          title: "Los impactos y la fatiga no dejan registro.",
          text: "Las colisiones en el atraque, la vibración y la deriva estructural en estructuras críticas — muelles, duques de alba, patas de jacket — quedan sin medir hasta que llega una reparación, o un litigio.",
        },
        {
          title: "Puntos ciegos en seguridad y cumplimiento.",
          text: "Las embarcaciones sin AIS, los límites de ruido subacuático y los informes ambientales se gestionan sin evidencia continua de lo que ocurre bajo la superficie.",
        },
      ],
    },
    advisory: {
      eyebrow: "ASESORÍA A MEDIDA",
      title:
        "Consultoría diseñada para su infraestructura crítica, no para el puerto promedio.",
      text: "Estudios de aplicabilidad y viabilidad, revisiones de impacto ambiental, evaluaciones de riesgo estructural y operativo, asesoría en arquitectura de IA y deep tech, conectividad subacuática en condiciones exigentes — entregados caso por caso, a nivel internacional, bajo una dirección técnica con 27 años de investigación en telecomunicaciones subacuáticas, sensores e IA embebida.",
      chips: [
        "Aplicabilidad y viabilidad",
        "Revisión de impacto ambiental",
        "Arquitectura de IA y deep tech",
      ],
      cta: "Ver los servicios de asesoría",
    },
    signature: {
      eyebrow: "CADA BUQUE DEJA UNA FIRMA",
      title:
        "Percibida en el fondo del canal. Juzgada frente a la especificación.",
      text: "Nuestras unidades robóticas cognitivas capturan la interferencia acústica, hidrodinámica y estructural de cada buque que transita, la comparan con la especificación del puerto y señalan los que la exceden — incluidos los que dañan a peces y mamíferos marinos.",
      legendOk: "Dentro de la especificación",
      legendFlag: "Fuera de la especificación — señalado",
      alt: "Vista subacuática desde el fondo del canal: cascos de buques arriba con anillos acústicos, uno señalado en ámbar, delfines al fondo",
    },
    solution: {
      eyebrow: "LA SOLUCIÓN",
      title: "Un servicio cognitivo. Cuatro dominios bajo la superficie.",
      text: "Serenitech fusiona arrays hidroacústicos, campos mecánicos estructurales, gradientes hidrodinámicos multidireccionales, ecosondeo acústico y medición de la columna de agua en un único lienzo operativo. Toda la instrumentación queda encapsulada bajo capas funcionales abstractas: usted consume datos, alertas y un gemelo digital — no hardware.",
      domains: [
        { title: "Hidroacústica", text: "presión sonora, espectros, firmas" },
        { title: "Mecánica estructural", text: "vibración, desplazamiento, impactos" },
        {
          title: "Hidrodinámica y batimetría",
          text: "profundidad, sedimento, flujo, calado",
        },
        { title: "Columna de agua", text: "temperatura, salinidad, turbidez, velocidad del sonido" },
      ],
    },
    field: {
      eyebrow: "VISTAS DE CAMPO",
      title: "Lo que ven las unidades cognitivas.",
      text: "Escenas de los dominios que instrumentamos — fondos de canal, muros de muelle, estructuras offshore, activos submarinos y los cascos sobre ellos — con las mediciones, los nodos sensores y los frentes de onda que produce nuestro sistema. Abra cualquier imagen para ver el detalle.",
      open: "Abrir a tamaño completo",
      items: [
        {
          caption: "Muro de muelle y buque portacontenedores atracado — margen bajo quilla (UKC), cargas de atraque y frentes de onda acústicos de la hélice.",
        },
        {
          caption: "Fondo del canal bajo un buque en tránsito — superficie batimétrica, calado dinámico y firma de hélice y timón.",
        },
        {
          caption: "Muro de muelle — deformación estructural, integridad de los pilotes y sedimentación, medidas pilote a pilote.",
        },
        {
          caption: "Tuberías offshore bajo una plataforma — vibración, socavación y mapeo de integridad.",
        },
        {
          caption: "Patas de jacket — deformación, corrosión y detección de aproximación desde nodos sensores en la estructura.",
        },
        {
          caption: "Tubería submarina y manifold — malla de levantamiento, cambios del fondo marino y detección de eventos.",
        },
        {
          caption: "Fondo del canal, desde el punto de vista de las unidades — varios buques verificados, uno señalado fuera de especificación.",
        },
        {
          caption: "Hélice de un megabuque — firma de ruido y cavitación, frentes de onda propagándose hacia popa.",
        },
        {
          caption: "Consola cognitiva — gemelo digital de una dársena de demostración como renderizado de levantamiento: batimetría multihaz y nubes de puntos lidar con buques y unidades, valores numéricos de UKC, sección transversal, espectro acústico y eventos.",
        },
        {
          caption: "Vista del gemelo 3D — atracadero B12 y dársena de maniobra a −15,0/−16,0 m CD: paramento del muelle, buque atracado y unidades cognitivas escaneados en una malla de 0,5 m (trazado sintético).",
        },
      ],
    },
    cognitive: {
      eyebrow: "ROBÓTICA COGNITIVA CON IA",
      title: "Percibir. Razonar. Actuar.",
      steps: [
        {
          title: "Percibir",
          text: "Las unidades robóticas cognitivas — fijas y móviles, subacuáticas y de superficie — perciben de forma continua los campos hidroacústico, estructural e hidrodinámico alrededor de su infraestructura crítica.",
        },
        {
          title: "Razonar",
          text: "Una IA frugal e informada por la física se ejecuta dentro de cada unidad: clasifica firmas, detecta anomalías y adapta su propio muestreo — con o sin enlace activo con la costa.",
        },
        {
          title: "Actuar",
          text: "Las unidades emiten alertas, verifican mutuamente sus lecturas y alimentan el motor cognitivo en la nube que fusiona todas las unidades en una única imagen operativa: API, paneles de control y el gemelo digital 3D.",
        },
      ],
    },
    services: {
      eyebrow: "SERVICIOS",
      title: "Serenitech Cognitive Services",
      link: "Detalles",
      items: [
        {
          title: "Protección Ambiental contra Ruido y Vibración",
          text: "Matriz continua de energía acústica subacuática y mapas de deformación estructural, con alertas de superación de límites por sector del puerto.",
        },
        {
          title: "Identificación Digital Automatizada de Buques",
          text: "Huella acústica e hidrodinámica cruzada con el AIS; alertas instantáneas de buque oscuro (sin AIS).",
        },
        {
          title: "Inteligencia Predictiva de Sedimentación y Asoreamiento",
          text: "Vectores de velocidad de sedimentación y gráficos de desviación volumétrica que priorizan el dragado antes de alcanzar los umbrales.",
        },
        {
          title: "Monitorización Dinámica del Calado en Canal y Atracadero",
          text: "Calado del buque en vivo en proa, sección media y popa, margen bajo quilla (UKC) continuo, análisis de squat (asiento dinámico) y de escora/balance.",
        },
        {
          title: "Monitorización de Integridad Estructural e Impactos de Atraque",
          text: "Unidades robóticas cognitivas autónomas en estructuras críticas — muelles, duques de alba, muros de muelle, patas de jacket y activos submarinos: desplazamiento, espectro de vibración, registros de choques e impactos.",
        },
        {
          title: "Plataforma en la Nube: API, Paneles, Alertas y Gemelo Digital 3D",
          text: "API REST y de streaming, panel de control ejecutivo, motor de alarmas con aplicación de políticas y un gemelo 3D del puerto o del activo en el navegador.",
        },
      ],
    },
    how: {
      eyebrow: "CÓMO TRABAJAMOS",
      title: "Del estudio de viabilidad al servicio continuo.",
      steps: [
        {
          title: "Consultoría de auditoría y viabilidad",
          text: "Un proyecto personalizado para su canal, dársena, atracaderos o activo: diagnóstico estratégico de la operación, oportunidades de mejora, objetivos y KPI, plan de medición y evaluación de viabilidad — la base del proyecto definitivo y de la propuesta de contrato de servicios.",
        },
        {
          title: "Despliegue robótico",
          text: "Unidades robóticas cognitivas, subacuáticas y de superficie, instaladas, operadas y mantenidas por Serenitech; sin capex para el operador.",
        },
        {
          title: "Activación en la nube",
          text: "API, paneles de control, políticas de alerta y el gemelo digital conectados a su VTMIS, SCADA o ERP.",
        },
        {
          title: "Servicio continuo",
          text: "Monitorización 24/7, actualizaciones de modelos, informes ambientales y de integridad — como suscripción en el marco del contrato de servicios.",
        },
      ],
    },
    twin: {
      eyebrow: "GEMELO DIGITAL",
      title: "Un modelo 3D vivo de su puerto — desde el fondo hacia arriba.",
      bullets: [
        "Superficie batimétrica codificada por colores con densidad de sedimentación y zonas someras críticas",
        "Bloques dinámicos de buques con calado, cabeceo, balance y escora en tiempo real",
        "Superposiciones de frentes de onda bajo la superficie que localizan eventos acústicos y estructurales",
        "Todo renderizado en el navegador, alimentado por las mismas API que usan sus sistemas",
      ],
      panelLabel: "Ilustración estilizada",
      legend: [
        "UKC 1,9 m",
        "Sedimentación +3,2 %",
        "Buque oscuro: ninguno",
        "Dársena 3 · en vivo",
      ],
      console: {
        ...en.home.twin.console,
        open: "Abrir la pantalla de la consola a tamaño completo",
        alt: "Consola cognitiva Serenitech: vista 3D con calidad de levantamiento de un canal de acceso y una dársena de maniobra — batimetría multihaz en una rampa de color por profundidad, nubes de puntos lidar del muelle, las grúas y los buques — con valores numéricos, perfil de sección transversal, espectro acústico y registro de eventos",
        caption: "Dársena de demostración sintética — el trazado es ficticio; el canal a −15,0 m CD, 220 m de ancho, taludes 1:3, dársena de maniobra de Ø 600 m, buques de 347 m / 294 m y marea de +0,9 m son cifras de la clase Miami/Santos. Renderizada como un levantamiento multihaz y lidar a partir del mismo modelo de datos que sirve la consola.",
      },
    },
    ai: {
      eyebrow: "STACK DE IA",
      title: "Deep tech, desarrollada internamente.",
      items: [
        "IA frugal en el borde dentro de cada unidad robótica cognitiva — clasificación donde nace la señal.",
        "Modelos informados por la física — la acústica, la hidrodinámica y la mecánica estructural guían el aprendizaje.",
        "Inteligencia en capas — unidad → gateway → nube, resiliente a enlaces intermitentes.",
        "Aprendizaje federado y actualizaciones de modelos over-the-air entre emplazamientos.",
        "Seguridad desde el diseño — enlaces cifrados, mediciones firmadas, acceso basado en roles, registro de auditoría completo.",
        "Linaje de investigación — trabajo doctoral en procesamiento de señales e imágenes y en electrónica de alta frecuencia, publicaciones en IEEE OCEANS y EuCAP sobre sensores subacuáticos de alta tasa de datos, y el programa europeo EdgeAI detrás de nuestro diseño de inteligencia en el borde.",
      ],
    },
    presence: {
      eyebrow: "PRESENCIA GLOBAL",
      title: "Una plataforma, operada localmente, gobernada globalmente.",
      items: [
        { place: "Mónaco", text: "Sede del grupo y laboratorio — Avenue J. F. Kennedy, Port Hercule" },
        {
          place: "Florianópolis, Brasil",
          text: "Sede en Brasil, oficina y laboratorio — Sapiens Parque, el mayor parque tecnológico de Brasil",
        },
        { place: "Coral Gables, Florida, EE. UU.", text: "Operaciones en América del Norte — Valencia Avenue" },
      ],
    },
    finalCta: {
      eyebrow: "CÓMO EMPEZAMOS",
      title: "Todo empieza con un diagnóstico estratégico de su operación.",
      text: "Un proyecto de consultoría estructurado y presupuestado, a la medida de su canal, terminal, plataforma o activo y construido sobre un conocimiento profundo de cómo funciona realmente su operación. Sus conclusiones se convierten en el proyecto definitivo y en la propuesta de contrato de servicios a largo plazo.",
      steps: [
        {
          title: "Diagnóstico estratégico",
          text: "Comprensión en profundidad de la operación actual — rutinas, datos, riesgos y restricciones, tal como ocurren en la realidad.",
        },
        {
          title: "Oportunidades de mejora",
          text: "Dónde la inteligencia continua bajo la superficie cambia el resultado — localizadas, cuantificadas y priorizadas.",
        },
        {
          title: "Objetivos y KPI",
          text: "Las metas y los indicadores que medirán el proyecto definitivo, acordados con su equipo.",
        },
        {
          title: "Proyecto definitivo",
          text: "Plan de desarrollo y despliegue, presupuesto y la propuesta de contrato de servicios.",
        },
      ],
      button: "Solicitar un briefing técnico",
      imageAlt: "Estructura jacket de una plataforma offshore vista bajo la superficie",
    },
  },
  services: {
    eyebrow: "SERVICIOS COGNITIVOS",
    title: "Serenitech Cognitive Services",
    intro:
      "Serenitech Cognitive Services — la capa en la nube de nuestro sistema de robótica cognitiva con IA: una plataforma unificada y nativa en la nube que convierte fenómenos físicos bajo la superficie, captados con alta tecnología, en flujos de datos operativos granulares y en tiempo real. Supervisión continua y en línea de la infraestructura crítica: canal de acceso, dársenas de maniobra, muelles de atraque — y, para los operadores offshore y submarinos, la propia estructura crítica. Cada módulo se diseña bajo una dirección técnica con 27 años de investigación en telecomunicaciones entre medios distintos, redes de sensores subacuáticos, procesamiento de señales e IA en el borde — publicada en el IEEE y protegida por solicitudes de patente. Cuando la situación lo requiere, también ofrecemos asesoría a medida.",
    mandateLabel: "Mandato de arquitectura",
    mandate:
      "Alejándose claramente de un modelo descentralizado y centrado en el hardware, el servicio encapsula toda la instrumentación subyacente bajo capas funcionales abstractas, servidas mediante API seguras de baja latencia a paneles de control, sistemas de alerta en tiempo real y un gemelo digital espacial 3D de alta fidelidad.",
    columns: {
      measure: "Qué medimos",
      get: "Qué recibe usted",
      matters: "Por qué importa",
    },
    moduleLabel: "Módulo",
    modules: [
      {
        title: "Protección Ambiental contra Ruido y Vibración",
        measure:
          "Niveles de presión sonora subacuática continuos por bandas; energía mecánica microsísmica y de baja frecuencia que se propaga por muelles y muros de muelle; perfiles de temperatura y salinidad del agua para calcular los vectores locales de velocidad del sonido.",
        get: "Matriz de Energía Acústica en tiempo real (dB re 1 µPa) actualizada en bandas de 1/3 de octava de 10 Hz a 20 kHz; Mapas de Deformación para la Salud Estructural con amplitudes de vibración, vectores de velocidad y anomalías de aceleración de pico de partícula; alertas inmediatas de superación de límites vinculadas a sectores específicos del puerto.",
        matters:
          "Prueba de cumplimiento de los límites de ruido subacuático, protección de la fauna marina y de las estructuras, evidencia para los informes ambientales.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Identificación Digital Automatizada de Buques",
        measure:
          "Firmas de emisión acústica de banda ancha y banda estrecha en alta resolución; frecuencias de modulación de paso de pala (firma fundamental de la hélice); firmas localizadas de presión hidrodinámica de baja frecuencia y el patrón de estela inducido por el casco en movimiento.",
        get: "Perfil de Huella Acústica Único (frecuencias de encendido del motor, RPM del eje, número de palas, picos armónicos); Perfiles de Presión Hidrodinámica que estiman tamaño del casco, calado y velocidad; Matriz de Verificación Multi-influencia que cruza las huellas en tiempo real con los datos AIS obligatorios; Alertas de Buque Oscuro instantáneas cuando embarcaciones no autorizadas o silenciosas cruzan límites espaciales.",
        matters:
          "Seguridad del canal de acceso y de las zonas restringidas, verificación del tráfico declarado, registro forense de cada movimiento.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Inteligencia Predictiva de Sedimentación y Asoreamiento",
        measure:
          "Retrodispersión acústica multifrecuencia que cartografía el sedimento en suspensión; matrices batimétricas de profundidad de barrido completo en canales y zonas de atraque; velocidades de flujo locales y vectores de esfuerzo cortante de fondo.",
        get: "Vectores de Velocidad de Deposición de Sedimentos que predicen los metros cúbicos de acumulación por coordenada de malla y por unidad de tiempo; gráficos de desviación volumétrica en tiempo real frente a líneas de base históricas; alertas automáticas de dragado crítico que priorizan las zonas que se aproximan a los umbrales reglamentarios de seguridad.",
        matters:
          "Dragado planificado a partir de predicciones y no de levantamientos periódicos — menor costo de dragado, sin asoreamientos inesperados, seguridad documentada.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Monitorización Dinámica del Calado en Canal y Atracadero",
        measure:
          "Matrices de distancia vertical de alta densidad entre el casco y el lecho activo del canal; gradientes de presión hidrostática multipunto a lo largo del casco; elevación dinámica de la marea, densidad del agua y movimiento vertical inducido por las olas.",
        get: "Calado dinámico del buque en tiempo real en proa, popa y sección media; margen bajo quilla (UKC) continuo, con sus márgenes de seguridad, mientras el buque transita; análisis del efecto squat (asiento dinámico) y de escora/balance; predicciones espaciales de riesgo de varada que cartografían los puntos críticos de bajo margen.",
        matters:
          "Tránsitos más seguros, ventanas de calado más ajustadas, más carga por escala — con la evidencia que respalda cada decisión.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Monitorización de Integridad Estructural e Impactos de Atraque",
        measure:
          "Unidades robóticas cognitivas autónomas fijadas a pilotes, duques de alba, defensas, muros de muelle, estructuras de amarre, patas de jacket, risers y activos submarinos — aceleración triaxial, movimiento angular y desplazamiento, detección de choques e impactos, espectro completo de vibración y análisis modal; datos transportados por enlaces inalámbricos subacuáticos hasta gateways de superficie (celular, satélite o radio de largo alcance y bajo consumo) con autonomía de varios años.",
        get: "Tendencias de desplazamiento y deriva, firmas de fatiga y modales, registros de impacto con marca de tiempo que identifican al buque responsable en colisiones durante el atraque, alertas de anomalía por umbral, integración directa con SCADA.",
        matters:
          "Evidencia para responsabilidad civil y seguros, menos reparaciones no planificadas, gestión de la integridad de estructuras críticas que ningún buzo inspecciona a diario.",
        bullets: [] as { label: string; text: string }[],
      },
      {
        title: "Plataforma en la Nube: API, Paneles, Alertas y Gemelo Digital",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "API",
            text: "Endpoints REST orientados al desarrollador para consultas estructurales y flujos WebSocket para aplicaciones en tiempo real; integración inmediata con VTMIS, SCADA, ERP y PMS.",
          },
          {
            label: "Panel de Control Ejecutivo",
            text: "Vista multiinquilino de la salud del puerto — índices de ruido ambiente, atracaderos dentro del UKC seguro, prioridades de dragado, registros de movimientos de buques.",
          },
          {
            label: "Motor de Alarmas Inteligentes y Aplicación de Políticas",
            text: "Reglas de baja latencia que envían alertas visuales, por SMS y por webhook — infracciones ambientales, eventos de seguridad, peligros operativos.",
          },
          {
            label: "Gemelo Digital Espacial 3D",
            text: "Modelo interactivo en el navegador con renderizados volumétricos del lecho, bloques dinámicos de buques y superposiciones de frentes de onda bajo la superficie.",
          },
        ],
      },
      {
        title: "Asesoría y Consultoría — diseñadas caso por caso",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "Estudios de aplicabilidad y viabilidad",
            text: "¿Puede su canal, terminal, plataforma o activo submarino percibirse de forma continua, y para qué? Cartografiamos los fenómenos que importan, las unidades y posiciones necesarias, la calidad de datos esperada y el caso de negocio — antes de cualquier despliegue.",
          },
          {
            label: "Revisión de impacto ambiental",
            text: "Evaluaciones de ruido y vibración subacuáticos para dragado, hinca de pilotes, construcción y tráfico; campañas de línea de base, planes de monitorización y la evidencia continua que exigen los reguladores y los organismos de licenciamiento.",
          },
          {
            label: "Evaluación de riesgos estructurales y operativos",
            text: "Estudios de impacto de atraque y amarre, políticas de calado dinámico y margen bajo quilla (UKC), estrategia de sedimentación y dragado, planes de integridad para muelles, duques de alba, jackets, risers y tuberías.",
          },
          {
            label: "Asesoría en arquitectura de IA y deep tech",
            text: "Revisión y diseño independientes de arquitecturas de percepción, IA en el borde, nube y gemelo digital; estrategia de datos, integración con VTMIS, SCADA y ERP, ciberseguridad y gobernanza de datos.",
          },
          {
            label: "Conectividad subacuática en condiciones exigentes",
            text: "Diseño de enlaces acústicos y ópticos, autonomía y supervivencia de las unidades en condiciones de alta carga de sedimentos, tráfico intenso y aguas profundas, ingeniería de despliegue y mantenimiento.",
          },
          {
            label: "Especificación, adquisiciones y owner's engineer",
            text: "Especificaciones técnicas, evaluación de proveedores, pruebas de aceptación y supervisión independiente de programas de monitorización, conforme a normas internacionales.",
          },
        ],
      },
    ],
    apiLabel: "Ejemplo de API",
    advisoryIntro:
      "Cada puerto, plataforma y estructura crítica es diferente. Nuestra asesoría la diseña caso por caso el equipo que construye las unidades robóticas cognitivas, la IA y los enlaces subacuáticos, bajo la dirección del Dr. Thierry Deschamps de Paillette — agrégé, doctor en electrónica de alta frecuencia, fotónica y sistemas, 27 años de investigación en telecomunicaciones entre medios distintos, redes de sensores subacuáticos e IA en el borde, autor y revisor en el IEEE. Experiencia de nivel internacional en IA, deep tech y conectividad subacuática en condiciones exigentes, aplicada a su situación.",
    headerAlt:
      "Vista subacuática de un muro de muelle con unidades robóticas cognitivas y lecturas 3D",
    commercial: {
      eyebrow: "MODELO COMERCIAL",
      title: "Monitoring-as-a-Service",
      text: "Suscripción Monitoring-as-a-Service — unidades robóticas cognitivas instaladas, mantenidas y propiedad de Serenitech; precios a libro abierto en condiciones del mercado local; estudios de ingeniería y desarrollo tecnológico disponibles como consultoría.",
    },
  },
  sectors: {
    eyebrow: "SECTORES",
    title: "Cuatro sectores, una plataforma bajo la superficie.",
    outcomeLabel: "Resultado",
    headerAlt:
      "Estructura jacket de una plataforma offshore con unidades robóticas cognitivas bajo el agua",
    items: [
      {
        title: "Puertos y Terminales",
        text: "Canal de acceso, dársenas de maniobra y atracaderos — la infraestructura crítica del puerto — bajo supervisión subacuática continua y en línea: calado dinámico y UKC, sedimentación predictiva, cumplimiento de ruido ambiental, verificación de buques y registros de impactos de atraque. Se integra con el VTMIS y los ERP portuarios.",
        outcome:
          "Tránsitos más seguros, dragado optimizado, cumplimiento documentado, menos litigios.",
        alt: "Muro de muelle y buque atracado vistos desde bajo el agua",
      },
      {
        title: "Petróleo y Gas Offshore",
        text: "Estructuras críticas — patas de jacket, risers, sistemas de amarre y equipos submarinos — supervisadas en línea en cuanto a movimiento, vibración, impacto y socavación; detección de aproximación de embarcaciones no identificadas alrededor de la plataforma; monitorización del ruido subacuático durante la perforación y la construcción.",
        outcome:
          "Gestión de la integridad con evidencia continua, perímetro de seguridad más allá de la superficie, cumplimiento ambiental.",
        alt: "Patas de jacket de una plataforma offshore bajo el agua con unidades robóticas de percepción acústica",
      },
      {
        title: "Estructuras Submarinas",
        text: "Infraestructura submarina crítica — tuberías, manifolds, cables, emisarios y cimentaciones de eólica marina: movimiento y vibración estructural, cambios del fondo marino y dinámica de sedimentos alrededor del activo, detección de eventos y deriva a largo plazo — desde unidades robóticas cognitivas que no necesitan la visita de un buzo durante años.",
        outcome:
          "Menos campañas de inspección, avisos más tempranos, un gemelo digital del activo en el fondo marino.",
        alt: "Tubería submarina y manifold en el fondo marino con superposición de malla de levantamiento",
      },
      {
        title: "Industria Naval",
        text: "Astilleros, flotas e ingeniería naval: medición del ruido radiado subacuático y de la firma acústica de cascos y hélices, deriva de la firma como indicador de condición, monitorización de dársenas y diques secos, instrumentación estructural de cascos y estructuras de atraque — con base en dos décadas de investigación en procesamiento de señales y telemetría subacuática.",
        outcome:
          "Rendimiento acústico medible y datos continuos para el diseño, el mantenimiento y el soporte a la certificación.",
        alt: "Hélice de un buque portacontenedores de gran tamaño con anillos acústicos y wireframe 3D",
      },
    ],
  },
  technology: {
    eyebrow: "TECNOLOGÍA",
    title: "Del fondo marino a la API.",
    headerAlt: "Superficie batimétrica 3D sobre el fondo de un canal portuario",
    headerLine:
      "Serenitech es un sistema de robótica cognitiva con IA: unidades que perciben, razonan y actúan, orquestadas por un motor cognitivo en la nube. Su arquitectura desciende de dos décadas de investigación en telecomunicaciones y redes de sensores subacuáticos y de los programas europeos de IA AI4DI y EdgeAI.",
    layersTitle: "Cinco capas",
    // Drawing texts stay English (rule above); only the accessible description is localised.
    schematic: {
      ...en.technology.schematic,
      alt: "Sección vertical animada de un atraque: sensores en el lecho y en los pilotes, unidades robóticas cognitivas y una unidad de levantamiento, pasarela de muelle con inteligencia en el borde, motor cognitivo en la nube e interfaces del operador, con paquetes de datos recorriendo los enlaces",
    },
    layers: [
      {
        title: "Interfaces",
        text: "API REST y WebSocket, paneles ejecutivos, motor de alarmas y políticas, gemelo digital 3D.",
      },
      {
        title: "Motor en la nube",
        text: "Ingesta optimizada para series temporales masivas y datos espaciales; procesamiento totalmente desacoplado del hardware del puerto; multiinquilino, escalable, seguro.",
      },
      {
        title: "Inteligencia en el borde",
        text: "Cada unidad razona localmente: modelos de IA frugales clasifican los eventos donde ocurren, reduciendo ancho de banda y latencia.",
      },
      {
        title: "Capa de conectividad",
        text: "Enlaces inalámbricos subacuáticos (acústicos y ópticos) hasta gateways de superficie; backhaul celular, satelital y por radio de largo alcance y bajo consumo; resiliencia por almacenamiento y reenvío (store-and-forward).",
      },
      {
        title: "Capa robótica de percepción",
        text: "Unidades robóticas cognitivas que portan arrays hidroacústicos, sensores inerciales y de vibración, matrices de presión y distancia, ecosondeo y sondas de columna de agua (temperatura, salinidad, turbidez), fijadas en estructuras o desplegadas en el canal.",
      },
    ],
    security: {
      eyebrow: "SEGURIDAD Y GOBERNANZA DE DATOS",
      title: "Seguridad y gobernanza de datos",
      items: [
        "Enlaces cifrados de extremo a extremo",
        "Mediciones firmadas con registro de auditoría inmutable",
        "Acceso basado en roles por inquilino y sector",
        "Opciones de residencia de datos por país",
        "Integración detrás del firewall del operador bajo demanda",
      ],
    },
    research: {
      eyebrow: "ADN DE INVESTIGACIÓN",
      title: "ADN de investigación",
      text: "Electrónica de alta frecuencia, fotónica, telecomunicaciones subacuáticas, procesamiento de señales e IA — una cultura de laboratorio en Mónaco y Florianópolis dedicada al entorno bajo la superficie, arraigada en 27 años de investigación: trabajo doctoral en el laboratorio L3i (La Rochelle) y en Orléans, publicaciones en IEEE OCEANS y EuCAP sobre sensores y antenas subacuáticos de alta tasa de datos, revisión para el IEEE Journal of Oceanic Engineering, dos solicitudes de patente sobre comunicación subacuática dirigida por IA y los programas europeos de IA AI4DI y EdgeAI.",
    },
  },
  company: {
    eyebrow: "EMPRESA",
    title: "Un grupo global de deep tech dedicado al mundo bajo la superficie.",
    about:
      "Gran parte de la infraestructura crítica del mundo se encuentra parcialmente bajo el agua, y se supervisa casi a ciegas. Serenitech construye la robótica cognitiva con IA — percepción, conectividad, inteligencia artificial y servicios en la nube — sobre tres décadas de investigación en telecomunicaciones subacuáticas, sensores e IA embebida, dando a autoridades portuarias, operadores offshore, propietarios de activos submarinos y a la industria naval visión, memoria y previsión continuas más allá de la línea de flotación. El nombre lo dice: serenidad a través de la tecnología.",
    technicalEyebrow: "DIRECCIÓN TÉCNICA Y CIENTÍFICA",
    technicalTitle: "Tres décadas de investigación en sensores subacuáticos, telecomunicaciones e IA embebida — al frente de nuestra ingeniería.",
    technicalIntro: "Serenitech es una empresa de servicios técnicos especializados. Su tecnología, sus laboratorios y su arquitectura de producto están dirigidos por el Dr. Thierry Deschamps de Paillette — agrégé en ingeniería eléctrica y electrónica, doctor en electrónica de alta frecuencia, fotónica y sistemas, con investigación doctoral en procesamiento de señales e imágenes, y 27 años de investigación avanzada aplicada a sistemas de telecomunicación entre medios distintos, redes de sensores subacuáticos, procesamiento de señales e IA en el borde. Productos industriales, publicaciones en el IEEE, solicitudes de patente y los programas europeos de IA AI4DI y EdgeAI forman la base técnica de cada servicio de esta página.",
    proofPoints: [
      { value: "27 años", label: "de investigación avanzada — electrónica de alta frecuencia, fotónica, sistemas e IA" },
      { value: "Agrégé · Ph.D.", label: "el concurso nacional más selectivo de Francia en la disciplina; doctorado con félicitations du jury" },
      { value: "IEEE", label: "publicaciones en OCEANS y EuCAP; revisor del IEEE Journal of Oceanic Engineering" },
      { value: "2 solicitudes de patente", label: "selección por IA del modo de comunicación subacuática (EP · PCT), inventor único" },
      { value: "AI4DI · EdgeAI", label: "programas europeos de IA liderados junto a grandes grupos industriales y startups" },
      { value: "20 años", label: "de diseño de productos industriales — Crouzet, Micrelec, TECHNEXT" },
    ],
    photoCaptionShort: "Sapiens Parque, Florianópolis — sede y laboratorio en Brasil, en el mayor parque tecnológico del país.",
    showMore: "Ver más",
    showLess: "Ver menos",
    linkedin: "LinkedIn →",
    openLabel: "Abrir",
    lead: {
      name: "Dr. Thierry Deschamps de Paillette",
      role: "Chief Technology Officer · Dirección técnica y científica",
      bio: "El Dr. Thierry Deschamps de Paillette es agrégé en ingeniería eléctrica y electrónica — el concurso nacional más selectivo de Francia en la disciplina — y doctor por la Université de La Rochelle con félicitations du jury, la más alta distinción. Aporta una trayectoria de 27 años de investigación avanzada en electrónica de alta frecuencia, fotónica y sistemas, aplicada a la IA, la cibernética y los sistemas de telecomunicación entre medios distintos, en cooperación con grandes grupos industriales. Su trabajo reciente de investigación e ingeniería abarca una nueva generación de redes subacuáticas de telecomunicación y sensores. Ha diseñado productos industriales durante dos décadas — Crouzet, Micrelec, TECHNEXT — y es el inventor designado en las solicitudes de patente para la selección por IA del modo de comunicación subacuática. Profesor de cátedra superior dentro del sistema académico nacional francés, formó parte de los tribunales nacionales que seleccionan a los agrégés en ciencias de la ingeniería. Publica en el IEEE y es revisor del IEEE Journal of Oceanic Engineering, y, como asesor, conferenciante y experto en IA en clústeres como el Institut EuropIA y el Cluster-IA, lideró los programas europeos de IA AI4DI y EdgeAI junto a grandes grupos industriales y startups. En Serenitech dirige la tecnología, los laboratorios y la arquitectura de producto — las unidades robóticas cognitivas, la pila de comunicación subacuática y las capas de percepción por IA e inteligencia en el borde.",
      link: "https://www.linkedin.com/in/thierry-deschamps-de-paillette-b1669821/",
      panels: [
        {
          title: "Credenciales",
          items: [
            {
              title: "Revisor, IEEE Journal of Oceanic Engineering",
            },
            {
              title: "Experto, IA y Océanos — Institut EuropIA",
              link: "https://instituteuropia.eu/experts",
            },
            {
              title: "Vicepresidente — Cluster-IA",
            },
            {
              title: "AI4DI — Artificial Intelligence for Digitizing Industry · H2020 / ECSEL JU, acuerdo de subvención 826060",
              link: "https://ai4di.eu/",
            },
            {
              title: "EdgeAI — Edge AI Technologies for Optimised Performance Embedded Processing · Horizon Europe / KDT JU, acuerdo de subvención 101097300",
              link: "https://cordis.europa.eu/project/id/101097300",
            },
            {
              title: "Miembro del jurado de los tribunales nacionales franceses de Agrégation para la selección de profesores agrégés en ciencias de la ingeniería",
              link: "https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/concours-examens/833/833-rapport-jury-agreg-ext-ssi-et-ingenierie-electrique.pdf",
            },
            {
              title: "Diseño de productos industriales para Crouzet, Micrelec y TECHNEXT",
            },
            {
              title: "Sistema de medición de energía y agua EWTS HYD — material didáctico del currículo nacional francés de ingeniería",
              link: "https://sti.eduscol.education.fr/ressources_techniques/ewts-hyd-systeme-de-comptage-energetique",
            },
            {
              title: "Diseñador de los módems subacuáticos FSK de 400 kHz y magnetoinductivo de banda ancha — hardware, firmware y puesta en servicio",
            },
            {
              title: "Depósito de anterioridad INPI Soleau DSO2019007239 (2019) — enlace subacuático magnetoinductivo de banda ancha con modulación OFDM",
            },
            {
              title: "Arquitecturas de inteligencia del borde a la nube e IA para entornos severos",
            },
          ],
        },
        {
          title: "Formación",
          items: [
            {
              year: "2015 — 2020",
              title: "Université de La Rochelle — laboratorio L3i",
              venue: "Doctorado (Ph.D.) en Electrónica de Alta Frecuencia, Fotónica y Sistemas · con félicitations du jury · La Rochelle, Francia · defendido el 22 de octubre de 2020 · director Prof. Alain Gaugue",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2011 — 2012",
              title: "Approved Training Organisation (ATO)",
              venue: "Licencia de piloto privado PPL-A, monomotor — glass cockpit y FADEC · Francia",
            },
            {
              year: "2007 — 2008",
              title: "Université d'Orléans",
              venue: "Doctorado de investigación, procesamiento de señales e imágenes · seguimiento de objetivos en secuencias de video en condiciones severas · Orléans, Francia",
            },
            {
              year: "1998",
              title: "Ministère de l'Éducation nationale",
              venue: "Agrégation externe — ingeniería eléctrica, electrónica e informática industrial · admitido · Francia",
            },
            {
              year: "1996 — 1997",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "DEA, máster de investigación en electrónica y sistemas — visión para sistemas robóticos · Clermont-Ferrand, Francia",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Máster, ingeniería eléctrica — microelectrónica · Clermont-Ferrand, Francia",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Licence, ingeniería eléctrica (EEA) — electrónica, sistemas electromecánicos, teoría de control · Clermont-Ferrand, Francia",
            },
            {
              year: "1993 — 1994",
              title: "Institut Universitaire de Technologie, Université Blaise Pascal",
              venue: "DUT, ingeniería eléctrica — control e informática industrial, sistemas C3/C4I · Clermont-Ferrand, Francia",
            },
            {
              year: "1990 — 1992",
              title: "Lycée Godefroy de Bouillon",
              venue: "Baccalauréat F3, electromecánica · Francia",
            },
          ],
        },
        {
          title: "Experiencia",
          items: [
            {
              year: "2013 — 2026",
              title: "Ministère de l'Éducation nationale",
              venue: "Profesor de ingeniería eléctrica e informática, cátedra superior (professeur de chaire supérieure) · Francia",
            },
            {
              year: "2007 — 2026",
              title: "TECHNEXT",
              venue: "Asesor científico · Cannes, Francia",
            },
            {
              year: "2015 — 2020",
              title: "Laboratorio L3i, Université de La Rochelle",
              venue: "Investigador — telecomunicaciones subacuáticas y redes de telemetría submarina · La Rochelle, Francia",
            },
            {
              year: "2011 — 2015",
              title: "Concours national d'Agrégation",
              venue: "Miembro del jurado, tribunal externo de selección de profesores agrégés en ciencias de la ingeniería · Francia",
            },
            {
              year: "2011 — 2014",
              title: "TECHNEXT",
              venue: "Autor — sistemas embebidos, planificación de tareas y diseño de algoritmos complejos · Cannes, Francia",
            },
            {
              year: "2005 — 2009",
              title: "Concours national d'Agrégation",
              venue: "Miembro del jurado, tribunal interno de selección de profesores agrégés en ciencias de la ingeniería · Francia",
            },
            {
              year: "1998 — 2011",
              title: "Ministère de l'Éducation nationale",
              venue: "Profesor de ingeniería eléctrica — Mathématiques spéciales · Francia",
            },
          ],
        },
        {
          title: "Patentes",
          items: [
            {
              year: "EP4645718A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Solicitud de patente europea · inventor único · presentada el 29 de abril de 2024, publicada el 5 de noviembre de 2025",
              link: "https://patents.google.com/patent/EP4645718A1/en",
            },
            {
              year: "WO2025228988A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Solicitud internacional PCT PCT/EP2025/061717 · inventor único · publicada el 6 de noviembre de 2025",
              link: "https://patents.google.com/patent/WO2025228988A1/en",
            },
          ],
          footnote: "Dos solicitudes de patente publicadas que cubren una única invención, inventor único. La invención selecciona entre comunicación subacuática acústica, electromagnética y óptica mediante una red neuronal alimentada por lecturas de sensores, características del canal y realimentación de la red. IPC H04B 11/00 y H04B 13/02.",
        },
        {
          title: "Académico",
          items: [
            {
              year: "2024",
              title: "Enhancing Communication in Multi-Domain Ad-Hoc Networks for Maritime Critical Infrastructure Protection",
              venue: "OCEANS 2024 Halifax, IEEE · con K. Brandl, J. Weid y A. Hahn",
              link: "https://doi.org/10.1109/OCEANS55160.2024.10754334",
            },
            {
              year: "2020",
              title: "Antenna Adaptation Circuits for High Data Rate Magneto-Inductive Underwater Communications",
              venue: "14th European Conference on Antennas and Propagation (EuCAP), Copenhague, IEEE, pp. 1–5 · con A. Gaugue",
              link: "https://doi.org/10.23919/EuCAP48036.2020.9135359",
            },
            {
              year: "2020",
              title: "Transmissions numériques sans-fil pour la surveillance environnementale en milieu sous-marin",
              venue: "Tesis doctoral, Université de La Rochelle · HAL tel-03349746",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2019",
              title: "High Data Rate Wireless Underwater Sensors for Environmental Monitoring",
              venue: "MTS/IEEE OCEANS 2019, Marsella, pp. 1–10 · con A. Gaugue",
              link: "https://doi.org/10.1109/OCEANSE.2019.8867364",
            },
            {
              year: "2017",
              title: "Antenna design for underwater wireless telemetry systems",
              venue: "11th European Conference on Antennas and Propagation (EuCAP), París, IEEE, pp. 2251–2255 · con A. Gaugue, E. Parlier y S. Dardenne",
              link: "https://doi.org/10.23919/EuCAP.2017.7928513",
            },
            {
              year: "2017",
              title: "Télémétrie sous-marine à ondes électromagnétiques",
              venue: "XXèmes Journées Nationales Micro-ondes, Saint-Malo · con A. Gaugue",
            },
          ],
          footnote: "Áreas de investigación: comunicación subacuática electromagnética y magnetoinductiva, diseño de antenas y adaptación de impedancias, OFDM para enlaces subacuáticos, redes ad hoc multidominio e IA para entornos severos.",
        },
      ],
    },
    presenceTitle: "Presencia global",
    presence: [
      {
        place: "Mónaco",
        text: "Sede del grupo y laboratorio; desarrollo tecnológico e ingeniería.",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Mónaco", "Principado de Mónaco"],
      },
      {
        place: "Florianópolis, Brasil",
        text: "Sede en Brasil con oficina y laboratorio en Sapiens Parque, el mayor parque tecnológico de Brasil; operaciones para clientes portuarios, offshore y navales en Brasil.",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brasil"],
      },
      {
        place: "Coral Gables, Florida, EE. UU.",
        text: "Operaciones en América del Norte.",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "Estados Unidos de América"],
      },
      {
        place: "Serenitech Global Corporation",
        text: "Sociedad holding del grupo y de todas sus filiales.",
        address: [] as string[],
      },
    ],
    photoCaption:
      "Sede en Brasil — oficina y laboratorio en Sapiens Parque, Florianópolis (SC), el mayor parque tecnológico de Brasil.",
    photoAlt:
      "Vista aérea del edificio de oficinas acristalado de la sede en Brasil en Sapiens Parque, Florianópolis, junto a un lago",
  },
  contact: {
    eyebrow: "CONTACTO",
    title: "Solicite un briefing técnico.",
    text: "Cuéntenos sobre su canal, terminal, plataforma o activo crítico. Nuestra dirección técnica le responderá con una propuesta de colaboración y el alcance y presupuesto de la auditoría y estudio de viabilidad iniciales.",
    fields: {
      name: "Nombre",
      email: "Correo electrónico",
      organisation: "Organización",
      role: "Cargo",
      country: "País",
      sector: "Sector",
      sectorPlaceholder: "Seleccione un sector",
      message: "Mensaje",
      submit: "Enviar solicitud",
    },
    sectorOptions: [
      "Puertos y Terminales",
      "Petróleo y Gas Offshore",
      "Estructuras Submarinas",
      "Industria Naval",
      "Otro",
    ],
    required: "Este campo es obligatorio.",
    sending: "Enviando…",
    successTitle: "Gracias",
    success: "Solicitud recibida. Nuestros ingenieros le responderán en el plazo de un día hábil.",
    error:
      "No hemos podido enviar su solicitud. Inténtelo de nuevo o escriba a contact@serenitech.global.",
    again: "Enviar otra solicitud",
    locationsTitle: "Ubicaciones",
    locations: [
      {
        place: "Mónaco",
        role: "Sede del grupo y laboratorio",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Mónaco", "Principado de Mónaco"],
      },
      {
        place: "Florianópolis, Brasil",
        role: "Sede en Brasil y laboratorio — Sapiens Parque, el mayor parque tecnológico de Brasil",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brasil"],
      },
      {
        place: "Coral Gables, Florida, EE. UU.",
        role: "Operaciones en América del Norte",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "Estados Unidos de América"],
      },
    ],
    emailLabel: "Correo electrónico",
  },
  footer: {
    descriptor:
      "Serenitech — Inteligencia Subacuática. Robótica cognitiva con IA para la gestión subacuática.",
    companyCol: "Empresa",
    servicesCol: "Servicios",
    sectorsCol: "Sectores",
    groupTitle: "Grupo",
    group: ["Serenitech Global Corporation — sociedad holding de todas las filiales Serenitech"],
    privacy: "Privacidad",
    rights: "© 2026 Serenitech Global Corporation. Todos los derechos reservados.",
  },
};
