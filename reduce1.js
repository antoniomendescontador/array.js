const alunos = [
    {nome:'joão', nota: 7.6, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'pedro', nota: 9.8, bolsista: false},
    {nome:'jorge', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador+atual  
})
console.log(resultado);
