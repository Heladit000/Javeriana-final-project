//--enviar mensajes--

//Evita ataque de injeccion html

//Importamos los inputs y elementos html que nesecitamos
const confirmationText = document.getElementById("confirmationText");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

const messageForm = document.getElementById("messageForm");
const chat = document.getElementById("chat");



let lastMessageRandomNumber = 0;

//Funcion que retorna un numero aleatorio evitando que se repita
function random(lastNumber, min, max) {
    function getRandomNumber() {
        //Genera numero aleatorio
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let randomNumber = getRandomNumber();

    //Mientras sea igual el anterior numero aleatorio al actual
    while (randomNumber === lastNumber) {
        randomNumber = getRandomNumber();
    }

    lastMessageRandomNumber = randomNumber;
    return randomNumber;
}

//Confirmacion de que hay un mensaje y no supera los 200 caracteres
function messageVerification() {

    confirmationText.innerHTML = "";
    const buttonOpacity = "0.2";

    if (messageInput.value.length > 199) {
        confirmationText.innerHTML = "El mensaje debe tener menos de 200 caracteres.";
        sendButton.style.opacity = buttonOpacity;
        sendButton.disabled = true;
    }
    else if (nameInput.value.length > 14) {
        confirmationText.innerHTML = "Tu nombre no puede tener mas de 14 caracteres";
        sendButton.style.opacity = buttonOpacity;
        sendButton.disabled = true;
    }
    else if (nameInput.value.length === 0 || messageInput.value.length === 0) {
        sendButton.style.opacity = buttonOpacity;
        sendButton.disabled = true;
    } else {
        sendButton.style.opacity = "100%";
        sendButton.disabled = false;
    }
}

//Template html de mensaje
function createTemplate(color, name, message) {
    return `
        <div class="message">
            <h4 style="color:${color};">${name}</h4>
            <p>
                ${message}
            </p>
        </div>
    `
}

//Crea un mensaje
function createMessage(template) {

    const message = document.createElement("message");
    message.innerHTML = template;

    return message;
}

//Envia mensaje desde el formulario
function sendFormMessage(e) {

    e.preventDefault();

    const message = createMessage(createTemplate("teal", nameInput.value, messageInput.value));

    //Obtienen el nodo del mensaje para añadirle una clase
    //para que los mensaje del usuario tengan un estilo diferente
    message.childNodes[1].classList.add("user-message");

    //lo añade a la etiqueta html
    chat.appendChild(message);

    //Hace scroll hacia abajo para ver los ultimos mensajes
    chat.scrollTo(0, chat.scrollHeight);

    //Desactiva el cambio de nombre de usuario
    nameInput.disabled = true;
    sendButton.disabled = true;

    //Borra lo que estuviera escrito en el input
    messageInput.value = "";
}

//Escucha cuando se envia el formulario
messageForm.addEventListener("submit", sendFormMessage);

//Tiene templates de mensajes prefabricados para simular un chat
let randomMessage = {
    messages: [
        createTemplate("black", "Alicia", "porque me ignoran?"),
        createTemplate("black", "Alicia", "que bien"),
        createTemplate("black", "Alicia", "claro que si"),
        createTemplate("black", "Alicia", "Pastel?"),
        createTemplate("red", "lianca", "papu"),
        createTemplate("red", "lianca", ":("),
        createTemplate("red", "lianca", ":D"),
        createTemplate("red", "lianca", "oh, que bien"),
        createTemplate("blue", "j0lio", "feliz cumpleaños!"),
        createTemplate("blue", "j0lio", "Suena interesante!"),
        createTemplate("darkgoldenrod", "zamuel", "hoy a sido un gran dia"),
        createTemplate("darkgoldenrod", "zamuel", "Me gusta como piensas"),
        createTemplate("purple", "Bob", "no te encuentras bien hoy?"),
        createTemplate("purple", "Bob", "jajaja"),
        createTemplate("green", "EEEEE", "e e e e."),
        createTemplate("green", "EEEEE", "e e e?."),
        createTemplate("orange", "lizt0", "no quiero"),
        createTemplate("pink", "Francis", "cuando vamos al parque?"),
        createTemplate("brown", "mr.lacorner", "La verdad prefiero quedarme en casa"),
        createTemplate("brown", "mr.lacorner", "Me gustaria invertir en eso"),
        createTemplate("yellowgreen", "chile", "La verdad prefiero quedarme en casa"),

    ],
}

//Crea un intervalo que manda un mensaje prefabricado de 4 a 6 segundos
setInterval(() => {
    const message = createMessage(randomMessage.messages[random(lastMessageRandomNumber, 0, randomMessage.messages.length)])
    chat.appendChild(message);
    chat.scrollTo(0, chat.scrollHeight);
}, random(-1, 4000, 6000));
