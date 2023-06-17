import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[5vw] fixed w-full top-0 left-0 bg-slate-500/50 backdrop-blur-md flex px-[2vw] py-[1vw]">
      <Link to="/">
        <div className="text-[2vw] font-bold text-center text-white">
          АО КППД
        </div>
      </Link>
    </div>
  );
};
export default Header;
