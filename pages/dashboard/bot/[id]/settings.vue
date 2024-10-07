<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "checkownsbot"],
});
</script>

<template>
  <div
    v-if="modalVisible"
    class="absolute left-0 top-0 flex h-screen w-screen items-center justify-center"
    style="background: #0c0c0eb3; z-index: 9999999"
  >
    <div
      class="flex h-1/6 w-3/12 flex-col rounded-md p-5 text-center"
      style="background: #030303"
    >
      <h1 class="font-bold text-white">
        Are you sure you want to remove this bot from BetterBotBureau, This
        cannot be undone.
      </h1>
      <div class="mb-2 mt-auto flex h-11 w-full flex-row justify-around">
        <!--    <button type="button" @click="hideModal" class="text-white w-3/12 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2">Cancel</button>
            <button type="button" @click="confirmLeave" class="text-white w-3/12 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 ">Remove</button>
            -->
        <button
          type="button"
          @click="hideModal"
          class="w-3/12 rounded-lg border border-orange-700 px-5 py-2.5 text-center text-sm font-medium text-orange-700 hover:bg-orange-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-600 dark:hover:text-white dark:focus:ring-orange-900"
        >
          Cancel
        </button>

        <button
          type="button"
          @click="confirmDelete"
          class="w-3/12 rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
        >
          Remove
        </button>
      </div>
    </div>
  </div>

  <div class="m-10 flex flex-row justify-around">
    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title font-bold" id="players_online">Bot Username:</h5>
        <p class="card-text">
          <span id="connectedPlayers"> {{ bot.username }}</span>
        </p>
        <div class="my-5 flex h-11 flex-row">
          <input
            type="text"
            v-model="username"
            autocomplete="off"
            id="tokeninput"
            placeholder="New name"
            style="background-color: #0c0e0c"
            class="w-full rounded-lg border-2 p-2.5 text-sm text-white hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <button
            type="button"
            @click="submitname"
            class="left-1 ms-1 content-center rounded-lg border-2 border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title font-bold" id="players_online">Bot Avatar:</h5>
        <div class="absolute bottom-0 my-5 flex h-11 w-11/12 flex-row">
          <input
            type="file"
            @change="onfilechange"
            autocomplete="off"
            id="avatarinput"
            placeholder="New name"
            style="
              background-color: #0c0e0c;
              border-color: #6b7280;
              color: #6b7280;
            "
            class="w-full rounded-lg border-2 p-2.5 text-sm hover:border-gray-300 focus:border-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <button
            type="button"
            @click="submit"
            class="left-1 ms-1 content-center rounded-lg border-2 border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title mb-1i font-bold" id="players_online">
          Bot Status:
        </h5>
        <p class="status card-text absolute mb-1 text-white">
          Change the
          <span style="color: #3b82f6; font-weight: bold"
            >Made with BetterBotBureau.com</span
          >
          to your own custom status message.
        </p>

        <div class="absolute bottom-0 my-5 flex h-11 flex-row">
          <NuxtLink
            :to="'/dashboard/bot/' + $route.params.id + '/status'"
            class="left-1 content-center rounded-lg border-2 border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            >Set Status Message</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
  <div class="m-10 flex flex-row justify-around">
    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title font-bold" id="players_online">Restart:</h5>
        <p class="status card-text absolute mb-1 text-white">
          Quickly restart your bot.
        </p>

        <div class="absolute bottom-0 my-5 flex h-11 w-11/12 flex-row">
          <button
            type="button"
            @click="restartBot"
            class="left-1 ms-1 content-center rounded-lg border-2 border-orange-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-orange-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:focus:ring-orange-800"
          >
            Restart Bot
          </button>
        </div>
      </div>
    </div>

    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title mb-1i font-bold" id="players_online">Remove:</h5>
        <p class="status card-text absolute mb-1 text-white">
          Permenantly remove this bot and all its settings from BetterBotBureau.
        </p>

        <div class="absolute bottom-0 my-5 flex h-11 flex-row">
          <button
            type="button"
            @click="showModal"
            class="focus:ring- ml-2 rounded-lg border-2 border-red-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-red-800 hover:text-white focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
          >
            Remove Bot
          </button>
        </div>
      </div>
    </div>

    <div class="card-tall"></div>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
export default {
  components: [Line],
  data: () => {
    return {
      username: "",
      number1: 0,
      servers: 0,
      bot: { username: "loading..." },
      interval: null,

      modalVisible: false,
    };
  },
  methods: {
    async getGuilds() {
      let res = await useAuth().getGuilds(this.$route.params.id.split("=")[1]);
      console.log(res);
      if (res) {
        this.servers = res.length;
        this.number1++;
      } else {
        this.servers = 0;
      }
    },
    async getBot() {
      let res = await useAuth().getBot(this.$route.params.id.split("=")[1]);

      console.log(res);

      if (res) {
        this.bot = res;
      } else {
        this.bot = { username: "placeholder" };
      }
    },
    async submitname() {
      useAuth().changeName(this.username, this.$route.params.id.split("=")[1]);
    },
    async restartBot() {
      await useAuth().restartBot(this.$route.params.id.split("=")[1]);
    },
    async toggle(module) {
      this.modules[module] = !this.modules[module];
    },
    async saveChanges() {
      await useAuth().saveChanges(
        this.modules,
        this.$route.params.id.split("=")[1],
      );
    },
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
    async confirmDelete() {
      this.hideModal();
      let data = await useAuth().removeBot(this.$route.params.id.split("=")[1]);
      console.log(data);
      if (data.deleted == true) {
        navigateTo("/dashboard");
      }
    },
  },
  mounted() {
    this.getBot();
    this.interval = setInterval(() => {
      this.getBot();
    }, 5000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;

  height: 10rem;
  width: 25rem;
}
.mb-1i {
  margin-bottom: 0.25rem !important;
}
.card-body {
  padding: 1rem;
  height: 10rem;
  width: 25rem;
}
.card-body-tall {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  height: 17rem;
  width: 25rem;
}
.card-tall {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;

  height: 17rem;
  width: 25rem;
}

.card-title {
  margin-bottom: 0.75rem;
  color: #ffffff;
}
.card-text {
  color: #ffffff;
}
.bg-dark {
  background-color: #0c0e0c !important;
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
}

.image1:not([src]) {
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
p.status {
  font-size: small;
}
</style>
