//--Custom components for html--

//create a class that extends from the html element class
class CustomComponent extends HTMLElement {
  //constructor of the custom component class
  constructor() {
    super();
  }

  //function to get the folder where our script is located
  //This to be able to add external resources like style sheets
  getPath(id) {
    let folderPath;

    try {
      //We obtain the path of our script (the src) and we go out to have the folder
      folderPath = document.getElementById(id).attributes["src"].value + "/../";
    } catch {
      throw new Error(
        `you need add id=${id} to your script import to add external sources`
      );
    }

    return folderPath;
  }

  connect(template) {
    const componentTemplate = document.createElement("template");
    componentTemplate.innerHTML = template;

    //create a shadow (an html that will be embedded in another html but without having to be separated)
    //with open mode: to be able to access external parameters
    const shadowRoot = this.attachShadow({
      mode: "open",
    });

    //add our template to our shadow
    shadowRoot.appendChild(componentTemplate.content);

    return shadowRoot;
  }
}
