(
    {
        appDir: "../",
        baseUrl: "js",
        dir: "../../bin",
        optimize: "none"

        paths: {
            "jquery": "require-jquery"
            //"backgammon-main": "backgammon/main"
        },

        modules: [
            {
                name: "main",
                exclude: [ "jQuery", "Class" ]
            }
        ]
    }
)