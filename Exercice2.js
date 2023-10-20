let nombreSaisi = prompt(`Veuillez entrer un nombre`)
let resultat = 1
let texte = ""
for (let i=nombreSaisi;i>0;i--)
{
resultat = resultat*i
if(i!=nombreSaisi)
texte = texte+`x${i}`;
else
texte = texte+`${i}`;
}
//console.log(`La factorielle de ${nombreSaisi} est ${resultat}`);
console.log(`La factorielle de ${texte} est ${resultat}`);