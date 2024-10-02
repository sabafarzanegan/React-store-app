import SelectProductAmount from "@/components/main/SelectProductAmount";
import SelectProductColor from "@/components/main/SelectProductColor";
import { Badge } from "@/components/ui/badge";
import { customFetch } from "@/lib/Customfetch";
import { singleproduct } from "@/lib/Types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const Loader: LoaderFunction = async ({
  params,
}): Promise<singleproduct> => {
  const respone = await customFetch<singleproduct>(`/products/${params.id}`);
  return { ...respone.data };
};

function SingleProduct() {
  const { data } = useLoaderData() as singleproduct;
  const { image, title, company, price, description } = data.attributes;

  return (
    <section className="mt-6 gap-y-8 grid lg:grid-cols-2 lg:gap-x-16">
      <div>
        <img src={image} alt="" className="w-96 h-96 object-cover rounded-md" />
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="font-bold md:text-lg lg:text-xl">{title}</h1>
        <h3 className="text-lg">{company}</h3>
        <Badge className="py-2 text-white">${price}</Badge>
        <p>{description}</p>
        <SelectProductAmount />
        <SelectProductColor />
      </div>
    </section>
  );
}

export default SingleProduct;
