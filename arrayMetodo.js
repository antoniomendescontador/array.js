const pilotos = ['Vettel', 'Alonso', 'Raikonnen', 'Massa']
pilotos.pop() //retira ultimo elemento
console.log(pilotos);
pilotos.push('Versttapen')
console.log(pilotos);
pilotos.shift() //remove primeiro elemento
console.log(pilotos);
pilotos.unshift('Hamiton') //inclui na primeira posição
console.log(pilotos);

//aplice pode adicionar ou remover elemento

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3,1)
console.log(pilotos);   

const algunsPilotos1 = pilotos.slice(2) //nova array gerado a partir desse método
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4) //nova array gerado a partir desse método
console.log(algunsPilotos2);



