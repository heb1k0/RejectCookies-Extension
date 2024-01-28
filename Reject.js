setTimeout(() => {
    console.log('Rejecting Cookies Action');
    let CookieExtension_URL = window.location.href;

    if (CookieExtension_URL.includes('elmundo.es') || CookieExtension_URL.includes('elmundo.com')) {
        const ModalCookies = document.querySelector('.popup-disagreed-cookies');
        if (ModalCookies) {
            const body = document.querySelector('body');
            body.classList.remove('ue-modal-open');
            ModalCookies.style.display = 'none';
            console.log('Modal Cookies');
        }
    }
    if (CookieExtension_URL.includes('elperiodico.com') || CookieExtension_URL.includes('elperiodico.es')) {
        const ModalCookies = document.querySelector("#didomi-host");
        if (ModalCookies) {
            const body = document.querySelector('body');
            body.classList.remove(...body.classList);
            ModalCookies.style.display = 'none';
            console.log('Modal Cookies');
        } else {
            console.log("No hay modal de cookies");
        }
    }
}, 1000);
