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
            <NuxtLink
              to="/about"
              v-bind:class="{ blu: $route.path == '/about' }"
              class="link block rounded px-3 py-2 text-white md:p-0"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/modules"
              v-bind:class="{ blu: $route.path == '/modules' }"
              class="link block rounded px-3 py-2 text-white md:p-0"
              >Modules</NuxtLink
            >
          </li>

          <li>
            <NuxtLink
              to="/services"
              v-bind:class="{ blu: $route.path == '/services' }"
              class="link block rounded px-3 py-2 text-white md:p-0"
              >Services</NuxtLink
            >
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

<style>
nav {
  z-index: 899999999;
}
</style>
