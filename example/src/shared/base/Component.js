/**
 *
 */
export class Component {
  #target;

  #props;

  /**
   *
   * @param {HTMLElement} target - The element to attach the component
   * @param {any} props - The props to attach the component
   */
  constructor(target, props) {
    this.#target = target;
    this.#props = props;
  }

  /**
   *  @returns {string} - The template string
   */
  static template() {
    // UI 구성
    return html``;
  }

  /**
   * UI를 렌더링합니다.
   */
  render() {
    this.#target.innerHTML = this.template();
    this.mounted();
  }
}
