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
                            <h1 class="md-display-2" style="color: white">{{data.name}}</h1>
                            <img v-bind:src="'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'" alt="New york">
                        </md-card-header-text>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-with-hover" @click="changeTempSelector">
                                <font-awesome-icon :icon="['fa','thermometer-half']"
                                                   size="3x"></font-awesome-icon>
                                <div class="md-gutter">
                                        <span>{{data.main.temp_max | celsiusOrFahrenheit(isCelsius)}}</span>
                                        <h2 >{{data.main.temp | celsiusOrFahrenheit(isCelsius)}}</h2>
                                        <span >{{data.main.temp_min | celsiusOrFahrenheit(isCelsius)}}</span>
                                </div>

                            </div>
                            <div class="md-layout-item">
                                <font-awesome-icon :icon="['fa','tint']" size="3x"></font-awesome-icon>
                                <h2>{{data.main.humidity}} %</h2>
                            </div>
                            <div class="md-layout-item">
                                <font-awesome-icon :icon="['fa','wind']" size="3x"></font-awesome-icon>
                                <h2>{{data.wind.speed}} m/s</h2>
                                <font-awesome-icon :icon="['fas','long-arrow-alt-down']" size="2x"  v-bind:style="{transform:'rotate('+data.wind.deg+'deg)'}"></font-awesome-icon>
                            </div>
                        </div>
                    </md-card-area>
                </md-card-media-cover>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>

    export default {
        name: "CityCard",
        props: {data: Object},
        data() {
            return {
                isCelsius: true
            }
        },
        methods: {
            changeTempSelector: function () {
                this.isCelsius = !this.isCelsius;
            }
        }, filters: {
            celsiusOrFahrenheit: function (value,isCelsius) {
                    return isCelsius ? value.toFixed(1)+ "°C" : ""+(value * 1.8000 + 32.00).toFixed(1) +"°F";
            }
        },
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