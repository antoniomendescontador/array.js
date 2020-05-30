const filhas = ['maria', 'julia']
const filhos = ['isaac', 'pedro']

const todos = filhas.concat(filhos)
const todos2 = filhas.concat(filhos, 'dicio')

console.log(todos);
console.log(todos2);

console.log([].concat([1,2],[3,4],5, [[6,7]]));

