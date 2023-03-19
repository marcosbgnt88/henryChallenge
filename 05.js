/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:
  
  var nuevoArreglo = arreglo

  for (i=0; i < nuevoArreglo.length;i++){

    if (nuevoArreglo[i]=== num){

      nuevoArreglo.splice([i],1)

      
    }else { 
      console.log(" todo ok")

    }
  }

  return nuevoArreglo;
};

// No modifiques nada debajo de esta linea //

module.exports = buscaDestruye