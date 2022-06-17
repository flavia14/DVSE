/*console.log("TEMA 1")
let count = 222222
console.log(count)


console.log("TEMA 2")
let myAge =22
console.log(myAge)
let humanDogRatio =2
let myDogage=humanDogRatio*myAge
console.log("In ani de caine as avea varsta")
console.log(myDogage)

console.log("TEMA 3")
let bonusPoints=50
console.log(bonusPoints)
bonusPoints=bonusPoints+100
console.log(bonusPoints)
bonusPoints=bonusPoints-25
console.log(bonusPoints)
bonusPoints=bonusPoints+70
console.log(bonusPoints)


console.log("TEMA 4")
function increment()
{

    console.log("A fost apasat butonul!")
}


console.log("TEMA 5")
console.log("Functia mea")
function Flavia()
{
 console.log(42);
}

Flavia();

console.log("TEMA 6")
let lap1=2
let lap2=3
let lap3=4
function suma()
{
    let sum= lap1+lap2+lap3
    console.log("Suma este " + sum)
}

suma()

console.log("TEMA 7")
let lapsCompleted=0

function incrementCompl()
{
    lapsCompleted++

}
incrementCompl()
incrementCompl()
incrementCompl()

console.log("Numarul incrementat de 3 ori "+lapsCompleted)


let btn=0;

function btn_psh()
{
    btn++;
    
console.log("Butonul a fost apasat de "+btn+" ori")

}
btn_psh()

console.log("Butonul a fost apasat de "+btn+" ori")*/



let countCat= document.getElementById("count")
let nrCat=0
//functia pentru incrementare
function increment()
{
    nrCat++
    countCat.innerText=nrCat
}
increment()
//functia pentru decrementare
function decrement()
{
    if(nrCat)
      {
         nrCat--
        countCat.innerText=nrCat
      }
    
}
decrement()
//functia save
let saveCat = document.getElementById("save-el")
function save()
{
    let mesage = " "+ nrCat + " -> "
    saveCat.textContent+=mesage
    countCat.innerText=0

}
save()
