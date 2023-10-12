console.log(5<=5)
console.log(5<5)
console.log(5>5)
console.log(5>=5)

console.log(5==5)
console.log(5!=5)
console.log(5=="5")
console.log(5==="5")
console.log(5!="5")
console.log(5!=="5")


console.log(true && true )
console.log(true && true )
console.log(false && true)
console.log(false && false)

console.log(true || true )
console.log(true || false)
console.log(false || true)
console.log(false || false)

let idade = 50;
console.log( `A idade é: ${idade}` )

// let a = 10;
//     b = 50;
//     c = 70;

//     console.log(a, b, c)
//     console.log(`As idades são: ${a} ${b} ${c}`)

// let age = prompt("digite a sua idade")
// alert(`Voce tem ${age} anos`)    

// Escrever um programa que solicite ao usuario o nome, em seguida o programa solicita os sobrenome. Após isso, o programa exibe no console a frase: "o nome complet é: "


// let name=prompt (" digite seu nome")
// let name2= prompt ("Seu sobrenome")
// console.log(`seu nome é: ${name} ${name2}`)

console.error("erro!")
console.warn("Voce foi avisado")


// let numero1 = prompt("digite um número:") 

// if(numero1 >= 18) {
//     console.log("Maior de idade")
// }

// if(numero1 < 18) {
//     console.log("Menor de idade")
// }

// let username =prompt("Qual seu usuario?")

// if(username == "Kaique"){
//     console.log("Salve Kaique na paz fio?")
// }else{
//     console.log("Usuário não cadastrado")
// }


// if(username ! "Kaique"){
// console.log("Usuario não cadastrado")
// }

// let numero1 = prompt("digite um número:") 

// if(numero1 >= 18) {
//     console.log("Maior de idade")
// }

// if(numero1 < 18) {
//     console.log("Menor de idade")
// }

//escreva um programa que solicite ao usuario que digite um numero qaulquer em seguda o programa deve solicitar que o usuario digite outro numer, depois disso o programa apresenta a soma dos dois numeros. Se essa soma for maior ou igual que 100 apresentar na tela a mensagem parcelamos em ate 10 vzes sem juros do contrario pagamento a vista 

// let num1 = parseInt(prompt("Digite um Numero"))
// let num2 = parseInt(prompt("Digite outro Numero"))

// if(num1 + num2 >= 100){
//     alert("Parcele até 10x")
// }else
// alert("pague a vista")


//uma professora gostaria de um programa que calculasse a média de duas provas. Primiero o programa deve solicitar o nome do aluno em seguida solicitar o resultado nota 1 e nota 2 e apos isso apresentar o resultado nome do aluno e a média final é:



let nome = prompt("Digite seu nome")
let nota1 = parseInt(prompt("Digite nota 1"))
let nota2 = parseInt(prompt("Digite nota 2"))
let soma = (nota1 + nota2) /2

 alert(`O aluno ${nome} ficou com a média: ${soma}`)
