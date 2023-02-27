// VARIABLES
// var primerNombre = "Erika";
// console.log(primerNombre);

// var edad = 34;
// var sueldo = 100.5;

// console.log(edad);
// var tieneTrabajo = false;
// console.log(tieneTrabajo);

// var primerNombre, edad, sexo, esSoltero;
// primerNombre = "Yanil";
// edad = 14;
// sexo = "M";
// esSoltero = false;

// console.log(
//   "El nombre es: " +
//     primerNombre +
//     " , su edad es " +
//     edad +
//     " , ¿es soltero?" +
//     esSoltero
// );

// var nombre = "Pablo";
// var estadoCivil = "Soltero";

// if (estadoCivil === "casado") {
//   console.log(nombre + " esta casado");
// } else {
//   console.log(nombre + " esta soltero");
// }

/****************************************
 * Sentencias condicionales
 */

var nombre = "Pablo";
var edad = 60;

// if anidadas

if (edad < 12) {
  console.log(nombre + " es un niño");
} else if (edad > 11 && edad < 18) {
  console.log(nombre + " es una adolescente");
} else if (edad > 17 && edad < 60) {
  console.log(nombre + " es un adulto.");
} else {
  console.log(nombre + " es un anciano.");
}

/****************************************
 * Operador terniario
 */

var nombre1 = "Maria";
var edad1 = 16;

edad1 >= 18
  ? console.log(nombre1 + " es mayor de edad")
  : console.log(nombre1 + " no es mayor de edad, es un adolescente");

/****************************************
 * Sentencia Switch
 */

var mes = 7;
switch (mes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  default:
    console.log("Mes no considerado");
}

/****************************************
 * Sentencia for
 */

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

/****************************************
 * Sentencia while
 
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}*/

/****************************************
 * Sentencia do while, asi la condicion sea falsa se imprime el valor inicial
 */

var i = 13;
do {
  console.log(i);
  i++;
} while (i <= 10);

/****************************************
 * Valores verdaderos y falsos
 */

// Valores falsos: undefined, null, 0, ''
// valores verdaderos: not valores falsos
var edad2;
edad2 = 0;
if (edad2) {
  console.log("Variable esta definida");
} else {
  console.log("Variable no definidida");
}

/****************************************
 * Ejercicio, notas
 */

var promPablo = (14 + 19 + 16) / 3;
var promMaria = (12 + 5 + 10) / 3;

if (promPablo > promMaria) {
  console.log("Pablo Tiene el promedio superior");
} else if (promMaria > promPablo) {
  console.log("Maria tiene el promedio superior");
} else {
  console.log("Pablo y Maria tienen promedios iguales");
}

// mostrar si estan aprobados

for (var i = 1; i <= 2; i++) {
  if (i === 1) {
    if (promPablo > 13) {
      console.log("Pablo esta aprobado con " + promPablo);
    } else {
      console.log("Pablo esta desaprobado con " + promPablo);
    }
  } else {
    if (promMaria > 13) {
      console.log("Maria esta aprobado con " + promMaria);
    } else {
      console.log("Maria esta desaprobado con " + promMaria);
    }
  }
}
