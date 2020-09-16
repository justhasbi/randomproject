class NavBar extends HTMLElement {
    connectedCallback() {
        console.log("element connected");
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container">
                <div class="logo">
                    <h2>Logo Coba</h2>
                </div>
                <ul class="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define("nav-bar", NavBar);