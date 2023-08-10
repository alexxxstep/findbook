import { DivComponent } from '../../common/div-component';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super(appState);
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList.add('header');
    this.el.innerHTML = `<div class="menu">
    <a href="#logo" class="menu__logo">
        <img src="/static/logo.svg" alt="Logo">
    </a>
    <div class="menu__actions">
        <a href="#search" class="menu__item menu__item_type_search">
            <img src="/static/search.svg" alt="Search Icon">
            <span>Search books</span>
        </a>

        <a href="#favorites" class="menu__item menu__item_type_favorites">
            <img src="/static/favorites.svg" alt="Favorites Icon">
            <span>Favorites</span>
            <div class="menu__counter">${this.appState.favorites.length}</div>
        </a>
    </div>
</div>      `;

    return this.el;
  }
}
