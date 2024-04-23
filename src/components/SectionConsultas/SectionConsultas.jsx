import React from "react";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const SectionConsultas = ({ id, icon: ICON, title, link }) => {
  return (
    <div className="bg-dark-bgWhite text-black flex flex-col items-center gap-3 w-full max-w-[210px] h-[180px] justify-around rounded-2xl shadow-lg text-center cursor-pointer transtion-all duration-300 hover:scale-110">
      <div className="consultasCard-icon">
        <ICON className="icon"></ICON>
      </div>
      <span className="text-[17px] font-semibold">{title}</span>
      <button class="text-[#60CDDC] font-bold text-[16px] duration-300 hover:opacity-80 transition-opacity">{link}
  <ArrowRightAltOutlinedIcon></ArrowRightAltOutlinedIcon>
</button>

    </div>
  );
};

export default SectionConsultas;
