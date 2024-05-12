<script>
export default {
    props: {
        cardObj: Object,
    },
};

</script>

<template>
    <div>
        <h4> {{ cardObj.title }} </h4>
        <p>{{ cardObj.original_title }}</p>
        <p>{{ cardObj.original_language }}</p>
        <p>{{ cardObj.vote_average }}</p>
    </div>
</template>

<style>

</style>