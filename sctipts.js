// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Fecha o menu mobile se estiver aberto
            navMenu.classList.remove('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = '#0d9488';
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        header.style.background = '#0d9488';
        header.style.boxShadow = 'none';
    }
});

 // Código do Carrossel
 const carousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.carousel-slide'),
    dots: [],
    init: function() {
        // Criar dots
        const buttonsContainer = document.querySelector('.carousel-buttons');
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            buttonsContainer.appendChild(dot);
            this.dots.push(dot);
        });

        // Adicionar event listeners para as setas
        document.querySelector('.carousel-prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.carousel-next').addEventListener('click', () => this.nextSlide());

        // Iniciar autoplay
        this.startAutoplay();
    },
    goToSlide: function(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    },
    nextSlide: function() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    },
    prevSlide: function() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    },
    startAutoplay: function() {
        setInterval(() => this.nextSlide(), 5000);
    }
};

// Inicializar o carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
});