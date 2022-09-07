// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
    console.log(evento.target.parentNode);
  });
});

// somar.addEventListener("click", () => {manipulaDados("somar")});
// subtrair.addEventListener("click", () => {manipulaDados("subtrair")});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector(".controle-contador");
  
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  }
}

document.querySelector("#robotron").addEventListener("click", (event) => {
  console.log(event);
});

function welcome(nome) {
  console.log(nome);
  console.log("Seja bem-vindo ao robotron 200.");
}

welcome("Cristiane");
