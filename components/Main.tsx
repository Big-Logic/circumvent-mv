import useApp from "@/hooks/useApp";
import Form from "./Form";
import SubHeadersContainer from "./SubHeadersCOntainer";
import NewSetupButton from "./NewSetupButton";
import AddInput from "./AddInput";

function Main() {
  const { mbs, isLoading, isError, error } = useApp();

  if (isLoading)
    return (
      <div className="max-w-[400px] mx-auto my-10 p-8">
        <p className="text-center">Loading...</p>
      </div>
    );
  if (isError)
    return (
      <div className="max-w-[500px] mx-auto my-10 p-8">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );

  return (
    <main className="max-w-[900px] mx-auto my-10 p-8">
      {!mbs && !isLoading && !isError && (
        <div className="text-center">
          <p className="mb-4">You are out of active mbs</p>
          <NewSetupButton />
        </div>
      )}
      {mbs && !isLoading && !isError && (
        <>
          <SubHeadersContainer />
          <Form />
          <AddInput />
        </>
      )}
    </main>
  );
}

export default Main;
