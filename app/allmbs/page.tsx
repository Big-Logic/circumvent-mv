"use client";
import AllMbsContent from "@/components/AllMbsContents";
import AllMbsContextProvider from "@/contexts/AllMbsContext";
import PopupContextProvider from "@/contexts/PopupContext";

function AllMbs() {
  return (
    <AllMbsContextProvider>
      <PopupContextProvider>
        <AllMbsContent />
      </PopupContextProvider>
    </AllMbsContextProvider>
  );
}

export default AllMbs;
