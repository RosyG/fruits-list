var orderList = document.getElementById("order-list"); /*Trayendo los elementos de html, al id unico de order-list */
var boton= document.getElementById("button");
var input= document.getElementById("li-new");
// IDEA: mandando a llamar al boton para que el user suba lo q ingresa y al input para que el user suba su info
/*Funcion que agrega eventos a la lista, el user mete fruta y boton para subir informacion*/
boton.addEventListener("click", listAdd);

function listAdd (evet) {
  event.preventDefault ();/*Paara que existe un flujo de la pag ya que cuando se recarga se corta el flujo, entonces siempre se hace cuando el comportamiento del evento es desconocido y no se tiene control*/
  var liNew= document.createElement("li");
  var liText= document.createTextNode(input.value);

  liNew.appendChild(liText);

  orderList.appendChild(liNew);
  input.value=" ";

}
