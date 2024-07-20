import { createContext, useEffect, useReducer } from "react";
import { getAllMbs } from "@/app/api/route";

export const AllMbsContext = createContext({});

const initialArgs = {
  isLoading: false,
  isError: false,
  error: null,
  allMbs: null,
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
        allMbs: action.payload.allMbs,
      };
    default:
      throw Error("Unknown action.");
  }
}

function AllMbsContextProvider({ children }) {
  const [{ isLoading, isError, error, allMbs }, dispatch] = useReducer(
    reducer,
    initialArgs
  );

  //   Load all mbs as the page loads
  useEffect(function () {
    loadAllMbs();
  }, []);

  //Get handler
  async function loadAllMbs() {
    dispatch({ type: "state/loading" });

    const result = await getAllMbs();
    dispatch({
      type: "state/loaded",
      payload: { allMbs: result },
    });
  }

  return (
    <AllMbsContext.Provider
      value={{ isLoading, isError, error, allMbs, loadAllMbs }}
    >
      {children}
    </AllMbsContext.Provider>
  );
}

export default AllMbsContextProvider;
