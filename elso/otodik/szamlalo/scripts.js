let szam=0
$("#szamol").text(szam);

function hozzaAd(value){
    if (value=='-1') {szam--}
    else {szam++};
    $("#szamol").text(szam);
}   

