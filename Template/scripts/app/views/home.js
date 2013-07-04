define(["kendo"], function (kendo) {
    return {
        init: function (initEvt) {},
        beforeShow: function (beforeShowEvt) {},
        show: function (showEvt) {$(".nav-button").hide();},
        afterShow: function (afterShowEvt) {},
        viewModel: kendo.observable({
            message: "This rocks!"
        })
    }
});


