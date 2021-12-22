// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 28;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
  
}

function suma(x, y) {
  return x + y;
  
}

function resta(x, y) {
  return x - y;
  
}

function multiplica(x, y) {
  return x * y;
  
}

function divide(x, y) {
  return x / y
  
}

function sonIguales(x, y) {
  if (x==y){
    return true
  }
  else {
    return false
  }
  
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length){
    return true
  } 
  else{
    return false
  }
}

function menosQueNoventa(num) {
  if (num < 90){
    return true
  }
  else {
    return false
  }
  
}

function mayorQueCincuenta(num) {
  if (num > 50){
    return true
  }
  else {
    return false
  }
  
}

function obtenerResto(x, y) {
  return x % y
  
}

function esPar(num) {
  if (num%2 == 0){
    return true
  }
  else {
    return false
  }
}

function esImpar(num) {
  if (num%2 != 0){
    return true
  }
  else {
    return false
  }
  
}

function elevarAlCuadrado(num) {
  return Math.pow(num,2);
}

function elevarAlCubo(num) {
  return Math.pow(num,3);
  
}

function elevar(num, exponent) {
  return Math.pow(num,exponent);
  
}

function redondearNumero(num) {
  return Math.round(num);
  
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
  
}

function numeroRandom() {
  random = Math.random();
  if (0 <= random <= 1){
    return random
  }
  
}

function esPositivo(numero) {
  if (numero<0){
    return 'Numero Negativo'
  }
  else if (numero>0){
    return'el numero es positivo'
  }
  else{
    return false
  }
  
}

function agregarSimboloExclamacion(str) {
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  return nombre + "" + apellido;
  
}

function obtenerSaludo(nombre) {
  return'Hola' + nombre;
  
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
  
}


function retornarPerimetro(lado){
  return lado * 4;
  
}


function areaDelTriangulo(base, altura){
  return (base * altura)/2

}


function deEuroAdolar(euro){
  return euro * 1.2;
  
}


function esVocal(letra){
  if (letra.length == 1){
    if (letra==a){
      return 'es vocal';
    }
    else if (letra==e){
      return 'es vocal';
    }
    else if (letra==i){
      return 'es vocal';
    }
    else if (letra==o){
      return 'es vocal';
    }
    else if (letra==u){
      return 'es vocal';
    }
    else if(letra.length >1)
      return 'Dato incorrecto'
  else {
    return'Dato incorrecto';
  }
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
