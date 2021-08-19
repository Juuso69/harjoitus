console.log("Logged in");

let ika = 15;
ika = ika + 1;

let ikakirjaimina =

console.log("Sinun ikäsi on: " + ika);

let juuvaiei = true;

console.log(juuvaiei);

let nimi = "Juuso Oijala";

console.log("Kirjoita isolla: " + nimi.toUpperCase());

console.log("Splittausharjoitus: " + nimi.split(" ")[0]);

for(let i=0; i<=10; i++){
  console.log("loopin iteraatioluku on: " + i);
}

if(ika >= 18 || nimi == "Juuso Oijala"){
  console.log("Onnea, olet täydellinen");
}
else{
  console.error("Kasva nulikka...");
}

let pvm = "2021/8/19";
console.log(pvm);
for(let i=0; i<=10; i++) {
console.log(pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]));
}

function pvmFin(vuosi, kuukausi, paiva){
  return (paiva + "." + kuukausi +"."+ vuosi);
}

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "juuso69" && password == "testi") {
    function sivusto() {
      location.replace("");
    }
    }
  else if (username != "juuso69" && password != "testi"){
    alert('WRONG PASS');
  }
}