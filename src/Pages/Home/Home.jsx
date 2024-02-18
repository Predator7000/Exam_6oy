import React from "react";
import { two } from "./two-cards.js";
import fruits from "../../img/home/fruits.svg";
import { organic } from "./organic.js";
import { cards } from "./cards.js";
import opa from "../../img/home/opa.svg";
import stars from "../../img/home/starts.svg";
import { numbers } from "./numbers.js";
import moun from "../../img/home/moun.svg";
import { three } from "./three_data.js";
import { vegetable } from "./vegetables.js";
import { Chel } from "../../img/home/icon/chel.jsx";
import { CategoriesProducts } from "../../components/data/home/caterogia-products.jsx";
import { NamberProducts } from "../../components/data/home/namber-products.jsx";
import { ThreeProducts } from "../../components/data/home/three_products.jsx";
import { OrganicProduct } from "../../components/data/home/organic-product.jsx";
import { TwoProducts } from "../../components/data/home/two-products.jsx";
import { CardsMain } from "../../components/data/home/cards-products.jsx";

export const Home = () => {
  return (
    <div>
      <div className="bg-bgimg bg-no-repeat bg-cover">
        <div className="container pt-[247px] pb-[247px]">
          <span className="text-salate text-[36px] font-[400]">
            100% Natural Food
          </span>
          <h2 className="text-drgreen text-[70px] font-[700] w-[530px]">
            Choose the best healthier way of life
          </h2>
          <button className="text-drgreen text-[20px] font-[700] py-[28px] px-[39px] rounded-lg bg-yellow">
            Explore Now
          </button>
        </div>
      </div>

      <div className="container pt-[145px] pb-[190px]">
        <div className="flex gap-[36px] justify-center">
          {two.map((item) => (
            <TwoProducts {...item} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="flex items-center">
          <img src={fruits} alt="fruit" />
          <div>
            <span className="text-salate font-[400] text-[36px]">About Us</span>
            <h4 className="text-drgreen w-[702px] font-[800] text-[50px] mt-[10px] mb-[14px]">
              We Believe in Working Accredited Farmers
            </h4>
            <p className="w-[690px] text-[18px] font-[400] text-stain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
              {organic.map((item) => (
                <OrganicProduct {...item} />
              ))}
              <button className="bg-drgreen  px-[39px] py-[28px] font-[700] text-[20px] rounded-lg">
                Shop Now
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="text-salate text-[36px] font-[400] flex justify-center">
          Categories
        </p>
        <h4 className="text-drgreen text-[50px] font-[800] flex justify-center mb-[40px]">
          Our Products
        </h4>
        <div className="flex flex-wrap gap-[20px] justify-between pb-[122px]">
          {cards.slice(0, 8).map((item) => (
            <CategoriesProducts {...item} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className=" text-white rounded-lg bg-drgreen px-[49px] py-[28px] font-[700] text-[20px]">
            Load More
          </button>
        </div>
      </div>

      <div className="bg-bgimg_2 pt-[164px] pb-[102px] bg-no-repeat bg-cover  ">
        <div className="container">
          <div className="flex justify-center items-center flex-col">
            <span className="text-salate text-[36px] font-[400]">
              Testimonial
            </span>
            <h4 className="text-drgreen text-[50px] font-[800] mb-[60px]">
              What Our Customer Saying?
            </h4>
            <img className="rounded-full mb-[20px]  " src={opa} alt="." />
            <img className="mb-[25px]" src={stars} alt="star" />
            <p className="text-[18px] font-[400] w-[780px] flex text-center mb-[20px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <p className="text-[25px] font-[600] text-drgreen mb-[102px]">
              Sara Taylor
            </p>
          </div>
          <div className="flex justify-center gap-[62px]">
            {numbers.map((item) => (
              <NamberProducts {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-drgreen pt-[201px] pb-[201px]">
        <div className="container">
          <div className="flex items-center justify-between pb-[50px]">
            <div>
              <span className="font-[400] text-[36px] text-salate">Offer</span>
              <h4 className="font-[800] text-[50px] text-white">
                We Offer Organic For You
              </h4>
            </div>
            <div>
              <button className="text-drgreen bg-yellow py-[28px] px-[39px] rounded-lg">
                View All Product
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            {cards.slice(0, 4).map((item) => (
              <CardsMain {...item}/>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center relative">
        <div>
          <img className="bg-cover" src={moun} alt="moun" />
        </div>
        <div className="pr-[247px] absolute bg-[#fff] right-20 rounded-l-lg">
          <div className="w-[700px] pt-[78px] pl-[89px] pb-[78px]">
            <span className="text-salate text-[36px] font-[400]">
              Eco Friendly
            </span>
            <h4 className="w-[700px] text-drgreen text-[50px] font-[800] mb-[35px]">
              Econis is a Friendly Organic Store
            </h4>
            <ul className="flex flex-col gap-[35px] ">
              <li>
                <h4 className="text-[25px] font-[500] text-drgreen">
                  Start with Our Company First
                </h4>
                <p className="text-[18px] font-[400] text-drgreen">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </li>
              <li>
                <h4 className="text-[25px] font-[500] text-drgreen">
                  Start with Our Company First
                </h4>
                <p className="text-[18px] font-[400] text-drgreen">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </li>
              <li>
                <h4 className="text-[25px] font-[500] text-drgreen">
                  Start with Our Company First
                </h4>
                <p className="text-[18px] font-[400] text-drgreen">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-[187px] pb-[187px] bg-hsalat">
        {three.map((item) => (
          <ThreeProducts {...item} />
        ))}
      </div>

      <div className="pt-[177px] pb-[185px]">
        <div className="container">
          <div className="flex justify-between items-end pb-[45px]">
            <div>
              <span className="text-salate text-[36px] font-[400] mb-[8px]">
                News
              </span>
              <h4 className="w-[750px] font-[800] text-[50px] text-drgreen">
                Discover weekly content about organic food, & more
              </h4>
            </div>
            <div>
              <button className="text-drgreen text-[20px] font-[700] px-[45px] py-[20px] border-solid rounded-lg">
                More News
              </button>
            </div>
          </div>

          <div className="flex gap-[46px] ">
            {vegetable.map((item) => (
              <div className="relative">
                <img
                  className="w-[791px] rounded-[30px]"
                  src={item.img}
                  alt="img"
                />

                <div className="w-[613px] pt-[46px] pb-[60px] pl-[57px] pr-[57px] absolute top-[300px] right-20 bg-[#fff] rounded-[32px] shadow-lg  ">
                  <div className="flex gap-2">
                    {<Chel />}
                    <span className="text-drgreen text-[18px] font-[400]">
                      {item.span}
                    </span>
                  </div>
                  <h4 className="text-drgreen text-[25px] font-[800]">
                    {item.title}
                  </h4>
                  <p className="text-drgreen text-[18px] font-[400] mb-[15px]">
                    {item.text}
                  </p>
                  <button className="text-drgreen text-[20px] font-[700] px-[40px] py-[25px] bg-yellow rounded-[16px]">
                    {item.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
