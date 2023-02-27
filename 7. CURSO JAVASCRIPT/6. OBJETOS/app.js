/********** OBJETO PUNTO(.)**************
 * ***********************************/

let miLibro = {
  titulo: "El Origen",
  autor: "Dan Brown",
  pagina: 400,
  publicado: false,
};

console.log(miLibro.titulo);
console.log(miLibro.autor);
console.log(`${miLibro.titulo} fue creado por: ${miLibro.autor}`);
miLibro.paginas = 380;
console.log(miLibro.pagina);

/*********EJERCICIO**************
 * ***********************************/

let persona = {
  nombre: "Pablo",
  edad: 30,
  ciudad: "Carhuaz",
};

persona.edad = 35;
console.log(
  `${persona.nombre} tiene ${persona.edad} años. y vive en la ciudad de ${persona.ciudad}`
);
