// funcion nos devuelve un valor

function bienvenido() {
  return "Funcion de secciones";
}
var mensaje = bienvenido();
console.log(mensaje);

// partes de una seccion
// parametros, codigo, salida

function cuadradoNumero(num) {
  var resultado = num * num;
  return resultado;
}
var num = 3;
var valor = cuadradoNumero(num);
console.log(valor);
console.log(cuadradoNumero(5));

// Ejercicio de codificacion 3: tiempo de jubilacion

function calcularEdad(yearNacimiento) {
  return 2022 - yearNacimiento;
}

function clacularJubilacion(yearNacimiento, nom) {
  var edad3 = calcularEdad(yearNacimiento);
  var yearJubilacion = 65 - edad3;
  console.log(
    nom + " le faltan " + yearJubilacion + " años para su jubilacion"
  );
}

clacularJubilacion(1990, "Pablo");
clacularJubilacion(1978, "Juan");

/****************************************
 * Funciones como expresiones
 */

var prueba = function (nombre4) {
  // console.log('Prueba');
  // return "Mensaje de prueba";
  return "Hola " + nombre4;
};

// prueba();
// console.log(prueba());
console.log(prueba("Erika"));

/****************************************
 * Plantillas de cadenas (template string)//era lo que no podia hacer, ahora ya entendi
 */

var nombre2 = "Miguel";
console.log(`El nombre es: ${nombre2}`);
/***************************************** */
var a = 5;
var b = 12;

console.log(` La suma es: ${a + b}`);

/****************************************
 * Ejercicio 4
 */

var calcularScore = function (nombre3, pos, neg) {
  var porPos = (pos / 100) * 100;
  var porNeg = (neg / 100) * 100;

  if (porPos > 90) {
    // return nombre3+' tiene el score A';
    score = "A";
  } else if (porPos >= 70) {
    // return nombre3+' tiene el score B';
    score = "B";
  } else if (porPos >= 45) {
    // return nombre3+' tiene el score C';
    score = "C";
  } else {
    // return nombre3+' tiene el score D'
    score = "D";
  }

  return `${nombre3} tiene el score ${score},Positivas: ${porPos}%, Negativas: ${porNeg}%`;
};

var resultado = calcularScore("Yanil", 75, 25);
console.log(resultado);
