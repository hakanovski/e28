let mix = require('laravel-mix');

// https://laravel-mix.com/docs/mixjs
// source: src/script.js
// output: js/master.js
mix.js('src/script.js', 'js/master.js');

// hot module reloading using webpack dev server
// https://laravel-mix.com/docs/hot-module-replacement
// Used when you run `npm run hot`
// Note: Specify port 8080 to distinguish it from the port 80 Apache is running on
mix.options({
    hmrOptions: {
        host: 'e28week8.loc',
        port: 8080
    }
})