const terminal = document.getElementById("terminal");

//list of messages with color and duration
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

//draw character by character according to message number and position
function writeLine(messageNumber, position) {
  //If the line is not finished
  if (position < messages[messageNumber].message.length) {
    //write a span with each character depending on the color
    terminalText += `<span style="color: ${
      messages[messageNumber].color || "white"
    }">${messages[messageNumber].message.slice(position, position + 1)}</span>`;

    //If the animation delay is 0, execute the function again with the next character
    if (messages[messageNumber].typeDelay === 0) {
      writeLine(messageNumber, position + 1);
    } else {
      //If it has a set time or 200 wait for it to run
      setTimeout(() => {
        writeLine(messageNumber, position + 1);
      }, messages[messageNumber].typeDelay || 100);
    }
  } else {
    //go to the next line
    if (messageNumber < messages.length - 1) {
      terminalText += "";
      setTimeout(() => {
        writeLine(messageNumber + 1, 0);
      }, messages[messageNumber].delay || 0);
    } else {
      //restart the text
      terminalText = "";
      writeLine(0, 0);
    }
  }

  //write the text in our terminal
  terminal.innerHTML = terminalText;
}

//start from the first element
writeLine(0, 0);
