
export const VegetableProducts = (img, span, title, text, btn) => {
  return (
    <div>
      <div className="relative">
        <img className="w-[791px] rounded-[30px]" src={img} alt="img" />

        <div className="w-[613px] pt-[46px] pb-[60px] pl-[57px] pr-[57px] absolute top-[300px] right-20 bg-[#fff] rounded-[32px] shadow-lg  ">
          <div className="flex gap-2">
            
            <span className="text-drgreen text-[18px] font-[400]">
              {span}
            </span>
          </div>
          <h4 className="text-drgreen text-[25px] font-[800]">{title}</h4>
          <p className="text-drgreen text-[18px] font-[400] mb-[15px]">
            {text}
          </p>
          <button className="text-drgreen text-[20px] font-[700] px-[40px] py-[25px] bg-yellow rounded-[16px]">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};
