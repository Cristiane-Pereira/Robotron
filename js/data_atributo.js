const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
      atualizaestatistica(evento.target.dataset.peca);
    console.log(evento.target.parentNode);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaestatistica(peca) {
    // console.log(pecas[peca])
    estatistica.forEach((elemento) => {
        // console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

document.querySelector("#robotron").addEventListener("click", (event) => {
  console.log(event);
});

function welcome(nome) {
  console.log(nome);
  console.log("Seja bem-vindo ao robotron 200.");
}

welcome("Cristiane");
