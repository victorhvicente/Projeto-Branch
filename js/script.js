document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.mobile-menu-icone button');
    const mobileMenu = document.querySelector('.mobile-itens');

    menuIcon.addEventListener('click', () => {
        // Alterna a visibilidade do menu mobile
        mobileMenu.classList.toggle('show');
    });
});