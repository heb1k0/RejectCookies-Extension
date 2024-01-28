function hideCookieModal(selector) {
    const modalCookies = document.querySelector(selector);
    if (modalCookies) {
        const body = document.querySelector('body');
        // si no tiene clases esperamos 1s
        if (body.classList.length === 0) {
            setTimeout(() => {
                body.classList.remove(...body.classList);
                modalCookies.style.display = 'none';
            }, 1000);
        } else {
            body.classList.remove(...body.classList);
        }
        body.style.overflow = 'auto';
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
        }, 200);
    }
}
// Si existe la clase .popup-disagreed-cookies hideCookieModal('.popup-disagreed-cookies');

if (window.location.href.includes('elpais')) {
    checkofExist("#pmConsentWall")
}
checkofExist('.popup-disagreed-cookies')
checkofExist('#didomi-host')
checkofExist('.didomi-popup')
checkofExist('#onetrust-consent-sdk')
