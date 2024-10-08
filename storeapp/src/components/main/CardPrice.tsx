import { formatAsDollar } from "@/lib/formatAsDollor";
import { useSelector } from "react-redux";
import { Separator } from "../ui/separator";
import { RootState } from "@/Store";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function CardPrice() {
  const cart = useSelector((state: RootState) => state.cartStore);
  const user = useSelector((state: RootState) => state.userState);

  return (
    <div className="space-y-4 w-[50%] bg-primary flex flex-col px-4 py-6 rounded-lg ">
      <div className="flex items-center justify-between flex-wrap gap-y-2">
        <p>قیمت محصولات</p>
        <p>{formatAsDollar(cart.cartTotal)}</p>
      </div>
      <Separator />
      <div className="flex items-center justify-between  flex-wrap gap-y-2 ">
        <p>هزینه ارسال</p>
        <p>{formatAsDollar(cart.shipping)}</p>
      </div>
      <Separator />
      <div className="flex items-center justify-between   flex-wrap gap-y-2">
        <p>مالیات</p>
        <p>{formatAsDollar(cart.tax.toFixed(0))}</p>
      </div>
      <Separator />
      <div className="flex items-center justify-between  flex-wrap gap-y-2">
        <p className="font-semibold">هزینه کل</p>
        <p className="font-semibold">{formatAsDollar(cart.orderTotal)}</p>
      </div>
      {!user?.user?.username ? (
        <Button variant="outline">
          <Link to="/login" className="dark:text-white">
            لطفا ابتدا وارد سایت شوید.
          </Link>
        </Button>
      ) : (
        <Button variant="outline">
          <Link className="dark:text-white" to="/checkout">
            ادامه
          </Link>
        </Button>
      )}
    </div>
  );
}

export default CardPrice;
