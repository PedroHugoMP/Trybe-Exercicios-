let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = null
let media = null
let comparação = null
let Impopa = null

numbers.sort((a, b) => a - b)

for(let index = 0; index < numbers.length; index +=1){
    //console.log(numbers[index])
     soma += numbers[index]
}
    media = soma/numbers.length

console.log("a soma de todos os numeros e "+soma)
console.log("a media dos numeros do array e "+media)

if( media > 20){
    console.log("Valor maior que 20")
}else{
    console.log("Valor menor ou igual a 20")
}
for (let index = 0; index<numbers.length; index+=1){
    comparação = numbers[index]
    if (comparação<numbers[index]){
        comparação = numbers[index]
    }
   
}
console.log(comparação)

let count = 0
for (let index = 0; index<numbers.length;index+=1){
    Impopa = numbers[index]%2
    if(Impopa !== 0){
    count += 1
   }
}
if(count>0){
    console.log("seu array tem "+ count +" numeros impares")
}else{
    console.log("seu array não tem numeros impares")
}
