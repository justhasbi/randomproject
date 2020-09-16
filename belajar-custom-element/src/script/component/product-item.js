class ProductItem extends HTMLElement {
    set product(product) {
        this._product = product;
        this.render();
    }

    render() {
        this.innerHTML= `
            <div class="card">
                <div class="card-header">
                    <img src="${this._product.imagePlaceholder}" alt="card-1">
                </div>
                <div class="card-body">
                    <div class="tag-container">
                        <span class="tag">Backend</span>
                        <span class="tag tag-violet">Frontend</span>
                    </div>
                    <h4>${this._product.name}</h4>
                    <p>${this._product.description}</p>
                    <div class="lesson-number">
                        <img src="src/img/Asset 1.svg" alt="book">
                        <p>24 Pelajaran</p>
                    </div>

                    <div class="btn-container">
                        <a href="#" class="btn-card">Daftar</a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("product-item", ProductItem);