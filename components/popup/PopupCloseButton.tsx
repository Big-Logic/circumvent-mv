import usePopup from "@/hooks/usePopup";
import Button from "../Button";

function PopupCloseButton() {
  const { handlePopupClose } = usePopup();

  return (
    <Button
      btnType="button"
      handleClick={handlePopupClose}
      textContent="&times;"
      styles="text-blue-900 text-2xl rounded-full border border-blue-900 w-8 h-8 flex items-center justify-center absolute top-4 right-4"
    />
  );
}

export default PopupCloseButton;
