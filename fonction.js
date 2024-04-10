// Création d'un élément link pour lier le fichier CSS
var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'style.css'; // Le chemin de votre fichier CSS

// Ajout de l'élément link au head du document
let isFirstScroll = true;

window.addEventListener('scroll', function() {
    if (isFirstScroll) {
        // Création d'un élément style pour ajouter l'effet de flou
        var styleElement = document.createElement('style');
        styleElement.innerHTML = "#header { backdrop-filter: blur(20px);}"; // Appliquer le flou à l'en-tête
        document.head.appendChild(styleElement);
        
        isFirstScroll = false;
    }
});
