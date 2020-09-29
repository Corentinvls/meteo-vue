<template>
    <div class="card">
        <md-card md-with-hover>
            <md-ripple>
                <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="16:9">
                        <img src="../assets/logo.png" alt="New york">
                    </md-card-media>

                    <md-card-area>
                        <md-card-header>
                            <span class="md-title">{{name}}</span>
                        </md-card-header>

                        <md-card-actions>
                            <md-button  v-on:click="changeTempSelector">
                                <span class="md-headline">
                                    <span v-if="isCelsius">{{tempC}}°C</span>
                                    <span v-else>{{tempF}}°F</span>
                                </span>
                            </md-button>
                            <md-button>Action</md-button>
                        </md-card-actions>
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
                tempC: 35,
                tempF: 170,
                isCelsius: true
            }
        },
        methods: {
            changeTempSelector: function () {
                this.isCelsius = !this.isCelsius;
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
</style>