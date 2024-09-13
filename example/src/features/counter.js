/**
 *
 * @param {HTMLElement} element - The element to attach the counter to
 */
export function setupCounter(element) {
  let counter = 0;
  /**
   *
   * @param {number} count - The count to set
   */
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
