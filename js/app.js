// EPISODE 3 Demander à l'utilisateur son nom
let nom = prompt('Veuillez entrer votre nom :');

// Demander à l'utilisateur le nombre d'enfants qu'il a
let nombreEnfants = prompt('Combien d\'enfants avez-vous ?');

// Convertir le nombre d'enfants en entier
nombreEnfants = parseInt(nombreEnfants, 10);

// Vérifier le nombre d'enfants et afficher le résumé approprié
if (isNaN(nombreEnfants) || nombreEnfants < 0) {
    alert('Le nombre d\'enfants saisi est invalide.');
} else if (nombreEnfants === 0) {
    alert(nom + ', vous n\'avez pas d\'enfant.');
} else if (nombreEnfants === 1) {
    alert(nom + ', vous avez 1 enfant.');
} else {
    alert(nom + ', vous avez ' + nombreEnfants + ' enfants.');
}

// Episode 4 Fonction pour valider le format de la date de naissance
function validateDate(date) {
    const re = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return re.test(date);
}

//   Demander à l'utilisateur de saisir sa date de naissance
let dateNaissance = prompt('Veuillez entrer votre date de naissance (JJ/MM/AAAA) :');

// Vérifier si la date saisie est valide
if (validateDate(dateNaissance)) {
    alert('La date de naissance est valide.');
} else {
    alert('Erreur: La date de naissance saisie est invalide. Veuillez utiliser le format JJ/MM/AAAA.');
}


//episode 5  Demander à l'utilisateur de saisir son nom, prénom et sexe
let name = prompt('Veuillez entrer votre name :');
let prenom = prompt('Veuillez entrer votre prénom :');
let sexe = prompt('Veuillez entrer votre sexe (Homme/Femme) :');

// Créer un objet pour stocker les informations de l'utilisateur
let utilisateur = {
    name: name,
    prenom: prenom,
    sexe: sexe
};

// Ajouter la propriété titre en fonction du sexe de l'utilisateur
if (sexe.toLowerCase() === 'homme') {
    utilisateur.titre = 'M';
} else if (sexe.toLowerCase() === 'femme') {
    utilisateur.titre = 'Mme';
} else {
    utilisateur.titre = 'Inconnu'; // Au cas où l'utilisateur saisit un sexe invalide
}

// Afficher l'objet en console
console.log(utilisateur);


// episode 6 Tableau contenant les jours de la semaine
const joursDeLaSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

// Demander à l'utilisateur de saisir le numéro d'un jour
let numeroJour = prompt('Veuillez entrer le numéro d\'un jour (1-7) :');

// Convertir le numéro saisi en entier
numeroJour = parseInt(numeroJour, 10);

// Vérifier si le numéro saisi est valide et renvoyer le jour correspondant
if (isNaN(numeroJour) || numeroJour < 1 || numeroJour > 7) {
    alert('Erreur: Le numéro de jour saisi est invalide. Veuillez entrer un numéro entre 1 et 7.');
} else {
    let jourCorrespondant = joursDeLaSemaine[numeroJour - 1];
    alert('Le jour correspondant est : ' + jourCorrespondant);

}


//EpISODD 7 Demander à l'utilisateur de saisir ses notes en Mathématiques
let nombreNotes = prompt('Combien de notes souhaitez-vous saisir ?');
nombreNotes = parseInt(nombreNotes);

// Vérifier si le nombre saisi est valide
if (isNaN(nombreNotes) || nombreNotes <= 0) {
    alert('Erreur: Veuillez entrer un nombre valide de notes.');
} else {
    let notes = []; // Tableau pour stocker les notes
    
    // Boucle pour saisir les notes
    for (let i = 0; i < nombreNotes; i++) {
        let note = prompt('Veuillez entrer la note ' + (i + 1) + ' (de 0 à 20) :');
        note = parseFloat(note); // Convertir la note en nombre décimal
        
        // Vérifier si la note est valide
        if (isNaN(note) || note < 0 || note > 20) {
            alert('Erreur: Veuillez entrer une note valide entre 0 et 20.');
            break; // Arrêter la saisie si une note invalide est saisie
        }
        
        notes.push(note); // Ajouter la note au tableau des notes
    }
    
    // Calculer la moyenne des notes
    if (notes.length > 0) {
        let sommeNotes = notes.reduce((acc, curr) => acc + curr, 0);
        let moyenne = sommeNotes / notes.length;
        
        // Afficher la moyenne
        alert('Votre moyenne en Mathématiques est : ' + moyenne.toFixed(2));
    } else {
        alert('Aucune note valide saisie. Impossible de calculer la moyenne.');
    }
}


//  episode 8 creation d'un tableau pour stocker les élèves
let eleves = [];

// Boucle pour saisir les informations des élèves
while (true) {
    let nom = prompt('Veuillez entrer le nom de l\'élève (ou laissez vide pour terminer) :');
    
    // Arrêter la saisie si le nom est vide
    if (nom === '') {
        break;
    }
    
    let moyenne = prompt('Veuillez entrer la moyenne de ' + nom + ' :');
    moyenne = parseFloat(moyenne);
    
    // Vérifier si la moyenne est valide
    if (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
        alert('Erreur: Veuillez entrer une moyenne valide entre 0 et 20.');
        continue;
    }
    
    // Ajouter l'élève au tableau
    eleves.push({ nom: nom, moyenne: moyenne });
}

// Vérifier s'il y a des élèves dans le tableau
if (eleves.length > 0) {
    // Trouver l'élève avec la meilleure moyenne
    let premier = eleves.reduce((best, eleve) => eleve.moyenne > best.moyenne ? eleve : best);
    
    // Afficher le premier de la classe
    alert('Le premier de la classe est ' + premier.nom + ' avec une moyenne de ' + premier.moyenne);
} else {
    alert('Aucun élève saisi.');
}
