<template>
  <div class="showroom">
    <!-- Sol Taraf: Büyük Fotoğraf ve "Polarlar" Yazısı -->
    <div class="main-photo">
      <img src="/assets/polar.png" alt="Büyük Fotoğraf" class="photo" />
      <div class="caption">
        <p>Polarlar</p>
        <!-- Butonu fotoğrafın içine yerleştiriyoruz -->
        <button class="explore-btn">İncele!</button>
      </div>
    </div>

    <!-- Sağ Taraf: Ürün Kartları -->
    <div class="products">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" class="product-image" />
        <div class="price-box">
          <span class="price">{{ product.price }}₺</span>
        </div>
        <div class="brand">{{ product.brand }}</div>
        <p class="description">{{ product.description }}</p>
        <div class="rating">
          <span class="stars">{{ '★'.repeat(product.rating) }}</span>
          <span class="votes">({{ product.votes }} oy)</span>
        </div>
        <p class="delivery">Mağazadan Ücretsiz Teslimat</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import product1 from 'assets/product1.png';
  import product2 from 'assets/product2.png';
  import product3 from 'assets/product3.png';
  import product4 from 'assets/product4.png';
  import product5 from 'assets/product5.png';
  import product6 from 'assets/product6.png';
  export default defineComponent({
    data() {
      return {
        // Ürünler
        products: [
          {
            id: 1,
            image: product1,
            price: 150,
            brand: 'Marka A',
            description: 'Ürün açıklaması A',
            rating: 4,
            votes: 120,
          },
          {
            id: 2,
            image: product2,
            price: 200,
            brand: 'Marka B',
            description: 'Ürün açıklaması B',
            rating: 5,
            votes: 250,
          },
          {
            id: 3,
            image: product3,
            price: 300,
            brand: 'Marka C',
            description: 'Ürün açıklaması C',
            rating: 3,
            votes: 80,
          },
          {
            id: 4,
            image: product4,
            price: 150,
            brand: 'Marka A',
            description: 'Ürün açıklaması A',
            rating: 4,
            votes: 120,
          },
          {
            id: 5,
            image: product5,
            price: 200,
            brand: 'Marka B',
            description: 'Ürün açıklaması B',
            rating: 5,
            votes: 250,
          },
          {
            id: 6,
            image: product6,
            price: 300,
            brand: 'Marka C',
            description: 'Ürün açıklaması C',
            rating: 3,
            votes: 80,
          },
        ]
      };
    }
  });
</script>

<style scoped>
.showroom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.main-photo {
  position: relative;
  width: 100%;
  height: max-content ;
}

.photo {
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.photo:hover {
  color: #555;
  opacity: 0.8;
}

/* Buton ve caption kısmını fotoğrafın üzerine yerleştiriyoruz */
.caption {
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: white;
  font-size: 20px;
  z-index: 2; /* Butonun fotoğrafın üstünde görünmesini sağlar */
}

.explore-btn {
  background-color: #003f73;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: -30px;
  right: 0px;
  z-index: 0; /* Butonun daha üstte görünmesini sağlar */
}

.explore-btn:hover {
  background-color: #002f5c;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 70%;
  height: auto;
  object-fit: cover;
}

.price-box {
  background-color: yellow;
  width: auto;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  align-self: flex-start;
}

.price {
  font-size: 14px;
  font-weight: bold;
}

.brand {
  margin: 5px 0;
  font-style: italic;
}

.description {
  text-align: center;
  font-size: 14px;
  color: #555;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stars {
  color: gold;
}

.votes {
  font-size: 12px;
  color: #777;
  margin-left: 5px;
}

.delivery {
  color: green;
  font-size: 10px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
