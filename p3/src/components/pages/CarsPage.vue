<template>
  <div id='cars'>
    <h2>Cars</h2>

    <p>   These are the current cars in my garage </p>
    <show-car v-for='car in cars' :key='car.id' :car='car'></show-car>
  </div>
</template>

<script>
import ShowCar from './../ShowCar.vue';
import * as app from './../../app.js';

export default {
  name: 'CarsPage',
  components: { ShowCar },
  data: function() {
    return {
      cars: null
    };
  },
  mounted() {
    app.axios.get(app.config.api + 'cars').then(response => {
      this.cars = response.data;
    });
  }
};
</script>


