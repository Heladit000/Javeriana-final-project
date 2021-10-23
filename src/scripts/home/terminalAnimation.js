const terminal = document.getElementById("terminal");

//lista de mensajes con color y duracion
const messages = [
  {
    message: "Heladit000@web-page ",
    typeDelay: 0,
    delay: 1000,
    color: "teal",
  },
  {
    message: "cd projects \n",
    delay: 1000,
  },
  {
    message: "Heladit000@web-page",
    typeDelay: 0,
    delay: 0,
    color: "teal",
  },
  {
    message: " ~/projects ",
    typeDelay: 0,
    delay: 1000,
    color: "green",
  },
  {
    message: "cd javeriana \n",
    delay: 1000,
  },
  {
    message: "Heladit000@web-page",
    typeDelay: 0,
    color: "teal",
  },
  {
    message: " ~/projects/javeriana ",
    typeDelay: 0,
    delay: 1000,
    color: "green",
  },
  {
    message: "cat gracias.txt \n",
    delay: 1000,
  },
  {
    message: `

            Gracias a todos los profesores de la Javeriana
            por este gran curso :D

            ¡Muchas gracias! :D

        `,
    typeDelay: 2,
  },
  {
    message: "Heladit000@web-page",
    typeDelay: 0,
    delay: 0,
    color: "teal",
  },
  {
    message: " ~/projects/javeriana ",
    typeDelay: 0,
    delay: 4000,
    color: "green",
  },
  {
    message: "cd ../.. \n",
    delay: 2000,
  },
  {
    message: "Heladit000@web-page ",
    typeDelay: 0,
    delay: 1000,
    color: "teal",
  },
  {
    message: "clear \n",
    delay: 3000,
  },
];

let terminalText = "";

//Va a dibujar caracter por carater segun el numero de mensaje y la posicion
function writeLine(messageNumber, position) {
  //Si no se a terminado la linea
  if (position < messages[messageNumber].message.length) {
    //Vamo a escribir un span con cada caracter dependiendo del color
    terminalText += `<span style="color: ${
      messages[messageNumber].color || "white"
    }">${messages[messageNumber].message.slice(position, position + 1)}</span>`;

    //Si el retraso de animacion es 0 ejecuta la funcion de nuevo con el siguiente caracter
    if (messages[messageNumber].typeDelay === 0) {
      writeLine(messageNumber, position + 1);
    } else {
      //Si tiene un tiempo establecido o 200 espera a que se ejecute
      setTimeout(() => {
        writeLine(messageNumber, position + 1);
      }, messages[messageNumber].typeDelay || 100);
    }
  } else {
    //pasamos a la siguiente linea
    if (messageNumber < messages.length - 1) {
      terminalText += "";
      setTimeout(() => {
        writeLine(messageNumber + 1, 0);
      }, messages[messageNumber].delay || 0);
    } else {
      //reiniciamos el texto
      terminalText = "";
      writeLine(0, 0);
    }
  }

  //Escribimos el texto en nuestra terminal
  terminal.innerHTML = terminalText;
}

//Empezamos desde el primer elemento
writeLine(0, 0);
