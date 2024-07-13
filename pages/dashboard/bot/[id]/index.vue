<script setup>
definePageMeta({
    layout: "dashboard"
})
</script>

<template>
  <div class="flex flex-row m-10 justify-around ">

    <div class="card bg-dark">
			<div class="card-body bg-dark">
				<h5 class="card-title font-bold" id="players_online">Bot Username:</h5>
					<p class="card-text"><span id="connectedPlayers"> {{bot.username}}</span></p>		
          <div class="flex my-5 flex-row h-11 ">
        <input type="text" autocomplete="off" id="tokeninput" placeholder="New name" style="background-color: #0c0e0c" class=" border-2 hover:border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <button type="button" @click="submit"  class="transition-all ease-in duration-75 ms-1 left-1 text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 content-center">Submit</button>
       
    </div>
			</div>
		</div>
    <div class="card bg-dark">
			<div class="card-body bg-dark">
				<h5 class="card-title font-bold" id="players_online">Bot Status:</h5>
					<p class="card-text"><span id="connectedPlayers"> N/A</span> </p>		
          <div class="flex my-5 flex-row h-11 ">
          
            <button type="button" class="transition-all ease-in duration-75 w-3/12 text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Start</button>
            <button type="button" class="transition-all ease-in duration-75 w-3/12 text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 focus:ring- focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Stop</button>


          </div>
			</div>
		</div>
    <div class="card bg-dark">
			<div class="card-body bg-dark">
				<h5 class="card-title font-bold" id="players_online">Bot Avatar:</h5>
        <div class="flex my-5 flex-row absolute bottom-0 w-11/12 h-11 ">
          <input type="file" autocomplete="off" id="tokeninput"  placeholder="New name" style="background-color: #0c0e0c" class=" border-2  text-gray-900 text-sm rounded-lg hover:border-gray-400 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <button type="button" @click="submit"  class="transition-all ease-in duration-75  ms-1 left-1 text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 content-center">Submit</button>
       
          </div>
			</div>
		</div>




  </div>
  <div class="flex flex-row m-10 justify-around ">

<div class="card bg-dark">
  <div class="card-body-tall  bg-dark">
    <h5 class="card-title font-bold" id="players_online">Online users:</h5>
      <Line :data="data" :options="options" ></Line>
  </div>
</div>
<div class="card bg-dark">
  <div class="card-body-tall bg-dark">
    <h5 class="card-title font-bold" id="players_online">Messages:</h5>
    <Line :data="data" :options="options" ></Line>
  </div>
</div>
<div class="card bg-dark">
  <div class="card-body-tall bg-dark">
    <h5 class="card-title font-bold" id="players_online">Servers:</h5>
    <Line :data="data2" :options="options" ></Line>
    
  </div>
</div>




</div>

<div class="flex flex-row m-10  ">







</div>
</template>

<script>
import {Line} from "vue-chartjs"
export default {
  components: [Line],
  data: () => {
    return {
      number1: 0,
      servers: 0,
      bot: {username: "loading..."},
      interval: null,
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
        label: "Gained",
        color: '#3b82f6',
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
      
  },
  {
     
          
        data: [45, 50, 48, 55, 50, 48, 46],
        borderDash: [5, 5],
        fill: false,
        label: "Lost",
        color: '#f63b3b',
        borderColor: '#f63b3b',
        backgroundColor: '#f63b3b',
      
  }]
      }
    }
  },
  methods: {
    async getGuilds() {
      let res = await useAuth().getGuilds(this.$route.params.id.split("=")[1])
      console.log(res)
      if(res){
          this.servers = res.length
          this.number1++
        }else{
          this.servers = 0
        }
    },
    async getBot() {
      let res = await useAuth().getBot(this.$route.params.id.split("=")[1])
     
        console.log(res)
         
          if(res) {
            this.bot = res
          }else {
            this.bot = {username: "placeholder"}
          }
       
       
    }
  },
  mounted() {
    this.getBot()
    this.interval = setInterval(() => {
        this.getBot()
    }, 5000)


  },
  unmounted() {
    clearInterval(this.interval);
  }
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
    height: 10rem;
    width: 25rem;

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
