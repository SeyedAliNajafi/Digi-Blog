import React from "react";
import Logo from "./Logo";
function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-lg">
      <div className="bg-white dark:bg-slate-600 p-6 rounded-3xl flex flex-col items-center justify-center w-64 md:w-80 h-64 md:h-80 shadow-lg">
        <div className="md:hidden">
          <Logo size="size-24" />
        </div>
        <div className="hidden md:block">
          <Logo size="size-36" />
        </div>
        <div className="loader mt-4"></div>
      </div>
    </div>
  );
}

export default Loading;
