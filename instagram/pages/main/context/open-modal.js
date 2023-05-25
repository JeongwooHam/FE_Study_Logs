import { createContext, useState, useContext } from "react";

export const useOpenModal = () => useContext(OpenModal);

const OpenModal = createContext();

const OpenModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <OpenModal.Provider value={{ isOpenModal, setIsOpenModal, handleModal }}>
      {children}
    </OpenModal.Provider>
  );
};

export default OpenModalProvider;
