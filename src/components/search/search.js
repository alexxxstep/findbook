import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super(state);
    this.state = state;
  }

  search() {
    const value = this.el.querySelector('input').value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList.add('search');
    this.el.innerHTML = `
    <div class="search__wrapper">
        <input
            type="text"
            class="search__input"
            placeholder="Search for books or authors..."
            value=${this.state.searchQuery ? this.state.searchQuery : ''}>
        <img src="/static/search.svg" class="search__icon" alt="Search Icon">
        </div>
        <button class="search__button" arial-label="Search">
            <img src="/static/search-white.svg"
                alt="Search">
        </button>
    `;

    this.el
      .querySelector('button')
      .addEventListener('click', this.search.bind(this));
    this.el.querySelector('input').addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.search();
      }
    });

    return this.el;
  }
}
