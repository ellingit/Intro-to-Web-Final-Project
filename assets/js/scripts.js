$(document).ready(function(){
	function myScrollFunction(){
		var $currentImg = $('.gallery ul li img').eq(0);
		$('.gallery ul li img').eq(0).remove();
		$('#empty').append($currentImg);
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
	    	map: map
	    });
  	}

	setInterval(myScrollFunction, 2000);
	initializeGoogleMap();
});