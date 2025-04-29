import React from "react";
import { HiOutlineBell } from "react-icons/hi2";

const Notifications = () => {
  return (
    <div className="">
      <HiOutlineBell className="text-xl sm:text-2xl bg-black text-white p-3 sm:p-4 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-2xl cursor-pointer icon" />
    </div>
  );
};

export default Notifications;
