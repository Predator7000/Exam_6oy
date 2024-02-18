import React from "react";
import Banner from "../../img/about/Banner.png";
import MAinImg from "../../img/about/MainImg.png";
import { Tack } from "../../img/about/icon/tack";
import { Curcle } from "../../img/about/icon/curcle";
import banner_vegetables from "../../img/about/banner_vegetables.png";
import { Return } from "../../img/about/icon/return";
import { quadtro } from "../../Pages/About/quadto.js";
import { Organic } from "../../Pages/About/organic.js";
import { Facebook } from "../../img/about/icon/facebook.jsx";
import { Twitter } from "../../img/about/icon/twitter.jsx";
import { AboutData } from "./about.js";

export const About = () => {
  return (
    <div className="pb-[141px]">
      <div>
        <div>
          <img className="bg-cover" src={Banner} alt="" />
        </div>
        <div className="container">
          <div className="flex items-center justify-between">
            <img src={MAinImg} alt="" />
            <div className="w-[675px]">
              <span className="text-salate text-[36px] font-[400] mb-[8px]">
                About Us
              </span>
              <h4 className="text-drgreen text-[50px] font-[800] mb-[14px]">
                We do Creative <br /> Things for Success
              </h4>
              <p className="text-gray text-[18px] font-[400] mb-[48px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley. <br />{" "}
                <br />
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="flex justify-between mb-[58px]">
                <div className="flex items-center gap-[10px]">
                  <Tack />
                  <p className="w-[230px] text-drgreen text-[25px] font-[600] ">
                    Modern Agriculture Equipment
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <Tack />
                  <p className="w-[230px] text-drgreen text-[25px] font-[600] ">
                    Modern Agriculture Equipment
                  </p>
                </div>
              </div>
              <button className="text-[#fff] bg-drgreen rounded-[16px] text-[20px] font-[700] py-[28px] px-[39px]">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-[189px]">
        <div className="container">
          <div className="flex justify-between items-center pt-[190px] pb-[91px]">
            <div className=" w-[671px]">
              <div>
                <span className="text-salate text-[36px] font-[400] mb-[10px]">
                  Why Choose us?
                </span>
                <h4 className="w-[639px] text-drgreen text-[50px] font-[800] mb-[24px]">
                  We do not buy from the open market & traders.
                </h4>
                <p className="text-drgreen text-[18px] font-[400] mb-[36px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard the 1500s,
                  when an unknown
                </p>
                <div className="flex gap-2 pl-[27px] pr-[89px] py-[29px] bg-white w-[339px] rounded-[50px] mb-[12px]">
                  <Curcle />
                  <p className="text-drgreen text-[20px] font-[500]">
                    100% Natural Product
                  </p>
                </div>
                <p className="text-drgreen text-[18px] font-[400] ml-[60px] w-[444px] mb-[12px]">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
                <div className="flex gap-2 pl-[27px] pr-[91px] py-[29px] bg-white w-[339px] rounded-[50px] mb-[12px]">
                  <Curcle />
                  <p className="text-drgreen text-[20px] font-[500]">
                    Increases resistance
                  </p>
                </div>
                <p className="text-drgreen text-[18px] font-[400] ml-[60px] w-[444px] mb-[12px]">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <img
              className="w-[690px] h-[690px]"
              src={banner_vegetables}
              alt="vegetables"
            />
          </div>
          <div>
            <ul className="flex justify-center gap-[30px]">
              <li className="w-[257px] pt-[50px] pl-[35px] pr-[35px] pb-[19px] flex flex-col justify-center bg-[#fff] rounded-[30px]">
                <div className="flex justify-center mb-[15px]">
                  <Return />
                </div>

                {quadtro.map((item) => (
                  <div>
                    <h4 className="text-drgreen text-[25px] font-[800] [15px]">
                      {item.title}
                    </h4>
                    <p className="text-drgreen text-[18px] font-[400] text-center">
                      {item.text}
                    </p>
                  </div>
                ))}
              </li>
              <li className="w-[257px] pt-[50px] pl-[35px] pr-[35px] pb-[19px] flex flex-col justify-center bg-[#fff] rounded-[30px]">
                <div className="flex justify-center mb-[15px]">
                  <Return />
                </div>

                {quadtro.map((item) => (
                  <div>
                    <h4 className="text-drgreen text-[25px] font-[800] [15px]">
                      {item.title}
                    </h4>
                    <p className="text-drgreen text-[18px] font-[400] text-center">
                      {item.text}
                    </p>
                  </div>
                ))}
              </li>
              <li className="w-[257px] pt-[50px] pl-[35px] pr-[35px] pb-[19px] flex flex-col justify-center bg-[#fff] rounded-[30px]">
                <div className="flex justify-center mb-[15px]">
                  <Return />
                </div>

                {quadtro.map((item) => (
                  <div>
                    <h4 className="text-drgreen text-[25px] font-[800] [15px]">
                      {item.title}
                    </h4>
                    <p className="text-drgreen text-[18px] font-[400] text-center">
                      {item.text}
                    </p>
                  </div>
                ))}
              </li>
              <li className="w-[257px] pt-[50px] pl-[35px] pr-[35px] pb-[19px] flex flex-col justify-center bg-[#fff] rounded-[30px]">
                <div className="flex justify-center mb-[15px]">
                  <Return />
                </div>

                {quadtro.map((item) => (
                  <div>
                    <h4 className="text-drgreen text-[25px] font-[800] [15px]">
                      {item.title}
                    </h4>
                    <p className="text-drgreen text-[18px] font-[400] text-center">
                      {item.text}
                    </p>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-[177px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <span className="text-salate text-[36px] font-[400] ">Team</span>
            <h4 className="text-drgreen text-[50px] font-[800]">
              Our Organic Experts
            </h4>
            <p className="text-drgreen text-[18px] font-[400] w-[852px] text-center mb-[42px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>

          <div className="flex gap-[27px] justify-center pb-[202px]">
            {Organic.map((item) => (
              <div>
                <img className="rounded-t-[30px]" src={item.img} alt="" />
                <div className="flex justify-between pt-[35px] pl-[28px] pr-[28px] pb-[35px] bg-white rounded-b-[30px] items-end">
                  <div>
                    <h4 className="text-drgreen text-[25px] font-[800]">
                      {item.title}
                    </h4>
                    <p className="text-salate text-[22px] font-[400]">
                      {item.span}
                    </p>
                  </div>
                  <div className="flex gap-[17px]">
                    <Facebook />
                    <Twitter />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-drgreen pt-[188px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <span className="text-salate text-[36px] font-[400] mb-[8px]">
              About Us
            </span>
            <h4 className="text-[#fff] text-[50px] font-[800] mb-[33px]">
              What We Offer for You
            </h4>
          </div>
          <div className="flex justify-between pb-[188px]">
            {AboutData.map((item) => (
              <div>
                <img src={item.img} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
