'use strict';

// COISAS A FAZER

// + FAZER OS BOTOES FUNCIONAR
// + LIMITAR A TELA
// + CRIAR BOTOES PARA TROCA DE TEMAS DA CALCULADORA
// + CRIAR FUNÇÃO DE TROCA DE TEMA DA CALCULADORA




// VARIÁVEIS
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
const AC = document.querySelector('.AC');
const visor = document.querySelector('.visornumero');
const del = document.querySelector('.del');
let resultado = '0';


// FUNÇÕES

// limpa o visor
const limpar = ()=>{
  visor.textContent = ``;
}
// ultimo numero do visor
// let numeroFinal = ()=>{
//   resultado.slice(-1);
// }
// faz o numero do visor ser igual resultado
const mudancaVisor = ()=>{
  document.querySelector('.visornumero').textContent = resultado;
}


// EVENTOS

// botao ac
AC.addEventListener('click',()=>{
  visor.textContent = '0'
})

// adicionando numeros ao visor

// 1
numeroUm.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '1';
    mudancaVisor()
  } else {
    resultado = resultado + '1';
    mudancaVisor()
  }
})
// 2
numeroDois.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '2';
    mudancaVisor()
  } else {
    resultado = resultado + '2';
    mudancaVisor()
  }
})
// 3
numeroTres.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '3';
    mudancaVisor()
  } else {
    resultado = resultado + '3';
    mudancaVisor()
  }
})
// 4
numeroQuatro.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '4';
    mudancaVisor()
  } else {
    resultado = resultado + '4';
    mudancaVisor()
  }
})
// 5
numeroCinco.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '5';
    mudancaVisor()
  } else {
    resultado = resultado + '5';
    mudancaVisor()
  }
})
// 6
numeroSeis.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '6';
    mudancaVisor()
  } else {
    resultado = resultado + '6';
    mudancaVisor()
  }
})
// 7
numeroSete.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '7';
    mudancaVisor()
  } else {
    resultado = resultado + '7';
    mudancaVisor()
  }
})
// 8
numeroOito.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '8';
    mudancaVisor()
  } else {
    resultado = resultado + '8';
    mudancaVisor()
  }
})
// 9
numeroNove.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '9';
    mudancaVisor()
  } else {
    resultado = resultado + '9';
    mudancaVisor()
  }
})
// 0
numeroZero.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '0';
    mudancaVisor()
  } else {
    resultado = resultado + '0';
    mudancaVisor()
  }
})

// OPERADORES

// +
mais.addEventListener('click', ()=>{
  if(resultado === '0'){
    resultado = '0'
  } else {
    resultado = resultado + '+';
    mudancaVisor()
  }
  })
  // -
  menos.addEventListener('click', ()=>{
    if(resultado === '0'){
      resultado = '0'
    } else {
      resultado = resultado + '-';
      mudancaVisor()
    }
    })
  // x
  vezes.addEventListener('click', ()=>{
    if(resultado === '0'){
      resultado = '0'
    } else {
      resultado = resultado + 'x';
      mudancaVisor()
    }
    })
  // ÷
  dividir.addEventListener('click', ()=>{
    if(resultado === '0'){
      resultado = '0'
    } else {
      resultado = resultado + '÷';
      mudancaVisor()
    }
    })
  // .
  ponto.addEventListener('click', ()=>{
    if(resultado === '0'){
      resultado = '0'
    } else {
      resultado = resultado + '.';
      mudancaVisor()
    }
    })
  // del
  del.addEventListener('click', ()=>{
    if(resultado === '0'){
      resultado = '0'
    } else {
      // console.log(resultado.slice(-1))
      // resultado = resultado - numeroFinal()
      // console.log(numeroFinal())
    }
    })
    




// interessante
// resultado - resultado.slice(-1)
// resultado - resultado.slice(0, -1)
    // resultado = String(resultado).substr(-1);























































// meus eventos operadores




igual.addEventListener('click', ()=>{
      resultado.split('x','-','+','÷');
      if (resultado.includes('x')){
        resultado.split('x');
        resultado = Number(resultado[0]) * Number(resultado[2]);
        document.querySelector('.visornumero').textContent = resultado;
      } if (resultado.includes('+')) {
        resultado.split('+');
        resultado = Number(resultado[0]) + Number(resultado[2]);
        document.querySelector('.visornumero').textContent = resultado;
      } if (resultado.includes('-')) {
        resultado.split('-');
        resultado = Number(resultado[0]) - Number(resultado[2]);
        document.querySelector('.visornumero').textContent = resultado;
      } if (resultado.includes('÷')) {
        resultado.split('÷');
        resultado = Number(resultado[0]) / Number(resultado[2]);
        document.querySelector('.visornumero').textContent = resultado;
      }
      else {
        console.log(`ponto ainda não funciona`)
      }   
        })