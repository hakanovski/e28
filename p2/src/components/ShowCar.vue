<template>
  <div class='car'>
    <router-link :to='{ name: "car", params: { id: car.id }}'>
      <div class='car-name'>{{ car.name }}</div>
      <img
        class='car-thumb'
        :src='"./../assets/images/cars/" + car.id + ".jpg"'
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ShowCar',
  props: ['car']
};
</script>


