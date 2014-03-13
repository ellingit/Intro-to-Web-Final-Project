$(document).ready(function(){
	function myScrollFunction(){
		for(var i=0; i<$('.gallery ul li img').length; i++){
			var $currentImg = $('.gallery ul li img').eq(i);
			$('.gallery ul li img').eq(i).remove();
			$('#empty').append($currentImg);
		}
	}
	setInterval(myScrollFunction, 2000);
});

