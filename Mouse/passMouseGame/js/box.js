document.addEventListener('DOMContentLoaded', function() {
  // DOMContentLoaded garante que o código Js seja carregado somente quando o DOM esteja totalmente carregado!

  let squad = document.querySelector('.Box')
  //Neste caso, foi necessário mover a definição da variável squad para cima, antes da função enter()

  function enter() {
  const colors = ['green', 'pink', 'red', 'purple', 'blue', 'yellow', 'grey', 'white', 'aquamarine', 'chocolate', 'darkorange', 'fuchsia', 'cyan']
  const randomColors = colors[Math.floor(Math.random() * colors.length)]
  //A função Math.random() retorna um número aleatório de 0 a 1, ou seja, números decimais. A função Math.floor é usada encobrindo o Math.random para arredondar a numeração decimal para o seu número inteiro menor, ou seja, ela remove a parte do decimal e entrega um número inteiro, por exemplo: 3.6 -> 3, 4.4 -> 4, etc. A função Math.random() foi multiplicada com a const colors, que referencia uma lista array com cores diferentes, por que quando a const colors foi ligada com o método length, foi disponibilizado "por trás dos panos" o número referente a quantidade de coisas na lista array, ou seja: um número de 0 a 1 gerado pelo Math.random será múltiplicado por nesse caso o número 8, e para o número gerado não ser decimal e assim não falhar, a conta foi encoberta pela função Math.floor().

    squad.style.backgroundColor = randomColors

    let tamanhoSalvoCSS = getComputedStyle(squad)
    let LessWidth = parseInt(tamanhoSalvoCSS./*style.*/width)
    let LessHeight = parseInt(tamanhoSalvoCSS./*style.*/height)

    // A propriedade style retorna apenas as propriedades CSS definidas inline no elemento em si, não as propriedades definidas por classes CSS aplicadas ao elemento.

    // LessWidth e LessHeight são para armazenar a largura e altura do .Box padrão feita no CSS.

    LessWidth -= 0.5;
    LessHeight -= 0.5;

    squad.style.width = `${LessWidth}px`
    squad.style.height = `${LessHeight}px`
  }

  squad.addEventListener('mouseenter', enter)

// É necessário mover a definição da função ...() antes da adição do ouvinte de evento.
})

//ALGUMAS COISAS FORAM FEITAS COM A AJUDA DO CHAT GPT, mas nada copiado e colado. o chat gpt foi apenas utilizado como ferramenta de ESTUDO para entender o porque de algumas coisas como na definição do Math.random e Math.floor e como poderia MELHORAR o código ja feito antes.
//Tanto que se for escaniar no ChatGPTZero não irá encontrar nada!