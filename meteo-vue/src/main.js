import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind, faTint,faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial);
library.add(faWind,faTint,faThermometerHalf)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
