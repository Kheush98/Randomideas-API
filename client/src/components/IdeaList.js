import IdeasAPI from "../services/ideasAPI";

class IdeaList {
    constructor() {
        this._ideas = document.querySelector('#idea-list');
        this._data = [];
        this.getIdeas();
    }

    
    addEventListeners() {
        this._ideas.addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-times')) {
                e.stopImmediatePropagation();
                const ideaId = e.target.parentElement.parentElement.dataset.id;
                this.deleteIdea(ideaId);
            }
        })
    }

    async deleteIdea(id) {
        try {
            // delete from server
            const res = await IdeasAPI.deleteIdea(id);
            this._ideas.filter((idea) => idea._id !== id);
            this.getIdeas();
        } catch (error) {
            alert('You can not delete this resource');
        }
    }

    async getIdeas() {
        try {
            const res = await IdeasAPI.getIdeas();
            this._data = res.data.data;
            this.render();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        this._ideas.innerHTML = this._data.map((data) => {
            const deleteBtn = data.username === localStorage.getItem('username')
                                ? `<button class="delete"><i class="fas fa-times"></i></button>`
                                : ''
            return `
            <div class="card" data-id="${data._id}">
            ${deleteBtn}
            <h3>
              ${data.text}
            </h3>
            <p class="tag tag-${data.tag.toLowerCase()}">${data.tag.toUpperCase()}</p>
            <p>
              Posted on <span class="date">${data.date.substring(0, 10)}</span> by
              <span class="author">${data.username}</span>
            </p>
          </div>
            `;
        }).join('');
        this.addEventListeners();
    }
}

export default IdeaList;