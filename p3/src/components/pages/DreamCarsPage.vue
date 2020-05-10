<template>
  <div id='dream-cars'>
    <h1>Add Your Dream Car</h1>
    <form @submit.prevent='handleSubmit'>
      <div class='form-group'>
        <label for='name'>BRAND</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.cars.slug.$error }'
          id='slug'
          data-test='cars-slug-input'
          v-model='$v.cars.slug.$model'
        />

        <div v-if='$v.cars.slug.$error'>
          <div class='form-feedback-error' v-if='!$v.cars.slug.required'>Please enter a proper car brand name</div>
          <div
            class='form-feedback-error'
            v-else-if='!$v.cars.slug.minLength'
          >Please enter more than at least 2 characters for car brand name</div>

          <div
            class='form-feedback-error'
            v-else-if='!$v.cars.slug.doesNotExist'
          >This is not a proper car brand name</div>
        </div>

        <small class='form-help'>Min: 2</small>
      </div>

      <div class='form-group'>
        <label for='name'>MODEL</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.cars.name.$error }'
          data-test='cars-name-input'
          id='name'
          v-model='$v.cars.name.$model'
        />
        <div v-if='$v.cars.name.$error'>
          <div class='form-feedback-error' v-if='!$v.cars.name.required'>Please enter a proper car model name</div>
        </div>
      </div>

      <div class='form-group'>
        <label for='ingredients'>YEAR</label>
        <textarea
          data-test='cars-ingredients-textarea'
          id='ingredients'
          v-model='cars.ingredients'
        ></textarea>
      </div>

      <div class='form-group'>
        <label for='instructions'>SPECS</label>
        <textarea
          data-test='cars-instructions-textarea'
          id='instructions'
          v-model='cars.instructions'
        ></textarea>
      </div>

      <button data-test='add-cars-button' type='submit'>Add Your Dream Car</button>

      <div class='form-feedback-error' v-if='formHasErrors'>Please correct correct your errors before adding your dream car.</div>
    </form>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { required, minLength } from 'vuelidate/lib/validators';
let cars = {};

if (process.env.NODE_ENV == 'development') {
  cars = {
    slug: 'Koenigsegg',
    name: 'Jesko',
    ingredients: '2020',
    instructions: 'V12'
  };
} else {
  cars = {
    slug: '',
    name: '',
    ingredients: '',
    instructions: ''
  };
}
export default {
  name: 'DreamCarsPage',
  data: function() {
    return {
      cars: cars,
      formHasErrors: false
    };
  },
  validations: {
    cars: {
      slug: {
        required,
        minLength: minLength(2)
      },
      name: {
        required
      }
    }
  },
  watch: {
    '$v.$anyError': function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    handleSubmit: function() {
      if (!this.formHasErrors) {
        app.axios
          .post(app.config.api + 'cars.json', this.cars)
          .then(response => {
            let key = response.data.name;
            this.$store.commit('addcars', {
              [key]: this.cars
            });
            this.$router.push({
              name: 'cars',
              params: { slug: this.cars.slug }
            });
          });
      }
    }
  }
};
</script>

<style scoped>
</style>