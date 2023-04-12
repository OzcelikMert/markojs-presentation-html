$(document).ready(function () {
	var $navbar = $('.navbar-default');
	var $offsetY = 750;
	var $scrollButton = $('.scroll');
	var $navbarLink = $('.navbar-nav .nav-link');

	function scroll() {
		if ($(window).scrollTop() >= $offsetY) {
			$navbar.addClass('fixed-top');
		} else {
			$navbar.removeClass('fixed-top');
		}
	}
	document.onscroll = scroll;

	$scrollButton.on('click', function (e) {
		e.preventDefault();
		var $link = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $($link).offset().top - 60
		}, 100);
	});

	$navbarLink.on("click", function(e) {
		$navbarLink.removeClass("active");
		$(this).addClass("active");
	})
});