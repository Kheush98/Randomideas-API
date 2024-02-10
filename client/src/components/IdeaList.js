import IdeasAPI from "../services/ideasAPI";

class IdeaList {
    constructor() {
        this._ideas = document.querySelector('#idea-list');
        this._data = [];
        this.getIdeas();
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
            return `
            <div class="card">
            <button class="delete"><i class="fas fa-times"></i></button>
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
    }
}

export default IdeaList;