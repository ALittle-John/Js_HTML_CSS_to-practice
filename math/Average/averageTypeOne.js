let valores = [2, 5, 5, 3, 8, 44, 2, 5.6, 3.2, 20]

const calcularMedia = (notas) => {
  const soma = valores.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0)
  return soma / valores.length
}

const media = calcularMedia(valores)
console.log(`A média calculada é ${media}`)
