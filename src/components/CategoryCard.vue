<template>
  <router-link class="category__slide" to="/catalog">
    <img :src="category.img" alt="Category image" width="48" height="48">
    <p>{{ category.text }}</p>
  </router-link>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    category: {
      type: Object
    }
  })
</script>

<style scoped>

</style>