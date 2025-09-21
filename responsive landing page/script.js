document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.getElementById('main-header');

    function handleScroll() {
        if (window.scrollY > 50) { 
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});