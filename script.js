// Spoonacular API Key
const SPOONACULAR_API_KEY = "3d44c97acca24d7aa13e8b0630862d9f";

// Local South Indian recipes
const recipes = [
  {
    id: 1,
    name: "Masala Dosa",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Medium",
    ingredients: ["rice", "urad dal", "potatoes", "onions", "mustard seeds", "curry leaves", "turmeric", "oil"],
    steps: [
      "Soak rice and urad dal separately for 4-6 hours",
      "Grind into smooth batter and ferment overnight", 
      "Boil potatoes and mash with spices",
      "Heat pan, pour batter and spread thin",
      "Add potato filling and fold dosa",
      "Serve hot with chutney and sambar"
    ],
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
    servings: 4,
    calories: 250
  },
  {
    id: 2,
    name: "Sambar",
    type: "South Indian", 
    category: "Vegetarian",
    cookingTime: "25 minutes",
    difficulty: "Easy",
    ingredients: ["toor dal", "tamarind", "tomatoes", "onions", "drumsticks", "okra", "turmeric", "sambar powder"],
    steps: [
      "Cook toor dal until soft and mushy",
      "Soak tamarind and extract juice",
      "Boil vegetables in tamarind water",
      "Add cooked dal and sambar powder",
      "Temper with mustard seeds and curry leaves",
      "Simmer for 10 minutes and serve"
    ],
    image: "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?w=500",
    servings: 6,
    calories: 180
  },
  {
    id: 3,
    name: "Coconut Rice",
    type: "South Indian",
    category: "Vegetarian", 
    cookingTime: "20 minutes",
    difficulty: "Easy",
    ingredients: ["rice", "coconut", "mustard seeds", "curry leaves", "green chilies", "ginger", "cashews", "oil"],
    steps: [
      "Cook rice and let it cool",
      "Grate fresh coconut or use desiccated",
      "Heat oil, add mustard seeds and curry leaves",
      "Add ginger, chilies and cashews",
      "Mix coconut with rice and tempering",
      "Garnish with fresh curry leaves"
    ],
    image: "https://media.istockphoto.com/id/651030312/photo/coconut-rice-south-indian-one-pot-meal-using-leftover-rice-coconut-and-nuts.jpg?s=612x612&w=0&k=20&c=zBADxbPWwtA4BhqbmW0-a1lNaI77sSaC9afFMU-u8Tc=",
    servings: 4,
    calories: 320
  },
  {
    id: 4,
    name: "Rasam",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "15 minutes", 
    difficulty: "Easy",
    ingredients: ["tomatoes", "tamarind", "rasam powder", "turmeric", "mustard seeds", "cumin", "curry leaves", "coriander"],
    steps: [
      "Extract tamarind juice and boil",
      "Add chopped tomatoes and spices",
      "Simmer until tomatoes break down",
      "Temper with mustard seeds and cumin",
      "Add curry leaves and coriander",
      "Serve hot with rice"
    ],
    image: "https://media.istockphoto.com/id/1391459257/photo/south-indian-famous-rasam-sambar-served-in-a-traditional-mud-pot-closeup-with-selective-focus.jpg?s=612x612&w=0&k=20&c=_v5h_EG3m-UARM5HI8BxjaNg1INlDlLJ8nWCiUwLOG4=",
    servings: 4,
    calories: 60
  },
  {
    id: 5,
    name: "Hyderabadi Biryani",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "90 minutes",
    difficulty: "Hard",
    ingredients: ["basmati rice", "mutton", "yogurt", "onions", "mint", "saffron", "ghee", "biryani masala", "cashews"],
    steps: [
      "Marinate mutton with yogurt and spices for 2 hours",
      "Fry onions until golden brown",
      "Cook rice until 70% done",
      "Layer marinated mutton and rice",
      "Add fried onions, mint and saffron",
      "Cook on dum for 45 minutes"
    ],
    image: "https://media.istockphoto.com/id/1407172002/photo/indian-spicy-mutton-biryani-with-raita-and-gulab-jamun-served-in-a-dish-side-view-on-grey.jpg?s=612x612&w=0&k=20&c=sYldtF2E_cSuYioPtcmM15arsnSs2mIgpuAKUDuuGoI=",
    servings: 6,
    calories: 450
  },
  {
    id: 6,
    name: "Chettinad Chicken",
    type: "South Indian",
    category: "Non-Vegetarian", 
    cookingTime: "40 minutes",
    difficulty: "Medium",
    ingredients: ["chicken", "coconut", "red chilies", "coriander seeds", "fennel", "onions", "tomatoes", "curry leaves"],
    steps: [
      "Dry roast and grind chettinad spices",
      "Marinate chicken with turmeric and salt",
      "Sauté onions and tomatoes",
      "Add ground spice paste and cook",
      "Add chicken and simmer until done",
      "Garnish with curry leaves"
    ],
    image: "https://media.istockphoto.com/id/1156501972/photo/spicy-chicken-chettinad-in-a-clay-pot.jpg?s=612x612&w=0&k=20&c=dmxl9MnS66dIofMYDK64sZIVK1kwdkccirZtVjspicc=",
    servings: 4,
    calories: 380
  },
  {
    id: 7,
    name: "Idli",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "20 minutes",
    difficulty: "Medium",
    ingredients: ["rice", "urad dal", "fenugreek seeds", "salt"],
    steps: [
      "Soak rice and urad dal separately for 4 hours",
      "Grind into smooth batter",
      "Ferment batter overnight",
      "Pour into idli moulds", 
      "Steam for 10-12 minutes",
      "Serve hot with chutney and sambar"
    ],
    image: "https://media.istockphoto.com/id/182491284/photo/idli-sambhar-and-chutney-south-indian-dish-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=LCAfM8HrWBZsRZHTjAXzYAWvG63oDagBimAMXXq-zFk=",
    servings: 8,
    calories: 120
  },
  {
    id: 8,
    name: "Vada",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "25 minutes",
    difficulty: "Medium", 
    ingredients: ["urad dal", "green chilies", "ginger", "curry leaves", "black pepper", "oil"],
    steps: [
      "Soak urad dal for 3 hours",
      "Grind into fluffy batter",
      "Add spices and mix well",
      "Shape into donuts",
      "Deep fry until golden brown",
      "Serve hot with chutney"
    ],
    image: "https://images.unsplash.com/photo-1730191843435-073792ba22bc?w=500",
    servings: 6,
    calories: 200
  },
  {
    id: 9,
    name: "Bisi Bele Bath",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "35 minutes",
    difficulty: "Medium",
    ingredients: ["rice", "toor dal", "vegetables", "tamarind", "sambar powder", "ghee", "cashews", "curry leaves"],
    steps: [
      "Cook rice and dal together",
      "Add mixed vegetables and cook",
      "Extract tamarind juice",
      "Add tamarind water and sambar powder", 
      "Simmer until thick consistency",
      "Temper with ghee and cashews"
    ],
    image: "https://media.istockphoto.com/id/1255857672/photo/sambar-rice-south-indian-food.jpg?s=612x612&w=0&k=20&c=VhlworUvKfttcWGMK3D4KSJYh5ycckuy69N6GrTQIa4=",
    servings: 5,
    calories: 280
  },
  {
    id: 10,
    name: "Appam",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Medium",
    ingredients: ["rice", "coconut", "yeast", "sugar", "salt"],
    steps: [
      "Soak rice for 4 hours and grind with coconut",
      "Add yeast and sugar to batter",
      "Ferment for 8 hours",
      "Heat appam pan",
      "Pour batter and swirl to form bowl shape",
      "Cover and cook until edges are crispy"
    ],
    image: "https://media.istockphoto.com/id/2153931054/photo/aappam-with-sambar-on-a-wooden-table-appam-or-palappam-is-one-of-the-most-popular-and.jpg?s=612x612&w=0&k=20&c=dq4XbY3unH8hVaYS4H7G2pmrqssDoS4BY7c2MnAWreU=",
    servings: 6,
    calories: 150
  },
  
  // Additional South Indian Non-Vegetarian Recipes
  {
    id: 11,
    name: "Chicken Sukka",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "45 minutes",
    difficulty: "Medium",
    ingredients: ["chicken", "coconut", "red chilies", "coriander seeds", "onions", "ginger", "garlic", "curry leaves", "oil"],
    steps: [
      "Cut chicken into small pieces and marinate",
      "Dry roast coconut, red chilies and spices",
      "Grind roasted ingredients into paste",
      "Cook chicken with onions and ginger-garlic",
      "Add spice paste and cook until dry",
      "Garnish with curry leaves and serve"
    ],
    image: "https://media.istockphoto.com/id/476859023/photo/chicken-sukka-a-preparation-from-mangalore.jpg?s=612x612&w=0&k=20&c=ttKSZVe2StcsvUX96cL8bUD2338zPlrdPkEd8vpMVmQ=",
    servings: 4,
    calories: 320
  },
  {
    id: 12,
    name: "Fish Curry (Meen Curry)",
    type: "South Indian", 
    category: "Non-Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Easy",
    ingredients: ["fish", "coconut milk", "tamarind", "onions", "tomatoes", "green chilies", "turmeric", "curry leaves"],
    steps: [
      "Clean and cut fish into pieces",
      "Extract thick coconut milk",
      "Soak tamarind and extract juice", 
      "Cook onions and tomatoes with spices",
      "Add fish and tamarind water",
      "Pour coconut milk and simmer gently"
    ],
    image: "https://media.istockphoto.com/id/1253234511/photo/meen-vattichathu-or-pattichathu-sardine-fish-cooked-traditional-hot-and-spicy-fish-curry.jpg?s=612x612&w=0&k=20&c=kp0LT5HUZvaQWQTdSL8HLTjuQeiE3KizM9sCQJe2AJc=",
    servings: 4,
    calories: 280
  },
  {
    id: 13,
    name: "Mutton Kuzhambu",
    type: "South Indian",
    category: "Non-Vegetarian", 
    cookingTime: "60 minutes",
    difficulty: "Medium",
    ingredients: ["mutton", "tamarind", "sambar powder", "onions", "tomatoes", "coconut", "curry leaves", "oil"],
    steps: [
      "Cut mutton into medium pieces",
      "Pressure cook mutton with basic spices",
      "Extract tamarind juice",
      "Grind coconut with spices",
      "Cook onions, add mutton and tamarind",
      "Add ground paste and simmer"
    ],
    image: "https://media.istockphoto.com/id/1210900215/photo/indian-beef-curry.jpg?s=612x612&w=0&k=20&c=5k7xrkbtS9CxwMP2rzpEAw-q9eoN5ufzGgSHTfJWqbc=",
    servings: 5,
    calories: 450
  },
  {
    id: 14,
    name: "Prawn Curry",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "25 minutes", 
    difficulty: "Easy",
    ingredients: ["prawns", "coconut milk", "onions", "tomatoes", "green chilies", "ginger", "turmeric", "coriander powder"],
    steps: [
      "Clean and devein prawns",
      "Cook onions until golden brown",
      "Add tomatoes and spices",
      "Add prawns and cook for 5 minutes",
      "Pour coconut milk and simmer",
      "Garnish with cilantro"
    ],
    image: "https://media.istockphoto.com/id/652892844/photo/kerala-style-prawn-masala-at-thekkady-kerala-india.jpg?s=612x612&w=0&k=20&c=ddq-vUYph9JlWzjIh0ma9wt-rlYZ8zRjYiZSRVp5mtk=",
    servings: 4,
    calories: 250
  },
  {
    id: 15,
    name: "Chicken 65",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Medium", 
    ingredients: ["chicken", "yogurt", "red chili powder", "ginger-garlic paste", "curry leaves", "green chilies", "corn flour", "oil"],
    steps: [
      "Cut chicken into bite-sized pieces",
      "Marinate with yogurt and spices for 30 minutes",
      "Mix corn flour for coating", 
      "Deep fry chicken until crispy",
      "Temper with curry leaves and chilies",
      "Toss fried chicken with tempering"
    ],
    image: "https://media.istockphoto.com/id/1322439549/photo/indian-chicken-fry.jpg?s=612x612&w=0&k=20&c=dLAnF0_49NR9X_9VX8b0TXl5mFyZjBKcY6DmPLqnxA8=",
    servings: 4,
    calories: 380
  },
  {
    id: 16,
    name: "Fish Fry",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    ingredients: ["fish", "turmeric", "chili powder", "coriander powder", "ginger-garlic paste", "lemon juice", "oil", "curry leaves"],
    steps: [
      "Clean fish and make shallow cuts",
      "Marinate with all spices and lemon juice",
      "Let it rest for 15 minutes",
      "Heat oil in pan",
      "Fry fish until golden on both sides",
      "Garnish with curry leaves"
    ],
    image: "https://media.istockphoto.com/id/980462170/photo/roasted-sea-food.jpg?s=612x612&w=0&k=20&c=ECaOhFZxHHxNVicNgoMSfFVByzynmikd9MOMFLLoC-M=", 
    servings: 3,
    calories: 300
  },
  {
    id: 17,
    name: "Mutton Biryani",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "120 minutes",
    difficulty: "Hard",
    ingredients: ["mutton", "basmati rice", "yogurt", "onions", "mint", "saffron", "ghee", "garam masala", "cashews"],
    steps: [
      "Marinate mutton with yogurt and spices overnight",
      "Cook mutton until 80% done",
      "Fry onions until crispy brown",
      "Parboil rice with whole spices",
      "Layer mutton and rice alternately", 
      "Cook on dum for 60 minutes"
    ],
    image: "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=0&k=20&c=ueFrghYZuKAty-rFVe5dtMtNIbn0jaUsSvCUwTVOmd8=",
    servings: 6,
    calories: 520
  },
  {
    id: 18,
    name: "Andhra Chicken Curry",
    type: "South Indian", 
    category: "Non-Vegetarian",
    cookingTime: "40 minutes",
    difficulty: "Medium",
    ingredients: ["chicken", "red chilies", "tamarind", "onions", "tomatoes", "ginger-garlic", "fenugreek seeds", "curry leaves"],
    steps: [
      "Cut chicken into medium pieces",
      "Dry roast red chilies and fenugreek",
      "Grind with tamarind to make paste",
      "Cook chicken with onions and tomatoes",
      "Add ground paste and simmer",
      "Temper with curry leaves"
    ],
    image: "https://media.istockphoto.com/id/2207303903/photo/andhra-style-chicken-chilli.jpg?s=612x612&w=0&k=20&c=f2yrHuc44ddWFzVBbh-cShQk35sSTAczq4UhccLJckI=",
    servings: 4,
    calories: 340
  },
  {
    id: 19,
    name: "Koliwada Prawns", 
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "25 minutes",
    difficulty: "Easy",
    ingredients: ["prawns", "corn flour", "all-purpose flour", "ginger-garlic paste", "red chili powder", "ajwain", "lemon juice", "oil"],
    steps: [
      "Clean and marinate prawns with spices",
      "Make batter with flours and spices",
      "Coat prawns in batter",
      "Deep fry until golden and crispy",
      "Drain on absorbent paper",
      "Serve hot with lemon wedges"
    ],
    image: "https://media.istockphoto.com/id/2171888319/photo/fried-shrimps-with-parsley-fried-green-chili-pepper-and-lemon-crunchy-fried-peeled-shrimps.jpg?s=612x612&w=0&k=20&c=3sPJ-4QT7Qb9L8VPJujyQKgZ3k1HlQ9DI9m9tWn-6e4=",
    servings: 4,
    calories: 290
  },
  {
    id: 20,
    name: "Mutton Pepper Fry",
    type: "South Indian",
    category: "Non-Vegetarian", 
    cookingTime: "50 minutes",
    difficulty: "Medium",
    ingredients: ["mutton", "black pepper", "onions", "ginger-garlic paste", "curry leaves", "coconut oil", "fennel powder"],
    steps: [
      "Cut mutton into small pieces",
      "Pressure cook mutton until tender",
      "Heat coconut oil in heavy-bottomed pan",
      "Add onions and cook until brown",
      "Add cooked mutton and pepper powder",
      "Fry until moisture evaporates and serve"
    ],
    image: "https://media.istockphoto.com/id/667661308/photo/chicken-manchurian-indian-spicy-curry-food.jpg?s=612x612&w=0&k=20&c=OXuIx6mQOe1-J2OOpMHAnmmf9jWQG9f8-Tc_X0vi8kM=",
    servings: 4,
    calories: 420
  },
  {
    id: 21,
    name: "Chicken Ghee Roast",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "35 minutes",
    difficulty: "Medium",
    ingredients: ["chicken", "ghee", "red chilies", "garlic", "tamarind", "jaggery", "curry leaves", "onions"],
    steps: [
      "Marinate chicken with basic spices",
      "Dry roast red chilies and grind with tamarind",
      "Cook chicken in ghee until done",
      "Add ground paste and jaggery",
      "Roast until chicken is well coated",
      "Garnish with curry leaves"
    ],
    image: "https://media.istockphoto.com/id/1363463845/photo/chicken-ghee-roast-cooked-in-a-pan.jpg?s=612x612&w=0&k=20&c=7XbaHko0J4iRBLz5bXAqrcaMt5mjYbmsrNbP8Kx31yY=",
    servings: 4,
    calories: 360
  },
  {
    id: 22,
    name: "Fish Pulusu",
    type: "South Indian",
    category: "Non-Vegetarian", 
    cookingTime: "30 minutes",
    difficulty: "Easy",
    ingredients: ["fish", "tamarind", "onions", "tomatoes", "green chilies", "turmeric", "coriander seeds", "fenugreek"],
    steps: [
      "Clean fish and apply turmeric and salt",
      "Extract thick tamarind juice",
      "Dry roast coriander and fenugreek seeds",
      "Cook onions and tomatoes with spices", 
      "Add fish and tamarind water",
      "Simmer until fish is cooked through"
    ],
    image: "https://media.istockphoto.com/id/1266080300/photo/spicy-fish-curry-popular-indian-seafood-served-with-rice.jpg?s=612x612&w=0&k=20&c=isCLo9qZkO1aUnS7xNIxifzhoMOjjqUtvpoF6vVZJfI=",
    servings: 4,
    calories: 220
  },
  {
    id: 23,
    name: "Chicken Korma",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "45 minutes",
    difficulty: "Medium",
    ingredients: ["chicken", "coconut", "cashews", "onions", "yogurt", "ginger-garlic", "garam masala", "mint leaves"],
    steps: [
      "Marinate chicken with yogurt and spices",
      "Grind coconut and cashews to paste",
      "Cook onions until golden brown",
      "Add chicken and cook until done",
      "Pour coconut-cashew paste",
      "Simmer and garnish with mint"
    ],
    image: "https://media.istockphoto.com/id/1124973765/photo/chicken-curry.jpg?s=612x612&w=0&k=20&c=YTjPGlfvT7pHiy1RX8ZcoizSdUEE9ocOAEF65H4QgJA=",
    servings: 5,
    calories: 390
  },
  {
    id: 24,
    name: "Mutton Chukka",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "55 minutes", 
    difficulty: "Medium",
    ingredients: ["mutton", "onions", "coconut", "red chilies", "coriander seeds", "fennel seeds", "curry leaves", "oil"],
    steps: [
      "Cut mutton into small cubes",
      "Pressure cook mutton with basic spices",
      "Dry roast coconut and spices, then grind",
      "Cook onions until deep brown",
      "Add cooked mutton and ground paste",
      "Fry until dry and aromatic"
    ],
    image: "https://media.istockphoto.com/id/1957912208/photo/mysore-mutton-sukka-bhuna-karahi-served-in-dish-isolated-on-wooden-table-top-view-of-indian.jpg?s=612x612&w=0&k=20&c=ZOLw3pyeV07lAyfdjm3kfJZXOoU05wecYmTmuIoyuH4=", 
    servings: 4,
    calories: 480
  },
  {
    id: 25,
    name: "Prawn Masala",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Easy",
    ingredients: ["prawns", "onions", "tomatoes", "coconut milk", "garam masala", "ginger-garlic", "curry leaves", "oil"],
    steps: [
      "Clean prawns and marinate lightly",
      "Cook onions until translucent",
      "Add tomatoes and cook until soft",
      "Add garam masala and cook spices",
      "Add prawns and coconut milk", 
      "Simmer until prawns are cooked"
    ],
    image: "https://media.istockphoto.com/id/482470253/photo/curry-shrimp.jpg?s=612x612&w=0&k=20&c=W0xMswilB-239imqrxA5u3ksSNS0uy76xVUeMYZigys=",
    servings: 4,
    calories: 270
  },
  {
    id: 26,
    name: "Chicken Curry (Kerala Style)",
    type: "South Indian", 
    category: "Non-Vegetarian",
    cookingTime: "40 minutes",
    difficulty: "Medium",
    ingredients: ["chicken", "coconut milk", "coconut oil", "shallots", "ginger", "green chilies", "curry leaves", "garam masala"],
    steps: [
      "Cut chicken and marinate with spices",
      "Heat coconut oil and add curry leaves",
      "Cook shallots and ginger until aromatic",
      "Add chicken and cook until done",
      "Pour coconut milk and bring to boil",
      "Simmer until curry thickens"
    ],
    image: "https://media.istockphoto.com/id/666553456/photo/chicken-tikka-jalfrezi-indian-food.jpg?s=612x612&w=0&k=20&c=BBvn4kLOWMQzYhECo8f3m1QnPWIIJN44wn7afZReViY=",
    servings: 4,
    calories: 350
  },
  {
    id: 27,
    name: "Fish Moilee",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "25 minutes",
    difficulty: "Easy",
    ingredients: ["fish", "coconut milk", "ginger", "green chilies", "shallots", "turmeric", "curry leaves", "coconut oil"],
    steps: [
      "Clean fish and apply turmeric",
      "Heat coconut oil in pan",
      "Add curry leaves and sliced ginger",
      "Cook shallots and green chilies",
      "Add fish pieces gently",
      "Pour coconut milk and simmer"
    ],
    image: "https://media.istockphoto.com/id/1331416433/photo/milkfish-and-traditional-seasoning-sauce.jpg?s=612x612&w=0&k=20&c=A4TxeOw-mI4XfBLoffUBNkPbWDFthDMPqPtZzIcaBdY=",
    servings: 4,
    calories: 240
  },
  {
    id: 28,
    name: "Chicken Varuval",
    type: "South Indian",
    category: "Non-Vegetarian", 
    cookingTime: "35 minutes",
    difficulty: "Medium",
    ingredients: ["chicken", "coconut", "red chilies", "coriander seeds", "onions", "ginger-garlic", "curry leaves", "oil"],
    steps: [
      "Cut chicken into medium pieces",
      "Dry roast coconut with red chilies and coriander",
      "Grind roasted ingredients coarsely",
      "Cook chicken with onions and ginger-garlic",
      "Add ground masala and mix well",
      "Cook until chicken is well-coated and dry"
    ],
    image: "https://media.istockphoto.com/id/611084716/photo/dried-style-chicken-varuval-with-herbs-in-stew.jpg?s=612x612&w=0&k=20&c=ibP1wSvcTT1WnqZ7yKp9NKPYTMsiz8VHNJMluGMhi0Q=",
    servings: 4,
    calories: 330
  },
  {
    id: 29,
    name: "Mutton Curry",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "75 minutes",
    difficulty: "Medium",
    ingredients: ["mutton", "onions", "tomatoes", "coconut", "red chilies", "coriander seeds", "garam masala", "curry leaves"],
    steps: [
      "Cut mutton into medium pieces and wash",
      "Grind coconut with red chilies and coriander",
      "Pressure cook mutton with basic spices",
      "Cook onions and tomatoes until soft",
      "Add ground paste and cooked mutton",
      "Simmer until gravy thickens perfectly"
    ],
    image: "https://media.istockphoto.com/id/1163676678/photo/lamb-curry-lamb-vindaloo-in-a-bowl-on-white-background.jpg?s=612x612&w=0&k=20&c=wGexhfqg5Qx274Dv7UxLmuN7H1zetH9yDAqUU9KV7e4=",
    servings: 5,
    calories: 460
  },
  {
    id: 30,
    name: "Nandu Curry (Crab Curry)",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "40 minutes", 
    difficulty: "Medium",
    ingredients: ["crab", "coconut milk", "tamarind", "onions", "tomatoes", "red chili powder", "turmeric", "curry leaves"],
    steps: [
      "Clean crabs and cut into pieces",
      "Extract tamarind juice", 
      "Cook onions and tomatoes with spices",
      "Add crab pieces and mix well",
      "Pour tamarind water and cook covered",
      "Add coconut milk and simmer gently"
    ],
    image: "https://media.istockphoto.com/id/1034816230/photo/crabs-fried-with-curry-in-pan-cooking-topview.jpg?s=612x612&w=0&k=20&c=tfW7MAjkktH6vh37LmAaZ6nSS56Q05C1N-NmFW45KyE=",
    servings: 4,
    calories: 310
  },

  // Additional South Indian Vegetarian Recipes
  {
    id: 31,
    name: "Rava Dosa",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    ingredients: ["rava", "rice flour", "all-purpose flour", "onions", "green chilies", "ginger", "curry leaves", "cumin seeds"],
    steps: [
      "Mix rava, rice flour and all-purpose flour",
      "Add chopped onions, chilies and ginger",
      "Make thin batter with water and salt",
      "Heat pan and spread batter thinly",
      "Drizzle oil around edges",
      "Serve crispy dosa hot with chutney"
    ],
    image: "https://images.unsplash.com/photo-1743615467204-8fdaa85ff2db?w=500",
    servings: 4,
    calories: 180
  },
  {
    id: 32,
    name: "Lemon Rice",
    type: "South Indian", 
    category: "Vegetarian",
    cookingTime: "15 minutes",
    difficulty: "Easy",
    ingredients: ["rice", "lemons", "turmeric", "mustard seeds", "urad dal", "chana dal", "curry leaves", "peanuts"],
    steps: [
      "Cook rice and let it cool completely",
      "Extract fresh lemon juice",
      "Heat oil, add mustard seeds and dals",
      "Add curry leaves and peanuts",
      "Mix turmeric with rice",
      "Add lemon juice and tempering"
    ],
    image: "https://media.istockphoto.com/id/670526200/photo/poha-indian-snacks.jpg?s=612x612&w=0&k=20&c=iEVKSfRzmcHxPIz1fKQBNzmcRpLbseh5vjXaRVckRZA=",
    servings: 4,
    calories: 220
  },
  {
    id: 33,
    name: "Pongal",
    type: "South Indian",
    category: "Vegetarian", 
    cookingTime: "25 minutes",
    difficulty: "Easy",
    ingredients: ["rice", "moong dal", "ghee", "black pepper", "cumin", "ginger", "curry leaves", "cashews"],
    steps: [
      "Wash rice and moong dal together",
      "Cook in pressure cooker until soft",
      "Heat ghee in pan",
      "Add pepper, cumin and ginger",
      "Add cooked rice-dal mixture",
      "Garnish with curry leaves and cashews"
    ],
    image: "https://media.istockphoto.com/id/482366402/photo/pongal.jpg?s=612x612&w=0&k=20&c=tUYfVMQ-xj6H4LJ1wOj6SQmRqTV4wxeTVNRSHaiqzNg=",
    servings: 4,
    calories: 280
  },
  {
    id: 34,
    name: "Upma",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "20 minutes",
    difficulty: "Easy", 
    ingredients: ["rava", "onions", "green chilies", "ginger", "mustard seeds", "urad dal", "curry leaves", "vegetables"],
    steps: [
      "Dry roast rava until aromatic",
      "Heat oil, add mustard seeds and urad dal",
      "Add onions, chilies and ginger",
      "Add vegetables and sauté",
      "Pour hot water carefully",
      "Add roasted rava gradually and mix"
    ],
    image: "https://media.istockphoto.com/id/1306315890/photo/upma-or-rava-upma.jpg?s=612x612&w=0&k=20&c=YIK5fSdhs8sJ-VCSk9XkX2q-TYn7Oyr6XDgWtXpxzLY=",
    servings: 4,
    calories: 200
  },
  {
    id: 35,
    name: "Uttapam",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "25 minutes",
    difficulty: "Medium",
    ingredients: ["dosa batter", "onions", "tomatoes", "green chilies", "coriander", "curry leaves", "oil"],
    steps: [
      "Use thick dosa batter",
      "Chop vegetables finely",
      "Heat pan and pour thick batter",
      "Sprinkle vegetables on top",
      "Press gently and cook covered",
      "Flip and cook until golden brown"
    ],
    image: "https://media.istockphoto.com/id/2161941110/photo/uttapam-south-india-breakfast.jpg?s=612x612&w=0&k=20&c=alKLdbrAvSCc1d15Rm8X0i_iRlG89DmfhUPaeXJERH8=", 
    servings: 4,
    calories: 160
  },
  {
    id: 36,
    name: "Tamarind Rice",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    ingredients: ["rice", "tamarind", "jaggery", "turmeric", "red chilies", "mustard seeds", "fenugreek", "curry leaves"],
    steps: [
      "Cook rice and cool completely",
      "Extract thick tamarind juice",
      "Heat oil, add mustard and fenugreek",
      "Add red chilies and curry leaves", 
      "Add tamarind juice and jaggery",
      "Mix with rice and turmeric"
    ],
    image: "https://media.istockphoto.com/id/621725474/photo/indian-food-tamarind-rice.jpg?s=612x612&w=0&k=20&c=M_9dd5DBGx6wykngu-k6qjuC3QOBK0zoCS5ElM77SYw=",
    servings: 4,
    calories: 240
  },
  {
    id: 37,
    name: "Vegetable Sambar",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Easy",
    ingredients: ["toor dal", "mixed vegetables", "tamarind", "sambar powder", "onions", "tomatoes", "curry leaves", "oil"],
    steps: [
      "Cook toor dal until mushy",
      "Cut vegetables into medium pieces",
      "Extract tamarind juice",
      "Cook vegetables in tamarind water",
      "Add cooked dal and sambar powder",
      "Temper with mustard seeds and curry leaves"
    ],
    image: "https://media.istockphoto.com/id/1169102817/photo/kerala-sambar-dish.jpg?s=612x612&w=0&k=20&c=bO1PMYM99QJlMl_-xGZI2X9L_739vktvGrMO1I6gP-E=",
    servings: 6,
    calories: 160
  },
  {
    id: 38,
    name: "Curd Rice",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "15 minutes", 
    difficulty: "Easy",
    ingredients: ["rice", "curd", "salt", "mustard seeds", "urad dal", "green chilies", "ginger", "curry leaves"],
    steps: [
      "Cook rice until very soft",
      "Mash rice while warm",
      "Add fresh curd and salt",
      "Heat oil for tempering",
      "Add mustard seeds, urad dal", 
      "Pour tempering over curd rice"
    ],
    image: "https://media.istockphoto.com/id/1168154921/photo/comforting-curd-rice-is-a-popular-dish-from-south-india-with-yogurt-and-then-tempered-with.jpg?s=612x612&w=0&k=20&c=4FFlaBSNY3KhVARVXSIWnrZsrHv4b_ZS81xc1q4Miz8=",
    servings: 4,
    calories: 180
  },
  {
    id: 39,
    name: "Medu Vada",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Medium",
    ingredients: ["urad dal", "green chilies", "ginger", "curry leaves", "black pepper", "asafoetida", "oil"],
    steps: [
      "Soak urad dal for 3 hours",
      "Grind to fluffy white batter",
      "Add spices and mix gently",
      "Heat oil for deep frying",
      "Shape batter into donuts",
      "Fry until golden and crispy"
    ],
    image: "https://images.unsplash.com/photo-1683533678059-63c6a0e9e3ef?w=500",
    servings: 6,
    calories: 210
  },
  {
    id: 40,
    name: "Pesarattu",
    type: "South Indian",
    category: "Vegetarian", 
    cookingTime: "25 minutes",
    difficulty: "Easy",
    ingredients: ["green moong dal", "rice", "green chilies", "ginger", "onions", "curry leaves", "oil"],
    steps: [
      "Soak moong dal and rice for 4 hours",
      "Grind with chilies and ginger",
      "Add chopped onions to batter",
      "Heat pan and spread batter",
      "Drizzle oil around edges",
      "Cook until crispy and golden"
    ],
    image: "https://media.istockphoto.com/id/1336521391/photo/protein-rich-moong-bean-crepe-locally-known-as-pesarattu-it-looks-like-dosa-but-not-made-with.jpg?s=612x612&w=0&k=20&c=PlWmOJ9CpCmOnRSZ-iQLEvvnjDN5GuvLvsRXvJ6tTqk=",
    servings: 4,
    calories: 190
  },
  {
    id: 41,
    name: "Vegetable Korma",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "35 minutes",
    difficulty: "Medium",
    ingredients: ["mixed vegetables", "coconut", "cashews", "onions", "yogurt", "garam masala", "curry leaves", "oil"],
    steps: [
      "Cut vegetables into uniform pieces",
      "Grind coconut and cashews to paste",
      "Cook onions until golden brown",
      "Add vegetables and sauté",
      "Pour coconut paste and yogurt", 
      "Simmer until vegetables are cooked"
    ],
    image: "https://media.istockphoto.com/id/1306504434/photo/mixed-veg-curry-or-kurma.jpg?s=612x612&w=0&k=20&c=wL8xE4tGsZNmRHj300fIJ-h9xAGO3iSSjM3PYgl3zV8=",
    servings: 4,
    calories: 250
  },
  {
    id: 42,
    name: "Coconut Chutney",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "10 minutes",
    difficulty: "Easy",
    ingredients: ["coconut", "green chilies", "ginger", "roasted chana dal", "salt", "mustard seeds", "curry leaves"],
    steps: [
      "Grate fresh coconut",
      "Grind with chilies, ginger and chana dal",
      "Add salt and little water",
      "Heat oil for tempering", 
      "Add mustard seeds and curry leaves",
      "Pour tempering over chutney"
    ],
    image: "https://media.istockphoto.com/id/598165214/photo/coconut-chutney-indian-food.jpg?s=612x612&w=0&k=20&c=HlVj9eImt9IYR9hP3tS3wLagS4HPv0tkKJayGOcmLzQ=",
    servings: 4,
    calories: 80
  },
  {
    id: 43,
    name: "Tomato Rice",
    type: "South Indian",
    category: "Vegetarian", 
    cookingTime: "25 minutes",
    difficulty: "Easy",
    ingredients: ["rice", "tomatoes", "onions", "ginger-garlic paste", "red chili powder", "turmeric", "garam masala", "curry leaves"],
    steps: [
      "Cook rice and keep aside",
      "Puree tomatoes coarsely",
      "Cook onions until translucent",
      "Add ginger-garlic paste and spices",
      "Add tomato puree and cook",
      "Mix with rice and garnish"
    ],
    image: "https://media.istockphoto.com/id/1292433146/photo/healthy-homemade-fried-rice.jpg?s=612x612&w=0&k=20&c=i8U5RLSh6FIRWQSCVe3JUWQd12ejk_4GE_LOBlDbu3A=",
    servings: 4,
    calories: 200
  },
  {
    id: 44,
    name: "Paruppu Payasam",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "40 minutes",
    difficulty: "Medium",
    ingredients: ["moong dal", "jaggery", "coconut milk", "ghee", "cashews", "raisins", "cardamom", "edible camphor"],
    steps: [
      "Roast moong dal until aromatic",
      "Cook dal with water until soft",
      "Melt jaggery and strain syrup",
      "Add jaggery syrup to cooked dal",
      "Pour coconut milk and cardamom",
      "Garnish with ghee-fried nuts"
    ],
    image: "https://media.istockphoto.com/id/488569800/photo/daal-payasam-parippu-prathaman-kerala-cuisine.jpg?s=612x612&w=0&k=20&c=3sZoEOvu-ipfiWNArVbF2NHqBYfD3YK9CTH9f06wdMc=",
    servings: 6,
    calories: 280
  },
  {
    id: 45,
    name: "Kothu Parotta",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "20 minutes", 
    difficulty: "Easy",
    ingredients: ["parotta", "onions", "tomatoes", "green chilies", "eggs", "garam masala", "curry leaves", "oil"],
    steps: [
      "Tear parottas into small pieces",
      "Cook onions and tomatoes",
      "Add spices and green chilies",
      "Add torn parotta pieces",
      "Mix well and cook covered",
      "Garnish with curry leaves"
    ],
    image: "https://media.istockphoto.com/id/2233030150/photo/asian-kottu-roti-with-fresh-chicken-and-vegetables-and-curry-leaves.jpg?s=612x612&w=0&k=20&c=V3yk2THWk-HRj3Y8hqsuU9w7VkINpRKSROFIKFVpq8g=",
    servings: 4,
    calories: 320
  },
  {
    id: 46,
    name: "Rava Kesari",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    ingredients: ["rava", "sugar", "ghee", "water", "food color", "cashews", "raisins", "cardamom"],
    steps: [
      "Roast rava in ghee until aromatic",
      "Boil water with cardamom",
      "Add roasted rava gradually",
      "Cook until water is absorbed",
      "Add sugar and food color",
      "Garnish with nuts and raisins"
    ],
    image: "https://media.istockphoto.com/id/2229065351/photo/south-indian-dessert-rava-kesari-bath.jpg?s=612x612&w=0&k=20&c=vOeks_CCA89ygugGiUDkDzrB3G1C7kKRe8NJFRbCYq0=",
    servings: 4,
    calories: 250
  },
  {
    id: 47,
    name: "Paniyaram",
    type: "South Indian", 
    category: "Vegetarian",
    cookingTime: "25 minutes",
    difficulty: "Medium",
    ingredients: ["dosa batter", "onions", "green chilies", "ginger", "mustard seeds", "urad dal", "curry leaves", "oil"],
    steps: [
      "Use slightly sour dosa batter",
      "Heat paniyaram pan with oil",
      "Temper mustard seeds and urad dal",
      "Add onions, chilies to tempering",
      "Mix tempering with batter",
      "Pour in pan and cook until golden"
    ],
    image: "https://media.istockphoto.com/id/2150877420/photo/men-whip-up-paniyaram.jpg?s=612x612&w=0&k=20&c=Y2aaRT7_KzALHVm6MR6p9zxWpQXWOSPFs3sFGbVuanc=",
    servings: 4,
    calories: 180
  },
  {
    id: 48,
    name: "Mysore Pak",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Hard",
    ingredients: ["besan", "sugar", "ghee", "water", "cardamom powder"],
    steps: [
      "Sieve besan to remove lumps",
      "Make sugar syrup to soft ball consistency", 
      "Roast besan in little ghee",
      "Add besan to hot syrup gradually",
      "Keep adding ghee and cook until thick",
      "Pour in greased tray and cut when cool"
    ],
    image: "https://media.istockphoto.com/id/1441587051/photo/mysorepak-indian-famous-traditional-sweet-closeup-with-selective-focus-and-blur.jpg?s=612x612&w=0&k=20&c=8dHyKFQE0kiulPzlarZgHBstXrdvd35UBsbcFZo4guI=",
    servings: 8,
    calories: 350
  },
  {
    id: 49,
    name: "Mor Kuzhambu",
    type: "South Indian",
    category: "Vegetarian", 
    cookingTime: "25 minutes",
    difficulty: "Easy",
    ingredients: ["yogurt", "coconut", "green chilies", "ginger", "cucumber", "okra", "turmeric", "curry leaves"],
    steps: [
      "Whisk yogurt until smooth",
      "Grind coconut with green chilies",
      "Mix yogurt with ground paste",
      "Cook vegetables with turmeric",
      "Add yogurt mixture and simmer gently",
      "Temper with curry leaves and serve"
    ],
    image: "https://media.istockphoto.com/id/469791071/photo/vatha-kulambu.jpg?s=612x612&w=0&k=20&c=fJCNxFTPH8DHC1VOFlbAFZOO4WIJyKSYD0yFtxAnf_0=",
    servings: 4,
    calories: 120
  },
  {
    id: 50,
    name: "Set Dosa",
    type: "South Indian",
    category: "Vegetarian",
    cookingTime: "30 minutes",
    difficulty: "Medium",
    ingredients: ["dosa batter", "poha", "curd", "baking soda", "salt", "oil"],
    steps: [
      "Soak poha and grind with little water",
      "Mix with dosa batter and curd",
      "Add baking soda and salt",
      "Rest batter for 30 minutes",
      "Make small thick dosas in sets",
      "Serve hot with coconut chutney"
    ],
    image: "https://media.istockphoto.com/id/643835024/photo/indian-food-dosa.jpg?s=612x612&w=0&k=20&c=InsYJ9BYuQnjbcfprSprJZ0st_juDAmhEOTPBvRQ2ic=",
    servings: 4,
    calories: 170
  },
  {
    id: 51,
    name: "Chicken Biryani",
    type: "South Indian",
    category: "Non-Vegetarian",
    cookingTime: "90 minutes",
    difficulty: "Hard",
    ingredients: ["chicken", "basmati rice", "yogurt", "onions", "mint leaves", "saffron", "ghee", "biryani masala", "cashews", "raisins"],
    steps: [
      "Marinate chicken with yogurt, ginger-garlic paste and spices for 2 hours",
      "Deep fry sliced onions until golden brown and crispy",
      "Cook chicken in heavy-bottomed pot until 80% done",
      "Parboil basmati rice with whole spices until 70% cooked",
      "Layer cooked chicken and rice alternately in the pot",
      "Top with fried onions, mint, saffron soaked in warm milk",
      "Cover pot with aluminum foil, then place tight-fitting lid",
      "Cook on high heat for 3-4 minutes, then on low heat for 45 minutes",
      "Let it rest for 10 minutes before opening",
      "Gently mix and serve with boiled eggs, raita and shorba"
    ],
    image: "https://media.istockphoto.com/id/509568543/photo/indian-food.jpg?s=612x612&w=0&k=20&c=zsS36A1X8Hg37WSzqZI3JiI9HVF8rngshIfx0eJeJyA=",
    servings: 6,
    calories: 480
  }
];

