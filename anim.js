// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { "text": "Te siento conmigo", "time": 14.68 },
  { "text": "En cada latido", "time": 18.10 },
  { "text": "En mi corazón", "time": 21.71 },
  { "text": "Si me siento perdido", "time": 28.88 },
  { "text": "Encuentro el norte", "time": 31.73 },
  { "text": "Con solo escuchar tu voz", "time": 34.29 },
  { "text": "Podrán pasar huracanes", "time": 41.34 },
  { "text": "Pero nada podrá contra mí", "time": 48.36 },
  { "text": "Porque tú serás", "time": 55.14 },
  { "text": "La luz que ilumine mi andar", "time": 62.37 },
  { "text": "Y el mundo se detendrá a mirar", "time": 69.25 },
  { "text": "Un amor de verdad", "time": 76.13 },
  { "text": "Un amor de verdad", "time": 89.96 },
  { "text": "Si estás a mi lado", "time": 98.02 },
  { "text": "No importa el pasado", "time": 101.60 },
  { "text": "Ya no hay más dolor, oh no", "time": 104.90 },
  { "text": "El cielo nublado", "time": 112.06 },
  { "text": "Y viento helado", "time": 115.25 },
  { "text": "Se fueron con tu calor", "time": 117.72 },
  { "text": "Podrán volver huracanes", "time": 124.74 },
  { "text": "Pero nada podrá contra mí", "time": 131.83 },
  { "text": "Porque tú serás", "time": 138.88 },
  { "text": "La luz que ilumine mi andar", "time": 145.88 },
  { "text": "Y el mundo se detendrá a mirar", "time": 152.84 },
  { "text": "Un amor de verdad", "time": 159.59 },
  { "text": "Y es que tú serás", "time": 166.35 },
  { "text": "La luz que ilumine mi andar", "time": 173.61 },
  { "text": "Y el mundo se detendrá a mirar", "time": 181.28 },
  { "text": "Un amor de verdad", "time": 187.19 },
  { "text": "Un amor de verdad", "time": 194.12 }
  
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
