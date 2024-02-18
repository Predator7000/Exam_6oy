import React from "react";
import { footerd } from "./foooter.js";
import { FooterLogo } from "../../img/footer/footer_logo";
import { Ins_icon } from "../../img/home/icon/ins_icon.jsx";
import { Facebook } from "../../img/home/icon/facebook.jsx";
import { Twitter } from "../../img/home/icon/twitter.jsx";
import { Printeres } from "../../img/home/icon/printeres.jsx";
import { FooterData } from "../../components/data/home/footer-jsx.jsx";
import { FooterDataL } from "../../components/data/home/footer_l.jsx";

export const Footer = () => {
  return (
    <div>
      <div className="pb-[117px] ">
        <div className="container">
          <div className=" bg-bgimg_3 bg-cover bg-no-repeat pb-[105px] pt-[105px] pl-[71px] pr-[71px] flex justify-between items-center">
            <h4 className="w-[409px] text-[50px] font-[800] text-[#fff]">
              Subscribe to our Newsletter
            </h4>
            <div className="flex gap-2">
              <input
                className="px-[23px] py-[29px] rounded-[16px]"
                placeholder="Your Email Address"
                type="text"
              />
              <button className="text-[#fff] text-[20px] font-[700] px-[40px] py-[25px] bg-drgreen rounded-[16px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex justify-center gap-[30px] pb-[102px]">
        <div className="border-r-2 pr-[51px] flex flex-col ">
          {footerd.map((item) => (
            <FooterData key={item.id} {...item}/>
          ))}
        </div>

        <div className="w-[543px] pl-[41px] pr-[41px] ">
          <div className="flex justify-center mb-[23px]">
            <FooterLogo />
          </div>
          <p className="text-drgreen text-[18px] font-[400]  text-center  mb-[50px] ">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div className="flex gap-[15px] justify-center">
            <Ins_icon />
            <Facebook />
            <Twitter />
            <Printeres />
          </div>
        </div>

        <div className="border-l-2 pl-[50px] flex">
          <div className="flex flex-col">
            {footerd.map((item) => (
               <FooterDataL key={item.id} {...item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
