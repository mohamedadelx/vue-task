<template>
  <div class="product-page flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 p-5">
    <!-- left side -->
    <div class="image-gallery w-full lg:w-1/3 flex flex-row space-x-4 lg:space-x-0">
      <!-- thumbnails -->
      <div class="thumbnails flex flex-col space-y-4 w-1/4">
        <img
          v-for="(thumb, index) in thumbnails"
          :key="index"
          :src="thumb"
          @click="changeMainImage(thumb)"
          class="thumbnail w-16 cursor-pointer"
        />
      </div>

      <!-- main img -->
      <div class="main-image w-full">
        <img :src="mainImage" alt="Main product image" class="w-full" />
      </div>
    </div>

    <!-- right side -->
    <div class="product-details w-full lg:w-2/3 space-y-4">
      <!-- title + rating -->
      <div>
        <h1 class="text-4xl font-bold font-candal pb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div class="flex items-center space-x-1 text-yellow-500">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
          <span class="text-sm text-gray-500 ml-2"><span class="text-black">4.5</span>/5</span>
        </div>
      </div>

      <!-- price -->
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-semibold text-black">$260</span>
        <span class="text-3xl text-gray-500 line-through">$300</span>
        <span class="text-sm font-semibold text-red-500 bg-red-200 bg-opacity-60 px-2 py-1 rounded-xl">-40%</span>
      </div>

      <!-- description -->
      <p class="text-gray-700">
        This graphic t-shirt is perfect for any occasion. Crafted from soft and breathable fabric, it offers superior comfort and style.
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
      <div class="border-t border-gray-300 w-4/5"></div>

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
<div class="flex flex-col lg:flex-row items-center space-x-6">
  <div class="flex items-center space-x-2 bg-gray-200 rounded-full px-4 pb-1">
    <button @click="decreaseQuantity" class="px-2 text-3xl bg-gray-200 rounded">-</button>
    <span class="text-lg font-semibold">{{ quantity }}</span>
    <button @click="increaseQuantity" class="px-2 text-2xl bg-gray-200 rounded">+</button>
  </div>

  <!-- add button -->
  <button class="mt-4 lg:mt-0 w-full lg:w-auto px-4 lg:px-56 py-2 bg-black text-white rounded-full hover:bg-slate-600">
  Add to Cart
</button>


</div>

    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mainImage: '../img/main.png',
      thumbnails: ['../img/main.png', '../img/main2.png', '../img/main3.png'],
      colors: [
        { hex: '#5A513A', selected: true },
        { hex: '#3E5955', selected: false },
        { hex: '#2C2D4E', selected: false },
      ],
      sizes: [
        { label: 'Small', selected: false },
        { label: 'Medium', selected: false },
        { label: 'Large', selected: true },
        { label: 'X-Large', selected: false },
      ],
      quantity: 1,
    };
  },
  methods: {
    changeMainImage(image) {
      this.mainImage = image;
    },
    selectColor(color) {
      this.colors.forEach((c) => (c.selected = false));
      color.selected = true;
    },
    selectSize(size) {
      this.sizes.forEach((s) => (s.selected = false));
      size.selected = true;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    increaseQuantity() {
      this.quantity++;
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
.main-image img {
  max-height: 100%;
}
.product-details button {
  transition: background-color 0.3s;
}
</style>