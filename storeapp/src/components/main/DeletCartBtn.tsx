import { AlertDialog } from "@radix-ui/react-alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

function DeletCartBtn() {
  const dispath = useDispatch();
  const deleteHandler = () => {
    dispath(clearCart());
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>حذف همه محصولات</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-center">
        <AlertDialogHeader className="dark:text-secondary-foreground">
          آیا مطمئن به حذف محصولات هستید؟
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center gap-x-5">
          <AlertDialogCancel className="dark:text-white">نه</AlertDialogCancel>
          <AlertDialogAction onClick={deleteHandler}>بله</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeletCartBtn;
