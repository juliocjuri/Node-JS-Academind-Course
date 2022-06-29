const person = { 
     name: 'Julio',
     age: 18,
     greeting: () => {
          console.log("Helo, " + this.name + '!');
     } //Desse modo, a arrow function irá se referir a this com o escopo global do node
};

const hobbies = ['knitting', 'basketball']

const copiedPerson = {...person}
const copiedHobbies = [...hobbies] //O spread operator faz com que sejam copiados todos os valores de um objeto para o outro


console.log(copiedPerson)

const agesInArray = (...args) => { //Aqui utilizamos o rest operator, que simplesmente forma uma array com quantos parametros necessários
     return args;
}

const ages = agesInArray(12, 13, 20)

console.log(ages)