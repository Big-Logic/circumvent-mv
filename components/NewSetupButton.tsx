import usePopup from "@/hooks/usePopup";
import Button from "./Button";
import NewSetup from "./NewSetup";

type Fn = () => void;

function NewSetupButton({ funHandler }: { funHandler: Fn }) {
  const { handlePopupOpen } = usePopup();
  function handleClick() {
    handlePopupOpen(<NewSetup funHandler={funHandler} />);
    console.log("click");
  }
  return (
    <Button
      btnType="button"
      handleClick={handleClick}
      textContent="New Setup"
      styles="bg-blue-900 py-2 px-4 rounded-full text-white"
    />
  );
}

export default NewSetupButton;
