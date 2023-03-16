const number1 = document.getElementById('tipo-a');
const number2 = document.getElementById('tipo-b');

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
	const error = document.getElementById("error");
	const sucess = document.getElementById("sucess");

	let messageSucess = `Parabéns o <b>${number2.value}</b> é maior que o <b>${number1.value}</b>`
	let messageError = `O <b>${number2.value}</b> não é maior que o <b>${number1.value}</b>, Tente novamente !`

	e.preventDefault();
	
	if (number2.value > number1.value) {
		number1.value = "";
		number2.value = "";
		sucess.style.visibility = "visible";
		sucess.style.display = "block"
		if(error.style.visibility == "visible") {
			error.style.visibility = "hidden";
			error.style.display = "none"
			sucess.style.visibility = "visible";
			sucess.innerHTML = messageSucess;
		}else {
			sucess.style.visibility = "visible";
			sucess.style.display = "block"
			sucess.innerHTML = messageSucess;
		}
	}else {
		error.style.visibility = "visible";
		error.style.display = "block"
		if(sucess.style.visibility == "visible") {
			sucess.style.visibility = "hidden";
			sucess.style.display = "none"
			error.style.visibility = "visible";
			error.innerHTML = messageError;
		}else {
			error.style.visibility = "visible";
			error.style.display = "block"
			error.innerHTML = messageError;
		}
	}
})