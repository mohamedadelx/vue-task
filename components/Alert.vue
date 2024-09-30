<script setup>
import { ref } from 'vue';

// reactive variable comp
const isVisible = ref(true);

// hide
const closeMessage = () => {
  isVisible.value = false;
};
</script>

<template>
<div>
  <div v-if="isVisible" class="bg-black py-2 text-white flex flex-col md:flex-row items-center justify-between px-2 md:px-4 space-y-2 md:space-y-0">
    <span class="flex-grow text-center text-xs md:text-sm">
      Sign up and get 20% off your first order. 
      <span class="underline cursor-pointer">Sign Up Now</span>
    </span>
    <button @click="closeMessage" class="text-white hover:text-gray-400 ml-0 md:ml-4 text-sm md:text-base">
      x
    </button>
  </div>
</div>

</template>
