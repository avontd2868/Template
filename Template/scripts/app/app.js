

define(["jQuery", "kendo",
 "app/views/home",
 "app/views/page2" 
], function ($, kendo, 
homeView, 
page2View
) {
    var _kendoApplication;
 
   

			
    return {
        init: function () {
            _kendoApplication = new kendo.mobile.Application(document.body, { transition: "slide", platform:"ios"});
			  myApp= _kendoApplication;
                 myApp.skin("flat");
        },
        views: {
            home: homeView,
            page2 : page2View
        }
    }
});

