<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "checkownsbot"],
});
</script>

<template>
  <div class="flex h-full flex-col items-center">
    <div
      class="absolute left-0 top-0 flex h-screen w-screen items-center justify-center"
      style="background: #0c0c0eb3; z-index: 10"
    >
      <div
        class="flex flex-col rounded-md p-5 text-center"
        style="background: #030303"
      >
        <h1 class="font-bold text-white">Premium not yet avaliable</h1>
      </div>
    </div>
    <div class="cards">
      <div class="card smol">
        <div class="title">Basic</div>
        <div class="starting-at">Starting at</div>
        <div class="plan-price">
          <span class="currency">$</span> <span class="amount">2.50</span>
        </div>
        <div class="per-month">per month</div>
        <div class="hr"></div>
        <h5>Create 4 extra bots</h5>
        <h5>Custom bot status</h5>
        <h5>Custom commands</h5>
        <h5></h5>
        <a
          class="group relative mb-5 mt-auto inline-flex h-12 w-6/12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 align-middle text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
        >
          <span
            class="bg-gray-1000 relative h-full w-full rounded-md bg-white px-7 py-3 text-center align-middle text-white transition-all duration-75 ease-in group-hover:bg-opacity-0"
          >
            Purchase
          </span>
        </a>
      </div>

      <div class="card ultimate">
        <div class="title">Ultimate</div>
        <div class="starting-at">Starting at</div>
        <div class="plan-price">
          <span class="currency">$</span> <span class="amount">10</span>
        </div>
        <div class="per-month">per month</div>
        <div class="hr"></div>
        <h5 class="thing font-bold">Create unlimited bots!</h5>
        <h5>All features of previous tier</h5>

        <a
          class="group relative mb-5 mt-auto inline-flex h-12 w-6/12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
        >
          <span
            class="bg-gray-1000 relative h-full w-full rounded-md bg-white px-7 py-3 text-white transition-all duration-75 ease-in group-hover:bg-opacity-0"
          >
            Purchase
          </span>
        </a>
      </div>

      <div class="card smol">
        <div class="title">Moderate</div>
        <div class="starting-at">Starting at</div>
        <div class="plan-price">
          <span class="currency">$</span> <span class="amount">5</span>
        </div>
        <div class="per-month">per month (6% savings)</div>
        <div class="hr"></div>
        <h5>All features of previous tier</h5>
        <h5>Create 8 extra bots</h5>
        <a
          class="group relative mb-5 mt-auto inline-flex h-12 w-6/12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
        >
          <span
            class="bg-gray-1000 relative h-full w-full rounded-md bg-white px-7 py-3 text-white transition-all duration-75 ease-in group-hover:bg-opacity-0"
          >
            Purchase
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "premium",
  components: {},
  setup() {},
  mounted() {},
  data() {
    return {
      toggled: true,
    };
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
  },
};
</script>

<style></style>

<style scoped>
.t {
  top: 0px;
}
body {
  height: 100vh !important;
  overflow: hidden !important;
}

div {
  color: #f2f2f2;
}

div.cards {
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  overflow: hidden;
}

div.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  min-width: 400px;
  height: 600px;
  border-radius: 20px;
  margin: 100px 75px 100px;
  background: #0c0e0c;
  font-size: 1.5em;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0 0px 10px 10px #00000080;
}
div.smol {
  height: 550px;
}
div.title {
  background: linear-gradient(to right, var(--g1), var(--g2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.7em;
  font-weight: 800;
}

.thing {
  background: linear-gradient(to right, var(--g1), var(--g2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

div.hr {
  width: 75%;
  height: 5px;
  border-radius: 10px;
  background: linear-gradient(to right, var(--g1), var(--g2));
  opacity: 70%;
}

div.starting-at {
  text-transform: uppercase;
  font-size: 0.5em;
  opacity: 0.8;
  margin-top: 20px;
}

div.plan-price {
  display: flex;
  font-size: 2.5em;
  font-weight: 600;
}

span.currency {
  font-size: 0.4em;
  margin-top: 5px;
}
div.per-month {
  font-size: 0.8em;
  opacity: 0.8;
  margin-bottom: 20px;
}
</style>
