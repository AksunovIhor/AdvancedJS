'use strick';

//custom Bind, Call
Function.prototype.customBind = function(thisArg, ...args){
    let object = Object.assign({}, thisArg);
    object.func = this;

    return function( ...res ) {
        return Object.assign(...args, ...res);
    }
};

Function.prototype.customCall = function(thisArg, ...args){
    let object = Object.assign({}, thisArg);
    object.func = this;

    return object.func(...args);
};

//Array methods
Array.prototype.customForEach = function (compare) {
    for ( let i = 0; i < this.length; i++ ) {
        if ( this[i] !== null && this[i] !== undefined ) {
            compare(this[i], i, this);
        }
        
    }
};

Array.prototype.customMap = function (compare) {
    let result = [];

    for ( let i = 0; i < this.length; i++ ) {
        if ( this[i] !== null && this[i] !== undefined ) {
            result[i] = compare(this[i], i, this);
        }
    }
    return result.splice(0, this.length);
};

Array.prototype.customFillter = function (compare) {
    let result = [];

    for ( let i = 0; i < this.length; i++ ) {
        if ( this[i] !== null && this[i] !== undefined ) {
            if ( compare(this[i], i, this) ) {
                result.push(this[i]);
            }
        }
    }

    return result;
};

Array.prototype.customReduce = function (compare, accum) {
    accum = accum || 0;

    for ( let i = 0; i < this.length; i++ ) {
        if ( this[i] !== null && this[i] !== undefined ) {
            accum = compare(accum, this[i], i, this);
        }
    }
    
    return accum;
};

//fibonacci Iterator, Generator
let fibonacciIterator = {
    firstNumber: 0,
    secondNumber: 1,
    fibonacciNumber: 7,
    [Symbol.iterator]() {
        let prev = this.firstNumber;
        let next = this.secondNumber;
        let amountNumber = this.fibonacciNumber;
        let fibonacciArray = [prev, next];

        return {
            next() {
                fibonacciArray.push(fibonacciArray[prev] + fibonacciArray[next++]);
                prev++;

                return {
                    value: fibonacciArray.length <= amountNumber ? fibonacciArray : undefined,
                    done: prev > amountNumber,
                };
            }
        };
    },
};

let fibonacciGenerator = {
    firstNumber: 0,
    secondNumber: 1,
    *[Symbol.iterator](amountNumber){
        let fibonacciNumbers = [0, 1].splice(0, amountNumber);

        for ( let i = 2; i < amountNumber; i++ ) {
            fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
        }

        yield fibonacciNumbers;
    }
};

/*function* fibonacciGenerator2(amountNumber) {
    let fibonacciNumbers = [0, 1].splice(0, amountNumber);

    for ( let i = 2; i < amountNumber; i++ ) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }

    yield fibonacciNumbers;
}*/