window.addEventListener('DOMContentLoaded', () => {

    // parallax effect in .modal-geo
    let bg = document.querySelector('.modal-geo__img_parallax');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.style.transform = 'translate(-' + x * 55 + 'px, -' + y * 55 + 'px)';
    });

    const modalTrigger = document.querySelectorAll('[data-modal-geo]'),
        modalFade = document.querySelector('.modal'),
        modalGeo = document.querySelector('.modal-geo'),
        modalCloseBtn = document.querySelector('[data-close-modal]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modalFade.classList.toggle('modal_show');
            modalGeo.classList.toggle('modal-geo_show');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modalFade.classList.toggle('modal_show');
        modalGeo.classList.toggle('modal-geo_show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    // Закрытие модалки по клику на область вне тела модалки 
    modalFade.addEventListener('click', (e) => {
        if (e.target === modalFade) {
            closeModal();
        }
    });

    // Закрытие модалки по нажатию на Esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalFade.classList.contains('modal_show')) {
            closeModal();
        }
    });
});

