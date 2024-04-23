<template>
  <topnav></topnav>
  <background></background>
  <slot></slot>
  <home-footer></home-footer>
</template>

<script>
import Background from '~/components/background.vue'
import HomeFooter from '~/components/HomeFooter.vue'
export default {
  components: { HomeFooter, Background },

}
</script>

<style>

</style>