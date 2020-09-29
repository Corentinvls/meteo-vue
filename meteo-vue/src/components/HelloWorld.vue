<template>
  <div class="hello">
    <AgeCounter></AgeCounter>
    <TodoList></TodoList>
    <GroceriesList></GroceriesList>
    <GitApiTest></GitApiTest>
    <GetFilmsList></GetFilmsList>
  </div>
</template>

<script>

  import axios from "axios";
  export default {
    name: 'Home',data() {
      return {
        info: []
      }
    },
    components: {
      GetFilmsList,
      GitApiTest,
      GroceriesList,
      TodoList,
      AgeCounter
    },mounted() {axios
            .get('https://api-films.herokuapp.com/films')
            .then(response => response.data.map((film) => this.info.push(film.title)))
            .then(()=>console.log(this.info))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 70%;
    margin: auto;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
