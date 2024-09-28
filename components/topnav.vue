<template>
  <nav
    class="relative z-50 border-gray-200"
    style="background: #0c0e0c; box-shadow: 2px 5px 10px"
  >
    <div
      class="background-color:#0c0e0c flex h-14 flex-wrap items-center justify-end p-2"
    >
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="mt-4 flex flex-col items-center rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse"
        >
          <li>
            <NuxtLink
              to="/"
              class="link block rounded px-3 py-2 text-white md:p-0"
              >Home</NuxtLink
            >
          </li>

          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown2"
              data-dropdown-offset-distance="15"
              class="link inline-flex items-center rounded-lg px-1 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
              type="button"
            >
              Modules
              <svg
                class="ms-3 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdown2"
              style="background: #0c0e0c; box-shadow: 0px 0px 10px"
              class="fadeIn z-10 hidden w-44 divide-y divide-gray-100 rounded-lg shadow"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" class="link block px-4 py-2 text-white">test</a>
                </li>
                <li>
                  <a href="#" class="link block px-4 py-2 text-white">test</a>
                </li>
                <li>
                  <a href="#" class="link block px-4 py-2 text-white">test</a>
                </li>
                <li>
                  <a href="#" class="link block px-4 py-2 text-white">test</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              data-dropdown-offset-distance="15"
              class="link inline-flex items-center rounded-lg px-1 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
              type="button"
            >
              Support
              <svg
                class="ms-3 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdown"
              style="background: #0c0e0c; box-shadow: 0px 0px 10px"
              class="fadeIn z-10 hidden w-44 divide-y divide-gray-100 rounded-lg shadow"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="https://discord.gg/E9tAYRjys9"
                    class="link block px-4 py-2 text-white"
                    >Support Server</a
                  >
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NuxtLink
              to="/dashboard"
              class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
            >
              <span
                class="bg-gray-1000 relative rounded-md bg-white px-7 py-2 text-white transition-all duration-75 ease-in group-hover:bg-opacity-0"
              >
                Dashboard
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useFlowbite } from "~/composables/useFlowbite";
export default {
  mounted() {
    useFlowbite(() => {
      initFlowbite();
    });
  },
};
</script>

<style>
nav {
  z-index: 899999999;
}

.fadeIn {
  animation: fadeInAnimation ease-in-out 0.1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
