import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueChartkick from 'vue-chartkick' //imports chartkick module
import 'chartkick/highcharts' //imports highcharts from chartkick


const app = createApp(App)
app.use(VueChartkick)
app.use(router)

app.mount('#app')
