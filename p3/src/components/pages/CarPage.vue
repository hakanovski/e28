<template>
  <div id='car-page' v-if='car'>
    <h1>{{ car.name }}</h1>
    <img
      v-if='car.id'
      class='car-thumb'
      :alt='"Car Image"'
      :src='"./../../assets/images/cars/" + car.id + ".jpg"'
    />
    <p class='acceleration'>0 to 60 mph: {{ car.acceleration }}</p>
    <p class='features'>Features: {{ car.features }}</p>

    <button @click='addToFavorites(car.id)'>Add to Favorites</button>
  </div>
</template>

<script>
import * as app from './../../app.js';
export default {
  name: 'CarPage',
  props: ['id'],
  data: function() {
    return {
      car: null
    };
  },
  mounted() {
    app.axios.get(app.config.api + '/cars/' + this.id).then(response => {
      this.car = response.data;
    });
  },
  methods: {
    addToFavorites: function(carId) {
      let favorites = new app.favorites();
      favorites.add(carId);
    }
  }
};
</script>

<style scoped></style>
