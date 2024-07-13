<script setup>
definePageMeta({
    layout: "dashboard"
})
</script>

<template>


  <div class="flex flex-col items-center h-full">
    
    <label class="inline-flex items-center justify-center cursor-pointer absolute " style="height: 20%;">
      <span class="mr-3 text-md font-medium text-gray-900 dark:text-gray-300">Single bot</span>
  <input type="checkbox" value="" v-on:click.stop="toggle()" class="sr-only peer">
  <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none ring-2  ring-blue-800 rounded-full peer bg-gray-1000 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 "></div>
  <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Multi-Bot</span>

</label>
    <div v-if="toggled" class="cards">
      
      <div class="card smol">
          <div class="title">Monthly Single Bot</div>
          <div class="starting-at">Starting at</div>
          <div class="plan-price "><span class="currency ">$</span> <span class="amount">2.50</span></div>
          <div class="per-month">per month</div>
          <div class="hr"></div>
          <h5>Unlock all premium features</h5>
          <h5>Custom bot status</h5>
          <h5>Custom commands</h5>
          <a class="relative inline-flex w-6/12 h-12 items-center align-middle mt-auto mb-5 justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span class="relative px-7 py-3 w-full  h-full text-center align-middle transition-all ease-in duration-75 bg-white bg-gray-1000 rounded-md group-hover:bg-opacity-0">
          Purchase
        </span>
        </a> 
      </div>

      <div class="card">
          <div class="title">Yearly Single Bot</div>
          <div class="starting-at">Starting at</div>
          <div class="plan-price "><span class="currency ">$</span> <span class="amount">27</span></div>
          <div class="per-month">per year (10% savings)</div>
          <div class="hr"></div>
          <h5>All features of previous tier</h5>
          <a  class="relative inline-flex w-6/12 h-12 items-center  justify-center p-0.5 mt-auto mb-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-7 py-3 w-full  h-full transition-all ease-in duration-75 bg-white bg-gray-1000 rounded-md group-hover:bg-opacity-0">
          Purchase
        </span>
        </a> 
      </div>

    

      <div class="card smol">
          <div class="title">Quarterly Single Bot</div>
          <div class="starting-at">Starting at</div>
          <div class="plan-price "><span class="currency ">$</span> <span class="amount">7</span></div>
          <div class="per-month">per month (6% savings)</div>
          <div class="hr"></div>
          <h5>All features of previous tier</h5>
          <a  class="relative inline-flex w-6/12 h-12 items-center mt-auto justify-center p-0.5 mb-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-7 py-3 w-full  h-full transition-all ease-in duration-75 bg-white bg-gray-1000 rounded-md group-hover:bg-opacity-0">
        Purchase
        </span>
        </a> 
      </div>
  </div>

  <div v-if="!toggled" class="cards">
      
      <div class="card smol">
          <div class="title">Monthly Multi-Bot</div>
          <div class="starting-at">Starting at</div>
          <div class="plan-price "><span class="currency ">$</span> <span class="amount">10</span></div>
          <div class="per-month">per month</div>
          <div class="hr"></div>
          <h5 class="thing font-bold">Create unlimited bots!</h5>
          <h5>Unlock all premium features</h5>
          <h5>Custom bot status</h5>
          <h5>Custom commands</h5>
          <a class="relative inline-flex w-6/12 h-12 items-center align-middle mt-auto mb-5 justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span class="relative px-7 py-3 w-full  h-full text-center align-middle transition-all ease-in duration-75 bg-white bg-gray-1000 rounded-md group-hover:bg-opacity-0">
          Purchase
        </span>
        </a> 
      </div>

      <div class="card">
          <div class="title">Yearly Multi-Bot</div>
          <div class="starting-at">Starting at</div>
          <div class="plan-price "><span class="currency ">$</span> <span class="amount">60</span></div>
          <div class="per-month">per year (50% savings)</div>
          <div class="hr"></div>
          <h5>All features of previous tier</h5>
          <a  class="relative inline-flex w-6/12 h-12 items-center  justify-center p-0.5 mt-auto mb-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-7 py-3 w-full  h-full transition-all ease-in duration-75 bg-white bg-gray-1000 rounded-md group-hover:bg-opacity-0">
          Purchase
        </span>
        </a> 
      </div>

    

      <div class="card smol">
          <div class="title">Quarterly Multi-Bot</div>
          <div class="starting-at">Starting at</div>
          <div class="plan-price "><span class="currency ">$</span> <span class="amount">25</span></div>
          <div class="per-month">per month (17% savings)</div>
          <div class="hr"></div>
          <h5>All features of previous tier</h5>
          <a  class="relative inline-flex w-6/12 h-12 items-center mt-auto justify-center p-0.5 mb-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-7 py-3 w-full  h-full transition-all ease-in duration-75 bg-white bg-gray-1000 rounded-md group-hover:bg-opacity-0">
        Purchase
        </span>
        </a> 
      </div>
  </div>
  </div>
 
   


    
  </template>
  
  <script>
  export default {
    name: "premium",
    components: {  },
    setup() {

    },
    mounted(){
   
    },
    data() {
      return {
        toggled: true
      }
    },
    methods: {
      toggle() {
        this.toggled = !this.toggled
      }
    }
  }
  </script>

  
  <style>


  </style>

<style scoped>
.t {
    top:0px
}
  body{
    height: 100vh !important;
   overflow:  hidden !important; 
  }
  
  div {
    color: #f2f2f2;
  }

  div.cards {
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    overflow: hidden;
}



div.card {
   
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 400px;
    min-width: 400px;
   height: 600px;
    border-radius: 20px;
    margin: 100px 75px 100px;
    background: #0c0e0c;
    font-size: 1.5em;
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0 0px 10px 10px #00000080;
}
div.smol {
    height: 550px;
}
div.title {
    background: linear-gradient(to right,var(--g1),var(--g2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.4em;
    font-weight: 800;
}

.thing {
  background: linear-gradient(to right,var(--g1),var(--g2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

div.hr {
    
    width: 75%;
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(to right,var(--g1),var(--g2));
    opacity: 70%;

}

div.starting-at {
    text-transform: uppercase;
    font-size: .5em;
    opacity: .8;
    margin-top: 20px;
}

div.plan-price {
    display: flex;
    font-size: 2.5em;
    font-weight: 600;
}

span.currency {
    font-size: .4em;
    margin-top: 5px;
}
div.per-month {
    font-size: .8em;
    opacity: .8;
    margin-bottom: 20px;
}



</style>