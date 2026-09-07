/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  category: "relaxamento" | "soltura" | "reconstrucao" | "reposicao" | "californiana" | "coloracoes" | "cores-fantasia" | "corte";
  price?: number;
  duration: string;
  description: string;
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  avatar: string;
  specialty: string;
}

export interface Review {
  id: string;
  username: string;
  handle: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string;
  likes: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "relaxamento" | "soltura" | "reconstrucao" | "reposicao" | "californiana" | "coloracoes" | "cores-fantasia" | "corte";
  description: string;
  image: string;
  stylistName: string;
}

export const SERVICES: Service[] = [
  {
    id: "relaxamento",
    name: "Relaxamento (Definição sem volume)",
    category: "relaxamento",
    duration: "2h 00m",
    description: "Alinhamento com química suave e segura que reduz o volume extra preservando a curvatura natural e a elasticidade saudável.",
    image: "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=600"
  },
  {
    id: "soltura",
    name: "Soltura de cachos (Definição com volume)",
    category: "soltura",
    duration: "1h 45m",
    description: "Técnica focada em soltar as espirais reduzindo o fator de encolhimento para obter definição e volumão com muito balanço.",
    image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39a685?q=80&w=600"
  },
  {
    id: "reconstrucao",
    name: "Reconstrução Capilar",
    category: "reconstrucao",
    duration: "1h 15m",
    description: "Tratamento fitoterápico repositor de massa e queratina vegetal para recuperar a integridade da fibra capilar fragilizada.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600"
  },
  {
    id: "reposicao",
    name: "Reposição de óleo",
    category: "reposicao",
    duration: "1h 00m",
    description: "Nutrição lipídica profunda combinando óleos essenciais e manteigas nobres para restaurar a maciez absoluta dos fios crespos.",
    image: "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=600"
  },
  {
    id: "californiana",
    name: "Californiana",
    category: "californiana",
    duration: "2h 30m",
    description: "Clareamento em degradê focado nas pontas, trazendo pontos de luz solares com proteção do cacho contra o ressecamento.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600"
  },
  {
    id: "coloracoes",
    name: "Colorações",
    category: "coloracoes",
    duration: "2h 15m",
    description: "Cobertura de brancos ou mudança de tom feita com produtos suaves ricos em ativos condicionantes e livres de metais agressivos.",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600"
  },
  {
    id: "cores-fantasia",
    name: "Cores fantasia",
    category: "cores-fantasia",
    duration: "3h 00m",
    description: "Tons de cores vibrantes personalizados e cheios de atitude, com descoloração sutil acompanhada de tratamento reconstrutor.",
    image: "https://images.unsplash.com/photo-1620331708837-5e8891515590?q=80&w=600"
  },
  {
    id: "corte",
    name: "Corte",
    category: "corte",
    duration: "1h 15m",
    description: "Corte a seco escultural e personalizado para harmonizar seu formato e expandir o balanço de suas curvaturas.",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600"
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: "especialista-corte",
    name: "Especialista em Cortes",
    role: "Visagista em Cabelo Crespo",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150",
    specialty: "Cortes Secos, Transição Capilar"
  },
  {
    id: "especialista-definicao",
    name: "Especialista em Definição",
    role: "Soltura e Tratamentos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    specialty: "Knotless Braids, Twist & Cachos"
  },
  {
    id: "especialista-quimica",
    name: "Terapeuta Capilar",
    role: "Química Verde & Nutrição",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150",
    specialty: "Saúde do Couro Cabeludo, Cronograma Natural"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Volume Máximo Black Power",
    category: "corte",
    description: "Corte seco que estimula a projeção esférica e harmonia do rosto.",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600",
    stylistName: "Equipe Cachos ao Vento"
  },
  {
    id: "gal-2",
    title: "Soltura de Cachos Definida",
    category: "soltura",
    description: "Abertura impecável de cachos reduzindo fator de encolhimento com brilho extra.",
    image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39a685?q=80&w=600",
    stylistName: "Equipe Cachos ao Vento"
  },
  {
    id: "gal-3",
    title: "Relaxamento Sutil Natural",
    category: "relaxamento",
    description: "Alinhamento suave mantendo a integridade e saúde da curvatura crespa.",
    image: "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=600",
    stylistName: "Equipe Cachos ao Vento"
  },
  {
    id: "gal-4",
    title: "Corte Pixie Afro Moderno",
    category: "corte",
    description: "Nuca limpa e topo volumoso para um estilo irreverente e dinâmico.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600",
    stylistName: "Equipe Cachos ao Vento"
  },
  {
    id: "gal-5",
    title: "Reconstrução Capilar Intensiva",
    category: "reconstrucao",
    description: "Tratamento reconstrutor e nutritivo direto na fibra dos fios fragilizados.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600",
    stylistName: "Equipe Cachos ao Vento"
  },
  {
    id: "gal-6",
    title: "Cores Fantasia Vibrantes",
    category: "cores-fantasia",
    description: "Tons fantasia intensos integrados de modo artístico e seguro na coroa.",
    image: "https://images.unsplash.com/photo-1620331708837-5e8891515590?q=80&w=600",
    stylistName: "Equipe Cachos ao Vento"
  },
  {
    id: "gal-7",
    title: "Coloração Castanho Acobreado",
    category: "coloracoes",
    description: "Tom quente e radiante perfeito para iluminar o visual crespo de forma sutil.",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600",
    stylistName: "Equipe Cachos ao Vento"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    username: "afro_marilia",
    handle: "@marilia_raiz",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    rating: 5,
    comment: "Gente, o corte a seco do Cachos ao Vento salvou minha autoestima! A equipe entende o cabelo crespo como ninguém. Meu volume finalmente tem formato e leveza! 😍✨",
    date: "12 Mar 2026",
    imageUrl: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=400",
    likes: 132
  },
  {
    id: "rev-2",
    username: "gabriel_dos_cachos",
    handle: "@gabi_crespo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    rating: 5,
    comment: "Primeira vez que faço terapia capilar com argiloterapia e saí voando de leveza! O atendimento é focado na saúde capilar, ambiente maravilhoso, super recomendo o salão! Cachos ao Vento é incrível.",
    date: "02 Mai 2026",
    likes: 45
  },
  {
    id: "rev-3",
    username: "karin_gloria",
    handle: "@karinas_braids",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150",
    rating: 5,
    comment: "Minhas Knotless Braids impecáveis! A equipe foi super gentil, a tração na raiz foi nula, não senti nadinha de dor e o acabamento ficou divino! Resultado maravilhoso! 👑💛",
    date: "14 Mai 2026",
    imageUrl: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=400",
    likes: 218
  },
  {
    id: "rev-4",
    username: "beatriz_transicao",
    handle: "@bia_liberdade",
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=150",
    rating: 5,
    comment: "Faço meu cronograma capilar aqui toda semana. Elas cuidaram de mim desde o meu big chop. Amo esse acolhimento!",
    date: "20 Mai 2026",
    likes: 89
  }
];

