<script>
// IMPORTO AXIOS 
import axios from "axios";
// IMPORTO STORE JS, POI LO DICHIARO NEL DATA
import {store} from "./store.js";
// IMPORTO AppHeader, POI LO DICHIARO NEL TEMPLATE
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      // RICHIAMO STORE NEL DATA
      store,

      // PROVE BANDIERE 
      selectedLanguage: "it",
      // PROVE BANDIERE 
      flags: ["fr", "it", "de"],

      // PROVA ARRAY FILM/TV 
      arrayMovies: ["movie 1", "movie 2", "movie 3"],
      arrayTv: ["tv 1", "tv 2", "tv 3"],
      isLoading: false,
    };
  },

  methods: {
    getData() {
      // LOG DI VERIFICA 
      // console.log("prova funzioamento funzione funzionale");
      console.log("performSearch ricevuto");
      this.getMovies();
    },
    getMovies() {
      this.isLoading = true;
      // CHIAMATA AXIOS 
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchQuery,
        }
      }).then((resp) => {
        // Tentativo di debug 
        if (resp.data.results.length > 0) {
      this.store.moviesArray = resp.data.results;
      console.log('moviesArray aggiornato:', this.store.moviesArray);
    } else {
      console.log('Nessun risultato trovato');
    }
    this.isLoading = false;
        // CONSOLE LOG PER VERIFICA 
        // this.store.moviesArray = resp.data.results;
        // verfica aggiornamento array 
        // console.log('moviesArray aggiornato:', this.store.moviesArray);
        // this.isLoading = false;
      }).catch((error) => {
        console.error('Errore durante la richiesta Axios:', error);
        this.isLoading = false; 
      });
    },
  },
};
</script>

<template> 
  <AppHeader @performSearch="getData"/>
  <AppMain />
</template>

<style>
</style>
