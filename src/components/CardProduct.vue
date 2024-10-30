<template>
  <div class="card__item flex">
    <img class="card__img" :src="card.image" alt="Card title" width="90" height="90">
    <div class="card__div">
      <p class="card__name">{{ card.title }}</p>
      <p class="card__id">#{{ card.id }}</p>
    </div>
    <div class="card__btns flex">
      <button class="card__minus">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12L8 12" stroke="black" stroke-width="1.2" stroke-linecap="round" />
        </svg>
      </button>
      <input class="card__number" type="number" value="1" min="1">
      <button class="card__plus">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8L12 16" stroke="black" stroke-width="1.2" stroke-linecap="round" />
          <path d="M16 12L8 12" stroke="black" stroke-width="1.2" stroke-linecap="round" />
        </svg>
      </button>
    </div>
    <p class="card__price">${{ card.price }}</p>
    <button class="card__delete">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 6L18 18" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    card: {
      type: Object
    }
  });
</script>

<style lang="scss">
  .card {
    &__item {
      max-width: 536px;
    }

    &__item:not(:last-child) {
      border-bottom: 0.50px solid #a3a3a3;
      padding-bottom: 40px;
    }

    &__img {
      margin-right: 15px;
    }

    &__div {
      width: 210px;
    }

    &__name {
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 150%;
      font-weight: 500;
    }

    &__id {
      font-size: 14px;
      line-height: 171%;
    }

    &__minus,
    &__plus {
      margin-right: 8px;
    }

    &__number {
      border: 0.50px solid #d9d9d9;
      border-radius: 4px;
      margin-right: 8px;
      padding: 8px 16px;
      width: 8px;
      font-size: 16px;
      font-weight: 500;
    }

    &__number:focus,
    &__input:focus {
      outline: none;
    }

    &__price {
      margin-right: 24px;
      font-size: 20px;
      font-weight: 500;
      line-height: 160%;
      letter-spacing: 0.03em;
    }
  }
</style>