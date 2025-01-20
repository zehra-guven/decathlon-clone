<template>
  <div class="product-carousel">
    <div class="carousel-products">
      <div
        v-for="product in visibleProducts"
        :key="product.title"
        class="product"
      >
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">
          {{ product.discountedPrice.toLocaleString() }}₺
          <span
            v-if="product.discount"
            class="original-price"
          >{{ product.price.toLocaleString() }}₺</span>
        </p>
        <p class="product-rating">
          ⭐ {{ product.rating }} ({{ product.reviews }} reviews)
        </p>
        <span
          v-if="product.label"
          class="product-label"
          :class="product.labelColor"
        >
          {{ product.label }}
        </span>
      </div>
    </div>

    <div class="carousel-controls">
      <button @click="prevSlide">‹</button>
      <div class="carousel-indicators">
        <span
          v-for="(page, index) in totalPages"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
      <button @click="nextSlide">›</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import urun1 from "assets/urun1.png";
import urun2 from "assets/urun2.png";
import urun3 from "assets/urun3.png";
import urun4 from "assets/urun4.png";
import urun5 from "assets/urun5.png";
import urun6 from "assets/urun6.png";
import urun7 from "assets/urun7.png";
import urun8 from "assets/urun8.png";

interface Product {
  title: string;
  image: string;
  price: number;
  discount?: number;
  label?: string;
  labelColor?: string;
  rating: number;
  reviews: number;
  discountedPrice: number;
}

const products = ref<Product[]>([
  {
    title: "Çocuk Su Geçirmez Outdoor Kar Botu",
    image: urun1,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
  {
    title: "Yetişkin Termal Üst İçlik",
    image: urun2,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
  {
    title: "Erkek Su Geçirmez Outdoor Kar Montu",
    image: urun3,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
  {
    title: "Erkek Su Geçirmez Outdoor Kar Botu",
    image: urun4,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
  {
    title: "Kadın Termal Üst İçlik",
    image: urun5,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
  {
    title: "Çocuk Outdoor Ayakkabı",
    image: urun6,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
  {
    title: "Kadın Kar Montu",
    image: urun7,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
  {
    title: "Unisex Su Geçirmez Bot",
    image: urun8,
    price: 3950,
    discount: 22,
    label: "İNDİRİM",
    labelColor: "red-label",
    rating: 5,
    reviews: 710,
    discountedPrice: 3950 - (3950 * 22) / 100,
  },
]);

const currentIndex = ref(0);
const itemsPerSlide = 4;

const visibleProducts = computed(() => {
  return products.value.slice(currentIndex.value, currentIndex.value + itemsPerSlide);
});

const nextSlide = () => {
  currentIndex.value++;
  if (currentIndex.value > products.value.length - itemsPerSlide) {
    currentIndex.value = 0; // Baştan başlat
  }
};

const prevSlide = () => {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    currentIndex.value = products.value.length - itemsPerSlide; // Sona sar
  }
};

const totalPages = computed(() =>
  Math.max(1, products.value.length - itemsPerSlide + 1)
);

const goToSlide = (pageIndex: number) => {
  currentIndex.value = pageIndex * itemsPerSlide;
};

const translateX = computed(() => {
  return `translateX(-${(currentIndex.value / products.value.length) * 100}%)`;
});

</script>

<style scoped>
.product-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel-products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  transition: transform 0.5s ease; /* Geçiş süresi ve tipi */
  will-change: transform; /* Performansı optimize eder */
}

.product {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
}
.product-image {
  max-width: 100%;
  height: auto;
}
.product-title {
  font-size: 1.1rem;
  margin: 10px 0;
}
.product-price {
  font-size: 1rem;
  color: #333;
}
.original-price {
  text-decoration: line-through;
  color: #999;
  margin-left: 5px;
}
.product-rating {
  font-size: 0.9rem;
  color: #666;
}
.product-label {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 5px;
}
.red-label {
  background-color: #f88;
  color: #fff;
}
.carousel-controls {
  display: flex;
  gap: 5px;
  align-items: center;
}
.carousel-indicators {
  display: flex;
  gap: 8px;
}
.carousel-indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.carousel-indicators span.active {
  background-color: #555;
  transform: scale(1.2); /* Aktif baloncuk biraz büyüsün */
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
