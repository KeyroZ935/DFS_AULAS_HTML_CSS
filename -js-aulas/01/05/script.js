function minhaFunção() {
    console.log("Testando")
}

minhaFunção()
minhaFunção()
minhaFunção()
minhaFunção()
minhaFunção()
minhaFunção()
minhaFunção()
minhaFunção()
minhaFunção()

const minhaFunçãoEmVariavel = function (){
    console.log("Função em Váriavel")
}

minhaFunçãoEmVariavel()
minhaFunçãoEmVariavel()
minhaFunçãoEmVariavel()
minhaFunçãoEmVariavel()
minhaFunçãoEmVariavel()

function funçãoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funçãoComParametro("DEVFull - Boa noite!")
funçãoComParametro("DEVFull - Boa Tarde!")
funçãoComParametro("DEVFull - Bom Dia!")

const a = 10
const b = 20
const c = 30
const d = 40

function soma (n1, n2){
    return n1 + n2
}

const resultado = soma(a, b)
console.log(resultado)

const resultado1 = soma(b, c)
console.log(resultado)

const resultado2 = soma(d, c)
console.log(resultado)

//Subtração
function subtração (n1, n2){
    return n1 - n2
}

const result = soma(a, c)
console.log(result)

const testeArrow = () => {
    console.log("Sou uma Arrow function")
}

testeArrow()

//Par ou Ìmpar
const parOuimpar = (n) =>
{
    if (n % 2 === 0){
        console.log("Par")
        return
    }
    console.log("Impar")
}

parOuimpar(10)
parOuimpar(7)
parOuimpar(157)

//Raiz Quadrada
const raizQuadrada = (x) =>{
    return x * x
}

console.log(raizQuadrada(7))
console.log(raizQuadrada(5))
console.log(raizQuadrada(10))
console.log(raizQuadrada(9))

const multiplicacao1 = function (n, m){
    if (m === undefined){
        return n * 2
    }else{
        return n * m
    }
}
console.log(multiplicacao1(4, 4))
console.log(multiplicacao1(4))
console.log(multiplicacao1(7, 3))















