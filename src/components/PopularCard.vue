<template>
  <div class="popular__item">
    <img loading="lazy" :src="popular.img" alt="Popular image" width="360" height="327">
    <div class="popular__cube">
      <h3 class="popular__subtitle">{{ popular.title }}</h3>
      <p class="popular__text">{{ popular.text }}</p>
      <router-link class="popular__btn subbtn" to="/product">Shop Now</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    popular: {
      type: Object
    }
  });
</script>