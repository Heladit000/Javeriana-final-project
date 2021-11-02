const actualTheme = localStorage.getItem("theme");

//get all the html elements
const allElementes = document.body.querySelectorAll("*");

//It does not give us a list so we must use for instead of .map
//add the dark class to all html elements if it is in dark theme

if (actualTheme === "dark" || actualTheme === null) {
  //add the dark class to body
  document.body.classList.add("body-dark");

  for (let index = 0; index < allElementes.length; index++) {
    //get the class that has an element
    const className = allElementes[index].className;

    if (className.length > 0) {
      //If it has a class we are going to add the main-dark class to it
      allElementes[index].classList.add(
        `${allElementes[index].className}-dark`
      );
    } else {
      //If it does not have a class, it will add the name of the html-dark element
      allElementes[index].classList.add(`${allElementes[index].tagName}-dark`);
    }
  }
}
