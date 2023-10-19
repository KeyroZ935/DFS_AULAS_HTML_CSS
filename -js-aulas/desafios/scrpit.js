/*utilizando a esrutura switch case, solicite ao usuario e coloque no prompt a condição:
caso digite progrmador apresentar no console "voce é um progrmador"
caso digite advogado " vc é um advogado"
engenheiro = "vc é um engenheiro"
qualquer outra opção "profissão nao encontrada"*/

let prof = prompt("Digite sua profissão")

switch (prof){
    case `programador`:
     alert("Você é um Programador")
     console.log("Você é um Programador")
     break;

    case `advogado`:
     alert("Você é um Advogado")
     console.log("Você é um Advogado")
     break;
  
        
    case `engenheiro`: 
     alert("Você é um Engenheiro")
     console.log("Você é um Engenheiro")
     break;

    default:
    alert("Profissão invalida")
    console.log("Profissão invalida")
}