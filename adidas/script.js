document.addEventListener("DOMContentLoaded", function () {
    const verFotosLinks = document.querySelectorAll('.ver-fotos');
    const imageViewer = document.getElementById('imageViewer');
    const currentImage = document.getElementById('currentImage');
    const fecharViewer = document.getElementById('fecharViewer');
    const anteriorImage = document.getElementById('anteriorImage');
    const proximoImage = document.getElementById('proximoImage');

    let currentImageIndex = 0;
    let clickedLink = null;
    let images = [];

    verFotosLinks.forEach((verFotosLink, index) => {
        verFotosLink.addEventListener('click', () => {
            const dataImages = verFotosLink.getAttribute('data-images').split(', ');
            images = dataImages;
            currentImageIndex = 0;
            showImage(currentImageIndex);
            imageViewer.style.display = 'block';
            clickedLink = verFotosLink;
        });
    });

    function showImage(index) {
        currentImage.src = images[index];
    }

    anteriorImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    proximoImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    fecharViewer.addEventListener('click', () => {
        imageViewer.style.display = 'none';
        clickedLink.scrollIntoView();
    });
});