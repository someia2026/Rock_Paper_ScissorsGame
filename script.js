// RAPPEL
// Créer ma fonction
// Rôle : ce qu'elle doit faire
// paramètre: ce dont elle a besoin pour fonctionner
// retour: ce que la fonction va retourner, va nous donner

//Rôle: donner la possibilité au joueur de choisir entre Pierre, Feuille, Ciseaux
//Paramètre: Non
//Retour: délivrer choix 

function ChoixJoueur() {
    let ChoixJ=prompt("Choisissez Pierre, Feuille ou pierre");
    return ChoixJ;
}

//rôle: l'ordinateur choisit de manière aléatoire un chiffre entre 1 et 3
//1=papier 2=Feuille 3=Pierre
// paramètre: non
//retour: le choix de l'ordinateur sous forme de chaîne de caractère

function choixOrdi() {
    Math.ceil(Math.random()*3)
}



