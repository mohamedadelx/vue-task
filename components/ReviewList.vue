<template>
  <div class="reviews-section max-w-screen-lg mx-auto p-6 pt-10">
    <!-- tabs -->

    <div class="flex justify-around border-b mb-4 lg:space-x-0 space-x-7">
      <button class="text-gray-500 font-integral focus:outline-none">
        Product Details
      </button>
      <button
        class="text-black font-semibold border-b-2 font-integral border-black focus:outline-none lg:px-20"
      >
        Rating & Reviews
      </button>
      <button class="text-gray-500 font-integral focus:outline-none">
        FAQs
      </button>
    </div>

    <!-- all reviews -->
    <div class="flex justify-between items-center mb-6 mt-6">
      <h2 class="text-xl font-bold">
        All Reviews
        <span class="font-light lg:text-lg text-base text-gray-400"
          >({{ reviews.length }})</span
        >
      </h2>

      <!-- filter -->
      <div class="flex items-center lg:space-x-3 space-x-1">
        <svg-icon
          class="lg:w-11 lg:h-11 w-10 h-10 cursor-pointer"
          name="filter"
        />
        <div class="relative">
          <button
            @click="toggleDropdown"
            class="hidden lg:inline flex items-center space-x-1 bg-gray-100 py-3 px-4 rounded-full text-slate-900"
          >
            <span class="text-slate-900 font-semibold pr-4">Latest</span>
            <i class="fas fa-chevron-down"></i>
          </button>

          <div
            v-if="isDropdownOpen"
            class="absolute mt-1 w-full bg-white border rounded-md shadow-lg"
          >
            <button
              @click="sortReviews('latest')"
              class="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Latest
            </button>
            <button
              @click="sortReviews('highest')"
              class="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Highest⭐
            </button>
          </div>
        </div>

        <!-- write a review -->
        <button
          class="bg-black text-white lg:py-3 lg:px-6 p-3 text-sm rounded-full lg:text-base"
        >
          Write a Review
        </button>
      </div>
    </div>
    <!-- reviews grid  -->
    <div class="grid gap-6 grid-cols-1 lg:grid-cols-2">
      <ReviewCard
        v-for="(review, index) in paginatedReviews"
        :key="index"
        :review="review"
      />
    </div>

    <!-- load more review button -->
    <div v-if="canLoadMore" class="mt-6 flex justify-center">
      <button
        @click="loadMoreReviews"
        class="px-6 py-2 bg-transparent border text-black rounded-full hover:bg-gray-400 transition duration-300"
      >
        Load More Reviews
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import ReviewCard from "./ReviewCard.vue";

export default {
  components: {
    ReviewCard,
  },
  setup() {
    const reviews = ref([
      {
        name: "Samantha D.",
        date: "August 14, 2023",
        rating: 5,
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.",
      },
      {
        name: "Ziad",
        date: "August 14, 2022",
        rating: 5,
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.",
      },
      {
        name: "John Doe",
        date: "August 14, 2024",
        rating: 5,
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.",
      },
      {
        name: "Mohamed",
        date: "September 20, 2024",
        rating: 5,
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.",
      },
      {
        name: "Ethan R.",
        date: "August 16, 2023",
        rating: 3.5,
        review:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
      },
      {
        name: "Ethan R.",
        date: "August 16, 2023",
        rating: 5,
        review:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
      },
      {
        name: "Ethan R.",
        date: "August 16, 2023",
        rating: 5,
        review:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
      },
    ]);

    const reviewsPerPage = ref(6);
    const currentPage = ref(1);
    const isDropdownOpen = ref(false);
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
        console.error("No more reviews to load.");
      }
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const sortReviews = (order) => {
      if (order === "latest") {
        reviews.value.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (order === "highest") {
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
