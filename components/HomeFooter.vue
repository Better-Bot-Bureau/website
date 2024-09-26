<template>
  <nav
    class="absolute bottom-0 top-auto z-50 h-14 w-screen"
    style="
      background: #0c0e0c;
      filter: drop-shadow(3px 20px 10px rgba(0, 0, 0, 0.1));
      box-shadow: 2px -5px 10px;
    "
  >
    <div
      class="background-color:#0c0e0c flex h-14 flex-wrap items-center justify-center p-2"
    >
      <div class="w-full md:block md:w-auto">
        <ul
          class="mt-0 flex flex-row items-center justify-center space-x-8 p-0 font-medium md:border-0"
        >
          <li>
            <NuxtLink
              to="/legal/privacy-policy"
              v-bind:class="{ blu: $route.path == '/legal/privacy-policy' }"
              class="link block rounded px-3 py-2 font-bold text-gray-600 md:p-0"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/legal/tos"
              v-bind:class="{ blu: $route.path == '/legal/tos' }"
              class="link block rounded px-3 py-2 font-bold text-gray-600 md:p-0"
              >TOS</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style>
nav {
  z-index: 899999999;
}
</style>
