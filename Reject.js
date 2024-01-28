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
        }else{
            body.classList.remove(...body.classList);
        }
        // si tiene clases las rem        body.classList.remove(...body.classList);
        modalCookies.style.display = 'none';
        console.log('Modal Cookies');
    } else {
        console.log('No hay modal de cookies');
    }
};
// Si existe la clase .popup-disagreed-cookies hideCookieModal('.popup-disagreed-cookies');
if(document.querySelector('.popup-disagreed-cookies')){
    hideCookieModal('.popup-disagreed-cookies');
}

// Si existe la clase #didomi-host hideCookieModal('#didomi-host');
if(document.querySelector('#didomi-host')){
    hideCookieModal('#didomi-host');
}

