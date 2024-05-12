<script>
// IMPORTO AXIOS 
import axios from "axios";
// IMPORTO STORE JS, POI LO DICHIARO NEL DATA
import {store} from "./store.js";

export default {
  data() {
    return {
      // RICHIAMO STORE NEL DATA
      store
    
      // PROVE BANDIERE 
      // selectedLanguage: "en"
    };
  },
  created() {
    // CHIAMATA AXIOS 
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: this.store.apiKey,
        query: "ciao"
      }
    }).then((resp) => {
      // CONSOLE LOG PER VERIFICA 
      console.log(resp);
    });
  },
};
</script>

<template> 
Ciao

<i class="fa-solid fa-house"></i>
</template>

<style>
</style>
