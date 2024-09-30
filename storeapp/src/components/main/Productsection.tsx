import { ProductResponse } from "@/lib/Types";
import { useLoaderData } from "react-router-dom";
import Cardproducts from "./Cardproducts";
type prop = {
  layout: "grid" | "list";
};
function Productsection({ layout }: prop) {
  const { data } = useLoaderData() as ProductResponse;
  return (
    <>
      <h1 className="text-lg md:text-xl lg:text-2xl mb-4">محصولات</h1>
      <div
        className={`${
          layout === "grid"
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex-col  gap-y-4"
        }`}>
        {data.map((item) => (
          <Cardproducts layout={layout} item={item} />
        ))}
      </div>
    </>
  );
}

export default Productsection;
