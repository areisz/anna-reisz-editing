document.addEventListener('DOMContentLoaded', () => {

    let scrollPosition = window.scrollY;
    const navHeader = document.querySelector('#nav-menu');
    const headerHeight = navHeader.offsetHeight;


    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;

        if (scrollPosition >= headerHeight) {
            navHeader.classList.add("minimized")
        } 
        
        if (scrollPosition === 0) {
            navHeader.classList.remove("minimized")
        }
    })

});
