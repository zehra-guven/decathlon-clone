<template>
  <div class="sidebar">
    <div 
      v-for="(button, index) in buttons" 
      :key="index"
      :class="['sidebar-button', { 'red-button': button.name === 'Seri Sonu' }]"
    >
      {{ button.name }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      buttons: [
        { name: 'Sporlar' },
        { name: 'Kadın' },
        { name: 'Erkek' },
        { name: 'Çocuk' },
        { name: 'Aksesuarlar' },
        { name: 'Ekipmanlar' },
        { name: 'Tüm Ürünler' },
        { name: 'Seri Sonu' },
        { name: 'Yeni Gelenler' },
        { name: 'Sağlık ve Beslenme' },
        { name: 'Atölye' },
      ]
    };
  }
};
</script>

<style scoped>
.sidebar {
  width: 400px;
  height: 903px;
  background-color: #1e3d5b; /* Hafif koyu deniz mavisi */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Butonlar arasında boşluk */
  padding-top: 20px; /* Üstten biraz boşluk */
}

.sidebar-button {
  width: 100%;
  height: 59px;
  background-color: #007bff; /* Mavi arka plan */
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 5px;
}

/* Kırmızı "Seri Sonu" butonu */
.red-button {
  background-color: red;
}

/* Hover efekti */
.sidebar-button:hover {
  background-color: #b0b0b0; /* Mavi üstünde gri tonunda hover etkisi */
}
</style>
