$(document).ready(function() {

	$("nav a, a.mouse_scroll").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	$('#portfolio-projects').mixItUp();

	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});