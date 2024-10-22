<template>
  <div class="p-4 md:p-8" id="app">
    <h1 class="text-2xl md:text-5xl md:pb-10 font-bold text-center mb-8 font-candal">
      {{ title }}
    </h1>

    <div v-if="isFetching">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <!-- swiper -->
    <swiper-container v-if="data && data.products && data.products.items.length > 0" class="mySwiper" :slides-per-view="4" :loop="true" :space-between="20">
      <swiper-slide v-for="(item, index) in data.products.items" :key="index">
        <div
          class="text-center cursor-pointer transform transition-transform duration-300 hover:scale-90"
          @click="navigateToProduct(item)"
        >
          <div class="relative mx-auto mb-4 w-full aspect-w-1 aspect-h-1">
            <img :alt="item.name" :src="item.small_image.url" />
          </div>
          <p class="text-lg">{{ item.name }}</p>
          <!-- star rating -->
          <StarRating :rating="item.rating || 4" class="justify-center" />
          <p class="text-xl font-bold">
            {{ item.special_price ? item.special_price + ' EGP' : 'Price not available' }}
          </p>
        </div>
      </swiper-slide>
    </swiper-container>
    <div v-else>No products available</div>
  </div>
</template>

<script>
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import StarRating from './StarRating.vue';
import { useRouter } from 'vue-router';
import { useQuery, useClient } from 'villus';
import { useRuntimeConfig } from '#imports';



export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'YOU MIGHT ALSO LIKE',
    },
  },

  components: {
    SwiperContainer,
    SwiperSlide,
    StarRating,
  },
  setup() {

//     const config = useRuntimeConfig();
//     const graphqlUrl = config.public.GRAPHQL_URL;

// useClient({
//   url: graphqlUrl,
// });

    useClient({
      url: "https://fitandfixstaging.hypernode.io/graphql",
    });

    const GetProductsQuery = `
    {
      products (pageSize: 10, filter:{}) {
        items{
          name
          uid
          url_key
          special_price
          small_image{
            url
          }
        }
      }
    }
    `;

    const { data, error, isFetching } = useQuery({
      query: GetProductsQuery,
    });

    const router = useRouter();

    const navigateToProduct = (item) => {
      router.push({ path: '/single', query: { product: item.url_key } });
    };

    console.log(data);

    return { data, error, isFetching, navigateToProduct };
  },
};
</script>