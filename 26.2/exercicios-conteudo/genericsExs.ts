/*
function getArray(items : any[]) : any[] {
  return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25);
stringArray.push("Rabbits");
numberArray.push("isto não é um número");
stringArray.push(30);
console.log(numberArray);
// Saída:  [5, 10, 15, 20, 25, "isto não é um número"]
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]

*/

/* TRANSFORMANDO */

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação

/*
function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");
*/

/*
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber = processor(100, "Olá");
// let returnString = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".
*/

class ProcessIdentity<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
  }
  getIdentity() : T {
      console.log(this._message);
      return this._value
  }
}

let processor = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity();  // imprime "Olá" e retorna 100
