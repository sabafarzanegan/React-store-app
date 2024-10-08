import SelectProductAmount from "@/components/main/SelectProductAmount";
import SelectProductColor from "@/components/main/SelectProductColor";
import { Badge } from "@/components/ui/badge";
import { customFetch } from "@/lib/Customfetch";
import { cartItem, singleproduct } from "@/lib/Types";
import { useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Mode } from "@/components/main/SelectProductAmount";
import { useDispatch, UseDispatch } from "react-redux";
import { addItem } from "@/features/cart/cartSlice";
import { useToast } from "@/hooks/use-toast";
import CartButton from "@/components/ui/CartButton";
import { formatAsDollar } from "@/lib/formatAsDollor";

export const Loader: LoaderFunction = async ({
  params,
}): Promise<singleproduct> => {
  const respone = await customFetch<singleproduct>(`/products/${params.id}`);
  return { ...respone.data };
};

function SingleProduct() {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const { data } = useLoaderData() as singleproduct;
  const { image, title, company, price, description, colors } = data.attributes;
  const mainprice = formatAsDollar(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const cartProduct: cartItem = {
    cartId: data.id + productColor,
    productId: data.id,
    title: title,
    image,
    price: Number(price),
    productColor: productColor,
    amount: amount,
    company,
  };

  const addTocart = () => {
    console.log("add to cart");
    dispatch(addItem(cartProduct));
    toast({ description: "محصول با موفقیت اضافه شد" });
  };
  return (
    <section className="mt-6 gap-y-8 grid lg:grid-cols-2 lg:gap-x-16">
      <div>
        <img src={image} alt="" className="w-96 h-96 object-cover rounded-md" />
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="font-bold md:text-lg lg:text-xl dark:text-secondary-foreground">
          {title}
        </h1>
        <h3 className="text-lg dark:text-secondary-foreground">{company}</h3>
        <Badge className="py-2 text-white">{mainprice}</Badge>
        <p className="dark:text-secondary-foreground">{description}</p>
        <SelectProductColor
          colors={colors}
          currentColor={productColor}
          setProductColor={setProductColor}
        />
        <SelectProductAmount
          mode={Mode.SingleProduct}
          amount={amount}
          setAmount={setAmount}
        />
        <CartButton addTocart={addTocart} />
      </div>
    </section>
  );
}

export default SingleProduct;
