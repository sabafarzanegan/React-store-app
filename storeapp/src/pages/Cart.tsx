import CartItemContainer from "@/components/main/CartItemContainer";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";
function Cart() {
  const cart = useSelector((state) => state.cartStore);
  return (
    <section>
      <h1 className="text-xl font-semibold">سبد خرید</h1>
      <Separator className="my-4" />
      <div className="flex items-start justify-between gap-x-6 ">
        <div className="space-y-4 w-[30%] bg-primary flex flex-col px-4 py-6 ">
          <div className="flex items-center justify-between ">
            <p>قیمت محصولات</p>
            <p>{cart.cartTotal}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between ">
            <p>هزینه ارسال</p>
            <p>{cart.shipping}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between  ">
            <p>مالیات</p>
            <p>{cart.tax}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="font-semibold">هزینه کل</p>
            <p className="font-semibold">{cart.orderTotal}</p>
          </div>
        </div>
        <div className="flex-1">
          {cart.cartItem.map((item) => (
            <CartItemContainer item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart;
