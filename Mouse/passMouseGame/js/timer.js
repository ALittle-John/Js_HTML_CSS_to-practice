document.addEventListener('DOMContentLoaded', function() {

  const squadAgain = document.querySelector('.Box')
  const countdown = document.querySelector('.Inumber')
  let seconds = 30
  let TimeInterval

  function UpdadeCountdown() {
    seconds--;
    countdown.textContent = seconds

    if (seconds <= 0) {
      clearInterval(TimeInterval)
    }
    // No if diz que se o seconds chegar a 0 irá parar a contagem.
  }

  function StartCountdown() {
    TimeInterval = setInterval(UpdadeCountdown,  1000)
    //setInterval com 1000 diz que demora 1s para diminuir a contagem do seconds.
  }

  function TimerSquad() {
    StartCountdown()
    squadAgain.removeEventListener('mouseenter', TimerSquad)
  }
  
  squadAgain.addEventListener('mouseenter', TimerSquad)

  // Fazer a remoção de ouvinte dentro da função TimerSquad, faz com que o código seja executado normalmente com o escutador ativo até que chegue na função, fazendo com que o ouvinte e a função seja executado apenas uma única vez, impedindo com que o tempo corra mais rápido ou a função TimerSquad seja chamada mais de 1 vez com o mouseenter.
})