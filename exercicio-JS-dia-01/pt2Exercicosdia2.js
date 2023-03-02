let num1 = 3
let num2 = 5
let num3 = 7
let teste 
//---------par
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    teste = true
    console.log(teste)
}else{
    teste = false
    console.log(teste)
}


//-------impar


if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    teste = true
    console.log(teste)
}else{
    teste = false
    console.log(teste)
}

//------calc lucro 
let ValorProduto = 10
let ValorVenda = 15
let imposto = (ValorProduto*20)/100
let lucro

if (lucro < 0){
    console.log("valor indeterminado")
}else{
    lucro = ValorProduto + ValorVenda - imposto
    console.log("o lucro na venda de mil produtos sera "+ lucro *1000)
}
//------calc salario 

let salario = 5189.83
let inss
let ir

//inss
if (salario <= 1556.94){
    inss = (salario * 8)/100
}else if (salario >= 1556.95 && salario <= 2594.92){
    inss = (salario*9)/100
}else if(salario>=2594.93 && salario <= 5189.82){
    inss = (salario*11)/100
}else if(salario > 5189.82) {
    inss = 570.88
}

//ir 
if (salario <= 1903.98){
    ir = 0
}else if (salario >= 1903.99 && salario <= 2826.65){
    ir = (salario * 7.5)/100
}else if (salario >= 2826.66 && salario <= 3751.05){
    ir = (salario * 15)/100
}else if (salario >= 3751.06 && salario <= 4664.68){
    ir = (salario * 22.5)/100
}else {
    ir = (salario * 27.5)/100
}
let salarioLiquido = salario - inss - ir
console.log("Seu salario bruto e "+ salario+" seu salrio Bruto e "+ salarioLiquido)