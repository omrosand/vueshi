<script setup>
definePageMeta({
  layout: "menu",
});
const { data: menu } = await useFetch("../ourmenu.json");
</script>

<template>
  <div>
    <MenuItems :menu="menu" />
  </div>
</template>
