// FIZZBUZZ

// for (i = 0; i <= 100; i++) {
//   let prog = "";
//   if (i % 3 == 0) {
//     prog += "fizz";
//   }
//   if (i % 5 == 0) {
//     prog += "buzz";
//   }
//   if (prog == "") {
//     prog = i;
//   }
//   console.log(prog);
// }

// for (let i = 1; i<=100; i++) {
//     let temp = ""
//     if (i%3===0){
//         temp += "fizz"
//     }
//     if (i%5===0){
//         temp += "buzz"
//     }
//     if (temp === ""){
//         temp = i
//     }
//     console.log(temp)
// }

// PORTE

// let gate = [[]]
// const size = 20
// for (let row = 0; row < size; row++) {
//     gate[row] = []
//     for (let column = 0; column < size; column++) {
//         gate[row][column] = " "
//     }
// }

// for (let edge = 0; edge < size / 2; edge += 4) {
//     for (let row = edge; row < size - edge; row++) {
//         for (let column = edge; column < size - edge; column++) {
//             if ((row === edge) || (row === size - 1 - edge)
//                 || (column === edge) || (column === size - 1 - edge)) {
//                 gate[row][column] = "X"
//             }
//         }
//     }
// }

// for (let row = 0; row < size; row++) {
//     let line = ""
//     for (let column = 0; column < size; column++) {
//         line += gate[row][column]
//     }
//     console.log(line)
// }

// CASCADE

// const WIDTH = 20;
// const EDGE_CHARACTER = "|";
// const EMPTY_CHARACTER = " ";
// const BALL_RIGHT = "\\";
// const BALL_LEFT = "/";
// const WAITING_TIME_IN_SECOND = 0.1;

// let line = [];
// line[0] = EDGE_CHARACTER;
// for (let i = 1; i < WIDTH - 1; i++) {
//   line[i] = EMPTY_CHARACTER;
// }
// line[WIDTH - 1] = EDGE_CHARACTER;
// line[1] = BALL_RIGHT;

// while (true) {
//   let displayedLine = "";
//   for (let i = 0; i < WIDTH; i++) {
//     displayedLine += line[i];
//   }
//   console.log(displayedLine);

//   var waitTill = new Date(new Date().getTime() + WAITING_TIME_IN_SECOND * 1000);
//   while (waitTill > new Date()) {}

//   for (let i = 1; i < WIDTH - 1; i++) {
//     if (line[i] === BALL_RIGHT){
//       if (i < WIDTH - (Math.floor(Math.random()*WIDTH)+1)) {
//         line[i] = EMPTY_CHARACTER;
//         line[i + 1] = BALL_RIGHT;
//       } else {
//         line[i] = BALL_LEFT;
//       }
//       i++;
//     }
//     if (line[i] === BALL_LEFT) {
//         if (i > WIDTH - (Math.floor(Math.random()*WIDTH)+1)){
//           line[i] = EMPTY_CHARACTER;
//           line[i - 1] = BALL_LEFT;
//         } else {
//           line[i] = BALL_RIGHT;
//         }
//       }
//   }
// }

// PIERRE FEUILLE CISEAU

// // Choix du chiffre
// let joueur1 = 1;
// let joueur2 = Math.floor(Math.random() * 10000) % 3;

// // Conversion en "pierre", "feuille" ou "ciseaux"
// let choixJoueur1 = "";
// let choixJoueur2 = "";
// switch (joueur1) {
//   case 0:
//     choixJoueur1 = "feuille";
//     break;
//   case 1:
//     choixJoueur1 = "pierre";
//     break;
//   case 2:
//     choixJoueur1 = "ciseaux";
//     break;
// }
// switch (joueur2) {
//   case 0:
//     choixJoueur2 = "feuille";
//     break;
//   case 1:
//     choixJoueur2 = "pierre";
//     break;
//   case 2:
//     choixJoueur2 = "ciseaux";
//     break;
// }

