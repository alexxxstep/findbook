import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Find of books');
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = 'TEST';
    this.app.innerHTML = '';
    this.app.append(main);
    console.log(main);
  }
}
