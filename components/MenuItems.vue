<script setup>
defineProps(["menu"]);
</script>

<template>
  <ul>
    <MenuItem :menu="menu" />
  </ul>
</template>
