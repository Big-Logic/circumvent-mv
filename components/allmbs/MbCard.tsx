import { deleteMbs, getSingleMbs } from "@/app/api/route";
import useAllMbsContext from "@/hooks/useAllMbsContext";
import usePopup from "@/hooks/usePopup";
import { VscLinkExternal, VscTrash, VscEdit } from "react-icons/vsc";
import SubHeadersContainer from "../SubHeadersCOntainer";
import Form from "../Form";
import { useEffect, useRef, useState } from "react";
import { getSingleMbsAndItItems } from "@/services/services";

function CardButton({ children, handleClick, customStyle = "" }) {
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center ${customStyle}`}
    >
      {children}
    </button>
  );
}

function DeleteMbContent({ mbId }: { mbId: string }) {
  //
  const { handlePopupClose } = usePopup();
  const { loadAllMbs } = useAllMbsContext();
  //
  async function handleDelete() {
    await deleteMbs(mbId);
    loadAllMbs();
    handlePopupClose();
  }
  //
  function handleCancel() {
    handlePopupClose();
  }
  //
  return (
    <div>
      <p>
        Deleting this mb cannot be undone. Are you sure you want to proceed?
      </p>
      <div className="text-right mt-10">
        <CardButton
          handleClick={handleCancel}
          customStyle="bg-blue-500 py-2 px-4 min-w-24 rounded-lg mr-2"
        >
          Cancel
        </CardButton>
        <CardButton
          handleClick={handleDelete}
          customStyle="border py-2 px-4 min-w-24 rounded-lg"
        >
          Proceed
        </CardButton>
      </div>
    </div>
  );
}

function EditName({ hd }) {
  const [mbName, setMbName] = useState(hd);

  // const inputRef = useRef("");

  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={mbName}
        onChange={(e) => setMbName(e.target.value)}
      />
    </form>
  );
}

function ViewMbContent({ mbId }: { mbId: string }) {
  const [{ isLoading, error, data }, setDoc] = useState({
    isLoading: false,
    error: null,
    data: {},
  });

  useEffect(function () {
    (async () => {
      try {
        setDoc((prev) => {
          return { ...prev, isLoading: true };
        });
        const result = await getSingleMbsAndItItems(mbId);
        setDoc((prev) => {
          return { ...prev, isLoading: false, data: result };
        });
      } catch (err) {}
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        "An error occured"
      ) : (
        <>
          <SubHeadersContainer mbs={data.mbs} />
          <Form items={data.items} mbs={data.mbs} />
        </>
      )}
    </>
  );
}

function EditMbContent({ mbId }: { mbId: string }) {
  const [{ isLoading, error, data }, setDoc] = useState({
    isLoading: false,
    error: null,
    data: {},
  });

  useEffect(function () {
    (async () => {
      try {
        setDoc((prev) => {
          return { ...prev, isLoading: true };
        });
        const result = await getSingleMbs(mbId);
        setDoc((prev) => {
          return { ...prev, isLoading: false, data: result };
        });
        console.log(result);
      } catch (err) {}
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        "An error occured"
      ) : (
        <EditName hd={data.name} />
      )}
    </>
  );
}

function CardButtons({ mb }) {
  const { handlePopupOpen } = usePopup();
  function handleViewClick() {
    handlePopupOpen(<ViewMbContent mbId={mb["$id"]} />);
  }

  function handleEditClick() {
    handlePopupOpen(<EditMbContent mbId={mb["$id"]} />);
  }

  function handleDeleteClick() {
    handlePopupOpen(<DeleteMbContent mbId={mb["$id"]} />);
  }
  return (
    <div className="grid grid-cols-3 text-center px-2 py-2">
      <CardButton handleClick={handleViewClick}>
        <VscLinkExternal />
      </CardButton>

      <CardButton handleClick={handleEditClick}>
        <VscEdit />
      </CardButton>

      <CardButton handleClick={handleDeleteClick}>
        <VscTrash />
      </CardButton>
    </div>
  );
}

function MbCard({ mb }) {
  return (
    <div className={`shadow-md rounded-lg overflow-hidden ${""}`} key={mb.name}>
      <div className="grid grid-cols-[60fr_40fr] items-center py-2 px-2 bg-blue-200">
        <div>
          <h3 className="text-lg font-bold">{mb.name}</h3>
        </div>
        <div className="text-right">
          <div
            className={`w-4 h-4 ${
              mb.status === "active" ? "bg-green-500" : "bg-red-500"
            } rounded-full inline-block`}
          ></div>
        </div>
      </div>
      <ul className="flex flex-col p-1 gap-3 my-3">
        <li className="bg-slate-100 p-2 rounded-lg">
          <p className="font-semibold">{mb.totalItems}</p>
          <p>items</p>
        </li>
        <li className="bg-slate-100 p-2 rounded-lg">
          <p className="font-semibold">
            {new Date(mb.startDate).toLocaleDateString()}
          </p>
          <p>Date created</p>
        </li>
      </ul>
      <CardButtons mb={mb} />
    </div>
  );
}

export default MbCard;
