import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const generateAlert = (msg, type) => {
    dispatch({ type: "GENERATE_ALERT", payload: {msg, type} });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  }

  return (
    <AlertContext.Provider value={{alert:state, generateAlert }}>
      {children}
    </AlertContext.Provider> 
  );
};

export default AlertContext; 
