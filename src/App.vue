<template>
  <!-- NavBar-->
  <custom-navbar></custom-navbar>

  <!-- Home-->
  <router-link to="/"></router-link>

  <!-- Footer-->
  <footer-view></footer-view>
  <router-view></router-view>
</template>

<script>
  import CustomNavbar from "./components/CustomNavbar.vue";
  import FooterView from "./components/FooterView.vue";
  export default {
      name: "HomePage",
      components: {
          CustomNavbar,
          FooterView
      }
  }

  

  
</script>

<style>
  
</style>
