const plus = document.getElementById('plus');
const bna = document.getElementById('bna');
const dolariol = document.getElementById('dolariol');
const buendolar = document.getElementById('buendolar');
const cambioposadas = document.getElementById('cambioposadas');
const cambioar = document.getElementById('cambioar');
const dolaria = document.getElementById('dolaria');
const balanz = document.getElementById('balanz');
const rebanking = document.getElementById('rebanking');
const cambiosroca = document.getElementById('cambiosroca');
const davsa = document.getElementById('davsa');
const santander = document.getElementById('santander');
const galicia = document.getElementById('galicia');
const bbva = document.getElementById('bbva');
const patagonia = document.getElementById('patagonia');
const macro = document.getElementById('macro');
const hsbc = document.getElementById('hsbc');
const bapro = document.getElementById('bapro');
const ciudad = document.getElementById('ciudad');
const brubank = document.getElementById('brubank');
const naranjax = document.getElementById('naranjax');
const prex = document.getElementById('prex');
const globalcambio = document.getElementById('globalcambio');
const supervielle = document.getElementById('supervielle');
const icbc = document.getElementById('icbc');
const cambiodieza = document.getElementById('cambiodieza');
const plazacambio = document.getElementById('plazacambio');
const triacambio = document.getElementById('triacambio');
const hipotecario = document.getElementById('hipotecario');
/* tabla */
const nombre = document.getElementById('nombre');
const ask = document.getElementById('ask');
const totalAsk = document.getElementById('totalAsk');
const bid = document.getElementById('bid');
const totalBid = document.getElementById('totalBid');
/* manu */
const menu = document.getElementById('menu');
const icon = document.getElementById('icon');

/* api */
const url = "https://criptoya.com/api/bancostodos";

async function bancoTodos(api) {
  const res = await fetch(api);
  const respuesta = await res.json();
  console.log(respuesta);

  cargarDato(respuesta.bna);
  cargarDistintosDatos(respuesta);
}

function cargarDato(dat) {
  nombre.innerHTML = 'Banco: Bna';
  ask.innerHTML = dat.ask;
  totalAsk.innerHTML = dat.totalAsk;
  bid.innerHTML = dat.bid;
  totalBid.innerHTML = dat.totalBid;
}

function cargarDistintosDatos(datos) {

  plus.addEventListener('click', () => {
    cargarDato(datos.plus);
    nombre.innerHTML = 'Banco: Plus';
    menuNav();
  });
  bna.addEventListener('click', () => {
    cargarDato(datos.bna);
    nombre.innerHTML = 'Banco: Bna';
    menuNav();
  });
  dolariol.addEventListener('click', () => {
    cargarDato(datos.dolariol);
    nombre.innerHTML = 'Banco: Dolariol';
    menuNav();
  });
  buendolar.addEventListener('click', () => {
    cargarDato(datos.buendolar);
    nombre.innerHTML = 'Banco: Buendolar';
    menuNav();
  });
  cambioposadas.addEventListener('click', () => {
    cargarDato(datos.cambioposadas);
    nombre.innerHTML = 'Banco: Cambiosposada';
    menuNav();
  });
  cambioar.addEventListener('click', () => {
    cargarDato(datos.cambioar);
    nombre.innerHTML = 'Banco: Cambiar';
    menuNav();
  });
  dolaria.addEventListener('click', () => {
    cargarDato(datos.dolaria);
    nombre.innerHTML = 'Banco: Dolaria';
    menuNav();
  });
  balanz.addEventListener('click', () => {
    cargarDato(datos.balanz);
    nombre.innerHTML = 'Banco: Balanz';
    menuNav();
  });
  rebanking.addEventListener('click', () => {
    cargarDato(datos.rebanking);
    nombre.innerHTML = 'Banco: Rebanking';
    menuNav();
  });
  cambiosroca.addEventListener('click', () => {
    cargarDato(datos.cambiosroca);
    nombre.innerHTML = 'Banco: Cambiosroca';
    menuNav();
  });
  davsa.addEventListener('click', () => {
    cargarDato(datos.davsa);
    nombre.innerHTML = 'Banco: Davsa';
    menuNav();
  });
  santander.addEventListener('click', () => {
    cargarDato(datos.santander);
    nombre.innerHTML = 'Banco: Santanderrios';
    menuNav();
  });
  galicia.addEventListener('click', () => {
    cargarDato(datos.galicia);
    nombre.innerHTML = 'Banco: Galicia';
    menuNav();
  });
  bbva.addEventListener('click', () => {
    cargarDato(datos.bbva);
    nombre.innerHTML = 'Banco: Bbva';
    menuNav();
  });
  patagonia.addEventListener('click', () => {
    cargarDato(datos.patagonia);
    nombre.innerHTML = 'Banco: Patagonia';
    menuNav();
  });
  macro.addEventListener('click', () => {
    cargarDato(datos.macro);
    nombre.innerHTML = 'Banco: Macro';
    menuNav();
  });
  hsbc.addEventListener('click', () => {
    cargarDato(datos.hsbc);
    nombre.innerHTML = 'Banco: Hcbc';
    menuNav();
  });
  bapro.addEventListener('click', () => {
    cargarDato(datos.bapro);
    nombre.innerHTML = 'Banco: Bapro';
    menuNav();
  });
  ciudad.addEventListener('click', () => {
    cargarDato(datos.ciudad);
    nombre.innerHTML = 'Banco: Ciudad';
    menuNav();
  });
  brubank.addEventListener('click', () => {
    cargarDato(datos.brubank);
    nombre.innerHTML = 'Banco: Brubank';
    menuNav();
  });
  naranjax.addEventListener('click', () => {
    cargarDato(datos.naranjax);
    nombre.innerHTML = 'Banco: NaranjaX';
    menuNav();
  });
  prex.addEventListener('click', () => {
    cargarDato(datos.prex);
    nombre.innerHTML = 'Banco: Prex';
    menuNav();
  });
  globalcambio.addEventListener('click', () => {
    cargarDato(datos.globalcambio);
    nombre.innerHTML = 'Banco: Globalcambio';
    menuNav();
  });
  supervielle.addEventListener('click', () => {
    cargarDato(datos.supervielle);
    nombre.innerHTML = 'Banco: Supervielle';
    menuNav();
  });
  icbc.addEventListener('click', () => {
    cargarDato(datos.icbc);
    nombre.innerHTML = 'Banco: Icbc';
    menuNav();
  });
  cambiodieza.addEventListener('click', () => {
    cargarDato(datos.cambiodieza);
    nombre.innerHTML = 'Banco: Cambiodieza';
    menuNav();
  });
  plazacambio.addEventListener('click', () => {
    cargarDato(datos.plazacambio);
    nombre.innerHTML = 'Banco: Plazacambio';
    menuNav();
  });
  triacambio.addEventListener('click', () => {
    cargarDato(datos.triacambio);
    nombre.innerHTML = 'Banco: Triacambio';
    menuNav();
  });
  hipotecario.addEventListener('click', () => {
    cargarDato(datos.hipotecario);
    nombre.innerHTML = 'Banco: Hipotecario';
    menuNav();
  });
}

bancoTodos(url);

/* activar el menu table */
function menuNav() {
  menu.classList.toggle('active');
  icon.toggle('active');
}
icon.addEventListener('click', menuNav);
