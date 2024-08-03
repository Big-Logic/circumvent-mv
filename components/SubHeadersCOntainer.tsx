import SubHeader from "./SubHeader,";

function SubHeadersContainer({ mbs }) {
  function handleEndDate() {
    const endDate =
      new Date(mbs.startDate).getTime() / 1000 / 60 / 60 / 24 + mbs.totalItems;
    return new Date(endDate * 24 * 60 * 60 * 1000).toLocaleDateString();
  }

  return (
    <>
      {mbs && (
        <>
          <h1 className="text-center text-5xl mb-6">{mbs.name}</h1>
          <div className="grid grid-cols-3 mb-8">
            <SubHeader
              dt={`${new Date(mbs.startDate).toLocaleDateString()}`}
              description="Start Date"
            />
            <SubHeader dt={`${handleEndDate()}`} description="End Date" />
            <SubHeader dt={`${mbs.totalItems}`} description="Total Items" />
          </div>
        </>
      )}
    </>
  );
}

export default SubHeadersContainer;