export interface StoreUnit {
  id: "anchieta" | "petropolis";
  name: string;
  city: string;
  address: string;
  addressDetail: string;
  cep: string;
  phone: string;
  whatsappNumber: string;
  mapsUrl: string;
  startingPoints: {
    id: string;
    name: string;
    distance: string;
    duration: string;
    instructions: string;
  }[];
  mapCoordinates: {
    spotlightLabel: string;
    landmarks: { name: string; top: string; left: string }[];
    highlightPaths: Record<string, string>;
    spotlightTop: string;
    spotlightLeft: string;
  };
}

export const STORE_UNITS: StoreUnit[] = [
  {
    id: "anchieta",
    name: "Unidade Anchieta",
    city: "Anchieta - Rio de Janeiro / RJ",
    address: "Estrada do Engenho Novo, 340",
    addressDetail: "Anchieta, Rio de Janeiro - RJ",
    cep: "21635-010 (Próximo à linha ferroviária)",
    phone: "(21) 96634-8617",
    whatsappNumber: "5521966348617",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Estrada+do+Engenho+Novo,+340+-+Anchieta,+Rio+de+Janeiro+-+RJ,+21635-010",
    startingPoints: [
      {
        id: "trem-anchieta",
        name: "Estação de Trem Anchieta",
        distance: "400 metros",
        duration: "5 min (caminhando)",
        instructions: "Saia da estação de trem de Anchieta, siga à esquerda na Rua Aiuruoca e vire à direita na Estrada do Engenho Novo até o número 340."
      },
      {
        id: "via-light",
        name: "Via Light / Parque Anchieta",
        distance: "2.1 km",
        duration: "6 min (carro/Uber)",
        instructions: "Acesse a Estrada do Engenho Novo a partir da alça de acesso da Via Light ou Av. Nazaré, seguindo direto no sentido Anchieta."
      },
      {
        id: "praca-anchieta",
        name: "Praça de Anchieta",
        distance: "600 metros",
        duration: "8 min (caminhando)",
        instructions: "Atravesse a praça principal de Anchieta, siga pela Rua Lúcio José Filho e caminhe direto até cruzar com a Estrada do Engenho Novo."
      }
    ],
    mapCoordinates: {
      spotlightLabel: "Salão Cachos ao Vento - Anchieta",
      landmarks: [
        { name: "Estação Anchieta", top: "15%", left: "20%" },
        { name: "Praça de Anchieta", top: "85%", left: "20%" },
        { name: "Via Light Acesso", top: "45%", left: "80%" }
      ],
      highlightPaths: {
        "trem-anchieta": "M 20,20 L 20,70 L 70,70",
        "via-light": "M 80,45 L 70,70",
        "praca-anchieta": "M 20,85 L 20,70 L 70,70"
      },
      spotlightTop: "68%",
      spotlightLeft: "70%"
    }
  },
  {
    id: "petropolis",
    name: "Unidade Petrópolis",
    city: "Centro - Petrópolis / RJ",
    address: "Rua do Imperador, 820",
    addressDetail: "Centro, Petrópolis - RJ",
    cep: "25620-001 (Ao lado do Passeio Público)",
    phone: "(21) 99059-9641",
    whatsappNumber: "5521990599641",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+do+Imperador,+820+-+Centro,+Petropolis+-+RJ,+25620-001",
    startingPoints: [
      {
        id: "terminal-centro",
        name: "Terminal Centro Petrópolis",
        distance: "500 metros",
        duration: "6 min (caminhando)",
        instructions: "Saia do Terminal Rodoviário do Centro, contorne a Av. Koeler e vire na Rua do Imperador em direção ao número 820, ao lado das lojas principais."
      },
      {
        id: "quitandinha",
        name: "Quitandinha (Pórtico)",
        distance: "5.8 km",
        duration: "12 min (carro/Uber)",
        instructions: "Entre pelo pórtico do Quitandinha, desça pela Av. Ayrton Senna, continue na Rua Coronel Veiga e adentre a Rua do Imperador no Centro."
      },
      {
        id: "catedral-petropolis",
        name: "Catedral de São Pedro",
        distance: "650 metros",
        duration: "8 min (caminhando)",
        instructions: "Saia da Catedral de São Pedro de Alcântara, desça pela tradicional Av. Tiradentes e vire à esquerda acessando a Rua do Imperador."
      }
    ],
    mapCoordinates: {
      spotlightLabel: "Salão Cachos ao Vento - Petrópolis",
      landmarks: [
        { name: "Terminal Centro", top: "15%", left: "20%" },
        { name: "Catedral Histórica", top: "85%", left: "20%" },
        { name: "Pórtico Quitandinha", top: "45%", left: "80%" }
      ],
      highlightPaths: {
        "terminal-centro": "M 20,20 L 20,70 L 70,70",
        "quitandinha": "M 80,45 L 70,70",
        "catedral-petropolis": "M 20,85 L 20,70 L 70,70"
      },
      spotlightTop: "68%",
      spotlightLeft: "70%"
    }
  }
];
