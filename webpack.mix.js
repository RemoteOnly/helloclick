let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/common.js', 'public/js')
    .js('resources/assets/js/settings.js', 'public/js')
    .js('resources/assets/js/admin.js', 'public/admin/js')
    //.sass('resources/assets/sass/app.scss', 'public/css')
    //.sass('resources/assets/sass/common.scss', 'public/css')
    //.sass('resources/assets/sass/common2.scss', 'public/css')
    .sass('resources/assets/sass/main.scss', 'public/css')
    .sass('resources/assets/sass/self.scss', 'public/css')
    //.sass('resources/assets/sass/settings.scss', 'public/css')
    .version();
