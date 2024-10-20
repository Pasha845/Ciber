<template>
  <section class="breadcrumbs">
    <div class="container">
      <ul class="flex">
        <li class="breadcrumbs__margin-link">
          <router-link class="breadcrumbs__link" to="/">Home</router-link>
        </li>
        <li class="breadcrumbs__margin-link">
          <router-link class="breadcrumbs__link" to="/catalog">Catalog</router-link>
        </li>
        <li class="breadcrumbs__margin-link">
          <a class="breadcrumbs__link" href="#">Smartphones</a>
        </li>
      </ul>
    </div>
  </section>

  <section class="catalog">
    <div class="catalog__list container flex">
      <div class="catalog__filter flex">
        <div class="catalog__select">Brand</div>
        <div class="catalog__select">Battery capacity</div>
        <div class="catalog__select">Screen type</div>
        <div class="catalog__select">Screen diagonal</div>
        <div class="catalog__select">Protection class</div>
        <div class="catalog__select">Built-in memory</div>
      </div>
      <div class="catalog__products">
        <div class="flex mb-24">
          <div>
            <p class="catalog__count">Selected Products: <span>85</span></p>
          </div>

        </div>
        <div class="catalog__sublist list">
          <CatalogCard
            v-for="catalog in catalogs"
            :key="catalog.id"
            :catalog="catalog"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import CatalogCard from "@/components/CatalogCard.vue";

  const catalogs = ref([
    {
      img: '/img/catalog-1.png',
      title: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      price: '1437'
    },
    {
      img: '/img/catalog-2.png',
      title: 'Apple iPhone 11 128GB White (MQ233)',
      price: '510'
    },
    {
      img: '/img/catalog-2.png',
      title: 'Apple iPhone 11 128GB White (MQ233)',
      price: '550'
    },
    {
      img: '/img/catalog-3.png',
      title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
      price: '1499'
    },
    {
      img: '/img/catalog-1.png',
      title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
      price: '1399'
    },
    {
      img: '/img/catalog-4.png',
      title: 'Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)',
      price: '1600'
    },
    {
      img: '/img/catalog-5.png',
      title: 'Apple iPhone 13 mini 128GB Pink (MLK23)',
      price: '850'
    },
    {
      img: '/img/catalog-6.png',
      title: 'Apple iPhone 14 Pro 256GB Space Black (MQ0T3)',
      price: '1399'
    },
    {
      img: '/img/catalog-3.png',
      title: 'Apple iPhone 14 Pro 256GB Silver (MQ103)',
      price: '1399'
    }
  ])
</script>

<style lang="scss">
  .catalog {
    padding-top: 24px;
    padding-bottom: 56px;

    &__list {
      gap: 32px;
      align-items: flex-start;
    }

    &__filter {
      flex-direction: column;
      gap: 24px;
    }

    &__select {
      border-bottom: 0.50px solid #b5b5b5;
      padding: 12px 0px;
      width: 256px;
      font-size: 18px;
      line-height: 133%;
      font-weight: 500;
      letter-spacing: 0.03em;
      color: #000;
    }

    &__count {
      font-weight: 500;
      letter-spacing: 0.03em;
      color: #6C6C6C;
      span {
        font-size: 20px;
        line-height: 80%;
        color: black;
      }
    }

    &__sublist {
      row-gap: 24px;
    }

    &__item {
      width: 266px;
    }
  }
</style>