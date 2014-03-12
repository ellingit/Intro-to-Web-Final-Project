$(document).ready(function(){
	setInterval(shift, 3000);//shift the pictures every 3 seconds
	function shift(){
		$images = $('.gallery ul li img');
		$w = $('.gallery').width();
		//$images.eq(i).position.left is the left position of the image at index i
		$images.animate({
			left: "-=165"
		}, 1000, function(){});
		
		var middle = (window.innerWidth/2) - 85;
			
		for(var i=0; i<$images.length; i++){
			var position = $images.eq(i).offset();//try offset() instead?
			var leftSpace = (window.innerWidth - $('.main-content').width)/2 + 20;
			console.log(position.left);
			//try removing the image once it disappears and adding it to the end of the array
			if(position.left < 201) {
				// $images.eq(i).offset({top: $images.eq(i).offset().top, left: 880});
				// console.log("new offset: " + $images.eq(i).offset().left)
			}//move $images.eq(i) to the back of the line
			if(position.left > middle-5 || position.left < middle+5) {
				$images.eq(i).animate({
					height: "150%"
				}, function(){});
			}//increase the size of $images.eq(i)
			else $images.eq(i).animate({
				height: "100%"
			});//return image size to normal
		}
	}
});
