import { cartItem } from "@/lib/Types";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { TbTrashX } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { removeItem } from "@/features/cart/cartSlice";

type cartprops = {
  item: cartItem;
};
function CartItemContainer({ item }: cartprops) {
  const dispath = useDispatch();
  const removeHandler = () => {
    dispath(removeItem(item.cartId));
  };
  return (
    <Card className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-4">
      <div className="flex items-start justify-between gap-x-2 w-full ">
        <div>
          <img className="h-24 w-24 rounded-lg" src={item.image} alt="" />
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-base">{item.title}</h3>
          <p className="text-sm">{item.company}</p>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer  flex  items-center justify-center`}
            style={{ backgroundColor: item.productColor }}></div>
        </div>
        <div>
          <span className="font-semibold text-xl">${item.price}</span>
        </div>
        <div>
          <Button onClick={removeHandler} variant="destructive">
            <TbTrashX className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CartItemContainer;
