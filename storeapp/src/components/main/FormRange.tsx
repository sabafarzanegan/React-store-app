import { useState } from "react";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

type Rangepriceprops = {
  lable?: string;
  name?: string;
  defaultValue?: string;
};

function FormRange({ lable, name, defaultValue }: Rangepriceprops) {
  const step = 1000;
  const Maxstep = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : Maxstep;
  const [selectPrice, setSelectPrice] = useState(defaultPrice);
  return (
    <div>
      <Label htmlFor={name}>{lable || name}</Label>
      <span>{selectPrice}</span>
      <Slider
        id={name}
        name={name}
        max={Maxstep}
        step={step}
        value={[selectPrice]}
        onValueChange={(value) => setSelectPrice(value[0])}></Slider>
    </div>
  );
}

export default FormRange;
