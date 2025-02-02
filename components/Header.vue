<template>
  <header class="header">
    <div class="header-container">
      <!-- Sol Taraf -->
      <div class="logo-and-menu">
        <div class="menu-icon-and-text hover" @click="toggleMenu">
          <img src="/assets/menu.svg" alt="Menu Icon" class="menu-icon" />
          <button class="menu-button">Menü</button>
        </div>
        <img src="/assets/Decathlon_Logo.svg" alt="Decathlon Logo" class="logo" />
      </div>

      <!-- Arama Kutusu -->
      <div class="search-bar">
        <div class="search-input-container">
          <input type="text" placeholder="Bir ürün, spor veya marka arayın..." class="search-input" />
          <img src="/assets/search.svg" alt="Search Icon" class="search-icon" />
        </div>
      </div>

      <!-- Sağ Taraf -->
      <div class="header-links">
        <ul class="links">
          <li class="hover"><a href="#"><img src="/assets/question.svg" alt="Question Icon" class="icon" /><span>Bize Ulaşın</span></a></li>
          <li class="hover"><a href="#"><img src="/assets/market.svg" alt="Market Icon" class="icon" /><span>Mağaza Bul</span></a></li>
          <li class="hover">
            <a href="#" @click="goToLogin" v-if="!user">
              <img src="/assets/user.svg" alt="User Icon" class="icon" />
              <span>Hesabım</span>
            </a>
            <a href="#" v-else @click="logout">
              <img src="/assets/user.svg" alt="User Icon" class="icon" />
              <span>Çıkış Yap</span>
            </a>
          </li>
          <li class="hover"><a href="/cart"><img src="/assets/cart.svg" alt="Cart Icon" class="icon" /><span>Sepetim</span></a></li>
        </ul>
      </div>
    </div>

    <!-- Alt Menü (Dropdown) -->
    <nav class="nav-menu">
      <ul class="menu-links">
        <li @click="openCategoryMenu"><a href="#"><b>Sporlar</b></a></li>
        <li><a href="#">Kadın</a></li>
        <li><a href="#">Erkek</a></li>
        <li><a href="#">Çocuk</a></li>
        <li><a href="#">Aksesuarlar</a></li>
        <li><a href="#">Ekipmanlar</a></li>
        <li><a href="#">Tüm Ürünler</a></li>
        <li class="hover"><a href="#">Sporcu Besinleri</a></li>
        <li class="hover"><a href="#">Decathlon Member</a></li>
      </ul>
    </nav>

    <!-- SidebarMenu Component -->
    <SidebarMenu :isOpen="menuOpen" @close="menuOpen = false" />

    <!-- DetailedCategory Component will be shown when "Sporlar" is clicked -->
    <DetailedCategory v-if="categoryMenuOpen" :menuOpen="categoryMenuOpen" />
  </header>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu.vue";
import DetailedCategory from "@/components/DetailedCategory.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "HeaderComponent",
  components: {
    SidebarMenu,
    DetailedCategory,
  },
  data() {
    return {
      menuOpen: false,
      categoryMenuOpen: false,
      user: null, // Kullanıcı bilgisi
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    openCategoryMenu() {
      this.categoryMenuOpen = !this.categoryMenuOpen;
    },
    logout() {
      const auth = getAuth();
      if (confirm("Çıkış yapmak istediğinize emin misiniz?")) {
        signOut(auth)
          .then(() => {
            alert("Başarıyla çıkış yapıldı.");
            this.user = null; // Kullanıcıyı sıfırla
          })
          .catch((error) => {
            console.error("Çıkış yapılamadı: ", error);
          });
      }
    },
    goToLogin() {
    // Redirect to the login page using window.location.href
    window.location.href = '/login'; // Login sayfasına yönlendirme
  }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user; // Kullanıcı oturum açmışsa güncelle
    });
  },
};
</script>

<style scoped>
.header {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.logo-and-menu {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-icon-and-text {
  position: absolute;
  top: -20px;
  left: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000;
}

.menu-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
}

.menu-button {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  text-align: center;
}

.logo {
  height: 30px;
  width: 160px;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.search-input-container {
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 25px;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
}

.search-input-container:hover {
  border-color: #404245;
  box-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
  background-color: #fff;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  background: transparent;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.search-button {
  margin-left: 8px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.header-links .links {
  display: flex;
  gap: 30px;
  list-style: none;
}

.header-links li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.header-links a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 14px;
}

.header-links .icon {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
}

.nav-menu {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  z-index: 9999; 
}

.nav-menu .menu-links li a {
  color: black;
  transition: color 0.3s ease;
}

.nav-menu .menu-links li a:hover {
  color: blue;
  text-shadow: 0 0 .15px blue;
}

.menu-links {
  display: flex;
  gap: 0;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1200px;
}

.menu-links li {
  flex: 1;
  text-align: center;
}

.menu-links a {
  text-decoration: none;
  color: #000;
  font-size: 14px;
  display: block;
  padding: 8px 0;
}

.dropdown {
  position: relative;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  list-style: none;
  min-width: 150px;
}

.dropdown-menu li {
  padding: 8px 20px;
}

.dropdown-menu li a {
  color: #000;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: #f4f4f4;
}

.hover {
  position: relative;
  overflow: show;
}

.hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease;
  z-index: 0;
}

.hover:hover::before {
  background-color: rgba(0, 0, 0, 0.2);
}

.hover a {
  position: relative;
  z-index: 1;
  text-decoration: none;
  color: inherit;
}

.circular-hover {
  position: relative;
  overflow: hidden;
}

.circular-hover::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease, width 0.4s ease, height 0.4s ease;
  z-index: 0;
}

.circular-hover:hover::before {
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%) scale(1);
}

.circular-hover * {
  position: relative;
  z-index: 1;
}
</style>