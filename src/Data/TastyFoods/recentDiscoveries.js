import vietnameseSpringRollsImg from "../../assets/vietnameseSpringRolls.webp";
import stuffedBellPeppersImg from "../../assets/stuffedBellPeppers.webp";
import tandooriCauliflowerImg from "../../assets/tandooriCauliflower.webp";
import kimchiFriedRiceImg from "../../assets/kimchiFriedRice.webp";
import pestoZucchiniNoodlesImg from "../../assets/pestoZucchiniNoodles.webp";
import shakshukaImg from "../../assets/shakshuka.webp";
import tamagoSushiImg from "../../assets/tamagoSushi.webp";
import falafelWrapImg from "../../assets/falafelWrap.webp";
import jollofRiceImg from "../../assets/jollofRice.webp";
import sweetPotatoTacosImg from "../../assets/sweetPotatoTacos.webp";
import beetrootHummusToastImg from "../../assets/beetrootHummusToast.webp";
import jerkChickenImg from "../../assets/jerkChicken.webp";

const recentDiscoveries = [
  {
    id: 16,
    food_name: "Vietnamese Spring Rolls",
    description:
      "Fresh and light rice paper rolls filled with shrimp, veggies, and herbs.",
    image: vietnameseSpringRollsImg,
    ingredients: [
      "Rice paper",
      "Shrimp",
      "Vermicelli noodles",
      "Lettuce",
      "Carrots",
      "Mint leaves",
      "Peanut sauce",
    ],
    instructions: [
      "Cook the vermicelli noodles according to the package instructions, then drain and rinse under cold water.",
      "Boil shrimp until pink and cooked through, then slice them in half lengthwise.",
      "Prepare a shallow bowl of warm water and dip one sheet of rice paper in it for about 5 seconds until soft.",
      "Place the softened rice paper on a clean surface. Add a small handful of noodles, some lettuce, carrots, mint leaves, and shrimp (cut side up) in the center.",
      "Fold the bottom of the paper over the filling, then fold in the sides, and roll it tightly like a burrito.",
      "Repeat with remaining ingredients. Serve with peanut sauce for dipping.",
    ],
  },
  {
    id: 17,
    food_name: "Stuffed Bell Peppers",
    description:
      "Colorful peppers filled with seasoned rice, veggies, and beef.",
    image: stuffedBellPeppersImg,
    ingredients: [
      "Bell peppers",
      "Ground beef",
      "Cooked rice",
      "Onion",
      "Tomato sauce",
      "Cheddar cheese",
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C). Cut the tops off the bell peppers and remove the seeds and membranes.",
      "Sauté chopped onion in a skillet until translucent, then add ground beef and cook until browned.",
      "Mix in the cooked rice and about 1/2 cup of tomato sauce. Season with salt, pepper, and any herbs you like.",
      "Stuff each pepper with the beef and rice mixture and place them in a baking dish.",
      "Top with the remaining tomato sauce and sprinkle with shredded cheddar cheese.",
      "Cover with foil and bake for 30 minutes, then uncover and bake another 10 minutes until cheese is bubbly.",
    ],
  },
  {
    id: 18,
    food_name: "Tandoori Cauliflower Bites",
    description:
      "Roasted cauliflower marinated in spiced yogurt and grilled to perfection.",
    image: tandooriCauliflowerImg,
    ingredients: [
      "Cauliflower florets",
      "Yogurt",
      "Garam masala",
      "Paprika",
      "Garlic",
      "Lemon juice",
    ],
    instructions: [
      "In a bowl, mix yogurt with minced garlic, garam masala, paprika, lemon juice, and a pinch of salt.",
      "Add the cauliflower florets to the marinade and stir well to coat. Let it sit for at least 30 minutes, or up to 2 hours in the fridge.",
      "Preheat oven to 400°F (200°C). Spread the marinated cauliflower on a baking tray lined with parchment paper.",
      "Roast for 25–30 minutes, flipping halfway, until the florets are golden and slightly crispy on the edges.",
      "Serve hot with chutney or a cooling yogurt dip.",
    ],
  },
  {
    id: 19,
    food_name: "Kimchi Fried Rice",
    description:
      "Spicy Korean fried rice stir-fried with kimchi and vegetables.",
    image: kimchiFriedRiceImg,
    ingredients: [
      "Cooked rice",
      "Kimchi",
      "Garlic",
      "Onion",
      "Soy sauce",
      "Egg",
    ],
    instructions: [
      "Chop the kimchi and onion into small pieces. Mince the garlic.",
      "Heat a tablespoon of oil in a pan over medium heat. Add onion and garlic, and cook until soft.",
      "Add the chopped kimchi and stir-fry for 2–3 minutes to release flavor.",
      "Add the cooked rice and a splash of soy sauce. Stir everything together and cook for another 4–5 minutes.",
      "Push the rice to the side and crack an egg into the empty space. Scramble until just set, then mix into the rice.",
      "Serve hot, optionally topped with a fried egg and sliced green onions.",
    ],
  },
  {
    id: 20,
    food_name: "Pesto Zucchini Noodles",
    description: "Low-carb zucchini noodles tossed with homemade basil pesto.",
    image: pestoZucchiniNoodlesImg,
    ingredients: [
      "Zucchini",
      "Basil",
      "Garlic",
      "Pine nuts",
      "Parmesan",
      "Olive oil",
    ],
    instructions: [
      "Spiralize the zucchini into noodles and set aside.",
      "In a blender or food processor, combine fresh basil, garlic, pine nuts, and grated Parmesan cheese.",
      "Blend while slowly adding olive oil until a smooth pesto forms.",
      "Heat a pan over medium heat, add the zucchini noodles, and sauté for 2–3 minutes until just tender.",
      "Turn off the heat and toss the noodles with pesto until evenly coated.",
      "Serve immediately with extra Parmesan on top if desired.",
    ],
  },
  {
    id: 21,
    food_name: "Shakshuka",
    description:
      "North African dish with poached eggs in a spiced tomato sauce.",
    image: shakshukaImg,
    ingredients: [
      "Eggs",
      "Tomatoes",
      "Bell pepper",
      "Onion",
      "Garlic",
      "Paprika",
      "Cumin",
    ],
    instructions: [
      "Heat olive oil in a skillet and sauté chopped onion and bell pepper until soft.",
      "Add minced garlic, paprika, and cumin; cook for another minute until fragrant.",
      "Pour in crushed tomatoes and simmer for 10–15 minutes until the sauce thickens slightly.",
      "Make small wells in the sauce and crack an egg into each one.",
      "Cover and cook on low heat for 5–7 minutes, or until eggs are just set.",
      "Garnish with parsley and serve with crusty bread.",
    ],
  },
  {
    id: 22,
    food_name: "Japanese Tamago Sushi",
    description:
      "Sweet egg omelet served over sushi rice — a traditional Japanese treat.",
    image: tamagoSushiImg,
    ingredients: [
      "Eggs",
      "Sugar",
      "Soy sauce",
      "Mirin",
      "Sushi rice",
      "Nori (seaweed)",
    ],
    instructions: [
      "Beat eggs with sugar, soy sauce, and mirin until fully combined.",
      "Heat a non-stick pan, add a small amount of egg mixture, and tilt to spread thinly.",
      "Once partially set, roll to one side. Add more egg, lift roll to let it flow underneath, and repeat to layer.",
      "Remove the rolled omelet and let cool slightly, then slice into rectangular pieces.",
      "Form sushi rice into small ovals and top each with a tamago slice.",
      "Secure with a thin strip of nori wrapped around the center.",
    ],
  },
  {
    id: 23,
    food_name: "Falafel Wrap",
    description:
      "Crispy falafel balls wrapped in pita with hummus and veggies.",
    image: falafelWrapImg,
    ingredients: [
      "Chickpeas",
      "Garlic",
      "Onion",
      "Parsley",
      "Cumin",
      "Pita bread",
      "Hummus",
      "Lettuce and tomatoes",
    ],
    instructions: [
      "Soak chickpeas overnight, then drain. Blend with garlic, onion, parsley, cumin, salt, and pepper until a coarse mixture forms.",
      "Shape into balls or patties. Chill for 30 minutes to help them hold together.",
      "Heat oil in a pan and fry falafel in batches until deep golden brown on all sides.",
      "Warm pita bread and spread a layer of hummus inside.",
      "Fill with falafel, shredded lettuce, sliced tomato, and any extra sauces like tahini or hot sauce.",
      "Roll or fold and serve immediately.",
    ],
  },
  {
    id: 24,
    food_name: "Jollof Rice",
    description: "West African spiced rice cooked with tomatoes and peppers.",
    image: jollofRiceImg,
    ingredients: [
      "Long grain rice",
      "Tomatoes",
      "Red bell pepper",
      "Onion",
      "Garlic",
      "Stock cubes",
      "Oil and spices",
    ],
    instructions: [
      "Blend tomatoes, red pepper, and onion into a smooth mixture.",
      "Heat oil in a pot, add the blended mixture, and cook until reduced and fragrant.",
      "Add stock cubes and spices like thyme, curry powder, and bay leaf.",
      "Stir in washed rice and enough water to cook it just above the level of rice.",
      "Cover and cook on low heat for 25–30 minutes, checking occasionally and fluffing with a fork.",
      "Serve hot with fried plantains or grilled meat.",
    ],
  },
  {
    id: 25,
    food_name: "Sweet Potato Tacos",
    description:
      "Soft tacos filled with roasted sweet potatoes and black beans.",
    image: sweetPotatoTacosImg,
    ingredients: [
      "Sweet potatoes",
      "Black beans",
      "Taco shells",
      "Avocado",
      "Lime",
      "Spices (cumin, paprika)",
    ],
    instructions: [
      "Peel and dice sweet potatoes. Toss with oil, cumin, paprika, salt, and roast at 400°F (200°C) for 25 minutes.",
      "Warm black beans in a pan with a little water and seasoning.",
      "Toast or warm taco shells in a pan or oven.",
      "Assemble tacos with sweet potatoes, beans, diced avocado, and a squeeze of fresh lime juice.",
      "Add optional toppings like cilantro, salsa, or vegan sour cream.",
    ],
  },
  {
    id: 26,
    food_name: "Beetroot Hummus Toast",
    description:
      "Bright pink hummus made with beetroot spread over crusty bread.",
    image: beetrootHummusToastImg,
    ingredients: [
      "Beetroot (roasted)",
      "Chickpeas",
      "Tahini",
      "Garlic",
      "Lemon juice",
      "Bread slices",
    ],
    instructions: [
      "Roast the beetroot until tender, then peel and chop.",
      "Blend beetroot with chickpeas, tahini, garlic, lemon juice, and salt until smooth.",
      "Toast slices of crusty bread until golden.",
      "Spread the beetroot hummus generously on toast.",
      "Top with herbs, seeds, or a drizzle of olive oil for extra flavor.",
    ],
  },
  {
    id: 27,
    food_name: "Caribbean Jerk Chicken",
    description: "Spicy grilled chicken with Caribbean jerk marinade.",
    image: jerkChickenImg,
    ingredients: [
      "Chicken thighs",
      "Scotch bonnet pepper",
      "Allspice",
      "Thyme",
      "Garlic",
      "Ginger",
      "Soy sauce",
      "Brown sugar",
    ],
    instructions: [
      "In a blender, combine all marinade ingredients and blend until smooth.",
      "Rub marinade over chicken thighs and let marinate for at least 2 hours or overnight in the fridge.",
      "Preheat grill or oven to medium-high. Cook chicken for 6–8 minutes per side until fully cooked and slightly charred.",
      "Let rest for 5 minutes before serving with rice or slaw.",
    ],
  },
];

export default recentDiscoveries;
