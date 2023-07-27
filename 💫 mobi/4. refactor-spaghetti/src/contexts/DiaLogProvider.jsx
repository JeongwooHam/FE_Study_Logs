import { createContext, useContext, useReducer, useState } from "react";

export const DialLogState = {
  ALERT: "ALERT",
  CONFIRM: "CONFIRM",
  CLOSE: "CLOSE",
};

const DiaLogContext = createContext();

const initialState = {
  type: "",
  text: "",
  position: { x: 50, y: 10 },
};

const DiaLogReducer = (state, action) => {
  switch (action.type) {
    case DialLogState.ALERT:
      return { ...state, ...action.payload, type: DialLogState.ALERT };
    case DialLogState.CONFIRM:
      return { ...state, ...action.payload, type: DialLogState.CONFIRM };
    case DialLogState.CLOSE:
      return { ...initialState };
    default:
      return state;
  }
};

export const useDiaLogStore = () => useContext(DiaLogContext);

const DiaLogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(DiaLogReducer, initialState);

  const OpenDialog = () => {
    setIsOpen(true);
  };

  const CloseDialog = () => {
    dispatch({
      type: DialLogState.CLOSE,
    });
    setIsOpen(false);
  };

  return (
    <DiaLogContext.Provider
      value={{ state, dispatch, isOpen, OpenDialog, CloseDialog }}
    >
      {children}
    </DiaLogContext.Provider>
  );
};
export default DiaLogProvider;
