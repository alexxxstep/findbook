import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/card-list/card-list.js';

export class MainView extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('Find of books');
  }

  appStateHook(path) {
    if (path === 'favorites') {
      // console.log(path);
    }
  }

  async stateHook(path) {
    console.log('-=PATH=-', path);
    if (path === 'searchQuery') {
      // console.log(this.state.searchQuery, ' - ', this.state.offset);
      this.state.loading = true;
      const data = await this.loadList(
        this.state.searchQuery,
        this.state.offset
      );

      /** searchQuery */
      console.log(data);
      this.state.numFound = data.numFound;
      this.state.loading = false;
      this.state.list = data.docs;
    }

    if (path === 'list' || path === 'loading') {
      this.render();
    }
  }

  async loadList(q, offset) {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${q}&offset=${offset}`
      );
      return res.json();
    } catch (error) {
      return error.json();
    }
  }

  render() {
    const main = document.createElement('div');
    this.renderSearch(main);
    this.renderCardList(main);
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }

  renderSearch(main) {
    const search = new Search(this.state).render();
    main.append(search);
  }
  renderCardList(main) {
    const cardList = new CardList(this.appState, this.state).render();
    main.append(cardList);
  }
}
