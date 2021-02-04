// load the following when the DOM is ready

$(document).ready(function() {
	$("img").click(function(){
		var temp = $(this).attr("src");
		$(this).attr("src", $(this).attr("alt-src"));
		$(this).attr("alt-src", temp);
	});

});