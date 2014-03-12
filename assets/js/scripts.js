$(document).ready(function(){
	setInterval(shift, 3000);//shift the pictures every 3 seconds
	function shift(){
		$images = $('.gallery ul li img');
		$w = $('.gallery').width();
		//$images.eq(i).position.left is the left position of the image at index i
		$images.animate({
			left: "-=160"
		}, 1000, function(){});
		for(var i=0; i<$images.length; i++){
			var position = $images.eq(i).position();//try offset() instead?
			var leftSpace = (window.innerWidth - $('.main-content').width)/2 + 20;
			console.log(position.left);
			if(position.left < leftSpace) {
			}//move $images.eq(i) to the back of the line
			if(position.left === $w/2 - $images.eq(i).width()/2) {
				$images.eq(i).animate({
					height: "150%"
				});
			}//increase the size of $images.eq(i)
			else $images.eq(i).animate({
				height: "100%"
			});//return image size to normal
		}
	}
});
