
// NARSYKLE:
// - html variklis
// - css variklis
// - js variklis
// - localStorage variklis
console.clear();

// Paspaudus <button> elementa
// <h1> elemente pasikeicia tekstas

// 1. Susirasti <button> elementa
// 2. Jei <button> elementas YRA:
// - susirandame <h1> elementa...
//   - jei <h1> elementas YRA:
//   - uzsiregistruojame ivykio stebejima:
//       -kai/jei vartotojas paspaus <button>    
//       - <h1> elemente keiciam teksta
//   - jei NERA:
//   - NIEKO NEDAROM
// - jei NERA :
// - nieko nedarom....
/*
const buttomDOM = document.getElementById('mygtukas'); 
// console.log(buttomDOM);
//console.log([buttomDOM]);

if (buttomDOM === null) {
    console.log('Mygtukas nera');
} else {
    console.log('Mygtuko rastas!');

    const titleDOM = document.getElementById ('antraste');
    
    if (titleDOM === null) {
        console.log('Nepavyko rasti antrastes');
    } else {
        console.log('Antraste egzistuoja!');

        titleDOM.textContent = 'Labas vakaras!';
    }
}
*/
const buttomDOM = document.getElementById('mygtukas');
const titleDOM = document.getElementById('antraste');

function kaDaryti() {
    titleDOM.textContent = 'Labas vakaras!';
}

buttomDOM.addEventListener('click', kaDaryti);

