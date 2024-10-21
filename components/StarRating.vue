<template>
    <div class="flex items-center space-x-1">
      <i
        v-for="(star, index) in fullStars"
        :key="index"
        class="fas fa-star text-yellow-500"
      ></i>
      <i
        v-if="halfStar"
        class="fas fa-star-half-alt text-yellow-500"
      ></i>
      <i
        v-for="(star, index) in emptyStars"
        :key="'empty-' + index"
        class="fas fa-star text-gray-300"
      ></i>
      <span class="ml-2 text-sm text-gray-500">
        <span class="text-black">{{ rating }}</span>/5
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rating: {
        type: Number,
        required: true,
      },
    },
    computed: {
      fullStars() {
        return Math.floor(this.rating);
      },
      halfStar() {
        return this.rating % 1 !== 0;
      },
      emptyStars() {
        return 5 - Math.ceil(this.rating);
      },
    },
  };
  </script>
  