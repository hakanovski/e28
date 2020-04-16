<template>
  <div id='favorites-page'>
    <h1>Favorite Cars</h1>

    <div v-if='items.length == 0'>No favorites yet.</div>

    <ul v-else-if='cars.length > 0'>
      <li v-for='item in items' :key='item.id'>
        <button @click='removeFromFavorites(item.id)'>Remove</button>
        {{ getCarFeatures(item.id)["name"] }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js';
export default {
  name: 'FavoritesPage',
  data: function() {
    return {
      items: [],
      favorites: null,
      cars: []
    };
  },
  methods: {
    getCarFeatures(carId) {
      return this.cars.find(({ id }) => id === carId);
    },
    removeFromFavorites: function(carId) {
      this.favorites.remove(carId);
    }
  },
  mounted() {
    this.favorites = new app.favorites();
    this.items = this.favorites.getItems();

    this.cars = app.axios
      .get(app.config.api + 'cars')
      .then(response => (this.cars = response.data));
  }
};
</script>
