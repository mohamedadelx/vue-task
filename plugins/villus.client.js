import { createClient } from 'villus';
export default defineNuxtPlugin((nuxtApp) => {
  const client = createClient({
    url: useRuntimeConfig().public.graphqlUrl, //endpoint
  });
  nuxtApp.provide('villus', client);
});