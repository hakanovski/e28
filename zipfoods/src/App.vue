<template>
  <div id="app">
    <img alt="ZipFoods logo" id='logo' src="./assets/images/zipfoods-logo.png">

    <p>
       ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.
    </p>

<show-featured :products='products' :category='"snacks"'></show-featured>
<show-products :products='products'></show-products>


  </div>
</template>

<script>
import ShowProducts from './components/ShowProducts.vue';
import ShowFeatured from './components/ShowFeatured.vue';

export default {
  name: 'App',
  components: {
    'show-products': ShowProducts,
    'show-fatured': ShowFeatured
  },
  data: function() {
    return {
      products: [
    {
        id: 1,
        name: 'Driscoll’s Strawberries',
        description:
            'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
        price: 4.99,
        available: 0,
        weight: 1,
        perishable: true,
        categories: ['produce', 'fruits']
    },
    {
        id: 2,
        name: 'Nestle Toll House Cookie Dough',
        description:
            'Get the classic taste that America loves in a ready to bake dough. Full of our famous morsels, these cookies deliver the chocolate flavor you’ve come to expect from Nestle Toll House.',
        price: 7.49,
        available: 325,
        weight: 2.25,
        perishable: true,
        categories: ['snacks', 'baking']
    },
    {
        id: 3,
        name: 'Gotham Greens Gourmet Lettuce Medley',
        description:
            "This lovely blend features Gotham Greens’ Tropicana green leaf, Red Sail red leaf, Oak leaf, Lollo Rossa and tender Butterhead lettuces. Perfect for a colorful salad that's (almost) grown right in your own backyard!",
        price: 3.49,
        available: 10,
        weight: 0.3,
        perishable: true,
        categories: ['produce', 'vegetables']
    },
    {
        id: 4,
        name: 'Gold Medal All Purpose Flour',
        description:
            'All-purpose bleached flour is great for just about everything but doesn’t add any color. It’s perfect for baked goods like white sandwich bread and cake.',
        price: 2.09,
        available: 299,
        weight: 2,
        perishable: false,
        categories: ['baking']
    },
    {
        id: 5,
        name: 'Honey Nut Cheerios',
        description:
            'You already know that Honey Nut Cheerios Naturally Flavored has the irresistible taste of golden honey, making it a family favorite. Something that everyone can smile about! ',
        price: 3.99,
        available: 400,
        weight: 0.68,
        perishable: false,
        categories: ['breakfast']
    },
    {
        id: 6,
        name: 'Eggo Nutri-Grain Whole Wheat Waffles',
        description:
            'Eggo® Nutri-Grain® waffles made with whole wheat have the same light and crispy texture as our original Eggo® Waffles, only with the added bonus of nutritious whole grain! ',
        price: 3.79,
        available: 236,
        weight: 0.25,
        perishable: true,
        categories: ['breakfast', 'frozen']
    },
    {
        id: 7,
        name: 'Amy’s Cheese Pizza',
        description:
            'The classic favorite, made with our savory pizza sauce and grated part-skim mozzarella cheese.',
        price: 8.49,
        available: 125,
        weight: 0.81,
        perishable: true,
        categories: ['frozen', 'snacks']
    },
    {
        id: 8,
        name: 'Birds Eye Steamfresh Fresh Frozen Vegetable Mix',
        description:
            'Delicious Birds Eye vegetables in blends that are just right for side dishes and your recipes.',
        price: 2.99,
        available: 99,
        weight: 0.68,
        perishable: true,
        categories: ['frozen', 'vegetables']
    },
    {
        id: 9,
        name: 'Bare Coconut Chips',
        description:
            'Simply made with coconuts, cane sugar, and sea salt.',
        price: 4.99,
        available: 3,
        weight: 0.21,
        perishable: false,
        categories: ['snacks']
    },
    {
        id: 10,
        name: 'Snapple Peach Tea',
        description:
            'To Peach their own. Smooth Snapple tea, perfect peach flavor. We made it just for you from the Best Stuff on Earth.',
        price: 12.99,
        available: 4,
        weight: 12,
        perishable: false,
        categories: ['beverages']
    }
]
    }
  }
}
</script>

<style lang='scss'>
@import './assets/scss/zipfoods.scss'
</style>
