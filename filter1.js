const produtos = [
    {nome: 'Notebook', price: 2499, fragil: true},
    {nome: 'ipaD Pro', price: 8000, fragil: true},
    {nome: 'copo de vidro', price: 12.49, fragil: true},
    {nome: 'Copo de Plástico', price: 18.99, fragil: false}

]

const fragil = p => p.fragil
const caro = p => p.price > 500

console.log(produtos.filter(function(p){
    return false
}));

console.log(produtos
    .filter(fragil)
    .filter(caro));
