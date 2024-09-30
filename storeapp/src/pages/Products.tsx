import ProductContainer from "@/components/main/ProductContainer";

import { customFetch } from "@/lib/Customfetch";
import { ProductResponse } from "@/lib/Types";
import { type LoaderFunction } from "react-router-dom";
export const Loader: LoaderFunction = async (): Promise<ProductResponse> => {
  const response = await customFetch<ProductResponse>("/products");

  return { ...response.data };
};
function Products() {
  return (
    <>
      <ProductContainer />
    </>
  );
}

export default Products;
