<script setup>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});
</script>

<template>
  <div class="absolute top-0 flex h-screen w-screen">
    <div
      class="m-auto flex h-4/6 w-3/6 rounded-md"
      style="background: #0c0e0c; box-shadow: 0px 0px 10px"
    >
      <div class="mx-auto my-3 flex w-10/12 flex-col justify-end">
        <iframe
          class="h-96 w-auto"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        >
        </iframe>
        <h1 class="text-lg font-medium text-white">Setup</h1>
        <h2 class="text-md mb-2 font-medium text-gray-400">
          To create a bot you must make a bot and token at the Discord Developer
          Portal. Once you have generated a token, paste it below and click
          Submit to create your bot
        </h2>

        <label
          for="default-input"
          class="mb-2 text-sm font-medium dark:text-white"
          >Bot Token</label
        >

        <div class="flex flex-row">
          <input
            type="text"
            autocomplete="off"
            id="tokeninput"
            v-model="token"
            class="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <button
            type="button"
            @click="submit"
            class="left-1 ms-1 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-7 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
        <a
          href="https://discord.com/developers/applications"
          class="link mx-auto my-2 block rounded px-3 py-4 font-bold text-gray-600 md:p-0"
        >
          Discord Developer Portal</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      token: "",
    };
  },
  methods: {
    submit: async () => {
      let router = useRouter();
      let token = document.getElementById("tokeninput").value;
      await $fetch("/api/v1/bot", { method: "post", body: { token } });
      router.push("/dashboard");
    },
  },
});
</script>
