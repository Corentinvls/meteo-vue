<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item" v-for="(city,index) in cities" v-bind:key="index">
            <CityCard v-bind:city="city"></CityCard>
        </div>
    </div>
</template>

<script>
    import CityCard from "./CityCard";


    export default {
        name: "CardsList",
        components: {CityCard},
        data() {
            return {
                cities: ['paris']
            }
        }
    }
</script>

<style scoped>

</style>