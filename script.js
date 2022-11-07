/*
function saludo() {
  console.log("Hola Curso Frontend USACH");
}
*/
//saludo()
/*
const saludoNuevo = (numero) => {
  // condicion de salida
  if (numero === 101) return;
  console.log("Este es el numero: " + numero);
  saludoNuevo(numero + 3)
}
*/
//saludoNuevo(n)


// Condicionales
// Operadores de Comparación (Type Coertion => Conversión de tipos)
// == igualdad
// === igualdad estricta (Comprobar Tipo de dato y valor)
// != diferente
// !== diferente estricto
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
const n = 1

// if (n === 1) console.log("Curar el cancer");
/*
if (n === 1) {
  console.log("Curar el cáncer");
} else if ( n === 1) {
  console.log("No curamos el cáncer");
} else {
  console.log("No se cumple ninguna condición previa");
}
if (n === 1) console.log("Curar el cáncer");
else if (n === 1) console.log("No curamos el cáncer");
else console.log("No se cumple ninguna condición previa"); 
*/


const paciente = "sano"

const tratamiento = () => {
  if (paciente === "sano") {
    console.log("No se necesita tratamiento");
  } else if (paciente === "enfermo") {
    console.log("Se necesita tratamiento");
  }
  paciente === "sano"
    ? console.log("No se necesita tratamiento")
    : console.log("Se necesita tratamiento");
}

// Array of Objects with Marvel Characters
const marvelCharacters = [
  {
    name: "Spiderman",
    realName: "Peter Parker",
    height: 1.78,
    weight: 75,
    power: 100,
    universe: "Marvel",
  },
  {
    name: "Iron Man",
    realName: "Tony Stark",
    height: 1.88,
  }
]

for (let i = 1; i <= 100; i++) {
// console.log("Este es el numero: " + i);
}

const naturalNumbers = [1, 2, 3, 4, 5, 3, 6, 7, 8, 9, 10]

for (let i = 0; i < naturalNumbers.length; i++) {
  //console.log("El numero natural es: ", naturalNumbers[i]);
}
for (let number of naturalNumbers) {
  //console.log("Este es el numero: " + number);
}

for (let personaje of marvelCharacters) {
  //console.log("Personaje es: ", personaje.name);
}

marvelCharacters.forEach((personaje, index, array) => {
  // console.log("El arreglo es: ", array);
  // console.log("El índice es: ", index);
  //console.log("Personaje es: ");
})

const marvelUpper = marvelCharacters.map((personaje) => {
  // personaje.name = personaje.name.toUpperCase()
  // console.log("Personaje es: ", personaje.name);
  // return personaje.name.toUpperCase()
});

// console.log("marvelCharacters: ", marvelCharacters);
// console.log("marvelUpper: ", marvelUpper);

const numberFiltered = naturalNumbers.filter(number => number)

console.log("numberFiltered: ", numberFiltered);