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