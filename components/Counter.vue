<script setup>
const msg = "Counter";
let count = ref(0);

const handleCount = (action) => {
  console.log("clicked");
  switch (action) {
    case "decrement":
      count.value = count.value - 1;
      break;
    case "increment":
      count.value = count.value + 1;
      break;
    default:
      console.log("How did you even get here");
  }
};
const multiplyCount = (event) => {
  const multiplier = event.target.textContent;
  console.log(multiplier);
  count.value = count.value * multiplier;
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="handleCount('decrement')">-1</button>
  <button @click="handleCount('increment')">+1</button>
  <h2>Count is: {{ count }}</h2>
  <button @click="count = 0">Reset counter</button>
  <p>Multiply count with:</p>
  <button @click="multiplyCount">2</button>
  <button @click="multiplyCount">4</button>
  <button @click="multiplyCount">10</button>
  <br />
  <br />
  <button @click="getMenuItems">Se meny</button>
  <button @click="getMenuCategoryItems('Appetizers')">Appetizers</button>
  <button @click="getMenuCategoryItems('Rolls')">Rolls</button>
  <button @click="getMenuCategoryItems('Sashimi')">Sashimi</button>
  <button @click="getMenuCategoryItems('Salads')">Salads</button>
  <button @click="getMenuCategoryItems('Main Courses')">Main Courses</button>
  <button @click="getMenuCategoryItems('Beverages')">Beverages</button>
  <button @click="getMenuCategoryItems('Nigiri')">Nigiri</button>
  <button @click="getMenuCategoryItems('Soups')">Soups</button>
  <button @click="getMenuCategoryItems('Desserts')">Desserts</button>
</template>
