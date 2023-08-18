import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    console.log('cardState = = ', this.cardState);
    const existInFavorites = this.appState.favorites.find(
      (b) => b.key === this.cardState.key
    );

    this.el.classList.add('card');
    this.el.innerHTML = `

    <div class="card__image-wrapper">
        <img src="https://covers.openlibrary.org/b/olid/${
          this.cardState.cover_edition_key
        }-M.jpg" alt="Book Title" class="card__image">
    </div>
    <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subject ? this.cardState.subject[0] : 'Empty'}
        </div>
        <div class="card__title">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${
            this.cardState.author_name
              ? this.cardState.author_name[0]
              : 'No author'
          }
        </div>
        <h4 class="card__genre">Genre</h4>
        <div class="card__footer">
        <button class="btn__add ${existInFavorites ? 'btn-active' : ''}">
        ${
          existInFavorites
            ? '<img src="/static/favorites.svg" alt="Flag" class="card__flag-image">'
            : '<img src="/static/favorites_w.svg" alt="white" class="card__flag-image">'
        } </button>
        </div>

</div>

    `;

    return this.el;
  }
}
