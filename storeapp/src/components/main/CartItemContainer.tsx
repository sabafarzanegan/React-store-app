import { cartItem } from "@/lib/Types";
import { useSelector } from "react-redux";
import { Card } from "../ui/card";

type cartprops = {
  item: cartItem;
};
function CartItemContainer({ item }: cartprops) {
  console.log(item.productColor);

  return (
    <Card className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-4">
      <div className="flex items-start justify-between gap-x-2">
        <div>
          <img className="h-24 w-24 rounded-lg" src={item.image} alt="" />
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.company}</p>
          <span
            style={{
              backgroundColor: item.productColor,
              width: "15px",
              height: "15px",
            }}></span>
        </div>
        <div></div>
      </div>
    </Card>
  );
}

export default CartItemContainer;
