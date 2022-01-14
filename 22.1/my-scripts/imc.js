const readline = require('readline-sync');

const PESO_45KG = 45;
const ALTURA_1M_64 = 164;

function calculaIMC () {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)')
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal')
  } else if (imc >= 25 && imc <30) {
    console.log('Situação: Acima do peso (sobrepeso)');
  } else if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
  } else if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
  } else {
    console.log('Situação: Obesidade graus III e IV');
  }
}

calculaIMC();
