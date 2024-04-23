
<script setup>
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})
</script>

<template>

  <div class="flex flex-col items-center justify-center h-screen w-screen top-0 mx-auto absolute">
  <div class="flex flex-row w-6/12">
    <NuxtLink  type="button" to="/dashboard/new"  class=" float-right w-2/12 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg mb-3 text-sm px-7 py-2.5 text-center ">Add New</NuxtLink>
    
    </div>
    
    <div class="flex flex-col items-center rounded-md mx-auto  w-6/12 h-4/6 " style="background:#0c0e0c; box-shadow: 0px 0px 10px; justify-content: top;">
      
        <div class="server-list" :key="number1">

          <div
          v-for="bot of servers"
          :key="bot.id"
          class="server-container"
        >
        <div class="server-background"  :style="{ backgroundImage: `url(${bot.avatar}) `  } " ></div> 
        <h3 class="something">{{ bot.username }}</h3>
        <img  class="image1 image2" :src=bot.avatar>
        
              <nuxt-link
                
                class="buttonthing"
              
                :to="'dashboard/bot/id='+bot.id"
                >⠀</nuxt-link
              >
          
        </div>
       
       

      </div>
    </div>
  </div> 

</template>

<script>
export default {
  created() {
    this.getBots()
  },
  data: () => {
    return {
      number1: 0,
      servers: []
    }
  },
  methods: {
    async getBots() {
      let res = await useAuth().getBots()
      console.log(res)
      if(res){
          this.servers = res
          this.number1++
        }else{
          this.servers = []
        }
    }
  }
}
</script>

<style scoped>

.server-list-container {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border-radius: 10px;
}

.container {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
body {
  height: 100vh;
  overflow: hidden;
}

img {
  display: block;
}
.grid {

    z-index: -1;
}
.image1 {
  vertical-align: middle;
  align-self: center;
  justify-self: center;
  position: relative;
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
  width: 80px;
    height: 80px;
    border-radius: 50px;
    flex-shrink: 0;
}

.buttonthing {
  z-index: 100;
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  text-decoration: none;
}

.server-list {
  overflow-x: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  width: 95%;
  margin-top: 30px;
  padding-top: 5px;
  margin-bottom: 30px;
}
.server-list::-webkit-scrollbar {
  cursor:grab;
  display: none;
}
.server-container {
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  border-radius: 8px;
  background: rgb(31, 33, 41);
  height: 152px;
  width: 100%;
  overflow: hidden;
  transition: 0.25s;
}

.server-container:hover {

  transform: translateY(-0.25em);
}
.something {
 text-align: center;
  font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: rgb(242, 244, 251);
    margin-top: 0px;
 
    padding: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


.no-server-icon1 {
  width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-weight: bold;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    user-select: none;
}


.server-background {
  background-position-x: center;
    background-position-y: center;
    background-size: cover;
  
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    position: absolute;
    inset: 0px;
    z-index: 1;
    transform: scale(1.2);
    filter: blur(10px);
    opacity: 0.3;
}



.server-name {
  font-size: 1.5em;
  
  padding-left: 5px;
  word-wrap: break-word;
}



.server-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0.9% 0.6%;
  color: rgb(255, 255, 255);
}
h3 {
  display: block;
}

.button-container2 {
  margin: 0 0.5% 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
}

.smol {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
}



</style>
