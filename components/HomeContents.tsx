import Main from "./Main";
import Header from "./Header";
import PopupContainer from "./popup/PopupContainer";

//
import useApp from "@/hooks/useApp";

function HomeContents() {
  const { loadMb } = useApp();
  return (
    <>
      <Header funHandler={loadMb} />
      <PopupContainer />
      <Main />
    </>
  );
}

export default HomeContents;
