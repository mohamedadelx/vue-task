<template>
  <div
    class="image-gallery w-full lg:w-1/3 flex space-y-2 flex-col-reverse lg:flex-row lg:space-y-0 lg:space-x-4"
  >
    <!-- thumbnails -->
    <div class="thumbnails flex flex-col">
      <img
        v-for="(thumb, index) in thumbnails"
        :key="index"
        :src="thumb"
        @click="changeMainImage(index)"
        :class="{ 'border-2': activeIndex === index }"
        class="thumbnail w-20 cursor-pointer mt-4"
      />
    </div>

    <!-- main image -->
    <swiper
      ref="mainSwiper"
      class="w-full"
      :space-between="10"
      :slides-per-view="1"
      @slideChange="onSlideChange"
      thumbs.swiper="thumbsSwiper"
    >
      <swiper-slide v-for="(image, index) in thumbnails" :key="index">
        <div class="aspect-w-5 aspect-h-5">
          <img
            :src="image"
            alt="Main product image"
            class="rounded-3xl w-full h-full object-contain"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    thumbnails: Array,
  },
  data() {
    return {
      activeIndex: 0,
      thumbsSwiper: null,
    };
  },
  methods: {
    onSlideChange(swiper) {
      this.activeIndex = swiper.activeIndex;
      this.$emit("update-main-image", this.thumbnails[swiper.activeIndex]);
    },
    changeMainImage(index) {
      this.activeIndex = index;
      this.$refs.mainSwiper.slideTo(index);
    },
  },
};
</script>

<style scoped>
.thumbnail {
  transition: border-color 0.3s;
}
.thumbnail:hover {
  outline: none;
  border: none;
}
.thumbnail.border-2 {
  border: 1px solid black;
  border-radius: 10px;
}
</style>
