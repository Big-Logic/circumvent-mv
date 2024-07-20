import { createContext, useEffect, useReducer } from "react";
import { getActiveMbs, getAllItems } from "@/app/api/route";
import { addNewItem } from "@/services/services";

export const AppContext = createContext({});

const initialArg = {
  mbs: null,
  documents: null,
  isLoading: false,
  isError: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "state/loading":
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case "state/error":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case "state/loaded":
      return {
        isLoading: false,
        isError: false,
        error: null,
        mbs: action.payload.mbs,
        documents: action.payload.documents,
      };
    case "state/addItem":
      return {
        ...state,
        mbs: action.payload.mbs,
        documents: [...state.documents, action.payload.document],
      };
    default:
      throw Error("Unknown action.");
  }
}

function AppContextProvider({ children }) {
  const [{ isLoading, isError, error, mbs, documents }, dispatch] = useReducer(
    reducer,
    initialArg
  );

  // Load active mb and items from appwrite when app loads
  useEffect(function () {
    loadMb();
  }, []);
  ///

  async function loadMb() {
    dispatch({ type: "state/loading" });

    try {
      const activeMb = await getActiveMbs(); // Get active mb

      const result = await getAllItems(activeMb?.["$id"] || ""); // Get all items relating to active mb
      if (result) {
        dispatch({
          type: "state/loaded",
          payload: { mbs: activeMb, documents: result },
        });
      } else {
        dispatch({ type: "state/loaded", payload: initialArg });
      }
    } catch (err) {
      console.dir(err);
      if (err.name === "AppwriteException") {
        //make sure the error is coming from appwrite
        if (!err.type) {
          //if the error has no type, that means we don't have a specific message
          dispatch({
            type: "state/error",
            payload:
              "An unexpected error occured while trying to process your request. Please make sure you are connected to the internet and try reloading this page!",
          });
        } else {
          //if the error has a type, we sent the error message to the user
          dispatch({
            type: "state/error",
            payload: err.message,
          });
        }
      } else {
        //unknown errors
        dispatch({
          type: "state/error",
          payload:
            "An unexpected error occured while trying to process your request. Please make sure you are connected to the internet and try reloading this page!",
        });
      }
    }
  }

  async function addItemToMb() {
    try {
      const [newItem, updatedMbs] = await addNewItem(mbs);
      //
      dispatch({
        type: "state/addItem",
        payload: { mbs: updatedMbs, document: newItem },
      });
    } catch (err) {
      console.log(err);
    }
  }
  ///////

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        error,
        mbs,
        documents,
        addItemToMb,
        loadMb,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
