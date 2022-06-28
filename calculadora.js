'use strict';

// elementos
const numeroUm = document.querySelector('.um');
const numeroDois = document.querySelector('.dois');
const numeroTres = document.querySelector('.tres');
const numeroQuatro = document.querySelector('.quatro');
const numeroCinco = document.querySelector('.cinco');
const numeroSeis = document.querySelector('.seis');
const numeroSete = document.querySelector('.sete');
const numeroOito = document.querySelector('.oito');
const numeroNove = document.querySelector('.nove');
const numeroZero = document.querySelector('.zero');
const ponto = document.querySelector('.ponto');
const mais = document.querySelector('.mais');
const igual = document.querySelector('.igual');
const menos = document.querySelector('.menos');
const vezes = document.querySelector('.vezes');
const dividir = document.querySelector('.dividir');
const clear = document.querySelector('.reset');


// funções
const limpar = ()=>{
  document.querySelector('.numero').textContent = ``;
}


// eventos
numeroUm.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '1';
});
numeroDois.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '2';
});
numeroTres.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '3';
});
numeroQuatro.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '4';
});
numeroCinco.addEventListener('click', ()=>{
  let digitado = document.querySelector('.numero').textContent;
  let expressao = document.querySelector('.numero').textContent = digitado + '5';
  let separados = expressao.split('x');
  let resultado = Number(separados[0]) * Number(separados[1]);
  document.querySelector('.numero').textContent = resultado;
  // limpar();
  // document.querySelector('.numero').textContent = '5';
});
numeroSeis.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '6';
});
numeroSete.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '7';
});
numeroOito.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '8';
});
numeroNove.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '9';
});
numeroZero.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '0';
});
ponto.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '.';
});
mais.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '+';
});
igual.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '=';
});
menos.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '-';
});
vezes.addEventListener('click', ()=>{
  let digitado = document.querySelector('.numero').textContent;
  document.querySelector('.numero').textContent = digitado + 'x';
  // limpar();
  // document.querySelector('.numero').textContent = 'x';
});
dividir.addEventListener('click', ()=>{
  limpar();
  document.querySelector('.numero').textContent = '÷';
});
clear.addEventListener('click', ()=>{
  limpar();
});

