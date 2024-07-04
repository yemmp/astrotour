import { link } from "fs";

export const benefits = [
  {
    title: "Destinos Incríveis",
    description:
      "Visite a Lua, Marte e estações espaciais orbitais, e testemunhe a grandiosidade do universo de perto.",
  },
  {
    title: "Segurança e Conforto",
    description:
      "Viaje com tranquilidade em nossas naves de última geração, projetadas para proporcionar uma experiência segura e confortável.",
  },
  {
    title: "Experiências Personalizadas",
    description:
      "Nossos pacotes são personalizados para atender às suas necessidades e desejos, garantindo que cada momento da sua viagem seja especial.",
  },
  {
    title: "Equipe de Especialistas",
    description:
      "Nossa equipe de astronautas e cientistas está pronta para guiá-lo em cada passo da sua aventura, compartilhando conhecimentos e histórias fascinantes.",
  },
];

export const tours = [
  {
    id: 1,
    name: "Exploração Lunar",
    description:
      "Uma viagem emocionante de 7 dias para a Lua, incluindo caminhadas lunares, visitas a crateras e uma vista deslumbrante da Terra.",
    price: "1,500,000",
    duration_days: 7,
    destination: "Lua",
    features: [
      "Caminhadas lunares",
      "Visitas a crateras",
      "Observação da Terra",
    ],
    availability: "2024-2025",
    image: "/images/moon.jpg",
  },
  {
    id: 2,
    name: "Aventura em Marte",
    description:
      "Uma expedição de 30 dias para Marte, explorando a superfície marciana, cânions e a possibilidade de ver o Monte Olimpo.",
    price: "5,000,000",
    duration_days: 30,
    destination: "Marte",
    features: [
      "Exploração da superfície marciana",
      "Visita a cânions",
      "Vista do Monte Olimpo",
    ],
    availability: "2025-2026",
    image: "/images/mars.jpg",
  },
  {
    id: 3,
    name: "Estadia na Estação Espacial Orbital",
    description:
      "Passe 14 dias a bordo de uma estação espacial orbital, experimentando a vida em microgravidade e vistas espetaculares do espaço.",
    price: "2,000,000",
    duration_days: 14,
    destination: "Estação Espacial Orbital",
    features: [
      "Experiência de microgravidade",
      "Vistas espetaculares do espaço",
      "Interação com astronautas",
    ],
    availability: "2024-2025",
    image: "/images/space-station-2.jpg",
  },
  {
    id: 4,
    name: "Circuito de Exploração de Asteroides",
    description:
      "Uma viagem de 21 dias para explorar asteroides próximos à Terra, com a oportunidade de coletar amostras e realizar pesquisas científicas.",
    price: "3,500,000",
    duration_days: 21,
    destination: "Asteroides próximos à Terra",
    features: [
      "Exploração de asteroides",
      "Coleta de amostras",
      "Pesquisa científica",
    ],
    availability: "2026-2027",
    image: "/images/space-station.jpg",
  },
  {
    id: 5,
    name: "Excursão aos Anéis de Saturno",
    description:
      "Uma experiência única de 45 dias para ver de perto os anéis de Saturno e explorar suas luas mais fascinantes.",
    price: "7,000,000",
    duration_days: 45,
    destination: "Saturno",
    features: [
      "Observação dos anéis de Saturno",
      "Exploração de luas",
      "Vistas espetaculares",
    ],
    availability: "2027-2028",
    image: "/images/saturn.jpg",
  },
  {
    id: 6,
    name: "Missão Júpiter",
    description:
      "Uma jornada de 60 dias para explorar Júpiter e suas maiores luas, incluindo Europa e Ganimedes.",
    price: "9,000,000",
    duration_days: 60,
    destination: "Júpiter",
    features: [
      "Exploração de Júpiter",
      "Visita a Europa e Ganimedes",
      "Observação da Grande Mancha Vermelha",
    ],
    availability: "2028-2029",
    image: "/images/jupiter.jpg",
  },
  {
    id: 7,
    name: "Aventura no Cinturão de Kuiper",
    description:
      "Uma expedição de 90 dias para explorar o Cinturão de Kuiper e suas diversas formações de gelo e rocha.",
    price: "12,000,000",
    duration_days: 90,
    destination: "Cinturão de Kuiper",
    features: [
      "Exploração do Cinturão de Kuiper",
      "Observação de objetos transnetunianos",
      "Pesquisa científica",
    ],
    availability: "2030-2031",
    image: "/images/solar-system.jpg",
  },
  {
    id: 8,
    name: "Voo Suborbital",
    description:
      "Experimente a sensação de microgravidade e veja a curvatura da Terra em um voo suborbital de 1 dia.",
    price: "250,000",
    duration_days: 1,
    destination: "Órbita da Terra",
    features: [
      "Experiência de microgravidade",
      "Vista da curvatura da Terra",
      "Voo suborbital",
    ],
    availability: "2024-2025",
    image: "/images/earth.jpg",
  },
  {
    id: 9,
    name: "Tour pelo Sistema Solar Interior",
    description:
      "Uma jornada de 120 dias explorando os planetas interiores do Sistema Solar, incluindo Mercúrio, Vênus e Marte.",
    price: "15,000,000",
    duration_days: 120,
    destination: "Sistema Solar Interior",
    features: [
      "Visita a Mercúrio, Vênus e Marte",
      "Pesquisa científica",
      "Observação de fenômenos astronômicos",
    ],
    availability: "2029-2030",
    image: "/images/solar-system (2).jpg",
  },
  {
    id: 10,
    name: "Expedição a Titã",
    description:
      "Uma missão de 180 dias para explorar Titã, a maior lua de Saturno, incluindo seus mares de metano e atmosfera densa.",
    price: "20,000,000",
    duration_days: 180,
    destination: "Titã",
    features: [
      "Exploração de Titã",
      "Observação de mares de metano",
      "Pesquisa atmosférica",
    ],
    availability: "2031-2032",
    image: "/images/saturn-moons.jpg",
  },
  {
    id: 11,
    name: "Observação de Cometas",
    description:
      "Uma viagem de 10 dias para observar cometas em sua aproximação ao Sol, com a oportunidade de capturar imagens espetaculares.",
    price: "1,200,000",
    duration_days: 10,
    destination: "Órbita Solar",
    features: [
      "Observação de cometas",
      "Fotografia astronômica",
      "Pesquisa científica",
    ],
    availability: "2026-2027",
    image: "/images/comet.jpg",
  },
  {
    id: 12,
    name: "Viagem à Nebulosa de Órion",
    description:
      "Uma expedição de 365 dias para explorar a Nebulosa de Órion, uma das regiões de formação estelar mais ativas.",
    price: "50,000,000",
    duration_days: 365,
    destination: "Nebulosa de Órion",
    features: [
      "Exploração da Nebulosa de Órion",
      "Observação de estrelas em formação",
      "Pesquisa astronômica",
    ],
    availability: "2032-2033",
    image: "/images/orion.jpeg",
  },
  ,
];

