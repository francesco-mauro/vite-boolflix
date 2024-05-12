<script>
// STORE è TRA PARENTESI GRAFFE PERCHè STIAMO IMPORTANDO UNA DI UNA SERIE DI VARIABILI, QUANDO SI POSSONO ESPORTARE VARIABILI MULTIPLE SI USANO LE PARENTESI GRAFFE, PER QUESTO SPECIFICHIAMO STORE, PERCHè IN STORE POTREBBERO FINIRCI ANCHE ALTGRE VARIABILI. POSSO USARE LA VIRGOLA PER IMPORTARE VARIABILI MULTIPLE: EX {store, myVar}. Senza parentesi graffe prendo ---TUTTO---, come accade per i vari AppXxxxx
import {store} from "../store.js";
import AppCard from "./AppCard.vue";


export default{
    components: {
        AppCard
    },
    data () {
        return{
            store
        }
    }
}
</script>

<template>
    <main>
        <div>
            <h2>Film</h2>
            <div v-for = "movie in store.moviesArray">
               <AppCard :cardObj="movie" />
               <!-- verifica di funzionamento movie  -->
                <!-- {{ movie.title }} -->
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>