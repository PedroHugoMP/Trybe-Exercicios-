//-------------variaveis--------------------
let a = 35
let b = 2

//------------------------ operações aritimeticas simples ------------------------
//-soma
let soma = a + b
console.log ("o resultado da sua soma e "+soma)
//-subtração
let subtração = a - b
console.log ("o resultado da sua subtração e "+subtração)
//-multiplicação
let multiplicação = a * b
console.log ("o resultado da sua multiplicação e "+multiplicação)
//-divisão
let divisão = a / b
console.log ("o resultado da sua divisão e "+divisão)
//-modulo
let modulo = a % b
console.log ("o resultado da sua modulo e "+modulo)

//------------parte 2------------------
//------------compara dois-------------
let numero1 = 10
let numero2 = 20

if(numero1>numero2){
    console.log("O maior Numero e "+ numero1)
}else{
    console.log("O maior numero e "+numero2)
}

//-----------compara tres--------------
let num1 = 30
let num2 = 10
let num3 = 20

if (num1 > num2 && num1 > num3){
    console.log("O maior numero e "+ num1)
}else if (num2 > num1 && num2 > num3){
    console.log("O maior numero e "+ num2)
}else {
    console.log("O maior numero e "+ num3)
}

//----------positivo ou negativo----------

let num = 1

if (num >0 ){
    console.log("This number is positive")
}else if (num < 0){
    console.log("this number is negative")
}else{
    console.log("It's zero")
}

//-----triangulo---------

let LadoA = 60
let LadoB = 60
let LadoC = 60
let SomaDosLados = LadoA+LadoB+LadoC

if (LadoA < 0 || LadoB < 0 || LadoC < 0){
    console.log("Possui um numero menor que zero logo não e valido")
}else if(SomaDosLados === 180){
    console.log("isso e um triangulo")
}else {
    console.log("Isso não e um triangulo")
}

//-----peças de xadrez--------
let peca = "BISPO"

switch (peca.toLowerCase()){
    case "torre":
    console.log("anda reto")
    break
    case "cavalo":
        console.log("Anda em L")
        break
        case "bispo":
            console.log("anda na diagonal")
            break
}

//-----media nota-----
let Nota1 =90
let Nota2 =80
let Nota3 =100
let media = (Nota1+Nota2+Nota3)/3

if (media < 0 || media > 100){
    console.log("Nota incopativel")
}else if (media>=90){
    console.log("Parabens voce tirou um A")
}else if(media >= 80){
    console.log("muito bem sua nota e B")
}else if (media >= 70){
    console.log("você conseguiu sua nota e C")
}else if (media >= 60){
    console.log("você foi aprovado sua nota e D")
}else if (media >=50){
    console.log("passou raspando, sua nota e E")
}else {
    console.log("Estude mais da proxima sua Nota e F")
}
