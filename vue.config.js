const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/chat/'
        : '/',
    assetsDir: process.env.NODE_ENV === 'production' ? "Front-end/dist" : undefined
})
