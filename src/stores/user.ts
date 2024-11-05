import { ref } from 'vue';
import { defineStore } from 'pinia';

export const userData = defineStore('auth', () => {
  const favQuantity = ref(0);

  return {favQuantity};
});