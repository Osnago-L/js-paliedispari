
function functPali(){
    let palindromo = prompt("Inserire una parola per verificare se è palindroma...");
    palindromo=palindromo.toLowerCase()

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