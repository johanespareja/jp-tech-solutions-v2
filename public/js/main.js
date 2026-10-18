if (!localStorage.getItem('session_active') && window.location.pathname !== '/') {
    window.location.href = '/';
}

document.getElementById('logoutBtn')?.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('session_active');
    window.location.href = '/';
});