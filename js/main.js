// Menu close on click
function toggleMobileMenu(menu) {
		menu.classList.toggle('open');
}

// Back to top button
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add('active');
	} else {
		toTop.classList.remove('active');
	}
});

// Lightbox
$(document).ready(function() {
	$('.single-image').click(function() {
		var t = $(this).attr('src');
		$('.modal-body').html("<img src='" + t + "' class='modal-img'>");
		$('#myModal').modal();
	});
});
