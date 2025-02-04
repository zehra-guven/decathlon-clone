<template>

    <div>
        <Navbar />
        <div class="empty-space1"></div>
        <SlideShow />
        <div class="empty-space2"></div>
        <ProductSlide/>
        <div class="empty-space3"></div>
        <PopularCategories/>
        <Showroom/>

        <Footer/>

    </div>

</template>

<script>

import Navbar from '~/components/Header.vue'
import SlideShow from '~/components/SlideBig.vue'
import ProductSlide from '~/components/ProductSlide.vue';
import PopularCategories from '~/components/PopularCategories.vue';
import Showroom from '~/components/Showroom.vue';
import Footer from '~/components/Footer.vue';


export default {
    components: {
        Navbar,
        SlideShow,
        ProductSlide,
        PopularCategories,
        Showroom,
        Footer,
    }
}

</script>

<style>
.empty-space1 {
    height: 50px;  /* Boşluk için gerekli yükseklik */
    text-align: center; /* Yazıyı ortalamak için */
    color: #333; /* Yazı rengini ayarlamak için */
    font-size: 14px; /* Yazı boyutunu ayarlamak için */
    line-height: 20px; /* Yazıyı dikeyde ortalamak için */
}

.empty-space2 {
    height: 200px;  /* Boşluk için gerekli yükseklik */
    text-align: center; /* Yazıyı ortalamak için */
    color: #333; /* Yazı rengini ayarlamak için */
    font-size: 14px; /* Yazı boyutunu ayarlamak için */
    line-height: 20px; /* Yazıyı dikeyde ortalamak için */
}

.empty-space3 {
    height: 100px;  /* Boşluk için gerekli yükseklik */
    text-align: center; /* Yazıyı ortalamak için */
    color: #333; /* Yazı rengini ayarlamak için */
    font-size: 14px; /* Yazı boyutunu ayarlamak için */
    line-height: 20px; /* Yazıyı dikeyde ortalamak için */
}

.empty-space4 {
    height: 2168px;  /* Boşluk için gerekli yükseklik */
    text-align: center; /* Yazıyı ortalamak için */
    color: #333; /* Yazı rengini ayarlamak için */
    font-size: 14px; /* Yazı boyutunu ayarlamak için */
    line-height: 20px; /* Yazıyı dikeyde ortalamak için */
}

</style>