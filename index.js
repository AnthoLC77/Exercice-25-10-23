//// EXO TABLEAU ////

/// EXO 3 ///
/*
let tab = [15, -2, 11, 29, -8, -20];

const compareNb = (a, b) => {
  return -a + b;
};

tab.sort(compareNb);
console.log(tab);
*/

/// EXO 6 ///
/*
let tableau = [3, -6, 19, 15, -9, -14, 99];
let tableauPositifs = [];
let tableauNegatifs = [];

tableau.forEach((nombre) => {
  if (nombre > 0) {
    tableauPositifs.push(nombre);
  } else {
    tableauNegatifs.push(nombre);
  }
});

console.log(tableauPositifs);
console.log(tableauNegatifs);
*/
/// EXO 7 ///
/*
let x = [1, 5, 1, 2, 2, 3, 2];

let ensembleValeursDistinctes = [...new Set(x)];
console.log(ensembleValeursDistinctes);

let nombreValeurDistinctes = ensembleValeursDistinctes.length;
console.log(nombreValeurDistinctes);

let ensembleEffectifsCorrespon;
*/
//// LES CHAINES ////

/// EXO 1 ///
/*
let motUser = prompt("Choisir un mot.");

const occuStr = (mot, lettre) => {
  mot = mot.split("");
  let nombreDeFoisTrouve = 0;

  for (let i = 0; i < mot.length; i++) {
    if (lettre == mot[i]) {
      nombreDeFoisTrouve++;
    }
  }
  document.write(
    mot + " contient " + nombreDeFoisTrouve + " fois la lettre " + lettre
  );
};
occuStr(motUser, "a");
*/
/// EXO 2 ///
/*
let userMot = prompt("Choisir un mot.");

const longueurStr = (mot) => {
  return document.write(mot + " contient " + mot.length + " lettres");
};

console.log(longueurStr(userMot));
*/
/// EXO 3 ///
/*
let phraseUser = prompt("Choisir une phrase.");
let caracteresASupprimer = prompt(
  "Choisir un caracteres à supprimer dans la phrase =>" + phraseUser
);

const suppr = (phrase, caract) => {
  let phraseSplit = phrase.split("");
  let supprArray = phraseSplit.filter((l) => {
    return l !== caract;
  });
  console.log(supprArray);
  document.write(supprArray);
};

suppr(phraseUser, caracteresASupprimer);
*/
/// EXO 6 ///

let motUser = prompt("Ecrire un mot au choix.");

const palindrome = (mot) => {
  let splitMot = mot.split("");
  splitMot.reverse();
  let motRattache = splitMot.join("");
  if (mot == motRattache) {
    return document.write(
      mot + " => " + motRattache + " est bien un palindrome"
    );
  } else {
    return document.write(
      mot + " => " + motRattache + " n'est pas un palindrome"
    );
  }
};

console.log(palindrome(motUser));
