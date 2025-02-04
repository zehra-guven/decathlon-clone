<template>
  <div>
    <!-- Saydam gri overlay -->
    <div v-if="isOpen" class="overlay" @click="$emit('close')"></div>

    <!-- Sidebar -->
    <div v-if="isOpen" class="sidebar">
    

      <!-- Kategori Bölümü -->
      <div class="sidebar-buttons">
        <div
          v-for="(button, index) in buttons"
          :key="index"
          :class="['sidebar-button', { 'bold-button': index < 7, }]"
          @click="handleClick(button.name)"
        >
          <span>{{ button.name }}</span>
          <span class="arrow"> &gt; </span>
        </div>
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
        { name: 'Atölye' }
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
  width: 300px; /* Sidebar genişliği */
  height: 100%; /* Sidebar'ı tam ekran yapalım */
  background-color: #3c43a5; /* Hafif koyu deniz mavisi */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px; /* Üstten biraz daha boşluk */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sidebar kenarlarına gölge */
  overflow-y: auto; /* Sidebar'da kaydırma yapılabilmesi için */
}

/* Kapatma butonu */
.close-button {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin-bottom: 20px; /* Kapatma butonuna biraz boşluk */
}

/* Butonlar */
.sidebar-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Her buton */
.sidebar-button {
  width: 100%;
  height: 50px;
  background-color: transparent; /* Arka plan transparent */
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: space-between; /* Sol tarafa hizalama */
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px 0;
}

/* İlk 7 buton bold */
.bold-button {
  font-weight: bold;
}

/* Sağdaki ok işareti */
.arrow {
  font-weight: bold;
}

/* Hover efekti */
.sidebar-button:hover {
  background-color: #0056b3; /* Mavi üstünde koyu mavi hover efekti */
  color: #fff; /* Hoverda renk değişimi */
}

/* Düşük ekranlar için sidebar genişliği ayarlaması */
@media (max-width: 768px) {
  .sidebar {
    width: 250px; /* Mobilde sidebar genişliğini daralt */
  }

  .sidebar-button {
    font-size: 14px; /* Mobilde buton fontunu küçülttük */
    height: 45px; /* Buton boyutlarını mobilde küçülttük */
  }
}
</style>
