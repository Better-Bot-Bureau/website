<template>
  <topnav></topnav>
  <background></background>
  <slot></slot>
  <home-footer></home-footer>
</template>

<script>
import Background from "~/components/background.vue";
import HomeFooter from "~/components/HomeFooter.vue";
import { useFlowbite } from "~/composables/useFlowbite";

export default {
  components: { HomeFooter, Background },
  mounted() {
    useFlowbite(() => {
      initFlowbite();
    });
  },
};
</script>

<style></style>
