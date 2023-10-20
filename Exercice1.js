let texte = ";"
for (let i=1;i<11;i++)
{
    texte=texte+i;
    if (i%2==0) {
    console.log(`Le nombre ${i} est pair.`);
    }
    else {
    console.log(`Le nombre ${i} est impair.`);
    }
}