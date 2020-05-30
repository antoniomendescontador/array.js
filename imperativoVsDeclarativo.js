const alunos = [
    {nome: 'joão', nota: 7.9},
    {nome: 'maria', nota: 9.2}
]


//Imperativa(menos reuso)
//a abordagem imperativa foca no "COMO FAZER" e não "O QUE FAZER"
let total1 = 0
for(let i = 0; i<alunos.length;i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length);


//Declarativa(mais reuso)
//a abordagem declarativa se preocupa com "O QUE FAZER"
//sendo o "COMO FAZER" deixado para a própria linguagem
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);
