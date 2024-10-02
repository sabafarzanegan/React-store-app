import Filter from "@/components/main/Filter";
import PaginationContainer from "@/components/main/PaginationContainer";
import ProductContainer from "@/components/main/ProductContainer";

import { customFetch } from "@/lib/Customfetch";
import { productRespobseWithParams } from "@/lib/Types";
import { type LoaderFunction } from "react-router-dom";
export const Loader: LoaderFunction = async ({
  request,
}): Promise<productRespobseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<productRespobseWithParams>("/products", {
    params,
  });

  return { ...response.data, params };
};
function Products() {
  return (
    <>
      <section className="space-y-10">
        <Filter />
        <ProductContainer />
        <PaginationContainer />
      </section>
    </>
  );
}

export default Products;
