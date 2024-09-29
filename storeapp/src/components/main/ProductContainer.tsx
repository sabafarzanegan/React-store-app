import { useLoaderData } from "react-router-dom";
import Productsection from "./Productsection";
import { ProductResponse } from "@/lib/Types";
import { useState } from "react";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { Separator } from "../ui/separator";

function ProductContainer() {
  const [Layout, setLayout] = useState<"grid" | "list">("grid");
  const { meta } = useLoaderData() as ProductResponse;
  console.log(meta);

  return (
    <div>
      {/* Header section  */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Button
            variant={`${Layout === "grid" ? "default" : "outline"}`}
            onClick={() => {
              setLayout("grid");
            }}>
            <LuLayoutGrid />
          </Button>
          <Button
            variant={`${Layout === "list" ? "default" : "outline"}`}
            onClick={() => {
              setLayout("list");
            }}>
            <LuLayoutList />
          </Button>
        </div>
        <div className="text-lg font-semibold">
          {meta.pagination.total} محصول
        </div>
      </div>
      <Separator className="my-4" />
      <Productsection layout={Layout} />
    </div>
  );
}

export default ProductContainer;
