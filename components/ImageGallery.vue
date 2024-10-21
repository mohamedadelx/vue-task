<template>
  <div class="image-gallery w-full lg:w-1/3 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
    <!-- thumbnails -->
    <div class="thumbnails flex flex-col space-y-4 w-1/4">
      <img
        v-for="(thumb, index) in thumbnails"
        :key="index"
        :src="thumb"
        @click="changeMainImage(index)"
        :class="{'border-2 border-blue-500': activeIndex === index}" 
        class="thumbnail w-20 cursor-pointer"
      />
    </div>

    <!-- main image -->
    <swiper
      ref="mainSwiper"
      class="main-image w-full"
      :space-between="10"
      :slides-per-view="1"
      @slideChange="onSlideChange"
      thumbs.swiper="thumbsSwiper"
    >
      <swiper-slide v-for="(image, index) in thumbnails" :key="index">
        <div class="aspect-w-4 aspect-h-5">
          <img :src="image" alt="Main product image" class="w-full h-full object-cover" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

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
      this.$emit('update-main-image', this.thumbnails[swiper.activeIndex]);
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
  border: 2px solid lightgray;
  border-radius: 10px
}
</style>
