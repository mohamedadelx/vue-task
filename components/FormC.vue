<template>
  <div>
    <form class="flex flex-col gap-y-4">
      <div class="relative">
        <svg-icon
          class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
          name="email"
        />
        <input
          v-model="email"
          class="px-10 py-2 rounded-full w-full text-black"
          placeholder="Enter your email address"
          type="email"
        />

        <span class="text-red-500 mt-2 text-xs">
          {{ errors.email }}
        </span>
      </div>

      <button
        type="submit"
        class="bg-white text-black text-sm sm:text-base px-6 py-2 rounded-full block w-full"
      >
        Subscribe to Newsletter
      </button>
    </form>
  </div>
</template>

<script>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

export default {
  setup() {
    // define schema
    const schema = yup.object({
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    });

    // initialize form and fields
    const { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });

    const { value: email } = useField("email");

    // submission handler
    const submitForm = handleSubmit((values) => {
      console.log("Form Submitted:", values);
    });
    return {
      email,
      errors,
      submitForm,
    };
  },
};
</script>
