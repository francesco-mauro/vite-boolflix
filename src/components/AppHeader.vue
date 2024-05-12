<script>
import {store} from "../store.js";
export default {
    emits: ["performSearch"],
    data() {
        return{
            store,
        };
    },
};
</script>

<template>
    <header> 
        <!-- inserito aria label per facilitare screen reader -->
        <input type="text" aria-label="Inizia la ricerca" v:model.trim="store.searchQuery">
        <button @click="$emit('performSearch'); console.log('Evento performSearch check');">Cerca</button>
    </header>
</template>

<style scoped>
</style>