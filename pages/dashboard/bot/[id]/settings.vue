<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "checkownsbot"],
});
</script>

<template>
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
            class="w-full rounded-lg border-2 p-2.5 text-sm text-gray-900 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <button
            type="button"
            @click="submitname"
            class="left-1 ms-1 content-center rounded-lg border-2 border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
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
            class="left-1 ms-1 content-center rounded-lg border-2 border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
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
            class="left-1 content-center rounded-lg border-2 border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
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
            class="left-1 ms-1 content-center rounded-lg border-2 border-orange-700 px-5 py-2.5 text-center text-sm font-medium text-orange-700 transition-all duration-75 ease-in hover:bg-orange-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:focus:ring-orange-800"
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
            @click="removeBot"
            class="focus:ring- ml-2 rounded-lg border-2 border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 transition-all duration-75 ease-in hover:bg-red-800 hover:text-white focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
          >
            Remove Bot
          </button>
        </div>
      </div>
    </div>

    <div class="card-tall bg-dark">
      <div class="card-body-tall">
        <h5 class="card-title font-bold">Modules:</h5>
        <div
          class="absolute ml-2 mt-2 grid w-full grid-cols-2 items-start gap-2"
        >
          <label
            class="relative inline-flex cursor-pointer items-center"
            style="height: 10%"
          >
            <input
              type="checkbox"
              :checked="modules.moderation"
              v-on:click.stop="toggle('moderation')"
              class="peer sr-only"
            />
            <div
              class="bg-gray-1000 peer relative h-5 w-10 rounded-full bg-gray-200 ring-2 ring-blue-800 after:absolute after:start-[4px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 rtl:peer-checked:after:-translate-x-full"
            ></div>
            <span
              class="text-md ms-3 font-medium text-white"
              >Moderation</span
            >
          </label>
        </div>
      </div>
    </div>
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
      modules: {
        moderation: false,
      },
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
    async removeBot() {
      await useAuth().removeBot(this.$route.params.id.split("=")[1]);
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
