//---------------------variables-----------------//
/*
let age = 30;
age = 31;
console.log(age);
let score;
score = 10;
console.log(score)*/
//-----------------------Data types-------------//
/*const name = 'Gaji';
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;
console.log(typeof isCool);*/
//---------------------------String Concatenation-----------//
/*
const name = 'Gaji';
const age = 30;
console.log('My name is' + name + 'and i am' + age);
//template string
console.log('My name is ${name} and i am ${age}');
const hello = 'My name is ${name} and i am ${age}';
console.log(hello);*/
//-------------------string properties/methods------------//
/*
const g = 'tech,comp,game';
const s = 'hello world';
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''))//spliting content
console.log(g.split(','))*/
//-------------------------Arrays-----------------------//
/*
const fruits = ['apples', 'oranges', 'pear', 'pineapple'];
console.log(fruits)
console.log(fruits[0]);
fruits[4] = 'grapes'
console.log(fruits);
fruits.push('melon');//appropriete method for adding items in a list to the end
console.log(fruits)
fruits.unshift('berry'); //''----------------''-----------''
console.log(fruits)
fruits.pop();
console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('melon'))*/
//------------------------Object-literal----------------//
const person = {
    firstName: 'Abraham',
    lastName: 'Gaji',
    age: 30,
    hobbies: ['games', 'anime', 'movies', 'exploring'],
    adress: {
        street: 'y16 Osu... st',
        city: 'jtwn',
        state: 'Plateau',
    }
}

console.log(person.firstName, person.lastName)
console.log(person.hobbies[1]);
console.log(person.adress.street);
const { firstName, lastName, } = person;
console.log(lastName)
person.email = 'gajiabrahamali@gmail.com';//adding email
console.log(person)
//----------------array of objects----------//
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'meeting the boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'check up',
        isComplete: false
    },
]
console.log(todos);
console.log(todos[1].text)
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);// convertint to json format for sending to a server
//-----------------loops----------------------------//
//for
for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log('for loop Number: ${i}');
}
//while
let i = 0;
while (i < 10) {
    console.log(i);
    // console.log('while loop Number: ${i}');
    i++;
}
//looping through arrays using forEach,map,filter
for (let todo of todos) {
    console.log(todo.text);
}
// high order iteration
todos.forEach(function (todo) {
    console.log(todo.text);
});
//map
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);
//filter
const todoComplete = todos.filter(function (todo) {
    return todo.isComplete === true;
});
console.log(todoComplete);

const todoCompleted = todos.filter(function (todo) {
    return todo.isComplete === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoComplete);
