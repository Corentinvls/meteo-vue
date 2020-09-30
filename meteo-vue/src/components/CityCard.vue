<template>
    <div class="card">
        <md-card md-with-hover>
            <md-ripple>
                <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="16:9">
                        <img src="../assets/GettyImages-125756141.jpg" alt="New york">
                    </md-card-media>
                    <md-card-area>
                        <md-card-header-text>
                            <h1 class="md-title">{{datas.name}}</h1>
                        </md-card-header-text>
                        <div class="md-layout md-gutter ">
                            <div class="md-layout-item md-with-hover" @click="changeTempSelector">
                                <font-awesome-icon :icon="['fa','thermometer-half']"
                                                   size="3x"></font-awesome-icon>
                                <h2 v-if="isCelsius">{{datas.main.temp | fahrenheitToCelsius}} °C</h2>
                                <h2 v-else>{{datas.main.temp}} °F</h2>
                            </div>
                            <div class="md-layout-item">
                                <font-awesome-icon :icon="['fa','tint']" size="3x"></font-awesome-icon>
                                <h2>{{datas.main.humidity}} %</h2>
                            </div>
                            <div class="md-layout-item">
                                <font-awesome-icon :icon="['fa','wind']" size="3x"></font-awesome-icon>
                                <h2>{{datas.wind.speed}} m/s</h2>
                            </div>
                        </div>
                    </md-card-area>
                </md-card-media-cover>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CityCard",
        props: {city:String},
        data() {
            return {
                isCelsius:false,
                datas:{}
            }
        },
        methods: {
            changeTempSelector: function () {
                this.isCelsius = !this.isCelsius;
            }
        },filters: {
            fahrenheitToCelsius: function (value) {

                return (value - 32) * 5/9 ;
            }
        }, mounted() {
        axios
            .get("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=2a2b833d0dede9d3979171b2be94f7a4")
            .then(response => (this.datas=response))
            .then(() => console.log(this.datas))

    }
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 40em;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

</style>