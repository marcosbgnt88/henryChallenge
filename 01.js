/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:

  var numeroMayor=0;
  var numeroMenor

  for(i =0; i<arr.length; i++){

    if (arr[i] >= numeroMayor){

      numeroMayor = arr[i]
    } else if (arr[i] < numeroMayor ){

      numeroMayor = numeroMayor;
    } else {

      console.log("no es un numero") 
      
    }
  }
  for(i =0; i<arr.length; i++){

    if (arr[i] >= numeroMenor){

      numeroMenor = numeroMenor
    } else if (arr[i] < numeroMayor ){

      numeroMenor = arr[i]
    } else {

      console.log("no es un numero") 
      
    }
  }

  return numeroMayor-numeroMenor;
  
};

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor