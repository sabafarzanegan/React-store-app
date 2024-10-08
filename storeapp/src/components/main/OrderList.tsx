import { formatAsDollar } from "@/lib/formatAsDollor";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Order } from "@/lib/Types";

type orderProps = {
  data: Order;
};
function OrderList({ data }: orderProps) {
  return (
    <div className="mt-10">
      <Table className="dark:text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="align-middle text-right">
              شناسه محصول
            </TableHead>
            <TableHead className="align-middle text-right">تصویر</TableHead>
            <TableHead className="align-middle text-right">نام</TableHead>
            <TableHead className="align-middle text-right">تعداد</TableHead>
            <TableHead className="align-middle text-right">قیمت</TableHead>
            <TableHead className="align-middle text-right">رنگ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="t">
            {data?.attributes.cartItems.map((item) => (
              <>
                <TableCell>{item.productId}</TableCell>
                <TableCell>
                  <img src={item.image} className="w-8 h-8 " alt="" />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.productColor }}></div>
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex items-center justify-center gap-x-4 mt-8 dark:text-white">
        <p className="px-2">هزینه پرداخت شده:</p>
        <span> {formatAsDollar(data.attributes.orderTotal)}</span>
      </div>
    </div>
  );
}

export default OrderList;
