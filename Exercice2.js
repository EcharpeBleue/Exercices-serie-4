let nombreSaisi = prompt(`Veuillez entrer un nombre`)
let resultat = 1
for (let i=nombreSaisi;i>0;i--)
{
resultat = resultat*i
}
console.log(`La factorielle de ${nombreSaisi} est ${resultat}`);