function calculoIMC() {
  const calcPeso = document.querySelector("#Peso");
  const calcAltura = document.querySelector("#Altura");
  const res = document.querySelector(".resultTXT");

  let calcP = Number(calcPeso.value);
  let calcA = Number(calcAltura.value);
  let calcCalculo = calcP / (calcA * calcA);

  res.innerHTML = `<p>Seu IMC atual é de ${calcCalculo.toFixed(3)}</p>`;
}
