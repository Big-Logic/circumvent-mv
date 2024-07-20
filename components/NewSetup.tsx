import { useRef, useState } from "react";
import usePopup from "@/hooks/usePopup";
import { createMb } from "@/services/services";

type Fn = () => void;

function NewSetup({ funHandler }: { funHandler: Fn | undefined }) {
  const { handlePopupClose } = usePopup();

  const mbNameRef = useRef(null); //reference to the form input

  async function handleCreate(e) {
    e.preventDefault();
    const newMbName = mbNameRef.current.value.trim(); //new mb name

    await createMb(newMbName); // Create new mb

    if (typeof funHandler === "function") {
      funHandler();
    }

    handlePopupClose();
  }

  return (
    <div>
      <h2 className="font-medium text-center ">New Setup</h2>
      <form onSubmit={handleCreate} className="max-w-sm mx-auto">
        <ul>
          <li>
            <label htmlFor="setupname">Setup Name</label>
          </li>
          <li>
            <input
              type="text"
              id="setupname"
              placeholder="eg. June setup"
              className="block h-12 w-full my-4 border px-4 rounded-full"
              ref={mbNameRef}
              required
            />
          </li>
          <li>
            <button
              type="submit"
              className="bg-blue-900 py-2 px-4 rounded-full text-white block w-full"
            >
              Create
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default NewSetup;
