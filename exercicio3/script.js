/**Exercício 3

Crie um array com 5 strings. Faça um programa que percorra 
este array e imprima as strings em formato de ranking, como 
no exemplo abaixo:

Utilize o for...of para resolver

//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA",
"Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil" */

const paises =["Rússia", "Canadá", "China", "EUA",
"Brasil"];

for(let pais of paises){
	console.log(` ${paises.indexOf(pais)+1} - ${pais}°`); //será impresso o valor
     //de cada item do array: 14, 67 ...
}