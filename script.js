// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });

    // Your additional custom JavaScript can go here

});

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
}

const wealtheonImages = document.querySelectorAll('#wealtheon-article img');
let wealtheonCurrentImageIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    wealtheonImages[wealtheonCurrentImageIndex].classList.remove('active');
    wealtheonCurrentImageIndex = (wealtheonCurrentImageIndex - 1 + wealtheonImages.length) % wealtheonImages.length;
    wealtheonImages[wealtheonCurrentImageIndex].classList.add('active');
});

document.getElementById('nextBtn').addEventListener('click', () => {
    wealtheonImages[wealtheonCurrentImageIndex].classList.remove('active');
    wealtheonCurrentImageIndex = (wealtheonCurrentImageIndex + 1) % wealtheonImages.length;
    wealtheonImages[wealtheonCurrentImageIndex].classList.add('active');
});




