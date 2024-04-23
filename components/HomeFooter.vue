<template>
  

    <nav class="h-14 border-gray-200 z-50 absolute bottom-0 top-auto w-screen" style="background:#0c0e0c; filter: drop-shadow(3px 20px 10px rgba(0, 0, 0, 0.1)); box-shadow: 2px -5px 10px;">
        <div class="  flex flex-wrap items-center justify-center  p-2 background-color:#0c0e0c h-14" >
    
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class=" hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class=" font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
        <li>
         <NuxtLink to="/legal/privacy-policy" v-bind:class="{ 'blu': $route.path == '/legal/privacy-policy' }" class="block py-2 px-3 text-gray-600 font-bold rounded md:p-0 link">Privacy Policy</NuxtLink>
         </li>
        <li>
          <NuxtLink to="/legal/tos" v-bind:class="{ 'blu': $route.path == '/legal/tos' }" class="block py-2 px-3 text-gray-600 font-bold rounded md:p-0 link">TOS</NuxtLink>
         </li>
       
      
        
      </ul>
    </div>
  </div>
    </nav>
    
    </template>
    
    <script setup>
 
    </script>
    
    
    
    <style>
    nav {
      z-index: 899999999;
    }
    </style>