$(function() {
    $(".carousel").carousel( { interval: 3000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$(function() {
    $("#reserveButton").click(function(){
        $('#reserveModal').modal({show:true})
    })
});

$(function() {
    $("#princeButton").click(function(){
        $("#princeModal").modal({show:true})
    })
});
$(function() {
    $("#lizzyButton").click(function(){
        $("#lizzyModal").modal({show:true})
    })
});
$(function() {
    $("#pixieButton").click(function(){
        $("#pixieModal").modal({show:true})
    })
});

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});
