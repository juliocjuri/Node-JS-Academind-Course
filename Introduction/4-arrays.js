
const hobbies = ['Knitting', 'Basketball']

console.log(hobbies)

const hobbies2 =  hobbies.map(hobby => 'Hobby ' + hobby) 
//A função map serve para modificar os valores da array (sem modificar a original)

//O parametro hobby da arrow function já recebe automaticamente o valor atual da array (hobbies[i])
console.log(hobbies2) 

//Obs.: Arrays são ponteiros
