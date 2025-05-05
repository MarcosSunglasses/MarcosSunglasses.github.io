document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.profile-img');


    const images = [
        'Archivos/Marcos.png',
        'Archivos/Marcos.png',
        'Archivos/Marcos.png'
    ];


    setInterval(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        img.src = randomImage;
    }, 2000);
});
