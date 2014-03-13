$(document).ready(function(){
	var $images = $('section article img');
	$images.click(function(){
		$('#dialog').dialog();
	});
});