// // Programme
// if (joueur1 < 0 || joueur1 > 2) {
//   console.log("Valeur non admise");
// } else {
//   if (joueur1 === joueur2) {
//     console.log("Egalité, j'ai choisi " + choixJoueur2);
//   } else {
//     if ((joueur1 - joueur2 + 3) % 3 === 1) {
//       console.log("J'ai gagné, j'ai choisi " + choixJoueur2);
//     } else {
//       console.log("J'ai perdu, j'ai choisi " + choixJoueur2);
//     }
//   }
// }

// CARRE DE X

// Déclare un tableau vide
// let arbre = [];
// // Déclare la taille du tableau
// let size = 10;
// // Initialise une variable pour stocker une ligne du tableau
// let row = "";

// // Boucle pour remplir le tableau avec la valeur "X"
// for (j = 0; j <= size; j++) {
//   // Crée un objet vide pour chaque ligne du tableau
//   arbre[j] = {};
//   // Boucle pour attribuer la valeur "X" à chaque case du tableau
//   for (i = 0; i <= size; i++) {
//     // Stocke la valeur "X" dans chaque case de la colonne i de la ligne j du tableau arbre
//     arbre[j][i] = "X";
//   }
// }

// // Boucle pour afficher chaque ligne du tableau
// for (j = 0; j <= size; j++) {
//   // Initialise la variable row à une chaîne de caractères vide
//   row = "";
//   // Boucle pour ajouter chaque élément de la ligne à la variable row
//   for (i = 0; i <= size; i++) {
//     // Ajoute la valeur de la case [j][i] du tableau à la variable row
//     row += arbre[j][i];
//   }
//   // Affiche la ligne complète du tableau
//   console.log(row);
// }

// CARRE DE X VIDE
// let size = 10;
// let row = "";

// for (j = 0; j < size; j++) {
//     for (i = 0; i < size; i++) {
//         if (j == 0 || j == size - 1 || i == 0 || i == size - 1) {
//             row += "X";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
//     row = "";
// }

// XOXOXO

// let size = 10;
// let row = "";

// for (j = 0; j < size; j++) {
//     row = ""
//   for (i = 0; i < size; i++)
//     if (i % 2 == 0) {
//       row += "O";
//     } else {
//       row += "X";
//     }
//     console.log(row);
// }

// CHECKERBOARD

// let size = 10;
// let carac = "X"
// let row = "";

// for(j=0; j<size;j++){
//     row = ""
//     for(i=0; i<size;i++){
//         if ((j+i)%2===1){
//             row += " "
//         } else {
//             row += carac
//         }
//     }
//     console.log(row)
// }

// const TWO = 2
// let size = 10;
// let box = "";

// for (j = 0; j < size; j++) {
//     box = ""
//   for (i = 0; i < size; i++)
//     if ((i+j)%TWO === 0){
//       box += "X";
//     } else {
//       box += " ";
//     }
//     console.log(box);
// }

// Image switcher code

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//   let mySrc = myImage.getAttribute('src');
//   if(mySrc === 'images/firefox-icon.png') {
//     myImage.setAttribute ('src','images/firefox2.png');
//   } else {
//     myImage.setAttribute ('src','images/firefox-icon.png');
//   }
// }

// Personalized welcome message code

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//   let myName = prompt('Please enter your name.');
//   if(!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = 'Mozilla is cool, ' + myName;
//   }
// }

// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
// }

// myButton.onclick = function() {
//   setUserName();
// }

// let myImage = document.querySelector('img');
// myImage.addEventListener('click', function() {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'Asset/image/firefox-icon.png') {
//       myImage.setAttribute('src', 'Asset/image/Carré de X.png');
//     } else {
//       myImage.setAttribute('src', 'Asset/image/firefox-icon.png');
//     }
// });

// Chiffre aléatoire entre 1000 et 9999
// function digicode(min, max) {
//   min = Math.ceil(0);
//   max = Math.floor(9999);
//   return Math.floor(Math.random() * (max - min));
// }

