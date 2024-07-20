import { updateItem } from "@/app/api/route";
import { useState } from "react";

function CheckInput({ item }) {
  const [isChanging, setIsChanging] = useState(false);
  const [isChecked, setIsChecked] = useState(item.isActivated);

  async function handleChange(e) {
    //
    const checkedValue = !isChecked;
    //
    const itemId = item["$id"];
    const inputObj = {
      isActivated: checkedValue,
    };
    //
    setIsChanging(true);
    //
    const { isActivated } = await updateItem(itemId, JSON.stringify(inputObj));
    //
    setIsChanging(false);
    setIsChecked(isActivated);
  }

  return (
    <>
      <label htmlFor={`day${item.day}`} className="text-xl inline-block mr-4">
        Day {item.day}
      </label>
      <input
        type="checkbox"
        id={`day${item.day}`}
        defaultChecked={item.isActivated}
        disabled={isChanging}
        className="w-6 h-6"
        onChange={handleChange}
        checked={isChecked}
      />
    </>
  );
}

export default CheckInput;
