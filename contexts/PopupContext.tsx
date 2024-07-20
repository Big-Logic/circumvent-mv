import { createContext, useState } from "react";

export const PopupContext = createContext({});

function PopupContextProvider({ children }) {
  const [{ popupType, popupContent }, setPopupType] = useState({
    popupType: "close",
    popupContent: null,
  });

  function handlePopupClose() {
    setPopupType({ popupType: "close", popupContent: null });
  }
  function handlePopupOpen(popupContent) {
    console.log
    setPopupType({ popupType: "open", popupContent });
  }
  return (
    <PopupContext.Provider
      value={{ popupType, popupContent, handlePopupClose, handlePopupOpen }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export default PopupContextProvider;
