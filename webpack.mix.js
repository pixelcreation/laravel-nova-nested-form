let mix = require('laravel-mix')
let path = require('path')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue()
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'vendor/laravel/nova/resources/js')
      }
    }
  })
