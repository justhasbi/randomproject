class Clock extends HTMLElement {
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
                :host {
                    margin:  0 auto;
                    width: 80%;
                    display: flex;
                    justify-content: center;
                }

                .countdown-element {
                    margin: 0 30px;
                    text-align: center;
                    border-radius: 10%;
                }

                .countdown-element > h2 {
                    font-size: 3em;
                }

                .countdown-element > span {
                    font-size: 1.2em;
                }
            </style>

            <div class="countdown-element days-el">
                <h2 class="big-text" id="days">0</h2>
                <span>Days</span>
            </div>

            <div class="countdown-element hours-el">
                <h2 class="big-text" id="hours">0</h2>
                <span>Hours</span>
            </div>
            
            <div class="countdown-element minute-el">
                <h2 class="big-text" id="minute">0</h2>
                <span>Minute</span>
            </div>
            
            <div class="countdown-element second-el">
                <h2 class="big-text" id="second">0</h2>
                <span>Second</span>
            </div>
        `;
    }
}

customElements.define("clock-element", Clock);