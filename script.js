/**
 * Clima Split Refrigeração - Scripts Interativos de UX/UI
 * Desenvolvido com foco em fluidez Mobile e Conversão.
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos de Controle do Menu Hambúrguer Mobile
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Alterna a abertura e animação do menu responsivo
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // Fecha o menu de forma automática ao clicar em uma seção (UX Fluido)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle && mainNav) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
            
            // Gerenciamento visual do link atualmente ativo
            document.querySelectorAll('nav ul li').forEach(li => li.classList.remove('active'));
            link.parentElement.classList.add('active');
        });
    });

    // Fecha a gaveta mobile se o usuário clicar em qualquer área vazia da página
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mainNav.contains(event.target);
        const isClickInsideToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideToggle && mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });

    // Interceptação Amigável de Envio do Formulário de Lead (Otimização Google Ads)
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            // Caso queira integrar com algum webhook de CRM, insira aqui o código.
            // Por padrão, mantemos o comportamento limpo de conversão.
            console.log("Lead capturado com sucesso! Preparado para redirecionar ou salvar.");
        });
    }
});