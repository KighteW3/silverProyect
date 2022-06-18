let nameForm = document.getElementById("name-form");
let surnameForm = document.getElementById("surname-form");
let botónForm = document.getElementById("botón-loco");
let contentRewriteable = document.querySelector(".information-user");
let imageContentUser = document.getElementById("image-content-user");

botónForm.addEventListener("click", (e)=>{
	e.preventDefault();
	let error = validarCampos();
	let error2 = validarUsuarios();
	if (error[0] == true) {
		contentRewriteable.innerHTML = error[1];
	}else if (error2[0] == true) {
		contentRewriteable.innerTHML = error2[1];
	}else {
		completeNameAndImg();
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

const validarUsuarios = ()=>{
	let error2 = [];
	if (nameForm.value != "Emanuel" || nameForm.value != "emanuel") {
		error2[0] = true;
		error2[1] = "Ese usuario no existe";
		return error2;
	}else if (surnameForm.value != "Asandei" || surnameForm.value != "asandei") {
		error2[0] = true;
		error2[1] = "Ese usuario no existe";
		return error2;
	}else {
		error2[0] = false;
		return error2;
	}
}

function completeNameAndImg() {
	let unificar = nameForm.value + " " + surnameForm.value;
	document.getElementById("name-texts").innerHTML = unificar;
	if (nameForm.value == "Emanuel" || nameForm.value == "emanuel") {
		imageContentUser.src = "EmanuelXD.jpeg";
		imageContentUser.style.display = "inline";
	}
}


