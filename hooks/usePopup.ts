import { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";

function usePopup() {
  const values = useContext(PopupContext);
  return values;
}

export default usePopup;
