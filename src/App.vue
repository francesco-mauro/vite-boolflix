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
      selectedLanguage: "it"
      
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
  methods: {

    // PROVE BANDIERE 
    getImageUrl(name){
      return new URL(`./assets/img/${name}.webp`, import.meta.url).href
    }
  }
};
</script>

<template> 
Ciao
<i class="fa-solid fa-house"></i>

<!-- PROVE BANDIERE  -->
<img :src="getImageUrl(selectedLanguage)" alt="" />


</template>

<style>
</style>
