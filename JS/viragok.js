window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
  $("kereses").addEventListener("click", vizkivalogato,false);
}
function fuggveny(){
  let viz= $("viz").value;
  let nap =$("nap").value;
  let homerseklet =("homerseklet").value;
}
var viragok = new Array();

let zoldborsolevelSzenecio={
    név: "Zöldborsólevelű szeneció",
    ár: 1500,
    vizigeny: 1,
    napigeny: 3,
    homerseklet: 3
}
let tesztvirag={
  név: "tesztvirag",
  ár: 1500,
  vizigeny: 2,
  napigeny: 3,
  homerseklet: 1
}
viragok.push(zoldborsolevelSzenecio, tesztvirag);
function vizkivalogato(){
  let vizesTömb = new Array();
  for(i = 0; i<viragok.length; i++){
    if(viragok[i].vizigeny = $("viz").value-1){
      vizesTömb.push(viragok[i]);
    }
  }
  console.log(vizesTömb);
}
