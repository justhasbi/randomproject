class Clock extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
        
    }

    // clock() {
    //     const daysElement = document.getElementById("days");
    //     const hoursElement = document.querySelector("#hours");
    //     const minuteElement = document.querySelector("#minute");
    //     const secondElement = document.querySelector("#second");
        
    //     const newYears = "1 Jan 2021";
    //     const countdown  = () => {
    //         const presentDate = new Date();
    //         const newYearsDate = new Date(newYears);
            
    //         const totalSeconds = (newYearsDate - presentDate)/1000;
            
    //         const days = Math.floor(totalSeconds / 3600 / 24);
    //         const hours = Math.floor(totalSeconds/3600) % 24;
    //         const mins = Math.floor(totalSeconds/60) % 60;
    //         const seconds = Math.floor(totalSeconds) % 60;
            
    //         // console.log(seconds);

    //         // daysElement.innerHTML = days;
    //         // hoursElement.innerHTML = hours;
    //         // minuteElement.innerHTML = mins;
    //         // secondElement.innerHTML = seconds;
    //     }
    //     countdown()
        
    //     setInterval(countdown, 1000);
    // }

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