Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
        
    }
    return newArray
}

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
    .filter2(fragil)
    .filter2(caro));

