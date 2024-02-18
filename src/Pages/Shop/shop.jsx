import React from "react";
import Banner from "../../img/shop/Banner.png";
import { cards } from "../Home/cards.js";

export const Shop = () => {
  return (
    <div>
      <img className="pb-[90px]" src={Banner} alt="banner" />
      <div className="container">
      <div className="flex flex-wrap gap-[20px] justify-between pb-[122px]">
        {cards.map((item) => (
          <div>
            <ul>
              <li className="w-[335px] bg-white rounded-[30px]">
                <div>
                  <img
                    className="w-[335px] h-[324px]"
                    src={item.img}
                    alt="img"
                  />
                </div>
                <div className="px-[30px] mb-[17px]">
                  <h4 className="text-drgreen text-[20px] font-[600] mb-3">
                    {item.text}
                  </h4>
                  <hr />
                  <div className="flex justify-between mt-[6px]">
                    <div className="flex gap-[8px] items-center">
                      <p className="text-[#B8B8B8]">{item.ncost}</p>
                      <p className="text-drgreen text-[18px] font-[700]">
                        {item.cost}
                      </p>
                    </div>
                    <img src={item.img_s} alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
