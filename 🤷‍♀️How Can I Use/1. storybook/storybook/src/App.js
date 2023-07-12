import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

export default App;
