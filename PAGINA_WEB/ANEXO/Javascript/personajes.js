
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const overlay = document.getElementById('menuOverlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace (solo en móvil)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.getElementById('mainNav').classList.remove('active');
            document.getElementById('menuOverlay').classList.remove('active');
        }
    });
});

// Cerrar menú al redimensionar a desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('mainNav').classList.remove('active');
        document.getElementById('menuOverlay').classList.remove('active');
    }
});
