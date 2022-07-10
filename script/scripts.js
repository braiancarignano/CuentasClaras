// ---------------------- Ejemplo con Objetos, Arrays, Metodos ------------------------------------------- //
const nombreUsuario = prompt("¿Cual es tu nombre?");
alert(`Hola ${nombreUsuario}, debes ingresar los datos de 3 cuentas para comenzar.`);

const billeteras = [];

class Billetera {
	constructor(nombre, saldo) {
		this.nombre = nombre;
		this.saldo = saldo;
	}
}

// Para optimizar el código, podrías utilizar un ciclo de iteración
// para que el usuario vaya creando billeteras y pushearlas al array:
function crearBilleteras() {
	while (confirm("Desea agregar una billetera?")) {
		const billetera = new Billetera(prompt("Nombra como quieres que se llame tu billetera (Ej: Efectivo)"), Number(prompt("Ingresa el saldo de tu billetera")));
		billeteras.push(billetera);
	}
}


console.log(billetera);

const presupuestoUsuario = () => {
	do {
		do {
			// Según los consejos que mencioné arriba
			// También habría que optimizar esta parte para imprimir los nombres de la billetera en el prompt
			// Para ello podés crear una variable string e irle concatenando los datos del array
			// recorriendolo
			// Te dejo cómo hacerlo al final del código

			// Aquí falta definir la variable opcion con let
			opcion = Number(
				prompt(`¿A que cuenta deseas realizar una recarga ${nombreUsuario}?
  1- Cuenta ${primerBilletera.nombre}
  2- Cuenta ${segundaBilletera.nombre}
  3- Cuenta ${tercerBilletera.nombre}
  4- Salir
  `)
			);
		} while (isNaN(opcion));
		// Aquí te faltó definir ingreso con let
		ingreso = Number(prompt("¿Cuanto dinero deseas ingresar?"));
		switch (opcion) {
			case 1:
				primerBilletera.saldo += ingreso;
				break;
			case 2:
				segundaBilletera.saldo += ingreso;
				break;
			case 3:
				tercerBilletera.saldo += ingreso;
				break;
			case 4:
				break;
			default:
				alert("Dato invalido...");
				break;
		}
	} while (isNaN(ingreso));
};

const gasto = () => {
	do {
		while (isNaN(opcion)) {
			// Falta definir
		let	opcion = Number(
				prompt(`¿En que cuenta realizaste tu gasto ${nombreUsuario}?
  1- Cuenta ${primerBilletera.nombre}
  2- Cuenta ${segundaBilletera.nombre}
  3- Cuenta ${tercerBilletera.nombre}
  4- Salir
  `)
			);
		} 

		// Falta definir
	let	egreso = Number(prompt("¿Cuanto dinero gastaste?"));

		switch (opcionUsuario) {
			case 1:
				primerBilletera.saldo -= egreso;
				break;
			case 2:
				segundaBilletera.saldo -= egreso;
				break;
			case 3:
				tercerBilletera.saldo -= egreso;
				break;
			case 4:
			default:
				alert("Dato invalido...");
				break;
		}
	} while (isNaN(egreso));
};

const consulta = () => {
	const billeteraTotal = billeteras.reduce((total, el) => total + el.saldo, 0);
	alert(`Este es el saldo en tus cuentas:
  Cuenta ${primerBilletera.nombre}: ${primerBilletera.saldo}
  Cuenta ${segundaBilletera.nombre}: ${segundaBilletera.saldo}
  Cuenta ${tercerBilletera.nombre}: ${tercerBilletera.saldo}


  /////Cuenta en Total: ${billeteraTotal}/////`);
};

do {
	// Falta definir
	opciones = Number(
		prompt(`¿Que deseas hacer ${nombreUsuario}?
  1- Recargar saldo en una billetera.
  2- Registrar gasto.
  3- Consultar saldo en billeteras.
  4- Salir
  `)
	);

	switch (opciones) {
		case 1:
			presupuestoUsuario();
			break;
		case 2:
			gasto();
			break;
		case 3:
			consulta();
			break;
		case 4:
			break;
		default:
			alert("Dato invalido...");
			break;
	}
} while (opciones !== 4);

// COMO CREAR UN MENÚ RECORRIENDO UN ARRAY DE MANERA DINÁMICA
let string = " ";
for (let i = 1; i <= billeteras.length; i++) {
	string += `${i} - Cuenta ${billeteras[i].nombre}\n`;
}

let mensaje = prompt(`Escriba el número correspondiente a la billetera que quiera utilizar ${string}`)