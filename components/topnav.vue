<template>
  
<nav class=" border-gray-200 z-50 relative" style="background:#0c0e0c;  box-shadow: 2px 5px 10px;">
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
           <NuxtLink to="/dashboard" class="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span class="relative px-7 py-2 transition-all ease-in duration-75 bg-white bg-gray-1000 rounded-md group-hover:bg-opacity-0">
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