const MODALS_COOKIES = [
    '#pmConsentWall',
    '.popup-disagreed-cookies',
    '#didomi-host',
    '.didomi-popup',
    '#onetrust-consent-sdk',
    '#sp_message_container_1005436',
    '#_an_cmp'
];



function hideCookieModal(selector) {
    const modalCookies = document.querySelector(selector);
    if (modalCookies) {
        setTimeout(() => {
            const body = document.querySelector('body');
            const html = document.querySelector('html');
            body.classList.remove(...body.classList);
            html.classList.remove(...html.classList);
            modalCookies.style.display = 'none';
            body.style.overflow = 'auto';
        }, 1000);

        modalCookies.style.display = 'none';
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


if (window.location.href.includes('elpais')) {
    checkofExist("#pmConsentWall")
}

MODALS_COOKIES.forEach((modal) => {
    checkofExist(modal);
});