define(["kendo"], function (kendo) {
    return {
           init: function (initEvt) {

var MyListviewDS = new kendo.data.DataSource({
     type: "odata",
     transport: {
          read: "http://demos.kendoui.com/service/Northwind.svc/Categories"
     }
});


$("#MyListview").kendoMobileListView({
     template:$("#MyListviewTemplate").html(),
     appendOnRefresh: false,
     autoBind: true,
     endlessScroll: false,
     fixedHeaders: false,
     loadMore: true,
     pullToRefresh: false,
     filterable: true,
     headerTemplate: "#:value#",
     loadMoreText: "Press to load more",
     pullTemplate: "Pull to refresh",
     refreshTemplate: "Refreshing",
     releaseTemplate: "Release to refresh",
     type: "flat",
     style: "",
     scrollThreshold: "30"
});

var MyListview = $("#MyListview").data("kendoMobileListView");

MyListview.setDataSource(MyListviewDS);



MyListview.bind("click", function(e) {
     // handle event
});


MyListview.bind("dataBound", function(e) {
     // handle event
});


MyListview.bind("dataBinding", function(e) {
     // handle event
});


MyListview.bind("lastPageReached", function(e) {
     // handle event
});


	 	$("#page2").kendoMobileSwipe(function(e) {
				if (e.direction == "right")
				myApp.navigate("#:back");
			});     
			  },
		  beforeShow: function (beforeShowEvt) {
		  			$(".nav-button").show();				
			  },
          show: function (showEvt) {
			  },
          afterShow: function (afterShowEvt) {},

          viewModel: kendo.observable({
            message: "This rocks on page 2!",
        })
    }
});


