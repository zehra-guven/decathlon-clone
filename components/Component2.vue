<template>
  <div
    class="slideshow"
    @mousedown="startDrag"
    @mousemove="onMouseMove"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @dragstart.prevent
  >
    <div
      class="slides"
      :style="{ transform: `translateX(${dragging ? currentTranslate : -activeIndex * 100}%)`, transition: dragging ? 'none' : 'transform 0.3s ease' }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" :alt="slide.alt" draggable="false" />
      </div>
    </div>

    <!-- Düğme Konteyneri -->
    <div class="controls-container">
      <!-- Geri Butonu -->
      <button class="arrow-button" @click="handlePrevSlide">
        &lt;
      </button>

      <!-- Kontrol Noktaları -->
      <div class="controls">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="goToSlide(index)"
        ></button>
      </div>

      <!-- Başlat/Durdur Butonu -->
      <button class="play-pause-button" @click="togglePlayPause">
        <img v-if="isPlaying" :src="pauseIcon" alt="Pause" />
        <img v-else :src="playIcon" alt="Play" />
      </button>

      <!-- İleri Butonu -->
      <button class="arrow-button" @click="handleNextSlide">
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
import slide1 from "assets/slide1.png";
import slide2 from "assets/slide2.png";
import slide3 from "assets/slide3.png";
import slide4 from "assets/slide4.png";

// SVG Dosyalarını Import Et
import playIcon from "assets/start.svg";
import pauseIcon from "assets/pause.svg";

export default {
  name: "Slideshow",
  data() {
    return {
      activeIndex: 0,
      slides: [
        { image: slide1, alt: "Slide 1" },
        { image: slide2, alt: "Slide 2" },
        { image: slide3, alt: "Slide 3" },
        { image: slide4, alt: "Slide 4" },
      ],
      dragging: false,
      startX: 0,
      currentTranslate: 0,
      prevTranslate: 0,
      isClick: false,
      isPlaying: true,
      autoSlideInterval: null,
      playIcon,
      pauseIcon,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval);
  },
  methods: {
    startDrag(event) {
      this.isClick = true;
      this.dragging = true;
      this.startX = event.clientX;
      this.prevTranslate = -this.activeIndex * 100;

      clearInterval(this.autoSlideInterval);
    },
    onMouseMove(event) {
      if (!this.dragging) return;

      this.isClick = false;
      const diffX = event.clientX - this.startX;
      this.currentTranslate = this.prevTranslate + (diffX / this.$el.offsetWidth) * 100;
    },
    endDrag() {
      if (!this.dragging) return;
      this.dragging = false;

      const movedBy = this.currentTranslate - this.prevTranslate;

      if (movedBy < -25) {
        this.handleNextSlide();
      } else if (movedBy > 50) {
        this.handlePrevSlide();
      } else {
        this.currentTranslate = this.prevTranslate;
      }

      if (this.isPlaying) {
        this.startAutoSlide();
      }
    },
    handleNextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    },
    handlePrevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.activeIndex = index;
    },
    togglePlayPause() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.startAutoSlide();
      } else {
        clearInterval(this.autoSlideInterval);
      }
    },
    startAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = setInterval(() => {
        this.handleNextSlide();
      }, 3000);
    },
  },
};
</script>

<style scoped>
.slideshow {
  position: relative;
  overflow: hidden;
  width: 1080px;
  height: 440px;
  margin: auto;
  user-select: none;
  cursor: grab;
}

.slides {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slide {
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*Controls Container Stili*/
.controls-container {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(0, 0, 0, 0.5); /* Şeffaf siyah arka plan */
  padding: 10px;
  border-radius: 8px;
  z-index: 10;
}

.arrow-button {
  background: transparent;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
}

.play-pause-button img {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: none;
}

.controls button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.controls button.active {
  opacity: 1;
  background: black;
}
</style>
