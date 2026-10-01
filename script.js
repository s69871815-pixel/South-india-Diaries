// ================= FILTER GALLERY =================

const filterButtons =
    document.querySelectorAll(".filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        this.classList.add("active");

        const filter =
            this.getAttribute("data-filter");


        galleryItems.forEach(item => {

            const place =
                item.getAttribute("data-place");


            if (filter === "all" || place === filter) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ================= IMAGE FULLSCREEN =================

galleryItems.forEach(item => {

    item.addEventListener("click", function () {

        const image =
            this.querySelector("img");

        if (image) {

            window.open(
                image.src,
                "_blank"
            );

        }

    });

});