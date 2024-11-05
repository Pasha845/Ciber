import { ref } from 'vue';

export const categories = ref([
  {
    id: 1,
    img: '/img/category-1.svg',
    text: 'Phones',
    link: 'smartphones'
  },
  {
    id: 2,
    img: '/img/category-2.svg',
    text: 'Smart Watches',
    link: 'smartwatches'
  },
  {
    id: 3,
    img: '/img/category-3.svg',
    text: 'Cameras',
    link: 'cameras'
  },
  {
    id: 4,
    img: '/img/category-4.svg',
    text: 'Headphones',
    link: 'headphones'
  },
  {
    id: 5,
    img: '/img/category-5.svg',
    text: 'Computers',
    link: 'computers'
  },
  {
    id: 6,
    img: '/img/category-6.svg',
    text: 'Gaming',
    link: 'gaming'
  },
  {
    id: 7,
    img: '/img/category-6.svg',
    text: 'Gaming',
    link: 'gaming'
  }
]);

export const products = ref([
  {
    id: 1,
    img: "/img/product-1.avif",
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: "900",
  },
  {
    id: 2,
    img: "/img/product-2.avif",
    title: "Blackmagic Pocket Cinema Camera 6k",
    price: "2535",
  },
  {
    id: 3,
    img: "/img/product-3.avif",
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: "399",
  },
  {
    id: 4,
    img: "/img/product-4.avif",
    title: "AirPods Max Silver",
    price: "549",
  },
  {
    id: 5,
    img: "/img/product-5.avif",
    title: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: "369",
  },
  {
    id: 6,
    img: "/img/product-6.avif",
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "1799",
  },
  {
    id: 7,
    img: "/img/product-7.avif",
    title: "Galaxy Buds FE Graphite",
    price: "99.99",
  },
  {
    id: 8,
    img: "/img/product-8.avif",
    title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: "398",
  },
]);

export const populars = ref([
  {
    id: 1,
    img: "/img/popular-1.avif",
    title: "Popular Products",
    text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    id: 2,
    img: "/img/popular-2.avif",
    title: "Ipad Pro",
    text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    id: 3,
    img: "/img/popular-3.avif",
    title: "Samsung Galaxy",
    text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    id: 4,
    img: "/img/popular-4.avif",
    title: "Macbook Pro",
    text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
]);

export const discounts = ref([
  {
    id: 1,
    img: "/img/discount-1.avif",
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: "1437",
  },
  {
    id: 2,
    img: "/img/discount-2.avif",
    title: "AirPods Max Silver",
    price: "549",
  },
  {
    id: 3,
    img: "/img/discount-3.avif",
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: "399",
  },
  {
    id: 4,
    img: "/img/discount-4.avif",
    title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: "1499",
  },
]);

export const catalogs = ref([
  {
    id: 1,
    img: '/img/catalog-1.png',
    title: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    price: '1437'
  },
  {
    id: 2,
    img: '/img/catalog-2.png',
    title: 'Apple iPhone 11 128GB White (MQ233)',
    price: '510'
  },
  {
    id: 3,
    img: '/img/catalog-2.png',
    title: 'Apple iPhone 11 128GB White (MQ233)',
    price: '550'
  },
  {
    id: 4,
    img: '/img/catalog-3.png',
    title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
    price: '1499'
  },
  {
    id: 5,
    img: '/img/catalog-1.png',
    title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
    price: '1399'
  },
  {
    id: 6,
    img: '/img/catalog-4.png',
    title: 'Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)',
    price: '1600'
  },
  {
    id: 7,
    img: '/img/catalog-5.png',
    title: 'Apple iPhone 13 mini 128GB Pink (MLK23)',
    price: '850'
  },
  {
    id: 8,
    img: '/img/catalog-6.png',
    title: 'Apple iPhone 14 Pro 256GB Space Black (MQ0T3)',
    price: '1399'
  },
  {
    id: 9,
    img: '/img/catalog-3.png',
    title: 'Apple iPhone 14 Pro 256GB Silver (MQ103)',
    price: '1399'
  }
]);

export const goods = ref({
  id: 1,
  imgOne: "/img/goods-1.png",
  imgTwo: "/img/goods-2.png",
  imgThree: "/img/goods-3.png",
  imgFour: "/img/goods-4.png",
  title: "Apple iPhone 14 Pro Max",
  price: 1399,
  oldPrice: 1499,
  colors: [
    {
      id: 1,
      value: '#000'
    },
    {
      id: 2,
      value: '#781dbc'
    },
    {
      id: 3,
      value: '#e10000'
    },
    {
      id: 4,
      value: '#e1b000'
    },
    {
      id: 5,
      value: '#e8e8e8'
    }
  ],
  volums: [
    {
      id: 1,
      value: '128GB'
    },
    {
      id: 2,
      value: '256GB'
    },
    {
      id: 2,
      value: '512GB'
    },
    {
      id: 4,
      value: '1TB'
    }
  ],
  text: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras'
});

export const cards = ref([
  {
    id: 25139526913984,
    image: "/img/card-1.png",
    title: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399
  },
  {
    id: 53459358345,
    image: "/img/card-2.png",
    title: 'AirPods Max Silver',
    price: 549
  },
  {
    id: 63632324,
    image: "/img/card-3.png",
    title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
    price: 399
  }
]);