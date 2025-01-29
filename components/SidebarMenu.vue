<template>
  <div>
    <!-- Saydam gri overlay -->
    <div v-if="isOpen" class="overlay" @click="$emit('close')"></div>

    <!-- Sidebar -->
    <div v-if="isOpen" class="sidebar">
      <button class="close-button" @click="$emit('close')">X</button>
      <div 
        v-for="(button, index) in buttons" 
        :key="index"
        :class="['sidebar-button', { 'red-button': button.name === 'Seri Sonu' }]"
        @click="handleClick(button.name)"
      >
        {{ button.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isOpen: Boolean
  },
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
  },
  methods: {
    handleClick(buttonName: string) {
      console.log(`Tıklanan buton: ${buttonName}`);
      // Burada butona tıklanınca yapılacak işlemi ekleyebilirsiniz
    }
  }
};
</script>

<style scoped>
/* Saydam gri overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Saydam gri renk */
  z-index: 999; /* Sidebar'dan önce gelsin */
}

/* Sidebar */
.sidebar {
  width: 400px;
  height: 903px;
  background-color: #1e3d5b; /* Hafif koyu deniz mavisi */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Butonlar arasında boşluk */
  padding-top: 20px; /* Üstten biraz boşluk */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
}

.close-button {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
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
