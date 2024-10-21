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

<script>

export default {

  data() {
    return {
      newArrivals: [
      {
          title: 'T-shirt with Tape Details',
          src: '/img/Tshirt-Tape.png',
          alt: 'T-shirt with Tape Details',
          rating: 4.5,
          price: '$120',
        },
        {
          title: 'Skinny Fit Jeans',
          src: '/img/Skinny-Jeans.png',
          alt: 'Trendy Sneakers',
          rating: 3.5,
          oldPrice: '$260',
          price: '$240',
          discount:'-20%',
        },

        {
          title: 'Checkered Shirt',
          src: '/img/Checkered-Shirt.png',
          alt: 'Checkered Shirt',
          rating: 4.5,
          price: '$180',
        },
        {
          title: 'Sleeve Striped T-shirt',
          src: '/img/Orange-Stripe.png',
          alt: 'Sleeve Striped',
          rating: 4.5,
          price: '$130',
          oldPrice:'160',
          discount:'-30%',
        },
        {
          title: 'Sleeve Striped T-shirt',
          src: '/img/Orange-Stripe.png',
          alt: 'Sleeve Striped',
          rating: 4.5,
          price: '$130',
          oldPrice:'160',
          discount:'-30%',
        },
      ],

      topSelling: [
        {
        title: 'Sleeve Striped T-shirt',
          src: '/img/Orange-Stripe.png',
          alt: 'Sleeve Striped',
          rating: 4.5,
          price: '$130',
          oldPrice:'160',
          discount:'-30%',
        },
        {
        title: 'Sleeve Striped T-shirt',
          src: '/img/Orange-Stripe.png',
          alt: 'Sleeve Striped',
          rating: 4.5,
          price: '$130',
          oldPrice:'160',
          discount:'-30%',
        },
        {
          title: 'Polo with Tipping Details',
          src: '/img/s3.png',
          alt: 'Polo with Tipping Details',
          rating: 4.5,
          price: '$180',
        },
        {
          title: 'Polo with Tipping Details',
          src: '/img/s3.png',
          alt: 'Polo with Tipping Details',
          rating: 4.5,
          price: '$180',
        },
        {
          title: 'Polo with Tipping Details',
          src: '/img/s3.png',
          alt: 'Polo with Tipping Details',
          rating: 4.5,
          price: '$180',
        },
      ],
    };
  },
};
</script>