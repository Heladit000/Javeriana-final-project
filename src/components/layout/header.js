//--Header component and theme change handling--

//extend from CustomComponent which we import from html
class Header extends CustomComponent {
  constructor() {
    super();

    //get the folder with id
    this.folderPath = this.getPath("header");

    //Gets the current topic from local storage
    this.actualTheme = localStorage.getItem("theme");

    this.showMenu = false;
    this.panelOptions;

    //template with the html that we have with this.folderPath for the relative paths
    this.template = `
        
        <link rel="stylesheet" href="${this.folderPath}/../../../fonts/icomoon/style.css">
        <link rel="stylesheet" href="${this.folderPath}/../../../style/layout/header.css">
        
        <div class="header">
                <div class="header-panel">
                    <a href="${this.folderPath}/../../../../index.html" class="title">
                        N<span class="icon-terminal"></span>
                    </a>
                    <div class="panel-options panel-options-exit" id="panel-options">
                        <a href="${this.folderPath}/../../../pages/experience.html">
                        Experiencias
                    </a>
                    <a href="${this.folderPath}/../../../pages/timeLine.html">
                        Un poco de historia
                    </a>
                    <a href="${this.folderPath}/../../../pages/materialOfInterest.html">
                        Material de interes
                    </a>
                    <a href="${this.folderPath}/../../../pages/chaTThing.html">
                        ChaTThing
                    </a>
                    </div>
                   
                    <div class="ExtraOptions">
                      <span class="icon-menu" id="menu"></span>
                      <span id="themeButton"></span>  
                    </div>
                  
                </div>
        </div>

        `;
  }

  //This function is from HTMLElements if it is executed when the page is rendered
  connectedCallback() {
  
    const shadowRoot = this.connect(this.template);

    //variable import
    const menu = shadowRoot.getElementById("menu");
    const themeButton = shadowRoot.getElementById("themeButton");
    const panelOptions = shadowRoot.getElementById("panel-options");

    //every time you load the icon will change
    if (this.actualTheme === "light") {
      themeButton.classList.toggle("icon-moon-stroke");
    } else {
      themeButton.classList.toggle("icon-sun");
    }

    //hear when we click on the icon
    themeButton.addEventListener("click", () => {
      this.changeTheme();
    });

    //Handling of opening the menu in responsive
    menu.addEventListener("click", () => {
      if (this.showMenu === false) {
        panelOptions.classList.remove("panel-options-exit");
        panelOptions.classList.add("panel-options-entry");
        this.showMenu = true;
      } else {
        panelOptions.classList.remove("panel-options-entry");
        panelOptions.classList.add("panel-options-exit");
        this.showMenu = false;
      }
    })
  }

  //Control the change from light to dark theme using local storage
  changeTheme() {
    //Cambia el tema de claro o oscuro
    if (this.actualTheme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    //reload the page
    window.location.reload();
  }
}

//Define new element
//need have -component for it to work and be identified!
customElements.define("header-component", Header);
