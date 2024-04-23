<template>
    <topnav></topnav>
    <dashboard-nav-bar/>
 
    <background/>

    <div class="top-0 absolute pt-14 pl-52  w-full h-screen ">
        <slot></slot>
    </div>
  

</template>

<script>
import DashboardNavBar from '~/components/DashboardNavBar.vue'
import Topnav from '~/components/topnav.vue'
export default {
  components: { DashboardNavBar, Topnav },

}
</script>

<style>

</style>