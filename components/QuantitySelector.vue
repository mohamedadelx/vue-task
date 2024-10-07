<template>
    <div class="flex items-center justify-between w-24 bg-gray-200 rounded-full px-3 py-3">
      <button @click="decreaseQuantity" class="text-xl font-semibold bg-transparent">-</button>
      <span class="text-base font-medium">{{ quantity }}</span>
      <button @click="increaseQuantity" class="text-xl font-semibold bg-transparent">+</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      initialQuantity: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        quantity: this.initialQuantity,
      };
    },
    methods: {
      decreaseQuantity() {
        if (this.quantity > 1) this.quantity--;
        this.$emit('update-quantity', this.quantity);
      },
      increaseQuantity() {
        this.quantity++;
        this.$emit('update-quantity', this.quantity);
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
  </style>
  