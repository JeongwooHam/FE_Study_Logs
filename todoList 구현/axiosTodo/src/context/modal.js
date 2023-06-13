import { createContext, useContext, useState } from "react";

export const useModal = () => useContext(AddModal);

const AddModal = createContext();

const AddModalProvider = ({ children }) => {
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  return (
    <AddModal.Provider value={{ isAddTodoModal, setIsAddTodoModal }}>
      {children}
    </AddModal.Provider>
  );
};

export default AddModalProvider;
