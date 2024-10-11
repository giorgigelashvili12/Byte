// Header Transition
export function headerTransition() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if(this.window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    })
}

// Content/Text Animation
// Banner Content Transition
export function bannerTransition() {
    const content = document.getElementById('content-tra');

    window.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Loaded => Banner Transition');
        setTimeout(() => {
            content.style.opacity = 1;
            content.style.marginTop = '0px';
        }, 1500)
    })
}