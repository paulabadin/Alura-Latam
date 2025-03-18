// Array para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un amigo a la lista.
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío.
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    //Limpiar el resultado del sorteo anterior
    if(amigos.length==0){
        document.getElementById('resultado').innerHTML = "";
    }

    // Agregar el nombre al array y limpiar el campo de texto
    amigos.push(nombre);
    input.value = "";

    // Actualizar la lista de nombres en la página
    actualizarLista();
}

// Función para actualizar la lista de nombres en la página
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada nombre a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
  
    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    nuevoJuego();
    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

// Función para reiniciar el juego
function nuevoJuego() {
    amigos = []; // Vaciar el array de nombres
    document.getElementById('listaAmigos').innerHTML = "";// Limpiar la lista visual
    document.getElementById('resultado').innerHTML = ""; // Limpiar el resultado del sorteo
}
