/*Exercício 1

Um analista quer conseguir ver quantos gols 
cada um de seus 5 atacantes marcou nas últimas 5 
temporadas, e quer que você construa um código que 
mostre isso.

Crie um laco for que itere pelo array deixado no 
arquivo script.js, e em sequência itere pelo array 
que existe dentro do primeiro array. Você deve 
imprimir a temporada, e o número de gols, como 
no exemplo abaixo:

Jogador 1: 13, 15, 25, 34, 35
Jogador 2: 30, 48, 30, 12, 47*/

const gols = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for(let i = 0; i < gols.length; i++){

	for(let j = 0; j < gols[i].length; j++){
		console.log(`Tempgols ${j+1} = ${gols[i][j]}`);
    }
} 