const alunos = [
    {nome:'joão', nota: 7.6, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'pedro', nota: 9.8, bolsista: false},
    {nome:'jorge', nota: 8.7, bolsista: true}
]

//Dasafio: todos os alunos são bolsistas
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista));

//Dasafio: alguns alunos são bolsistas
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
