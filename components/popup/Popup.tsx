import { ReactNode } from "react";
import PopupCloseButton from "./PopupCloseButton";

interface PopupParams {
  children: ReactNode;
}

function Popup({ children }: PopupParams) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-slate-600/15 z-50">
      <div className="w-[600px] max-w-full bg-white py-16 px-8 relative rounded-xl animate-scale">
        <PopupCloseButton />
        {children}
      </div>
    </div>
  );
}

export default Popup;
