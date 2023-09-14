import { Component } from "./core/component";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default class App extends Component {
  render() {
    const theHeader = new Header().el;
    const theFooter = new Footer().el;
    const routerView = document.createElement("router-view");

    // 상속받은 Component의 타이핑이 안료되어 더이상 에러가 발생하지 않음
    this.el.append(theHeader, routerView, theFooter);
  }
}
