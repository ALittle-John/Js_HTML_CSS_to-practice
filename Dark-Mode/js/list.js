document.addEventListener('DOMContentLoaded', function() {
  const DarkMode = document.querySelector('.Dark')
  const LightMode = document.querySelector('.Light')

  function DarkModeActive() {

  }

  function LightModeActive() {

  }
  
  DarkMode.addEventListener('fullscreenchange', DarkModeActive)
  LightMode.addEventListener('fullscreenchange', LightModeActive)
})