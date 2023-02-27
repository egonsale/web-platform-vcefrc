/********** OBJETO PUNTO(.)**************
 * ***********************************/

let miLibroA = {
  titulo: "El Origen",
  autor: "Dan Brown",
  pagina: 400,
  publicado: false,
};
let miLibroB = {
  titulo: "Inferno",
  autor: "Dan Brown",
  pagina: 380,
  publicado: true,
};

console.log(miLibroA.titulo);
console.log(miLibroA.autor);
console.log(`${miLibroA.titulo} fue creado por: ${miLibroA.autor}`);
miLibroA.pagina = 400;
console.log(miLibroA.pagina);

let getResumen = (libro) => {
  return {
    resumen: `${libro.titulo} fue creado por ${libro.autor}`,
    resumenPaginas: `${libro.titulo} tiene ${libro.pagina} paginas`,
  };
};

let libroAResumen = getResumen(miLibroA);
let libroBResumen = getResumen(miLibroB);

console.log(libroBResumen.resumen);
console.log(libroBResumen.resumenPaginas);

console.log(libroAResumen.resumen);
console.log(libroAResumen.resumenPaginas);

/*********EJERCICIO**************
 * ***********************************/

// let persona = {
//   nombre: "Pablo",
//   edad: 30,
//   ciudad: "Carhuaz",
// };

// persona.edad = 35;
// console.log(
//   `${persona.nombre} tiene ${persona.edad} años. y vive en la ciudad de ${persona.ciudad}`
// );

/*********REFERNCIA DE OBJETOS**************
 * ***********************************/

let persona = {
  nombre: "Pablo",
  edad: 30,
  sueldo: 1200,
};

let otraPersona = persona;
otraPersona.sueldo = 1500;
console.log(otraPersona);

let cambiarSueldo = (person, monto) => {
  person.sueldo = person.sueldo + monto;
  console.log(person);
};
cambiarSueldo(persona, 500);
console.log(otraPersona);
console.log(persona);

/*********METODOS**************
 * ***********************************/
let persona1 = {
  nombre: "Pablo",
  edad: 30,
  sueldo: 1200,
  metodoPrueba: function () {
    // console.log("Escribiendo desde el metodo prueba");
    return "Resultado desde prueba";
  },

  // buena practica, uso de herencia
  cambiarEdad: function (e) {
    this.edad = this.edad + e;
  },
};

let result = persona1.metodoPrueba();
console.log(result);

persona1.cambiarEdad(3);
console.log(persona1.edad);

/*********OBJETOS STRING**************
 * ***********************************/
let nombre = " Erika Gonsalez  ";
let clave = "ewrjweirfwo";
// propiedad
console.log(nombre.length);
// metodo para convertir en mayuscula
console.log(nombre.toUpperCase());
// metodo para convertir en minuscula
console.log(nombre.toLowerCase());
// metodo para limpiar vacios en los caracteres
console.log(nombre.trim());
// metodo verificar si hay una palabra dentro de otra
console.log(clave.includes("weir", 5));

/*********DESTRUCTURACION DE OBJETOS**************
 * *******EXTRAER DATOS, arreglo o propiedades de objetos****************************/

const respuesta = {
  codigo: 200,
  data: {
    persona: {
      nombre2: "Sara",
      direccion: {
        ciudad: "Carhuaz",
        pais: "Perú",
      },
    },
  },
};

let {
  codigo: status,
  data: {
    persona: { nombre2: nom },
  },
} = respuesta;
console.log(nom);

const getDatos = () => {
  const respuesta = [
    {
      codigo: 200,
      data: {
        persona: {
          nombre3: "Sara",
          direccion: {
            ciudad: "Carhuaz",
            pais: "Perú",
          },
        },
      },
    },
    {
      codigo: 300,
      data: {
        persona: {
          nombre3: "Ana",
          direccion: {
            ciudad: "Toma",
            pais: "Perú",
          },
        },
      },
    },
    {
      codigo: 400,
      data: {
        persona: {
          nombre3: "Jose",
          direccion: {
            ciudad: "Tinco",
            pais: "Perú",
          },
        },
      },
    },
  ];
  return respuesta;
};

let {
  codigo: status1,
  data: {
    persona: { nombre3: nomb },
  },
} = getDatos()[0];

for (const {
  codigo: status,
  data: {
    persona: { nombre3: nom },
  },
} of getDatos()) {
  console.log(nom);
}
