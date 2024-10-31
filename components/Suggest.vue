<template>
  <div class="p-4 md:p-8 w-full max-w-[1240px] container">
    <h1
      class="text-4xl lg:text-5xl lg:pb-10 font-bold text-center pb-10 font-candal"
    >
      {{ title }}
    </h1>
    <div v-if="isFetching">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <!-- swiper -->
    <swiper-container
      v-if="data && data.products && data.products.items.length > 0"
      class="mySwiper"
      :slides-per-view="2"
      :loop="true"
      :space-between="20"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
        },
        630: {
          slidesPerView: 2,
        },
      }"
    >
      <swiper-slide v-for="(item, index) in data.products.items" :key="index">
        <div
          class="text-center cursor-pointer transform transition-transform duration-300 hover:scale-90"
          @click="navigateToProduct(item)"
        >
          <div class="relative mx-auto mb-4 w-full aspect-w-1 aspect-h-1">
            <img
              class="rounded-3xl"
              :alt="item.name"
              :src="item.small_image.url"
            />
          </div>
          <p class="text-lg font-bold flex justify-start">{{ item.name }}</p>
          <!-- star rating -->
          <StarRating :rating="item.rating || 4" class="flex justify-start" />
          <p class="text-xl font-semibold flex justify-start">
            {{
              item.special_price
                ? item.special_price + " EGP"
                : "Price not available"
            }}
          </p>
        </div>
      </swiper-slide>
    </swiper-container>
    <div v-else>No products available</div>
  </div>
</template>

<script>
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import StarRating from "./StarRating.vue";
import { useQuery } from "villus";
import { useRouter } from "vue-router";
import GetProductsQuery from "../queries/products.gql";

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "YOU MIGHT ALSO LIKE",
    },
  },

  components: {
    SwiperContainer,
    SwiperSlide,
    StarRating,
  },

  setup() {
    const { data, error, isFetching } = useQuery({
      query: GetProductsQuery,
    });
    const router = useRouter();

    const navigateToProduct = (item) => {
      router.push({ path: `/products/${item.url_key}` });
    };

    return { data, error, isFetching, navigateToProduct };
  },
};
</script>
