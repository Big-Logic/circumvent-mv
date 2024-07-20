import { AllMbsContext } from "@/contexts/AllMbsContext";
import { useContext } from "react";

function useAllMbsContext() {
  const values = useContext(AllMbsContext);
  return values;
}

export default useAllMbsContext;
