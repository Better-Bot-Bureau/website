
<script setup>
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})
</script>

<template>

  <div class="flex h-screen w-screen top-0 absolute">
    <div class="flex m-auto h-4/6 w-3/6 rounded-md" style="background:#0c0e0c; box-shadow: 0px 0px 10px;">
       <div class=" flex flex-col w-10/12 mx-auto my-3 justify-end">
        <iframe class=" h-96 w-auto"  src="https://www.youtube.com/embed/dQw4w9WgXcQ"> </iframe>
        <h1 class=" text-white text-lg font-medium"> Setup</h1>
        <h2 class=" text-gray-400 text-md font-medium mb-2"> To create a bot you must make a bot and token at the Discord Developer Portal. Once you have generated a token, paste it below and click Submit to create your bot</h2>
        
        <label for="default-input" class=" mb-2 text-sm font-medium  dark:text-white">Bot Token</label>

        <div class="flex flex-row ">
        <input type="text" id="tokeninput" v-model="token" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <button type="button" @click="this.submit"  class=" ms-1 left-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center ">Submit</button>
         
    </div>
        <a href="https://discord.com/developers/applications"  class=" mx-auto my-2 block py-4 px-3 text-gray-600 font-bold rounded md:p-0 link"> Discord Developer Portal</a>
         
       </div> 
    </div>
  </div>

</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data () {
    return {
      token: ""
    }
  },
  methods: {
    submit: async () => {
      let router = useRouter()
      let token = document.getElementById("tokeninput").value
      await $fetch("/api/v1/bot", { method: 'post', body: { token } })
      router.push("/dashboard")
    }
  },
})
</script>

