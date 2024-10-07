<template>
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
  </template>
  
  <script>
  export default {
    props: {
      thumbnails: Array,
      mainImage: String,
    },
    methods: {
      changeMainImage(image) {
        this.$emit('update-main-image', image);
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
  </style>
