<template>
  <main>
    <section class="breadcrumbs">
      <div class="container">
        <ul class="flex">
          <li class="breadcrumbs__margin-link">
            <router-link class="breadcrumbs__link" to="/home">Home</router-link>
          </li>
          <li class="breadcrumbs__margin-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="#A4A4A4"/>
            </svg>
          </li>
          <li class="breadcrumbs__margin-link">
            <router-link class="breadcrumbs__link" to="/catalog">Catalog</router-link>
          </li>
          <li class="breadcrumbs__margin-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="#A4A4A4"/>
            </svg>
          </li>
          <li class="breadcrumbs__margin-link">
            <a class="breadcrumbs__link" href="#">Smartphones</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="catalog">
      <div class="catalog__list container flex">
        <div class="cactalog__filter">
          <input placeholder="Brand" type="text">
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
  </main>
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

<style>
  .breadcrumbs {
    padding: 44px 0;
  }

  .breadcrumbs__margin-link:not(:last-child) {
    margin-right: 25px;
  }

  .breadcrumbs__link {
    display: inline-block;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    color: #a4a4a4;
  }

  .breadcrumbs__margin-link:last-child .breadcrumbs__link {
    color: black;
    pointer-events: none;
  }

  /* catalog */

  .catalog {
    padding-top: 24px;
    padding-bottom: 56px;
  }

  .catalog__list {
    gap: 32px;
  }

  .catalog__filter {
    width: 256px;
  }

  .catalog__count {
    font-weight: 500;
    letter-spacing: 0.03em;
    color: #6C6C6C;
  }

  .catalog__count span {
    color: black;
  }

  .catalog__sublist {
    row-gap: 24px;
  }

  .catalog__item {
    width: 266px;
  }
</style>