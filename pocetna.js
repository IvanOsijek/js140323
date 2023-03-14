"use strict";
// 1
var a = 78;
var b = 34;
//delete a;
//delete window.b;
var myObject = {property1:1, proprety2:2, property1:1};

//2
var users = [
    { name: 'Fabio', surname: 'Biondi'},
    { name: 'Mario', surname: 'Rossi'},
];
const user = { name: 'Lorenzo', surname: 'Verdi'};

var noviUseri = [...users, user];
users = noviUseri;


console.log(users[2].name);


//3
for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log('The number is ' + i);
    }, 1000);
    
}

//console.log(i);