import IdeasAPI from "../services/ideasAPI";
import IdeaList from "./IdeaList";
class IdeaForm {
    constructor() {
        this._formModal = document.querySelector('#form-modal');
    }

    addEventListeners() {
        this._form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (!this._form.elements.text.value || !this._form.elements.tag.value || !this._form.elements.username.value) {
            alert('Please enter fields');
            return;
        }

        // Set the username to local storage
        localStorage.setItem('username', this._form.elements.username.value);
        
        const idea = {
            text: this._form.elements.text.value,
            tag: this._form.elements.tag.value,
            username: this._form.elements.username.value
        };

        // Add idea to server
        await IdeasAPI.createIdea(idea);

        // Add idea,to list
        const ideasList = new IdeaList();
        ideasList.render();

        this._form.elements.text.value = '',
        this._form.elements.tag.value = '',
        this._form.elements.username.value = ''

        document.querySelector('#modal')
            .style.display = 'none';
        this.render();
        // Or we can it in another way
        document.dispatchEvent(new Event('closemodal'));
    }

    render() {
        this._formModal.innerHTML = `
            <form id="idea-form">
                <div class="form-control">
                    <label for="idea-text">Enter a Username</label>
                    <input type="text" name="username" id="username" 
                    value="${localStorage.getItem('username') ?? ''}"/>
                </div>
                    <div class="form-control">
                    <label for="idea-text">What's Your Idea?</label>
                    <textarea name="text" id="idea-text"></textarea>
                </div>
                <div class="form-control">
                    <label for="tag">Tag</label>
                    <input type="text" name="tag" id="tag" />
                </div>
                <button class="btn" type="submit" id="submit">Submit</button>
            </form>
        `;
        this._form = document.querySelector('#idea-form');
        this.addEventListeners();
    }
}

export default IdeaForm;