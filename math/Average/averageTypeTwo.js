let valores = [2, 5, 5, 3, 8, 44, 2, 5.6, 3.2, 20]

let soma = 0

for (let i = 0; i < valores.length; i++) {
  soma += valores[i];
}
const media = soma / valores.length

console.log(`A soma dos valores do array é ${soma}`)
console.log(`A média calculada é ${media}`)
