<template>
  <div id="app">
    <CityCard/>
  </div>
</template>


<script>

  import CityCard from "./components/CityCard";


  export default {
    name: 'App',
    components: {
      CityCard
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
