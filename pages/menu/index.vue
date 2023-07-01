<script setup>
definePageMeta({
  pageTransition: false,
});

const { data: menu } = await useFetch("../ourmenu.json");
</script>

<template>
  <div>
    <MenuNav />
    <MenuItems :menu="menu" />
  </div>
</template>
