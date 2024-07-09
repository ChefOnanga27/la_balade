/*EPISODE 1
 programme qui demande à l’utilisateur son adresse e-mail  */

 let email= prompt('Veuillez inserer votre Email')
 /*un message en cas d’erreur si l’adresse e-mail n’est pas correctement saisie. */
 function validateEmail(email) {
     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return re.test(email);
 }
 if (!validateEmail(email)) {
     alert('Erreur: Adresse e-mail invalide');
 } else {
     alert('Adresse e-mail valide');
 }
 
//  Episode 2   Fonction pour valider le mot de passe//
function validatePassword(password) {
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasDigit = /\d/;

    return minLength.test(password) && hasUpperCase.test(password) && hasDigit.test(password);
}

// Demander à l'utilisateur de renseigner un mot de passe
let password = prompt('Veuillez entrer votre mot de passe :');

// Vérifier si le mot de passe répond aux critères
if (validatePassword(password)) {
    alert('Mot de passe valide');
} else {
    alert('Erreur: Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre');
}


/*EPISODE9 */
function tableDeMultiplication(nombre) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
}

// Exemple d'utilisation
tableDeMultiplication(5);

/*EPISODE 10 */
function estPair(nombre) {
    return nombre % 2 === 0;
}

// Exemple d'utilisation
console.log(estPair(4)); // true
console.log(estPair(7)); // false
