import {
  createNewItem,
  createNewMb,
  getActiveMbs,
  getAllItems,
  getSingleMbs,
  updateMbs,
} from "@/app/api/route";

export async function addNewItem(mb) {
  const mbId = mb["$id"];
  const day = mb.totalItems + 1;

  const itemObj = {
    day,
    isActivated: false,
    mbs: mbId,
  };

  const setupResponse = await Promise.all([
    createNewItem(JSON.stringify(itemObj)),
    updateMbs(
      mb["$id"],
      JSON.stringify({
        totalItems: day,
      })
    ),
  ]);

  return setupResponse;
}

export async function createMb(mbName: string) {
  const setupObj = {
    name: mbName,
    totalItems: 0,
    status: "active",
    startDate: new Date(Date.now()),
  };

  try {
    const activeMb = await getActiveMbs(); // fetch mb whose status equals active

    const response = await Promise.all([
      createNewMb(JSON.stringify(setupObj)), //Create a new mb
      updateMbs(
        // Set the active mb status to inactive
        activeMb?.["$id"],
        JSON.stringify({
          status: "inactive",
        })
      ),
    ]);

    const [newMb] = response;

    await addNewItem(newMb); // Add an item to the newly created mb

    return newMb;

    /////----//////
  } catch (err) {
    console.dir(err);
    if (err.name === "AppwriteException") {
      //make sure the error is coming from appwrite
      if (!err.type) {
        //if the error has no type, that means we don't have a specific message
      } else {
        //if the error has a type, we sent the error message to the user
      }
    } else {
      //unknown errors
    }
  }
}

export async function getSingleMbsAndItItems(docId: string) {
  try {
    const result = await Promise.all([getSingleMbs(docId), getAllItems(docId)]);
    return { mbs: result[0], items: result[1] };
  } catch (err) {
    console.log(err);
  }
}
