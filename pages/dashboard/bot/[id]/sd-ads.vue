<script setup>
definePageMeta({
    layout: "dashboard"
})
</script>

<template>
    <div class="flex flex-row m-10 justify-around ">


<div class="card bg-dark rounded-lg">
        <div class="card-body bg-dark rounded-lg">
            <h5 class="card-title font-bold" id="players_online">Estimated Profits:</h5>
            <p class="card-text"><span id="connectedPlayers"> $0</span> </p>		
        </div>
    </div>
<div class="card bg-dark rounded-lg">
        <div class="card-body bg-dark rounded-lg">
            <h5 class="card-title font-bold" id="players_online">Pending Profits:</h5>
            <p class="card-text"><span id="connectedPlayers">$0</span> </p>		
        </div>
    </div>
</div>
<div class="flex flex-row m-10 justify-around ">

<div class="card bg-dark">
  <div class="card-body-tall  bg-dark">
    <h5 class="card-title font-bold" id="players_online">Impressions:</h5>
      <Line :data="data2" :options="options" ></Line>
  </div>
</div>
<div class="card bg-dark">
  <div class="card-body-tall bg-dark">
    <h5 class="card-title font-bold" id="players_online">Clicks:</h5>
    <Line :data="data2" :options="options" ></Line>
  </div>
</div>
<div class="card bg-dark">
  <div class="card-body-tall bg-dark">
    <h5 class="card-title font-bold" id="players_online">Ads Sent:</h5>
    <Line :data="data2" :options="options" ></Line>
    
  </div>
</div>




</div>

<div class="flex flex-row m-10 justify-around ">
  <div class="card bg-dark">
  <div class="card-body-tall bg-dark">
    <h5 class="card-title font-bold" id="players_online">Settings:</h5>
    <div class="grid grid-cols-2 gap-2  items-start absolute w-full mt-2 ml-2">

<label class="inline-flex items-center cursor-pointer relative " style="height: 10%;">
    <input type="checkbox" value="" v-on:click.stop="toggle()" class="sr-only peer">
    <div class="relative w-10 h-5 bg-gray-200 peer-focus:outline-none ring-2  ring-blue-800 rounded-full peer bg-gray-1000 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 "></div>
    <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Enabled</span>
</label>







</div>
  </div>
</div>

<div class="card ">
  <div class="card-body-tall  ">
  
  </div>
</div>
<div class="card ">
  <div class="card-body-tall ">
  
  </div>
</div>





</div>

</template>

<script>

import {Line} from "vue-chartjs"
export default {
    data: () => {
    return {

      options: {
        responsive: true
      },
      data: {
        labels: ["06/1", "06/2", '06/3', "06/4", "06/5", '06/6', '06/7'],
        datasets: [{
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
        data: [65, 59, 80, 81, 56, 55, 40],

        fill: false,
        label: "Test",
        color: '#3b82f6',
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
      
  }]
      },
      data2: {
        labels: ["06/1", "06/2", '06/3', "06/4", "06/5", '06/6', '06/7'],
        datasets: [{
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
        data: [65, 59, 80, 81, 56, 55, 40],

        fill: false,
        label: "This week",
        color: '#3b82f6',
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
      
  },
  {
     
          
        data: [45, 50, 48, 55, 50, 48, 46],
        borderDash: [5, 5],
        fill: false,
        label: "Last week",
        color: '#f63b3b',
        borderColor: '#f63b3b',
        backgroundColor: '#f63b3b',
      
  }]
      }
    }
  },
}
</script>
<style scoped>
.card {
  
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
   


 
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
    height: 8rem;
    width: 20rem;

}
.card-body-tall {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
    height: 15.5rem;
    width: 25rem;

}

.card-title {
    margin-bottom: 0.75rem;
    color: #ffffff;
}
.card-text{
    color: #ffffff;
}
.bg-dark {
    background-color: #0c0e0c!important;
    box-shadow: 0px 0px 10px;
}

.image1 {
  vertical-align: middle;
  align-self: center;
  justify-self: center;
  position: absolute;
  margin-bottom: 5px;
  z-index: 2;
  border: 2px solid rgb(242, 244, 251);
  filter: drop-shadow(rgba(0, 0, 0, 0.16) 0px 32px 72px);
}

.image1:not([src]){
  vertical-align: middle;
  align-self: center;
  justify-self: center;
  border: 2px solid rgb(85, 87, 98);
  background: transparent;
  filter: none;
  font-size: 24px;
}

.image2 {
  width: 40px;
    height: 40px;
    border-radius: 50px;
    flex-shrink: 0;
}

input::file-selector-button {
  display: none;
}

</style>