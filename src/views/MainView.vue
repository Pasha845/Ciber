<template>
  <section class="hero">
    <div class="hero__list container list">
      <div class="hero__item">
        <p class="hero__subtitle mb-24">Pro.Beyond.</p>
        <h2 class="hero__title mb-24">IPhone 14 <span>Pro</span></h2>
        <p class="hero__text mb-24">Created to change everything for the better. For everyone</p>
        <router-link class="btn" to="/product/1">Shop Now</router-link>
      </div>
      <picture>
        <source srcset="/img/hero.webp" media="(max-width: 576px)">
        <source srcset="/img/hero.avif" media="(min-width: 577px)">
        <img loading="eager" srcset="/img/hero.avif" alt="Hero image" src="#" width="406" height="632">
      </picture>
    </div>
  </section>

  <section class="banner">
    <ul class="banner__container container">
      <li class="banner__item">
        <div class="banner__subitem flex">
          <picture>
            <source srcset="/img/banner-1.webp" media="(max-width: 576px)">
            <source srcset="/img/banner-1.avif" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/banner-1.avif" alt="Banner image" src="#" width="360" height="343">
          </picture>
          <div class="banner__elem">
            <h3 class="banner__title mb-16">Playstation 5</h3>
            <p class="banner__text">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
          </div>
        </div>
        <div class="banner__list">
          <div class="banner__newitem flex">
            <picture>
              <source srcset="/img/banner-2.webp" media="(max-width: 576px)">
              <source srcset="/img/banner-2.avif" media="(min-width: 577px)">
              <img loading="lazy" srcset="/img/banner-2.avif" alt="Banner image" src="#" width="104" height="272">
            </picture>
            <div class="banner__elem">
              <h3 class="banner__newtitle">Apple AirPods <span>Max</span></h3>
              <p class="banner__text">Computational audio. Listen, it's powerful</p>
            </div>
          </div>
          <div class="banner__newitem flex">
            <picture>
              <source srcset="/img/banner-3.webp" media="(max-width: 576px)">
              <source srcset="/img/banner-3.avif" media="(min-width: 577px)">
              <img loading="lazy" srcset="/img/banner-3.avif" alt="Banner image" src="#" width="136" height="190">
            </picture>
            <div class="banner__newelem">
              <h3 class="banner__lasttitle">Apple Vision <span>Pro</span></h3>
              <p class="banner__text">An immersive way to experience entertainment</p>
            </div>
          </div>
        </div>
      </li>
      <li class="banner__item flex">
        <div class="banner__elem">
          <h3 class="banner__subtitle mb-16">Macbook <span>Air</span></h3>
          <p class="banner__text mb-16">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
          <router-link class="subbtn" to="/product/1">Shop Now</router-link>
        </div>
        <picture>
          <source srcset="/img/banner-4.webp" media="(max-width: 576px)">
          <source srcset="/img/banner-4.avif" media="(min-width: 577px)">
          <img loading="lazy" srcset="/img/banner-4.avif" alt="Banner image" src="#" width="292" height="502">
        </picture>
      </li>
    </ul>
  </section>

  <section class="category padding">
    <div class="container">
      <div class="category__list">
        <h2 class="category__title">Browse By Category</h2>
        <div>
          <button class="category__prev" aria-label="To prev slide">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3333 27.6667C21.0678 27.6679 20.8131 27.5622 20.6266 27.3733L9.95993 16.7067C9.57 16.3162 9.57 15.6838 9.95993 15.2933L20.6266 4.62667C21.0206 4.25952 21.6346 4.27035 22.0154 4.65117C22.3962 5.03199 22.4071 5.64599 22.0399 6.04L12.0799 16L22.0399 25.96C22.4299 26.3504 22.4299 26.9829 22.0399 27.3733C21.8534 27.5622 21.5987 27.6679 21.3333 27.6667Z" fill="black" />
            </svg>
          </button>
          <button class="category__next" aria-label="To next slide">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6667 4.33333C10.9322 4.33208 11.1869 4.43782 11.3734 4.62667L22.0401 15.2933C22.43 15.6838 22.43 16.3162 22.0401 16.7067L11.3734 27.3733C10.9794 27.7405 10.3654 27.7296 9.98457 27.3488C9.60375 26.968 9.59292 26.354 9.96007 25.96L19.9201 16L9.96007 6.04C9.57013 5.64958 9.57013 5.01709 9.96007 4.62667C10.1466 4.43782 10.4013 4.33208 10.6667 4.33333Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
      <swiper class="category__slider flex" :slides-per-view="6" :space-between="32" :loop="true">
        <swiper-slide class="category__link" v-for="(category, key) in categories" :key="key">
          <router-link class="category__slide" :to="'/catalog/' + category.link">
            <img :src="category.img" alt="Category image" width="48" height="48">
            <p>{{ category.text }}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="product">
    <div class="container">
      <input class="product__subtab" checked id="tab-btn-1" name="tab-btn" type="radio">
      <label class="product__tab" for="tab-btn-1">New Arrival</label>
      <input class="product__subtab" id="tab-btn-2" name="tab-btn" type="radio">
      <label class="product__tab" for="tab-btn-2">Bestseller</label>
      <input class="product__subtab" id="tab-btn-3" name="tab-btn" type="radio">
      <label class="product__tab" for="tab-btn-3">Featured Products</label>
      <div class="product__content" id="tab-1">
        <div class="product__list list">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <div class="product__content" id="tab-2">
        <div class="product__list list">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <div class="product__content" id="tab-3">
        <div class="product__list list">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="popular">
    <div class="popular__container container">
      <PopularCard
        v-for="popular in populars"
        :key="popular.id"
        :popular="popular"
      />
    </div>
  </section>

  <section class="discounts padding">
    <div class="container">
      <h2 class="discounts__title">Discounts up to -50%</h2>
      <div class="discounts__list list">
        <DiscountCard
          v-for="discount in discounts"
          :key="discount.id"
          :discount="discount"
        />
      </div>
    </div>
  </section>

  <section class="sale">
    <div class="container center">
      <h2 class="sale__title">Big Summer <span>Sale</span></h2>
      <p class="sale__text">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
      <router-link class="btn" to="/product/1">Shop Now</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { categories, products, populars, discounts } from "@/api/product";
  import ProductCard from "@/components/ProductCard.vue";
  import PopularCard from "@/components/PopularCard.vue";
  import DiscountCard from "@/components/DiscountCard.vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
