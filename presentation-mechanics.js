$(function() {
	$('body').append('<div id="dialog" role="alertdialog" tabindex="-1" aria-labelledby="dialog-head" aria-describedby="dialog-body" /><button type="button" id="dialog-trigger">Results</button>');
	$('#dialog').load('dialog.html', function() {
    var url = window.location.pathname;
		$('#result-row').load(url.substring(url.lastIndexOf('/') + 1, url.length - 5) + '-result.html');
		$('#dialog-trigger').on('click', function (e) {
			e.stopPropagation();
			$('#dialog').fadeIn('fast');
			$('#close').focus();
		});
		$('#close').on('click', function () {
			$('#dialog').fadeOut('fast');
			$('#dialog-trigger').focus();
		});
		$('#dialog').on('keydown', function (e) {
			if (e.which === 27) {
				$('#close').click();
			} else if (e.which === 9) {
				e.preventDefault();
			}
		});
		$(document).on('click', function (e) {
			if (!$(e.target).closest('#dialog')[0] && $('#dialog').is(':visible')) {
				$('#dialog').fadeOut('fast');
				$('#dialog-trigger').focus();
			}
		});
	});
});