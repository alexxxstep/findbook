import { DivComponent } from '../../common/div-component';
import './loading.css';

export class Loading extends DivComponent {
  constructor(state) {
    super(state);
    this.state = state;
  }

  render() {
    if (this.state.loading) {
      console.log(this.state);
      this.el.innerHTML = `<div class="spinner"></div>`;
      this.el.classList.add('loading-container');
    } else {
      console.log(this.state);
      this.el.innerHTML = '';
      this.el.classList.remove('loading-container');
    }

    return this.el;
  }
}
