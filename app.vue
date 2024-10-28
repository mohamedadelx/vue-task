<script setup>
import { useClient } from 'villus';
import { useRuntimeConfig } from '#app';
const config = useRuntimeConfig();
    const urlaya = config.public.graphqlUrl;
useClient({
  url: urlaya,
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>