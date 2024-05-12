<script>
// IMPORTO AXIOS 
import axios from "axios";
// IMPORTO STORE JS, POI LO DICHIARO NEL DATA
import {store} from "./store.js";

export default {
  data() {
    return {
      // RICHIAMO STORE NEL DATA
      store,
    
      // PROVE BANDIERE 
      // selectedLanguage: "it"
      // PROVE BANDIERE 
      // flags:["en", "it"]

      // PROVA ARRAY FILM/TV 
      arrayMovies: ["movie 1", "movie 2", "movie 3",],
      arrayTv: ["tv 1", "tv 2", "tv 3",],
      isLoading: false,


    };
  },
  created() {
    this.isLoading = true;
    // CHIAMATA AXIOS 
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: this.store.apiKey,
        query: "ciao",
      }
    }).then((resp) => {
      // CONSOLE LOG PER VERIFICA 
      console.log(resp);
      this.isLoading = false;

      // IMPOSTAZIONE DI CATCH IN CASO DI ERRORI CON AGGIORNAMENRTO DI ISLOADING A FALSE PER EVITARE ERRORI DI CARICAMENTO
    }).catch((error) => {
    console.error('Errore durante la richiesta Axios:', error);
    this.isLoading = false; 
  });
  },
  methods: {

    // PROVE BANDIERE 
    // getImageUrl(name){
    //   return new URL(`./assets/img/${name}.webp`, import.meta.url).href
    // }
  }
};
</script>

<template> 
Ciao
<i class="fa-solid fa-house"></i>

<!-- PROVE BANDIERE  -->
<!-- <img :src="getImageUrl(selectedLanguage)" alt="" /> -->

<div v-if="isLoading">Is loading...</div>
<div v-else>
<section>
  <h2>  Movies  </h2>
  <div v-for="movie in arrayMovies"> {{ movie }} </div>
</section>

<section>
  <h2>  TV  </h2>
  <div v-for="tv in arrayTv"> {{ tv }} </div>
</section>
</div>

</template>

<style>
</style>
