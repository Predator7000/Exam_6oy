import React from "react";
import searchlogo from "../../img/header/icon_search.svg";
import { route } from "./data.js";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/header/logo.svg";
import Karz from "../../img/header/karzina.svg";

export const Hero = () => {
  return (
    <div className="container flex items-center pt-[69px] pb-[69px] justify-between">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="flex gap-3 text-[20px] font-[700]">
        {route.map((item) => (
          <NavLink key={item.id} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex">
        <div className="flex relative">
          <input
            className="w-[350px] h-[66px] bg-white rounded-full   "
            type="text"
          />
          <img className="absolute right-1 top-1" src={searchlogo} alt="aa" />
        </div>

        <div className="flex items-center border rounded-full w-[160px]">
          <img className="ml-[5px] mr-[5px]" src={Karz} alt="karzina" />
          <p className="text-drgreen font-[700] size-[20px]">Cart(0)</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
