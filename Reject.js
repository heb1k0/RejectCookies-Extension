
console.log('Rejecting Cookies Action');
let cookieExtensionURL = window.location.href;

// Función para ocultar el modal de cookies
const hideCookieModal = (selector) => {
    const modalCookies = document.querySelector(selector);
    if (modalCookies) {
        const body = document.querySelector('body');
        body.classList.remove(...body.classList);
        modalCookies.style.display = 'none';
        console.log('Modal Cookies');
    } else {
        console.log('No hay modal de cookies');
    }
};

// Verificar para elmundo.es o elmundo.com
if (cookieExtensionURL.includes('elmundo.es') || cookieExtensionURL.includes('elmundo.com')) {
    hideCookieModal('.popup-disagreed-cookies');
}

// Verificar para elperiodico.com, elperiodico.es o xataka.com
if (
    cookieExtensionURL.includes('elperiodico.com') ||
    cookieExtensionURL.includes('elperiodico.es') ||
    cookieExtensionURL.includes('xataka.com')
) {
    hideCookieModal('#didomi-host');
}

