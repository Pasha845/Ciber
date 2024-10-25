<template>
  <router-link class="category__slide" :to="'/catalog/' + category.link">
    <img :src="category.img" alt="Category image" width="48" height="48">
    <p>{{ category.text }}</p>
  </router-link>
</template>

<script setup lang="ts">
  defineProps({
    category: {
      type: Object
    }
  });
</script>

<style lang="scss">
  .category {
    &__slide {
      text-align: center;
      box-sizing: border-box;
      border-radius: 15px;
      padding: 24px 0;
      width: 160px;
      background: #ededed;
      transition: .8s;
    }

    &__slide:not(:last-child) {
      margin-right: 32px;
    }

    &__slide:hover {
      transform: scale(1.2);
    }
  }
</style>