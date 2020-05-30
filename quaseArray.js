const quaseArray = {0: 'tony', 1: 'lita', 2: 'isaac'}
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);

const meyArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meyArray );


