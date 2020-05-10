
<script>
export default {
  name: 'ShowCar',
  props: ['car']
};
</script>

<template>
  <div class='car'>
    <router-link data-test='car-link' :to='{ name: "car", params: { id: car.id }}'>
      <div data-test='car-name' class='car-name'>{{ car.name }}</div>
      <img
        class='car-thumb'
        :alt='"Car Image"'
        :src='"./../assets/images/cars/" + car.id + ".jpg"'
      />
    </router-link>
  </div>
</template>




