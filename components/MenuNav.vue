<script setup>
const menuCategories = [
  "Appetizers",
  "Rolls",
  "Sashimi",
  "Salads",
  "Main Courses",
  "Beverages",
  "Nigiri",
  "Soups",
  "Desserts",
];
</script>
<template>
  <div>
    <ul class="menuCategories">
      <li v-for="category in menuCategories" :key="category">
        <NuxtLink :to="`/menu/${category.toLowerCase().replace(/\s/g, '')}`">{{
          category
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
