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

function ChoixOrdi() {
    Math.ceil(Math.random()*3)
}
//Rôle: convertir les chiffres en mot
//paramètre : le nombre choisi par l'ordi
//retourne: le mot
//1=papier 2=Feuille 3=Pierre
function conversion(nbr){
    let choixO

}

//rôle: comparer le choix du joueur et le choix de l'ordi
//paramètre: choix du joueur et choix de l'ordinateur
//retour: le gagnant

function compare(ChoixJoueur, ChoixOrdi){
    let result;
    if (ChoixJoueur === ChoixOrdi){
        result="égalité"
    }else if (
        ChoixJoueur==="ciseaux"&&ChoixOrdi==="papier"||
        ChoixJoueur==="papier"&&ChoixOrdi==="pierre"||
        ChoixJoueur==="pierre"&&ChoixOrdi==="ciseaux"
    ){
        result="Vous avez gagné!"
    }
    else {
        result="L'ordinateur gagne!"
    }
    return result;    
}

//rôle: Afficher les choix et le gagnant
//paramètre: choix du joueur, choix de l'ordinateur, résultat
//retour:

function affiche(ChoixJoueur, ChoixOrdi, resultat) {
    alert(`choix du joueur:${ChoixJoueur}//choix de l'ordinateur: ${choixOrdinateur}
        {resultat}`)
    
}
//role: lancer le jeu en lançant les fonctions dans le bon ordre
//paramètre: non
//retour:non

function Joueur() {
    ChoixJoueur();
    ChoixOrdi();
    conversion();
    compare();
    affiche();
    
}