import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { orderResponse } from "@/lib/Types";
import { ReduxStore } from "@/Store";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/lib/Customfetch";
import { Separator } from "@/components/ui/separator";
import OrderList from "@/components/main/OrderList";

export const Loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<orderResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "لطفا ابتدا وارد شوید" });
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch<orderResponse>("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      return { ...response.data };
    } catch (error) {
      console.log(error);
    }
    return null;
  };

function Orders() {
  const { data } = useLoaderData() as orderResponse;
  console.log(data);

  return (
    <section>
      <div>
        <h3>سفارشات شما</h3>
        <span className="text-primary font-semibold text-lg px-4">
          {data[0]?.attributes?.name}
        </span>
        <span>{data[0]?.attributes.address}</span>
      </div>
      <Separator />
      <div>
        <OrderList data={data[0]} />
      </div>
    </section>
  );
}

export default Orders;
