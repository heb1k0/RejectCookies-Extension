function hideCookieModal(selector) {
    const modalCookies = document.querySelector(selector);
    if (modalCookies) {

        // si no tiene clases esperamos 1s
        setTimeout(() => {
            const body = document.querySelector('body');
            const html = document.querySelector('html');
            body.classList.remove(...body.classList);
            html.classList.remove(...html.classList);
            // remove class html
            modalCookies.style.display = 'none';
            body.style.overflow = 'auto';
        }, 1000);


        // si tiene clases las rem        body.classList.remove(...body.classList);
        modalCookies.style.display = 'none';
        console.log('Modal Cookies');
    } else {
        console.log('No hay modal de cookies');
    }
};



function checkofExist(selector) {
    if (document.querySelector(selector)) {
        hideCookieModal(selector);
    } else {
        setTimeout(() => {
            hideCookieModal(selector);
        }, 800);
    }
}
// Si existe la clase .popup-disagreed-cookies hideCookieModal('.popup-disagreed-cookies');

// Cuando se cargue el dom ejecutamos
    if (window.location.href.includes('elpais')) {
        checkofExist("#pmConsentWall")
    }
    checkofExist('.popup-disagreed-cookies')
    checkofExist('#didomi-host')
    checkofExist('.didomi-popup')
    checkofExist('#onetrust-consent-sdk')
    checkofExist('#sp_message_container_1005436')
