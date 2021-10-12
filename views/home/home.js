const titulo = document.querySelector("#resume");

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

typeWrite(titulo);

//Tela de login
window.onload = () => {
    setInterval(() => {
      const load = document.querySelector(".loading");
      load.style.display = "none";
    }, 300);
  };
  