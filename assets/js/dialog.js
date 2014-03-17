$(document).ready(function(){
	$('#dialog').css('height', '0');
	var $images = $('section article img');
	$images.click(function(){
		window.scrollTo(0,0);
		$('#dialog').dialog({
			open: function(event, ui) {
				$("html").css({ overflow: 'hidden' })
			},
			modal: true,
			position: { my: "right center", at: "center", of: window },
			draggable: true,
			beforeClose: function(event, ui) {
				$("html").css({ overflow: 'inherit' })
			}			
		});
	});
});