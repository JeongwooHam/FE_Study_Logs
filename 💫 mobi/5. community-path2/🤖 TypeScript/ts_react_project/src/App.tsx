import React from "react";
import "./App.css";
import { GlobalPostProvider } from "./components/8. Dispatch/StateContext";
import MainPage from "./pages";

function App() {
  return (
    <GlobalPostProvider>
      {" "}
      <div className="App">
        <MainPage />
      </div>
    </GlobalPostProvider>
  );
}

export default App;
