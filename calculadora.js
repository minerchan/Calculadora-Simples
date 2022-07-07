'use strict';

// COISAS A FAZER

// + FAZER OS BOTOES FUNCIONAR
// + LIMITAR A TELA a 12 CARACTERS
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


igual.addEventListener('click', ()=> {
checarMaximo()
})



// FUNÇÕES

// limpa o visor
const limpar = ()=>{
  visor.textContent = ``;
}
// faz o numero do visor ser igual resultado
const mudancaVisor = ()=>{
  document.querySelector('.visornumero').textContent = resultado;
}
// checa se o número máximo de caracteres foi atingido
let checarMaximo = ()=>{
  let resultadoLista = resultado.split('')
  if(resultadoLista.length === 12){
    visor.textContent = `erro numeros demais`
  }
}


// EVENTOS

 // del (quando apagar tudo tem que ir pro 0 ainda)
 del.addEventListener('click', ()=>{
  if(resultado === '0'){
    resultado = '0'
  } else {
    let resultadoLista = resultado.split('')
    resultadoLista.pop()
    console.log(resultadoLista)
    resultado = resultadoLista.join('')
    mudancaVisor()
  }
  })
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
    checarMaximo()
  } else {
    resultado = resultado + '1';
    mudancaVisor()
    checarMaximo()
  }
})
// 2
numeroDois.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '2';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '2';
    mudancaVisor()
    checarMaximo()
  }
})
// 3
numeroTres.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '3';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '3';
    mudancaVisor()
    checarMaximo()
  }
})
// 4
numeroQuatro.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '4';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '4';
    mudancaVisor()
    checarMaximo()
  }
})
// 5
numeroCinco.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '5';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '5';
    mudancaVisor()
    checarMaximo()
  }
})
// 6
numeroSeis.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '6';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '6';
    mudancaVisor()
    checarMaximo()
  }
})
// 7
numeroSete.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '7';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '7';
    mudancaVisor()
    checarMaximo()
  }
})
// 8
numeroOito.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '8';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '8';
    mudancaVisor()
    checarMaximo()
  }
})
// 9
numeroNove.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '9';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '9';
    mudancaVisor()
    checarMaximo()
  }
})
// 0
numeroZero.addEventListener('click', ()=>{
  if (document.querySelector('.visornumero').textContent === '0') {
    limpar();
    resultado = '0';
    mudancaVisor()
    checarMaximo()
  } else {
    resultado = resultado + '0';
    mudancaVisor()
    checarMaximo()
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
      mudancaVisor()
    } else {
      resultado = resultado + '.';
      mudancaVisor()
    }
    })
 
    




// interessante
// resultado - resultado.slice(-1)
// resultado - resultado.slice(0, -1)
    // resultado = String(resultado).substr(-1);























































// meus eventos operadores




// igual.addEventListener('click', ()=>{
//       resultado.split('x','-','+','÷');
//       if (resultado.includes('x')){
//         resultado.split('x');
//         resultado = Number(resultado[0]) * Number(resultado[2]);
//         document.querySelector('.visornumero').textContent = resultado;
//       } if (resultado.includes('+')) {
//         resultado.split('+');
//         resultado = Number(resultado[0]) + Number(resultado[2]);
//         document.querySelector('.visornumero').textContent = resultado;
//       } if (resultado.includes('-')) {
//         resultado.split('-');
//         resultado = Number(resultado[0]) - Number(resultado[2]);
//         document.querySelector('.visornumero').textContent = resultado;
//       } if (resultado.includes('÷')) {
//         resultado.split('÷');
//         resultado = Number(resultado[0]) / Number(resultado[2]);
//         document.querySelector('.visornumero').textContent = resultado;
//       }
//       else {
//         console.log(`ponto ainda não funciona`)
//       }   
//         })