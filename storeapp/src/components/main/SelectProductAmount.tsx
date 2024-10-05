import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}
type amountprops = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};
type cartItemProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => void;
};
function SelectProductAmount({
  mode,
  amount,
  setAmount,
}: amountprops | cartItemProps) {
  const cartItem = mode === Mode.CartItem;
  return (
    <>
      <h4>تعداد</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => {
          setAmount(Number(value));
        }}>
        <SelectTrigger className={cartItem ? "w-[75px]" : "w-[150px]"}>
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
            const setValue = (index + 1).toString();
            return <SelectItem value={setValue}>{setValue}</SelectItem>;
          })}
        </SelectContent>
      </Select>
    </>
  );
}

export default SelectProductAmount;
