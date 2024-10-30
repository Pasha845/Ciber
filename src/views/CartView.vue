<template>
  <div class="card">
    <div class="card__flex container">
      <div>
        <h2 class="card__title">Shopping Cart</h2>
        <div class="card__list">
          <CardProduct
            v-for="card in cards"
            :key="card.id"
            :card="card"
          />
        </div>
      </div>
      <div class="card__cube">
        <h2 class="card__subtitle">Order Summary</h2>
        <form class="card__form">
          <label class="card__label">
            <span class="card__span">Discount code / Promo code</span>
            <input class="card__input" type="text" placeholder="Code">
          </label>
          <label class="card__label">
            <span class="card__span">Your bonus card number</span>
            <input class="card__input" type="text" placeholder="Enter Card Number">
            <button class="card__apply">Apply</button>
          </label>
          <label class="card__label">
            <div class="card__total flex">
              <p class="card__value">Subtotal</p>
              <p>$2347</p>
            </div>
            <div class="card__total flex">
              <p class="card__value">Estimated Tax</p>
              <p>$50</p>
            </div>
            <div class="card__total flex">
              <p class="card__value">Estimated shipping & Handling</p>
              <p>$29</p>
            </div>
            <div class="card__total flex">
              <p class="card__value">Total</p>
              <p>$2426</p>
            </div>
          </label>
          <button class="card__check" type="submit">Checkout</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { cards } from "@/api/product";
  import CardProduct from "@/components/CardProduct.vue";
</script>

<style lang="scss">
  .card {
    padding: 112px 0;

    &__flex {
      display: flex;
      justify-content: space-between;
    }

    &__title {
      margin-bottom: 40px;
      font-size: 24px;
      font-weight: 600;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    &__cube {
      border: 1px solid #ebebeb;
      border-radius: 10px;
      padding: 56px 64px;
    }

    &__subtitle {
      margin-bottom: 40px;
      font-size: 20px;
      line-height: 80%;
      font-weight: 700;
      color: #111;
    }

    &__label {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    &__label:not(:last-child) {
      margin-bottom: 24px;
    }

    &__span {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 114%;
      font-weight: 500;
      color: #545454;
    }

    &__input {
      border: 1px solid #9F9F9F;
      border-radius: 7px;
      padding: 16px;
      width: 376px;
      font-size: 14px;
      line-height: 171%;
      letter-spacing: -0.01em;
    }

    &__input::placeholder {
      font-size: 14px;
      line-height: 171%;
      letter-spacing: -0.01em;
    }

    &__apply {
      text-align: center;
      position: absolute;
      top: 40px;
      right: 16px;
      border: 1px solid #000;
      border-radius: 6px;
      padding: 8px;
      width: 60px;
      font-size: 12px;
      line-height: 1;
      font-weight: 500;
    }

    &__total {
      justify-content: space-between;
      font-size: 16px;
      line-height: 200%;
      font-weight: 500;
      letter-spacing: 0.03em;
    }

    &__total:last-child {
      margin-bottom: 48px;
    }

    &__total:nth-child(2) &__value,
    &__total:nth-child(3) &__value {
      font-size: 16px;
      line-height: 200%;
      font-weight: 400;
      color: #545454;
    }

    &__check {
      border-radius: 6px;
      padding: 16px 170px;
      font-size: 16px;
      line-height: 150%;
      font-weight: 500;
      color: #fff;
      background: #000;
    }
  }
</style>
