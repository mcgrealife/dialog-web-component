class DialogExtended extends HTMLDialogElement {
    static observedAttributes = ["state"];

    constructor() {
        super();
      }


    connectedCallback() {

        document.querySelector("#open-custom-dialog").addEventListener("click", () => {
            this.showModal();
            this.setAttribute('state', "open")


        })
        
        this.querySelector(":scope button").addEventListener("click", () => {
            this.close();
            this.setAttribute('state', "closed")
        })


        if (this.getAttribute('closeOnClickOutside')) {
            const dialog = document.querySelector('dialog');
            // todo: remove listeners
            document.addEventListener("mousedown", event => {
                const rect = dialog.getBoundingClientRect();
                const isInDialog = rect.top <= event.clientY && event.clientY <= rect.bottom &&
                rect.left <= event.clientX && event.clientX <= rect.right;

                if (!isInDialog) {
                    this.close();
                    this.setAttribute('state', "closed")

                }
            }, false);

        }
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "state") {
            const shouldScrollLock = this.getAttribute('scrollLock');

            if (newValue === "open") {
             document.querySelector('.scroll p').textContent = "Scroll is locked! And click outside will close dialog."
             if (shouldScrollLock) {
                 document.body.classList.add('scrollLock');
             }
            }

            if (newValue === "closed") {
                document.querySelector('.scroll p').textContent = "Very long scrollable section"
                if (shouldScrollLock) {
                    document.body.classList.remove('scrollLock');
                }
            }

        }

      }

}

customElements.define('dialog-extended', DialogExtended, { extends: 'dialog'});