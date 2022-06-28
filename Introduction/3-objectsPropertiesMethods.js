const person = { 
     name: 'Julio',
     age: 18,
     greeting: () => {
          console.log("Helo, " + this.name + '!');
     } //Desse modo, a arrow function irá se referir a this com o escopo global do node
};


person.greeting()

const secondPerson = { 
     name: 'Julio',
     age: 18,
     greeting() {
          console.log("Helo, " + this.name + '!');
     } //Desse modo, ira funcionar
};

secondPerson.greeting();