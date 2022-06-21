const Carol = {name:"Carol", surname:"DeLucas"}
const Emanuel = {name:"Emanuel", surname:"Asandei"}
const Sara = {name:"Sara", surname:"DelRío"}
const Marco = {name:"Marco", surname:"ElPoderoso"}

let userBase = [Carol.name, Emanuel.name, Sara.name, Marco.name];

let nameForm = document.getElementById("name-form");
let surnameForm = document.getElementById("surname-form");
let botónForm = document.getElementById("botón-loco");
let contentRewriteable = document.getElementById("name-texts");
let imageContentUser = document.getElementById("image-content-user");


botónForm.addEventListener("click", (e)=>{
	e.preventDefault();
	let error = validarCampos();
	let error2 = validarUsuarios();
	if (error[0] == true) {
		if(error2[0] = true) {
			contentRewriteable.innerHTML = error2[1];
		}else {
			contentRewriteable.innerHTML = error[1];
		}
	}else if (error2[0] == true) {
		imageContentUser.style.display = "none";
		contentRewriteable.innerHTML = error2[1];
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
	if (nameForm.value == userBase[0]) {
		error2[0] = false;
		error2[1] = Carol.name + " " + Carol.surname;
		imageContentUser.src = `${userBase[0]}.jpg`;
		imageContentUser.style.display = "inline";
		surnameForm.value = Carol.surname;
		return error2;
	} else if (nameForm.value == userBase[1]){
		error2[0] = false;
		error2[1] = Emanuel.name + " " + Emanuel.surname;
		imageContentUser.src = `${userBase[1]}.jpg`;
		imageContentUser.style.display = "inline";
		surnameForm.value = Emanuel.surname;
		return error2;
	} else if (nameForm.value == userBase[2]){
		error2[0] = false;
		error2[1] = Sara.name + " " + Sara.surname;
		imageContentUser.src = `${userBase[2]}.jpg`;
		imageContentUser.style.display = "inline";
		surnameForm.value = Sara.surname;
		return error2;
	} else if (nameForm.value == userBase[3]){
		error2[0] = false;
		error2[1] = Marco.name + " " + Marco.surname;
		imageContentUser.src = `${userBase[3]}.jpg`;
		imageContentUser.style.display = "inline";
		surnameForm.value = Marco.surname
		return error2;
	} else {
		error2[0] = true;
		error2[1] = "Usuario inexistente";
		return error2;
	}
}

function completeNameAndImg() {
	let unificar = nameForm.value + " " + surnameForm.value;
	document.getElementById("name-texts").innerHTML = unificar;
}

