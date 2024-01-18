var numSecreto = Math.floor(Math.random() * 100) + 1;
// OUTRA FORMA DE FAZER O RANDOM
//var numSecreto = parseInt(Math.random() * 100) + 1;
var tentativas = 1;

console.log(numSecreto);

alert("Boas vindas ao numero secreto");


//fazer funcionar por medio de função
//NumeroSecreto();


while(numeroParticipante != numSecreto){
    var numeroParticipante = prompt("Escolha um número entre 1 e 100");

    if(numSecreto == numeroParticipante){
      break;
        
        
    }else if(numSecreto < numeroParticipante && numeroParticipante != 0 ){
        alert(`O numero secreto e menor que : ${numeroParticipante} é tua tentantiva: ${tentativas}`);
        
        tentativas++
        
    }else if(numSecreto > numeroParticipante && numeroParticipante != 0 ){
       alert(`O numero secreto e maior que : ${numeroParticipante} é tua tentantiva: ${tentativas}`);
       tentativas++

    }else{
        alert(`Por favor escreve um numero do 1-100 `);
      
    }   
}


var tentativasSingOrPlural = tentativas>1? "tentativas" : "tentativa";
alert(`Você acerto o numero secreto: ${numSecreto} conseguiu demorou ${tentativasSingOrPlural}: ${tentativas} `);


// function NumeroSecreto(){
//     var numeroParticipante = prompt("Escolha um número entre 1 e 100");

//     if(numSecreto == numeroParticipante){
//         alert(`Você acerto o numero secreto: ${numSecreto}`);
        
        
//     }else if(numSecreto < numeroParticipante && numeroParticipante != 0 ){
//         alert(`O numero secreto e menor que : ${numeroParticipante}`);
        
//         NumeroSecreto();

        
//     }else if(numSecreto > numeroParticipante && numeroParticipante != 0 ){
//        alert(`O numero secreto e maior que : ${numeroParticipante}`);
//        NumeroSecreto();

//     }else{
//         alert(`Por favor escreve um numero do 1-100 `);
//         NumeroSecreto();

//     }   
// }



