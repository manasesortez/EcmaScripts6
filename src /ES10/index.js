//ES10

let arrays = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(arrays.flat(2))

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '   hello wordl';

console.log(hello);
console.log(hello.trimStart());

let hello = 'hello Wordl         1';
console.log(hello);
console.log(hello.trimEnd());

//add solo error en el try sin ser ingresado
try {

} catch {
    error;
}

let entries = [
    ["name", "oscar"],
    ["age", 20]
];
console.log(Object.fromEntries(entries));

//object type simbol

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);