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

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); // Change slide every 2 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


