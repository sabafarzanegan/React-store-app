import React from "react";
import { MdOutlineDone } from "react-icons/md";

type colorprops = {
  colors: string[];
  currentColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

function SelectProductColor({
  colors,
  currentColor,
  setProductColor,
}: colorprops) {
  console.log(currentColor);
  console.log(colors);

  return (
    <div className="flex items-center gap-x-4 ">
      {colors.map((color) => (
        <div
          onClick={() => {
            setProductColor(color);
          }}
          className={`w-6 h-6 rounded-full cursor-pointer  flex  items-center justify-center`}
          style={{ backgroundColor: color }}>
          {color === currentColor && <MdOutlineDone className="w-full " />}
        </div>
      ))}
    </div>
  );
}

export default SelectProductColor;
