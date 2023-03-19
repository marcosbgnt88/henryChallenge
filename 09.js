/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// EN ESTE EJERCICIO PASAN 3 EXPECT SON LOS QUE INDICAN QUE NO UTILIZAS LOS METODOS (values, keys, entries)
function intercambio(objeto) {
  // Devolver un objeto con los pares clave-valor intercambiados.
  // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
  // NOTA: No utilizar métodos de Object (values, keys, entries);
  //
  // Tu código:

  var keys = []
  var values = []
  var nuevoObjeto = {};
  for (var prop in objeto){

    keys.push (prop);
    values.push(objeto[prop]);
  
  }
  for (i = 0 ; i < keys.length;i++){
    nuevoObjeto[values[i]] = keys[i];

  }

  return  nuevoObjeto;
}

// No modifiques nada debajo de esta linea //

module.exports = intercambio