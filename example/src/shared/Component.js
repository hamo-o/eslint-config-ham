export class Component {
  #target;

  #props;

  constructor(target, props) {
    this.#target = target;
    this.#props = props;
  }

  static template() {
    // UI 구성
    return "";
  }

  render() {
    this.#target.innerHTML = this.template();
    this.mounted();
  }
}
