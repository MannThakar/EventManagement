"use client";
import { iAction, iState } from "@/interface/context";
import React, { createContext, useContext, useReducer } from "react";

const initialState: iState = {
  isCollapse: false,
};

function reducer(state: iState, action: iAction): iState {
  switch (action.type) {
    case "SET_IS_COLLAPSE":
      return { ...state, isCollapse: action.value };
    default:
      return state;
  }
}

const AppContext = createContext<
  { state: iState; dispatch: React.Dispatch<iAction> } | undefined
>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
};

const setIsCollapse = (dispatch: React.Dispatch<iAction>, value: boolean) => {
  dispatch({ type: "SET_IS_COLLAPSE", value });
};

export { setIsCollapse };
