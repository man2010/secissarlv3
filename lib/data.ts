export interface Project {
  id: string
  title: string
  category: 'construction' | 'genie-civil' | 'rehabilitation' | 'infrastructure'
  location: string
  date: string
  status: 'completed' | 'in-progress'
  image: string
  description: string
  client: string
  duration: string
  budget: string
  details: {
    scope: string[]
    challenges: string[]
    solutions: string[]
    results: string[]
  }
}

export interface Material {
  id: string
  name: string
  category: string
  description: string
  price: number
  unit: string
  stock: 'in-stock' | 'low-stock' | 'out-of-stock'
  image: string
  specifications: string[]
}

export interface RentalEquipment {
  id: string
  name: string
  category: string
  description: string
  pricePerDay: number
  features: string[]
  availability: 'available' | 'rented'
  image: string
  specifications: string[]
}

export interface Machinery {
  id: string
  name: string
  category: string
  description: string
  pricePerDay: number
  operator: boolean
  features: string[]
  image: string
  specifications: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  image: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Centre Commercial Teranga',
    category: 'construction',
    location: 'Dakar, Sénégal',
    date: 'Janvier 2023 - Décembre 2023',
    status: 'completed',
    image: '/modern-shopping-center-construction.jpg',
    description: 'Construction d\'un centre commercial moderne de 15,000m² avec espaces commerciaux, parking souterrain et équipements de dernière génération.',
    client: 'Groupe Teranga Retail',
    duration: '12 mois',
    budget: '2,5 milliards FCFA',
    details: {
      scope: [
        'Travaux de gros œuvre et structure béton armé',
        'Installation électrique et système de climatisation',
        'Aménagements intérieurs et finitions haut de gamme',
        'Parking souterrain de 200 places',
        'Systèmes de sécurité et surveillance'
      ],
      challenges: [
        'Terrain en zone urbaine dense nécessitant une logistique précise',
        'Délais serrés avec livraison en 12 mois',
        'Coordination de 15 corps de métiers différents'
      ],
      solutions: [
        'Mise en place d\'un planning optimisé avec méthode agile',
        'Préfabrication d\'éléments pour accélérer la construction',
        'Coordination hebdomadaire avec tous les intervenants'
      ],
      results: [
        'Livraison dans les délais avec inauguration réussie',
        '100% de conformité aux normes de construction',
        'Client satisfait avec extension du partenariat'
      ]
    }
  },
  {
    id: '2',
    title: 'Pont de l\'Autoroute à Péage',
    category: 'genie-civil',
    location: 'Thiès-Touba, Sénégal',
    date: 'Mars 2022 - Août 2023',
    status: 'completed',
    image: '/highway-bridge-construction.png',
    description: 'Construction d\'un pont autoroutier de 450m de long pour l\'autoroute à péage reliant Thiès à Touba, avec 4 voies de circulation.',
    client: 'Ministère des Infrastructures',
    duration: '17 mois',
    budget: '4,8 milliards FCFA',
    details: {
      scope: [
        'Fondations profondes avec pieux de 25m',
        'Structure en béton précontraint',
        'Installation de 6 piliers majeurs',
        'Système de drainage et d\'évacuation des eaux',
        'Équipements de sécurité routière'
      ],
      challenges: [
        'Traversée d\'une zone marécageuse',
        'Conditions météorologiques difficiles pendant la saison des pluies',
        'Maintien de la circulation pendant les travaux'
      ],
      solutions: [
        'Utilisation de pieux vissés pour stabilité optimale',
        'Planning adapté aux conditions climatiques',
        'Mise en place de déviations temporaires'
      ],
      results: [
        'Structure certifiée pour 100 ans de durabilité',
        'Réduction de 40% du temps de trajet',
        'Zéro accident pendant la construction'
      ]
    }
  },
  {
    id: '3',
    title: 'Complexe Résidentiel Les Almadies',
    category: 'construction',
    location: 'Les Almadies, Dakar',
    date: 'Septembre 2023 - En cours',
    status: 'in-progress',
    image: '/luxury-residential-complex.png',
    description: 'Développement d\'un complexe résidentiel haut standing comprenant 120 appartements, piscine, salle de sport et espaces verts.',
    client: 'Almadies Immobilier SA',
    duration: '24 mois',
    budget: '5,2 milliards FCFA',
    details: {
      scope: [
        '4 bâtiments de 8 étages chacun',
        'Appartements de standing de 2 à 5 pièces',
        'Infrastructures communes (piscine, gym, terrains de sport)',
        'Parkings souterrains et aériens',
        'Espaces verts paysagers de 3000m²'
      ],
      challenges: [
        'Site en bord de mer avec contraintes de corrosion',
        'Respect des normes environnementales strictes',
        'Coordination avec multiples sous-traitants'
      ],
      solutions: [
        'Utilisation de matériaux résistants à la corrosion marine',
        'Système de récupération des eaux pluviales',
        'BIM pour coordination 3D des corps de métiers'
      ],
      results: [
        '60% des appartements pré-vendus',
        'Certification environnementale en cours',
        'Avancement conforme au planning (75% complété)'
      ]
    }
  },
  {
    id: '4',
    title: 'Réhabilitation Hôpital Régional',
    category: 'rehabilitation',
    location: 'Saint-Louis, Sénégal',
    date: 'Juin 2023 - Novembre 2023',
    status: 'completed',
    image: '/hospital-renovation.jpg',
    description: 'Rénovation complète de l\'hôpital régional avec modernisation des équipements, réfection des bâtiments et mise aux normes sanitaires.',
    client: 'Région de Saint-Louis',
    duration: '6 mois',
    budget: '980 millions FCFA',
    details: {
      scope: [
        'Réfection complète de la toiture et façades',
        'Modernisation du système électrique',
        'Installation de climatisation centralisée',
        'Rénovation des blocs opératoires',
        'Mise aux normes sanitaires internationales'
      ],
      challenges: [
        'Maintien partiel de l\'activité hospitalière',
        'Travaux en milieu occupé sensible',
        'Respect strict des normes d\'hygiène'
      ],
      solutions: [
        'Phasage des travaux par zones',
        'Protocoles d\'hygiène renforcés',
        'Travaux de nuit pour zones critiques'
      ],
      results: [
        'Capacité d\'accueil augmentée de 30%',
        'Satisfaction des équipes médicales',
        'Certification aux normes OMS obtenue'
      ]
    }
  },
  {
    id: '5',
    title: 'Station d\'Épuration de Rufisque',
    category: 'infrastructure',
    location: 'Rufisque, Dakar',
    date: 'Avril 2022 - Juin 2023',
    status: 'completed',
    image: '/water-treatment-plant-construction.jpg',
    description: 'Construction d\'une station d\'épuration moderne pour le traitement de 50,000m³ d\'eau par jour, desservant la ville de Rufisque.',
    client: 'ONAS - Office National de l\'Assainissement',
    duration: '14 mois',
    budget: '3,7 milliards FCFA',
    details: {
      scope: [
        'Bassins de décantation et filtration',
        'Systèmes de traitement biologiques',
        'Installation de pompes et tuyauteries',
        'Bâtiments techniques et de contrôle',
        'Système de gestion automatisée'
      ],
      challenges: [
        'Terrain marécageux nécessitant travaux spéciaux',
        'Installation d\'équipements techniques complexes',
        'Respect des normes environnementales strictes'
      ],
      solutions: [
        'Consolidation des sols par injection',
        'Formation du personnel local',
        'Tests rigoureux avant mise en service'
      ],
      results: [
        'Traitement de 50,000m³/jour opérationnel',
        'Réduction de 80% de la pollution',
        'Prix d\'excellence environnementale 2023'
      ]
    }
  },
  {
    id: '6',
    title: 'Usine de Transformation Agro-alimentaire',
    category: 'construction',
    location: 'Mbour, Sénégal',
    date: 'Janvier 2024 - En cours',
    status: 'in-progress',
    image: '/modern-food-processing-plant.jpg',
    description: 'Construction d\'une usine moderne de transformation agro-alimentaire avec chambres froides, lignes de production et entrepôts.',
    client: 'Agro-Sénégal Industries',
    duration: '18 mois',
    budget: '6,5 milliards FCFA',
    details: {
      scope: [
        'Bâtiment industriel de 12,000m²',
        'Installation de 4 lignes de production',
        'Chambres froides de 2000m³',
        'Système de traitement des eaux',
        'Installations électriques industrielles'
      ],
      challenges: [
        'Normes sanitaires internationales strictes',
        'Installation d\'équipements spécialisés importés',
        'Formation du personnel technique'
      ],
      solutions: [
        'Partenariat avec experts internationaux',
        'Contrôle qualité à chaque étape',
        'Programme de formation intégré'
      ],
      results: [
        '50% des travaux complétés',
        'Installations conformes aux normes HACCP',
        'Création de 200 emplois prévue'
      ]
    }
  }
]

