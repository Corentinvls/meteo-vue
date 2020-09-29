<template>
    <div class="card" >
        <b-card
                text-variant="white"
                title="New york"

        >
            <b-button variant="outline-light" @click="changeTempSelector">
                <font-awesome-icon :icon="['fa','thermometer-half']"></font-awesome-icon>
                <h2 v-if="isCelsius">{{tempC}} °C</h2>
                <h2 v-else>{{tempF}} °F</h2>
            </b-button>

            <b-row>
                <b-col>
                    <font-awesome-icon :icon="['fa','tint']"></font-awesome-icon>
                    <h2>{{humidity}} %</h2>
                </b-col>
                <b-col>
                    <font-awesome-icon :icon="['fa','wind']"></font-awesome-icon>
                    <h2>{{wind}} m/s</h2>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: "CityCard",
        data() {
            return {
                name: "New york",
                tempC: 35,
                tempF: 170,
                isCelsius: true,
                humidity: 54,
                wind: 7,

            }
        },
        methods: {
            changeTempSelector: function () {
                this.isCelsius = !this.isCelsius;
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>