<template>
  
<nav class=" border-gray-200 z-50 relative" style="background:#0c0e0c; filter: drop-shadow(3px 20px 10px rgba(0, 0, 0, 0.1)); box-shadow: 2px 5px 10px;">
  <div class="  flex flex-wrap items-center justify-end  p-2 background-color:#0c0e0c h-14" >
    
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class=" hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class=" font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
        <li>
         <NuxtLink to="/" class="block py-2 px-3 text-white rounded md:p-0 link">Home</NuxtLink>
         </li>
        <li>
         <NuxtLink to="/about" v-bind:class="{ 'blu': $route.path == '/about' }" class="block py-2 px-3 text-white rounded md:p-0 link">About</NuxtLink>
         </li>
        <li>
          <NuxtLink to="/modules" v-bind:class="{ 'blu': $route.path == '/modules' }" class="block py-2 px-3 text-white rounded md:p-0 link">Modules</NuxtLink>
         </li>
       
        <li>
          <NuxtLink to="/services" v-bind:class="{ 'blu': $route.path == '/services' }" class="block py-2 px-3 text-white rounded md:p-0 link">Services</NuxtLink>
         </li>
       
        <li>
          <NuxtLink to="/contact" v-bind:class="{ 'blu': $route.path == '/contact' }" class="block py-2 px-3 text-white rounded md:p-0 link">Contact</NuxtLink>
         </li>
        <li>
            <NuxtLink type="button" to="/dashboard"  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center ">Dashboard</NuxtLink>
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

.blu {
  color: var(--g1);
}
</style>