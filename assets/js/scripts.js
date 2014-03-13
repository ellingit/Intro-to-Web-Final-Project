$(document).ready(function(){
	$('.gallery').jcarousel({
		wrap: 'circular'
	});
	function scroll(){
		$('.gallery').jcarousel('scroll', '+=1');
	};
	setInterval(scroll, 3000);
});
