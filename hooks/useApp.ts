import { useContext } from "react";
import { AppContext } from "../contexts/ActiveMbContext";

function useApp() {
  const values = useContext(AppContext);
  return values;
}

export default useApp;
