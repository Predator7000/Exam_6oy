


export const ThreeProducts = ({img,text}) => {
    return(
        <div>
            <div className="relative">
            <img src={img} alt="img" />
            <p className="text-drgreen text-[25px] font-[500] px-[83px] py-[33px] rounded-lg absolute top-[228px] right-36 bg-[#fff]">
              {text}
            </p>
          </div>
        </div>
    )
}