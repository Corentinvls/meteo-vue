import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind, faTint,faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {CardPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(CardPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
library.add(faWind,faTint,faThermometerHalf)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')







