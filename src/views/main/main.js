import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';

export class MainView extends AbstractView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Find of books');
  }

  appStateHook(path) {
    console.log(path);
    if (path === 'favorites') {
      // this.render();
      console.log(path);
    }
  }

  render() {
    const main = document.createElement('div');
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
    this.renderSearch();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }

  renderSearch() {
    const search = new Search(this.state).render();
    this.app.append(search);
  }
}
