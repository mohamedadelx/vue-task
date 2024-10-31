<template>
  <div
    class="bg-black text-white py-4 px-4 md:py-6 md:px-8 rounded-2xl max-w-[90%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-6xl mx-auto relative top-20 container"
  >
    <div
      class="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col md:flex-row items-center justify-between"
    >
      <h1
        class="text-2xl md:text-4xl font-black mb-4 md:mb-0 font-integral md:text-left"
      >
        STAY UPTO DATE ABOUT <br />
        OUR LATEST OFFERS
      </h1>
      <div class="flex flex-col items-center space-y-4 sm:space-y-6">
        <FormC />
      </div>
    </div>
  </div>

  <footer class="bg-gray-100 py-32">
    <div
      class="max-w-[1190px] mx-auto px-4 grid lg:grid-cols-5 gap-8 space-x-12"
    >
      <div>
        <h2 class="text-4xl font-extrabold">SHOP.CO</h2>
        <p class="mt-4 text-gray-600">
          We have clothes that suits your style and which you're proud to wear.
          From women to men.
        </p>
        <div class="flex space-x-4 mt-4">
          <a class="text-gray-600" href="#">
            <i class="fab fa-twitter"> </i>
          </a>
          <a class="text-gray-600" href="#">
            <i class="fab fa-facebook-f"> </i>
          </a>
          <a class="text-gray-600" href="#">
            <i class="fab fa-instagram"> </i>
          </a>
          <a class="text-gray-600" href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
              class="w-[16px] pt-1"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-bold">COMPANY</h3>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>
            <a href="#"> About </a>
          </li>
          <li>
            <a href="#"> Features </a>
          </li>
          <li>
            <a href="#"> Works </a>
          </li>
          <li>
            <a href="#"> Career </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold">HELP</h3>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>
            <a href="#"> Customer Support </a>
          </li>
          <li>
            <a href="#"> Delivery Details </a>
          </li>
          <li>
            <a href="#"> Terms &amp; Conditions </a>
          </li>
          <li>
            <a href="#"> Privacy Policy </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold">FAQ</h3>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>
            <a href="#"> Account </a>
          </li>
          <li>
            <a href="#"> Manage Deliveries </a>
          </li>
          <li>
            <a href="#"> Orders </a>
          </li>
          <li>
            <a href="#"> Payments </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold">RESOURCES</h3>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>
            <a href="#"> Free eBooks </a>
          </li>
          <li>
            <a href="#"> Development Tutorial </a>
          </li>
          <li>
            <a href="#"> How to - Blog </a>
          </li>
          <li>
            <a href="#"> Youtube Playlist </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="max-w-6xl mx-auto px-4 mt-10 border-t pt-6 text-gray-600 flex flex-col md:flex-row items-center justify-between"
    >
      <p>Shop.co © 2000-2023. All Rights Reserved</p>
      <div class="flex pt-4 lg:pt-0">
        <img
          src="../public/img/image.png"
          alt="visa-logo"
          class="w-14 h-8 object-cover mr-1"
        />
        <img
          src="../public/img/image1.png"
          alt="master"
          class="w-14 h-8 object-cover mr-1"
        />
        <img
          src="../public/img/image3.png"
          alt="master"
          class="w-14 h-8 object-cover mr-1"
        />
        <img
          src="../public/img/image4.png"
          alt="master"
          class="w-14 h-8 object-cover mr-1"
        />
        <img
          src="../public/img/image5.png"
          alt="master"
          class="w-14 h-8 object-cover mr-1"
        />
      </div>
    </div>
  </footer>
</template>
