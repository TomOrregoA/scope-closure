// variables
var a; // declarando
var b = 'b'; // declarando y asignando
b = 'bb'; // reasignación
var a = 'aa'; // redeclaración


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();