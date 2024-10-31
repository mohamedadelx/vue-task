import type { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
  overwrite: true,
  schema: "https://fitandfixstaging.hypernode.io/graphql",
  documents: "M:/single-product/queries/**/*.gql",
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};
export default config;
