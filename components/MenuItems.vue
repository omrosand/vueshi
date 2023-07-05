<script setup>
const { menu } = defineProps(["menu"]);
</script>

<template>
  <ul>
    <MenuItem :menu="menu" />
  </ul>
</template>
