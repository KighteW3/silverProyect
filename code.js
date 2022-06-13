let nameForm = document.getElementById("name-form");
let surnameForm = document.getElementById("surname-form");
let botónForm = document.getElementById("botón-loco");
let contentRewriteable = document.querySelector(".information-user");

botónForm.addEventListener("click", (e)=>{
	e.preventDefault();
	let error = validarCampos();
	if (error[0] == true) {
		contentRewriteable.innerHTML = error[1];
	}else {
		contentRewriteable.innerHTML = "True";
	}
})

const validarCampos = ()=>{
	let error = [];
	if (nameForm.value.length < 3 || nameForm.value.length > 12) {
		error[0] = true;
		error[1] = "Nombre inválido";
		return error;
	}else if (surnameForm.value.length < 3 || surnameForm.value.length > 12) {
		error[0] = true;
		error[1] = "Apellido inválido";
		return error;
	}else {
		error[0] = false;
		return error;
	}
}
