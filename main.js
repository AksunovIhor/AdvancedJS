'use strick';

Function.prototype.customBind = function(thisArg, ...args){
    return function(){
        
    }
};

//bind call
function f(a,b,c){
    return this.a + this.b + a + b + c;
}
let obj = {
    a : 3,
    b : 10,
};

let ff = f.bind(obj, 1, 4, 7);
ff();

function f1(a,b,c){
    return this.a + this.b + a + b + c;
}
let obj1 = {
    a : 3,
    b : 10,
};

let ff1 = f1.call(obj1, 1, 4, 7);
ff1();
