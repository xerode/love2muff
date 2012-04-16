({
    appDir: "../",
    baseUrl: "js",
    dir: "../../bin",
    // Comment out the optimize line if you want
    // the code minified by UglifyJS.
    // optimize: "none",

    paths: {
        "jquery": "require-jquery"
        //"backgammon-main": "backgammon/main"
    },

    modules: [
        {
            name: "main",
            exclude: [ "jquery", "jrc" ]
        }
    ]
})
