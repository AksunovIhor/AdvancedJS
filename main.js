'use strick';

//custom Bind
Function.prototype.customBind = function(thisArg, ...args){
    let symbol = Symbol("function");
    let object = Object.assign(Object.assign({}, thisArg), {[symbol] : this});

    return function(...res){
        return object[symbol](...args, ...res);
    };
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

    for ( let i in this ) {
        result[i] = compare(this[i], i, this);
    }

    return result.splice(0, this.length);
};

//custom Fillter
Array.prototype.customFillter = function (compare) {
    let result = [];

    for ( let i = 0; i <= this.length - 1; i++ ) {
        if (compare(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

//custom Reduce
Array.prototype.customReduce = function (compare, accum) {
    accum = accum || 0;

    for ( let i = 0; i < this.length; i++ ) {
        if ( this[i] !== null && this[i] !== undefined ) {
            accum = compare(this[i], accum);
            this.length++;
        }
    }
    
    return accum;
};

//fibonacci Iterator
let fibonachiIterator = {
    a: 0,
    b: 1,
    n: 10,
    [Symbol.iterator]() {
       let current = this.a;
       let next = this.b;
       let n = this.n;
       let arr = [current, next];
       return {
          next() {
             arr.push(arr[current] + arr[next++])
             current++;
             return {
                value: arr.length <= n ? arr : undefined,
                done: current > n,
             };
          }
       };
    }
 };

for(let num of fibonachiIterator){
    console.log(num);
}

function* fibonachiGenerator(n, current, next) {
    current = current || 0;
    next = next || 1;
 
    if (n == 0) {
       return current;
    }
 
    yield current
    yield* fibonachiGenerator(n - 1, next, current + next);
 };
 
let fn = fibonachiGenerator(10);

for(let f of fn){
    console.log(f);
}