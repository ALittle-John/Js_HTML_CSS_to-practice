function calculoIMC() {

const calcPeso = document.querySelector('#Peso')
const calcAltura = document.querySelector('#Altura')
const res = document.querySelector('.resultTXT')
//querySelector está dizendo assim: Este aqui que estou apontando é qual irei utilizar;
//Mas agora deve-se pensar: Utilizar como?

let calcP = Number(calcPeso.value)
let calcA = Number(calcAltura.value)
let calcCalculo = calcP / (calcA * calcA)
//Removi a linha const calcCalculo = document.querySelector('.Calculo'), pois a variável calcCalculo não precisa referenciar o botão de cálculo. Em vez disso, ela deve ser usada para armazenar o cálculo do IMC.
res.innerHTML = `<p>Seu IMC atual é de ${calcCalculo.toFixed(3)}</p>`
}