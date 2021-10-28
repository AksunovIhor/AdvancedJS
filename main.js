'use strick';

//custom Bind
Function.prototype.customBind = function(thisArg, ...args){
    let symbol = Symbol("function");
    let object = Object.assign(Object.assign({}, thisArg), {[symbol] : this});

    return function(...res){
        return object[symbol](...args, ...res);
    }
};

//custom Call
Function.prototype.customCall = function(thisArg, ...args){
    let symbol = Symbol("function");
    let object = Object.assign(Object.assign({}, thisArg), {[symbol] : this});

    return (function(...res){
        return object[symbol](...args);
    })();
};

//Array methods
//custom ForEach
Array.prototype.customForEach = function (compare) {
    for (let i = 0; i < this.length; i++) {
        compare(this[i], i, this);
    }
};

//custom Map
Array.prototype.customMap = function (compare) {
    let result = [];

    for (let i in this) {
        result[i] = compare(this[i], i, this);
    }

    return result.splice(0, this.length);
};

//custom Fillter
Array.prototype.customFillter = function (compare) {
    let result = [];

    for (let i = 0; i <= this.length - 1; i++) {
        if (compare(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

//custom Reduce
Array.prototype.customReduce = function (compare, accum) {
    accum = accum || 0;

    for (let i = 0; i <= this.length - 1; i++) {
        accum = compare(this[i], accum);
    }
    
    return accum;
};

//fibonacci Iterator
getFibonachiNumbers