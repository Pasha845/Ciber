<template>
  <div class="popular__item">
    <img loading="lazy" :src="popular.img" alt="Popular image" width="360" height="327">
    <div class="popular__cube">
      <h3 class="popular__subtitle">{{ popular.title }}</h3>
      <p class="popular__text">{{ popular.text }}</p>
      <router-link class="popular__btn subbtn" :to="'/product/' + popular.id">Shop Now</router-link>
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

<style lang="scss">
  .popular {
    &__item {
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: auto;
      padding-bottom: 56px;
    }

    &__item:first-child picture img {
      height: 327px;
    }

    &__item:nth-child(2) {
      background: #f9f9f9;
    }

    &__item:nth-child(3) {
      background: #eaeaea;
    }

    &__cube {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 32px;
      min-height: 208px;
    }

    &__subtitle {
      margin-bottom: 16px;
      font-size: 33px;
      line-height: 48px;
      font-weight: 300;
    }

    &__text {
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      color: #909090;
    }

    &__item:last-child {
      background: #2c2c2c;
    }

    &__item:last-child &__subtitle {
      color: white;
    }

    &__item:last-child &__btn {
      border-color: #fff;
      color: white;
    }

    &__btn {
      margin-top: auto;
      transition: color .3s, background-color .3s;
    }

    &__btn:hover {
      border-color: rgb(3, 3, 145);
      color: #fff;
      background: rgb(3, 3, 145);
    }

    &__item:last-child &__btn:hover {
      border-color: rgb(3, 3, 145);
    }
  }
</style>