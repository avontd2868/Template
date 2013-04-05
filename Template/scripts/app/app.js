

define(["jQuery", "kendo",
 "app/views/home",
 "app/views/page2" 
], function ($, kendo, 
homeView, 
page2View
) {
    var _kendoApplication;
 
    isTablet = kendo.support.mobileOS && kendo.support.mobileOS.tablet;
    appElement = (isTablet) ? $("#tabletApp") : $("#phoneApp");

			
    return {
        init: function () {
            _kendoApplication = new kendo.mobile.Application(appElement, { transition: "slide", platform:"ios", layout:"mainLayout"});
              appElement.show();
			  myApp= _kendoApplication;

        },
        views: {
            home: homeView,
            page2 : page2View
        }
    }
});

