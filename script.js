document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.profile-img');


    const images = [
        'proyectos/Marcos.png',
        'proyectos/Marcos.png',
        'proyectos/Marcos.png'
    ];


    setInterval(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        img.src = randomImage;
    }, 2000);
});
