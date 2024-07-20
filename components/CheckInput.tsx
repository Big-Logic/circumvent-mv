import { updateItem } from "@/app/api/route";
import { useCallback, useEffect, useState } from "react";

function CheckInput({ item, mbs }) {
  const [isChanging, setIsChanging] = useState(false);
  const [isChecked, setIsChecked] = useState(item.isActivated);

  useEffect(
    function () {
      if (mbs.status === "inactive") {
        setIsChanging(true);
      }
    },
    [setIsChanging, mbs.status]
  );

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
        // defaultChecked={item.isActivated}
        disabled={isChanging}
        className="w-6 h-6"
        onChange={handleChange}
        checked={isChecked}
      />
    </>
  );
}

export default CheckInput;
