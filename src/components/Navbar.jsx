import React from "react";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="fixed bottom-6 sm:bottom-12 bg-[#242424] z-10 w-full sm:w-2/5 md:w-2/5 lg:w-1/3 xl:w-1/3 flex justify-between py-2 rounded-full items-center shadow-lg">
        <button className="cursor-pointer text-white text-sm sm:text-base px-2 pl-8">Home</button>
        <button className="cursor-pointer text-white text-sm sm:text-base px-2">About</button>
        <button className="cursor-pointer text-white text-sm sm:text-base px-2">Events</button>
        <button className="cursor-pointer text-white text-sm sm:text-base px-2">Contact</button>
        <div className="flex items-center px-2">
          <button className="cursor-pointer text-[#f15a22] text-sm sm:text-base">Join Us</button>
          <button className="cursor-pointer ml-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f15a22] rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;