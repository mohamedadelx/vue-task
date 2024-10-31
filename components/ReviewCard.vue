<template>
  <div class="review-card p-6 bg-white border rounded-3xl shadow-sm">
    <!-- rating -->
    <StarRating :rating="review.rating" />

    <!-- name -->
    <h3 class="text-lg font-semibold">{{ review.name }}</h3>

    <!-- date -->
    <p class="text-sm text-gray-500">Posted on {{ review.date }}</p>

    <!-- review description -->
    <p class="mt-3 text-gray-700">{{ review.review }}</p>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";

export default {
  components: {
    StarRating,
  },
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
