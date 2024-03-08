import { createApp } from 'vue'
import './style.css'
import './assets/scss/index.scss'
import "primeflex/themes/primeone-dark.css"
import "/node_modules/primeflex/primeflex.css"
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config';
import router from './router/router.js';
import VueCountdown from '@chenfengyuan/vue-countdown';

import OverlayPanel from 'primevue/overlaypanel';
import InputSwitch from 'primevue/inputswitch';
import Dialog from 'primevue/dialog';
import Checkbox from 'primevue/checkbox';
import ProgressBar from "primevue/progressbar";

import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import CircleProgress from 'vue3-circle-progress'


const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(Donut);

app.component(VueCountdown.name, VueCountdown);
app.component("OverlayPanel", OverlayPanel);
app.component("InputSwitch", InputSwitch);
app.component("Dialog", Dialog);
app.component("Checkbox", Checkbox);
app.component("ProgressBar", ProgressBar);
app.component('CircleProgress', CircleProgress)

app.mount('#app')
