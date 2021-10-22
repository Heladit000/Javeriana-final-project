//-componente Header y manejo de cambio de tema-


//extiende de CustomComponent el cual importamos desde el html
class Header extends CustomComponent {

    constructor() {
        super();

        //obtenemos la carpeta con nuestro id
        this.folderPath = this.getPath("header");

        //Obtiene el tema actual del almacenamiento local
        this.actualTheme = localStorage.getItem("theme");

        //Nuestra plantilla con el html que tendemos con this.folderPath para las rutas relativas
        this.template = `
        
        <link rel="stylesheet" href="${this.folderPath}/../../../fonts/icomoon/style.css">
        <link rel="stylesheet" href="${this.folderPath}/../../../style/layout/header.css">
        
        <div class="header">
                <div class="header-panel">
                    <a href="${this.folderPath}/../../../../index.html" class="title">
                        N<span class="icon-terminal"></span>
                    </a>
                    <a href="${this.folderPath}/../../../pages/experience.html">
                        Experencias
                    </a>
                    <a href="${this.folderPath}/../../../pages/timeLine.html">
                        Un poco deaa historia
                    </a>
                    <a href="${this.folderPath}/../../../pages/materialOfInterest.html">
                        Material de interes
                    </a>
                    <a href="${this.folderPath}/../../../pages/chaTThing.html">
                        ChaTThing
                    </a>
                    <span id="themeButton"></span>
                </div>
        </div>

        `;
    }

    //Esta funcion es de HTMLElements si se ejecuta cuando se renderiza la pagina
    connectedCallback() {

        //Conectamos
        const shadowRoot = this.connect(this.template);
        const themeButton = shadowRoot.getElementById("themeButton");

        if (this.actualTheme === "light") {
            themeButton.classList.toggle("icon-moon-stroke");
        } else {
            themeButton.classList.toggle("icon-sun");
        }

        themeButton.addEventListener("click", () => { this.changeTheme() });
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