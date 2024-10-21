<template>
  <div class="p-4 md:p-8" id="app">
    <h1 class="text-2xl md:text-5xl md:pb-10 font-bold text-center mb-8 font-candal">
      {{ title }}
    </h1>

    <!-- swiper -->
    <swiper-container class="mySwiper" :slides-per-view="4" :loop="true" :space-between="20">
      <swiper-slide v-for="(item, index) in products" :key="index">
        <div
  class="text-center cursor-pointer transform transition-transform duration-300 hover:scale-90"
  @click="navigateToProduct(item)"
>          <div class="relative mx-auto mb-4 w-full aspect-w-1 aspect-h-1">
            <img :alt="item.alt" :src="item.src" />
          </div>
          <p class="text-lg">{{ item.title }}</p>
          <!-- star rating -->
          <StarRating :rating="item.rating" class="justify-center" />
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
import { Swiper as SwiperContainer, SwiperSlide as SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import StarRating from './StarRating.vue';
import { useRouter } from 'vue-router';

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'YOU MIGHT ALSO LIKE',
    },
    products: {
      type: Array,
      required: true,
      default: () => [
        {
          id:1,
          title: 'Polo with Contrast Trims',
          src: '/img/s1.png',
          alt: 'Polo with Contrast Trims',
          rating: 4.0,
          price: '$212',
          oldPrice: '$242',
          discount: '-20%',
        },
        {
          id:2,
          title: 'Gradient Graphic T-shirt',
          src: '/img/s2.png',
          alt: 'Gradient Graphic T-shirt',
          rating: 3.5,
          price: '$145',
        },
        {
          id:3,
          title: 'Polo with Tipping Details',
          src: '/img/s3.png',
          alt: 'Polo with Tipping Details',
          rating: 4.5,
          price: '$180',
        },
        {
          id:4,
          title: 'Black Striped T-shirt',
          src: '/img/s4.png',
          alt: 'Black Striped T-shirt',
          rating: 5.0,
          price: '$120',
          oldPrice: '$160',
          discount: '-30%',
        },
        {
          id:5,
          title: 'Polo with Tipping Details',
          src: '/img/s3.png',
          alt: 'Polo with Tipping Details',
          rating: 4.5,
          price: '$180',
        },
      ],
    },
  },
  components: {
    SwiperContainer,
    SwiperSlide,
    StarRating,
  },
  setup() {
    const router = useRouter();

    const navigateToProduct = (item) => {

      router.push({ path: '/', query: { product: item.title } });
    };

    return { navigateToProduct };
  },
};
</script>