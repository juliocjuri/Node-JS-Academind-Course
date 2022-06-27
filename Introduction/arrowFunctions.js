let name = 'Max'
let age = 36;
let hasHobbies = true;

const input = (userName, userAge, userHasHobbies) => { //You can use the "this" keyword
     //A keyword 'this' se refere a quem está executando uma certa função

     //Utilizando a arrow function, este problema é resolvido. this, utilizando a arrow function
     //irá se referir ao contexto primário da função

     
     return ('Name is: ' 
     + userName 
     + ', User age: ' 
     + userAge 
     + ', User has hobbies: ' 
     + userHasHobbies);

     
}

const addOne = (a) => ++a; //Only one argument doesn't require parenthesis. Only one statement doesn't require return

console.log(addOne(2))

const addRandom = () => 1 + 2;

console.log(addRandom())

console.log(input(name, age, hasHobbies));