export const materials: Material[] = [
  {
    id: '1',
    name: 'Ciment Portland CEM II 42.5',
    category: 'Ciment',
    description: 'Ciment de haute qualité conforme aux normes NF. Idéal pour tous travaux de construction.',
    price: 65000,
    unit: 'Tonne',
    stock: 'in-stock',
    image: '/cement-bags-construction-site.jpg',
    specifications: [
      'Résistance à la compression: 42.5 MPa',
      'Conformité: Norme NF EN 197-1',
      'Conditionnement: Sacs de 50kg',
      'Stockage: 6 mois en conditions normales'
    ]
  },
  {
    id: '2',
    name: 'Fer à Béton Ø 8mm',
    category: 'Ferraillage',
    description: 'Fer à béton haute adhérence pour armatures. Barres de 12m de longueur.',
    price: 850,
    unit: 'Kg',
    stock: 'in-stock',
    image: '/steel-rebar-construction.jpg',
    specifications: [
      'Diamètre: 8mm',
      'Longueur: 12 mètres',
      'Nuance: FeE500',
      'Surface: Haute adhérence'
    ]
  },
  {
    id: '3',
    name: 'Sable de Construction',
    category: 'Granulats',
    description: 'Sable lavé et tamisé pour béton et mortier. Qualité premium garantie.',
    price: 18000,
    unit: 'm³',
    stock: 'in-stock',
    image: '/construction-sand-pile.jpg',
    specifications: [
      'Granulométrie: 0-5mm',
      'Lavé et tamisé',
      'Livraison: Par camion benne',
      'Origine: Carrières certifiées'
    ]
  },
  {
    id: '4',
    name: 'Gravier 15/25',
    category: 'Granulats',
    description: 'Gravier concassé calibré pour béton structural. Excellent rapport qualité-prix.',
    price: 22000,
    unit: 'm³',
    stock: 'in-stock',
    image: '/construction-gravel-aggregate.jpg',
    specifications: [
      'Calibre: 15/25mm',
      'Type: Concassé',
      'Utilisation: Béton structural',
      'Livraison: En vrac par camion'
    ]
  },
  {
    id: '5',
    name: 'Briques Creuses 15x20x30',
    category: 'Maçonnerie',
    description: 'Briques en terre cuite pour construction. Excellente isolation thermique.',
    price: 185,
    unit: 'Unité',
    stock: 'in-stock',
    image: '/clay-bricks-stacked.jpg',
    specifications: [
      'Dimensions: 15x20x30cm',
      'Matériau: Terre cuite',
      'Poids: 3.2kg',
      'Palette: 48 unités'
    ]
  },
  {
    id: '6',
    name: 'Parpaing Creux 20x20x50',
    category: 'Maçonnerie',
    description: 'Blocs de béton creux pour murs porteurs et cloisons. Fabrication locale.',
    price: 350,
    unit: 'Unité',
    stock: 'in-stock',
    image: '/concrete-blocks-cinder-blocks.jpg',
    specifications: [
      'Dimensions: 20x20x50cm',
      'Résistance: 5 MPa',
      'Poids: 12kg',
      'Palette: 70 unités'
    ]
  },
  {
    id: '7',
    name: 'Ciment Blanc',
    category: 'Ciment',
    description: 'Ciment blanc pour enduits et travaux de finition. Haute blancheur garantie.',
    price: 8500,
    unit: 'Sac 25kg',
    stock: 'low-stock',
    image: '/white-cement-bag.jpg',
    specifications: [
      'Conditionnement: Sac de 25kg',
      'Usage: Enduits et finitions',
      'Blancheur: >85%',
      'Séchage: Rapide'
    ]
  },
  {
    id: '8',
    name: 'Treillis Soudé ST25',
    category: 'Ferraillage',
    description: 'Treillis soudé pour dalles et planchers. Maille 15x15cm.',
    price: 12500,
    unit: 'Panneau 6x2.4m',
    stock: 'in-stock',
    image: '/welded-wire-mesh-construction.jpg',
    specifications: [
      'Dimensions: 6x2.4m',
      'Maille: 15x15cm',
      'Diamètre fil: 7mm',
      'Surface: 14.4m²'
    ]
  }
]

