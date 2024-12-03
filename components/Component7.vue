<!-- %80 ZOOM -->
<template>
  <div class="categories">
    <h2>Popüler Kategoriler</h2>
    <div class="categories-grid">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-item"
      >
        <img :src="category.image" :alt="category.name" />
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import botlar from "assets/botlar.png";
import polarlar from "assets/polarlar.png";
import montlar from "assets/montlar.png";
import iclikler from "assets/iclikler.png";
import eldivenler from "assets/eldivenler.png";
import pantolonlar from "assets/pantolonlar.png";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PopularCategories",
  data() {
    return {
      categories: [
        { id: 1, name: "Botlar", image: botlar },
        { id: 2, name: "Polarlar", image: polarlar },
        { id: 3, name: "Montlar", image: montlar },
        { id: 4, name: "İçlikler", image: iclikler },
        { id: 5, name: "Eldivenler", image: eldivenler },
        { id: 6, name: "Pantolonlar", image: pantolonlar },
      ],
    };
  },
});
</script>

<style scoped>
.categories {
  text-align: center;
  padding: 20px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.category-item {
  display: absolute;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.category-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.category-item p {
  margin-top: 10px;
  font-weight: bold;
}
</style>
