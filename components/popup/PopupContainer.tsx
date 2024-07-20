import usePopup from "@/hooks/usePopup";
import Popup from "./Popup";

function PopupContainer() {
  const { popupType, popupContent } = usePopup();
  return <>{popupType !== "close" && <Popup>{popupContent}</Popup>}</>;
}

export default PopupContainer;
