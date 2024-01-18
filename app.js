var numSecreto = 29;



alert("Boas vindas ao numero secreto");
NumeroSecreto();

function NumeroSecreto(){
    var numeroParticipante = prompt("Escolha um número entre 1 e 100");

    if(numSecreto == numeroParticipante){
        console.log(`Você acerto o numero secreto: ${numSecreto}`);
        
    }else if(numSecreto < numeroParticipante && numeroParticipante != 0 ){
        console.log(`O numero secreto e menor que : ${numeroParticipante}`);
        document.querySelector(".container__texto-azul").insette

        
    }else if(numSecreto > numeroParticipante && numeroParticipante != 0 ){
        console.log(`O numero secreto e maior que : ${numeroParticipante}`);
    }else{
        console.log(`Por favor escreve um numero do 1-100 `);
    }
    
}



