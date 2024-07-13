<script setup>
definePageMeta({
    layout: "dashboard"
})
</script>

<template>
    
  <div v-if="modalVisible" class="h-screen w-screen absolute left-0 top-0 flex justify-center items-center" style="background:#0c0c0eB3;  z-index: 9999999;">
    <div class=" h-1/6 w-3/12 rounded-md flex flex-col text-center p-5" style="background: #030303;">
      <h1 class=" font-bold text-white"> Are you sure you want to remove {{ bot.username }} from: <br> "{{server.name}}"?</h1>
      <div class="flex mt-auto mb-2  justify-around w-full flex-row h-11 ">
        <!--    <button type="button" @click="hideModal" class="text-white w-3/12 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2">Cancel</button>
            <button type="button" @click="confirmLeave" class="text-white w-3/12 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 ">Remove</button>
            -->
            <button type="button"  @click="hideModal" class="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 w-3/12 text-center  dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900">Cancel</button>

            <button type="button" @click="confirmLeave" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-3/12  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Remove</button>

          </div>
    </div>
  </div>

    <div class="flex items-center w-full h-full">
       
    

        <div class="flex flex-col items-center rounded-md mx-auto my-auto  w-6/12 h-4/6" style="background:#0c0e0c; box-shadow: 0px 0px 10px; ">
            <div class="server-list" :key="number1">
        <div
          v-for="server of servers"
          :key="server.id"
          class="server-container"
        >
        <div class="server-background"  :style="{ backgroundImage: `url(${server.icon}) `  } " ></div> 
        <button type="button" @click="showModal(server.id, server.name)" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-1  focus:ring-red-300 h-1/6 w-3/12 absolute bottom-0 right-0 font-bold rounded-lg text-sm mb-2 mt-2 mr-2 z-20 text-center    dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Remove</button>



        <h3 class="something">{{ server.name }}</h3>
        <img v-if="!server.icon.includes('null.webp')" class="image1 image2" :src=server.icon>
        <div v-else class="no-server-icon1 image1">{{ server.name.match(/(\b\w){0,3}/g).join('').substring(0, 3).toUpperCase() }}</div>
      
             
          
        </div>
      </div>
      
    </div>

    

    </div>
  
   

</template>

<script>

export default {
    components: [],
    data() {
        return {
          server: {name: "placeholder", id: 0},
          bot: {},
            servers: [],
            number1: 0,
            interval: null,
            modalVisible: false
        }
    },  
    mounted() {
        this.getServers()
       
    },
    unmounted() {
       
    },
    methods: {
        async getServers() {
            let res = await useAuth().getGuilds(this.$route.params.id.split("=")[1])
            console.log(res)
            if(res == null) return this.servers = []

            this.servers = res
        },
        async showModal(id, name) {

          let bot = await useAuth().getBot(this.$route.params.id.split("=")[1])

          this.bot = bot
       
            this.server.name = name
            this.server.id = id
    
            this.modalVisible = true
         
        },
        hideModal() {
            this.modalVisible = false
        },
        async confirmLeave() {
          await useAuth().leaveGuild(this.$route.params.id.split("=")[1], this.server.id)
          this.getServers()
          this.modalVisible = false
        }
    }
}
</script>

<style>

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

.container {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

.server-list-container {
  background-color: #070807d3;
  margin-top: 10px;
  height: 85vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border-radius: 10px;
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













</style>