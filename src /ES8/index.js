//ES8 June en 2018
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '------'));

//async - await
const helloWord = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Hello World'), 3000)
        } else {
            reject(new Error('Test Error'));
        }
    })
}

const hellowAsync = async() => {
    const hello = await helloWord();
    console.log(hello);
}

hellowAsync();

const anotherFuntion = async() => {
    try {
        const hello = await helloWord();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFuntion();