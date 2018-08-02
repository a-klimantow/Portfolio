$(document).ready(function() {

	$("nav a, a.mouse_scroll").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	$("#portfolio-projects").mixItUp();


	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$("#contact-form").validate({
		rules: {
			name: { required: true },
			email: { required: true, email: true },
			// skype:  { required: true },
			// phone:  { required: true },
			message: { required: true }
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		}
	})

});