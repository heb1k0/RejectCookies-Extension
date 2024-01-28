
console.log('Rejecting Cookies Action');
let cookieExtensionURL = window.location.href;

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

if (cookieExtensionURL.includes('elmundo.es') || 
    cookieExtensionURL.includes('elmundo.com')) {
    hideCookieModal('.popup-disagreed-cookies');
}
if (
    cookieExtensionURL.includes('elperiodico.com') ||
    cookieExtensionURL.includes('elperiodico.es') ||
    cookieExtensionURL.includes('xataka.com') ||
    cookieExtensionURL.includes('eldiario.com') ||
    cookieExtensionURL.includes('eldiario.es')
) {
    hideCookieModal('#didomi-host');
}

