//Learning reference for carousel: https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
!(function (d) {
    // To retrieve carousel items, count how many items, set the slide to 0, and set motion to true which disables interactivity.
    var items;
    var slide;
    var totalItems;
    var moving;
    var itemClassName = "carousel__photo";
    items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;
    // To initialise the carousel
    function setInitialClasses() {
        // Target the last, initial, and next items and give them the relevant class.
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }
    // Clickable navigation buttons
    function setEventListeners() {
        var next = d.getElementsByClassName('carousel__button--next')[0],
            prev = d.getElementsByClassName('carousel__button--prev')[0];
        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }
    // Disable interaction by setting 'moving' to true
    function disableInteraction() {
        moving = true;
        setTimeout(function () {
            moving = false;
        }, 500);
    }

    function moveCarouselTo(slide) {
        // Checks if carousel is moving or allow interaction
        if (!moving) {
            // temporarily disable interactivity to load carousel item
            disableInteraction();
            // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;
            // Test if carousel has more than three items
            if ((totalItems - 1) > 3) {
                // Checks if the new potential slide is out of bounds and sets slide numbers
                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)) {
                    oldNext = 0;
                }
                // Check if current slide is at the beginning or end and sets slide numbers
                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems - 1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }
                // Triggering the carousel's transitions.
                // Based on the current slide, reset to default classes.
                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;
                // Add the new classes
                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }
    // Next navigation item
    function moveNext() {
        // Check if moving
        if (!moving) {
            // reset to 0 if last slide, else +1
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }
            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }
    // Previous navigation handler
    function movePrev() {
        // Check if moving
        if (!moving) {
            // If it's the first slide, set as the last slide, else -1
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }
            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }
    // Initialise carousel
    function initCarousel() {
        setInitialClasses();
        setEventListeners();
        // Set moving to false now that the carousel is ready
        moving = false;
    }
    // calling the carousel function
    initCarousel();
}(document));