export const rentalEquipment: RentalEquipment[] = [
  {
    id: '1',
    name: 'Échafaudage Roulant 6m',
    category: 'Échafaudages',
    description: 'Échafaudage mobile avec plateforme de travail sécurisée. Idéal pour travaux en hauteur.',
    pricePerDay: 15000,
    features: [
      'Hauteur de travail: 6m',
      'Plateforme: 2x1.5m',
      'Roues avec freins',
      'Garde-corps sécurisés'
    ],
    availability: 'available',
    image: '/rolling-scaffolding-mobile.jpg',
    specifications: [
      'Charge max: 250kg',
      'Matériau: Aluminium',
      'Montage: Sans outils',
      'Livraison incluse'
    ]
  },
  {
    id: '2',
    name: 'Bétonnière 350L',
    category: 'Malaxage',
    description: 'Bétonnière thermique professionnelle pour préparation de béton et mortier.',
    pricePerDay: 8000,
    features: [
      'Capacité: 350 litres',
      'Moteur thermique',
      'Cuve basculante',
      'Roues de transport'
    ],
    availability: 'available',
    image: '/concrete-mixer-machine.jpg',
    specifications: [
      'Puissance: 5.5 CV',
      'Carburant: Essence',
      'Rendement: 250L par gâchée',
      'Maintenance incluse'
    ]
  },
  {
    id: '3',
    name: 'Marteau-Piqueur Électrique',
    category: 'Démolition',
    description: 'Marteau-piqueur 1500W avec accessoires pour démolition et perçage.',
    pricePerDay: 12000,
    features: [
      'Puissance: 1500W',
      'Force de frappe: 45 Joules',
      'Poignée anti-vibration',
      'Accessoires inclus'
    ],
    availability: 'rented',
    image: '/electric-jackhammer-demolition.jpg',
    specifications: [
      'Poids: 15kg',
      'Câble: 5 mètres',
      '3 burins inclus',
      'Mallette de transport'
    ]
  },
  {
    id: '4',
    name: 'Compacteur Vibrant',
    category: 'Compactage',
    description: 'Plaque vibrante pour compactage de sols et remblais. Moteur thermique robuste.',
    pricePerDay: 18000,
    features: [
      'Largeur de travail: 50cm',
      'Force centrifuge: 20kN',
      'Moteur Honda',
      'Réservoir 3.6L'
    ],
    availability: 'available',
    image: '/plate-compactor-vibratory.jpg',
    specifications: [
      'Poids: 95kg',
      'Vitesse: 25m/min',
      'Carburant: Essence',
      'Support technique inclus'
    ]
  },
  {
    id: '5',
    name: 'Groupe Électrogène 6.5kVA',
    category: 'Énergie',
    description: 'Générateur silencieux pour alimentation électrique de chantier.',
    pricePerDay: 25000,
    features: [
      'Puissance: 6.5 kVA',
      'Autonomie: 8 heures',
      'Niveau sonore: 65dB',
      'Démarrage électrique'
    ],
    availability: 'available',
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Moteur: 4 temps',
      'Réservoir: 25L',
      '2 prises 220V',
      'Protection surcharge'
    ]
  },
  {
    id: '6',
    name: 'Échelle Télescopique 4m',
    category: 'Accès',
    description: 'Échelle télescopique en aluminium, compacte et légère. Multiple positions.',
    pricePerDay: 5000,
    features: [
      'Hauteur max: 4 mètres',
      'Pliable et compacte',
      'Aluminium léger',
      'Stabilisateurs'
    ],
    availability: 'available',
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Poids: 12kg',
      'Charge max: 150kg',
      'Repliée: 80cm',
      'Certification EN131'
    ]
  }
]

