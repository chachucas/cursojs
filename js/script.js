$(document).ready(function(){

$.ajax({
    url: "https://apis.datos.gob.ar/georef/api/provincias",
    type: "get",
    dataType: "json",
    success: function (data) {
        let provincias = data.provincias;
        for (let i = 0; i < provincias.length; i++) {
            $('#state').append($("<option>").text(provincias[i].nombre).val(provincias[i].id));
        }
    },
    error: function () {
        alert("ERROR");
    }
});

$.ajax({
    url: "https://restcountries.com/v3.1/all",
    type: "GET",
    dataType: "json",
    success: function (data) {
        let pais = $("#country");
        for (let i = 0; i < data.length; i++) {
            let country = data[i];
            let option = $("<option></option>")
                .val(country.name.common)
                .text(country.name.common);
            pais.append(option);
        }
    },
    error: function () {
        alert("ERROR");
    }
});

// Obtener el formulario y sus elementos
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");
const repeatPassInput = document.getElementById("repeatPass");

// Agregar un event listener para el submit del formulario
contactForm.addEventListener("submit", function(event) {
    // Prevenir el envío del formulario por defecto
    event.preventDefault();

    // Validar los campos obligatorios
    if (nameInput.value === "" || surnameInput.value === "" || emailInput.value === "" || userInput.value === "" || passInput.value === "") {
        alert("Por favor complete todos los campos.");
        return;
    }

    if (repeatPassInput.value != passInput.value) {
        alert("La confirmacion de la contraseña no coincide.");
        return;
    }


    // Ocultar formulario para continuar


    window.location.href = "games.html";


});

ageInput.addEventListener("input", function(event) {
    // Validar edad
    if (ageInput.value < 5 || ageInput.value > 99 || isNaN(ageInput.value)===true) {
        ageInput.setCustomValidity("Su edad no es correcta");
    } else {
        ageInput.setCustomValidity("");
    }
});

// Agregar un event listener para el input del nombre
nameInput.addEventListener("input", function(event) {
    // Validar que el nombre no sea demasiado largo
    if (nameInput.value.length > 20) {
        nameInput.setCustomValidity("El nombre no puede tener más de 20 caracteres.");
    } else {
        nameInput.setCustomValidity("");
    }
});

emailInput.addEventListener("input", function(event) {
    console.log('input event fired');
    // Validar que el correo electrónico tenga un formato válido
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        emailInput.setCustomValidity("Por favor ingrese un correo electrónico válido.");
        emailError.textContent = 'correo electrónico no válido';
        emailError.classList.add('visible');
    } else {
        emailInput.setCustomValidity("");
        emailError.textContent = '';
        emailError.classList.remove('visible');
    }
});

}); // cierre del document ready