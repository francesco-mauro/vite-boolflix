
import {reactive} from "vue"

export const store = reactive ({
    // KEY API FORNITA DAL SITO FILM
    apiKey: "56d0da0724cca01e3a2163418cea2cae",
    
    // valore che sarà nella barra di ricerca, che probabilmente collocherò in AppHeader
    searchQuery: " ",

    // array per i film 
    moviesArray: [],

    // array per le serie tv
    tvArray: [],

});