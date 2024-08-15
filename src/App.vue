<template>
  <nav-bar></nav-bar>
  <router-link to="/home">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/services">Services</router-link>
  <router-view></router-view>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  export default {
      name: "HomePage",
      components: {
          NavBar
      }
  }

  
</script>

<style>
  
</style>
