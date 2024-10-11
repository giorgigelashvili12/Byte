// Scroll detector
let defaultY = 0;

export function detectScroll() {
    window.addEventListener('scroll', function scrollDetect() {
        let current = window.scrollY;
        const header = document.getElementById('header');

        if(current !== defaultY) {
            if(current > defaultY) {
                header.classList.add('scrolling-down');
                header.classList.remove('scrolling-up');
            } else {
                header.classList.remove('scrolling-down');
                header.classList.add('scrolling-up');
            }
        }

        defaultY = current;
    });
}