<template>
  <div class="login-container">
    <div class="login-left">
      <img src="/assets/register-banner.png" alt="Login Banner" />
    </div>
    <div class="login-right">
      <div class="logo">
        <img src="/assets/Decathlon_Logo.svg" alt="Decathlon Logo" />
      </div>
      <h2>Oturum Aç</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">Eposta</label>
        <input type="email" id="email" v-model="email" placeholder="E-posta" required />
        <label for="password">Şifre</label>
        <input type="password" id="password" v-model="password" placeholder="Şifre" required />
        <button type="submit" class="submit-btn">İLERİ</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
      <p>
        Decathlon hesabınız yok mu? <a href="#" @click="goToRegister">Hemen oluşturun!</a>
      </p>
      <div class="features">
        <p>Giriş yapmanız tavsiye edilir</p>
        <ul>
          <li>✔ Hızlı ödeme</li>
          <li>✔ Siparişlerinizi takip edin</li>
          <li>✔ Ayrıcalıklı tekliflere erişin</li>
        </ul>
      </div>
      <div class="footer">
        <a href="#">Yardım</a> | <a href="#">Gizlilik</a>
        <div class="language-selector">
          <img src="/assets/turkey-flag.png" alt="Turkey Flag" /> Türkçe
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginForm",
  setup() {
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");

    const goToRegister = () => {
      window.location.href = "/register";  // Register sayfasına yönlendirme
    };

    const handleLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        // Başarılı giriş sonrası yönlendirme
        window.location.href = "/"; 
      } catch (error: any) {
        errorMessage.value = "Giriş başarısız. Lütfen bilgilerinizi kontrol edin.";
        console.error("Login error:", error.message);
      }
    };

    return {
      email,
      password,
      errorMessage,
      handleLogin,

      goToRegister,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
}

.login-left {
  flex: 1;
  background-color: #f5f5f5;
}

.login-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-right {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.logo img {
  width: 150px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

form {
  width: 100%;
  margin-bottom: 20px;
}

label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #0056d4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.social-login {
  text-align: center;
}

.social-btn {
  display: inline-block;
  margin: 10px 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.google {
  background-color: #ea4335;
  color: white;
}

.features {
  margin-top: 20px;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 10px;
}

.footer {
  margin-top: auto;
  font-size: 14px;
}

.language-selector {
  margin-top: 10px;
}

.language-selector img {
  width: 20px;
  margin-right: 5px;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
