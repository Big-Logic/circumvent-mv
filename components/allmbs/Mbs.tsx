import useAllMbsContext from "@/hooks/useAllMbsContext";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import Main from "./Main";

function Mbs() {
  const { isLoading, isError, error, allMbs } = useAllMbsContext();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMsg errorMsg={error} />;
  if (allMbs) return <Main allMbs={allMbs} />;
}

export default Mbs;
