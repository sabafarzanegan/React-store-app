import { useLoaderData } from "react-router-dom";
import Cardproducts from "./Cardproducts";
import { ProductResponse } from "@/lib/Types";

function Featuresection() {
  const { data } = useLoaderData() as ProductResponse;
  return (
    <>
      <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-primary py-4 mb-10">
        بهترین محصولات
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <Cardproducts item={item} />
        ))}
      </div>
    </>
  );
}

export default Featuresection;
