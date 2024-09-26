<template>
  <topnav></topnav>
  <dashboard-nav-bar />

  <background />

  <div class="absolute top-0 h-screen w-full pl-52 pt-14">
    <slot></slot>
  </div>
</template>

<script>
import DashboardNavBar from "~/components/DashboardNavBar.vue";
import Topnav from "~/components/topnav.vue";
import { useFlowbite } from "~/composables/useFlowbite";
export default {
  components: { DashboardNavBar, Topnav },

  mounted() {
    useFlowbite(() => {
      initFlowbite();
    });
  },
};
</script>

<style></style>
