import { Form, Link, useLoaderData } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { productRespobseWithParams } from "@/lib/Types";
function Filter() {
  const { meta, params } = useLoaderData() as productRespobseWithParams;
  const { search } = params;
  return (
    <Form className="rounded-md border border-secondary px-8 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <div className="mb-2">
        <Label htmlFor="search">جستجو</Label>
        <Input name="search" id="search" type="text" defaultValue={search} />
      </div>
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
