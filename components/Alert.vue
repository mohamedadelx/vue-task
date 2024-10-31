<script setup>
import { ref } from "vue";

const isVisible = ref(true);

const closeMessage = () => {
  isVisible.value = false;
};
</script>

<template>
  <div class="bg-black">
    <div
      v-if="isVisible"
      class="w-full max-w-[1240px] container py-2 px-4 md:px-0 text-white flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0"
    >
      <span class="flex-grow text-center text-xs md:text-sm font-integral">
        Sign up and get 20% off your first order.
        <span class="border-b cursor-pointer font-semibold">Sign Up Now</span>
      </span>
      <button
        @click="closeMessage"
        class="hidden md:inline hover:text-gray-400 text-lg"
      >
      <svg-icon class="w-3 h-3" name="x" />
      </button>
    </div>
  </div>
</template>
