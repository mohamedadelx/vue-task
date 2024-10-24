<template>
  <div class="product-page flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 p-5">
    <!-- left side -->
    <ImageGallery
      :thumbnails="thumbnails"
      :mainImage="mainImage"
      @update-main-image="changeMainImage"
      class=""
    />

    <!-- right side -->
    <div class="product-details w-full lg:w-2/3 space-y-4">
      <!-- title + rating -->
      <div v-if="product.name">
        <h1 class="text-4xl font-bold font-candal pb-4">{{ product.name }}</h1>
        <StarRating :rating="4.5" />
      </div>

      <!-- price -->
      <div class="flex items-center space-x-2" v-if="product.special_price !== null">
        <span class="text-2xl font-semibold text-black">
  {{ product.special_price?.toString() ?? 'Price not available' }} EGP
</span>
      </div>

      <!-- description -->
      <p class="text-gray-700">
        {{ product.description || "No description available" }}
      </p>
      <div class="border-t border-gray-300 w-4/5"></div>

      <!-- colors -->
      <div class="pb-4">
        <h3 class="text-lg font-semibold pb-3">Select Colors</h3>
        <div class="flex space-x-3">
          <button
            v-for="(color, index) in colors"
            :key="index"
            @click="selectColor(color)"
            class="relative w-8 h-8 rounded-full border-2"
            :class="[color.selected ? 'border-black' : 'border-transparent']"
            :style="{ backgroundColor: color.hex }"
          >
            <!--checkmark-->
            <div v-if="color.selected" class="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center rounded-full">
              <svg xmlns="" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <!-- size -->
      <div class="pb-4">
        <h3 class="text-lg font-semibold pb-4">Choose Size</h3>
        <div class="flex space-x-3">
          <button
            v-for="(size, index) in sizes"
            :key="index"
            @click="selectSize(size)"
            :class="['px-4 py-2 rounded-full', size.selected ? 'bg-black text-white' : 'bg-gray-100']"
          >
            {{ size.label }}
          </button>
        </div>
      </div>
      <div class="border-t border-gray-300 w-4/5"></div>

      <!-- quantity -->
      <QuantitySelector :initialQuantity="quantity" @update-quantity="updateQuantity" />

      <!-- add button -->
      <button class="mt-4 lg:mt-0 w-full lg:w-auto px-4 lg:px-56 py-2 bg-black text-white rounded-full hover:bg-slate-600">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery, useClient } from 'villus';
import ImageGallery from './ImageGallery.vue';
import QuantitySelector from './QuantitySelector.vue';

export default {
  components: {
    ImageGallery,
    QuantitySelector,
  },
  setup() {

    const colors = reactive([
      { hex: '#5A513A', selected: true },
      { hex: '#3E5955', selected: false },
      { hex: '#2C2D4E', selected: false },
    ]);

    const sizes = reactive([
      { label: 'Small', selected: false },
      { label: 'Medium', selected: false },
      { label: 'Large', selected: true },
      { label: 'X-Large', selected: false },
    ]);
    const route = useRoute();
    const urlKey = route.params.url_key;

    useClient({
      url: "https://fitandfixstaging.hypernode.io/graphql",
    });

    const product = reactive({
      name: '',
      special_price: null,
      description: '',
      colors: [],
      sizes: [],
    });
    const mainImage = ref('');
    const thumbnails = ref([]);
    const quantity = ref(1);

    const GetProductByKeyQuery = `
      query ($urlKey: String!) {
        products(pageSize:30, filter: { url_key: { eq: $urlKey } }) {
          items {
            name
            special_price
            categories{
            description
            }
            small_image { 
              url
            }

          }
        }
      }
    `;

    const { data } = useQuery({
      query: GetProductByKeyQuery,
      variables: { urlKey },
    });

    watchEffect(() => {
      if (data.value && data.value.products.items.length > 0) {
        const fetchedProduct = data.value.products.items[0];
        product.name = fetchedProduct.name;
        product.special_price = fetchedProduct.special_price || null;
        product.description = fetchedProduct.description || "No description available";
        product.colors = fetchedProduct.colors || [];
        product.sizes = fetchedProduct.sizes || [];
        mainImage.value = fetchedProduct.small_image?.url || '';
        thumbnails.value = [fetchedProduct.small_image?.url];

      }
    });

    const selectColor = (color) => {
      colors.forEach((c) => (c.selected = false));
      color.selected = true;
    };
    const selectSize = (size) => {
      sizes.forEach((s) => (s.selected = false));
      size.selected = true;
    };

    const updateQuantity = (newQuantity) => {
      quantity.value = newQuantity;
    };

    const changeMainImage = (image) => {
      mainImage.value = image;
    };

    return {
      product,
      mainImage,
      thumbnails,
      quantity,
      colors,
      sizes,
      selectColor,
      selectSize,
      updateQuantity,
      changeMainImage,
    };
  },
};
</script>