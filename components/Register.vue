<template>
  <div class="login-container">
    <div class="login-left">
      <img src="/assets/register-banner.png" alt="Login Banner" />
    </div>
    <div class="login-right">
      <div class="logo">
        <img src="/assets/Decathlon_Logo.svg" alt="Decathlon Logo" />
      </div>
      
      <h2 v-if="!isPasswordStep">Hesap Oluştur</h2>
      <h2 v-else>Şifre Girin</h2>
      
      <form @submit.prevent="handleSubmit">
        <div v-if="!isPasswordStep">
          <label for="email">Eposta</label>
          <input type="email" id="email" v-model="email" placeholder="E-posta" required />
          <button type="button" class="submit-btn" @click="goToPasswordStep">İLERİ</button>
        </div>

        <div v-else>
          <p><strong>{{ email }}</strong> <a href="#" @click.prevent="editEmail">Düzenle</a></p>
          
          <label for="password">Şifre oluştur</label>
          <div class="password-input">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" placeholder="Şifre" @input="validatePassword" required />
            <button type="button" @click="togglePasswordVisibility">
              <img :src="showPassword ? '/assets/eye.svg' : '/assets/eye-off.svg'" alt="Toggle Password" />
            </button>
          </div>
          
          <ul class="password-requirements">
            <li v-for="(requirement, key) in passwordRules" :key="key" :class="{ valid: requirement.valid }">
              <span class="status-indicator"></span> {{ requirement.text }}
            </li>
          </ul>

          <button type="submit" class="submit-btn" :disabled="!isPasswordValid">Kaydol</button>
          <p class="otp-text"><a href="#">TEK KULLANIMLIK ŞİFRE AL</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const isPasswordStep = ref(false);

const goToPasswordStep = () => {
  isPasswordStep.value = true;
};

const editEmail = () => {
  isPasswordStep.value = false;
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const passwordRules = ref({
  upper: { text: '1 Büyük harf', valid: false },
  lower: { text: '1 küçük harf', valid: false },
  number: { text: '1 sayı', valid: false },
  length: { text: '8 karakter', valid: false },
  noSpace: { text: 'Boşluksuz', valid: false },
  special: { text: '1 özel karakter', valid: false },
});

const validatePassword = () => {
  const pwd = password.value;
  passwordRules.value.upper.valid = /[A-Z]/.test(pwd);
  passwordRules.value.lower.valid = /[a-z]/.test(pwd);
  passwordRules.value.number.valid = /\d/.test(pwd);
  passwordRules.value.length.valid = pwd.length >= 8;
  passwordRules.value.noSpace.valid = !/\s/.test(pwd);
  passwordRules.value.special.valid = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
};

const isPasswordValid = computed(() => {
  return Object.values(passwordRules.value).every(rule => rule.valid);
});

const handleSubmit = () => {
  alert('Hesap oluşturuldu!');
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
}
.password-input {
  display: flex;
  align-items: center;
}
.password-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.password-input button {
  background: none;
  border: none;
  cursor: pointer;
}
.password-requirements li {
  display: flex;
  align-items: center;
  color: grey;
}
.password-requirements li.valid {
  color: green;
}
.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: grey;
  margin-right: 5px;
}
.valid .status-indicator {
  background: green;
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
.submit-btn:disabled {
  background-color: rgba(0, 86, 212, 0.5);
  cursor: not-allowed;
}
.otp-text {
  text-align: center;
  color: #0056d4;
  cursor: pointer;
}
</style>
