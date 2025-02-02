<template>
  <div class="shopping-cart">
    <!-- Üst Navigasyon -->
    <div class="navigation">
      <a href="/" @onclick="goToMain" class="back-link">ALIŞVERİŞE DEVAM ET</a>
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
          <div v-if="cartProducts.length === 0" class="empty-cart">
            <img src="/assets/empty-cart.svg" alt="Empty Cart" />
            <p>Sepetiniz boş</p>
            <button @click="goToMain">Alışverişe Devam Et</button>
          </div>
          <div v-else>
            <div v-for="product in cartProducts" :key="product.id" class="cart-item">
              <img :src="product.image" :alt="product.title" class="cart-item-image" />
              <div class="cart-item-details">
                <h3>{{ product.title }}</h3>
                <p>{{ (product.discountedPrice * product.quantity).toLocaleString() }}₺</p>
                <div class="quantity-controls">
                  <button @click="decreaseQuantity(product)">-</button>
                  <span>{{ product.quantity }}</span>
                  <button @click="increaseQuantity(product)">+</button>
                </div>
                <button @click="removeProductFromCart(product.id)" class="remove-button">Sil</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sipariş Özeti Bölümü -->
      <div class="order-summary">
        <h3>Sipariş özeti</h3>
        <div class="summary-item">
          <span>Ara toplam</span>
          <span>₺{{ totalPrice.toLocaleString() }}</span>
        </div>
        <div class="summary-item">
          <span>Kargo bir sonraki adımda hesaplanacak</span>
        </div>
        <div class="summary-total">
          <span>Toplam (KDV dahil)</span>
          <span>₺{{ totalPrice.toLocaleString() }}</span>
        </div>
        <button class="confirm-button" :enabled="cartProducts.length === 0">SEPETİ ONAYLA</button>
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
import { defineComponent, ref, onMounted } from "vue";
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, addDoc  } from "firebase/firestore"; // Firestore işlemleri için gerekli import

const db = getFirestore(); // Firebase veritabanı bağlantısı
const cartCollection = collection(db,"cart")
export default defineComponent({
  name: "ShoppingCart",
  setup() {
    // Sepet ürünlerini tutmak için bir reaktif değişken
    const cartProducts = ref<any[]>([]);



// Ürünleri Firestore'dan al
const fetchCartProducts = async () => {
  try {
    const querySnapshot = await getDocs(cartCollection);
    cartProducts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching cart products:", error);//debug
  }
};

// Sepete ürün ekleme
const addProductToCart = async (product: any) => {
  try {
    await addDoc(cartCollection, { ...product, quantity: 1 });
    fetchCartProducts();
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

// Ürün adetini artırma
const increaseQuantity = async (product: any) => {
  const productRef = doc(db, "cart", product.id);
  try {
    await updateDoc(productRef, { quantity: product.quantity + 1 });
    fetchCartProducts();
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

// Ürün adetini azaltma
const decreaseQuantity = async (product: any) => {
  if (product.quantity > 1) {
    const productRef = doc(db, "cart", product.id);
    try {
      await updateDoc(productRef, { quantity: product.quantity - 1 });
      fetchCartProducts();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  } else {
    await removeProductFromCart(product.id);
  }
};

const goToMain = () => {
  window.location.href = "/";  // Main directory or homepage
};


// Sepetten ürünü kaldırma
const removeProductFromCart = async (id: string) => {
  const productRef = doc(db, "cart", id);
  try {
    await deleteDoc(productRef);
    fetchCartProducts();
  } catch (error) {
    console.error("Error removing product:", error);
  }
};
    // Kupon kodu uygulama işlemi
    const applyCoupon = () => {
      console.log("Kupon kodu uygulandı.");
    };

    // Bileşen yüklendiğinde verileri çek
    onMounted(() => {
      fetchCartProducts();
    });

    // Sepet toplamını hesaplama
    const totalPrice = computed(() =>
      cartProducts.value.reduce(
        (total, product) => total + product.discountedPrice * product.quantity,
        0
      )
    );
    return { 
      cartProducts, 
      totalPrice, 
      applyCoupon, 
      currentStep: 1,
      increaseQuantity,
      decreaseQuantity, 
      removeProductFromCart,
      addProductToCart,
      goToMain,
    };
  },
});
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

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.cart-item-details {
  flex: 1;
}
</style>
