require.config({
    paths: {
        jQuery: "/kendo/js/jquery.min",
        kendo: "/kendo/js/kendo.mobile.min"
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


	//Wait for phonegap to load
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() { navigator.splashscreen.hide(); }
	
