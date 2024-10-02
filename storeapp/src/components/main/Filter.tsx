import { Form, Link, useLoaderData } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { productRespobseWithParams } from "@/lib/Types";
import SelectForm from "./SelectForm";
import FormRange from "./FormRange";
import Formcheck from "./Formcheck";
function Filter() {
  const { meta, params } = useLoaderData() as productRespobseWithParams;
  const { search, category, company, price, shipping } = params;
  console.log(shipping);

  return (
    <Form className="rounded-md border border-secondary px-8 py-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* search */}
      <div className="mb-2">
        <Label htmlFor="search">جستجو</Label>
        <Input name="search" id="search" type="text" defaultValue={search} />
      </div>
      {/* category */}
      <SelectForm
        name="category"
        lable="انتخاب دسته"
        options={meta.categories}
        defaultValue={category}
      />
      {/* company */}
      <SelectForm
        name="company"
        lable="انتخاب شرکت"
        options={meta.companies}
        defaultValue={company}
      />
      {/* orders */}
      <SelectForm
        name="order"
        lable="مرتب سازی"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={"a-z"}
      />
      {/* price range */}
      <FormRange name="price" lable="price" defaultValue={price} />
      {/* shipping check */}
      {/* <Formcheck
        name=" shipping"
        lable="Free shipping"
        defaultValue={shipping}
      /> */}
      <Button size="sm" className="self-end mb-2" type="submit">
        جستجو
      </Button>
      <Button
        size="sm"
        className="self-end mb-2"
        type="button"
        variant="outline">
        <Link to="/products">باک کردن</Link>
      </Button>
    </Form>
  );
}

export default Filter;
