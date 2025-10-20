let escolhaUsuario = document.getElementById("select");
let escolhaComputadorNumero;
let escolhaComputador;

console.log(escolhaUsuario)

function jogar(){
    escolhaComputadorNumero = Math.random();

    if(escolhaComputadorNumero <= 0.33){
        escolhaComputador = "Pedra";
    }
    else{
        if( escolhaComputadorNumero <= 0.66)
        {
            escolhaComputador = "Papel";
        }
        else{
            escolhaComputador = "Tesoura";
        }

    }

    if(escolhaComputador == escolhaUsuario.value){
        alert("Empate!");
    }
    else{
        if(escolhaComputador == "Tesoura" && escolhaUsuario.value == "Papel"){
            alert("Perdeu!" + " A maquina escolheu " + escolhaComputador);
        }
        else{
            if(escolhaComputador == "Pedra" && escolhaUsuario.value == "Tesoura"){
                alert("Perdeu!" + " A maquina escolheu " + escolhaComputador);
            }
            else{
                if(escolhaComputador == "Papel" && escolhaUsuario.value == "Pedra"){
                    alert("Perdeu!" + " A maquina escolheu " + escolhaComputador);
                }
                else{
                    if(escolhaComputador == "Pedra" && escolhaUsuario.value == "Papel"){
                        alert("Ganhou!" + " A maquina escolheu " + escolhaComputador);
                    }
                    else{
                        if(escolhaComputador =="Papel" && escolhaUsuario.value == "Tesoura"){
                            alert("Ganhou!" + " A maquina escolheu " + escolhaComputador);
                        }
                        else{
                            if(escolhaComputador == "Tesoura" && escolhaUsuario.value == "Pedra"){
                                alert("Ganhou!" + " A maquina escolheu " + escolhaComputador);
                            }
                        }
                    }
                }
            }
        }
    }
}

