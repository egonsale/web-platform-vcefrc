/**********ES5 VARIABLES**************
 * ***********************************/
var nombre5 = "Pablo";
console.log(nombre5);
var edad5 = 35;
nombre5 = "Carlos";
console.log(nombre5);

/**********ES6 VARIABLES**************
 * *******let: se puede cambiar el valor de la varibles
 *********const: no permite cambiar el valor(solo lectura)****************************/

const nombre6 = "Pedro";
let edad6 = 28;
console.log(nombre6);
// nombre6 = "Ana";
console.log(nombre6);

/**********BLOQUES Y ALCANCE DE LAS VARIABLES**************
 * *****lo que yo declare en un bloque se queda en ese bloque******************************/

{
  const a = 3;
  let b = 4;
  var c = 5;
}

console.log(c);

/**********TEMPLATE STRINGS**************
 * ***********************************/

let nombre = "Pablo";
let apellido = "Vasquez";
const ciudad = "Lima";
const nacimiento = 1985;
function calcularEdad(year) {
  return 2022 - year;
}

// ES5

console.log(
  nombre +
    " " +
    apellido +
    ", nacio en " +
    ciudad +
    " y su edad es " +
    calcularEdad(nacimiento)
);

// ES6, no usamos mucho el +, mas entendible
console.log(
  `${nombre} ${apellido}, nació en ${ciudad}, y su edad es ${calcularEdad(
    nacimiento
  )}`
);

/**********METODOS DE CADENAS**************
 * ***********************************/
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
console.log(`${nombre} `.repeat(5));
// si incluye la palabra considerada en el parentesis, al final
console.log(nombreCompleto.includes("blo "));
// considera la palabra al inicio de la cadena
console.log(nombreCompleto.startsWith("Pa"));
console.log(nombreCompleto.endsWith("uez"));

/**********1. FUNCIONES FLECHAS**************
 * ***********************************/
const years = [2000, 2005, 2008, 2012];

// ES5
var edad10 = years.map(function (el) {
  return 2022 - el;
});
console.log(edad10);

// ES6

let edad12 = years.map((el) => 2022 - el);
console.log(edad12);

edad12 = years.map((el, index) => `Edad ${index + 1}: ${2022 - el}`);
console.log(edad12);

// otra forma

edad12 = years.map((el, index) => {
  const yearActual = new Date().getFullYear();
  const edad = yearActual - el;
  return `Edad ${index + 1}: ${edad}`;
});

console.log(edad12);

/**********2. FUNCIONES FLECHAS**************
 * ***********************************/
// function cuadrado(num) {
//   return num * num;
// }
const cuadrado = (num) => num * num;
console.log(cuadrado(8));

const personas = [
  {
    nombre: "Pablo",
    edad: 20,
  },

  {
    nombre: "Jose",
    edad: 27,
  },

  {
    nombre: "Maria",
    edad: 35,
  },
];

// const menores30 = personas.filter(function (persona) {
//   return persona.edad < 35;
// });
const menores30 = personas.filter((persona) => persona.edad < 35);

console.log(menores30);
/**********ESTRUCTURACION**************
 * ***********************************/
// ES6

var [nombre1, edad] = ["Pablo", 25];
console.log(nombre1);
console.log(edad);

const persona = {
  nombre2: "Carlos",
  edad1: 30,
};

const { nombre2, edad1 } = persona;
console.log(nombre2);
console.log(edad1);

const { nombre2: n, edad1: e } = persona;
console.log(n);
console.log(e);

/**********DESTRUCTURACION**************
 * ***********************************/

const calcMayorEdad = (year) => {
  const edad = new Date().getFullYear() - year;
  const mayoria = edad >= 18 ? true : false;
  return [edad, mayoria];
};

const [edad2, mayoria] = calcMayorEdad(2010);
console.log(edad2);
console.log(`Es mayor de edad: ${mayoria}`);

/**********MAPS**************
 * ***********************************/

const datos = new Map();

datos.set("nombre", "Grover");
datos.set("edad", 30);
datos.set(1, "correo@gamil.com");
datos.set(2, "correo1@gamil.com");
datos.set("movil", 999999999);

console.log(datos.get("nombre"));
console.log(datos.get(2));
console.log(datos.size);

//datos.delete(2);
//datos.clear();

datos.forEach((value, key) => {
  console.log(`${key}:${value}`);
});

/**********OPERADOR DE PROPAGACION**************
 * ***********************************/

var suma = function (a, b, c, d) {
  return a + b + c + d;
};

var ope1 = suma(10, 20, 30, 40);
console.log(ope1);

/******OTRA FORMA****** */

var valores = [10, 20, 30, 40];
const ope2 = suma(...valores);

console.log(ope2);

const rrhh = ["Ana", "Jose", "Maria"];
const contabilidad = ["Felipe", "Carlos", "Felix"];

const empresa = [...rrhh, ...contabilidad];

console.log(empresa);
