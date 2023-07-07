import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routing";
import GlobalStyles from "./style/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
