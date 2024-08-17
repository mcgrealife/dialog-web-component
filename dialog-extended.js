class DialogExtended extends HTMLDialogElement {
    constructor() {
        super();
      }

    connectedCallback() {

        document.querySelector("#open-custom-dialog").addEventListener("click", () => {
            this.showModal();

            if (this.getAttribute('scrollLock')) {
                document.body.classList.add('scrollLock');
            }
        })
        
        this.querySelector(":scope button").addEventListener("click", () => {
            this.close();
        })


        if (this.getAttribute('closeOnClickOutside')) {
            const dialog = document.querySelector('dialog');
            document.addEventListener("mousedown", event => {
                const rect = dialog.getBoundingClientRect();
                const isInDialog = rect.top <= event.clientY && event.clientY <= rect.bottom &&
                rect.left <= event.clientX && event.clientX <= rect.right;

                if (!isInDialog) {
                    this.close();
                    document.body.classList.remove('scrollLock');
                }
            }, false);

        }

    }

}

customElements.define('dialog-extended', DialogExtended, { extends: 'dialog'});