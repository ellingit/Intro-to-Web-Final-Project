$(document).ready(function(){
	$('#dialog').css('height', '0');
	var $images = $('section article img');
	var $listings = $('.main_content section article');
	var $currentCar = 0;
	$images.click(function(){
		window.scrollTo(0,0);
		$('#dialog').dialog({
			open: function(event, ui) {
				$("html").css({ overflow: 'hidden' })
			},
			modal: true,
			position: { my: "right center", at: "center", of: window },
			draggable: true,
			buttons: [
				{text: "prev", click: function(){
					//previous car
				}}, 
				{text: "next", click: function(){
					//next car
				}}
			],
			beforeClose: function(event, ui) {
				$("html").css({ overflow: 'inherit' })
			}			
		});
	});
	$('.main_content section article img').hover(
		function(){$(this).css({'width': '120','padding-left': '0'})},
		function(){$(this).css({'width': '100','padding-left': '10'})}
	);
});