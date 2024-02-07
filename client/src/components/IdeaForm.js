class IdeaForm {
    constructor() {
        this._formModal = document.querySelector('#form-modal');
        this._form = document.querySelector('#idea-form');
    }

    render() {
        this._formModal.innerHTML = `
        <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" />
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
    }
}

export default IdeaForm;