import CartItemContainer from "@/components/main/CartItemContainer";
import DeletCartBtn from "@/components/main/DeletCartBtn";

import { Separator } from "@/components/ui/separator";
import { formatAsDollor } from "@/lib/formatAsDollor";
import { useSelector } from "react-redux";
function Cart() {
  const cart = useSelector((state) => state.cartStore);

  return (
    <section>
      <h1 className="text-xl font-semibold">سبد خرید</h1>
      <Separator className="my-4" />
      <div className="flex items-start justify-between gap-x-6 ">
        <div className="space-y-4 w-[30%] bg-primary flex flex-col px-4 py-6 rounded-lg ">
          <div className="flex items-center justify-between ">
            <p>قیمت محصولات</p>
            <p>{formatAsDollor(cart.cartTotal)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between ">
            <p>هزینه ارسال</p>
            <p>{formatAsDollor(cart.shipping)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between  ">
            <p>مالیات</p>
            <p>{formatAsDollor(cart.tax.toFixed(0))}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="font-semibold">هزینه کل</p>
            <p className="font-semibold">{formatAsDollor(cart.orderTotal)}</p>
          </div>
        </div>
        <div className="flex-1">
          {cart.cartItem.length == 0 && <h1>سبد خرید خالی است.</h1>}

          {cart.cartItem.map((item) => (
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