export const machinery: Machinery[] = [
  {
    id: '1',
    name: 'Pelle Hydraulique 20T',
    category: 'Terrassement',
    description: 'Pelle hydraulique sur chenilles pour travaux de terrassement. Opérateur qualifié inclus.',
    pricePerDay: 150000,
    operator: true,
    features: [
      'Capacité godet: 1.0m³',
      'Profondeur de fouille: 6m',
      'Rayon d\'action: 8m',
      'Opérateur certifié inclus'
    ],
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Poids: 20 tonnes',
      'Puissance: 215HP',
      'Largeur chenilles: 60cm',
      'Carburant et maintenance inclus'
    ]
  },
  {
    id: '2',
    name: 'Bulldozer D6',
    category: 'Terrassement',
    description: 'Bulldozer puissant pour nivellement et poussée de matériaux. Performance exceptionnelle.',
    pricePerDay: 180000,
    operator: true,
    features: [
      'Puissance: 215HP',
      'Lame: 3.5m de large',
      'Ripper arrière',
      'Cabine climatisée'
    ],
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Poids opérationnel: 21T',
      'Traction: Sur chenilles',
      'GPS guidage inclus',
      'Opérateur + carburant inclus'
    ]
  },
  {
    id: '3',
    name: 'Chargeuse sur Pneus',
    category: 'Manutention',
    description: 'Chargeuse polyvalente pour chargement et transport de matériaux. Grande capacité de godet.',
    pricePerDay: 120000,
    operator: true,
    features: [
      'Capacité godet: 2.5m³',
      'Levage: 4 tonnes',
      '4 roues motrices',
      'Attaches rapides'
    ],
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Poids: 15T',
      'Puissance: 180HP',
      'Vitesse max: 40km/h',
      'Maintenance journalière incluse'
    ]
  },
  {
    id: '4',
    name: 'Compacteur Rouleau 12T',
    category: 'Compactage',
    description: 'Rouleau compresseur pour compactage de sols et enrobés. Finition professionnelle.',
    pricePerDay: 85000,
    operator: true,
    features: [
      'Poids: 12 tonnes',
      'Largeur de compactage: 2m',
      'Système d\'arrosage',
      'Vibration réglable'
    ],
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Type: Tandem',
      'Force centrifuge: 50kN',
      'Capacité réservoir eau: 500L',
      'Opérateur expérimenté inclus'
    ]
  },
  {
    id: '5',
    name: 'Grue Mobile 30T',
    category: 'Levage',
    description: 'Grue mobile télescopique pour levage lourd. Flèche de 35m avec opérateur certifié.',
    pricePerDay: 250000,
    operator: true,
    features: [
      'Capacité de levage: 30T',
      'Hauteur flèche: 35m',
      'Stabilisateurs hydrauliques',
      'Opérateur + élingueur inclus'
    ],
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Portée max: 28m',
      'Cabine sécurisée',
      'Certification à jour',
      'Assurance tous risques incluse'
    ]
  },
  {
    id: '6',
    name: 'Camion Benne 20m³',
    category: 'Transport',
    description: 'Camion benne basculant pour transport de matériaux. Chauffeur professionnel inclus.',
    pricePerDay: 75000,
    operator: true,
    features: [
      'Capacité: 20m³',
      'Charge utile: 15T',
      'Benne basculante',
      'Chauffeur expérimenté'
    ],
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Type: 6x4',
      'Dimensions benne: 5x2.3x1.5m',
      'Bâche de protection',
      'Carburant inclus dans tarif'
    ]
  },
  {
    id: '7',
    name: 'Finisseur d\'Enrobé',
    category: 'Revêtement',
    description: 'Finisseur thermique pour pose d\'enrobés. Largeur de pose réglable avec équipe spécialisée.',
    pricePerDay: 200000,
    operator: true,
    features: [
      'Largeur pose: 2.5-6m',
      'Capacité trémie: 10T',
      'Chauffage table',
      'Équipe de 3 personnes incluse'
    ],
    image: '/placeholder.svg?height=400&width=400',
    specifications: [
      'Épaisseur: 2-25cm',
      'Vitesse: 0-15m/min',
      'Automatisme nivellement',
      'Formation équipe client possible'
    ]
  }
]

