import { Component } from "../../core/component";
import aboutStore from "../../store/about";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    const { github } = aboutStore.state;
    this.el.innerHTML = /* html */ `
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          JeongwooHam
        </a>
      </div>
    `;
  }
}
