//--send messages--

//import the inputs and html elements that we need
const confirmationText = document.getElementById("confirmationText");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

const messageForm = document.getElementById("messageForm");
const chat = document.getElementById("chat");

let lastMessageRandomNumber = 0;

//Function that returns a random number preventing it from repeating
function random(lastNumber, min, max) {
  function getRandomNumber() {
    //Generate random number
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let randomNumber = getRandomNumber();

  while (randomNumber === lastNumber) {
    randomNumber = getRandomNumber();
  }

  lastMessageRandomNumber = randomNumber;
  return randomNumber;
}

//Confirmation that there is a message and it does not exceed 200 characters
function messageVerification() {
  confirmationText.innerHTML = "";
  const buttonOpacity = "0.2";

  if (messageInput.value.length > 199) {
    confirmationText.innerHTML =
      "El mensaje debe tener menos de 200 caracteres.";
    sendButton.style.opacity = buttonOpacity;
    sendButton.disabled = true;
  } else if (nameInput.value.length > 14) {
    confirmationText.innerHTML =
      "Tu nombre no puede tener mas de 14 caracteres";
    sendButton.style.opacity = buttonOpacity;
    sendButton.disabled = true;
  } else if (nameInput.value.length === 0 || messageInput.value.length === 0) {
    sendButton.style.opacity = buttonOpacity;
    sendButton.disabled = true;
  } else {
    sendButton.style.opacity = "100%";
    sendButton.disabled = false;
  }
}

//html template of message
function createTemplate(color, name, message) {
  return `
        <div class="message">
            <h4 style="color:${color};">${name}</h4>
            <p>
                ${message}
            </p>
        </div>
    `;
}

//Create message
function createMessage(template) {
  const message = document.createElement("message");
  message.innerHTML = template;

  return message;
}

//Send message from the form
function sendFormMessage(e) {
  e.preventDefault();

  const message = createMessage(
    createTemplate("teal", nameInput.value, messageInput.value)
  );

  //get the message node to add a class to it
  //different style in user message
  message.childNodes[1].classList.add("user-message");

  //add html tag
  chat.appendChild(message);

  //Scroll to last message
  chat.scrollTo(0, chat.scrollHeight);

  //Disable username change
  nameInput.disabled = true;
  sendButton.disabled = true;

  //Delete what was written in the input
  messageInput.value = "";
}

//Listen when the form is submitted
messageForm.addEventListener("submit", sendFormMessage);

//Template of simulated messages
let randomMessage = {
  messages: [
    createTemplate("black", "Alicia", "Porque me ignoran?."),
    createTemplate("black", "Alicia", "Que bien."),
    createTemplate("black", "Alicia", "Claro que si."),
    createTemplate("black", "Alicia", "¿Pastel?"),
    createTemplate("red", "lianca", ":(."),
    createTemplate("red", "lianca", ":D."),
    createTemplate("red", "lianca", "Oh, que bien."),
    createTemplate("blue", "j0lio", "Feliz cumpleaños!."),
    createTemplate("blue", "j0lio", "Suena interesante!."),
    createTemplate("darkgoldenrod", "zamuel", "Hoy a sido un gran dia."),
    createTemplate("darkgoldenrod", "zamuel", "Me gusta como piensas."),
    createTemplate("purple", "Bob", "¿No te encuentras bien hoy?."),
    createTemplate("purple", "Bob", "jajaja"),
    createTemplate("green", "EEEEE", "e e e e."),
    createTemplate("green", "EEEEE", "e e e?."),
    createTemplate("orange", "lizt0", "no quiero"),
    createTemplate("pink", "Franck", "¿Cuando vamos al parque?"),
    createTemplate(
      "brown",
      "mr.lacorner",
      "La verdad prefiero quedarme en casa."
    ),
    createTemplate("brown", "mr.lacorner", "Me gustaria invertir en eso."),
    createTemplate(
      "yellowgreen",
      "chile",
      "La verdad prefiero quedarme en casa."
    ),
  ],
};

//Creates an interval that sends a pre-made message of 4 to 6 seconds
setInterval(() => {
  const message = createMessage(
    randomMessage.messages[
      random(lastMessageRandomNumber, 0, randomMessage.messages.length)
    ]
  );
  chat.appendChild(message);
  chat.scrollTo(0, chat.scrollHeight);
}, random(-1, 4000, 6000));
