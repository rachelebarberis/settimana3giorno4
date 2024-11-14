const tombola = document.getElementById('tombola');
const arrayNumber = []
let estratto;
const listaNumeri= document.getElementById('listaNumeri');
document.addEventListener('load', init());

function init() {
    generareNumber();
    bottonEstrai();
}
function generareNumber() {
    for (let i = 0; i < 90; i++) {
        const numeriInsert = document.createElement('div') //creo un div nuovo con i numeri
        numeriInsert.innerText = i + 1;
        tombola.appendChild(numeriInsert); //faccio apparire in html
    }
}

function bottonEstrai() {
    const btnEstrai = document.getElementById('bottonEstrai');
    btnEstrai.addEventListener('click', function() {
        if (arrayNumber.length>=90) {
            return;
        }
        estratto=Math.floor(Math.random()*90) + 1;
        console.log(estratto);
        if (arrayNumber.includes(estratto)) {
            alert('il numero è già stato estratto')
        } else {
            arrayNumber.push(estratto);
        }
        const containerNumber=document.querySelectorAll('#tombola div');
        for (let i = 0; i < containerNumber.length; i++) {
            if (containerNumber[i].innerText == estratto) {
                containerNumber[i].classList.add('numEstratto');
                const newListItem= document.createElement('li');
                newListItem.innerText= estratto;
                listaNumeri.appendChild(newListItem);
            }
        }
    }
)


}
