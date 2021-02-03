// load the following when the DOM is ready
$(document).ready(function() {
    // toggle between hiding or showing my id
    $('#ninja-button1').click( function() {
        $(".ninja1").fadeOut()
    });

    $('#ninja-button2').click( function() {
        $(".ninja2").fadeOut()
    });

    $('#ninja-button3').click( function() {
        $(".ninja3").fadeOut()
    });

    $('#ninja-button4').click( function() {
        $(".ninja4").fadeOut()
    });

    $('#ninja-button5').click( function() {
        $(".ninja5").fadeOut()
    });

    $('#ninja-button6').click( function() {
        $(".ninja6").fadeOut()
    });

    $('#ninja-button7').click( function() {
        $(".ninja7").fadeOut()
    });

    $('#ninja-button8').click( function() {
        $(".ninja8").fadeOut()
    });

    $('#restore-button').click(function() {
        $('img').fadeIn()
    });
})