<template>
    
    <div>
    <!--New Arrivals-->
    <Suggest 
      title="NEW ARRIVALS"
      :products="newArrivals" class="mb-10"
    />
    <div class="flex justify-center mb-20">
<button class="bg-transparent rounded-full p-3 pr-20 pl-20 font-semibold border border-gray-500 hover:bg-gray-500 hover:text-white hover:border-transparent transition duration-300 ease-in-out">
  View All
</button>
</div>
    <Breakline/>
    <!--Top Selling-->
    <Suggest
      title="TOP SELLING"
      :products="topSelling" class="mb-10"
    />
    <div class="flex justify-center mb-20">
<button class="bg-transparent rounded-full p-3 pr-20 pl-20 font-semibold border border-gray-500 hover:bg-gray-500 hover:text-white hover:border-transparent transition duration-300 ease-in-out">
  View All
</button>
</div>
    </div>
</template>