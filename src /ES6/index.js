//parametros por defectos agregados en Js

//antes de ecmascript 6

function newFunction(name, age, country) {
    var name = name || 'Manases';
    var age = age || 20;
    var country = country || 'El Salvador';

    console.log(name, age, country);
}


// ES6
function newFunctionTwo(name = 'Alberto', age = 20, country = 'El salvador') {
    console.log(name, age, country)
}

newFunctionTwo();
newFunctionTwo('Jorgue', 21, 'Guatemala');


let hello = "Hello";
let world = "World";

//antes
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ES6
let epicPhraseTwo = `${hello} ${world}`;
console.log(epicPhraseTwo);


//antes
let lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ullam animi suscipit asperiores culpa, ipsum, officia quos cumque blanditiis sed, excepturi vero rem laborum veritatis modi nulla ducimus nihil! Magnam.\n" +
    "otra frase epica.";


//ES6
let loremTwo = `otra frase epica que necesitamos
otra frase que es muy epica`;

console.log(lorem);
console.log(loremTwo);


let persona = {
    'name': 'Manases',
    'age': 20,
    'country': 'SV'
}

//antes
console.log(persona.name, persona.age);

//ES6
let { name, age, country } = persona;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

//unir diferentes elementos de []
let education = ['David', ...team1, ...team2];

console.log(education);

//ques let => elemento para arreglos y objetoiso

{
    var global = "Global Var";
}

{
    let Globallet = 'Global Let';
    console.log(Globallet);
}

console.log(global);

//constante
const a = 'b';

console.log(a);

//propiedad de objetos
let name = 'Manases';
let age = 32;

obj = { name: name, age: age };

//ES6
obj2 = { name, age };

console.log(obj);
console.log(obj2);

//otras funciones y las function arrow

const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesenia', age: 27 }
]


//ES6
let listOfname = names.map(item => console.log(item.name));

//antes 
let listOfNames = names.map(function(item) {
    return console.log(item.name);
})

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('Upsss!!');
        }
    })
}

helloPromise()
    .then(Response => console.log(Response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


//clases ES6

class calculator {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
    }
    suma(valorA, valorB) {
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;

    }
}

const calc = new calculator();
console.log(calc.suma(2, 2));

import { hello } from './module.js';

hello('Manases');

//generator 

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'Word';
    }
};

const generetorHello = helloWorld();
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);