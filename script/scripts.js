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




// // ---------------------- Ejemplo con Objetos, Arrays, Metodos ------------------------------------------- //  
// const nombreUsuario = prompt("¿Cual es tu nombre?")
// alert(`Hola ${nombreUsuario}, debes ingresar los datos de 3 cuentas para comenzar.`)

//   const billeteras = [];
//   class Billetera {
//     constructor(nombre, saldo) {
//       this.nombre = nombre;
//       this.saldo = saldo;
//     }
//   }
//   const primerBilletera = new Billetera(nombre = prompt("Nombra como quieres que se llame tu primer billetera (Ej: Efectivo)"), saldo = Number(prompt("Ingresa el saldo de tu primer billetera")));
//   alert (`Creaste tu primer billetera con el nombre ${primerBilletera.nombre} y saldo ${primerBilletera.saldo}`)
//   const segundaBilletera = new Billetera(nombre = prompt("Nombra como quieres que se llame tu segunda billetera (Ej: Banco)"), saldo = Number(prompt("Ingresa el saldo de tu segunda billetera")));
//   alert (`Creaste tu segunda billetera con el nombre ${segundaBilletera.nombre} y saldo ${segundaBilletera.saldo}`)
//   const tercerBilletera = new Billetera(nombre = prompt("Nombra como quieres que se llame tu tercer billetera (Ej: Ahorros)"), saldo = Number(prompt("Ingresa el saldo de tu tercer billetera")));
//   alert (`Creaste tu tercer billetera con el nombre ${tercerBilletera.nombre} y saldo ${tercerBilletera.saldo}`)
//   billeteras.push(primerBilletera, segundaBilletera, tercerBilletera);
//   console.log(billeteras)

// const presupuestoUsuario = () => {
//   do {
//     do {
//    opcion = Number(prompt(`¿A que cuenta deseas realizar una recarga ${nombreUsuario}?
//   1- Cuenta ${primerBilletera.nombre}
//   2- Cuenta ${segundaBilletera.nombre}
//   3- Cuenta ${tercerBilletera.nombre}
//   4- Salir
//   `))
//     } while (isNaN(opcion))
//    ingreso = Number(prompt("¿Cuanto dinero deseas ingresar?"))
//     switch (opcion) {
//       case 1:
//         primerBilletera.saldo += ingreso;
//         break
//       case 2:
//         segundaBilletera.saldo += ingreso;
//         break
//       case 3:
//         tercerBilletera.saldo += ingreso;
//         break
//       case 4:
//         break
//       default:
//         alert("Dato invalido...")
//         break
//     }
//   } while (isNaN(ingreso))
// }

// const gasto = () => {
//   do {
//     do {
//     opcionEgreso = Number(prompt(`¿En que cuenta realizaste tu gasto ${nombreUsuario}?
//   1- Cuenta ${primerBilletera.nombre}
//   2- Cuenta ${segundaBilletera.nombre}
//   3- Cuenta ${tercerBilletera.nombre}
//   4- Salir
//   `))
//     } while (isNaN(opcionEgreso))
//     egreso = Number(prompt("¿Cuanto dinero gastaste?"))
//     switch (opcionEgreso) {
//       case 1:
//         primerBilletera.saldo -= egreso;
//         break
//       case 2:
//         segundaBilletera.saldo -= egreso;
//         break
//       case 3:
//         tercerBilletera.saldo -= egreso;
//         break
//       case 4:
//       default:
//         alert("Dato invalido...")
//         break
//     }
//   } while (isNaN(egreso))
// }

// const consulta = () => {
//   const billeteraTotal = billeteras.reduce((total, el) => total + el.saldo, 0);
//   alert(`Este es el saldo en tus cuentas:
//   Cuenta ${primerBilletera.nombre}: ${primerBilletera.saldo}
//   Cuenta ${segundaBilletera.nombre}: ${segundaBilletera.saldo}
//   Cuenta ${tercerBilletera.nombre}: ${tercerBilletera.saldo}


//   /////Cuenta en Total: ${billeteraTotal}/////`)

// }
// do {
//  opciones = Number(prompt(`¿Que deseas hacer ${nombreUsuario}?
//   1- Recargar saldo en una billetera.
//   2- Registrar gasto.
//   3- Consultar saldo en billeteras.
//   4- Salir
//   `))
//   switch (opciones) {
//     case 1:
//       presupuestoUsuario()
//       break
//     case 2:
//       gasto()
//       break
//     case 3:
//       consulta()
//       break
//     case 4:
//       break
//     default:
//       alert("Dato invalido...")
//       break
//   }

// } while (opciones !== 4)



// ---------------------- Ejemplo con Funciones ------------------------------------------- //
// let presupuesto = 0;
// let billeteraEfectivo = 0;
// let billeteraAhorro = 0;
// let billeteraBanco = 0;
// let nombreUsuario= prompt("¿Cual es tu nombre?")

// const presupuestoUsuario = () => {
//   do { 
//     do{
//     opcion = Number(prompt(`¿A que cuenta deseas realizar una recarga ${nombreUsuario}?
//   1- Cuenta "Efectivo"
//   2- Cuenta "Ahorros"
//   3- Cuenta "Bancos"
//   4- Salir
//   `))} while (isNaN(opcion))  
//   ingreso = Number(prompt("¿Cuanto dinero deseas ingresar?"))
//   switch (opcion) {
//     case 1 :
//       billeteraEfectivo = billeteraEfectivo + ingreso;
//       break
//     case 2: 
//       billeteraAhorro = billeteraAhorro + ingreso;
//       break
//     case 3:
//       billeteraBanco = billeteraBanco + ingreso;
//       break
//     case 4:
//       break
//     default: 
//     alert ("Dato invalido...")
//     break
//   }
// }   while (isNaN(ingreso)) 
// }

