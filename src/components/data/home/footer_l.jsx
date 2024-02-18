export const FooterDataL = ({
  title_3,
  utext,
  utext_2,
  utext_3,
  utext_4,
  utext_5,
  utext_6,
}) => {
  return (
    <div>
      <div>
        <h4 className="text-drgreen text-[30px] font-[700] mb-[24px]">
          {title_3}
        </h4>
        <p className="text-drgreen text-[18px] font-[400] mb-[20px]">{utext}</p>
        <p className="text-drgreen text-[18px] font-[400] mb-[20px]">
          {utext_2}
        </p>
        <p className="text-drgreen text-[18px] font-[400] mb-[20px]">
          {utext_3}
        </p>
        <p className="text-drgreen text-[18px] font-[400] mb-[20px]">
          {utext_4}
        </p>
        <p className="text-drgreen text-[18px] font-[400] mb-[20px]">
          {utext_5}
        </p>
        <p className="text-drgreen text-[18px] font-[400] mb-[20px]">
          {utext_6}
        </p>
      </div>
    </div>
  );
};
