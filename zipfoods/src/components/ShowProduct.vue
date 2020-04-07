<!-- src/components/ShowProduct.vue -->
<template>
    <div class='product'>
        <div class='product-name'>{{ product.name }}</div>
        <img class='product-thumb' :src='"./../assets/images/products/" + product.id + ".jpg"' />
        <p class='product-description'>{{ product.description }}</p>
        <div class='product-price'>${{ product.price }}</div>
    </div>
</template>


<script>
export default {
    name: '',
    props: ['product'],
    data: function() {
        return {};
    }    
};
</script>


<style>

</style>