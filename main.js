onload = () => {
    document.body.classList.remove("container");

    // Obtener referencias a los elementos
    const titulo = document.querySelector('.titulo');
    const cambiarTextoBtn = document.getElementById('cambiarTexto');
    const mostrarGaleriaBtn = document.getElementById('mostrarGaleria');
    const galeriaModal = document.getElementById('galeriaModal');
    const closeBtn = document.querySelector('.close');
    const carruselContainer = document.querySelector('.carrusel-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 1; // Empezar con la imagen central
    let autoPlayInterval;

    // Función para cambiar el texto
    cambiarTextoBtn.addEventListener('click', () => {
        const textos = [
            "Hace solo un mes comenzamos esta historia oficialmente, pero siento que mi corazón te ha pertenecido desde siempre. Gracias por hacerme tan feliz, María. ¡Por muchos meses más juntos!",
            "Un mes a tu lado ha sido suficiente para darme cuenta de que quiero muchos más contigo. Eres mi alegría y mi razón de sonreír. ¡Feliz primer mes, mi amor!",
            "Solo ha pasado un mes, pero cada día contigo es un recuerdo hermoso. Gracias por ser mi novia, mi compañía y mi felicidad. ¡Te adoro, Mi Mujercita!",
            "Dicen que lo bueno pasa rápido, y este mes a tu lado ha volado. Gracias por cada sonrisa y cada momento especial. ¡Feliz primer mes, mi María hermosa!",
            "Dicen que la distancia separa cuerpos, pero nunca corazones. Cada día confirmo que lo nuestro es real, fuerte y hermoso. ¡Feliz primer mes, María, mi amor eterno!",
            "Este es solo el primer capítulo de nuestra historia, y aunque hoy no podamos abrazarnos, sé que un día la distancia será solo un recuerdo. ¡Te quiero con todo mi corazón!"
        ];
        let indiceTexto = (textos.indexOf(titulo.textContent) + 1) % textos.length;
        titulo.textContent = textos[indiceTexto];
    });

    // Evento para redirigir al hacer clic en el botón
    document.getElementById("mostrarSV").addEventListener("click", function() {
        window.location.href = "https://bby-two.vercel.app/"; // Asegúrate de que la ruta sea correcta
    });
};
