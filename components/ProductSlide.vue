<!--ProductSlide.vue src/components/ProductSlide.vue-->

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
        <button class="add-to-cart" @click="addToCart(product)">Sepete Ekle</button>
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
import { ref, computed, defineEmits, onMounted } from "vue";
import { collection, getDocs, query, limit, addDoc } from "firebase/firestore"; // addDoc burada import edilmiştir
import { db } from "@/firebaseConfig";
import { useCartStore } from "~/store/cart";
// Firebase Firestore Bağlantısı
const cartStore = useCartStore();

// Ürün Arayüzü
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

// Başlangıçta boş bir ürün dizisi
const products = ref<Product[]>([]);

// FİREBASE'den ürünleri çekme fonksiyonu
const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "products"), limit(10)) // Sadece 10 ürün al
    );
    const fetchedProducts = querySnapshot.docs.map(doc => doc.data() as Product); // Veriyi al
    products.value = fetchedProducts; // products dizisini güncelle
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// component mount olduğunda veriyi çek
onMounted(() => {
  fetchProducts();
});

const emit = defineEmits(["addToCart"]);

// Sepete ürün ekleme işlemi,Pinia ile 
const addToCart = async (product: Product) => {
  try {
    // Sepete ürün ekle
    await addDoc(collection(db, "cart"), product); // Firestore'a yeni belge ekle
    alert("Ürün sepete eklendi!");
  } catch (error) {
    console.error("Ürün sepete eklenirken hata oluştu:", error);
  }
  emit("addToCart", product);
};

// Sayfa yönetimi
const currentIndex = ref(0); // Başlangıçta ilk sayfa
const itemsPerSlide = 4; // Kaç ürün gösterilecek

// Toplam kaç sayfa olacağını hesapla
const totalPages = computed(() => Math.ceil(products.value.length / itemsPerSlide));

// Görünen ürünleri hesapla
const visibleProducts = computed(() => {
  return products.value.slice(currentIndex.value * itemsPerSlide, (currentIndex.value + 1) * itemsPerSlide);
});

// Önceki slayda git
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = totalPages.value - 1; // En son slayda git
  }
};

// Sonraki slayda git
const nextSlide = () => {
  if (currentIndex.value < totalPages.value - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Başa dön
  }
};

// Belirli bir slayda git
const goToSlide = (index: number) => {
  currentIndex.value = index;
};
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
height: 300px;
  width: 250px;
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

.add-to-cart {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1rem;
}
.add-to-cart:hover {
  background-color: #0056b3;
}
</style>