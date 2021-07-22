console.log("ciklus és tömb")

console.log("függvény és for ciklus")
let szamok=[0, 3, 6, 7, 9]
function printValues(array){
    for (let i=0; i<array.length; i++){
        console.log(array[i])
    }   
 }
 printValues(szamok)


console.log("forEach ciklus")
szamok.forEach(element => console.log(element));

console.log("függvény és forEach ciklus")
function printValues(array){
    array.forEach(element => console.log(element));
 }

 printValues(szamok)