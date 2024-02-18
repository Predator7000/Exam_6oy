


export const TwoProducts = ({img,text,title})=> {
    return(
        <div>
            <div className="relative">
              <img className="flex" src={img} alt="img" />
              <p className="text-salate text-[36px] font-[400] absolute  left-11 top-[140px]">
                {text}
              </p>
              <h3 className="text-drgreen text-[40px] font-[800] absolute top-[180px] left-11 w-[313px]">
                {title}
              </h3>
            </div>
        </div>
    )
}