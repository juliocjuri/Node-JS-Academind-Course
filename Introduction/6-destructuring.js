const person = { 
     name: 'Julio',
     age: 18,
     greeting: () => {
          console.log("Helo, " + this.name + '!');
     } //Desse modo, a arrow function irá se referir a this com o escopo global do node
};

const getName = ({name}) => { //Aqui eu só estou falando que quero apenas a propriedade name. O resto das propriedades serão ignoradas
     //Na variável 'name' estou colocando o valor do objeto.nome
     console.log(name)
}

const hobbies = [ 'knitting', 'basketball' ]

const [ hobby1, hobby2 ] = hobbies;

console.log(typeof(hobby1), hobby1)

getName(person)