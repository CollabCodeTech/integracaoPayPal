module.exports = {
    name: 'integracaoPaypal',
    script: './index.js',
    watch: true,
    watch_options: {
        followSymlinks: false
    },
    env: {
        "PORT": 6524,
    }
}