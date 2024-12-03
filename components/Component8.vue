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
      <form @submit.prevent="submitForm">
        <label for="email">Eposta</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="E-posta"
          required
        />
        <button type="submit" class="submit-btn">İLERİ</button>
      </form>
      <div class="social-login">
        <p>veya</p>
        <button class="social-btn google">Google ile Giriş Yap</button>
        <button class="social-btn facebook">Facebook ile Giriş Yap</button>
      </div>
      <p>
        Decathlon hesabınız yok mu? <a href="#">Hemen oluşturun!</a>
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginForm",
  setup() {
    const email = ref("");

    const submitForm = () => {
      alert(`Giriş yapmak için: ${email.value}`);
    };

    return {
      email,
      submitForm,
    };
  },
});
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

.facebook {
  background-color: #3b5998;
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
</style>