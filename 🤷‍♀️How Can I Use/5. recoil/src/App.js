import "./App.css";
import { RecoilRoot } from "recoil";
import Input from "./components/Input";
import CountBtn from "./components/CountBtn";

function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>RECOIL</h1>
        <Input />
        <CountBtn />
      </div>
    </RecoilRoot>
  );
}

export default App;