// console.log(digicode(9999))

// const low = 0;
// const high = 10000;

// function digicode(low, high) {
//   let lowNumb = Math.ceil(low);
//   let highNumb = Math.floor(high);
//   const digicode = lowNumb + Math.random()*(highNumb-lowNumb);
//   return Math.floor(digicode);
// }

// let i = 0;
// const code = digicode(low, high);

// while (i < 10000) {
//   if (i === code) {
//     console.log("Le digicode est " + i+".");
//     break;
//   } else {
//     i++;
//   }
// }

// FORCE BRUT

// let digicode = [];
// let crack = []

// function code(min, max) {
//   min = Math.ceil(0);
//   max = Math.floor(9);
//   return Math.floor(Math.random() * (max - min));
// }

// for (let i = 0; i < 3; i++) {
//   digicode.push(code(0, 9));
// }

// for(let i=0; i < 3; i++){
//   for(let j = 0; j <=9 ; j++){
//     if(digicode[i] == j){
//       crack.push(j);
//       break;
//     }
//   }
//   console.log("crack " + crack + " digicode " + digicode)
// }

// let digicode = [];
// let crack = []

// for (let i = 0; i < 3; i++) {
//   digicode.push(Math.floor(Math.random()*10));
// }

// for(let i=0; i < 3; i++){
//   for(let j = 0; j <=9 ; j++){
//     if(digicode[i] == j){
//       crack.push(j);
//       break;
//     }
//   }
//   console.log("crack " + crack + " digicode " + digicode)
// }

// if while

// let digicode = [];
// let crack = [];

// for (let i = 0; i < 3; i++) {
//   digicode.push(Math.floor(Math.random() * 10));
// }

// let i = 0;
// while (i < 3) {
//   let j = 0;
//   while (j <= 9) {
//     if (digicode[i] == j) {
//       crack.push(j);
//       break;
//     }
//     j++;
//   }
//   i++;
//   console.log("crack " + crack + " digicode " + digicode);
// }

// let digicode = [];
// let crack = [];

// for (let i = 0; i < 3; i++) {
//   digicode.push(Math.floor(Math.random() * 10));
// }

// let i = 0;
// while (i < 3) {
//   for (let j = 0; j <= 9; j++) {
//     if (digicode[i] == j) {
//       crack.push(j);
//       break;
//     }
//   }
//   i++;
//   console.log("crack " + crack + " digicode " + digicode);
// }

// let crack = []
// let code = []

// for (i=0;i<=2;i++){
//     code[i] =+ Math.floor(Math.random()*10)
// }

// let j=0;
// while (j<3){
//     for (i=0; i<=9;i++){
//         if (code[j]===i){
//             crack.push(i)
//         }
//     }
//     console.log("crack "+crack+"code "+code)
//     j++
// }

// FIZZ BUZZ TAPIOCA
// Déclaration du tableau contenant les règles de remplacement
// let tableau = [
//     [3, "Fizz"],    // Si le nombre est divisible par 3, le remplacer par "Fizz"
//     [5, "Buzz"],    // Si le nombre est divisible par 5, le remplacer par "Buzz"
//     [7, "Tapioca"], // Si le nombre est divisible par 7, le remplacer par "Tapioca"
//     [13, "Formica"] // Si le nombre est divisible par 13, le remplacer par "Formica"
//   ];

//   // Boucle principale pour itérer de 0 à 100
//   for (let i = 0; i <= 100; i++) {
//     let string = ""; // Variable pour stocker les chaînes résultantes
//     // Boucle pour parcourir les règles du tableau
//     for (let j = 0; j < tableau.length; j++) {
//       if (i % tableau[j][0] == 0) {
//         // Vérifie si le nombre actuel (i) est divisible par le premier élément de la règle (tableau[j][0])
//         // Si c'est le cas, ajoute le deuxième élément de la règle (tableau[j][1]) à la variable string
//         string += tableau[j][1];
//       }
//     }

