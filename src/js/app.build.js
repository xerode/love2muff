(
    {
        appDir: "../",
        baseUrl: "js",
        dir: "../../bin",
        // optimize: "none",

        paths: {
            jQuery: 'libs/jquery/jquery',
            Class: 'libs/class/jrc-wrapper'
        },

        modules: [
            {
                name: "main",
                exclude: [ "jQuery", "Class" ]
            }
        ]
    }
)