export const services: Service[] = [
  {
    id: '1',
    title: 'Construction de Bâtiments',
    description: 'Construction complète de bâtiments résidentiels, commerciaux et industriels avec gestion de projet de A à Z.',
    icon: 'building',
    features: [
      'Études de faisabilité et conception',
      'Gestion complète du projet',
      'Gros œuvre et second œuvre',
      'Coordination des corps de métiers',
      'Respect des délais et budgets'
    ],
    benefits: [
      'Expertise de plus de 15 ans',
      'Équipe de 200+ professionnels',
      'Qualité certifiée ISO 9001',
      'Garantie décennale'
    ],
    image: '/placeholder.svg?height=600&width=800'
  },
  {
    id: '2',
    title: 'Génie Civil',
    description: 'Réalisation d\'ouvrages d\'art, ponts, routes et infrastructures de transport avec technologies de pointe.',
    icon: 'bridge',
    features: [
      'Études géotechniques approfondies',
      'Construction de ponts et viaducs',
      'Terrassements et fondations spéciales',
      'Réseaux VRD (Voirie et Réseaux Divers)',
      'Ouvrages hydrauliques'
    ],
    benefits: [
      'Bureau d\'études intégré',
      'Matériel de dernière génération',
      'Ingénieurs expérimentés',
      'Respect des normes internationales'
    ],
    image: '/placeholder.svg?height=600&width=800'
  },
  {
    id: '3',
    title: 'Réhabilitation',
    description: 'Rénovation et modernisation de bâtiments existants avec respect du patrimoine et mise aux normes.',
    icon: 'wrench',
    features: [
      'Diagnostic technique complet',
      'Renforcement de structures',
      'Mise aux normes énergétiques',
      'Réfection de façades',
      'Modernisation des installations'
    ],
    benefits: [
      'Préservation du patrimoine',
      'Solutions durables et écologiques',
      'Travaux en site occupé',
      'Amélioration des performances'
    ],
    image: '/placeholder.svg?height=600&width=800'
  },
  {
    id: '4',
    title: 'Travaux Publics',
    description: 'Aménagement d\'espaces publics, voirie urbaine et infrastructures communautaires pour améliorer le cadre de vie.',
    icon: 'road',
    features: [
      'Voirie et réseaux urbains',
      'Aménagements urbains',
      'Espaces verts et mobilier urbain',
      'Éclairage public',
      'Assainissement et drainage'
    ],
    benefits: [
      'Partenaire des collectivités',
      'Approche développement durable',
      'Gestion de grands projets',
      'Respect de l\'environnement'
    ],
    image: '/placeholder.svg?height=600&width=800'
  },
  {
    id: '5',
    title: 'Étude et Ingénierie',
    description: 'Bureau d\'études techniques offrant conception, calculs structures et assistance à maîtrise d\'ouvrage.',
    icon: 'blueprint',
    features: [
      'Études de conception architecturale',
      'Calculs de structures béton et métal',
      'Dimensionnement fondations',
      'Modélisation BIM 3D',
      'Assistance maîtrise d\'ouvrage'
    ],
    benefits: [
      'Ingénieurs agréés',
      'Logiciels professionnels',
      'Optimisation coûts/délais',
      'Conformité réglementaire'
    ],
    image: '/placeholder.svg?height=600&width=800'
  },
  {
    id: '6',
    title: 'Location et Vente',
    description: 'Vente de matériaux de construction et location d\'équipements et engins de chantier avec service complet.',
    icon: 'truck',
    features: [
      'Matériaux de construction certifiés',
      'Location d\'équipements professionnels',
      'Engins de chantier avec opérateurs',
      'Livraison sur site',
      'Maintenance et support technique'
    ],
    benefits: [
      'Stock permanent disponible',
      'Prix compétitifs',
      'Matériel récent et entretenu',
      'Service client réactif'
    ],
    image: '/placeholder.svg?height=600&width=800'
  }
]
