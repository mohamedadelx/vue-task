<template>
  <div class="p-4 md:p-8" id="app">
    <h1 class="text-2xl md:text-5xl md:pb-10 font-bold text-center mb-8 font-candal">
      YOU MIGHT ALSO LIKE
    </h1>

    <!-- swiper -->
    <swiper-container class="mySwiper" :slides-per-view="4" :loop="true" :space-between="20">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="text-center">
          <div class="relative mx-auto mb-4 w-full aspect-w-1 aspect-h-1">
            <img :alt="item.alt" :src="item.src" />
          </div>
          <p class="text-lg">{{ item.title }}</p>
          <div class="flex justify-center items-center mb-2">
            <i v-for="star in item.rating" :key="star" class="fas fa-star text-yellow-500"></i>
            <i v-if="item.halfStar" class="fas fa-star-half-alt text-yellow-500"></i>
            <span class="ml-2 text-gray-600">{{ item.ratingText }}</span>
          </div>
          <p class="text-xl font-bold">
            {{ item.price }}
            <span v-if="item.oldPrice" class="line-through text-gray-500">{{ item.oldPrice }}</span>
            <span v-if="item.discount" class="text-sm font-semibold text-red-500 bg-red-200 bg-opacity-60 px-2 py-1 ml-2 rounded-xl">
              {{ item.discount }}
            </span>
          </p>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper as SwiperContainer, SwiperSlide as SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    SwiperContainer,
    SwiperSlide,
  },
  setup() {
    const items = ref([
      {
        title: 'Polo with Contrast Trims',
        src: '/img/s1.png',
        alt: 'Polo with Contrast Trims',
        rating: [1, 1, 1, 1],
        halfStar: true,
        ratingText: '4.0/5',
        price: '$212',
        oldPrice: '$242',
        discount: '-20%',
      },
      {
        title: 'Gradient Graphic T-shirt',
        src: '/img/s2.png',
        alt: 'Gradient Graphic T-shirt',
        rating: [1, 1, 1],
        halfStar: true,
        ratingText: '3.5/5',
        price: '$145',
      },
      {
        title: 'Polo with Tipping Details',
        src: '/img/s3.png',
        alt: 'Polo with Tipping Details',
        rating: [1, 1, 1, 1],
        halfStar: true,
        ratingText: '4.5/5',
        price: '$180',
      },
      {
        title: 'Black Striped T-shirt',
        src: '/img/s4.png',
        alt: 'Black Striped T-shirt',
        rating: [1, 1, 1, 1, 1],
        ratingText: '5.0/5',
        price: '$120',
        oldPrice: '$160',
        discount: '-30%',
      },
      {
        title: 'Black Striped T-shirt',
        src: '/img/s4.png',
        alt: 'Black Striped T-shirt',
        rating: [1, 1, 1, 1, 1],
        ratingText: '5.0/5',
        price: '$120',
        oldPrice: '$160',
        discount: '-30%',
      },
    ]);

    return {
      items,
    };
  },
};
</script>
