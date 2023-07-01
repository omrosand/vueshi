<script setup>
import { ref } from "vue";

let name = ref("");
let age = ref(null);
let description = ref("Type a name and age!");

const submitForm = () => {
  if (name.value === "" || age.value === null || isNaN(age.value)) {
    description.value = "Type a name and age!";
  } else {
    description.value = `${name.value} is ${age.value} years old.`;
  }
};
</script>

<template>
  <h1>Form</h1>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input
      type="text"
      id="name"
      v-model="name"
      placeholder="Your name here"
      required
    />
    <label for="age">Age:</label>
    <input
      type="number"
      id="age"
      v-model="age"
      placeholder="Your age here"
      required
    />
    <button type="submit">Submit</button>
  </form>
  <h3>{{ description }}</h3>
</template>
