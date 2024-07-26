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
import Timeline from 'primevue/timeline';
import CircleProgress from 'vue3-circle-progress'
import Vue3Autocounter from 'vue3-autocounter';

import AOS from 'aos'

import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import 'aos/dist/aos.css'




import { createI18n } from 'vue-i18n'
import en from './locale/en.json';
import uz from './locale/uz.json';
import ru from './locale/ru.json';

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return 'uz';
};
const app = createApp(App);
const i18n = createI18n({
    locale: getCookie('locale'),
    messages:{
        uz: uz,
        en: en,
        ru: ru,
    }
})

app.use(i18n)

app.use(PrimeVue);
app.use(AOS)
app.use(router);
app.use(Donut);

app.component(VueCountdown.name, VueCountdown);
app.component("OverlayPanel", OverlayPanel);
app.component("InputSwitch", InputSwitch);
app.component("Timeline", Timeline);
app.component("Checkbox", Checkbox);
app.component("ProgressBar", ProgressBar);
app.component("ProgressBar", ProgressBar);
app.component("Dialog", Dialog);



app.component('CircleProgress', CircleProgress)
app.component('AutoCounter', Vue3Autocounter)

app.mount('#app')
