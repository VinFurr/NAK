function openFullscreen(imgElement, captionText) {
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    fullscreenImage.src = imgElement.src;
    fullscreenCaption.textContent = captionText;
    overlay.style.display = 'flex';
}

function closeFullscreen() {
    const overlay = document.getElementById('fullscreen-overlay');
    overlay.style.display = 'none';
}