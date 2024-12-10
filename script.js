// Função para manipular o menu hambúrguer
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Função para salvar preferências no Local Storage
const saveButton = document.getElementById('saveBtn');
const preferencesText = document.getElementById('preferences');

// Função para exibir preferências salvas
function displayPreferences() {
    const preferences = localStorage.getItem('preferences');
    if (preferences) {
        preferencesText.textContent = `Preferências salvas: ${preferences}`;
    } else {
        preferencesText.textContent = 'Nenhuma preferência salva';
    }
}

// Salvar preferências no Local Storage
saveButton.addEventListener('click', () => {
    const preferences = 'Preferência salva pelo usuário';
    localStorage.setItem('preferences', preferences);
    displayPreferences();
});

// Carregar preferências ao iniciar
window.onload = displayPreferences;
