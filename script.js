// Dark Mode
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

// Restaurar preferencia de tema al cargar la página
function applySavedTheme() {
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    } catch (e) {
        // Si localStorage no está disponible, no hacemos nada
        console.warn('No se pudo leer theme de localStorage', e);
    }
}

applySavedTheme();

if (toggleSwitch) {
    toggleSwitch.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark");
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch (e) {
            console.warn('No se pudo guardar theme en localStorage', e);
        }
    });
}

// Menu Toggle Functionality
function myMenuFunction() {
    const navMenu = document.getElementById("navMenu");

    if (navMenu.className === "nav_menu") {
        navMenu.className += " responsive";
    } else {
        navMenu.className = "nav_menu";
    }
}

// Close Menu Functionality
function menuClose() {
    const navMenu = document.getElementById("navMenu");
    navMenu.className = "nav_menu";
}

// Close the side navbar when the user clicks on a link
const navLinks = document.querySelectorAll(".link");

function linkAction() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("responsive");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));

// Modal Box Functionality (Optional, if needed)
const modals = document.querySelectorAll(".modal");
const btn = document.querySelectorAll("a.link");
const closeBtn = document.getElementsByClassName("close");
const mediaQuery = window.matchMedia("(max-width: 1084px)");

function handleMediaQueryChange(event) {
    if (event.matches) {
        // Open the modal when user clicks the link
        for (let i = 0; i < btn.length; i++) {
            btn[i].onclick = function (e) {
                // Solo prevenir el comportamiento por defecto si NO es un anclaje
                if (!e.target.getAttribute("href").startsWith('#')) {
                    e.preventDefault();
                    const modal = document.querySelector(e.target.getAttribute("href"));
                    modal.style.display = "block";
                }
            };
        }
        // Resto del código permanece igual...
    } else {
        for (let i = 0; i < btn.length; i++) {
            btn[i].onclick = function (e) {
                // Solo prevenir el comportamiento por defecto si NO es un anclaje
                if (!e.target.getAttribute("href").startsWith('#')) {
                    e.preventDefault();
                    const modal = document.querySelector(e.target.getAttribute("href"));
                    modal.style.display = "none";
                }
            };
        }
    }
}

handleMediaQueryChange(mediaQuery);

// Add event listener for media query changes
mediaQuery.addListener(handleMediaQueryChange);


// Configuración de ScrollReveal
const sr = ScrollReveal({
    origin: 'top', // Animación desde arriba
    distance: '80px', // Distancia del desplazamiento
    duration: 2000, // Duración de la animación
    reset: true, // Permite que los elementos vuelvan a aparecer al hacer scroll hacia arriba
    easing: 'ease-in-out', // Suaviza la animación
    viewFactor: 0.2, // Porcentaje del elemento visible antes de activar la animación
});

// Animar la sección Habilidades
sr.reveal("#habilidades", { delay: 100 });

// Animar las tarjetas de habilidades
sr.reveal(".bg-white", { interval: 200 }); // Animación escalonada para las tarjetas

// Animar la sección Sobre Mí
sr.reveal(".image-container", { origin: 'left', delay: 100 }); // Imagen desde la izquierda
sr.reveal(".content", { origin: 'right', delay: 200 }); // Texto desde la derecha
sr.reveal(".divider", { origin: 'bottom', delay: 300 }); // Línea divisoria desde abajo