const galleryItems = document.querySelectorAll(".gallery-item");
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");

        galleryItems.forEach(item => {
            item.addEventListener("click", () => {
                lightbox.classList.add("active");
                lightboxImg.src = item.querySelector("img").src;
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });

        /* ===== SCROLL ANIMATION ===== */
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 });

        galleryItems.forEach(item => {
            observer.observe(item);
        });