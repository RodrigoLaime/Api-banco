const oficial = document.getElementById('oficial');
const solidario = document.getElementById('solidario');
const blue = document.getElementById('blue');
const ccb = document.getElementById('ccb');
const mep = document.getElementById('mep');
const ccl = document.getElementById('ccl');

const url = ('https://criptoya.com/api/dolar');

async function dolar(api) {
  const res = await fetch(api);
  const respuesta = await res.json();

  cargarDolar(respuesta);
}

function cargarDolar(dat) {
  console.log(dat);

  oficial.innerHTML = '$ ' + dat.oficial;
  solidario.innerHTML = '$ ' + dat.solidario;
  blue.innerHTML = '$ ' + dat.blue;
  ccb.innerHTML = '$ ' + dat.ccb;
  ccl.innerHTML = '$ ' + dat.ccl;
  mep.innerHTML = '$ ' + dat.mep;
}

dolar(url);

function calcular() {
  c
}