

export const CategoriesProducts = ({img, text, ncost, cost, img_s})=>{
    return (
        <div>
            <div>
              <ul>
                <li className="w-[335px] bg-white">
                  <div>
                    <img
                      className="w-[335px] h-[324px]"
                      src={img}
                      alt="img"
                      
                    />
                    
                  </div>
                  <div className="px-[30px] mb-[17px]">
                    <h4 className="text-drgreen text-[20px] font-[600] mb-3">
                      {text}
                    </h4>
                    <hr />
                    <div className="flex justify-between mt-[6px]">
                      <div className="flex gap-[8px] items-center">
                        <p className="text-[#B8B8B8]">{ncost}</p>
                        <p className="text-drgreen text-[18px] font-[700]">
                          {cost}
                        </p>
                      </div>
                      <img src={img_s} alt="" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    )
}