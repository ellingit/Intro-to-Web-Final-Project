$(document).ready(function(){
	function myScrollFunction(){
		$('.gallery ul').animate({
			left: "-=150"
		},1000,function(){
			var $currentImg = $('.gallery ul li img').eq(0);
			$('.gallery ul li img').eq(0).remove();
			$('.gallery ul').animate({ left: "+=150" },0, function(){
				$('#empty').append($currentImg);
			});
		});
	}
	
	function initializeGoogleMap() {
	    var mapCanvas = document.getElementById('map');
	    var mapOptions = {
	      	center: new google.maps.LatLng(40.766257, -111.890790),
	      	zoom: 14,
	      	mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    var map = new google.maps.Map(mapCanvas, mapOptions);
	    var marker = new google.maps.Marker({
	    	position: new google.maps.LatLng(40.766257, -111.890790),
	    	icon: 'assets/images/star.png',
	    	map: map,
	    	title: "Come Visit Us!\n   123 S Main"
	    });
	    setInterval(function(){
	    	marker.setAnimation(google.maps.Animation.BOUNCE);
	    	setTimeout(function(){marker.setAnimation(null);}, 1200);
	    }, 3000);
	    
  	}
  	
  	function makeItBounce(){
  		setAnimation(google.maps.Animation.Bounce);
  	}
  	function makeItStop(){
  		setAnimation(null);
  	}

	setInterval(myScrollFunction, 2000);
	initializeGoogleMap();
	
	$('article').click(function(){
		$('#dialog').css('visibility', 'visible');
	});
});