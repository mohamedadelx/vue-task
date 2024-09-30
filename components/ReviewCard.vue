<template>
    <div class="review-card p-6 bg-white border rounded-lg shadow-sm">
      <!-- rating -->
      <div class="flex items-center space-x-1 text-yellow-500 mb-2">
        <i class="fas fa-star" v-for="n in review.rating" :key="n"></i>
        <i class="fas fa-star" v-for="n in (5 - review.rating)"></i>
      </div>
  
      <!-- name -->
      <h3 class="text-lg font-semibold">{{ review.name }}</h3>
  
      <!-- date -->
      <p class="text-sm text-gray-500">Posted on {{ review.date }}</p>
  
      <!-- review description -->
      <p class="mt-3 text-gray-700">{{ review.review }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      review: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .review-card {
    transition: transform 0.3s;
  }
  .review-card:hover {
    transform: translateY(-2px);
  }
  </style>
  