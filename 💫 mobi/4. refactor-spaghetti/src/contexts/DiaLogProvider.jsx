import { createContext, useContext, useReducer } from "react";

export const DialLogState = {
  ALERT: "ALERT",
  CONFIRM: "CONFIRM",
  CONFIRMAGAIN: "CONFIRMAGAIN",
};

const DiaLogContext = createContext();

const initialState = {
  type: "",
  text: "",
  position: { x: 50, y: 10 },
};

// case: alert, confirm
// confirm에서 action.payload: confirm/cancle
const DiaLogReducer = (state, action) => {
  switch (action.type) {
    case "ALERT":
      return { ...state, ...action.payload };
    case "CONFIRM":
      if (action.payload.type === "confirm") {
      } else if (action.payload.type === "cancle") {
      } else return state;
    case "CONFIRMAGAIN":
      if (action.payload.type === "confirm") {
      } else if (action.payload.type === "cancle") {
      } else return state;
    default:
      return state;
  }
};

export const useDiaLogStore = () => useContext(DiaLogContext);

const DiaLogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DiaLogReducer, initialState);

  return (
    <DiaLogContext.Provider value={{ state, dispatch }}>
      {children}
    </DiaLogContext.Provider>
  );
};
export default DiaLogProvider;
