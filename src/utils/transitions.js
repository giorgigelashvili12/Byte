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