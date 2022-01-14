const readline = require('readline-sync');

function calculaVelocidade () {
  const distancia = readline.questionInt('Qual a distância (em metros)? ');
  const tempo = readline.questionInt('Qual o tempo (em segundos)? ');

  console.log(`Distância: ${distancia}m, Tempo: ${tempo}s`);

  const velocidade = (distancia / tempo).toFixed(2);

  console.log(`A velocidade é de ${velocidade}m/s`);
}

calculaVelocidade();
