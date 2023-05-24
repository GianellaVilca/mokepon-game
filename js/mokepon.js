let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarjuego() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque').style.display = 'none';
  let sectionReiniciar = document.getElementById('reiniciar').style.display = 'block';

  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById('boton-reiniciar');
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque').style.display = 'flex';
  let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota').style.display = 'none';
  let sectionReiniciar = document.getElementById('reiniciar').style.display = 'none';

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("No elegiste ninguna mascota 😢");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO 🔥";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA 💧";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA 🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO 🔥";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA 💧";
  } else {
    ataqueEnemigo = "TIERRA 🌱";
  }
  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigo');

  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje('EMPATE');
  } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    crearMensaje('GANASTE');
  } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    crearMensaje('GANASTE');
  } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧') {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    crearMensaje('GANASTE');
  } else {
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
    crearMensaje('PERDISTE');
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal('✨¡FELICITACIONES!✨');
    deshabilitarBotones();
  } else if (vidasJugador == 0) {
    crearMensajeFinal('💀 GAME OVER 💀');
    deshabilitarBotones();
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById('resultado');
  let ataquesJugador = document.getElementById('ataques-jugador');
  let ataquesEnemigo = document.getElementById('ataques-enemigo');

  let nuevoAtaqueJugador = document.createElement('p');
  let nuevoAtaqueEnemigo = document.createElement('p');

  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

  sectionMensajes.innerHTML = resultado;

  ataquesJugador.appendChild(nuevoAtaqueJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionReiniciar = document.getElementById('reiniciar').style.display = 'block';
  let sectionMensajes = document.getElementById('resultado');
  let parrafo = document.createElement('p');
  parrafo.innerHTML = resultadoFinal;
  sectionMensajes.appendChild(parrafo);

  deshabilitarBotones();
}

function reiniciarJuego() {
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigo');
  let sectionMensajes = document.getElementById('resultado');
  let ataquesJugador = document.getElementById('ataques-jugador');
  let ataquesEnemigo = document.getElementById('ataques-enemigo');

  ataqueJugador = undefined;
  ataqueEnemigo = undefined;
  vidasJugador = 3;
  vidasEnemigo = 3;

  spanVidasJugador.innerHTML = vidasJugador;
  spanVidasEnemigo.innerHTML = vidasEnemigo;

  sectionMensajes.innerHTML = '';
  ataquesJugador.innerHTML = '';
  ataquesEnemigo.innerHTML = '';

  let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota').style.display = 'block';
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque').style.display = 'none';
  let sectionReiniciar = document.getElementById('reiniciar').style.display = 'none';

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = false;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = false;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = false;
  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.disabled = false;
}

function deshabilitarBotones() {
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarjuego);
