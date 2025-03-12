"use client";
import { useState } from "react";
import Header from "./profile/ـ/components/Header";
import SideBar from "./profile/ـ/components/SideBar";
import SideBarMobile from "./profile/SideBarMobile";
import { set } from "react-hook-form";
export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-secondary-0">
      <SideBarMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <SideBar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <Header setIsOpen={setIsOpen} />
          <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

