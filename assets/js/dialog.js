$(document).ready(function(){
	var $images = $('section article img');
	$images.click(function(){
		$('#dialog').dialog({
			modal: true,
			position: { my: "right center", at: "center", of: window },
			draggable: true			
		});
	});
});