import useApp from "@/hooks/useApp";
import Button from "./Button";
import { useState } from "react";

function AddInput() {
  const { addItemToMb } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  async function handleAdd() {
    setIsLoading(true);
    await addItemToMb();
    setIsLoading(false);
  }
  return (
    <Button
      textContent={isLoading ? "Wait" : "Add"}
      btnType="button"
      handleClick={handleAdd}
      disabled={isLoading}
      styles={`${
        isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900"
      } w-14 h-14 mt-8 rounded-full text-white`}
    />
  );
}

export default AddInput;
