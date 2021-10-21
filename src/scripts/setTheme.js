
const actualTheme = localStorage.getItem("theme");

//Obtenemos todos los elementos html
const allElementes = document.body.querySelectorAll("*");

//No nos entrega una lista asi que debemos usar for en vez de .map
//Añadimos la clase dark a todos los elementos html si esta en tema oscuro

if (actualTheme === "dark" || actualTheme === null) {

    //Añadimos la clase dark a body
    document.body.classList.add("body-dark");

    for (let index = 0; index < allElementes.length; index++) {

        //obtenemos la clase que tiene un elemento
        const className = allElementes[index].className

        if (className.length > 0) {

            //Si tiene una clase vamos a añadirle la clase principal-dark
            allElementes[index].classList.add(`${allElementes[index].className}-dark`);
        } else {

            //Si no tiene clase va añadirle el nombre del elemento html-dark
            allElementes[index].classList.add(`${allElementes[index].tagName}-dark`);
        }
    }
}



