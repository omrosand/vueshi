<script setup>
definePageMeta({
  layout: "menu",
});
const { category } = useRoute().params;

const { data: menu } = await useFetch("../ourmenu.json");

const filteredMenu = menu._rawValue.filter(
  (item) => item.category.toLowerCase().replace(/\s/g, "") === category
);
</script>

<template>
  <div>
    <MenuItems :menu="filteredMenu" />
  </div>
</template>
