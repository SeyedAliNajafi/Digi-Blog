
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/ui/Logo";
import SideBarNavs from "./ـ/components/SideBarNavs";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

function SideBarMobile({ isOpen, setIsOpen }) {
  const { logout } = useAuth();
  const logoutHandler = async () => {
    await logout();
  };
  const sidebarRef = useRef(null);

  // Function to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div
      ref={sidebarRef}
      className={`w-[280px] lg:hidden fixed h-screen z-50 bg-white p-4 top-0 -right-1 tran  ${
        isOpen ? "translate-x-0" : "translate-x-[280px]"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <Logo />
        </Link>
        <span className="size-5" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </span>
      </div>
      <hr className="border-gray-300 mb-20" />
      <div className="overflow-y-auto flex-auto space-y-5">
        <SideBarNavs />
        <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className=" h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}

export default SideBarMobile;
