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
import { Link } from "react-router-dom";
import Themetoggle from "./Themetoggle";
interface props {
  navlinks: NavLinks[];
}

function DropdownNavbar({ navlinks }: props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block md:hidden" asChild>
        <Button>
          <FaBarsStaggered />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-right">منو</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navlinks.map((link) => (
            <DropdownMenuItem className="w-full ">
              <DropdownMenuShortcut className=""></DropdownMenuShortcut>
              <Link to={link.path} className="">
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
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
