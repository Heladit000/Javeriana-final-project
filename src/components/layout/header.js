//-componente Header y manejo de cambio de tema-

//extiende de CustomComponent el cual importamos desde el html
class Header extends CustomComponent {
  constructor() {
    super();

    //obtenemos la carpeta con nuestro id
    this.folderPath = this.getPath("header");

    //Obtiene el tema actual del almacenamiento local
    this.actualTheme = localStorage.getItem("theme");

    this.showMenu = false;
    this.panelOptions;

    //Nuestra plantilla con el html que tendemos con this.folderPath para las rutas relativas
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

  //Esta funcion es de HTMLElements si se ejecuta cuando se renderiza la pagina
  connectedCallback() {
    //Conectamos
    const shadowRoot = this.connect(this.template);

    //Importamos variables
    const menu = shadowRoot.getElementById("menu");
    const themeButton = shadowRoot.getElementById("themeButton");
    const panelOptions = shadowRoot.getElementById("panel-options");

    //cada vez que carga va a cambiar el icono
    if (this.actualTheme === "light") {
      themeButton.classList.toggle("icon-moon-stroke");
    } else {
      themeButton.classList.toggle("icon-sun");
    }

    //va a escuchar cuando le damos click al icono
    themeButton.addEventListener("click", () => {
      this.changeTheme();
    });

    //Manejo de abrir el menu en responsive
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

  //Controla el cambio de tema claro a oscuro usando local storage
  changeTheme() {
    //Cambia el tema de claro o oscuro
    if (this.actualTheme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    //recarga la pagina
    window.location.reload();
  }
}

//Definimos un nuevo elemento
//!!!!Debe tener -component para que funcione y sea identificado
customElements.define("header-component", Header);
