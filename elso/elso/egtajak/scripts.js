console.log("függvényhívás")

let N
function printNumbersTill(N){
    N++
    for (let i=0; i<N; i++){
        console.log(i)
    }   
}
printNumbersTill(35)

let nev
function getGreetingTo(nev){
   console.log('Hello '+nev+'!'); 
}
getGreetingTo('Mark')

let color='purple'
let number=10
let word='cool'

if (color==='purple') {
    $("#egy").css("background", "yellow");
}

if (number > 100) {
    $("#ketto").text("wow, de nagy szám");
    }
    else {
      $("#ketto").text("ez csak egy közönséges szám");  
    }

if (word==='cool') {
   $("#harom").text("DOM Ereje");
    }
    else {
    $("#negy").text("ez csak egy közönséges szám");  
    }



