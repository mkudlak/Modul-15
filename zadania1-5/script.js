//ZADANIE 1
//Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.
console.log("Zadanie 1");
let first = "Hello";
let last = "World";

console.log(`${first} ${last}`); //  ` nie to " '

console.log("________");
//ZADANIE 2
//Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b
console.log("Zadanie 2");
//czy jak definiuje powyzej const a i b = 1, dlaczego potem w const nie łapie wartosci b? czy dlatego ze w const multipluy () wewnatrz to co innego (parametr funckji?)
const multiply = (a, b = 1) => {
  return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(5));

console.log("________");
//ZADANIE 3
//Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane
console.log("Zadanie 3");

const average = (...theArgs) => {
	const arrayLength = theArgs.length;
  let sumOfValue = 0;
  
  for(let value of theArgs) {  
  	sumOfValue += value;
  }
  
  return sumOfValue / arrayLength;    
}

console.log(average(1, 3, 6, 6));

console.log(average(1));
console.log(average(1, 3));


console.log("________");
//ZADANIE 4 
//Przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

console.log("________");
//ZADANIE 5 


const alien = [1, 4, 'Iwona', false, 'Nowak'];

// destrution of Array
const [a, b, firstName, c, lastName] = alien;

console.log(firstName, lastName);

//podejrzewam ze rozwiązanie jest inne ;P 