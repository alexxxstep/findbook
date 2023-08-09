import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';

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
    main.innerHTML = `Count of books: ${this.appState.favorites.length}`;
    this.app.innerHTML = '';
    this.app.append(main);
    this.appState.favorites.push('ddd');
  }
}
