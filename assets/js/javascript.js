var loaded = function() {
	var submit = document.getElementById('send');

	submit.onclick = function(){
		var name = document.getElementById('name');
		var email = document.getElementById('email');
		if(name.value === null || name.value === ""){
			if(email.value === null || email.value === ""){
				alert("Name and email boxes are required.");
			} else {
				alert("Please enter a name.");
			}
		}else if(email.value === null || email.value === "") {
			alert("Please enter an email address.");
		} else {
			alert("Thank you " + name.value + " for leaving us a message!");
		}
		
	};
};

window.onload = loaded;