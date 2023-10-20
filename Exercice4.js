let x = prompt(`Veuillez rentrer un nombre dont vous voulez connaitre la table de multiplication`)
let resultat = 0
let paragraphe = document.querySelector(".p1"); // récupérer l'élement HTML
for (let n=1;n<11;n++)
{
    resultat=x*n
    //paragraphe.innerHTML+=`<li>${x}x${n}=${resultat}</li>`;
    paragraphe.innerHTML+=`${x}x${n}=${resultat}</br>`;
}