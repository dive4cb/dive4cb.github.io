$(function() {
	$('body').append('<div id="dialog" role="alertdialog" tabindex="-1" aria-labelledby="dialog-head" aria-describedby="dialog-body" /><div class="button-container"><a href="#source-code" id="view-source">Source</a> <button id="dialog-trigger">Results</button></div><div id="source-code"><a href="#" id="x" aria-label="close">&times;</a></div>');
	$('#dialog').load('dialog.html', function() {
    var url = window.location.pathname;
		$('tbody').load(url.substring(url.lastIndexOf('/') + 1, url.length - 5) + '-result.html');
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

$(function() {
	$("<pre />", {
		"html":   '&lt;!DOCTYPE html>\n&lt;html>\n' +
		$("html")
		.html()
		.replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
		.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>') +
		'\n&lt;/html>',
		"class": "prettyprint"
	}).appendTo("#source-code");
	prettyPrint();
});
