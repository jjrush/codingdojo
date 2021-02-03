// load the following when the DOM is ready
$(document).ready(function() {
    // toggle between hiding or showing my id
    $('#ninja-button1').click( function(selector) {
        $(".ninja1").fadeOut()
    });

    $('#ninja-button2').click( function(selector) {
        $(".ninja2").fadeOut()
    });

    $('#ninja-button3').click( function(selector) {
        $(".ninja3").fadeOut()
    });

    $('#ninja-button4').click( function(selector) {
        $(".ninja4").fadeOut()
    });

    $('#ninja-button5').click( function(selector) {
        $(".ninja5").fadeOut()
    });

    $('#ninja-button6').click( function(selector) {
        $(".ninja6").fadeOut()
    });

    $('#ninja-button7').click( function(selector) {
        $(".ninja7").fadeOut()
    });

    $('#ninja-button8').click( function(selector) {
        $(".ninja8").fadeOut()
    });

    $('#restore-button').click(function() {
        $('img').fadeIn()
    });
})