//     // Vérifie si la variable string est vide
//     // Si c'est le cas, le nombre n'est pas divisible par les règles spécifiées, donc on l'affiche
//     // Sinon, on affiche la chaîne résultante obtenue
//     console.log(string == "" ? i : string);
//   }

// let gate = [[]]; // Déclaration d'une variable 'gate' comme une matrice vide à deux dimensions
// const size = 20; // Déclaration d'une constante 'size' avec une valeur de 20, représentant la taille de la matrice

// // Boucle pour initialiser la matrice 'gate' avec des espaces vides
// for (let row = 0; row < size; row++) {
//     gate[row] = []; // Crée une nouvelle ligne vide dans la matrice
//     for (let column = 0; column < size; column++) {
//         gate[row][column] = " "; // Initialise chaque élément de la matrice avec un espace vide
//     }
// }

// // Boucle pour dessiner la forme en X dans la matrice 'gate'
// for (let edge = 0; edge < size / 2; edge += 4) {
//     // Cette boucle contrôle la taille de la forme en X en ajustant le bord extérieur
//     for (let row = edge; row < size - edge; row++) {
//         // Boucle sur les lignes de la matrice
//         for (let column = edge; column < size - edge; column++) {
//             // Boucle sur les colonnes de la matrice
//             if ((row === edge) || (row === size - 1 - edge)
//                 || (column === edge) || (column === size - 1 - edge)) {
//                 // Vérifie si la position actuelle est sur l'un des bords de la forme en X
//                 gate[row][column] = "X"; // Remplit la position avec le caractère "X"
//             }
//         }
//     }
// }

// // Boucle pour afficher la matrice 'gate' ligne par ligne dans la console
// for (let row = 0; row < size; row++) {
//     let line = "";
//     for (let column = 0; column < size; column++) {
//         line += gate[row][column]; // Ajoute chaque élément de la ligne à une chaîne de caractères
//     }
//     console.log(line); // Affiche la ligne dans la console
// }

// let code = []
// let crack = []

// for (i=0; i<=2;i++){
//     code[i] =+ Math.floor(Math.random()*10)
// }

// for (i=0; i<=2;i++){
//     for (j=0; j<=9;j++){
//         if (j===code[i]){
//             crack.push(j)
//         }
//     }
//     console.log("crack "+crack+" code "+code)
// }

// Ville

// let size = 20;
// let char = "A";
// let tableRandom = [];
// let blank;
// let tableVille ;

// for (i = 0; i < size; i++) {
//     tableRandom[i] = Math.floor(Math.random() * 10);
// }

// for (i = 0; i < size; i++) {
//     tableVille="";
//     for (j = 0; j <= size; j++) {
//         blank = (size - tableRandom[j]);
//         if(i<blank){
//             tableVille+= " "
//         }
//         if(i>=blank){
//             tableVille+= "A"
//         }
//     }
//     console.log(tableVille)
// }

// let table = [[1, "FizzBuzz"], [2, "Crackcode"], [3, "Ville"], [4, "Carré de X"], [5, "X vide"], [6, "Checkermate"], [7, "XOXO"], [8, "FizzBuzzTapioca"]];
// let hasard = Math.floor(Math.random() * table.length);
// let exerciceAleatoire = table[hasard][1];

// console.log(exerciceAleatoire);

const size = Number(window.prompt("Veuillez saisir un nombre.", ""));
const charac = window.prompt("Veuillez chosir une lettre")
let table = [];
let result;

for (i = 0; i < size; i++) {
  table[i] = Math.floor(Math.random() * 10);
}

for (i = 0; i < size; i++) {
  let row = "";
  for (j = 0; j < size; j++) {
    result = (size - table[j]);
    if (result < i) {
      row += charac;
    }
    if (result >= i) {
      row += " ";
    }
  }
  console.log(row);
}

