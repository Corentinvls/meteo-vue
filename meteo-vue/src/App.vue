<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <CityCard/>
  </div>
</template>


<script>
  import Vue from 'vue';
  import VueMaterial from 'vue-material';
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'
  import CityCard from "./components/CityCard";
  Vue.use(VueMaterial);
  export default {
    name: 'App',
    components: {
      CityCard
    }
  }
</script>

<style lang="scss" >

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("default", (
          primary: md-get-palette-color(#ffffff, 500), // The primary color of your application

  ));

  @import "~vue-material/dist/components/MdIcon/theme"; // Apply the Button theme

</style>
