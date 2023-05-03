// Variabili globali
let generator, emailUsers;

generator = document.querySelector("button");

// Creare una lista array
const accesso = ["nicolapiperis9999@gmail.com", "piperisnicola9999@gmail.com"];

// Chiedi all'utente la e-mail attraverso un input e bottone 

generator.addEventListener("click", // Creo l'evento sul click del bottone
function() {

    // Prendo il valore di ciò che è scritto nell'input e lo uso come dato dell'utente
let emailUsers = document.querySelector("input").value;
console.log("email : " + emailUsers);

    // fai controllare la e-mail
for ( let i = 0; i < accesso.length; i++) {

    let esito;
    esito = document.getElementById("answer");
    const emailArray = accesso[i];
    
    if ( emailUsers === emailArray) {
        esito.innerHTML = "Benvenuto"
        esito.classList.add("answer_green")
    }
    
    else {
        esito.innerHTML = "Prova a contattare l'assistenza"
        esito.classList.add("answer_red")
    }

    }



console.log(esito);



    // output di risposta in basa all'esito del controllo


}
)

