Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i<this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar um arrau apenas com os preços

const obj = e => JSON.parse(e)
const precoObj = e => e.preco

let resultado = carrinho.map2(obj).map2(precoObj)
console.log(resultado);
