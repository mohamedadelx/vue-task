<template>
  <Alert/>
    <div class="flex items-center justify-center p-8">
      <div class="flex items-center space-x-4">
        <div class="text-3xl font-bold mx-4 font-candal">SHOP.CO</div>
        <div class="flex items-center space-x-4">
          <div class="relative group">
            <button class="text-gray-700">Shop <i class="fas fa-chevron-down"></i></button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Category 1</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Category 2</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Category 3</a>
            </div>
          </div>
          <a href="#" class="text-gray-700">On Sale</a>
          <a href="#" class="text-gray-700">New Arrivals</a>
          <a href="#" class="text-gray-700">Brands</a>
        </div>
      </div>
      <div class="flex items-center space-x-4 mx-10">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search for products..."
            class="mx-4 px-10 py-2 rounded-full bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 w-96"
          />
          <i class="fas fa-search absolute top-1/2 transform -translate-y-1/2 left-7 text-gray-500"></i>
        </div>
        <nuxt-link to="/cart" class="text-gray-700">
        <i class="fas fa-shopping-cart"></i>
      </nuxt-link>
      <nuxt-link to="/profile" class="text-gray-700">
        <i class="fas fa-user"></i>
      </nuxt-link>
      </div>
    </div>
    <Breakline/>
  </template>
