const boats = [

    {
        id: 1,

        name: "Fibrafort Style 215",

        category: "small",

        description:
            "Fibrafort Style 215 — это бразильский каютный катер. При относительно небольших размерах он обладает полноценной каютой, что делает его уникальным в своём классе.",

        power: "150 л.с.",

        capacity: "6 человек",

        price: "6000 ₽ / час",

        images: [
            "images/eb2746a3b66266aa959d9b30c106981c80337665.png",
            "images/094d09d577c71ec192e18b1ce7db924319993a04.jpg",
            "images/db76f63521c4d565dad47b2799487ea309d060e1.png"
        ]
    },


    {
        id: 2,

        name: "SeaRay 175 Sport",

        category: "small",

        description:
            "Sea Ray 175 — компактный прогулочный катер класса Sport Boats. Это самая маленькая и доступная модель в линейке Sea Ray, которая сочетает манёвренность, скорость и продуманную компоновку.",

        power: "135 л.с.",

        capacity: "7 человек",

        price: "6000 ₽ / час",

        images: [
            "images/4aaf303d510c176ef224f90eda59239ce4a02c46.jpg",
            "images/7955a80e6cbc1b927398aca958b0a51847ab6629.webp",
            "images/453803142b9605b44cc7c0562d7966e77e3dfbf6.webp"
        ]
    },


    {
        id: 3,

        name: "Hakuna Matata",

        category: "large",

        description:
            "Прекрасный вариант отдыха на природе в кругу друезй и семьи, с мангалом и вторым этажом.",

        power: "50л.с.",

        capacity: "10 человек",

        price: "5000 ₽ / час",

        images: [
            "images/IMG_0470.png",
            "images/IMG_0468.png",
            "images/IMG_0471.png"
        ]
    },


    {
        id: 4,

        name: "Название катера",

        category: "large",

        description:
            "Краткое описание катера. Здесь можно указать назначение, особенности и формат отдыха.",

        power: "___ л.с.",

        capacity: "___ человек",

        price: "_____ ₽ / час",

        images: [
            "images/boats/boat-4-1.jpg",
            "images/boats/boat-4-2.jpg",
            "images/boats/boat-4-3.jpg"
        ]
    },


    {
        id: 5,

        name: "Название катера",

        category: "large",

        description:
            "Краткое описание катера. Здесь можно указать назначение, особенности и формат отдыха.",

        power: "___ л.с.",

        capacity: "___ человек",

        price: "_____ ₽ / час",

        images: [
            "images/boats/boat-5-1.jpg",
            "images/boats/boat-5-2.jpg",
            "images/boats/boat-5-3.jpg"
        ]
    },


    {
        id: 6,

        name: "Название катера",

        category: "small",

        description:
            "Краткое описание катера. Здесь можно указать назначение, особенности и формат отдыха.",

        power: "___ л.с.",

        capacity: "___ человек",

        price: "_____ ₽ / час",

        images: [
            "images/boats/boat-6-1.jpg",
            "images/boats/boat-6-2.jpg",
            "images/boats/boat-6-3.jpg"
        ]
    }

];


const boatsList = document.getElementById("boats-list");


/* =========================================
   СОЗДАНИЕ КАРТОЧКИ
========================================= */

function createBoatCard(boat) {

    const card = document.createElement("article");

    card.className = "boat-card";

    card.dataset.category = boat.category;


    card.innerHTML = `

        <div class="boat-gallery">

            <img
                class="boat-main-image"
                src="${boat.images[0]}"
                alt="${boat.name}"
            >

            <button
                type="button"
                class="gallery-btn gallery-prev"
                aria-label="Предыдущее фото">
                ‹
            </button>

            <button
                type="button"
                class="gallery-btn gallery-next"
                aria-label="Следующее фото">
                ›
            </button>

            <div class="gallery-counter">
                <span class="current-photo">1</span>
                /
                ${boat.images.length}
            </div>

        </div>


        <div class="boat-card-content">

            <p class="boat-category">
                ${
                    boat.category === "small"
                        ? "ДО 6 ЧЕЛОВЕК"
                        : "ОТ 7 ЧЕЛОВЕК"
                }
            </p>


            <h2>
                ${boat.name}
            </h2>


            <p class="boat-description">
                ${boat.description}
            </p>


            <div class="boat-specs">

                <div class="boat-spec">

                    <span class="spec-title">
                        Мощность
                    </span>

                    <strong>
                        ${boat.power}
                    </strong>

                </div>


                <div class="boat-spec">

                    <span class="spec-title">
                        Вместимость
                    </span>

                    <strong>
                        ${boat.capacity}
                    </strong>

                </div>

            </div>


            <div class="boat-bottom">

                <div class="boat-price">

                    <span>
                        Стоимость
                    </span>

                    <strong>
                        ${boat.price}
                    </strong>

                </div>


                <a
                    href="boat.html?id=${boat.id}"
                    class="boat-button">

                    Подробнее

                </a>

            </div>

        </div>

    `;


    setupGallery(card, boat);


    return card;
}


/* =========================================
   ГАЛЕРЕЯ КАРТОЧКИ
========================================= */

