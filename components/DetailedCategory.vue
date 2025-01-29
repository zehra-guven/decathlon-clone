<template>
  <div>
    <!-- Menü, Header'dan gelen prop ile açılıp kapanacak -->
    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="menuOpen" class="dropdown-menu">
        <div class="menu-content">
          <!-- Yan yana Kategori ve Tavsiye Edilen Sporlar Bölümü -->
          <div class="menu-list">
            <!-- Arama alanı burada olacak -->
            <div class="search-input">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Kategorilerde ara..."
                @input="filterCategories"
              />
              <img src="@/assets/search.svg" alt="search" class="search-icon" />
            </div>
            
            <!-- Tavsiye Edilen Sporlar Butonu -->
            <button class="recommendation-button" @click="toggleRecommendations">
              Tavsiye Edilen Sporlar
            </button>
            
            <ul>
              <li v-for="(category, index) in filteredCategories" :key="index">
                {{ category.name }}
              </li>
            </ul>
          </div>

          <!-- Tavsiye Edilen Sporlar Bölümü -->
          <div v-if="showRecommendations" class="recommended">
            <h3>Tavsiye Ettiğimiz Sporlar</h3>
            <div class="recommendations">
              <div class="recommendation-item" v-for="(recommendation, index) in recommendations" :key="index">
                <img :src="recommendation.image" alt="icon" class="recommendation-icon" />
                <h4>{{ recommendation.title }}</h4>
                <ul>
                  <li v-for="(item, i) in recommendation.items" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import snowboard from "assets/images/snowboard.png";
import hiking from "assets/images/hiking.png";
import fitness from "assets/images/fitness.png";
import hunting from "assets/images/hunting.png";

export default defineComponent({
  name: "DetailedCategory",
  props: {
    menuOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const showRecommendations = ref(false); // Tavsiye edilen sporlar bölümünü kontrol eder
    const searchQuery = ref("");

    const categories = [
      { name: "Avcılık" },
      { name: "Badminton" },
      { name: "Bale, Dans" },
      { name: "Balıkçılık" },
      { name: "Basketbol" },
      { name: "Bilardo" },
      { name: "Binicilik" },
      { name: "Bisiklet" },
      { name: "Boks" },
      { name: "Bushcraft" },
    ];

    const recommendations = [
      {
        title: "Hiking, Trekking",
        image: hiking,
        items: ["Ayakkabı ve Kar Botları", "Outdoor Çantalar", "Ekipmanlar"],
      },
      {
        title: "Fitness Kardiyo",
        image: fitness,
        items: ["Fitness Kardiyo Aletleri", "Ağırlık Setleri", "Pilates Kıyafetleri"],
      },
      {
        title: "Kayak, Snowboard",
        image: snowboard,
        items: ["Kayak ve Snowboard Ekipmanları", "Kıyafet ve Giyim", "Aksesuarlar"],
      },
      {
        title: "Avcılık",
        image: hunting,
        items: ["Av Malzemesi", "Avcılık Kıyafetleri", "Köpek Ürünleri"],
      },
    ];

    const filterCategories = () => {
      filteredCategories.value = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    };

    const toggleRecommendations = () => {
      showRecommendations.value = !showRecommendations.value; // Butona tıklanınca görünürlüğü değiştirir
    };

    const filteredCategories = computed(() => {
      return categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // Animasyon lifecycle methods
    const beforeEnter = (el: HTMLElement) => {
      el.style.opacity = "0";
    };

    const enter = (el: HTMLElement, done: Function) => {
      el.offsetHeight; // Reflow trigger
      el.style.transition = "opacity 0.5s ease-in-out";
      el.style.opacity = "1";
      done();
    };

    const leave = (el: HTMLElement, done: Function) => {
      el.style.transition = "opacity 0.5s ease-in-out";
      el.style.opacity = "0";
      done();
    };

    return {
      showRecommendations,
      toggleRecommendations,
      searchQuery,
      filterCategories,
      filteredCategories,
      recommendations,
      beforeEnter,
      enter,
      leave,
    };
  },
});
</script>

<style scoped>
.category-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.search-input {
  position: relative;
  margin-bottom: 10px;
}

.search-input input {
  padding: 10px 10px;
  width: 90%;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  position: absolute;
  width: 100%;
  z-index: 9999;
}

.menu-content {
  display: flex;
  justify-content: flex-start;
  gap: 0;
}

.menu-list {
  width: 300px;
  height: 576px;
}

.menu-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
}

.recommendation-button {
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.recommended {
  width: 820px;
  height: 520px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  display: block;
}

.recommended h3 {
  margin-bottom: 20px;
}

.recommendations {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
}

.recommendation-item {
  width: 120px;
  text-align: center;
}

.recommendation-icon {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
