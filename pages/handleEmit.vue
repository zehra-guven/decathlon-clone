<!--handleEmit.vue src/components/handleEmit.vue-->
<template>
    <div>
      <ProductSlide @addToCart="handleAddToCart" />
      <Cart v-if="cartProducts.length > 0" :cartProducts="cartProducts" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ProductSlide from '@/components/ProductSlide.vue';
  import Cart from '@/components/Cart.vue';
  
  interface Product {
    title: string;
    image: string;
    price: number;
    discountedPrice: number;
    discount?: number;
    label?: string;
    labelColor?: string;
    rating: number;
    reviews: number;
  }
  
  const cartProducts = ref<Product[]>([]);
  
  const handleAddToCart = (product: Product) => {
    console.log('Adding product to cart:', product); // Debugging
    cartProducts.value.push(product);
  };
  </script>