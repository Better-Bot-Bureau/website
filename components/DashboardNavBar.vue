<template ref="dashnav">
  <div
    class="menu absolute left-0 top-0 z-40 h-screen min-w-52"
    style="
      background: #0c0e0c;
      filter: drop-shadow(3px 20px 10px rgba(0, 0, 0, 0.1));
      box-shadow: 5px 0px 10px;
    "
  >
    <div class="buttons my-16 justify-center">
      <div class="mt-2 flex flex-row items-center font-bold text-white">
        <img class="image1 image2 ml-3 mr-3" :src="bot.avatar" />{{
          bot.username
        }}
      </div>
      <div class="dash-category">Overview</div>
      <NuxtLink
        id="overview"
        v-bind:class="{
          blu: $route.path == `/dashboard/bot/${$route.params.id}`,
        }"
        class="dash-button link font-bold text-white"
        :to="'/dashboard/bot/' + $route.params.id"
        ><HomeIcon class="mr-1 h-4 w-4" />Overview</NuxtLink
      >
      <NuxtLink
        id="settings"
        v-bind:class="{
          blu: $route.path == `/dashboard/bot/${$route.params.id}/settings`,
        }"
        class="dash-button link font-bold text-white"
        :to="'/dashboard/bot/' + $route.params.id + '/settings'"
        ><AdjustmentsHorizontalIcon class="mr-1 h-4 w-4" />Settings</NuxtLink
      >
      <NuxtLink
        id="servers"
        v-bind:class="{
          blu: $route.path == `/dashboard/bot/${$route.params.id}/servers`,
        }"
        class="dash-button link font-bold text-white"
        :to="'/dashboard/bot/' + $route.params.id + '/servers'"
        ><ListBulletIcon class="mr-1 h-4 w-4" />Servers</NuxtLink
      >
      <NuxtLink
        id="status"
        v-bind:class="{
          blu: $route.path == `/dashboard/bot/${$route.params.id}/status`,
        }"
        class="dash-button link font-bold text-white"
        :to="'/dashboard/bot/' + $route.params.id + '/status'"
        ><WrenchIcon class="mr-1 h-4 w-4" />Status</NuxtLink
      >
      <NuxtLink
        id="invite"
        class="dash-button link font-bold text-white"
        @click="invite"
        :to="'/dashboard/bot/' + $route.params.id"
        ><LinkIcon class="mr-1 h-4 w-4" />Invite</NuxtLink
      >
      <NuxtLink
        id="premium"
        v-bind:class="{
          blu: $route.path == `/dashboard/bot/${$route.params.id}/premium`,
        }"
        class="dash-button link font-bold text-white"
        :to="'/dashboard/bot/' + $route.params.id + '/premium'"
        ><CurrencyDollarIcon class="mr-1 h-4 w-4" />Premium</NuxtLink
      >
      <div class="dash-category">Help</div>
      <NuxtLink
        id="support"
        class="dash-button link font-bold text-white"
        to="https://discord.gg/PEC49VkA"
        ><QuestionMarkCircleIcon class="mr-1 h-4 w-4" />Support Server</NuxtLink
      >
      <div class="dash-category">Modules</div>
    </div>
  </div>
</template>

<script>
import {
  HomeIcon,
  AdjustmentsHorizontalIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
  WrenchIcon,
  LinkIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/solid";

export default {
  name: "Nav-bar",
  components: {
    HomeIcon,
    AdjustmentsHorizontalIcon,
    CurrencyDollarIcon,
    ListBulletIcon,
    WrenchIcon,
    LinkIcon,
    QuestionMarkCircleIcon,
  },

  data() {
    return {
      bot: {},
      interval: null,
    };
  },
  computed: {},
  mounted() {
    this.getBot();

    this.interval = setInterval(() => {
      this.getBot();
    }, 5000);
  },
  created() {},
  methods: {
    invite: function () {
      let win = window.open(
        `https://discord.com/api/oauth2/authorize?client_id=${this.$route.params.id.split("=")[1]}&permissions=402655248&scope=bot%20applications.commands`,
        "",
        "menubar=no,resizable=no,width=500,height=850",
      );
    },
    async getBot() {
      let res = await useAuth().getBot(this.$route.params.id.split("=")[1]);

      console.log(res);
      this.bot = res;
    },
  },
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
body {
  flex-direction: column;
}
.menu {
  float: left;

  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
.buttons {
  display: flex;
  min-width: 100%;
  width: 100%;
  max-width: 100%;

  flex-direction: column;
}
img.dash-icon {
  width: 15px;
  margin-right: 10px;
  margin-bottom: 5px;
  -webkit-user-drag: none;
}
.dash-button {
  display: flex;
  align-items: center;
  max-height: 50px;
  height: 40px;
  width: 90%;
  border-radius: 8px 8px 8px 8px;

  text-decoration: none;
  padding-left: 15px;
}

.dash-button:last-child {
  margin-top: auto;
}

.dash-category {
  font-size: 0.9em;
  margin: 15px 5px 5px 14px;
  color: #d3d3d3;
}
.dash-button:hover {
  max-height: 50px;
  width: 90%;

  text-decoration: none;
}

.image1 {
  vertical-align: middle;
  align-self: center;
  justify-self: center;
  position: relative;
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
</style>
