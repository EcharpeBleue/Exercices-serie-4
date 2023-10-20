let x = prompt(`Veuillez rentrer un premier nombre`)
let n = prompt(`Veuillez rentrer un deuxième nombre`)
let resultat = 1
for (let i=0;i<n;i++)
{
    resultat = resultat*x
}
console.log(`${x}^${n}=${resultat}`);