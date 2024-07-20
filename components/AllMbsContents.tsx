import useAllMbsContext from "@/hooks/useAllMbsContext";
import Header from "./Header";
import Mbs from "./allmbs/Mbs";
import PopupContainer from "./popup/PopupContainer";

function AllMbsContent() {
  const { loadAllMbs } = useAllMbsContext();
  return (
    <>
      <Header funHandler={loadAllMbs} />
      <Mbs />
      <PopupContainer />
    </>
  );
}

export default AllMbsContent;
