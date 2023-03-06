var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 1000, 900);

var raio = 12;
var xAleatorio;
var yAleatorio;

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 1000, 900);
}

function desenhaAlvo(x, y) {
  desenhaCirculo(x, y, raio + 25, "red");
  desenhaCirculo(x, y, raio + 12, "white");
  desenhaCirculo(x, y, raio, "red");
}

function sorteiaPosicao(maximo) {
  return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
  limpaTela();
  xAleatorio = sorteiaPosicao(1000);
  yAleatorio = sorteiaPosicao(900);
  desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 1000);

function dispara(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  if (
    x > xAleatorio - raio &&
    x < xAleatorio + raio &&
    y > yAleatorio - raio &&
    y < yAleatorio + raio
  ) {
    alert("IUP, Você ACERTOU!!!");
  }
}

tela.onclick = dispara;
