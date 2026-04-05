"use client";
import { iAction, iState } from "@/interface/context";
import { iEvent } from "@/interface/event";
import React, { createContext, useContext, useReducer } from "react";

const initialState: iState = {
  selectedEvent: null,
  isCollapse: false,
  isModalOpen: false,
  isReadOnly: false,
  events: [],
  search: "",
};

function reducer(state: iState, action: iAction): iState {
  switch (action.type) {
    case "SET_IS_COLLAPSE":
      return { ...state, isCollapse: action.value };
    case "SET_IS_MODAL_OPEN":
      return { ...state, isModalOpen: action.value };
    case "SET_SELECTED_EVENT":
      return { ...state, selectedEvent: action.value };
    case "SET_IS_READ_ONLY":
      return { ...state, isReadOnly: action.value };
    case "SET_EVENTS":
      return { ...state, events: action.value };
    case "SET_SEARCH":
      return { ...state, search: action.value };

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

const setIsModalValue = (dispatch: React.Dispatch<iAction>, value: boolean) => {
  dispatch({ type: "SET_IS_MODAL_OPEN", value });
};

const setSelectedEvent = (dispatch: React.Dispatch<iAction>, value: iEvent) => {
  dispatch({ type: "SET_SELECTED_EVENT", value });
};

const setIsReadOnly = (dispatch: React.Dispatch<iAction>, value: boolean) => {
  dispatch({ type: "SET_IS_READ_ONLY", value });
};

const setEvents = (dispatch: React.Dispatch<iAction>, value: iEvent[]) => {
  dispatch({ type: "SET_EVENTS", value });
};

const setSearch = (dispatch: React.Dispatch<iAction>, value: string) => {
  dispatch({ type: "SET_SEARCH", value });
};

export {
  setIsCollapse,
  setIsModalValue,
  setSelectedEvent,
  setIsReadOnly,
  setEvents,
  setSearch,
};
