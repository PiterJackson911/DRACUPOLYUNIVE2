// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Detectar página actual y marcar enlace activo
    const currentPage = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

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
});

// Función toggleMenu fuera del DOMContentLoaded porque se llama desde onclick
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const overlay = document.getElementById('menuOverlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
}