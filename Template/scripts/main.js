require.config({
    paths: {
        jQuery: "libs/jquery.min",
        kendo: "libs/kendo.mobile.min"
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            deps: ["jQuery"],
            exports: "kendo"
        }
    }
});



require.config({
    // ... code omitted for brevity ...
});
 
// Expose the app module to the global scope so Kendo can access it.
var app;
 
require(["app/app"], function (application) {
    app = application;
    app.init();
});


