<template>
  <div class="shopping-cart">
    <!-- Üst Navigasyon -->
    <div class="navigation">
      <a href="#" class="back-link">ALIŞVERİŞE DEVAM ET</a>
    </div>

    <!-- Adım İlerleme -->
    <div class="steps">
      <div :class="['step', { active: currentStep === 1 }]">1<br />Sepet</div>
      <div :class="['step', { active: currentStep === 2 }]">2<br />Giriş</div>
      <div :class="['step', { active: currentStep === 3 }]">3<br />Teslimat</div>
      <div :class="['step', { active: currentStep === 4 }]">4<br />Ödeme</div>
    </div>

    <!-- Ana İçerik (Sepetim ve Sipariş Özeti Yan Yana) -->
    <div class="content">
      <!-- Sepetim Bölümü -->
      <div class="cart">
        <div class="cart-header">
          <h2>Sepetim</h2>
        </div>
        <div class="cart-content">
          <div class="empty-cart">
            <img src="/assets/empty-cart.svg" alt="Empty Cart" />
            <p>Sepetiniz boş</p>
            <button @click="continueShopping">Alışverişe Devam Et</button>
          </div>
        </div>
      </div>

      <!-- Sipariş Özeti Bölümü -->
      <div class="order-summary">
        <h3>Sipariş özeti</h3>
        <div class="summary-item">
          <span>Ara toplam</span>
          <span>₺0</span>
        </div>
        <div class="summary-item">
          <span>Kargo bir sonraki adımda hesaplanacak</span>
        </div>
        <div class="summary-total">
          <span>Toplam (KDV dahil)</span>
          <span>₺0</span>
        </div>
        <button class="confirm-button" disabled>SEPETİ ONAYLA</button>
        <div class="coupon-code">
          <span>Kupon Kodu</span>
          <div class="coupon-input">
            <input type="text" placeholder="Kupon kodunuzu girin" />
            <button @click="applyCoupon" class="apply-button">Uygula</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ShoppingCart',
  data() {
    return {
      currentStep: 1, // Şu anki adımı göstermek için
    };
  },
  methods: {
    continueShopping() {
      console.log('Alışverişe devam et tıklandı.');
    },
    applyCoupon() {
      console.log('Kupon kodu uygulandı.');
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.navigation {
  padding: 10px 20px;
}

.back-link {
  text-decoration: none;
  color: #007bff;
}

.steps {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.step {
  text-align: center;
  flex: 1;
  padding: 10px;
  font-size: 14px;
}

.step.active {
  color: #007bff;
  font-weight: bold;
}

.content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.cart {
  flex: 2;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.cart-header h2 {
  margin-bottom: 10px;
}

.cart-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.empty-cart img {
  width: 80px;
  margin-bottom: 10px;
}

.empty-cart p {
  font-size: 16px;
  margin-bottom: 10px;
}

.empty-cart button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.order-summary {
  flex: 1;
  margin-left: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
}

.order-summary h3 {
  margin-bottom: 15px;
}

.summary-item,
.summary-total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.summary-total {
  font-weight: bold;
}

.confirm-button {
  width: 100%;
  padding: 10px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: not-allowed;
}

.coupon-code {
  margin-top: 20px;
}

.coupon-input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.coupon-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.apply-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.apply-button:hover {
  background-color: #0056b3;
}
</style>
