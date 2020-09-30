<template>
  <div id="app">
    <CardsList/>
  </div>
</template>


<script>
  import CardsList from "./components/CardsList";
  export default {
    name: 'App',
    components: {
      CardsList,

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
