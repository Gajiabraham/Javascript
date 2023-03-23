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
//---------------------Conditionals------------------//
const x = 20;
if (x == 10) {
    console.log('x is 10')
}
else {
    console.log('x is NOT 10');
}
const y = 10;
if (y === 10) {
    console.log('y is 10');
} else if (y > 10) {
    console.log('y is greater than 10');
} else {
    console.log('y is less than 10')
}
//turnuring oparator
const z = 10;
const color = z > 10 ? 'red' : 'blue'
console.log(color);
//switches
switch (color) {
    case 'red':
        console, log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue')
}
//-------------------------functions----------------//
/*
function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(6, 6))*/
const addNums = (num1, num2) => {
    return num1 + num2;
}
console.log(addNums(6, 6))//gives same ans with the above function
//constructor function
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
// Instantiate object
const person1 = new Person('Ab', 'Gaji', '4-3-1980')
console.log(person1.dob)*/
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullYear = function () {
        return '${}';
    }
}
// Instantiate object
const person1 = new Person('Ab', 'Gaji', '4-3-1980')
console.log(person1.getBirthYear());*/
//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return '${this.firstName} ${this.lastName}';
    }
}

const person1 = new Person('Ab', 'Gaji', '4-3-1980');
console.log(person1.getFullName());
//-----------------DOM--------------------------//
//single element
console.log(document.getElementById('my-form'))
console.log(document.querySelector('.container'))
//Multi element
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))
// manipulating DOM
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove()
/*ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'green';

btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'

});*/
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
myForm.addEventListener('submit', onSubmit)
function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value)
    if (nameInput.value === '' || emailInput.value === '') {
        //alert('please enter fields');
        msg.innerHTML = 'please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('${nameInput.value}:${emailInput.value}'))

        userList.appendChild(li);
        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}