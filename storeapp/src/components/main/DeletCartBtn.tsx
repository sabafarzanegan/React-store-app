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
import { useAppSelector } from "@/Hook";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { useEffect } from "react";
import { useRevalidator } from "react-router-dom";

function DeletCartBtn() {
 
  const cart = useAppSelector((state) => state.cartStore);
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
        <AlertDialogHeader>آیا مطمئن به حذف محصولات هستید؟</AlertDialogHeader>
        <AlertDialogFooter className="flex items-center gap-x-5">
          <AlertDialogCancel>نه</AlertDialogCancel>
          <AlertDialogAction onClick={deleteHandler}>بله</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeletCartBtn;
