"use client";
import PopupContextProvider from "@/contexts/PopupContext";
import AppContextProvider from "@/contexts/ActiveMbContext";
import HomeContents from "@/components/HomeContents";

//

export default function Home() {
  return (
    <AppContextProvider>
      <PopupContextProvider>
        <HomeContents />
      </PopupContextProvider>
    </AppContextProvider>
  );
}
