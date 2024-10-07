import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLinks } from "../../lib/Types";
import { Link, redirect } from "react-router-dom";
import Themetoggle from "./Themetoggle";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/features/user/userSlice";
interface props {
  navlinks: NavLinks[];
}

function DropdownNavbar({ navlinks }: props) {
  const dispath = useDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block md:hidden" asChild>
        <Button>
          <FaBarsStaggered />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rtl:ml-0 ">
        <DropdownMenuLabel className="text-right">منو</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navlinks.map((link) => (
            <DropdownMenuItem className="w-full  ">
              <DropdownMenuShortcut className=""></DropdownMenuShortcut>
              <Link to={link.path} className="">
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <DropdownMenuShortcut className=""></DropdownMenuShortcut>
            <Button
              className="w-full"
              onClick={() => {
                dispath(logoutUser());
                redirect("/login");
              }}>
              خروج
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuLabel className="text-right">theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <DropdownMenuShortcut className=""></DropdownMenuShortcut>
          <Themetoggle />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownNavbar;
