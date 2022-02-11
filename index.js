const submitButton = document.getElementById("submit");
const check = function () {
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	if (email.value == "sharif@gmail.com" && password.value == "1234") {
		submitButton.disabled = false;
		document.location.href = "banking.html";
	}
	email.value = password.value = "";
};
submitButton.addEventListener("click", check);
