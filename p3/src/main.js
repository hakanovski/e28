import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import CarsPage from "./components/pages/CarsPage.vue";
import CarPage from "./components/pages/CarPage.vue";
import FavoritesPage from "./components/pages/FavoritesPage.vue";
import DreamCarsPage from './components/pages/DreamCarsPage.vue';
import Vuelidate from 'vuelidate'
import store from './store'

Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/car', component: CarsPage, name: 'Cars' },
  { path: '/dreamcars', component: DreamCarsPage, name: 'Dream Cars' },
  { path: '/cars', component: CarPage, name: 'car', props: true },
  { path: '/favorites', component: FavoritesPage, name: 'Favorites'}
  
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount("#app");