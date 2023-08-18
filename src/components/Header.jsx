import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed    top-0 right-0 left-0 shadow    z-10">
      <div className="flex justify-between items-center w-[85%] mx-auto h-[5rem] ">
        <div className="logo   text-[20px] uppercase font-semibold">logo</div>
        <ul className="text-[20px]    font-medium capitalize space-x-3">
          <Link  to={"/"} className="hover:text-slate-500  transition-colors duration-75">home</Link>
          <Link to={"/posts" } className="hover:text-slate-500  transition-colors duration-75">posts</Link>
          <Link to={"/login"} className="hover:text-slate-500  transition-colors duration-75">login</Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
