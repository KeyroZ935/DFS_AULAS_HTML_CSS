/*let nota1 = parseFloat(prompt("nota01"))
let nota2 = parseFloat(prompt("nota02"))
let nota3 = parseFloat(prompt("nota03"))

let media = (nota1 + nota2 + nota3) /3

if(media < 5){
    console.log(`Aluno(a) reprovado(a) com média ${media}`)
}else if(media >= 5 && media < 7){
     console.log(`Aluno(a) em recuperação com média ${media}`)
}else {
    console.log(`Aluno(a) aprovado(a) com média ${media}`)
}*/



/*let meses = parseint(prompt("Digite um numero de 1 a 12"))

if(meses === 1){
    alert (`Janeiro`)
}else if(meses === 2){
    alert (`Fevereiro`)
}*/

// let numero = parseInt(prompt("Digite um numero de 1 até 12"))

// if(numero === 1){
//     alert("O mês digitado foi: Janeiro")
// }else if (numero === 2){
//     alert("O mês digitado foi: Fevereiro")
// }else if (numero === 3){
//     alert("O mês digitado foi: Março")
// }else if (numero === 4){
//     alert("O mês digitado foi: Abril")
// }else if (numero === 5){
//     alert("O mês digitado foi: Maio")
// }else if (numero === 6){
//     alert("O mês digitado foi: Junho")
// }else if (numero === 7){
//     alert("O mês digitado foi: Julho")
// }else if (numero === 8){
//     alert("O mês digitado foi: agosto")
// }else if (numero === 9){
//     alert("O mês digitado foi: Setembro")
// }else if (numero === 10){
//     alert("O mês digitado foi: Outubro")
// }else if (numero === 11){
//     alert("O mês digitado foi: Novembro")
// }else if (numero === 12){
//     alert("O mês digitado foi: Dezembro")
// }


let numero = parseInt(prompt("Digite um numero de 1 até 12"))

switch (numero){
    case 1:
        alert("JAN")
        break;
    case 2:
        alert("FEV")
        break;
    case 3:
        alert("MAR")
        break;
    case 4:
        alert("ABR")
        break;
    case 5:
        alert("MAI")
        break;
    case 6:
        alert("JUN")
        break;
    case 7:
        alert("JUL")
        break;
    case 8:
        alert("AGO")
        break;
    case 9:
        alert("SET")
        break;
    case 10:
        alert("OUT")
        break;
    case 11:
        alert("NOV")
        break;
    case 12:
        alert("DEZ")
        break;
        default:
            alert("Mês invalido")
}