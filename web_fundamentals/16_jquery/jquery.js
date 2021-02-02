// load the following when the DOM is ready
$(document).ready(function() {
    // toggle between hiding or showing my id
    $('#show-hide-button').click(function() {
        $('#show-hide-test').toggle();
    })
    $('#show-button').click(function() {
        $('#show-hide-test').show();
    })
    $('#hide-button').click(function() {
        $('#show-hide-test').hide();
    })

    // activate a slide toggle
    $('#slide-toggle-button').click(function() {
        $('#slide-toggle-test').slideToggle();
    })

    $('#slide-down-button').click(function() {
        $('#slide-toggle-test').slideDown();
    })

    $('#slide-up-button').click(function() {
        $('#slide-toggle-test').slideUp();
    })

    $('#fade-in-button').click(function() {
        $('#fade-test').fadeIn();
    })

    $('#fade-out-button').click(function() {
        $('#fade-test').fadeOut();
    })

    $('#remove-class-button').click(function() {
        $('#class-test').removeClass("yellow-text orange-text");
    })

    $('#add-yellow-button').click(function() {
        $('#class-test').addClass("yellow-text");
    })

    $('#add-orange-button').click(function() {
        $('#class-test').addClass("orange-text");
    })

    $('#before-button').click(function() {
        $('#before-after-test').before("x");
    })

    $('#after-button').click(function() {
        $('#before-after-test').after("y");
    })

    $('#append-button').click(function() {
        $('#before-after-test').append("ME");
    })

    $('#html-button').click(function() {
        var text = $('#html-test').html();
        $('#html-test').text(text);
    })

    $('#set-1-button').click(function() {
        $('#attr-test').attr("width","100");
    })

    $('#set-2-button').click(function() {
        $('#attr-test').attr("width","400");
    })

    $('#val-button').click(function() {
        var val = $('#val-source').val()
        $('#val-target').text(val)
    })

})