function setupGallery(card, boat) {

    const image =
        card.querySelector(".boat-main-image");

    const prevButton =
        card.querySelector(".gallery-prev");

    const nextButton =
        card.querySelector(".gallery-next");

    const counter =
        card.querySelector(".current-photo");


    let currentIndex = 0;


    function showImage(index) {

        if (index < 0) {
            index = boat.images.length - 1;
        }

        if (index >= boat.images.length) {
            index = 0;
        }

        currentIndex = index;

        image.src = boat.images[currentIndex];

        counter.textContent =
            currentIndex + 1;
    }


    prevButton.addEventListener("click", function (event) {

        event.preventDefault();

        event.stopPropagation();

        showImage(currentIndex - 1);

    });


    nextButton.addEventListener("click", function (event) {

        event.preventDefault();

        event.stopPropagation();

        showImage(currentIndex + 1);

    });


    image.addEventListener("click", function () {

        showImage(currentIndex + 1);

    });


    image.addEventListener("error", function () {

        image.style.display = "none";

        card
            .querySelector(".boat-gallery")
            .classList.add("no-image");

    });

}


/* =========================================
   ВЫВОД КАТЕРОВ (boats.html и index.html)
========================================= */

function renderBoats(filter = "all") {

    /* Рендер на boats.html */
    if (boatsList) {

        boatsList.innerHTML = "";

        const filteredBoats =
            boats.filter(function (boat) {
                return (
                    filter === "all" ||
                    boat.category === filter
                );
            });

        filteredBoats.forEach(function (boat) {
            const card = createBoatCard(boat);
            boatsList.appendChild(card);
        });

    }


    /* Рендер на index.html — блок "Выберите свой катер" */
    const featuredContainer =
        document.getElementById("featured-boats");

    if (featuredContainer) {

        featuredContainer.innerHTML = "";

        /* Показываем только первые 2 катера */
        boats.slice(0, 2).forEach(function (boat) {
            const card = createBoatCard(boat);
            featuredContainer.appendChild(card);
        });

    }

}


/* =========================================
   ФИЛЬТРЫ
========================================= */

document
    .querySelectorAll(".filter")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            document
                .querySelectorAll(".filter")
                .forEach(function (btn) {

                    btn.classList.remove("active");

                });


            this.classList.add("active");


            renderBoats(
                this.dataset.filter
            );

        });

    });


/* =========================================
   СТРАНИЦА ОТДЕЛЬНОГО КАТЕРА (boat.html)
========================================= */

function renderBoatPage() {

    const container =
        document.getElementById("boat-page");

    if (!container) return;


    const params =
        new URLSearchParams(window.location.search);

    const boatId =
        Number(params.get("id"));

    const boat =
        boats.find(item => item.id === boatId);


    if (!boat) {

        container.innerHTML = `

            <section class="section">

                <p class="eyebrow dark">
                    КАТЕР НЕ НАЙДЕН
                </p>

                <h1 style="font-size:60px;line-height:.9;letter-spacing:-3px;">
                    Такого катера<br>
                    <span>нет в нашем флоте</span>
                </h1>

                <a href="boats.html"
                   class="btn btn-dark"
                   style="margin-top:40px;">

                    Вернуться к катерам

                </a>

            </section>

        `;

        return;

    }


    const categoryLabel =
        boat.category === "small"
            ? "ДО 6 ЧЕЛОВЕК"
            : "ОТ 7 ЧЕЛОВЕК";


    container.innerHTML = `

        <section class="boat-page-hero">

            <div class="boat-page-gallery">

                <img
                    class="boat-page-main-image"
                    src="${boat.images[0]}"
                    alt="${boat.name}"
                >

                <button
                    type="button"
                    class="gallery-btn gallery-prev"
                    aria-label="Предыдущее фото">
                    ‹
                </button>

                <button
                    type="button"
                    class="gallery-btn gallery-next"
                    aria-label="Следующее фото">
                    ›
                </button>

                <div class="gallery-counter">
                    <span class="current-photo">1</span>
                    / ${boat.images.length}
                </div>

            </div>


            <div class="boat-page-info">

                <p class="boat-category">
                    ${categoryLabel}
                </p>

                <h1>
                    ${boat.name}
                </h1>

                <p class="boat-page-description">
                    ${boat.description}
                </p>


                <div class="boat-page-specs">

                    <div class="boat-spec">
                        <span class="spec-title">Мощность</span>
                        <strong>${boat.power}</strong>
                    </div>

                    <div class="boat-spec">
                        <span class="spec-title">Вместимость</span>
                        <strong>${boat.capacity}</strong>
                    </div>

                </div>


                <div class="boat-page-price">
                    <span>Стоимость</span>
                    <strong>${boat.price}</strong>
                </div>


                <button
                    type="button"
                    class="btn btn-dark boat-book-btn"
                    onclick="openBooking(${boat.id})">

                    Забронировать

                </button>

            </div>

        </section>

    `;


    setupBoatPageGallery(boat);

}


/* =========================================
   ГАЛЕРЕЯ НА СТРАНИЦЕ КАТЕРА
========================================= */

function setupBoatPageGallery(boat) {

    const image =
        document.querySelector(".boat-page-main-image");

    const prevButton =
        document.querySelector(".boat-page-hero .gallery-prev");

    const nextButton =
        document.querySelector(".boat-page-hero .gallery-next");

    const counter =
        document.querySelector(".boat-page-hero .current-photo");


    if (!image) return;


    let currentIndex = 0;


    function showImage(index) {

        if (index < 0) {
            index = boat.images.length - 1;
        }

        if (index >= boat.images.length) {
            index = 0;
        }

        currentIndex = index;

        image.src = boat.images[currentIndex];

        counter.textContent =
            currentIndex + 1;
    }


    prevButton.addEventListener("click", function () {

        showImage(currentIndex - 1);

    });


    nextButton.addEventListener("click", function () {

        showImage(currentIndex + 1);

    });

}


/* =========================================
   ЗАПУСК
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    renderBoats();

    renderBoatPage();

});