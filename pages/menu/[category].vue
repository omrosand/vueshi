<script setup>
const { category } = useRoute().params;

const { data: menu } = await useFetch("../ourmenu.json");

const filteredMenu = menu._rawValue.filter(
  (item) => item.category.toLowerCase().replace(/\s/g, "") === category
);
definePageMeta({
  pageTransition: {
    name: "out",
  },
});
</script>

<template>
  <div>
    <MenuNav />
    <ul class="menuItems">
      <li v-for="dish in filteredMenu" :key="dish.id">
        <div class="wrapper">
          <h3>
            {{ dish.id }}.
            {{ dish.name }}
          </h3>
          <h4 class="categoryTag">{{ dish.category }}</h4>
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
    </ul>
  </div>
</template>
