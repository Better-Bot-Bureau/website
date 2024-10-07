<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "checkownsbot"],
});
</script>

<template>
  <div class="m-10 flex flex-row justify-around">
    <div class="card bg-dark card-body-short rounded-md">
      <div class="flex flex-row items-center">
        <div>
          <h5 class="card-title text-lg font-bold" id="players_online">
            Status
          </h5>
          <h5 class="card-title" id="players_online">
            Customize your bots status!
          </h5>
        </div>
        <button
          type="button"
          class="mb-2 ml-auto mr-3 content-center rounded-lg border-2 border-blue-700 px-5 py-2 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          Reset to Default
        </button>
        <button
          type="button"
          class="mb-2 mr-3 content-center rounded-lg border-2 border-blue-700 px-5 py-2 text-center text-sm font-medium text-white transition-all duration-75 ease-in hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          Docs
        </button>

        <button
          class="group relative mb-2 mr-3 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
        >
          <span
            class="bg-gray-1000 relative rounded-md bg-white px-7 py-2 text-white transition-all duration-75 ease-in group-hover:bg-opacity-0"
          >
            Enable
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="m-10 flex flex-row">
    <div class="flex w-full flex-row flex-wrap">
      <div class="card bg-dark card-body mr-5 rounded-md">
        <h5 class="card-title text-lg font-bold" id="players_online">
          Status type:
        </h5>
        <h5 style="" class="card-title" id="players_online">
          Select the activity type for your status.
        </h5>

        <form class=" ">
          <select
            id="countries"
            style="
              background-color: rgb(12, 14, 12);
              border-color: #6b7280;
              color: white;
            "
            class="w-full rounded-lg border-2 border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          >
            <option selected value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Idle">Idle</option>
            <option value="DND">Do Not Disturb</option>
            <option value="Streaming">Streaming</option>
          </select>
        </form>
      </div>

      <div class="card bg-dark card-body mr-5 rounded-md">
        <h5 class="card-title text-lg font-bold" id="players_online">
          Status text:
        </h5>
        <h5 style="" class="card-title" id="players_online">
          Customize your status text.
        </h5>
        <div class="flex h-11 flex-row">
          <input
            type="text"
            v-model="username"
            autocomplete="off"
            id="tokeninput"
            placeholder="Made with BetterBotBureau.com"
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

      <div class="card bg-dark card-body mr-5 rounded-md">
        <h5 class="card-title text-lg font-bold" id="players_online">
          Status duration:
        </h5>
        <h5 style="" class="card-title" id="players_online">
          Choose how long your status lasts. 
        </h5>

        <div class="flex h-11 flex-row">
          <input
            type="text"
            v-model="username"
            autocomplete="off"
            id="tokeninput"
            placeholder="10s ( s = Seconds, m = Minutes, h = Hours, Defaults to seconds. )"
            style="background-color: #0c0e0c"
            class="w-full rounded-lg border-2 p-2.5 text-sm text-white hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

      </div>
      <!--Placeholder to make positioning correct-->
      <div class="card card-body mr-5 rounded-md" />
    </div>
    <div class="card bg-dark rounded-md">
      <div class="card-body-tall">
        <h5 class="card-title font-bold" id="players_online">
          Active Statuses:
        </h5>
        <div
          style="background-color: #1c1e1c"
          class="my-5 flex h-5/6 w-full flex-row"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.card-body-short {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  height: 6rem;
  width: 25rem;
}
.card-body-tall {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  height: 22rem;
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