// DOM Elements
const recipeList = document.getElementById('recipe-list');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalType = document.getElementById('modal-type');
const modalCategory = document.getElementById('modal-category');
const modalTime = document.getElementById('modal-time');
const modalDifficulty = document.getElementById('modal-difficulty');
const modalServings = document.getElementById('modal-servings');
const modalCalories = document.getElementById('modal-calories');
const modalIngredients = document.getElementById('modal-ingredients');
const modalSteps = document.getElementById('modal-steps');
const modalClose = document.querySelector('.close');

// Render recipes
function renderRecipes(list) {
  recipeList.innerHTML = '';
  list.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="info">
        <h3>${recipe.name}</h3>
        <p>${recipe.category} | ${recipe.difficulty}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(recipe));
    recipeList.appendChild(card);
  });
}

// Open modal
function openModal(recipe) {
  modal.style.display = 'block';
  modalImage.src = recipe.image;
  modalTitle.textContent = recipe.name;
  modalType.textContent = recipe.type;
  modalCategory.textContent = recipe.category;
  modalTime.textContent = recipe.cookingTime;
  modalDifficulty.textContent = recipe.difficulty;
  modalServings.textContent = recipe.servings;
  modalCalories.textContent = recipe.calories;
  modalIngredients.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
  modalSteps.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join('');
}


