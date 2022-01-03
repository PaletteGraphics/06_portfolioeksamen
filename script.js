// Lav en vaiabel, der refererer til body
const body = document.querySelector("body");
// Lav en vaiabel, der refererer til ".mode"
const mode = document.querySelector(".mode");
// 1. Lav en funktion, der hedder darkMode
// 2. Toggle en klasse, der hedder "dark" vha. classList
// eller
// 1. Lav en funktion, der hedder darkMode
// 2. Ændr teksten på toggle-knappen og tilføj eller fjern klassen "dark" vha. en if/else sætning
function darkMode() {
  if (body.classList.contains("dark")) {
    mode.textContent = "DARK MODE";
    body.classList.remove("dark");
  } else {
    mode.textContent = "LIGHT MODE";
    body.classList.add("dark");
  }
}
// Lav et klik-event på toggle, der sætter funktionen darkMode i gang
mode.addEventListener("click", darkMode);

//Tag fat i knap
mybutton = document.getElementById("myBtn");

// Når brugeren scroller 20px fra toppen vises pilen
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
