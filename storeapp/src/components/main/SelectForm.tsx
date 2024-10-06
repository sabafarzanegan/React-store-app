import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
type InputProps = {
  name: string;
  lable?: string;
  defaultValue?: string;
  options: string[];
};
function SelectForm({ lable, name, defaultValue, options }: InputProps) {
  return (
    <div>
      <Label htmlFor={name} className="dark:text-white">
        {lable || name}
      </Label>
      <Select name={name} defaultValue={defaultValue || options[0]}>
        <SelectTrigger id={name} className="dark:text-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="dark:text-white">
          {options.map((item) => (
            <SelectItem className="dark:text-white" key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectForm;
