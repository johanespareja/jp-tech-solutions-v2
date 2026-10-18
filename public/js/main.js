// public/js/main.js - Manejo dinámico de navegación para GitHub Pages

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sistema JP Tech Solutions activo.');

    // 1. Manejo del botón de Cerrar Sesión
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Limpia sesión simulada y redirige al login
            localStorage.removeItem('userLoggedIn');
            window.location.href = 'index.html';
        });
    }

    // 2. Destacar enlace activo en la barra lateral dinámicamente
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});