export const services = [
  {
    title: "Viagens Espaciais",
    image: "/images/space-travel.jpg",
    description:
      "Oferecemos uma variedade de pacotes de viagens para destinos espaciais, incluindo a Lua, Marte, estações espaciais orbitais e mais.",
  },
  ,
  {
    title: "Treinamento de Astronautas",
    image: "/images/astronaut.jpg",
    description:
      "Preparação rigorosa e treinamento completo para garantir que nossos clientes estejam prontos para as exigências das viagens espaciais.",
  },
  {
    title: "Experiências Educacionais",
    image: "/images/night-sky.jpg",
    description:
      "Programas educacionais interativos e workshops para aumentar o conhecimento sobre o espaço e a exploração espacial.",
  },
  {
    title: "Pesquisa Científica",
    image: "/images/satelite.jpg",
    description:
      "Oportunidades para cientistas e entusiastas participarem de projetos de pesquisa durante as expedições espaciais.",
  },
];

export const FAQs = [
  {
    question:
      "Quais são os requisitos de saúde para participar de uma viagem espacial?",
    answer:
      "Todos os participantes devem passar por um exame médico completo para garantir que estão aptos para suportar as condições de viagem espacial. Requisitos específicos podem variar dependendo do destino e da duração da viagem.",
  },
  {
    question: "O que está incluído nos pacotes de viagem?",
    answer:
      "Cada pacote de viagem inclui transporte espacial, acomodação, refeições e atividades programadas. Detalhes específicos podem variar dependendo do pacote escolhido.",
  },
  {
    question: "Quanto tempo antes da viagem preciso fazer a reserva?",
    answer:
      "Recomendamos que as reservas sejam feitas com pelo menos seis meses de antecedência para garantir disponibilidade e tempo suficiente para o treinamento necessário.",
  },
  {
    question: "Posso cancelar ou alterar minha reserva?",
    answer:
      "Sim, as políticas de cancelamento e alteração variam dependendo do pacote. Por favor, consulte os termos e condições específicos do seu pacote de viagem.",
  },
  {
    question: "Como posso me preparar para a viagem?",
    answer:
      "Fornecemos um programa de treinamento completo que inclui simulações de voo, orientação sobre vida em microgravidade e preparação física e mental.",
  },
];

export const partnerships = [
  {
    name: "NASA",
    image: "/images/nasa-logo.png",
    link: "https://www.nasa.gov",
  },
  {
    name: "SpaceX",
    image: "/images/spacex-logo.png",
    link: "https://www.spacex.com",
  },
  {
    name: "European Space Agency",
    image: "/images/esa-logo.png",
    link: "https://www.esa.int",
  },
  {
    name: "Roscosmos",
    image: "/images/roscosmos-logo.jpg",
    link: "https://www.roscosmos.ru",
  },
];
