import { Product } from "@/lib/Types";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
type PropsProduct = {
  item: Product;
  layout?: "grid" | "list";
};

function Cardproducts({ item, layout }: PropsProduct) {
  return (
    <Link to={`/products/${item.id}`}>
      <div
        className={` space-y-4 border border-gray-400 p-2 rounded-lg ${
          layout === "list" && "flex items-start justify-between flex-wrap"
        } `}>
        <div>
          <img
            className={`w-full ${
              layout === "list" && "w-[90%]"
            } rounded-md h-64`}
            src={item?.attributes.image}
            alt={item?.attributes.title}
          />
        </div>
        <div>
          <h3 className=" text-lg ">{item?.attributes.title}</h3>
        </div>
        {layout === "grid" && (
          <div className="flex items-center gap-4">
            <Badge className="text-white text-sm font-normal">
              {item.attributes.company}
            </Badge>
            <Badge className="text-white text-sm font-normal">
              {item.attributes.category}
            </Badge>
          </div>
        )}

        <div
          className={`flex items-center justify-between ${
            layout === "list" && "gap-x-2"
          }`}>
          <div>
            <span className="text-lg font-semibold">
              ${item.attributes.price}
            </span>
          </div>
          {layout === "grid" && (
            <Button className="font-semibold  text-white px-10">خرید</Button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Cardproducts;
