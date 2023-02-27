/***************************************
 * ARREGLOS
 */
var nombres = ["Maria", "Flor", "Ana"];
var vegetales = new Array("Tomate", "Lechuga", "Zanahoria");

console.log(nombres[2]);
console.log(nombres[1]);
console.log(vegetales[1]);

// cambiar dato

nombres[1] = "Jose";
console.log(nombres[1]);
vegetales[2] = "Nabo";
console.log(vegetales[2]);

// ver la cantidad, tamaño de datos
console.log(nombres.length);

/***************************************
 * OPERACIONES CON ARREGLOS
 */

var frutas = ["pera", "uva", "tuna", "arandano"];
console.log(frutas);

// for (var i = 0; i <= frutas.length - 1; i++) {
//   console.log(frutas[i]);
// }
// a. otra forma
frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});

// agregar naranja al final del arreglo
frutas.push("naranja");
console.log(frutas);

// agregar fresa al inicio del arreglo
frutas.unshift("fresa");
console.log(frutas);

// eliminar el ultimo dato

frutas.pop();
console.log(frutas);

// eliminar el primer dato

frutas.shift();
console.log(frutas);

// ver la posicion de un arreglo

var posicion = frutas.indexOf("uva");
console.log(posicion);

// elimiar desde un orden especifico

frutas.splice(1, 2);
console.log(frutas);

/***************************************
 * ARREGLOS CON ELEMENTOS DE DIFERENTES TIPOS
 */

var persona = ["Pablo", "Vasquez", 34, "999999999", 1.75];
console.log(persona);

/***************************************
 * OBJETOS LITERALES
 */

var personas = {
  nombre5: "Maria",
  apellido: "Martinez",
  gustos: ["Futboll", "Peliculas", "Ingles"],
  trabajo: "Profesor",
  esCasado: true,
};

console.log(personas.apellido);
console.log(personas["trabajo"]);

personas.esCasado = false;
console.log(personas.esCasado);

/***************************************
 * OBJETOS CON LA SINTAXIS OBJECT
 */

var persona2 = new Object();
persona2.nombre6 = "Ana";
persona2.apellido = "Pinedo";
persona2["trabajo"] = "Chef";
console.log(persona2);

/***************************************
 * OBJETOS Y METODOS
 */
var personas1 = {
  nombre: "Hazel",
  apellido: "Martinez",
  gustos: ["Futboll", "Peliculas", "Ingles"],
  trabajo: "Profesor",
  esCasado: true,
  yearNacimiento: 1985,

  //metodos
  calcularEdad: function () {
    this.edad = 2022 - this.yearNacimiento;
  },
};

personas1.calcularEdad();
console.log(personas1);
