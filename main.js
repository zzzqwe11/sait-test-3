function toggleMenu() {
    const nav = document.querySelector(".nav");

    if (nav) {
        nav.classList.toggle("mobile-open");
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const forms = document.querySelectorAll(
        ".contact-form, .captain-form"
    );

    forms.forEach(form => {

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            alert(
                "Спасибо! Ваше сообщение отправлено."
            );

            form.reset();

        });

    });

});

/* Компенсация ширины скроллбара — чтобы хедер не прыгал */
function setScrollbarWidth() {
    const width = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', width + 'px');
}

document.addEventListener('DOMContentLoaded', setScrollbarWidth);
window.addEventListener('resize', setScrollbarWidth);

/* =========================================
   МОБИЛЬНОЕ МЕНЮ (бургер)
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const toggle =
        document.querySelector(".menu-toggle");

    const menu =
        document.getElementById("mobile-menu");

    if (!toggle || !menu) return;


    toggle.addEventListener("click", function () {

        const isOpen =
            menu.classList.toggle("active");

        toggle.classList.toggle("active", isOpen);

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

        toggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /* Закрываем меню по клику на ссылку */
    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("active");

            toggle.classList.remove("active");

            document.body.classList.remove("menu-open");

            toggle.setAttribute("aria-expanded", "false");

        });

    });


    /* Закрываем по Esc */
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && menu.classList.contains("active")) {

            menu.classList.remove("active");

            toggle.classList.remove("active");

            document.body.classList.remove("menu-open");

            toggle.setAttribute("aria-expanded", "false");

        }

    });

});