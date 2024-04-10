const menuIcon = document.getElementById('menuIcon'); // Utilisez 'menuIcon' au lieu de 'menu-icon'
const dropdownMenu = document.querySelector('.dropdown-menu'); // Utilisez '.dropdown-menu' pour sélectionner par classe
const aboutMeLink = document.getElementById('aboutMeLink');
const experiencesLink = document.getElementById('experiencesLink');
const worksLink = document.getElementById('worksLink');
const presentationDiv = document.querySelector('.Presentation');


// ouvrir le menu déroulant
menuIcon.addEventListener('click', function() {
    console.log('clicked');
    dropdownMenu.classList.toggle('show');
    console.log(dropdownMenu.classList.contains('show')); // Vérifie si la classe 'show' est ajoutée
});


// Ajoute un écouteur d'événements à l'objet global 'window' pour l'événement 'click'
window.addEventListener('click', function(event) {
    // Si l'élément cliqué n'est pas l'élément avec l'id 'menuIcon'
    if (!event.target.matches('#menuIcon')) {
        // Si le menu déroulant est actuellement affiché (c'est-à-dire si 'dropdownMenu' a la classe 'show')
        if (dropdownMenu.classList.contains('show')) {
            // Enlevez la classe 'show', ce qui ferme le menu déroulant
            dropdownMenu.classList.remove('show');
        }
    }
});

// Ajoute un écouteur d'événements à l'objet 'aboutMeLink' pour l'événement 'click'
aboutMeLink.addEventListener('click', function(event) {
    // Empêche le comportement par défaut du lien (changement de page)
    event.preventDefault();
    // Mettez à jour le contenu de la div 'presentationDiv' avec le contenu de la section "About Me"
    // Ici, vous essayez d'assigner un chemin de fichier à 'innerHTML', ce qui ne fonctionnera pas comme prévu.
    // Vous devriez utiliser 'fetch' pour charger le contenu du fichier, comme vous l'avez fait pour 'experiencesLink' et 'worksLink'.
    presentationDiv.innerHTML = "../html/test.html";
});

// Ajoute un écouteur d'événements à l'objet 'experiencesLink' pour l'événement 'click'
experiencesLink.addEventListener('click', function(event) {
    // Empêche le comportement par défaut du lien (changement de page)
    event.preventDefault();
    // Utilise 'fetch' pour charger le contenu du fichier 'experiences.html'
    fetch('../experiences.html')
        // Convertit la réponse en texte
        .then(response => response.text())
        // Utilise le texte de la réponse pour mettre à jour le contenu de 'presentationDiv'
        .then(data => {
            presentationDiv.innerHTML = data;
        });
});

// Ajoute un écouteur d'événements à l'objet 'worksLink' pour l'événement 'click'
worksLink.addEventListener('click', function(event) {
    // Empêche le comportement par défaut du lien (changement de page)
    event.preventDefault();
    // Utilise 'fetch' pour charger le contenu du fichier 'works.html'
    fetch('works.html')
        // Convertit la réponse en texte
        .then(response => response.text())
        // Utilise le texte de la réponse pour mettre à jour le contenu de 'presentationDiv'
        .then(data => {
            presentationDiv.innerHTML = data;
        });
});
