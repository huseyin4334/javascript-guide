export class Modal {

    constructor(contentId, message) {
        this.contentTemplate = document.getElementById(contentId);
        this.modalTemplate = document.getElementById("modal-template");
        this.message = message;
    }

    show() {
        if ('content' in document.createElement("template")) {
            const createdTemplate = document.importNode(this.modalTemplate.content, true);
            this.modalArea = createdTemplate.querySelector(".modal");
            this.backdrop = createdTemplate.querySelector(".backdrop");

            const createdContentTemplate = document.importNode(
                this.contentTemplate.content,
                true
            );


            this.modalArea.appendChild(createdContentTemplate);

            document.body.insertAdjacentElement("afterbegin", this.modalArea);
            document.body.insertAdjacentElement("afterbegin", this.backdrop);
        } else {
            // fallback code
            alert(this.message);
        }
    }

    hide() {
        document.body.removeChild(this.modalArea);
        document.body.removeChild(this.backdrop);

        this.modalArea = null;
        this.backdrop = null;
    }
}