import { en, type Dict } from "./en";

// Rule (16/09/2026): texts that belong to AI-generated images and to the animated drawings (hero HUD,
// system schematic, live console readouts) stay in the original English in every language.

export const pt: Dict = {
  htmlLang: "pt-BR",
  brand: {
    alt: "Serenitech — Serenidade além da linha d'água",
  },
  nav: {
    home: "Início",
    services: "Serviços",
    sectors: "Setores",
    technology: "Tecnologia",
    company: "Empresa",
    contact: "Contato",
    cta: "Solicitar briefing técnico",
    menu: "Abrir menu",
    close: "Fechar menu",
    language: "Idioma",
  },
  meta: {
    home: {
      title: "Serenitech — Robótica Cognitiva com IA para a Gestão Embaixo d'Água",
      description:
        "A Serenitech é uma empresa de robótica cognitiva com IA para a gestão embaixo d'água de infraestrutura portuária crítica, plataformas offshore, estruturas submarinas e indústria naval. Sensoriamento, monitoramento, medições e serviços em nuvem além da linha d'água — sob uma direção técnica com 27 anos de pesquisa em telecomunicações subaquáticas, sensores e IA embarcada.",
    },
    services: {
      title: "Serviços Cognitivos — Serenitech",
      description:
        "Seis módulos nativos em nuvem — ruído e vibração, identificação de embarcações, assoreamento preditivo, calado dinâmico, integridade estrutural, APIs e gêmeo digital 3D — mais consultoria e assessoria sob medida.",
    },
    sectors: {
      title: "Setores — Serenitech Inteligência Subaquática",
      description:
        "Portos e terminais, offshore óleo e gás, estruturas submarinas e indústria naval sob monitoramento subaquático contínuo.",
    },
    technology: {
      title: "Tecnologia — Do fundo do mar à API | Serenitech",
      description:
        "Cinco camadas do sensoriamento às interfaces: links subaquáticos, IA frugal de borda, motor em nuvem, APIs e gêmeo digital 3D, com segurança por projeto.",
    },
    company: {
      title: "Empresa — Grupo de deep tech Serenitech",
      description:
        "Um grupo global de deep tech dedicado ao mundo subaquático, com sedes e laboratórios em Mônaco e Florianópolis.",
    },
    contact: {
      title: "Solicitar briefing técnico — Serenitech",
      description:
        "Conte-nos sobre seu canal, terminal, plataforma ou ativo. Nossos engenheiros retornam com uma proposta de início de negócio e o escopo e orçamento do estudo inicial de auditoria e viabilidade.",
    },
  },
  home: {
    eyebrow: "ROBÓTICA COGNITIVA COM IA PARA A GESTÃO EMBAIXO D'ÁGUA",
    h1: "Os olhos subaquáticos da sua infraestrutura.",
    sub: "A Serenitech é uma empresa de robótica cognitiva com IA para a gestão \"embaixo d'água\" de infraestrutura crítica — portos, plataformas offshore, estruturas submarinas e indústria naval. Nossas unidades robóticas cognitivas percebem os fenômenos físicos subaquáticos — acústica, vibração, movimento estrutural, batimetria e hidrodinâmica —, raciocinam na borda e agem, entregando dados operacionais em tempo real como um serviço seguro em nuvem. Por trás delas, três décadas de pesquisa em telecomunicações subaquáticas, sensores e IA embarcada.",
    ctaPrimary: "Solicitar briefing técnico",
    ctaSecondary: "Conhecer os serviços",
    heroAlt:
      "Vista dividida de um porta-contêineres atracado em um cais de concreto: proa e guindastes acima da linha d'água; abaixo, o casco, as estacas do cais, o fundo arenoso do canal com algas, uma tartaruga marinha, um cardume e dois golfinhos",
    hud: en.home.hud,
    trustSectors: [
      "Portos e terminais",
      "Offshore óleo e gás",
      "Estruturas submarinas",
      "Indústria naval",
    ],
    trustRegions: ["Mônaco", "Brasil", "EUA"],
    problem: {
      eyebrow: "O PROBLEMA",
      title:
        "A infraestrutura crítica depende do que acontece embaixo d'água. Quase nada disso é supervisionado continuamente, online.",
      items: [
        {
          title: "A profundidade é decidida com dados antigos.",
          text: "Folga sob a quilha, assoreamento e prioridades de dragagem ainda dependem de levantamentos periódicos — enquanto o canal muda a cada maré.",
        },
        {
          title: "Impactos e fadiga não deixam registro.",
          text: "Colisões de atracação, vibração e deriva estrutural em estruturas críticas — píeres, dolfins, pernas de jaquetas — passam sem medição até o reparo, ou a disputa.",
        },
        {
          title: "Pontos cegos em segurança e conformidade.",
          text: "Embarcações sem AIS, limites de ruído subaquático e relatórios ambientais são geridos sem evidência contínua do que ocorre sob a superfície.",
        },
      ],
    },
    advisory: {
      eyebrow: "CONSULTORIA SOB MEDIDA",
      title:
        "Consultoria projetada para a sua infraestrutura crítica, não para o porto médio.",
      text: "Estudos de aplicabilidade e viabilidade, revisão de impactos ambientais, avaliação de riscos estruturais e operacionais, assessoria em arquitetura de IA e deep tech, conectividade subaquática em condições exigentes — entregues caso a caso, em nível internacional, sob uma direção técnica com 27 anos de pesquisa em telecomunicações subaquáticas, sensores e IA embarcada.",
      chips: [
        "Aplicabilidade e viabilidade",
        "Revisão de impactos ambientais",
        "Arquitetura de IA e deep tech",
      ],
      cta: "Ver os serviços de consultoria",
    },
    signature: {
      eyebrow: "CADA EMBARCAÇÃO DEIXA UMA ASSINATURA",
      title: "Percebida no fundo do canal. Julgada contra a especificação.",
      text: "Nossas unidades robóticas cognitivas capturam a interferência acústica, hidrodinâmica e estrutural de cada embarcação que trafega, comparam com a especificação do porto e sinalizam as que a excedem — inclusive as que prejudicam peixes e mamíferos marinhos.",
      legendOk: "Dentro da especificação",
      legendFlag: "Fora da especificação — sinalizada",
      alt: "Vista subaquática do fundo do canal: cascos acima com anéis acústicos, um sinalizado em âmbar, golfinhos além",
    },
    solution: {
      eyebrow: "A SOLUÇÃO",
      title: "Um serviço cognitivo. Quatro domínios subaquáticos.",
      text: "A Serenitech funde arranjos hidroacústicos, campos mecânicos estruturais, gradientes hidrodinâmicos multidirecionais, ecobatimetria e sensoriamento da coluna d'água em um único painel operacional. Toda a instrumentação fica encapsulada em camadas funcionais abstratas: você consome dados, alertas e um gêmeo digital — não hardware.",
      domains: [
        { title: "Hidroacústica", text: "pressão sonora, espectros, assinaturas" },
        {
          title: "Mecânica estrutural",
          text: "vibração, deslocamento, impactos",
        },
        {
          title: "Hidrodinâmica e batimetria",
          text: "profundidade, sedimento, fluxo, calado",
        },
        { title: "Coluna d'água", text: "temperatura, salinidade, turbidez, velocidade do som" },
      ],
    },
    field: {
      eyebrow: "VISÕES DE CAMPO",
      title: "O que as unidades cognitivas veem.",
      text: "Cenas dos domínios que instrumentamos — fundos de canal, muros de cais, estruturas offshore, ativos submarinos e os cascos acima deles — com as medições, os nós sensores e as frentes de onda que o nosso sistema produz. Abra qualquer imagem para ver o detalhe.",
      open: "Abrir em tamanho real",
      items: [
        {
          caption: "Muro de cais e porta-contêineres atracado — folga sob a quilha, cargas de atracação e frentes de onda acústicas do hélice.",
        },
        {
          caption: "Fundo do canal sob um navio em trânsito — superfície batimétrica, calado dinâmico e assinatura de hélice e leme.",
        },
        {
          caption: "Muro de cais — deformação estrutural, integridade das estacas e assoreamento, medidos estaca a estaca.",
        },
        {
          caption: "Dutos offshore sob uma plataforma — vibração, erosão e mapeamento de integridade.",
        },
        {
          caption: "Pernas de jaqueta — deformação, corrosão e detecção de aproximação a partir de nós sensores na estrutura.",
        },
        {
          caption: "Duto submarino e manifold — grade de levantamento, mudanças do fundo e detecção de eventos.",
        },
        {
          caption: "Fundo do canal, do ponto de vista das unidades — várias embarcações verificadas, uma sinalizada fora de especificação.",
        },
        {
          caption: "Hélice de mega navio — assinatura de ruído e cavitação, frentes de onda propagando-se para ré.",
        },
        {
          caption: "Console cognitivo — gêmeo digital de uma bacia de demonstração como levantamento: batimetria multifeixe e nuvens de pontos lidar com navios e unidades, numéricos de UKC, perfil transversal, espectro acústico e eventos.",
        },
        {
          caption: "Vista 3D do gêmeo — berço B12 e bacia de evolução a −15,0/−16,0 m CD: muro de cais, navio atracado e unidades cognitivas varridos em grade de 0,5 m (traçado sintético).",
        },
      ],
    },
    cognitive: {
      eyebrow: "ROBÓTICA COGNITIVA COM IA",
      title: "Perceber. Raciocinar. Agir.",
      steps: [
        {
          title: "Perceber",
          text: "Unidades robóticas cognitivas — fixas e móveis, subaquáticas e de superfície — sentem continuamente os campos hidroacústico, estrutural e hidrodinâmico ao redor da sua infraestrutura crítica.",
        },
        {
          title: "Raciocinar",
          text: "IA frugal e informada pela física roda dentro de cada unidade: classifica assinaturas, detecta anomalias e adapta a própria amostragem — com ou sem link ativo com a costa.",
        },
        {
          title: "Agir",
          text: "As unidades emitem alertas, verificam as leituras umas das outras e alimentam o motor cognitivo em nuvem que funde todas as unidades em um único quadro operacional: APIs, painéis e o gêmeo digital 3D.",
        },
      ],
    },
    services: {
      eyebrow: "SERVIÇOS",
      title: "Serenitech Cognitive Services",
      link: "Detalhes",
      items: [
        {
          title: "Proteção contra Ruído e Vibração Ambiental",
          text: "Matriz de energia acústica subaquática e mapas de deformação estrutural contínuos, com alertas de excedência por setor do porto.",
        },
        {
          title: "Identificação Digital Automatizada de Embarcações",
          text: "Assinatura acústica e hidrodinâmica cruzada com o AIS; alerta imediato de \"embarcação escura\".",
        },
        {
          title: "Inteligência Preditiva de Assoreamento",
          text: "Vetores de velocidade de assoreamento e desvios volumétricos que priorizam a dragagem antes dos limites críticos.",
        },
        {
          title: "Monitoramento Dinâmico de Calado no Canal e no Berço",
          text: "Calado ao vivo na proa, meia-nau e popa, folga sob a quilha contínua, análise de squat e banda/adernamento.",
        },
        {
          title: "Integridade Estrutural e Impactos de Atracação",
          text: "Unidades robóticas cognitivas autônomas em estruturas críticas — píeres, dolfins, muros de cais, pernas de jaquetas e ativos submarinos: deslocamento, espectro de vibração, choques e impactos registrados.",
        },
        {
          title: "Plataforma em Nuvem: APIs, Painéis, Alertas e Gêmeo Digital 3D",
          text: "APIs REST e streaming, painel executivo, motor de alarmes e políticas e gêmeo digital 3D do porto ou do ativo no navegador.",
        },
      ],
    },
    how: {
      eyebrow: "COMO TRABALHAMOS",
      title: "Do estudo de viabilidade ao serviço contínuo.",
      steps: [
        {
          title: "Auditoria e consultoria de viabilidade",
          text: "Um projeto customizado para seu canal, bacia, berços ou ativo: diagnóstico estratégico da operação, oportunidades de melhoria, objetivos e KPIs, plano de medição e avaliação de viabilidade — base do projeto definitivo e da proposta de contrato de serviços.",
        },
        {
          title: "Implantação robótica",
          text: "Unidades robóticas cognitivas, subaquáticas e de superfície, instaladas, operadas e mantidas pela Serenitech; sem capex para o operador.",
        },
        {
          title: "Ativação em nuvem",
          text: "APIs, painéis, políticas de alerta e gêmeo digital integrados ao VTMIS, SCADA ou ERP.",
        },
        {
          title: "Serviço contínuo",
          text: "Monitoramento 24/7, atualização de modelos, relatórios ambientais e de integridade — por assinatura, no âmbito do contrato de serviços.",
        },
      ],
    },
    twin: {
      eyebrow: "GÊMEO DIGITAL",
      title: "Um modelo 3D vivo do seu porto — do fundo para cima.",
      bullets: [
        "Superfície batimétrica com densidade de assoreamento e zonas rasas críticas",
        "Blocos dinâmicos de navios com calado, arfagem, balanço e banda em tempo real",
        "Frentes de onda subaquáticas localizando eventos acústicos e estruturais",
        "Tudo no navegador, alimentado pelas mesmas APIs dos seus sistemas",
      ],
      panelLabel: "Ilustração estilizada",
      legend: [
        "UKC 1.9 m",
        "Assoreamento +3.2%",
        "Embarcação escura: nenhuma",
        "Bacia 3 · ao vivo",
      ],
      console: {
        ...en.home.twin.console,
        open: "Abrir a tela do console em tamanho real",
        alt: "Console cognitivo Serenitech: vista 3D de levantamento de um canal de acesso e bacia de evolução — batimetria multifeixe em escala de cores de profundidade, nuvens de pontos lidar do cais, guindastes e navios — com numéricos, perfil transversal, espectro acústico e registro de eventos",
        caption: "Bacia de demonstração sintética — o traçado é fictício; canal a −15,0 m CD, 220 m de largura, taludes 1:3, bacia de evolução Ø 600 m, navios de 347 m / 294 m e maré +0,9 m são valores da classe Miami/Santos. Renderizado como levantamento multifeixe e lidar a partir do mesmo modelo de dados que o console serve.",
      },
    },
    ai: {
      eyebrow: "STACK DE IA",
      title: "Deep tech desenvolvida internamente.",
      items: [
        "IA frugal de borda dentro de cada unidade robótica cognitiva — classificação onde o sinal nasce.",
        "Modelos informados pela física — acústica, hidrodinâmica e mecânica estrutural guiam o aprendizado.",
        "Inteligência altamente distribuída — unidade → gateway → nuvem, resiliente a links intermitentes.",
        "Aprendizado federado e atualização de modelos over-the-air entre sites.",
        "Segurança por projeto — links criptografados, medições assinadas, controle de acesso por perfil, trilha de auditoria completa.",
        "Linhagem de pesquisa — trabalho doutoral em processamento de sinais e imagens e em eletrônica de alta frequência, publicações no IEEE OCEANS e no EuCAP sobre sensores subaquáticos de alta taxa de dados, e o programa europeu EdgeAI por trás do nosso projeto de inteligência de borda.",
      ],
    },
    presence: {
      eyebrow: "PRESENÇA GLOBAL",
      title: "Uma plataforma, operada localmente, governada globalmente.",
      items: [
        { place: "Mônaco", text: "Sede do grupo e laboratório — Avenue J. F. Kennedy, Port Hercule" },
        {
          place: "Florianópolis, Brasil",
          text: "Sede brasileira, escritório e laboratório — Sapiens Parque, o maior centro de tecnologia do Brasil",
        },
        { place: "Coral Gables, Flórida, EUA", text: "Operações na América do Norte — Valencia Avenue" },
      ],
    },
    finalCta: {
      eyebrow: "COMO COMEÇAMOS",
      title: "Começa com um diagnóstico estratégico da sua operação.",
      text: "Um projeto de consultoria estruturado e orçado, sob medida para seu canal, terminal, plataforma ou ativo e construído sobre o conhecimento profundo de como a sua operação realmente funciona. Suas conclusões se convertem no projeto definitivo e na proposta de contrato de serviços de longo prazo.",
      steps: [
        {
          title: "Diagnóstico estratégico",
          text: "Entendimento profundo da operação atual — rotinas, dados, riscos e restrições, como de fato acontecem.",
        },
        {
          title: "Oportunidades de melhoria",
          text: "Onde a inteligência subaquática contínua muda o resultado — localizadas, quantificadas e priorizadas.",
        },
        {
          title: "Objetivos e KPIs",
          text: "As metas e os indicadores que medirão o projeto definitivo, acordados com a sua equipe.",
        },
        {
          title: "Projeto definitivo",
          text: "Plano de desenvolvimento e implantação, orçamento e a proposta de contrato de serviços.",
        },
      ],
      button: "Solicitar briefing técnico",
      imageAlt: "Estrutura de jaqueta de plataforma offshore vista sob a superfície",
    },
  },
  services: {
    eyebrow: "SERVIÇOS COGNITIVOS",
    title: "Serenitech Cognitive Services",
    intro:
      "Serenitech Cognitive Services — a camada em nuvem do nosso sistema de robótica cognitiva com IA: plataforma unificada e nativa em nuvem que converte fenômenos físicos subaquáticos de alta tecnologia em fluxos de dados operacionais granulares e em tempo real. Supervisão contínua e online da infraestrutura crítica: canal de acesso, bacias de evolução, berços de atracação — e, para operadores offshore e submarinos, a própria estrutura crítica. Cada módulo é projetado sob uma direção técnica com 27 anos de pesquisa em telecomunicações entre meios distintos, redes de sensores subaquáticos, processamento de sinais e IA de borda — publicada no IEEE e protegida por pedidos de patente. Quando a situação exige, entregamos também consultoria sob medida.",
    mandateLabel: "Mandato de arquitetura",
    mandate:
      "Afastando-se do modelo descentralizado e centrado em hardware, o serviço encapsula toda a instrumentação sob camadas funcionais abstratas, servidas por APIs seguras de baixa latência a painéis de controle, sistemas de alerta em tempo real e um gêmeo digital espacial 3D de alta fidelidade.",
    columns: {
      measure: "O que medimos",
      get: "O que você recebe",
      matters: "Por que importa",
    },
    moduleLabel: "Módulo",
    modules: [
      {
        title: "Proteção contra Ruído e Vibração Ambiental",
        measure:
          "Níveis de pressão sonora subaquática contínuos por bandas; energia mecânica microssísmica e de baixa frequência propagada por píeres e muros de cais; perfis de temperatura e salinidade para calcular a velocidade do som local.",
        get: "Matriz de Energia Acústica em tempo real (dB re 1 µPa) por bandas de 1/3 de oitava de 10 Hz a 20 kHz; Mapas de Deformação Estrutural com amplitudes de vibração, vetores de velocidade e anomalias de aceleração de pico de partícula; alertas imediatos de excedência vinculados a setores específicos do porto.",
        matters:
          "Prova de conformidade com limites de ruído, proteção da fauna e das estruturas, evidência para relatórios ambientais.",
        bullets: [],
      },
      {
        title: "Identificação Digital Automatizada de Embarcações",
        measure:
          "Assinaturas acústicas de banda larga e estreita em alta resolução; frequências de modulação de pás (assinatura fundamental do hélice); assinaturas de pressão hidrodinâmica de baixa frequência e o padrão de esteira induzido pelo casco em movimento.",
        get: "Perfil de Assinatura Acústica Único (regime dos cilindros, RPM do eixo, número de pás, picos harmônicos); Perfis de Pressão Hidrodinâmica estimando porte, calado e velocidade do casco; Matriz de Verificação Multi-influência cruzando as assinaturas com os dados obrigatórios do AIS; Alerta de Embarcação Escura instantâneo quando embarcações não autorizadas ou silenciosas cruzam limites espaciais.",
        matters:
          "Segurança do canal e das áreas restritas, verificação do tráfego declarado, registro forense de cada movimento.",
        bullets: [],
      },
      {
        title: "Inteligência Preditiva de Assoreamento",
        measure:
          "Retroespalhamento acústico multifrequência (sedimento em suspensão); matrizes batimétricas de varredura completa em canais e bolsões de berço; velocidades de fluxo e tensão de cisalhamento no fundo.",
        get: "Vetores de Velocidade de Deposição prevendo metros cúbicos acumulados por coordenada e por unidade de tempo; gráficos de desvio volumétrico em tempo real contra linhas de base históricas; alertas automáticos de dragagem crítica priorizando zonas próximas aos limites regulatórios.",
        matters:
          "Dragagem planejada por previsão e não por levantamento periódico — menor custo de dragagem, sem surpresas, segurança documentada.",
        bullets: [],
      },
      {
        title: "Monitoramento Dinâmico de Calado no Canal e no Berço",
        measure:
          "Matrizes de distância vertical de alta densidade entre casco e leito ativo; gradientes de pressão hidrostática multiponto ao longo do casco; maré dinâmica, densidade da água e movimento vertical induzido por ondas.",
        get: "Calado dinâmico em tempo real na proa, popa e meia-nau; margens de folga sob a quilha (UKC) contínuas durante o trânsito; análise de squat e banda/adernamento; previsão espacial de risco de encalhe com pontos críticos de baixa folga.",
        matters:
          "Trânsitos mais seguros, janelas de calado mais justas, mais carga por escala — com a evidência para cada decisão.",
        bullets: [],
      },
      {
        title: "Integridade Estrutural e Impactos de Atracação",
        measure:
          "Unidades robóticas cognitivas autônomas fixadas em estacas, dolfins, defensas, muros de cais, estruturas de amarração, pernas de jaquetas, risers e ativos submarinos — aceleração triaxial, movimento angular e deslocamento, detecção de choques e impactos, espectro completo de vibração e análise modal; dados transportados por links sem fio subaquáticos até gateways de superfície (celular, satélite ou rádio de longo alcance e baixo consumo), com autonomia de vários anos.",
        get: "Tendências de deslocamento e deriva, assinaturas de fadiga e modais, registros de impacto com carimbo de tempo que identificam a embarcação responsável em colisões de atracação, alertas por limiar, integração direta ao SCADA.",
        matters:
          "Evidência para responsabilidade e seguros, menos reparos não planejados, gestão de integridade de estruturas críticas que nenhum mergulhador inspeciona todo dia.",
        bullets: [],
      },
      {
        title: "Plataforma em Nuvem: APIs, Painéis, Alertas e Gêmeo Digital",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "APIs",
            text: "APIs REST para consultas estruturais e streams WebSocket para aplicações em tempo real, com integração imediata a VTMIS, SCADA, ERP e PMS.",
          },
          {
            label: "Painel Executivo de Controle",
            text: "Visão multi-inquilino da saúde do porto — índices de ruído, berços dentro da UKC segura, prioridades de dragagem, log de movimentos.",
          },
          {
            label: "Motor de Alarmes e Políticas",
            text: "Regras de baixa latência com alertas visuais, SMS e webhook — violações ambientais, eventos de segurança, riscos operacionais.",
          },
          {
            label: "Gêmeo Digital Espacial 3D",
            text: "Modelo interativo no navegador com renderização volumétrica do leito, blocos dinâmicos de navios e frentes de onda subaquáticas.",
          },
        ],
      },
      {
        title: "Consultoria e Assessoria — projetada caso a caso",
        measure: "",
        get: "",
        matters: "",
        bullets: [
          {
            label: "Estudos de aplicabilidade e viabilidade",
            text: "Seu canal, terminal, plataforma ou ativo submarino pode ser percebido continuamente, e para quê? Mapeamos os fenômenos que importam, as unidades e posições necessárias, a qualidade de dados esperada e o business case — antes de qualquer implantação.",
          },
          {
            label: "Revisão de impactos ambientais",
            text: "Avaliações de ruído e vibração subaquáticos para dragagem, cravação de estacas, obras e tráfego; campanhas de linha de base, planos de monitoramento e a evidência contínua exigida por órgãos ambientais e licenciadores.",
          },
          {
            label: "Avaliação de riscos estruturais e operacionais",
            text: "Estudos de impacto de atracação e amarração, políticas de calado dinâmico e folga sob a quilha, estratégia de assoreamento e dragagem, planos de integridade para píeres, dolfins, jaquetas, risers e dutos.",
          },
          {
            label: "Assessoria em arquitetura de IA e deep tech",
            text: "Revisão e projeto independentes de arquiteturas de sensoriamento, IA de borda, nuvem e gêmeo digital; estratégia de dados, integração com VTMIS, SCADA e ERP, cibersegurança e governança de dados.",
          },
          {
            label: "Conectividade subaquática em condições exigentes",
            text: "Projeto de links acústicos e ópticos, autonomia e sobrevivência das unidades em condições de sedimento, alto tráfego e águas profundas, engenharia de implantação e manutenção.",
          },
          {
            label: "Especificação, aquisição e owner's engineer",
            text: "Especificações técnicas, avaliação de fornecedores, testes de aceitação e supervisão independente de programas de monitoramento, em padrão internacional.",
          },
        ],
      },
    ],
    apiLabel: "Exemplo de API",
    advisoryIntro:
      "Cada porto, plataforma e estrutura crítica é diferente. Nossa consultoria é desenhada caso a caso pela equipe que constrói as unidades robóticas cognitivas, a IA e os links subaquáticos, sob a direção do Dr. Thierry Deschamps de Paillette — agrégé, doutor em eletrônica de alta frequência, fotônica e sistemas, 27 anos de pesquisa em telecomunicações entre meios distintos, redes de sensores subaquáticos e IA de borda, autor e revisor no IEEE. Conhecimento de nível internacional em IA, deep tech e conectividade subaquática em condições exigentes, aplicado à sua situação.",
    headerAlt:
      "Vista subaquática de um muro de cais com unidades robóticas cognitivas e leituras 3D",
    commercial: {
      eyebrow: "MODELO COMERCIAL",
      title: "Monitoramento como Serviço",
      text: "Assinatura de Monitoramento como Serviço — unidades robóticas cognitivas instaladas, mantidas e de propriedade da Serenitech; preços open-book em condições locais de mercado; estudos de engenharia e desenvolvimento tecnológico como consultoria.",
    },
  },
  sectors: {
    eyebrow: "SETORES",
    title: "Quatro setores, uma plataforma subaquática.",
    outcomeLabel: "Resultado",
    headerAlt:
      "Estrutura de jaqueta de plataforma offshore com unidades robóticas cognitivas sob a água",
    items: [
      {
        title: "Portos e Terminais",
        text: "Canal de acesso, bacias e berços — a infraestrutura crítica do porto — sob supervisão subaquática contínua e online: calado dinâmico e UKC, assoreamento preditivo, conformidade de ruído, verificação de embarcações e registro de impactos. Integra-se ao VTMIS e ao ERP do porto.",
        outcome:
          "Trânsitos mais seguros, dragagem otimizada, conformidade documentada, menos disputas.",
        alt: "Muro de cais e navio atracado vistos sob a água",
      },
      {
        title: "Offshore Óleo e Gás",
        text: "Estruturas críticas — pernas de jaquetas, risers, sistemas de amarração e equipamentos submarinos — supervisionadas online quanto a movimento, vibração, impacto e erosão do leito; detecção de aproximação de embarcações não identificadas; monitoramento de ruído subaquático em perfuração e construção.",
        outcome:
          "Gestão de integridade com evidência contínua, perímetro de segurança além da superfície, conformidade ambiental.",
        alt: "Pernas de jaqueta offshore sob a água com unidades robóticas de sensoriamento acústico",
      },
      {
        title: "Estruturas Submarinas",
        text: "Infraestrutura submarina crítica — dutos, manifolds, cabos, emissários e fundações de eólicas offshore: movimento e vibração estrutural, mudanças do leito e dinâmica de sedimentos, detecção de eventos e deriva de longo prazo — com unidades robóticas cognitivas que dispensam mergulho por anos.",
        outcome:
          "Menos campanhas de inspeção, alertas mais cedo, gêmeo digital do ativo no fundo do mar.",
        alt: "Duto submarino e manifold no fundo do mar com grade de levantamento",
      },
      {
        title: "Indústria Naval",
        text: "Estaleiros, frotas e engenharia naval: medição de ruído irradiado e assinatura acústica de cascos e hélices, deriva de assinatura como indicador de condição, monitoramento de bacias e docas secas, instrumentação estrutural de cascos e estruturas de atracação — com base em duas décadas de pesquisa em processamento de sinais e telemetria subaquática.",
        outcome:
          "Desempenho acústico mensurável e dados contínuos para projeto, manutenção e suporte à certificação.",
        alt: "Hélice de um navio porta-contêineres de grande porte com anéis acústicos e wireframe 3D",
      },
    ],
  },
  technology: {
    eyebrow: "TECNOLOGIA",
    title: "Do fundo do mar à API.",
    headerAlt: "Superfície batimétrica 3D sobre o fundo de um canal portuário",
    headerLine:
      "A Serenitech é um sistema de robótica cognitiva com IA: unidades que percebem, raciocinam e agem, orquestradas por um motor cognitivo em nuvem. Sua arquitetura descende de duas décadas de pesquisa em telecomunicações e redes de sensores subaquáticos e dos programas europeus de IA AI4DI e EdgeAI.",
    layersTitle: "Cinco camadas",
    // Drawing texts stay English (rule above); only the accessible description is localised.
    schematic: {
      ...en.technology.schematic,
      alt: "Seção vertical animada de um berço: sensoriamento no leito e nas estacas, unidades robóticas cognitivas e uma unidade de levantamento, gateway de cais com inteligência de borda, motor cognitivo em nuvem e interfaces do operador, com pacotes de dados percorrendo os enlaces",
    },
    layers: [
      {
        title: "Interfaces",
        text: "APIs REST e WebSocket, painéis executivos, motor de alarmes e políticas, gêmeo digital 3D.",
      },
      {
        title: "Motor em nuvem",
        text: "Ingestão otimizada para séries temporais massivas e dados espaciais; processamento desacoplado do hardware do porto; multi-inquilino, escalável, seguro.",
      },
      {
        title: "Inteligência de borda",
        text: "Cada unidade raciocina localmente: modelos de IA frugais classificam eventos onde ocorrem, reduzindo banda e latência.",
      },
      {
        title: "Conectividade",
        text: "Links subaquáticos sem fio (acústicos e ópticos) até gateways de superfície; backhaul celular, satelital e rádio de longo alcance e baixo consumo; resiliência store-and-forward.",
      },
      {
        title: "Camada robótica de sensoriamento",
        text: "Unidades robóticas cognitivas com arranjos hidroacústicos, sensoriamento inercial e de vibração, matrizes de pressão e distância, ecobatimetria e sondas da coluna d'água (temperatura, salinidade, turbidez), fixadas em estruturas ou implantadas no canal.",
      },
    ],
    security: {
      eyebrow: "SEGURANÇA E GOVERNANÇA DE DADOS",
      title: "Segurança e governança de dados",
      items: [
        "Criptografia de ponta a ponta",
        "Medições assinadas com trilha de auditoria imutável",
        "Acesso por perfil por inquilino e setor",
        "Opções de residência de dados por país",
        "Integração atrás do firewall do operador quando solicitado",
      ],
    },
    research: {
      eyebrow: "DNA DE PESQUISA",
      title: "DNA de pesquisa",
      text: "Eletrônica de alta frequência, fotônica, telecomunicações subaquáticas, processamento de sinais e IA — cultura de laboratório em Mônaco e Florianópolis dedicada ao ambiente subaquático, enraizada em 27 anos de pesquisa: trabalho doutoral no laboratório L3i (La Rochelle) e em Orléans, publicações no IEEE OCEANS e no EuCAP sobre sensores e antenas subaquáticas de alta taxa de dados, revisão para o IEEE Journal of Oceanic Engineering, dois pedidos de patente sobre comunicação subaquática dirigida por IA e os programas europeus de IA AI4DI e EdgeAI.",
    },
  },
  company: {
    eyebrow: "EMPRESA",
    title: "Um grupo global de deep tech dedicado ao mundo subaquático.",
    about:
      "Boa parte da infraestrutura crítica do planeta está parcialmente embaixo d'água e é supervisionada quase às cegas. A Serenitech constrói a robótica cognitiva com IA — sensoriamento, conectividade, inteligência artificial e serviços em nuvem — sobre três décadas de pesquisa em telecomunicações subaquáticas, sensores e IA embarcada, dando a autoridades portuárias, operadores offshore, donos de ativos submarinos e à indústria naval visão, memória e previsão contínuas além da linha d'água. O nome diz tudo: serenidade por meio da tecnologia.",
    technicalEyebrow: "DIREÇÃO TÉCNICA E CIENTÍFICA",
    technicalTitle: "Três décadas de pesquisa em sensoriamento subaquático, telecomunicações e IA embarcada à frente da nossa engenharia.",
    technicalIntro: "A Serenitech é uma empresa de serviços técnicos especializados. Sua tecnologia, seus laboratórios e a arquitetura de produto são dirigidos pelo Dr. Thierry Deschamps de Paillette — agrégé em engenharia elétrica e eletrônica, doutor em eletrônica de alta frequência, fotônica e sistemas, com pesquisa doutoral em processamento de sinais e imagens, e 27 anos de pesquisa avançada aplicada a sistemas de telecomunicação entre meios distintos, redes de sensores subaquáticos, processamento de sinais e IA de borda. Produtos industriais, publicações no IEEE, pedidos de patente e os programas europeus de IA AI4DI e EdgeAI formam a base técnica de cada serviço desta página.",
    proofPoints: [
      { value: "27 anos", label: "de pesquisa avançada — eletrônica de alta frequência, fotônica, sistemas e IA" },
      { value: "Agrégé · Ph.D.", label: "concurso nacional mais seletivo da França na disciplina; doutorado com félicitations du jury" },
      { value: "IEEE", label: "publicações no OCEANS e no EuCAP; revisor do IEEE Journal of Oceanic Engineering" },
      { value: "2 pedidos de patente", label: "seleção por IA do modo de comunicação subaquática (EP · PCT), inventor único" },
      { value: "AI4DI · EdgeAI", label: "programas europeus de IA liderados com grandes grupos industriais e startups" },
      { value: "20 anos", label: "de projeto de produtos industriais — Crouzet, Micrelec, TECHNEXT" },
    ],
    photoCaptionShort: "Sapiens Parque, Florianópolis — sede e laboratório no Brasil, no maior centro de tecnologia do país.",
    showMore: "Ver mais",
    showLess: "Ver menos",
    linkedin: "LinkedIn →",
    openLabel: "Abrir",
    lead: {
      name: "Dr. Thierry Deschamps de Paillette",
      role: "Chief Technology Officer · Direção técnica e científica",
      bio: "Dr. Thierry Deschamps de Paillette é agrégé em engenharia elétrica e eletrônica — o concurso nacional mais seletivo da França na disciplina — e doutor pela Université de La Rochelle com félicitations du jury, a mais alta distinção. Traz 27 anos de pesquisa avançada em eletrônica de alta frequência, fotônica e sistemas, aplicada a IA, cibernética e sistemas de telecomunicação entre meios distintos em cooperação com grandes grupos industriais. Seu trabalho recente de pesquisa e engenharia cobre uma nova geração de redes subaquáticas de telecomunicação e sensores. Projeta produtos industriais há duas décadas — Crouzet, Micrelec, TECHNEXT — e é o inventor nomeado em pedidos de patente para a seleção por IA do modo de comunicação subaquática. Professor de cátedra superior no sistema acadêmico nacional francês, integrou as bancas nacionais que recrutam agrégés em ciências da engenharia. Publica no IEEE e é revisor do IEEE Journal of Oceanic Engineering; como conselheiro, palestrante e especialista em IA em clusters como o Institut EuropIA e o Cluster-IA, liderou os programas europeus de IA AI4DI e EdgeAI com grandes grupos industriais e startups. Na Serenitech lidera a tecnologia, os laboratórios e a arquitetura de produto — as unidades robóticas cognitivas, a pilha de comunicação subaquática e as camadas de sensoriamento por IA e inteligência de borda.",
      link: "https://www.linkedin.com/in/thierry-deschamps-de-paillette-b1669821/",
      panels: [
        {
          title: "Credenciais",
          items: [
            {
              title: "Revisor, IEEE Journal of Oceanic Engineering",
            },
            {
              title: "Especialista, IA & Oceanos — Institut EuropIA",
              link: "https://instituteuropia.eu/experts",
            },
            {
              title: "Vice-presidente — Cluster-IA",
            },
            {
              title: "AI4DI — Artificial Intelligence for Digitizing Industry · H2020 / ECSEL JU, grant agreement 826060",
              link: "https://ai4di.eu/",
            },
            {
              title: "EdgeAI — Edge AI Technologies for Optimised Performance Embedded Processing · Horizon Europe / KDT JU, grant agreement 101097300",
              link: "https://cordis.europa.eu/project/id/101097300",
            },
            {
              title: "Membro de júri dos concursos nacionais franceses de Agrégation para recrutamento de professores em ciências da engenharia",
              link: "https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/concours-examens/833/833-rapport-jury-agreg-ext-ssi-et-ingenierie-electrique.pdf",
            },
            {
              title: "Projeto de produtos industriais para Crouzet, Micrelec e TECHNEXT",
            },
            {
              title: "Sistema de medição de energia e água EWTS HYD — material didático do currículo nacional francês de engenharia",
              link: "https://sti.eduscol.education.fr/ressources_techniques/ewts-hyd-systeme-de-comptage-energetique",
            },
            {
              title: "Projetista dos modems subaquáticos FSK 400 kHz e magneto-indutivo de banda larga — hardware, firmware e comissionamento",
            },
            {
              title: "Depósito de anterioridade INPI Soleau DSO2019007239 (2019) — enlace subaquático magneto-indutivo de banda larga com modulação OFDM",
            },
            {
              title: "Arquiteturas de inteligência da borda à nuvem e IA para ambientes severos",
            },
          ],
        },
        {
          title: "Formação",
          items: [
            {
              year: "2015 — 2020",
              title: "Université de La Rochelle — laboratório L3i",
              venue: "Doutorado em Eletrônica de Alta Frequência, Fotônica e Sistemas · com félicitations du jury · La Rochelle, França · defesa em 22 de outubro de 2020 · orientador Prof. Alain Gaugue",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2011 — 2012",
              title: "Approved Training Organisation (ATO)",
              venue: "Licença de piloto privado PPL-A, monomotor — glass cockpit e FADEC · França",
            },
            {
              year: "2007 — 2008",
              title: "Université d'Orléans",
              venue: "Doutorado de pesquisa em processamento de sinal e imagem · rastreamento de alvos em sequências de vídeo em condições severas · Orléans, França",
            },
            {
              year: "1998",
              title: "Ministère de l'Éducation nationale",
              venue: "Agrégation externe — engenharia elétrica, eletrônica e informática industrial · aprovado · França",
            },
            {
              year: "1996 — 1997",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "DEA, mestrado por pesquisa em eletrônica e sistemas — visão para sistemas robóticos · Clermont-Ferrand, França",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Mestrado em engenharia elétrica — microeletrônica · Clermont-Ferrand, França",
            },
            {
              year: "1995 — 1996",
              title: "Université Blaise Pascal (Clermont-II)",
              venue: "Licence em engenharia elétrica (EEA) — eletrônica, sistemas eletromecânicos, teoria de controle · Clermont-Ferrand, França",
            },
            {
              year: "1993 — 1994",
              title: "Institut Universitaire de Technologie, Université Blaise Pascal",
              venue: "DUT em engenharia elétrica — controle e informática industrial, sistemas C3/C4I · Clermont-Ferrand, França",
            },
            {
              year: "1990 — 1992",
              title: "Lycée Godefroy de Bouillon",
              venue: "Baccalauréat F3, eletromecânica · França",
            },
          ],
        },
        {
          title: "Experiência",
          items: [
            {
              year: "2013 — 2026",
              title: "Ministère de l'Éducation nationale",
              venue: "Professor de engenharia elétrica e ciência da computação, cátedra superior (professeur de chaire supérieure) · França",
            },
            {
              year: "2007 — 2026",
              title: "TECHNEXT",
              venue: "Conselheiro científico · Cannes, França",
            },
            {
              year: "2015 — 2020",
              title: "Laboratório L3i, Université de La Rochelle",
              venue: "Pesquisador — telecomunicações subaquáticas e redes de telemetria submarina · La Rochelle, França",
            },
            {
              year: "2011 — 2015",
              title: "Concours national d'Agrégation",
              venue: "Membro de júri, banca externa de recrutamento de professores em ciências da engenharia · França",
            },
            {
              year: "2011 — 2014",
              title: "TECHNEXT",
              venue: "Autor — sistemas embarcados, escalonamento de tarefas e projeto de algoritmos complexos · Cannes, França",
            },
            {
              year: "2005 — 2009",
              title: "Concours national d'Agrégation",
              venue: "Membro de júri, banca interna de recrutamento de professores em ciências da engenharia · França",
            },
            {
              year: "1998 — 2011",
              title: "Ministère de l'Éducation nationale",
              venue: "Professor de engenharia elétrica — Mathématiques spéciales · França",
            },
          ],
        },
        {
          title: "Patentes",
          items: [
            {
              year: "EP4645718A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Pedido de patente europeu · inventor único · depositado em 29 de abril de 2024, publicado em 5 de novembro de 2025",
              link: "https://patents.google.com/patent/EP4645718A1/en",
            },
            {
              year: "WO2025228988A1",
              title: "Method and device for selecting underwater communication mode",
              venue: "Pedido internacional PCT/EP2025/061717 · inventor único · publicado em 6 de novembro de 2025",
              link: "https://patents.google.com/patent/WO2025228988A1/en",
            },
          ],
          footnote: "Dois pedidos de patente publicados cobrindo uma única invenção, inventor único. A invenção seleciona entre comunicação subaquática acústica, eletromagnética e óptica por meio de uma rede neural alimentada por leituras de sensores, características do canal e realimentação da rede. IPC H04B 11/00 e H04B 13/02.",
        },
        {
          title: "Acadêmico",
          items: [
            {
              year: "2024",
              title: "Enhancing Communication in Multi-Domain Ad-Hoc Networks for Maritime Critical Infrastructure Protection",
              venue: "OCEANS 2024 Halifax, IEEE · com K. Brandl, J. Weid e A. Hahn",
              link: "https://doi.org/10.1109/OCEANS55160.2024.10754334",
            },
            {
              year: "2020",
              title: "Antenna Adaptation Circuits for High Data Rate Magneto-Inductive Underwater Communications",
              venue: "14th European Conference on Antennas and Propagation (EuCAP), Copenhague, IEEE, pp. 1–5 · com A. Gaugue",
              link: "https://doi.org/10.23919/EuCAP48036.2020.9135359",
            },
            {
              year: "2020",
              title: "Transmissions numériques sans-fil pour la surveillance environnementale en milieu sous-marin",
              venue: "Tese de doutorado, Université de La Rochelle · HAL tel-03349746",
              link: "https://theses.hal.science/tel-03349746",
            },
            {
              year: "2019",
              title: "High Data Rate Wireless Underwater Sensors for Environmental Monitoring",
              venue: "MTS/IEEE OCEANS 2019, Marselha, pp. 1–10 · com A. Gaugue",
              link: "https://doi.org/10.1109/OCEANSE.2019.8867364",
            },
            {
              year: "2017",
              title: "Antenna design for underwater wireless telemetry systems",
              venue: "11th European Conference on Antennas and Propagation (EuCAP), Paris, IEEE, pp. 2251–2255 · com A. Gaugue, E. Parlier e S. Dardenne",
              link: "https://doi.org/10.23919/EuCAP.2017.7928513",
            },
            {
              year: "2017",
              title: "Télémétrie sous-marine à ondes électromagnétiques",
              venue: "XXèmes Journées Nationales Micro-ondes, Saint-Malo · com A. Gaugue",
            },
          ],
          footnote: "Áreas de pesquisa: comunicação subaquática eletromagnética e magneto-indutiva, projeto de antenas e casamento de impedância, OFDM para enlaces subaquáticos, redes ad-hoc multidomínio e IA para ambientes severos.",
        },
      ],
    },
    presenceTitle: "Presença global",
    presence: [
      {
        place: "Mônaco",
        text: "Sede do grupo e laboratório; desenvolvimento tecnológico e engenharia.",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Mônaco", "Principado de Mônaco"],
      },
      {
        place: "Florianópolis, Brasil",
        text: "Sede brasileira com escritório e laboratório no Sapiens Parque, o maior centro de tecnologia do Brasil; operações para clientes de portos, offshore e naval no Brasil.",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brasil"],
      },
      {
        place: "Coral Gables, Flórida, EUA",
        text: "Operações na América do Norte.",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "Estados Unidos da América"],
      },
      {
        place: "Serenitech Global Corporation",
        text: "Holding do grupo e de todas as suas subsidiárias.",
        address: [],
      },
    ],
    photoCaption:
      "Sede brasileira — escritório e laboratório no Sapiens Parque, Florianópolis (SC), o maior centro de tecnologia do Brasil.",
    photoAlt:
      "Vista aérea do edifício de escritórios em vidro da sede brasileira no Sapiens Parque, Florianópolis, à beira de um lago",
  },
  contact: {
    eyebrow: "CONTATO",
    title: "Solicitar briefing técnico.",
    text: "Conte-nos sobre seu canal, terminal, plataforma ou ativo crítico. Nossa direção técnica retorna com uma proposta de início de negócio e o escopo e orçamento do projeto inicial de auditoria e viabilidade.",
    fields: {
      name: "Nome",
      email: "E-mail",
      organisation: "Organização",
      role: "Cargo",
      country: "País",
      sector: "Setor",
      sectorPlaceholder: "Selecione um setor",
      message: "Mensagem",
      submit: "Enviar solicitação",
    },
    sectorOptions: [
      "Portos e Terminais",
      "Offshore Óleo e Gás",
      "Estruturas Submarinas",
      "Indústria Naval",
      "Outro",
    ],
    required: "Campo obrigatório.",
    sending: "Enviando…",
    successTitle: "Obrigado",
    success:
      "Solicitação recebida. Nossos engenheiros respondem em até um dia útil.",
    error:
      "Não foi possível enviar sua solicitação. Tente novamente ou escreva para contact@serenitech.global.",
    again: "Enviar outra solicitação",
    locationsTitle: "Localizações",
    locations: [
      {
        place: "Mônaco",
        role: "Sede do grupo e laboratório",
        address: ["Avenue J. F. Kennedy, Port Hercule", "98000 Mônaco", "Principado de Mônaco"],
      },
      {
        place: "Florianópolis, Brasil",
        role: "Sede brasileira e laboratório — Sapiens Parque, o maior centro de tecnologia do Brasil",
        address: ["Avenida Luiz Boiteux Piazza, Sapiens Parque", "Florianópolis, SC, 88056-000", "Brasil"],
      },
      {
        place: "Coral Gables, Flórida, EUA",
        role: "Operações na América do Norte",
        address: ["Valencia Avenue", "Coral Gables, Florida, 33134", "Estados Unidos da América"],
      },
    ],
    emailLabel: "E-mail",
  },
  footer: {
    descriptor:
      "Serenitech — Inteligência Subaquática. Robótica cognitiva com IA para a gestão embaixo d'água.",
    companyCol: "Empresa",
    servicesCol: "Serviços",
    sectorsCol: "Setores",
    groupTitle: "Grupo",
    group: ["Serenitech Global Corporation — holding de todas as empresas Serenitech"],
    privacy: "Privacidade",
    rights: "© 2026 Serenitech Global Corporation. Todos os direitos reservados.",
  },
};
