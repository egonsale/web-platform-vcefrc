/**ARREGLOS DE ES6+ ****************************
 * *********************************************
 */

const ceviche = ["pescado", "mariscos", "cebolla"];

/**AGREGAR  O QUITAR ELEMENTOS EN EL ARREGLO *****
 * *********************************************
 */
console.log(ceviche.pop()); //quito
ceviche.push("limon"); //agrego

/**AGREGAR  AL PRINCIPIO y quitar*****
 * *********************************************
 */
console.log(ceviche.shift());
ceviche.unshift("papas");
/****************************************** */
console.log(ceviche);

ceviche[0] = "papas";
console.log(ceviche[ceviche.length - 1]);

/**AGREGAR o QUITAR EN CUALQUIER ORDEN *****
 * *********************************************
 */
ceviche.splice([1], 0, "aji limo");
console.log(ceviche);

/**BUCLES EN MATRICES******************** *****
 * *********************RECORRER UN ARREGLO************************
 */

ceviche.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

/**BUCLES EN MATRICES******************** *****
 * *********************OTRA FORMA DE RECORRER ARREGLO************************
 */

for (let i = 0; i < ceviche.length; i++) {
  console.log(`Indice ${i}: ${ceviche[i]}`);
}

/******************BUSCAR ELEMENTOS************* *****
 * ***************************************************
 */

const ceviche1 = [
  {
    codigo: 1,
    titulo: "pescado",
  },
  {
    codigo: 2,
    titulo: "mariscos",
  },
  {
    codigo: 4,
    titulo: "yuyo",
  },
];

// const index1 = ceviche1.findIndex(function (ing, index) {
//   //   console.log(ing);
//   return ing.titulo === "yuyo";
// });

/******************AMPLIANDO LA BUSQUEDA************* *****
 * ***************************************************
 */

const buscarIngrediente = function (ceviche, titulo) {
  const index = ceviche1.findIndex(function (ing, index) {
    return ing.titulo === titulo;
  });
  return index;
};

// const index1 = ceviche1.findIndex(function (ing, index) {
//   //   console.log(ing);
//   return ing.titulo === "yuyo";
// });

console.log(ceviche1[buscarIngrediente(ceviche1, "yuyo")]);

/******************FILTRADO************* *****
 * ***************************************************
 */

const filtrarIngredientes = ceviche1.filter(function (ing, index) {
  const ingredientes = ing.titulo.includes("mar");
  return ingredientes;
});

console.log(filtrarIngredientes);

/************************FILTRAR PAISES****************************** */
const paises = ["Colombia", "Perú", "España", "Mexico"];
console.log(paises.filter((pais) => pais.includes("Es")));

/************************ORDENAR ARREGLO****************************** */

ceviche1.sort(function (a, b) {
  if (a.titulo > b.titulo) {
    return 1;
  }
  if (a.titulo < b.titulo) {
    return -1;
  }
  return 0;
});

console.log(ceviche1);
