import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import GlobalStyles from "./styles/global";
import IssueListStoreProvider from "./contexts/issueList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <IssueListStoreProvider>
        <div className="App">
          <GlobalStyles />
          <RouterProvider router={router} />
        </div>
      </IssueListStoreProvider>
    </Provider>
  );
}

export default App;