</script>

<style lang="scss" scoped>
  .hero {
    color: white;
    background: linear-gradient(95deg, #211c24 0%, #211c24 100%);

    &__item {
      max-width: 822px;
    }

    &__subtitle {
      font-size: 25px;
      line-height: 32px;
      font-weight: 600;
      opacity: 0.4;
    }

    &__title {
      font-size: 96px;
      line-height: 72px;
      font-weight: 200;
      letter-spacing: -0.01em;
      span {
        font-weight: 600;
      }
    }

    &__text {
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      color: #909090;
    }
  }

  @media (max-width: 576px) {
    .hero {
      padding-top: 88px;
    
      &__list {
        gap: 48px;
        picture img {
          width: 343px;
          height: 289px;
        }
      }

      &__item {
        text-align: center;
        max-width: 100%;
      }

      &__subtitle,
      &__title,
      &__text {
        margin-bottom: 16px;
      }
    }
  }

  /* banner */

  .banner {
    &__container {
      display: flex;
      padding: 0;
      max-width: 1440px;
    }

    &__list {
      display: flex;
    }

    &__item {
      width: 50%;
      background: #ededed;
    }

    &__subitem {
      background: white;
    }

    &__newitem {
      width: 50%;
    }

    &__newitem:last-child {
      background: #353535;
    }

    &__elem {
      font-weight: 500;
    }

    &__newelem {
      padding-left: 16px;
      padding-right: 48px;
    }

    &__title,
    &__subtitle,
    &__newtitle {
      font-size: 49px;
      line-height: 40px;
      color: black;
    }

    &__subtitle {
      font-size: 64px;
      line-height: 57px;
      font-weight: 200;
    }

    &__subtitle span {
      font-weight: 500;
    }

    &__newtitle {
      margin-bottom: 8px;
      font-size: 29px;
      line-height: 40px;
      font-weight: 300;
      span {
        font-weight: 500;
      }
    }

    &__lasttitle {
      margin-bottom: 8px;
      font-size: 29px;
      line-height: 40px;
      font-weight: 300;
      color: white;
      span {
        font-weight: 5;
      }
    }

    &__text {
      font-size: 14px;
      line-height: 24px;
      color: #909090;
    }

    &__item:last-child {
      padding-left: 56px;
    }

    &__newitem &__elem {
      padding: 0 48px;
    }
  }

  @media (max-width: 576px) {
    .banner {
      &__container,
      &__list {
        flex-direction: column;
      }

      &__item,
      &__subitem,
      &__newitem {
        flex-direction: column;
        width: 100%;
      }

      &__subitem:first-child picture img {
        margin-bottom: 24px;
        width: 200px;
        height: 200px;
      }
    }
  }

  /* category */

  .category {
    background: #FAFAFA;

    &__list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
    }

    &__title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 500;
      letter-spacing: 0.01em;
    }

    &__prev {
      margin-right: 16px;
    }

    &__prev:focus,
    &__next:focus {
      outline: none;
    }

    &__slide {
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      border-radius: 15px;
      padding: 24px 0;
      width: 160px;
      background: #ededed;
      transition: .8s;
    }
  }

  /* product */

  .product {
    padding: 56px 0;

    &__subtab {
      display: none;
    }

    #tab-btn-1:checked~#tab-1,
    #tab-btn-2:checked~#tab-2,
    #tab-btn-3:checked~#tab-3 {
      display: block;
    }

    &__subtab:checked + &__tab {
      border-bottom: 2px solid black; 
      color: black;
      cursor: default;
    }

    &__tab:not(:last-child) {
      margin-right: 32px;
    }

    &__tab {
      padding-bottom: 9px;
      font-size: 18px;
      line-height: 32px;
      font-weight: 500;
      color: #8b8b8b;
      cursor: pointer;
    }

    &__tab:hover {
      color: rgb(19, 19, 180);
    }

    &__tab:focus {
      outline: none;
    }

    &__content {
      display: none;
      margin-top: 32px;
    }

    &__list {
      align-items: normal;
    }
  }

  /* popular */

  .popular {
    &__container {
      display: flex;
      padding: 0;
      max-width: 1440px;
    }
  }

  @media (max-width: 576px) {
    .popular {
      &__container {
        flex-direction: column;
      }
    }
  }

  /* discounts */

  .discount {
    &__title {
      margin-bottom: 32px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 500;
    }

    &__list {
      align-items: normal;
    }
  }

  /* sale */

  .sale {
    padding-top: 159px;
    padding-bottom: 89px;
    color: white;
    background-image: url("../img/sale.avif");
    background-repeat: no-repeat;
    background-size: cover;

    &__title {
      font-size: 72px;
      line-height: 1;
      font-weight: 200;
      letter-spacing: -0.01em;
      span {
        font-weight: 500;
      }
    }

    &__text {
      margin-bottom: 40px;
      color: #787878;
    }
  }

  @media (max-width: 576px) {
    .sale {
      padding: 104px 0;
      background-image: url("../img/sale.webp");

      &__title {
        font-size: 48px;
      }
    }
  }
</style>
