<template>
  <div class="item">
    <button class="favorite" :class="{ like: isActive }" @click="favorite">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.93415 18.5442L15.3152 27.3567C15.6397 27.6615 15.8019 27.8139 15.9999 27.8139C16.1979 27.8139 16.3602 27.6615 16.6846 27.3567L26.0657 18.5442C28.6739 16.094 28.9907 12.0621 26.797 9.23467L26.3845 8.70304C23.7603 5.32069 18.4928 5.88794 16.6488 9.75145C16.3883 10.2972 15.6115 10.2972 15.351 9.75145C13.5071 5.88794 8.23955 5.32069 5.61531 8.70304L5.20284 9.23467C3.00918 12.0621 3.32592 16.094 5.93415 18.5442Z" stroke="currentColor" stroke-opacity="0.77" stroke-width="1.4" />
      </svg>
    </button>
    <img class="img" loading="lazy" :src="product.img" alt="Product image" width="160" height="160">
    <div class="cube">
      <h3 class="subtitle">{{ product.title }}</h3>
      <p class="price">${{ product.price }}</p>
      <router-link class="link" :to="'/product/' + product.id">Buy Now</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { userData } from '@/stores/user';

  const authStore = userData();
  const isActive = ref(false);

  const props = defineProps({
    product: {
      type: Object
    }
  });

  function favorite () {
    if (!isActive.value) {
      authStore.favQuantity += 1;
      isActive.value = true;
    } else {
      authStore.favQuantity -= 1;
      isActive.value = false;
    };
  };
</script>

<style lang="scss"></style>