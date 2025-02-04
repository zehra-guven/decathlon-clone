
<!-- SCALE %80 İKEN ABSOLUTE POZİSYONUNDA DURUYOR VUE NUN LAYOUT ALGILAYIŞINDAN DOLAYI, %100 İKEN CONTENT KAYIYOR -->
<template>
  <footer class="footer">
    <!-- Üst Bilgi (İkonlar ve Metinler) -->
    <div class="footer-top">
      <div class="footer-item">
        <span><img src="assets/exchangeicon.svg" alt="İade İkonu" /> 60 GÜN İADE</span>
        <span><img src="assets/shopfooter.svg" alt="Teslimat İkonu" /> ÜCRETSİZ MAĞAZADAN TESLİMAT</span>
        <span><img src="assets/comment.svg" alt="Garanti İkonu" /> 2 YIL GARANTİ</span>
        <span><img src="assets/securepay.svg" alt="Ödeme İkonu" /> GÜVENLİ ÖDEME</span>
        <span><img src="assets/mobile.svg" alt="Mobil İkonu" /> MOBİL UYGULAMALARIMIZ</span>
      </div>
    </div>

    <!-- Orta İçerik -->
    <div class="footer-content">
      <div class="footer-column">
        <h3>HAKKIMIZDA</h3>
        <ul>
          <li><a href="#">Biz Kimiz?</a></li>
          <li><a href="#">Mağazalarımız</a></li>
          <li><a href="#">Bize Ulaşın</a></li>
          <li><a href="#">Üyelik Sözleşmesi</a></li>
          <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
          <li><a href="#">İnsan Kaynakları</a></li>
          <li><a href="#">Değerlerimiz</a></li>
          <li><a href="#">Kalite Politikamız</a></li>
          <li><a href="#">Bilgi Güvenliği Politikamız</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>HİZMETLERİMİZ</h3>
        <ul>
          <li><a href="#">Decathlon Member Avantajları</a></li>
          <li><a href="#">Mağazadan Teslim</a></li>
          <li><a href="#">Garanti Koşulları</a></li>
          <li><a href="#">Atölye</a></li>
          <li><a href="#">SSS</a></li>
          <li><a href="#">Ürün Geri Çağırma</a></li>
          <li><a href="#">Mağazadan Eve Teslimat</a></li>
          <li><a href="#">Ertesi Gün Mağazadan Teslim Al</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>SİPARİŞ</h3>
        <ul>
          <li><a href="#">İade Politikası</a></li>
          <li><a href="#">Teslimat Bilgileri</a></li>
          <li><a href="#">Ödeme Seçenekleri</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>POPÜLER KATEGORİLER</h3>
        <ul>
          <li><a href="#">Botlar</a></li>
          <li><a href="#">Erkek Mont</a></li>
          <li><a href="#">Şemsiye</a></li>
          <li><a href="#">Yağmurluk</a></li>
          <li><a href="#">Krampon</a></li>
          <li><a href="#">Masaj Aleti</a></li>
          <li><a href="#">Eşofman Takımı</a></li>
          <li><a href="#">Termos</a></li>
          <li><a href="#">Alışveriş Sezonu Fırsatları</a></li>
          <li><a href="#">Yeni Yıl Hediyeleri</a></li>
        </ul>
      </div>
    </div>

    <!-- Alt Bilgi -->
    <div class="footer-bottom">
      <div class="social-media">
        <h3>Bizi Takip Et</h3>
        <div class="flex">
        <a href="#"><img src="assets/facebook.svg" alt="Facebook" /></a>
        <a href="#"><img src="assets/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="assets/linkedin.svg" alt="LinkedIn" /></a>
      </div>
      <div class="flex">
        <a href="#"><img src="assets/tiktok.svg" alt="TikTok" /></a>
        <a href="#"><img src="assets/youtube.svg" alt="YouTube" /></a>
      </div>
      </div>
      <div class="mobile-experience">
        <h3>Decathlon Deneyimini Mobile Sürdür</h3>
        <a href="#"><img src="assets/appstore.svg" alt="App Store" /></a>
        <a href="#"><img src="assets/googleplay.svg" alt="Google Play" /></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 20px;
  color: #333;
  font-family: Arial, sans-serif;
}

.footer-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  background-color: #3643ba;
  color: white;
  font-weight: bold;
  flex-wrap: wrap; /* Küçük ekranlarda taşmayı engeller */
}
.footer-item span {
  display: flex;
  align-items: center;
  gap: 8px; /* Resim ile yazı arasındaki boşluk */
}

.footer-top img {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.footer-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.footer-column h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;




}

.footer-column li {
  margin-bottom: 8px;
}

.footer-column a {
  text-decoration: none;
  color: #0073e6;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.social-media a img,
.mobile-experience a img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.flex{
  display: flex;
  gap:10px;
}


</style>
