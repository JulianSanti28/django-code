
/*Variables Globales*/
let flagCodigo = false;
let flagCargo = false;
let flagSalarioBase = false;
let flagApoyoMovilidad = false;
let flagActividades = false;

document.addEventListener('DOMContentLoaded', () => {
    const entradas = document.querySelectorAll('.form-control');

    entradas.forEach(entrada => {
        entrada.addEventListener('keyup', () => {
            validate(entrada);
        });

    });

    document.getElementById('form').addEventListener('submit', (event) => {
        if (!validateForm()) {
            const entradas = document.querySelectorAll('.form-control');
            entradas.forEach(entrada => {
                if (entrada.value.length == 0 && !(entrada.id == 'bonificacion' || entrada.id == 'fondo' || entrada.id == 'fondo-social' || entrada.id == 'aporte-admin')) {
                    entrada.style.border = '1px solid red';
                    let codigo = entrada.id
                    switch (codigo) {
                        case 'codigo':
                            document.getElementById('ob-codigo').style.display = 'block'
                            break;
                        case 'cargo':
                            document.getElementById('ob-cargo').style.display = 'block'
                            break;
                        case 'tejido':
                            document.getElementById('ob-tejido').style.display = 'block'
                            break;
                        case 'salario-base':
                            document.getElementById('ob-base').style.display = 'block'
                            break;
                        case 'apoyo-mov':
                            document.getElementById('ob-mov').style.display = 'block'
                            break;

                        case 'actividades':
                            document.getElementById('ob-act').style.display = 'block'
                            break;
                    }
                }

            });

            event.preventDefault();
        } else {
            alert("Formulario correcto")
        }


    })
})

function validateForm() {
    return flagCodigo == true && flagCargo == true  && flagSalarioBase == true && flagApoyoMovilidad == true && flagActividades == true;
}

function validate(elemento) {
    /*Ocultando alerta de campos requeridos*/
    document.getElementById('ob-codigo').style.display = 'none'
    document.getElementById('ob-cargo').style.display = 'none'
    document.getElementById('ob-tejido').style.display = 'none'
    document.getElementById('ob-base').style.display = 'none'
    document.getElementById('ob-mov').style.display = 'none'
    document.getElementById('ob-act').style.display = 'none'
    let idEntrada = elemento.id;
    let value = ""
    switch (idEntrada) {
        case 'codigo':
            value = elemento.value;
            if (value < 0 || value.length != 5) {
                elemento.style.border = '1px solid red';
                document.getElementById('alerta-codigo').style.display = 'block';
                flagCodigo = false;
            } else {
                elemento.style.border = '1px solid rgb(206, 212, 218)';
                document.getElementById('alerta-codigo').style.display = 'none';
                flagCodigo = true;
            }
            break;
        case 'cargo':
            value = elemento.value;
            let cont = 0;
            for (let char in value) {
                if (value[char] === value[char].toUpperCase()) {
                    cont += 1
                }
            }
            if (cont == value.length) {
                elemento.style.border = '1px solid rgb(206, 212, 218)';
                document.getElementById('alerta-cargo').style.display = 'none';
                flagCargo = true;
            } else {
                elemento.style.border = '1px solid red';
                document.getElementById('alerta-cargo').style.display = 'block';
                flagCargo = false;
            }
            break;
        case 'salario-base':
            value = elemento.value;
            if (value.length < 10 || value.length > 10) {
                /*Limpiando los valores calculados*/
                document.getElementById('bonificacion').value = ""
                document.getElementById('fondo').value = "";
                document.getElementById('fondo-social').value = "";
                document.getElementById('aporte-admin').value = "";
                elemento.style.border = '1px solid red';
                document.getElementById('alerta-base').style.display = 'block';
                flagSalarioBase = false;
            } else {
                elemento.style.border = '1px solid rgb(206, 212, 218)';
                document.getElementById('alerta-base').style.display = 'none';

                /*Calcular campos derivados */
                let bonificacionTotal = Number(value) * 0.025;
                let fondoTotal = Number(value) * 0.20;
                let fondoSocial = Number(value) * 0.08;
                let aporteAdmin = Number(value) * 0.04
                document.getElementById('bonificacion').value = String(bonificacionTotal).slice(0, 11);
                document.getElementById('fondo').value = String(fondoTotal).slice(0, 11);
                document.getElementById('fondo-social').value = String(fondoSocial).slice(0, 11);
                document.getElementById('aporte-admin').value = String(aporteAdmin).slice(0, 11);
                flagSalarioBase = true;
            }
            break;
        case 'apoyo-mov':
            value = elemento.value;
            if (value.length < 10 || value.length > 10) {
                elemento.style.border = '1px solid red';
                document.getElementById('alerta-mov').style.display = 'block';
                flagApoyoMovilidad = false;
            } else {
                elemento.style.border = '1px solid rgb(206, 212, 218)';
                document.getElementById('alerta-mov').style.display = 'none';
                flagApoyoMovilidad = true;
            }
            break;

        case 'actividades':
            value = elemento.value;
            if (value.length > 1 && value.length < 200) {
                elemento.style.border = '1px solid rgb(206, 212, 218)';
                flagActividades = true;
            } else {
                flagActividades = false;
                elemento.style.border = '1px solid red';
            }
            break;

    }
}

