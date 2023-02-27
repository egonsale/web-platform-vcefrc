// Examinando el DOM
// console.log(document);
// console.log(document.title);
// document.title = "Prueba";
// console.log(document.title);
// console.log(document.body);
// console.log(document.all[10]);

// console.log(document.forms[0]);

/****************************************
 * identificar---> getElementById()
 */

// console.log(document.getElementById("header-title"));

// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// // console.log(header);
// headerTitle.textContent = "Hola";
// headerTitle.innerText = "Adios";
// headerTitle.innerHTML = "<h3>Prueba</h3>";

// // obtiene varios elementos: getElementsByClassName
// var items = document.getElementsByClassName("list-group-item");
// console.log(items[0]);
// // cmabiar los items
// items[0].textContent = "Prueba";

// // etiqueta getElementByTagName

// var items = document.getElementsByTagName("li");
// items[2].textContent = "Prueba 02";

// // query selector: class, id
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #000";

// var input = document.querySelector("input");
// input.value = "Hola mundo";

// var submit = document.querySelector('input[type="submit');
// submit.value = "Enviar";

// var item = document.querySelector(".list-group-item");
// items[2].style.color = "red";

// var titulos = document.querySelectorAll(".title");
// console.log(titulos);
// titulos[0].textContent = "Prueba";

// var impar = document.querySelectorAll("li:nth-child(odd");
// var par = document.querySelectorAll("li:nth-child(even");
// for (var i = 0; i < impar.length; i++) {
//   impar[i].style.backgroundColor = "#ccc";
//   par[i].style.backgroundColor = "#f4f4f4";
// }
// var itemList = document.querySelector("#items");

/****************************************
 *childNodes
 */
// console.log(itemList.childNodes);

/****************************************
 *children
 */
// console.log(itemList.children);
/****************************************
 *fristchild
 */

// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent='Prueba';

/****************************************
 *lastchild
 */
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Prueba";

/****************************************
 *ELEMENTOS HERMANOS
 */

/****************************************
 *previousSibling
 */
// console.log(itemList.previousSibling);

// /****************************************
//  *previousElementSibling
//  */
// console.log(itemList.previousElementSibling);

// /****************************************
//  *nextSibling
//  */
// console.log(itemList.nextSibling);

// /****************************************
//  *nextElementSibling
//  */
// console.log(itemList.nextElementSibling);

/****************************************
 *CREAR ELEMENTOS
 */

//  tagName
// var nuevoDiv = document.createElement("div");
// nuevoDiv.className = "hola";
// nuevoDiv.id = "div-hola";
// nuevoDiv.setAttribute("title", "Hola mundo");

// console.log(nuevoDiv);

// // crateTextNode
// var nuevoNodoText = document.createTextNode("Hola mundo");
// nuevoDiv.appendChild(nuevoNodoText);

// console.log(nuevoDiv);

// var contenedor = document.querySelector("header .container");
// console.log(contenedor);

// var h1 = document.querySelector("h1");
// console.log(h1);

// contenedor.insertBefore(nuevoDiv, h1);

/****************************************
 *EVENTOS
 */
// document.getElementById("boton").addEventListener("click", function () {
//   console.log("Click 2");
// });

// function hacerClick() {
//   console.log("Usted hizo click");
// }

/****************************************
 *80 CAMBIAR DISEÑO: FUNCION--> AGREGAR UN ELEMNTO A LA LISTA
 */

var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");

// para buscar elementos en una lista
var filtro = document.getElementById("filtro");
/**************************************************/

// Evento submit del formulario
form.addEventListener("submit", agregarItem);

// evento click de la lista
lista.addEventListener("click", eliminarItem);

// Evento del teclado en el campo del filtro
filtro.addEventListener("keyup", filtrarItems);

/******  funcion para agreagr un item a la lista: un registro*/

function agregarItem(e) {
  // cancelar el evento
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  var botonDel = document.createElement("button");
  botonDel.className = "btn btn-danger btn-sm float-right eliminar";
  botonDel.appendChild(document.createTextNode("X"));

  li.appendChild(botonDel);
  // console.log(li);
  lista.appendChild(li);
}

/******  funcion para eliminar un item a la lista: un registro*/

function eliminarItem(e) {
  if (e.target.classList.contains("eliminar")) {
    // preguntar si quiero o no eliminar
    if (confirm("Seguro que desea eliminar el elemento")) {
      // console.log("existe"); : verificar y dando click muestra el texto
      var li = e.target.parentElement;
      // console.log(li); ver si captura el elemento de la lista(item) dando click al boton
      lista.removeChild(li);
    }
  }
}

/******  FUNCION para buscar elemento de la lista*/
function filtrarItems(e) {
  // convertir en minuscula
  var texto = e.target.value.toLowerCase();
  // console.log(texto);  captura el tecto escrito en el cuadro de busqueda
  var items = lista.getElementsByTagName("li");
  // console.log(items); muestra a las listas llenadas

  // recorremos el arreglo, capturamos el item

  Array.from(items).forEach(function (item) {
    // capturamos al primer hijo que es el texto o item
    var itemNombre = item.firstChild.textContent;

    if (itemNombre.toLowerCase().indexOf(texto) != -1) {
      // mantener
      item.style.display = "block";
    } else {
      // nada
      item.style.display = "none";
    }
  });
}
