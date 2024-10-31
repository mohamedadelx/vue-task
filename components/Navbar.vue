<script setup>
import { ref } from "vue";
import BreakLine from "./BreakLine.vue";

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <Alert />
  <div>
    <div class="container flex justify-center items-center px-4">
      <div
        class="flex items-center justify-between w-full max-w-[1240px] h-[85px] lg:h-[100px] lg:pb-3"
      >
        <div class="flex items-center space-x-4">
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-black">
              <i class="fas fa-bars text-lg"></i>
            </button>
          </div>

          <!-- logo -->
          <NuxtLink to="/">
            <div class="lg:text-3xl text-2xl font-black lg:mx-4 font-integral">
              SHOP.CO
            </div>
          </NuxtLink>

          <!-- med and large -->
          <div class="hidden md:flex items-center space-x-4">
            <div class="relative group">
              <button class="text-black">
                Shop <i class="text-xs fas fa-chevron-down"></i>
              </button>
              <div
                class="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded"
              ></div>
            </div>
            <a href="#" class="text-black">On Sale</a>
            <a href="#" class="text-black">New Arrivals</a>
            <a href="#" class="text-black">Brands</a>
          </div>
        </div>

        <!-- search, icons -->
        <div class="flex items-center space-x-4">
          <!--  search, large -->
          <div class="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search for products..."
              class="px-10 mr-5 py-2.5 rounded-full bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 w-[38rem]"
            />
            <i
              class="fas fa-search absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500"
            ></i>
          </div>

          <!-- mobile search icon -->
          <NuxtLink to="#" class="text-gray-700 block lg:hidden">
            <i class="fas fa-search text-lg text-black"></i>
          </NuxtLink>

          <!-- cart -->
          <NuxtLink to="#" class="text-gray-700">
            <svg-icon class="w-5 h-5" name="cart" />
          </NuxtLink>

          <!-- user icon -->
          <NuxtLink to="/user" class="text-gray-700">
            <svg-icon class="w-5 h-5" name="user" />
          </NuxtLink>
        </div>
      </div>

      <!-- pop up -->
      <div
        v-if="isMenuOpen"
        class="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 flex justify-center items-center overflow-x-hidden"
      >
        <div class="bg-white p-6 rounded-lg w-[90%] max-w-md">
          <button
            @click="toggleMenu"
            class="absolute top-4 right-4 text-red-500"
          >
            <i class="fas fa-times text-2xl"></i>
          </button>

          <ul class="space-y-4 mt-8 text-center">
            <li class="relative group">
              <button class="text-gray-700">
                Shop <i class="fas fa-chevron-down"></i>
              </button>
              <div
                class="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded"
              ></div>
            </li>
            <li><a href="#" class="text-gray-700">On Sale</a></li>
            <li><a href="#" class="text-gray-700">New Arrivals</a></li>
            <li><a href="#" class="text-gray-700">Brands</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <BreakLine class="relative bottom-2 lg:left-4" />
</template>
