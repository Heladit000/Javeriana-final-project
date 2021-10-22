class Footer extends CustomComponent {
    constructor() {
        super();

        this.folderPath = this.getPath("footer");
        this.template = `

            <link rel="stylesheet" href="${this.folderPath}/../../../fonts/icomoon/style.css">
            <link rel="stylesheet" href="${this.folderPath}../../style/layout/footer.css"/>

            <div class="footer">
                <h4>the challenge: Only using HTML CSS & JS vanilla! (no libraries or others)</h4>
                <h4>Made with <span class="icon-heart"></span> for Heladit000 for Pontificia Universidad Javeriana</h4>
                <h4>2021</h4>
            </div>
        `
    }

    connectedCallback() {
        this.connect(this.template);
    }
}

customElements.define("footer-component", Footer);