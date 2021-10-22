//--Componentes personalizados para html--

//vamos a crear un elemento con shadow DOM 
//Que es tener un "DOM fantasma" que se une con nuestro DOM principal
//de aqui lo aprendi: https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc

//Creamos una clase que extiende de la clase de elementos html
class CustomComponent extends HTMLElement {

    //constructor de la clase de custom component 
    constructor() {

        //Pasamos los parametros del constructor de HTMLElement
        super();
    }

    //funcion para obtener la carpeta en la que se encuentra nuestro script
    //Esto para poder agregar recursos externos como hojas de estilos
    getPath(id) {

        let folderPath;

        try {
            //Obtenemos la ruta de nuestro script(el src) y nos salimos para tener la carpeta
            folderPath = document.getElementById(id).attributes["src"].value + "/../";
        }
        catch {
            //Si no encuentra el script lanzara un error
            throw new Error(`you need add id=${id} to your script import to add external sources`);
        }

        return folderPath;

    }

    //Funcion para conectarse 
    connect(template) {

        //Creamos un elemento html llamado template
        const componentTemplate = document.createElement("template");

        //añadimos nuestro html(template)
        componentTemplate.innerHTML = template;

        //Creamos una sombra(un html que va a estar embebido en otro html pero sin que tengan que estar separados)
        //con mode: open para poder acceder a parametros externos
        const shadowRoot = this.attachShadow({
            mode: "open"
        })

        //añadimos nuestro template a nuestra sombra
        shadowRoot.appendChild(componentTemplate.content);

        return shadowRoot
    }
}
