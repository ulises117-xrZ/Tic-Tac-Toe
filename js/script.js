let bandera = false;//indica si el juego empezo
let turno = 0;//determina el turno de los jugadores

let tab = new Array();//arreglo de botones

window.onload = function(){
    let iniciar = document.getElementById('iniciar')
    iniciar.addEventListener('click', comenzar);
}

function comenzar() {
    iniciar.value = "de nuevo"
    bandera = true;
    let jugador1 = document.getElementById('p1');
    let jugador2 = document.getElementById('p2');
    if(jugador1.value  =="" || jugador1.value == " "){
        alert("porfavor rellene el contenido de jugador 1");
        jugador1.focus();
    }
    else if (jugador2.value =="" || jugador2.value == " "){
        alert('pofavor ingrese el nombre del jugador 2');
        jugador2.focus();
    } else{
        tab[0] = document.getElementById('b0');
        tab[1] = document.getElementById('b1');
        tab[2] = document.getElementById('b2');
        tab[3] = document.getElementById('b3');
        tab[4] = document.getElementById('b4');
        tab[5] = document.getElementById('b5');
        tab[6] = document.getElementById('b6');
        tab[7] = document.getElementById('b7');
        tab[8] = document.getElementById('b8');
        for(let i=0; i<9; i++){
            tab[i].className = "botonInicial";
            tab[i].value = "I";
        }
        turno = 1;
        document.getElementById("turnoJugador").innerHTML = `es tu turno ${jugador1.value}`
    }

}

function colocar(botons){
    
    if(bandera){
        if(turno ==1 && botons.value=="I"){
            turno = 2;
            document.getElementById('turnoJugador').innerHTML = `es tu turno ${document.getElementById('p2').value}`
            botons.className = "botonJugador"
            botons.value = "X";
        } else{
            if(turno == 2 && botons.value == "I"){
                turno = 1;
                document.getElementById('turnoJugador').innerHTML = ` es tu turno ${document.getElementById('p1').value}`
                botons.className = "botonJugador2";
                botons.value = "0";
            }
        }
    }

    function revisar(){
        if(
            (tab[0].value == "X" && tab[1].value == "X" && tab[2].value == "X")
            ||(tab[3].value == "X" && tab[4].value == "X" && tab[5].value == "X")
            ||(tab[6].value == "X" && tab[7].value == "X" && tab[8].value == "X")
            ||(tab[0].value == "X" && tab[4].value == "X" && tab[8].value == "X")
            ||(tab[2].value == "X" && tab[4].value == "X" && tab[6].value == "X")
            ||(tab[0].value == "X" && tab[3].value == "X" && tab[6].value == "X")
            ||(tab[1].value == "X" && tab[4].value == "X" && tab[7].value == "X")
            ||(tab[2].value == "X" && tab[5].value == "X" && tab[8].value == "X")
        ){
            alert(`El ganador es ${document.getElementById('p1').value}`)
        } else if(
            (tab[0].value == "0" && tab[1].value == "0" && tab[2].value == "0")
            ||(tab[3].value == "0" && tab[4].value == "0" && tab[5].value == "0")
            ||(tab[6].value == "0" && tab[7].value == "0" && tab[8].value == "0")
            ||(tab[0].value == "0" && tab[4].value == "0" && tab[8].value == "0")
            ||(tab[2].value == "0" && tab[4].value == "0" && tab[6].value == "0")
            ||(tab[0].value == "0" && tab[3].value == "0" && tab[6].value == "0")
            ||(tab[1].value == "0" && tab[4].value == "0" && tab[7].value == "0")
            ||(tab[2].value == "0" && tab[5].value == "0" && tab[8].value == "0")
        ){
            alert(`El ganador es ${document.getElementById('p2').value}`)
        }
    }
    
    revisar();
}


