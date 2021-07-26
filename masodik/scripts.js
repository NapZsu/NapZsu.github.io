let aktualisKep=0

let cim1 = {
    foto: 'images/1.JPG',
    KepCim: 'Brenner kápolna',
    KepLeiras: 'Amikor nem tudod, jön a vihar, vagy megy...'
  };

let cim2 = {
    foto: 'images/2.JPG',
    KepCim: 'Tükörkép',
    KepLeiras: 'Egyszerű órai feladat...'
  };

let cim3 = {
    foto: 'images/3.JPG',
    KepCim: 'Fény-játék',
    KepLeiras: 'Kápolna park...'
  };
let cim4 = {
    foto: 'images/4.JPG',
    KepCim: 'Cipője is van!',
    KepLeiras: 'Szilveszter délután az erdőn...'
  };

let cim5 = {
    foto: 'images/5.JPG',
    KepCim: 'Téli tuskó',
    KepLeiras: 'Gomba, moha és zuzmó...'
  };

let cim6 = {
    foto: 'images/6.JPG',
    KepCim: 'Jégbogyók',
    KepLeiras: 'Balatonpart...'
  };

let cim7 = {
    foto: 'images/7.JPG',
    KepCim: 'Jégvilág',
    KepLeiras: 'Balaton télen...'
  };

  let cim8 = {
    foto: 'images/8.JPG',
    KepCim: 'Hársas-tó',
    KepLeiras: 'Őszi kirándulás...'
  };

let cim9 = {
    foto: 'images/9.JPG',
    KepCim: 'Ebédszünet',
    KepLeiras: 'Kányavári sziget...'
  };
  let cim10 = {
    foto: 'images/10.JPG',
    KepCim: 'Kis-Balaton',
    KepLeiras: 'Fent az ég és lent a víz...'
  };

let cimek=[cim1, cim2, cim3, cim4, cim5, cim6, cim7, cim8, cim9, cim10]
let min=0
let max=cimek.length-1
$("#foto").attr('src', cimek[aktualisKep].foto);
$("#KepCim").text(cimek[aktualisKep].KepCim);
$("#KepLeiras").text(cimek[aktualisKep].KepLeiras);

function kepValtas(value){
  aktualisKep=value;
  $("#foto").attr('src', cimek[aktualisKep].foto);
  $("#KepCim").text(cimek[aktualisKep].KepCim);
  $("#KepLeiras").text(cimek[aktualisKep].KepLeiras);
}

$('#balra').click( () => {
  if ((aktualisKep)>min) {aktualisKep--;}
    else {aktualisKep=max};
  $("#foto").attr('src', cimek[aktualisKep].foto);
  $("#KepCim").text(cimek[aktualisKep].KepCim);
  $("#KepLeiras").text(cimek[aktualisKep].KepLeiras);
})

$('#jobbra').click( () => {
  if ((aktualisKep)<max) {aktualisKep++;}
    else {aktualisKep=min};
  $("#foto").attr('src', cimek[aktualisKep].foto);
  $("#KepCim").text(cimek[aktualisKep].KepCim);
  $("#KepLeiras").text(cimek[aktualisKep].KepLeiras);
})