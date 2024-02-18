


export const NamberProducts = ({id,proc,title})=>{
    return(
        <div>
          <div className="w-[221px] h-[211px] border-solid border-[4px] border-salate rounded-full flex justify-center items-center flex-col">
                <p className="text-[50px] font-[800] text-drgreen">
                  {proc}
                </p>
                <h4 className="text-[18px] font-[600] text-drgreen">
                  {title}
                </h4>
              </div>
        </div>
    )
}