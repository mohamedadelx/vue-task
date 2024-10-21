import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import { createClient, defaultPlugins } from 'villus';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const graphqlBaseUrl = config.public.graphqlBaseUrl as string;

  const client = createClient({
    url: graphqlBaseUrl,
    use: defaultPlugins(),
  });

  nuxtApp.vueApp.use(client);
});