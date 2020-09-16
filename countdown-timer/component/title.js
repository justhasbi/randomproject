class TitleTag extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                h1{
                    text-align: center;
                }
            </style>

            <h1>Countdown Timer</h1>
        `;
    }
}

customElements.define("title-tag", TitleTag);