// Close modal
modalClose.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

// Search & Filter
async function filterRecipes() {
  const searchTerm = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  // Filter local recipes
  let filtered = recipes.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm) || r.ingredients.some(i => i.toLowerCase().includes(searchTerm));
    const matchesFilter = filterValue === 'all' || r.category === filterValue;
    return matchesSearch && matchesFilter;
  });

  // Fetch from Spoonacular if searching by ingredient
  if (searchTerm) {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&number=5&apiKey=${SPOONACULAR_API_KEY}`);
      const data = await response.json();
      const spoonacularResults = data.map(item => ({
        id: item.id,
        name: item.title,
        type: "Recipe",
        category: "Unknown",
        cookingTime: "Unknown",
        difficulty: "Unknown",
        ingredients: item.usedIngredients.map(i => i.name).concat(item.missedIngredients.map(i => i.name)),
        steps: ["Full steps available on Spoonacular"],
        image: item.image,
        servings: "Unknown",
        calories: "Unknown"
      }));
      filtered = [...filtered, ...spoonacularResults];
    } catch (err) {
      console.error("Error fetching from Spoonacular", err);
    }
  }

  renderRecipes(filtered);
}

searchInput.addEventListener('input', filterRecipes);
filterSelect.addEventListener('change', filterRecipes);

// Initial render
renderRecipes(recipes);
