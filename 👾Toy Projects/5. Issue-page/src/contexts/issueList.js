import { createContext, useContext, useState } from "react";

export const useIssueList = () => useContext(IssueListStore);

const IssueListStore = createContext();

const IssueListStoreProvider = ({ children }) => {
  const [issueList, setIssueList] = useState([]);

  return (
    <IssueListStore.Provider value={{ issueList, setIssueList }}>
      {children}
    </IssueListStore.Provider>
  );
};

export default IssueListStoreProvider;
