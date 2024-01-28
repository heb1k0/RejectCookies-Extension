//buscaGoogle.js
//Buscamos el input text llamado q y le escribimos programador novato
setTimeout(() => {
    console.log('Rejecting Cookies Action');
    // // Si estamos en el mundo.es  o el mundo.com hacemos el siguiente
    let URLactual = window.location.href;

    if (URLactual.includes('elmundo.es') || URLactual.includes('elmundo.com')) {
        const ModalCookies = document.querySelector('.popup-disagreed-cookies');
        if (ModalCookies) {
            const body = document.querySelector('body');
            body.classList.remove('ue-modal-open');
            ModalCookies.style.display = 'none';
            console.log('Modal Cookies');
        }
    }
    if (URLactual.includes('elperiodico.com') || URLactual.includes('elperiodico.es')) {
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
