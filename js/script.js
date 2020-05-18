var logincontainer = document.getElementById("login-container");
logincontainer.addEventListener("submit", function(e){
	e.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;


	var old_username = "new_user";
	var old_password = "123456789";

	if (username === '' && password === '' ){

		document.getElementById('mesage').innerHTML = 'Please enter username & password';
		document.getElementById('username').style.borderColor = "red";
		document.getElementById('password').style.borderColor = "red";
		return false;
	}
	else {
		if (username === old_username && password === old_password){
			document.getElementById('username').style.borderColor = "green";
			document.getElementById('password').style.borderColor = "green";
			document.getElementById('mesage').innerHTML = 'Successful login!';
			console.log("A");
		}	else {
			document.getElementById('username').style.borderColor = "red";
			document.getElementById('password').style.borderColor = "red";
			document.getElementById('mesage').innerHTML = 'Enter valid username and password';
		}

	if (username === old_username && !(password === old_password)){
		document.getElementById('username').style.borderColor = "green";
		document.getElementById('mesage').innerHTML = 'Please enter valid password';
		return false;
	}
	if (password === old_password && !(username === old_username)) {
		document.getElementById('password').style.borderColor = "green";
		document.getElementById('mesage').innerHTML = "Please enter a valid username";
		return false;
	}

		}

	

});

