import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super(state);
    this.state = state;
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

    return this.el;
  }
}
