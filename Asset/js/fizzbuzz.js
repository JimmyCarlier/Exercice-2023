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
// const size = 50
// // Initialize the gate array with " "
// for (let row = 0; row < size; row++) {
//     gate[row] = []
//     for (let column = 0; column < size; column++) {
//         gate[row][column] = " "
//     }
// }

// for (let edge = 0; edge < size / 2; edge += 4) {
//     // Place a "X" on the edge
//     for (let row = edge; row < size - edge; row++) {
//         for (let column = edge; column < size - edge; column++) {
//             if ((row === edge) || (row === size - 1 - edge)
//                 || (column === edge) || (column === size - 1 - edge)) {
//                 gate[row][column] = "X"
//             }
//         }
//     }
// }

// // Display the gate array
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


// Changement image
// let myImage = document.querySelector('img');

// myImage.addEventListener('click', function() {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'Asset/image/Carré de X.png') {
//       myImage.setAttribute('src', 'Asset/image/firefox2.jpg');
//     } else {
//       myImage.setAttribute('src', 'Asset/image/Carré de X.png');
//     }
// });

