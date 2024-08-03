import { useState } from "react";

function MbHeader({ hd }) {
  const [mbHeaderValue, setMbHeaderValue] = useState(hd);

  async function handleInputChange() {}

  return <input type="text" value={hd} onChange={handleInputChange} />;
}
