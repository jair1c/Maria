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
            "Estas flores amarillas son un reflejo de la alegría que traes a mi vida. Gracias por iluminar mis días con tu presencia.",
            "Cada flor es un recuerdo de los momentos especiales que hemos compartido.",
            "Tu sonrisa es como el sol que hace florecer estas flores.",
            "Gracias por ser la luz que ilumina mi camino."
        ];
        let indiceTexto = (textos.indexOf(titulo.textContent) + 1) % textos.length;
        titulo.textContent = textos[indiceTexto];
    });

    // Evento para redirigir al hacer clic en el botón
    document.getElementById("mostrarSV").addEventListener("click", function() {
        window.location.href = "https://bby-two.vercel.app/"; // Asegúrate de que la ruta sea correcta
    });
};
