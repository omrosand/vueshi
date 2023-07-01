<script setup>
defineProps(["menu"]);
</script>

<template>
  <div class="menuItems">
    <li v-for="dish in menu" :key="dish.id">
      <div class="wrapper">
        <h3>
          {{ dish.id }}.
          {{ dish.name }}
        </h3>
        <NuxtLink
          :to="`/menu/${dish.category.toLowerCase().replace(/\s/g, '')}`"
          class="categoryTag"
          >{{ dish.category }}</NuxtLink
        >
      </div>

      <div class="wrapper">
        <p>{{ dish.description }}</p>
        <img :src="dish.img" :alt="dish.name" />
      </div>
      <div class="wrapper">
        <div>
          <h5>Ingredients:</h5>
          <p>{{ dish.ingredients.toString().replaceAll(",", ", ") }}</p>
        </div>
        <h4>${{ dish.price }}</h4>
      </div>
    </li>
  </div>
</template>
