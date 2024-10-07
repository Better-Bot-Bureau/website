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
            id="nameinput"
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
        <h5 class="card-title font-bold" id="players_online">Bot Status:</h5>
        <p class="card-text">
          <span id="connectedPlayers">{{
            BotOnline ? "Online" : "Offline"
          }}</span>
        </p>
        <div class="my-5 flex h-11 flex-row">
          <button
            type="button"
            @click="startBot"
            class="ml-2 w-3/12 rounded-lg border-2 border-green-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
          >
            Start
          </button>
          <button
            type="button"
            @click="stopBot"
            class="focus:ring- ml-2 w-3/12 rounded-lg border-2 border-red-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-red-800 hover:text-white focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
          >
            Stop
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
            @click="submitavatar"
            class="left-1 ms-1 content-center rounded-lg border-2 border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div class="m-10 flex flex-row justify-around">
    <div class="card bg-dark">
      <div class="card-body-tall">
        <h5 class="card-title font-bold" id="players_online">Online users:</h5>
        <Line :data="data" :options="options"></Line>
      </div>
    </div>
    <div class="card bg-dark">
      <div class="card-body-tall">
        <h5 class="card-title font-bold" id="players_online">Messages:</h5>
        <Line :data="data" :options="options"></Line>
      </div>
    </div>
    <div class="card bg-dark">
      <div class="card-body-tall">
        <h5 class="card-title font-bold" id="players_online">Servers:</h5>
        <Line :data="data2" :options="options"></Line>
      </div>
    </div>
  </div>
  -->

  <div class="m-10 flex flex-row"></div>
</template>

<script>
import { Line } from "vue-chartjs";
export default {
  components: [Line],
  data: () => {
    return {
      username: "",
      file: (ref < File) | (null > null),
      number1: 0,
      servers: 0,
      bot: { username: "loading..." },
      BotOnline: false,
      interval: null,
      options: {
        responsive: true,
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
      },
      data: {
        labels: ["06/1", "06/2", "06/3", "06/4", "06/5", "06/6", "06/7"],
        datasets: [
          {
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 40],

            fill: false,
            label: "Test",
            color: "#3b82f6",
            borderColor: "#3b82f6",
            backgroundColor: "#3b82f6",
          },
        ],
      },
      data2: {
        labels: ["06/1", "06/2", "06/3", "06/4", "06/5", "06/6", "06/7"],
        datasets: [
          {
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 40],

            fill: true,
            label: "Total",
            color: "#3b82f6",
            borderColor: "#3b82f6",
            backgroundColor: "#3b82f6",
          },
          {
            borderDash: [5, 5],
            data: [5, 2, 3, 4, 8, 9, 1],

            fill: true,
            label: "Gained",
            color: "#3ef63b",
            borderColor: "#3ef63b",
            backgroundColor: "#3ef63b",
            yAxisID: "y1",
          },
          {
            data: [1, 3, 5, 8, 4, 6, 7],
            borderDash: [5, 5],
            fill: true,
            label: "Lost",
            color: "#f63b3b",
            borderColor: "#f63b3b",
            backgroundColor: "#f63b3b",
            yAxisID: "y1",
          },
        ],
      },
    };
  },
  methods: {
    async getGuilds() {
      let res = await useAuth().getGuilds(this.$route.params.id.split("=")[1]);

      if (res) {
        this.servers = res.length;
        this.number1++;
      } else {
        this.servers = 0;
      }
    },
    async getBot() {
      let res = await useAuth().getBot(this.$route.params.id.split("=")[1]);

      if (res) {
        this.bot = res;
      } else {
        this.bot = { username: "placeholder" };
      }
    },
    async startBot() {
      await useAuth().startBot(this.$route.params.id.split("=")[1]);
    },
    async stopBot() {
      await useAuth().stopBot(this.$route.params.id.split("=")[1]);
    },
    async submitname() {
      useAuth().changeName(this.username, this.$route.params.id.split("=")[1]);
    },
    async submitavatar() {},
    async onfilechange(event) {},
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
  filter: drop-shadow(rgba(0, 0, 0, 0.16) 0px 32px 72px);
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
</style>
