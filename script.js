/* =========================================
   AQSA'S BIRTHDAY WEBSITE
   JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       LOADER
    ===================================== */

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1200);


    /* =====================================
       ELEMENTS
    ===================================== */

    const openButton =
        document.getElementById("openButton");

    const envelopeButton =
        document.getElementById("envelopeButton");

    const finalLetter =
        document.getElementById("finalLetter");

    const confetti =
        document.getElementById("confetti");


    /* =====================================
       CREATE FLOATING HEARTS
    ===================================== */

    const heartsContainer =
        document.querySelector(".background-hearts");

    const heartSymbols = [
        "♡",
        "♥",
        "♡",
        "✦"
    ];

    function createHeart() {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            heartSymbols[
                Math.floor(
                    Math.random() *
                    heartSymbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (9 + Math.random() * 10) + "s";

        heart.style.animationDelay =
            Math.random() * 5 + "s";

        heartsContainer.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 20000);
    }


    for (let i = 0; i < 15; i++) {

        createHeart();
    }

    setInterval(createHeart, 1800);


    /* =====================================
       CREATE SPARKLES
    ===================================== */

    const sparkleContainer =
        document.querySelector(".sparkles");

    function createSparkle() {

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "sparkle";

        sparkle.textContent =
            Math.random() > 0.5
                ? "✦"
                : "✧";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.fontSize =
            (8 + Math.random() * 12) + "px";

        sparkle.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        sparkle.style.animationDelay =
            Math.random() * 2 + "s";

        sparkleContainer.appendChild(sparkle);

    }


    for (let i = 0; i < 25; i++) {

        createSparkle();
    }


    /* =====================================
       OPEN BUTTON
    ===================================== */

    openButton.addEventListener("click", () => {

        const birthday =
            document.getElementById("birthday");

        birthday.classList.add("visible");

        birthday.scrollIntoView({
            behavior: "smooth"
        });

        createConfetti();

        revealSections();

    });


    /* =====================================
       REVEAL SECTIONS
    ===================================== */

    function revealSections() {

        const sections =
            document.querySelectorAll(
                ".hidden-section"
            );

        sections.forEach((section, index) => {

            setTimeout(() => {

                section.classList.add("visible");

            }, 700 + index * 250);

        });
    }


    /* =====================================
       CONFETTI
    ===================================== */

    function createConfetti() {

        confetti.innerHTML = "";

        const symbols = [
            "♡",
            "✦",
            "✧",
            "•",
            "♥"
        ];


        for (let i = 0; i < 80; i++) {

            const piece =
                document.createElement("span");

            piece.className =
                "confetti";

            piece.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            piece.style.left =
                Math.random() * 100 + "%";

            piece.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            piece.style.animationDelay =
                Math.random() * 1.5 + "s";

            piece.style.fontSize =
                (8 + Math.random() * 14) + "px";

            piece.style.color =
                Math.random() > 0.5
                    ? "#C85C7A"
                    : "#EFA8BC";

            confetti.appendChild(piece);

        }


        setTimeout(() => {

            confetti.innerHTML = "";

        }, 8000);
    }


    /* =====================================
       INTERACTIVE THING CARDS
    ===================================== */

    const thingCards =
        document.querySelectorAll(
            ".thing-card"
        );


    thingCards.forEach(card => {

        card.addEventListener("click", () => {

            const alreadyOpen =
                card.classList.contains("open");


            thingCards.forEach(otherCard => {

                otherCard.classList.remove(
                    "open"
                );

            });


            if (!alreadyOpen) {

                const message =
                    card.dataset.message;

                card.querySelector(
                    ".card-message"
                ).textContent = message;

                card.classList.add("open");

            }

        });

    });


    /* =====================================
       ENVELOPE
    ===================================== */

    envelopeButton.addEventListener("click", () => {

        const isOpen =
            envelopeButton.classList.contains(
                "open"
            );


        if (!isOpen) {

            envelopeButton.classList.add(
                "open"
            );

            setTimeout(() => {

                finalLetter.classList.add(
                    "show"
                );

                finalLetter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                createMiniConfetti();

            }, 900);

        }

    });


    /* =====================================
       MINI CONFETTI FOR FINAL MESSAGE
    ===================================== */

    function createMiniConfetti() {

        const symbols = [
            "♡",
            "✦",
            "✧"
        ];


        for (let i = 0; i < 35; i++) {

            const piece =
                document.createElement("span");

            piece.className =
                "confetti";

            piece.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            piece.style.position =
                "fixed";

            piece.style.left =
                Math.random() * 100 + "%";

            piece.style.top =
                "-20px";

            piece.style.zIndex =
                "999";

            piece.style.color =
                Math.random() > 0.5
                    ? "#C85C7A"
                    : "#EFA8BC";

            piece.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(piece);


            setTimeout(() => {

                piece.remove();

            }, 7000);

        }

    }


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    document
        .querySelectorAll(
            ".hidden-section"
        )
        .forEach(section => {

            observer.observe(section);

        });


});