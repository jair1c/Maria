// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { "text": "Te siento conmigo", "time": 17.44 },
  { "text": "En cada latido", "time": 20.87 },
  { "text": "En mi corazón", "time": 23.85 },
  { "text": "Si me siento perdido", "time": 30.99 },
  { "text": "Encuentro el norte", "time": 34.49 },
  { "text": "Con solo escuchar tu voz", "time": 36.95 },
  { "text": "Podrán pasar huracanes", "time": 43.87 },
  { "text": "Pero nada podrá contra mí", "time": 50.83 },
  { "text": "Porque tú serás", "time": 57.71 },
  { "text": "La luz que ilumine mi andar", "time": 64.89 },
  { "text": "Y el mundo se detendrá a mirar", "time": 71.79 },
  { "text": "Un amor de verdad", "time": 78.62 },
  { "text": "Un amor de verdad", "time": 92.41 },
  { "text": "Si estás a mi lado", "time": 100.52 },
  { "text": "No importa el pasado", "time": 104.11 },
  { "text": "Ya no hay más dolor, oh no", "time": 107.48 },
  { "text": "El cielo nublado", "time": 114.69 },
  { "text": "Y viento helado", "time": 117.84 },
  { "text": "Se fueron con tu calor", "time": 120.34 },
  { "text": "Podrán volver huracanes", "time": 127.43 },
  { "text": "Pero nada podrá contra mí", "time": 134.49 },
  { "text": "Porque tú serás", "time": 141.52 },
  { "text": "La luz que ilumine mi andar", "time": 148.53 },
  { "text": "Y el mundo se detendrá a mirar", "time": 155.48 },
  { "text": "Un amor de verdad", "time": 162.29 },
  { "text": "Y es que tú serás", "time": 169.06 },
  { "text": "La luz que ilumine mi andar", "time": 176.35 },
  { "text": "Y el mundo se detendrá a mirar", "time": 184.02 },
  { "text": "Un amor de verdad", "time": 189.91 },
  { "text": "Un amor de verdad", "time": 196.87 }
  
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 213 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 213000);
