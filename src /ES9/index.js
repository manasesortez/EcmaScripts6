//all in objects 
let obj = {
    'name': 'Manases',
    'age': 20,
    'country': 'SV'
};


let { name, ...all } = obj;
console.log(name, all);

let obj = {
    'name': 'Manases',
    'age': 20,
};

let obj1 = {
    ...obj,
    'country': 'SV',
}

console.log(obj1);

const HelloWord = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(function() {
                resolve('Hello Wordl')
            }, 3000)

        } else {
            reject(new Error('test error'))
        }
    })
}

HelloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))