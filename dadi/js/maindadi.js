// Variabili globali
let numberUser, generator, numberPc, esito;
generator = document.querySelector("button");

// crea una funzione sul click
generator.addEventListener("click",
function(){

    // Chiedi all'utente un numero
    numberUser = parseInt(document.getElementById("number").value);
    console.log(numberUser);

    // Fai scegliere al pc un numero
    numberPc = Math.floor(Math.random() * 6) + 1;
    console.log(numberPc);

    // in base a chi ha il numero più alto decreta il vincitore

    let esito = document.getElementById("answer");


    if (numberPc > numberUser) {
        console.log("Il vincitore è il Pc");
        document.getElementById("answer").innerHTML = "Il vincitore è il pc";
    }

    else if(numberPc === numberUser) {
        console.log(" Nessun vincitore, la partita è patta");
        document.getElementById("answer").innerHTML = "Nessun vincitore, la partita è patta";
    }

    else {
        console.log("Il vincitore è User");
        document.getElementById("answer").innerHTML = "Il vincitore è User";
    }

    // output
   
}
)


