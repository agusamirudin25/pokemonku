class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container text-center">
            <small class="text-lg">Copyright &copy; Agus Amirudin</small>
        </div>
        `;
    }
}

customElements.define("foot-bar", FootBar);