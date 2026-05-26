/**
 * Clima Split Refrigeração
 * UX/UI Interações
 */

document.addEventListener('DOMContentLoaded', function () {

    // MENU MOBILE
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && mainNav) {

        // Abrir / Fechar Menu
        menuToggle.addEventListener('click', function (e) {

            e.stopPropagation();

            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');

            // trava scroll do fundo
            document.body.classList.toggle('menu-open');

        });

        // Fechar menu ao clicar nos links
        navLinks.forEach(link => {

            link.addEventListener('click', function () {

                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');

                document.body.classList.remove('menu-open');

                // Link ativo
                document.querySelectorAll('nav ul li').forEach(li => {
                    li.classList.remove('active');
                });

                link.parentElement.classList.add('active');

            });

        });

        // Fechar menu clicando fora
        document.addEventListener('click', function (event) {

            const isInsideMenu = mainNav.contains(event.target);
            const isInsideButton = menuToggle.contains(event.target);

            if (
                !isInsideMenu &&
                !isInsideButton &&
                mainNav.classList.contains('active')
            ) {

                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');

                document.body.classList.remove('menu-open');

            }

        });

    }

    // FORMULÁRIO
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {

        leadForm.addEventListener('submit', function () {

            console.log('Lead capturado com sucesso.');

        });

    }

});