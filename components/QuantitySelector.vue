<template>
  <div class="flex items-center justify-between w-24 bg-gray-200 rounded-full px-3 py-3">
    <button @click="decreaseQuantity" class="text-xl font-semibold bg-transparent">-</button>
    <span class="text-base font-medium">{{ quantity }}</span>
    <button @click="increaseQuantity" class="text-xl font-semibold bg-transparent">+</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    initialQuantity: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const quantity = ref(props.initialQuantity);

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
        emit('update-quantity', quantity.value);
      }
    };

    const increaseQuantity = () => {
      quantity.value++;
      emit('update-quantity', quantity.value);
    };

    // watch
    watch(() => props.initialQuantity, (newValue) => {
      quantity.value = newValue;
    });

    return {
      quantity,
      decreaseQuantity,
      increaseQuantity,
    };
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
