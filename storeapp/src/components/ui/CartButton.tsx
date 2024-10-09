import { RootState } from "@/Store";
import { Button } from "./button";

import { useSelector } from "react-redux";

type cartButtonProps = {
  addTocart: () => void;
};
function CartButton({ addTocart }: cartButtonProps) {
  const cart = useSelector((state: RootState) => state.cartStore);
  console.log("cart", cart);

  return <Button onClick={addTocart}>افزودن به سبد خرید</Button>;
}

export default CartButton;