// const gasto = () => {
//   do { 
//     do{
//     opcion = Number(prompt(`¿En que cuenta realizaste tu gasto ${nombreUsuario}?
//   1- Cuenta "Efectivo"
//   2- Cuenta "Ahorros"
//   3- Cuenta "Bancos"
//   4- Salir
//   `))} while (isNaN(opcion)) 
//   egreso = Number(prompt("¿Cuanto dinero gastaste?"))
//   switch (opcion) {
//     case 1 :
//       billeteraEfectivo = billeteraEfectivo - egreso;
//       break
//     case 2: 
//       billeteraAhorro = billeteraAhorro - egreso;
//       break
//     case 3:
//       billeteraBanco = billeteraBanco - egreso;
//       break
//     case 4:
//     default: 
//     alert ("Dato invalido...")
//     break
//   }
// }   while (isNaN(egreso))
// }

// const consulta = () => {
//   let billeteraTotal = billeteraEfectivo + billeteraAhorro + billeteraBanco;
//   alert (`Este es el saldo en tus cuentas:
//   Cuenta en Efectivo: ${billeteraEfectivo}
//   Cuenta en Ahorros: ${billeteraAhorro}
//   Cuenta en Bancos: ${billeteraBanco}
  
//   /////Cuenta en Total: ${billeteraTotal}/////`)

// }

// do {
//   let opciones = Number(prompt(`¿Que deseas hacer ${nombreUsuario}?
//   1- Recargar saldo en una billetera.
//   2- Registrar gasto.
//   3- Consultar saldo en billeteras.
//   4- Salir
//   `))
//   switch (opciones) {
//     case 1 :
//       presupuestoUsuario()
//       break
//     case 2: 
//       gasto()
//       break
//     case 3:
//       consulta()
//       break
//     case 4:
//       break
//     default: 
//     alert ("Dato invalido...")
//     break
//   }
  
// } while (opciones !== 4)




/*Ejercicio probando If-Else y Switch con un ciclo que registra gastos y presupuesto.
para probar el If-Else descomentar y comentar el otro codigo*/

// ----------------------------- -Ejemplo con If_Else --------------------------------------- //

// let presupuesto = Number(prompt("Ingresa cuanto dinero tienes"))
// do {
//   let gasto = Number(prompt("Ingresa cuanto gastaste")) ;
//   presupuesto = presupuesto - gasto;
//   if (presupuesto > 15000) {
//     alert("Todavia te queda presupuesto")
//   }
//   else if (presupuesto > 10000) {
//     alert("Ya gastaste gran parte de tu presupuesto, deberias tener mas cuidado...")
//   }
//   else if (presupuesto > 2000) {
//     alert("Ya gastaste casi todo tu presupuesto...")
//   }
//   else {
//     }
//     alert(`Te quedan ${presupuesto}`)
// }
// while(presupuesto > 0)

// alert ("Gastaste todo tu saldo de esta presupuesto");


// ---------------------- Ejemplo con Switch ------------------------------------------- //

// let presupuesto = Number(prompt("Ingresa cuanto dinero tienes"))
// if (!Number(presupuesto)){
//   alert("No ingresaste un numero")

// }
// do {
//   let gasto = Number(prompt("Ingresa cuanto gastaste"));
//   if (!Number(gasto)){
//     alert("No ingresaste un numero")}
//   presupuesto = presupuesto - gasto;
//   alert(`Te quedan ${presupuesto}`)
//   switch (true) {
//     case (presupuesto > 15000):
//       alert("Todavia te queda presupuesto")
//       continue
//     case (presupuesto > 10000):
//       alert("Ya gastaste gran parte de tu presupuesto, deberias tener mas cuidado...")
//       continue
//     case (presupuesto > 2000):
//       alert("Ya gastaste casi todo tu presupuesto...")   
//       continue 
//   }
// }
// while(presupuesto > 0)

// alert ("Gastaste todo tu saldo de esta presupuesto");

// let participante = prompt("Ingresa tu nombre");
// let intentos = 0;
// let numeroGanador = 3;
// for (let i = 1; i < 6; i++){
//     ticket = Number(prompt("Ingresa el numero que crees es el ganador del 1 al 5"));
//     const invalido = () => {
//         if(ticket > 5){
//             alert("Numero invalido");
//             i--;
//         }
//     }
//     const ganaste = () => {
//         if(ticket === numeroGanador){
//             alert("Felicidades "+ participante + " has ganado!!!")
//             i = 7;
//         }
//     }
//     const ultimosIntentos= () => {
//         if(i >= 3 && i < 4){
//             alert("Cuidado "+ participante + " te quedan 2 intentos!!!")
//         }
//     }    
//     const perdiste= () => {
//         if(i >= 5 && i < 6){
//             alert("Lo siento "+ participante + " te quedaste sin intentos!!!")
//         }
//     }
//     ganaste()
//     ultimosIntentos()
//     perdiste()
//     invalido()
// }
// alert ("Toca F5 para volver a intentarlo");