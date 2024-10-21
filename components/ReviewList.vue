<template>
  <div class="reviews-section max-w-screen-lg mx-auto p-6">
    <!-- tabs -->
    <div class="pb-6 flex justify-around border-b mb-4">
      <button class="tab text-gray-500 font-medium focus:outline-none">Product Details</button>
      <button class="tab text-black font-bold border-b-2 border-black focus:outline-none">Rating & Reviews</button>
      <button class="tab text-gray-500 font-medium focus:outline-none">FAQs</button>
    </div>

    <!-- all reviews -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold">All Reviews ({{ reviews.length }})</h2>

      <!-- filter -->
      <div class="relative">
        <button @click="toggleDropdown" class="flex items-center space-x-1 bg-gray-100 py-2 px-4 rounded-full text-slate-900">
          <span class="text-slate-900 font-semibold pr-4">Latest</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div v-if="isDropdownOpen" class="absolute mt-1 w-full bg-white border rounded-md shadow-lg">
          <button @click="sortReviews('latest')" class="block px-4 py-2 text-sm hover:bg-gray-100">Latest</button>
          <button @click="sortReviews('highest')" class="block px-4 py-2 text-sm hover:bg-gray-100">Highest⭐</button>
        </div>
      </div>

      <!-- write a review -->
      <button class="bg-black text-white py-2 px-6 rounded-full">Write a Review</button>
    </div>

    <!-- reviews grid  -->
    <div class="grid gap-6 grid-cols-1 lg:grid-cols-2">
      <ReviewCard v-for="(review, index) in paginatedReviews" :key="index" :review="review" />
    </div>

    <!-- load more review button -->
    <div v-if="canLoadMore" class="mt-6 flex justify-center">
      <button @click="loadMoreReviews" class="px-6 py-2 bg-transparent border text-black rounded-full hover:bg-gray-400 transition duration-300">
        Load More Reviews
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import ReviewCard from './ReviewCard.vue';

export default {
  components: {
    ReviewCard,
  },
  setup() {
    const reviews = ref([
      {
        name: 'Samantha D.',
        date: 'August 14, 2023',
        rating: 5,
        review:
          'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.',
      },
      {
        name: 'Ziad',
        date: 'August 14, 2022',
        rating: 5,
        review:
          'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.',
      },
      {
        name: 'John Doe',
        date: 'August 14, 2024',
        rating: 5,
        review:
          'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.',
      },
      {
        name: 'Mohamed',
        date: 'September 20, 2024',
        rating: 5,
        review:
          'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.',
      },
      {
        name: 'Ethan R.',
        date: 'August 16, 2023',
        rating: 3.5,
        review:
          'This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
      },
      {
        name: 'Ethan R.',
        date: 'August 16, 2023',
        rating: 5,
        review:
          'This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
      },
    ]);
    
    const reviewsPerPage = ref(5);
    const currentPage = ref(1);
    const isDropdownOpen = ref(false);
    const sortBy = ref('latest');

    const paginatedReviews = computed(() => {
      const start = (currentPage.value - 1) * reviewsPerPage.value;
      const end = currentPage.value * reviewsPerPage.value;
      return reviews.value.slice(start, end);
    });

    const canLoadMore = computed(() => {
      return currentPage.value * reviewsPerPage.value < reviews.value.length;
    });

    const loadMoreReviews = () => {
      if (canLoadMore.value) {
        currentPage.value++;
      } else {
        console.error('No more reviews to load.');
      }
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const sortReviews = (order) => {
      if (order === 'latest') {
        reviews.value.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (order === 'highest') {
        reviews.value.sort((a, b) => b.rating - a.rating);
      }
      isDropdownOpen.value = false;
    };

    return {
      reviews,
      paginatedReviews,
      canLoadMore,
      loadMoreReviews,
      toggleDropdown,
      sortReviews,
      isDropdownOpen,
    };
  },
};
</script>
