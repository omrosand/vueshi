let menu = [
  {
    name: "Tuna Roll",
    description: "Fresh tuna wrapped in sushi rice and seaweed.",
    price: 8.99,
    category: "Rolls",
    ingredients: ["Tuna", "Sushi Rice", "Seaweed"],
    img: "img/roll8.png",
    id: 1,
  },
  {
    name: "Salmon Nigiri",
    description:
      "Slices of premium salmon placed on top of a small bed of sushi rice.",
    price: 4.99,
    category: "Nigiri",
    ingredients: ["Salmon", "Sushi Rice"],
    img: "img/nigiri1.png",
    id: 2,
  },
  {
    name: "California Roll",
    description:
      "Crab meat, avocado, and cucumber wrapped in sushi rice and seaweed.",
    price: 6.99,
    category: "Rolls",
    ingredients: ["Crab Meat", "Avocado", "Cucumber", "Sushi Rice", "Seaweed"],
    img: "img/roll1.png",
    id: 3,
  },
  {
    name: "Eel Dragon Roll",
    description: "Grilled eel, avocado, and cucumber topped with eel sauce.",
    price: 11.99,
    category: "Rolls",
    ingredients: [
      "Grilled Eel",
      "Avocado",
      "Cucumber",
      "Eel Sauce",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll7.png",
    id: 4,
  },
  {
    name: "Spicy Tuna Roll",
    description:
      "Spicy tuna, cucumber, and spicy mayo wrapped in sushi rice and seaweed.",
    price: 9.99,
    category: "Rolls",
    ingredients: [
      "Spicy Tuna",
      "Cucumber",
      "Spicy Mayo",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll4.png",
    id: 5,
  },
  {
    name: "Tempura Shrimp Roll",
    description:
      "Tempura-battered shrimp, avocado, and cucumber wrapped in sushi rice and seaweed.",
    price: 8.99,
    category: "Rolls",
    ingredients: [
      "Tempura Shrimp",
      "Avocado",
      "Cucumber",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll2.png",
    id: 6,
  },
  {
    name: "Yellowtail Nigiri",
    description:
      "Thin slices of fresh yellowtail placed on top of a small bed of sushi rice.",
    price: 5.99,
    category: "Nigiri",
    ingredients: ["Yellowtail", "Sushi Rice"],
    img: "img/nigiri2.png",
    id: 7,
  },
  {
    name: "Salmon Sashimi",
    description: "Fresh, raw slices of premium salmon.",
    price: 10.99,
    category: "Sashimi",
    ingredients: ["Salmon"],
    img: "img/sashimi.png",
    id: 8,
  },
  {
    name: "Edamame",
    description: "Steamed soybeans sprinkled with sea salt.",
    price: 3.99,
    category: "Appetizers",
    ingredients: ["Soybeans", "Sea Salt"],
    img: "img/edamame.png",
    id: 9,
  },
  {
    name: "Miso Soup",
    description:
      "Traditional Japanese soup made with soybean paste, tofu, and seaweed.",
    price: 2.99,
    category: "Soups",
    ingredients: ["Soybean Paste", "Tofu", "Seaweed"],
    img: "img/miso-soup.png",
    id: 10,
  },
  {
    name: "Gyoza",
    description: "Pan-fried dumplings filled with ground meat and vegetables.",
    price: 6.99,
    category: "Appetizers",
    ingredients: ["Ground Meat", "Vegetables"],
    img: "img/gyoza.png",
    id: 11,
  },
  {
    name: "Rainbow Roll",
    description: "Assorted fish and avocado on top of a California roll.",
    price: 12.99,
    category: "Rolls",
    ingredients: [
      "Assorted Fish",
      "Avocado",
      "Crab Meat",
      "Cucumber",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll3.png",
    id: 12,
  },
  {
    name: "Shrimp Tempura",
    description: "Tempura-battered shrimp served with dipping sauce.",
    price: 9.99,
    category: "Appetizers",
    ingredients: ["Shrimp", "Tempura Batter", "Dipping Sauce"],
    img: "img/shrimp-tempura.png",
    id: 13,
  },
  {
    name: "Sashimi Platter",
    description: "Assortment of fresh raw fish slices.",
    price: 18.99,
    category: "Sashimi",
    ingredients: ["Assorted Fish"],
    img: "img/sashimi2.png",
    id: 14,
  },
  {
    name: "Seaweed Salad",
    description: "Refreshing salad made with various types of seaweed.",
    price: 5.99,
    category: "Salads",
    ingredients: ["Seaweed"],
    img: "img/seaweed.png",
    id: 15,
  },
  {
    name: "Chicken Teriyaki",
    description:
      "Grilled chicken marinated in teriyaki sauce, served with steamed rice and vegetables.",
    price: 11.99,
    category: "Main Courses",
    ingredients: ["Chicken", "Teriyaki Sauce", "Rice", "Vegetables"],
    img: "img/teriyaki.png",
    id: 16,
  },
  {
    name: "Beef Yakisoba",
    description: "Stir-fried Japanese noodles with beef and vegetables.",
    price: 10.99,
    category: "Main Courses",
    ingredients: ["Beef", "Yakisoba Noodles", "Vegetables"],
    img: "img/yakisoba.png",
    id: 17,
  },
  {
    name: "Volcano Roll",
    description: "Baked California roll topped with spicy mayo and eel sauce.",
    price: 11.99,
    category: "Rolls",
    ingredients: [
      "Crab Meat",
      "Avocado",
      "Cucumber",
      "Spicy Mayo",
      "Eel Sauce",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll4.png",
    id: 18,
  },
  {
    name: "Vegetable Tempura",
    description: "Assortment of lightly battered and deep-fried vegetables.",
    price: 7.99,
    category: "Appetizers",
    ingredients: ["Assorted Vegetables", "Tempura Batter"],
    img: "img/vegetable-tempura.png",
    id: 19,
  },
  {
    name: "Spider Roll",
    description:
      "Soft-shell crab, avocado, and cucumber wrapped in sushi rice and seaweed.",
    price: 10.99,
    category: "Rolls",
    ingredients: [
      "Soft-Shell Crab",
      "Avocado",
      "Cucumber",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll5.png",
    id: 20,
  },
  {
    name: "Tofu Maki",
    description: "Fried tofu and vegetables wrapped in sushi rice and seaweed.",
    price: 8.99,
    category: "Rolls",
    ingredients: ["Fried Tofu", "Vegetables", "Sushi Rice", "Seaweed"],
    img: "img/roll6.png",
    id: 21,
  },
  {
    name: "Sake Bomb",
    description: "A shot of sake dropped into a glass of beer.",
    price: 6.99,
    category: "Beverages",
    ingredients: ["Sake", "Beer"],
    img: "img/sake-bomb.png",
    id: 22,
  },
  {
    name: "Crispy Salmon Skin Roll",
    description:
      "Crispy grilled salmon skin, cucumber, and scallions wrapped in sushi rice and seaweed.",
    price: 9.99,
    category: "Rolls",
    ingredients: [
      "Grilled Salmon Skin",
      "Cucumber",
      "Scallions",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll4.png",
    id: 23,
  },
  {
    name: "Octopus Nigiri",
    description:
      "Tender slices of octopus placed on top of a small bed of sushi rice.",
    price: 6.99,
    category: "Nigiri",
    ingredients: ["Octopus", "Sushi Rice"],
    img: "img/roll8.png",
    id: 24,
  },
  {
    name: "Shrimp Tempura Roll",
    description:
      "Tempura-battered shrimp, avocado, and cucumber wrapped in sushi rice and seaweed.",
    price: 9.99,
    category: "Rolls",
    ingredients: [
      "Tempura Shrimp",
      "Avocado",
      "Cucumber",
      "Sushi Rice",
      "Seaweed",
    ],
    img: "img/roll6.png",
    id: 25,
  },
  {
    name: "Beef Teriyaki",
    description:
      "Grilled beef marinated in teriyaki sauce, served with steamed rice and vegetables.",
    price: 12.99,
    category: "Main Courses",
    ingredients: ["Beef", "Teriyaki Sauce", "Rice", "Vegetables"],
    img: "img/beef-teriyaki.png",
    id: 26,
  },
  {
    name: "Avocado Roll",
    description: "Fresh avocado wrapped in sushi rice and seaweed.",
    price: 5.99,
    category: "Rolls",
    ingredients: ["Avocado", "Sushi Rice", "Seaweed"],
    img: "img/roll4.png",
    id: 27,
  },
  {
    name: "Cucumber Roll",
    description: "Fresh cucumber wrapped in sushi rice and seaweed.",
    price: 4.99,
    category: "Rolls",
    ingredients: ["Cucumber", "Sushi Rice", "Seaweed"],
    img: "img/roll3.png",
    id: 28,
  },
  {
    name: "Beef Gyoza",
    description: "Pan-fried dumplings filled with ground beef and vegetables.",
    price: 7.99,
    category: "Appetizers",
    ingredients: ["Ground Beef", "Vegetables"],
    img: "img/beef-gyoza.png",
    id: 29,
  },
  {
    name: "Squid Nigiri",
    description:
      "Tender slices of squid placed on top of a small bed of sushi rice.",
    price: 5.99,
    category: "Nigiri",
    ingredients: ["Squid", "Sushi Rice"],
    img: "img/roll7.png",
    id: 30,
  },
  {
    name: "Miso Ramen",
    description:
      "Noodles in a rich miso-based broth, topped with sliced pork, bamboo shoots, and green onions.",
    price: 11.99,
    category: "Soups",
    ingredients: [
      "Noodles",
      "Miso Broth",
      "Pork",
      "Bamboo Shoots",
      "Green Onions",
    ],
    img: "img/miso-ramen.png",
    id: 31,
  },
  {
    name: "Green Tea Ice Cream",
    description: "Refreshing green tea-flavored ice cream.",
    price: 3.99,
    category: "Desserts",
    ingredients: ["Green Tea", "Milk", "Sugar"],
    img: "img/green-tea-ice-cream.png",
    id: 32,
  },
];

menu.forEach((dish, index) => {
  dish.id = index + 1;
});

console.log(JSON.stringify(menu, null, 2));
