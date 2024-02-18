

export const FooterData = ({title,mtext,text,mtext_2,text_2,mtext_3,text_3}) => {
  return (
    <div>
        <div>
              <div className="text-end w-[285px] ">
                <h4 className="text-drgreen text-[30px] font-[700] mb-[32px]">
                  {title}
                </h4>
                <p className="text-drgreen text-[18px] font-[700]">
                  {mtext}
                </p>
                <p className="text-drgreen text-[18px] font-[400] mb-[20px]">
                  {text}
                </p>
                <p className="text-drgreen text-[18px] font-[700]">
                  {mtext_2}
                </p>
                <p className="text-drgreen text-[18px] font-[400] mb-[20px]">
                  {text_2}
                </p>
                <p className="text-drgreen text-[18px] font-[700]">
                  {mtext_3}
                </p>
                <p className="text-drgreen text-[18px] font-[400]">
                  {text_3}
                </p>
              </div>
        </div>

        
    </div>
  )
}
