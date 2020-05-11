<template>
  <div id='dream-cars'>
    <h1>Add Your Dream Car</h1>
    <form @submit.prevent='handleSubmit'>
      <div class='form-group'>
        <label for='name'>BRAND</label>
        <input
          type='text'
          :class='{ "user-error": $v.cars.slug.$error }'
          v-model='$v.cars.slug.$model'
        />
        <div v-if='$v.cars.slug.$error'>
          <div class='entry-error' v-if='!$v.cars.slug.required'>Please enter a proper car brand name</div>
          <div
            class='entry-error'
            v-else-if='!$v.cars.slug.minLength'
          >Please enter more than at least 2 characters for car brand name</div>
          <div
            class='entry-error'
            v-else-if='!$v.cars.slug.doesNotExist'
          >This is not a proper car brand name</div>
        </div>
        <p class='warning'>Min: 2 Characters Entry</p>
      </div>
      <div class='form-group'>
        <label for='name'>MODEL</label>
        <input
          type='text'
          :class='{ "user-error": $v.cars.name.$error }'
          v-model='$v.cars.name.$model'
        />
        <div v-if='$v.cars.name.$error'>
          <div class='entry-error' v-if='!$v.cars.name.required'>Please enter a proper car model name</div>
        </div>
      </div>

      <div class='form-group'>
        <label for='year'>YEAR</label>
        <textarea
          v-model='cars.year'
        ></textarea>
      </div>

      <div class='form-group'>
        <label for='instructions'>Cylinders

          <select id="cyl" name="cyl">
            <option value="V6">V6</option>
            <option value="V8">V8</option>
            <option value="V12">V12</option>
          </select>
        </label>
        
        <textarea
          v-model='cars.instructions'
        ></textarea>
      </div>
      <button type='submit'>Add Your Dream Car</button>
      <div class='entry-error' v-if='formHasErrors'>Please correct correct your errors before adding your dream car.</div>
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
    year: '2020',
    instructions: 'Any specific interior or exterior options?'
  };
} else {
  cars = {
    slug: '',
    name: '',
    year: '',
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