import CardPrice from "@/components/main/CardPrice";
import CartItemContainer from "@/components/main/CartItemContainer";
import DeletCartBtn from "@/components/main/DeletCartBtn";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { cartItem } from "@/lib/Types";
import { RootState } from "@/Store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Cart() {
  const cart = useSelector((state: RootState) => state.cartStore);

  return (
    <section>
      <h1 className="text-xl font-semibold dark:text-white">سبد خرید</h1>
      <Separator className="my-4" />
      <div className="flex items-start justify-between gap-x-6 ">
        <CardPrice />

        <div className="flex-1">
          {cart.cartItem.length == 0 && <h1>سبد خرید خالی است.</h1>}

          {cart.cartItem.map((item: cartItem) => (
            <CartItemContainer item={item} />
          ))}
          {cart.cartItem.length > 0 && (
            <div>
              <DeletCartBtn />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
