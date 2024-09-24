let valores = [2, 5, 5, 3, 8, 44, 2, 5.6, 3.2, 20]
let acumuloNota = 0

valores.forEach((nota) => {
  acumuloNota += nota
})
const media = acumuloNota / valores.length

console.log(`A média calculada é ${media}`)
