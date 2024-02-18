export const OrganicProduct = ({img,title,text}) => {
  return (
    <div>
      <div className="flex items-center mt-[30px] mb-[20px]">
        <img src={img} alt="img" />
        <div>
          <h4 className="text-drgreen text-[25px] font-[800]">{title}</h4>
          <p className="w-[444px] text-[18px] font-[400]">{text}</p>
        </div>
      </div>
    </div>
  );
};
