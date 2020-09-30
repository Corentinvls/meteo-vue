<template>
    <div class="card">
        <md-card md-with-hover>
            <md-ripple>
                <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="16:9">
                        <img src="../assets/GettyImages-125756141.jpg" alt="New york">
                    </md-card-media>

                    <md-card-area >
                        <md-card-header-text>
                            <h1 class="md-title">{{name}}</h1>
                        </md-card-header-text>

                        <div class="md-layout md-gutter ">
                            <div class="md-layout-item md-with-hover" @click="changeTempSelector" >
                                <font-awesome-icon :icon="['fa','thermometer-half']" size="3x"></font-awesome-icon>
                                <h2 v-if="isCelsius">{{tempC}} °C</h2>
                                <h2 v-else>{{tempF}} °F</h2>
                            </div>
                            <div class="md-layout-item">
                                <font-awesome-icon :icon="['fa','tint']" size="3x"></font-awesome-icon>
                                <h2>{{humidity}} %</h2>
                            </div>
                            <div class="md-layout-item">
                                <font-awesome-icon :icon="['fa','wind']" size="3x"></font-awesome-icon>
                            <h2>{{wind}} m/s</h2>
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
        data() {
            return {
                name: "New york",
                weather:"Cloudy",
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
    .card {
        width: 40em;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

</style>