import CardPrice from "@/components/main/CardPrice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { clearCart } from "@/features/cart/cartSlice";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/lib/Customfetch";
import { formatAsDollar, mainformatAsDollars } from "@/lib/formatAsDollor";

import { ReduxStore, RootState } from "@/Store";
import { useSelector } from "react-redux";
import { ActionFunction, Form, redirect } from "react-router-dom";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const name = data.username;
    const address = data.address;
    if (!name || !address) {
      toast({ description: "لطفا همه ی فیلدها روتکمیل کنید" });
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "لطفا ابتدا واردشوید" });
      return redirect("/login");
    }
    const { cartItem, orderTotal, numItemsIncart, cartTotal } =
      store.getState().cartStore;

    console.log(typeof orderTotal);

    const information = {
      name: name,
      address: address,
      chargeTotal: mainformatAsDollars(cartTotal),
      cartItems: cartItem,
      numItemsInCart: numItemsIncart,
      orderTotal: String(orderTotal),
    };

    try {
      const results = await customFetch.post(
        "/orders",
        { data: information },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      console.log(results);

      store.dispatch(clearCart());
      toast({ description: "خرید ثبت شد" });
      return redirect("/orders");
    } catch (error) {
      console.log(error);

      toast({ description: "خرید شکست خوردلطفا دوباره تلاش کنید" });
      return null;
    }
  };

function Checkout() {
  const user = useSelector((state: RootState) => state.userState);
  return (
    <>
      <section>
        <div className="py-2">
          <h2 className="dark:text-white text-lg ">سفارش خود را نهایی کنید</h2>
        </div>
        <Separator />
        <div className="flex items-start justify-between py-4 flex-wrap">
          <CardPrice />
          <div className="w-[40%] ">
            <h4 className="px-4 dark:text-white">مشخصات مشتری</h4>
            <Form method="post" className="w-[60%] mx-auto space-y-4 mt-4">
              <div>
                <Label className="dark:text-white py-2" htmlFor="username">
                  نام کاربری
                </Label>
                <Input
                  className="dark:text-white"
                  name="username"
                  id="username"
                  defaultValue={user?.user?.username}
                />
              </div>
              <div>
                <Label className="dark:text-white py-2" htmlFor="address">
                  آدرس
                </Label>
                <Input
                  className="dark:text-white"
                  name="address"
                  id="address"
                />
              </div>
              <Button type="submit">خرید نهایی</Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
