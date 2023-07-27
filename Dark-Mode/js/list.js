//Primeiro jeito:
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('DarkMode')

  btn.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked)
  })
});

// O ouvinte change é usado para monitorar a mudança de estado do elemento do tipo checkbox.
// A partir o (e), é o mesmo que adicionar uma função, o qual diz que: esta função anônima com o parâmetro event vai acessar a tag <body> e suas classes CSS. o "e.target.checked" é a variável responsável por verificar se o checkbox está marcado ou não... Ao ser marcado, o método toggle é responsável pela troca / por alterar a tag <body> adcionando ou removendo a classe dark.
// É necessário  parâmetro Event!

//------------------------------------------------------

//Segundo jeito:

// document.addEventListener('DOMContentLoaded', function() {
//   const btn = document.getElementById('DarkMode')

//   btn.addEventListener('change', () => {
//     document.body.classList.toggle('dark', btn.checked)
//   })
// });

// Neste caso o (e) e o e.target não precisam ser referênciados.

//------------------------------------------------------

//Terceiro jeito:

// document.addEventListener('DOMContentLoaded', function() {
//   const btn = document.getElementById('DarkMode')

//   btn.onchange = function(e) {
//     document.body.classList.toggle('dark', e.target.checked);
//   }
// })