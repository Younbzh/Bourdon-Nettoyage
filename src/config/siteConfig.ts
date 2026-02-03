export const siteConfig = {
  // Informations générales
  name: "Le Griffon Glouton",
  tagline: "Street Food Coréenne à Saint-Brieuc",
  slogan: "Apporter un peu de Corée à Saint-Brieuc",
  description: "Restaurant de street food coréenne authentique au cœur de Saint-Brieuc. Découvrez nos spécialités maison : kimchi fait maison, bibimbap, bulgogi, tteokbokki et bien plus encore !",
  
  // Entreprise
  company: {
    owners: "Pauline et Nicolas Ravelet",
    team: ["Pauline Ravelet (39 ans)", "Nicolas Ravelet (40 ans)", "Djébril Chraa"],
    openingDate: "27 janvier 2025",
    concept: "Street food coréenne authentique et conviviale"
  },
  
  // Contact & Localisation
  contact: {
    address: {
      street: "29 Rue Charbonnerie",
      city: "Saint-Brieuc",
      postalCode: "22000",
      region: "Côtes-d'Armor, Bretagne",
      details: "À l'intersection des rues Jouallan, Saint-Guillaume et Charbonnerie",
      coordinates: {
        lat: 48.5138,
        lng: -2.7608
      }
    }
  },
  
  // Note Google
  rating: {
    score: 5.0,
    reviews: 1,
    platform: "Google"
  },
  
  // Notre Histoire
  about: {
    story: "Pauline et Nicolas Ravelet ont ouvert Le Griffon Glouton le 27 janvier 2025, un restaurant de street food coréenne au cœur de Saint-Brieuc. Passionnés par la cuisine coréenne et ses saveurs uniques, ils ont voulu partager leur amour pour cette gastronomie avec les Briochins. Épaulés par Djébril Chraa, ils proposent une cuisine authentique et conviviale dans une ambiance chaleureuse.",
    vision: "Notre mission : apporter un peu de Corée à Saint-Brieuc et faire découvrir les vraies saveurs de la street food coréenne, avec des produits frais et du kimchi fait maison.",
    values: [
      "Authenticité coréenne",
      "Produits frais",
      "Fait maison",
      "Convivialité",
      "Passion de la cuisine",
      "Accueil chaleureux"
    ]
  },
  
  // Spécialités Coréennes
  specialties: {
    signature: {
      name: "Kimchi Maison",
      description: "Notre fierté ! Kimchi traditionnel fermenté fait maison, préparé selon les recettes authentiques coréennes.",
      icon: "🥬"
    },
    categories: [
      {
        name: "Les Classiques",
        description: "Les incontournables de la cuisine coréenne",
        dishes: [
          {
            name: "Bibimbap",
            description: "Bol de riz garni de légumes sautés, viande marinée, œuf et sauce gochujang",
            icon: "🍚",
            popular: true
          },
          {
            name: "Bulgogi",
            description: "Fines tranches de bœuf marinées dans une sauce sucrée-salée et grillées",
            icon: "🥩",
            popular: true
          },
          {
            name: "Japchae",
            description: "Nouilles de patate douce sautées avec légumes et viande, assaisonnées au sésame",
            icon: "🍜"
          },
          {
            name: "Kimchi Jjigae",
            description: "Ragoût épicé au kimchi, tofu et viande",
            icon: "🍲"
          }
        ]
      },
      {
        name: "Street Food",
        description: "L'essence de la cuisine de rue coréenne",
        dishes: [
          {
            name: "Tteokbokki",
            description: "Gâteaux de riz cylindriques dans une sauce pimentée douce-épicée",
            icon: "🌶️",
            popular: true
          },
          {
            name: "Kimbap",
            description: "Rouleau de riz et légumes enroulé dans une feuille d'algue",
            icon: "🍱"
          },
          {
            name: "Korean Fried Chicken",
            description: "Poulet frit croustillant coréen avec sauce sucrée-épicée",
            icon: "🍗"
          },
          {
            name: "Mandu",
            description: "Raviolis coréens vapeur ou frits, garnis de viande et légumes",
            icon: "🥟"
          }
        ]
      },
      {
        name: "Banchan",
        description: "Accompagnements traditionnels",
        dishes: [
          {
            name: "Kimchi",
            description: "Chou fermenté épicé fait maison",
            icon: "🥬"
          },
          {
            name: "Namul",
            description: "Légumes assaisonnés variés",
            icon: "🥗"
          },
          {
            name: "Œuf roulé coréen",
            description: "Omelette roulée moelleuse",
            icon: "🥚"
          }
        ]
      }
    ]
  },
  
  // Ingrédients & Saveurs
  ingredients: {
    title: "Les Saveurs de Corée",
    description: "Découvrez les ingrédients authentiques qui font la richesse de notre cuisine",
    essentials: [
      {
        name: "Gochujang",
        description: "Pâte de piment rouge fermentée, base de nombreuses sauces",
        flavor: "Épicé & Umami"
      },
      {
        name: "Gochugaru",
        description: "Flocons de piment rouge coréen",
        flavor: "Épicé"
      },
      {
        name: "Doenjang",
        description: "Pâte de soja fermentée",
        flavor: "Salé & Umami"
      },
      {
        name: "Huile de sésame",
        description: "Huile aromatique signature",
        flavor: "Noisette"
      },
      {
        name: "Sauce soja coréenne",
        description: "Plus douce que la japonaise",
        flavor: "Salé & Doux"
      },
      {
        name: "Ail & Gingembre",
        description: "Aromates essentiels",
        flavor: "Puissant"
      }
    ]
  },
  
  // Ambiance & Expérience
  atmosphere: {
    style: "Street food coréen moderne",
    vibe: "Convivial et chaleureux",
    features: [
      "Décoration inspirée de Séoul",
      "Ambiance décontractée",
      "Service rapide et souriant",
      "Cuisine ouverte",
      "À emporter ou sur place"
    ],
    experience: "Plongez dans l'ambiance des rues de Séoul ! Notre espace chaleureux vous transporte directement en Corée, avec une cuisine ouverte où vous pouvez voir nos plats préparés sous vos yeux."
  },
  
  // Informations pratiques
  practical: {
    services: [
      "Sur place",
      "À emporter",
      "Préparation rapide",
      "Réservation conseillée",
      "Options végétariennes"
    ],
    payment: "CB, Espèces, Ticket Restaurant",
    accessibility: "Accessible PMR"
  },
  
  // Culture Coréenne
  culture: {
    title: "La Culture Coréenne dans votre Assiette",
    intro: "La cuisine coréenne, c'est bien plus que de la nourriture : c'est un art de vivre, un partage, une explosion de saveurs.",
    principles: [
      {
        name: "Équilibre des 5 saveurs",
        description: "Sucré, salé, amer, acide et épicé s'harmonisent dans chaque plat"
      },
      {
        name: "Partage et convivialité",
        description: "Les plats se partagent au centre de la table, comme en Corée"
      },
      {
        name: "Fermentation",
        description: "Le kimchi et les pâtes fermentées sont au cœur de la gastronomie coréenne"
      },
      {
        name: "Fraîcheur",
        description: "Des légumes croquants et des herbes fraîches à chaque repas"
      }
    ],
    funFacts: [
      "Le kimchi est inscrit au patrimoine de l'UNESCO depuis 2013",
      "La Corée possède plus de 200 variétés de kimchi",
      "Le bibimbap signifie littéralement 'riz mélangé'",
      "Les Coréens utilisent des baguettes en métal"
    ]
  },
  
  // Localisation Saint-Brieuc
  location: {
    neighborhood: "Centre-ville de Saint-Brieuc",
    description: "Idéalement situé à l'intersection des rues Jouallan, Saint-Guillaume et Charbonnerie, Le Griffon Glouton est au cœur du centre historique de Saint-Brieuc.",
    nearby: [
      "Cathédrale Saint-Étienne : 5 min à pied",
      "Place du Chai : 3 min à pied",
      "Parking Gare : 7 min à pied",
      "Arrêts de bus à proximité"
    ],
    access: "Facilement accessible à pied depuis le centre-ville et les parkings principaux."
  },
  
  // SEO
  seo: {
    keywords: [
      "restaurant coréen Saint-Brieuc",
      "street food coréenne Saint-Brieuc",
      "Griffon Glouton",
      "kimchi Saint-Brieuc",
      "bibimbap Saint-Brieuc",
      "bulgogi Bretagne",
      "cuisine coréenne Côtes-d'Armor",
      "tteokbokki Saint-Brieuc",
      "restaurant asiatique Saint-Brieuc",
      "food coréen 22000",
      "Pauline Nicolas Ravelet",
      "rue Charbonnerie restaurant"
    ],
    og: {
      title: "Le Griffon Glouton - Street Food Coréenne à Saint-Brieuc | Kimchi Maison",
      description: "Découvrez la vraie street food coréenne au cœur de Saint-Brieuc ! Kimchi maison, bibimbap, bulgogi, tteokbokki... Ouvert depuis janvier 2025. 29 rue Charbonnerie."
    }
  },
  
  // Call to Action
  cta: {
    primary: "Venez découvrir nos saveurs !",
    secondary: "Réservation conseillée",
    tertiary: "Emportez la Corée chez vous"
  }
};