// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendList = [];
let friendUserWinner="";
// llamamos a la etiqueta input
const friendUser=document.getElementsByClassName("input-name");
// mediante DOM llamamos al atiqueta ul para imprimir contenido
const containerList = document.getElementsByClassName("name-list");
// mediante DDOM llamamos ala etiqueta ul para imprimir al ganador
const containerUserWinner = document.getElementsByClassName("result-list");

// función para agregar amigos a la lista e imprimirlos en etiquetas li
const agregarAmigo = () => {
    // limpia la lista de ganador en caso de que se vuelva a reutilizar
    containerUserWinner[0].innerHTML = "";
    let nameUser = friendUser[0].value;
    // evita que se envie información vacia
    if (nameUser==""){
        alert("Debes escribir un nombre");
        return;
    }
    // evita que se agregue la misma persona dos veces
    if(!friendList.includes(nameUser)){
    friendList.push(nameUser)
    }
    else{
        alert(`Ya has agregado a ${nameUser}`);
        return;
    }
    // imprime la lista de amigos en la etiqueta ul
    containerList[0].innerHTML = printFriend(friendList);
    // limpia el input del nombre del amigo
    friendUser[0].value = "";
}

const sortearAmigo = () => {
    // evita que se sortee si no hay amigos
    if(friendList.length===0){
        alert("No hay amigos para sortear");
        return;
    }
    let luckyNumber = Math.floor(Math.random()*friendList.length);
    containerUserWinner[0].innerHTML = `<li>El ganador es: ${friendList[luckyNumber]}</li>`
    // limpia la lista de amigos y el arreglo
    friendList= [];
    containerList[0].innerHTML = "";
}

// conversor de lista a una lista de etiquetas li
function printFriend(list)
{
let elements = "";
for(let i=0; i<list.length; i++){
    elements += `<li>${list[i]}</li>`;  
}
return elements;
}




