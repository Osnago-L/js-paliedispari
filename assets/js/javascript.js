// PRIMO SNACK 

function functPali(){
    let palindromo = prompt("Inserire una parola per verificare se è palindroma...");
    palindromo = palindromo.toLowerCase()

    let arrayPalindromo = palindromo.split("");
    let arrayLastHalf = [];
    
    
    for (let index = (arrayPalindromo.length -1); index > ((arrayPalindromo.length/2)-1); index--) {
        arrayLastHalf.push(arrayPalindromo[index]);   
    }
    // SENZA USARE TO String()
    let truecheck = 0
    for (let index = 0; index <= arrayLastHalf.length-1; index++) {
        if (arrayLastHalf[index] == arrayPalindromo[index]){
            truecheck+=0
        }else{
            truecheck+=1
        }
    }
    if(truecheck==0){
        alert("Parola Palidroma")
    }else{
        alert("Parola NON Palidroma")
        
    }
    

};

// SECONDO SNACK 

function ParieDisp(){

    // CREAZIONI VARIABILI UTENTE 
    let pariDispari = prompt("Pari o Dispari?");
    pariDispari = pariDispari.toLowerCase();

    if((pariDispari != "dispari")&&(pariDispari != "pari")){
        let randomUserOddEven = Math.floor(Math.random()*2+1);
        if(randomUserOddEven == 1){
            pariDispari= "pari";
        alert(`Vabbe questa volta scelgo io, "hai scelto" ${pariDispari}`);
        }else{
            pariDispari= "dispari";
            alert(`Vabbe questa volta scelgo io, "hai scelto" ${pariDispari}`);
        }
    }

    let userNumber = prompt("Inserisci un numero da 1 a 5...");
    if(userNumber>5){
        userNumber = Math.floor(Math.random()*5+1);
        alert(`Vabbe questa volta scelgo io, il numero "da te scelto" è ${userNumber}` );
    }
    // CREAZIONE VARIABILE AI 
    function randomAI(){
        let randomAINumber = Math.floor(Math.random()*5+1);
        return randomAINumber;
    };
    // VARIABILE SOMMA 
    function somma(){
        let somma = randomAI() + userNumber;
        if (somma%2 == 0){
            let pari = "pari";
            return pari ;
        }else{
            let dispari = "dispari";
            return dispari ;
        }
    
    };

    if(somma() == pariDispari){
        alert("player WINS :)")
    }else{
        alert("player LOSES :(")
    }

};
