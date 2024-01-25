document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("DarkMode");

  btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
  });
});

//------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//   const btn = document.getElementById('DarkMode')

//   btn.addEventListener('change', () => {
//     document.body.classList.toggle('dark', btn.checked)
//   })
// });

//------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//   const btn = document.getElementById('DarkMode')

//   btn.onchange = function(e) {
//     document.body.classList.toggle('dark', e.target.checked);
//   }
// })
