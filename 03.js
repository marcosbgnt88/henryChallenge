/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function bienvenidoSr(persona) {
  // La funcion recibe un objeto "persona".
  // de la forma: 
  // {
  //  nombre: 'Lionel
  //  apellido: 'Messi',
  //  invitado: true
  //  }
  // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
  // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
  // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
  // "Bienvenido Sr. Messi".
  // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
  // "Hola Lionel, tu mesa está lista".
  // En caso de que no tenga la propiedad "invitado" retornar:
  // "Disculpe señor, no está invitado a la fiesta".
  //
  // Tu código:

  var keysPersona = Object.keys(persona);
  var valuePersona = Object.values(persona);
  var tieneNombre = keysPersona.includes("nombre");
  var indexNombre = keysPersona.indexOf("nombre")
  var tieneApellido = keysPersona.includes("apellido");
  var indexApellido = keysPersona.indexOf("apellido")
  var tieneInvitacion = keysPersona.includes("invitado")
  
  
  if (tieneNombre && tieneApellido && tieneInvitacion){

     return `${valuePersona[indexNombre]} ${valuePersona[indexApellido]}, un gusto tenerlo nuevamente! Bienvenido`

  } else if (tieneNombre && !tieneApellido && tieneInvitacion){

    return `Hola ${valuePersona[indexNombre]}, tu mesa está lista`

  } else if (!tieneNombre && tieneApellido && tieneInvitacion){

    return `Bienvenido Sr. ${valuePersona[indexApellido]}`
  } else if ( !tieneInvitacion){

    return "Disculpe señor, no está invitado a la fiesta"
  }


}


// No modifiques nada debajo de esta linea //


module.exports = bienvenidoSr