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
    <MenuItems :menu="filteredMenu" />
  </div>
</template>
