import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js';

import 'firebase/firestore';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cars: [],
    },
    // I used this website in orer to setting up the parameters in mutations - https://vuex.vuejs.org/guide/mutations.html
    mutations: {
        prepareCars(state, payload) {
            state.cars = payload;
        },
    },
    actions: {
        prepareCars(context) {
            app.axios.get('https://e28-p3-3d1c5.firebaseio.com/cars.json').then(response => {
                context.commit('prepareCars', response.data);
            });
        }
    },
    getters: {
        getCarsById(state) {
            return function (id) {
                return state.cars.find(car => car.id == id)
            }
        }
    }
})