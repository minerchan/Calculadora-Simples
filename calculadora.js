"use strict";

// SELECIONEI TODOS OS BOTOES DE CORES E SALVEI EM BOTOES
const botoes = document.querySelectorAll(".cor");
// SEPAREI AS CORES NA LISTA CORTROCADA
let corTrocada = ["#46778c", "#d9480f", "#a61e4d", "#0b7285", "#5c940d"];
// SELECIONEI O FUNDO DA CALCULADORA
let plastico = document.querySelector(".plastico");
// CRIEI UM LAÇO DE REPETIÇÃO QUE SUBSTITUI CLASSE E COR
for (let i = 0; i < botoes.length; i++) {
  const botoesClasses = botoes[i];

  botoesClasses.onclick = function () {
    plastico.style.borderColor = corTrocada[i];
    plastico.style.backgroundColor = corTrocada[i];
  };
}

// VARIÁVEIS DA CALCULADORA
const numeroUm = document.querySelector(".um");
const numeroDois = document.querySelector(".dois");
const numeroTres = document.querySelector(".tres");
const numeroQuatro = document.querySelector(".quatro");
const numeroCinco = document.querySelector(".cinco");
const numeroSeis = document.querySelector(".seis");
const numeroSete = document.querySelector(".sete");
const numeroOito = document.querySelector(".oito");
const numeroNove = document.querySelector(".nove");
const numeroZero = document.querySelector(".zero");
const ponto = document.querySelector(".ponto");
const mais = document.querySelector(".mais");
const igual = document.querySelector(".igual");
const menos = document.querySelector(".menos");
const vezes = document.querySelector(".vezes");
const dividir = document.querySelector(".dividir");
const AC = document.querySelector(".AC");
const visor = document.querySelector(".visornumero");
const del = document.querySelector(".del");
let resultado = "0";

// FUNÇÕES

// limpa o visor
const limpar = () => {
  visor.textContent = ``;
};
// faz o numero do visor ser igual resultado
const mudancaVisor = () => {
  document.querySelector(".visornumero").textContent = resultado;
};
// checa se o número máximo de caracteres foi atingido e exibe erro
let checarMaximo = () => {
  if (resultado.split("").length === 12) {
    visor.textContent = `erro`;
  }
};
// se a calculadora deu erro ele reseta ela
let maximo1 = () => {
  if (visor.textContent === `erro`) {
    resultado = `0`;
    mudancaVisor();
  }
};

// EVENTOS

// del (quando apagar tudo tem que ir pro 0 ainda)
del.addEventListener("click", () => {
  if (resultado === "0") {
    resultado = "0";
  }
  if (resultado.split("").length === 1) {
    resultado = "0";
    mudancaVisor();
  } else {
    let resultadoLista = resultado.split("");
    resultadoLista.pop();
    console.log(resultadoLista);
    resultado = resultadoLista.join("");
    mudancaVisor();
  }
});
// botao ac
AC.addEventListener("click", () => {
  visor.textContent = "0";
});

// adicionando numeros ao visor

// 1
numeroUm.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "1";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "1";
    mudancaVisor();
    checarMaximo();
  }
});
// 2
numeroDois.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "2";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "2";
    mudancaVisor();
    checarMaximo();
  }
});
// 3
numeroTres.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "3";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "3";
    mudancaVisor();
    checarMaximo();
  }
});
// 4
numeroQuatro.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "4";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "4";
    mudancaVisor();
    checarMaximo();
  }
});
// 5
numeroCinco.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "5";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "5";
    mudancaVisor();
    checarMaximo();
  }
});
// 6
numeroSeis.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "6";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "6";
    mudancaVisor();
    checarMaximo();
  }
});
// 7
numeroSete.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "7";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "7";
    mudancaVisor();
    checarMaximo();
  }
});
// 8
numeroOito.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "8";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "8";
    mudancaVisor();
    checarMaximo();
  }
});
// 9
numeroNove.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "9";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "9";
    mudancaVisor();
    checarMaximo();
  }
});
// 0
numeroZero.addEventListener("click", () => {
  maximo1();
  if (document.querySelector(".visornumero").textContent === "0") {
    limpar();
    resultado = "0";
    mudancaVisor();
    checarMaximo();
  } else {
    resultado = resultado + "0";
    mudancaVisor();
    checarMaximo();
  }
});

// OPERADORES

// +
mais.addEventListener("click", () => {
  if (resultado === "0") {
    resultado = "0";
  } else {
    resultado = resultado + "+";
    mudancaVisor();
  }
});
// -
menos.addEventListener("click", () => {
  if (resultado === "0") {
    resultado = "0";
  } else {
    resultado = resultado + "-";
    mudancaVisor();
  }
});
// x
vezes.addEventListener("click", () => {
  if (resultado === "0") {
    resultado = "0";
  } else {
    resultado = resultado + "x";
    mudancaVisor();
  }
});
// ÷
dividir.addEventListener("click", () => {
  if (resultado === "0") {
    resultado = "0";
  } else {
    resultado = resultado + "÷";
    mudancaVisor();
  }
});
// .
ponto.addEventListener("click", () => {
  if (resultado === "0") {
    resultado = "0";
    mudancaVisor();
  } else {
    resultado = resultado + ".";
    mudancaVisor();
  }
});
// =
igual.addEventListener("click", () => {
  let conferencia = resultado.split("");
  if (conferencia.includes("x")) {
    let resultadoLista = resultado.split("x");
    resultado = resultadoLista[0] * resultadoLista[1];
    mudancaVisor();
    checarMaximo();
  }
  if (conferencia.includes("÷")) {
    let resultadoLista = resultado.split("÷");
    resultado = resultadoLista[0] / resultadoLista[1];
    mudancaVisor();
    checarMaximo();
  }
  if (conferencia.includes("-")) {
    let resultadoLista = resultado.split("-");
    resultado = resultadoLista[0] - resultadoLista[1];
    mudancaVisor();
    checarMaximo();
  }
  if (conferencia.includes("+")) {
    let resultadoLista = resultado.split("+");
    resultado = Number(resultadoLista[0]) + Number(resultadoLista[1]);
    mudancaVisor();
    checarMaximo();
  }
});
// let ListaNumeros = [1,2,3,4,5]
// let dobrados = ListaNumeros.map(function(num)){ return num * 2 }