import MbCard from "./MbCard";

function Main({ allMbs }) {
  return (
    <main className="max-w-[900px] mx-auto my-10 p-8">
      <h1 className="text-center text-5xl mb-6">All Mbs</h1>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {allMbs.map((mb) => (
          <MbCard key={mb.name} mb={mb} />
        ))}
      </div>
    </main>
  );
}

export default Main;
