<template>
  <div id='app'>
    <img id='logo' alt='Hakan Garage Logo' src='./assets/images/logo.png' />
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>{{ link }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="css">
@import './assets/css/style.css';
</style>

<script>
import * as app from './app.js';
export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      links: ['Home', 'Cars', 'Favorites'],
      paths: {
         home: '/', 
         cars: '/cars',
         favorites: '/favorites'
      }
    };
  },
  mounted() {
    this.favorites = new app.favorites();
  }
};
</script>


