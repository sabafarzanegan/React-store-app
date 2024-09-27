import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Button } from "../ui/button";
import Themetoggle from "./Themetoggle";
import { LuLogIn } from "react-icons/lu";
import DropdownNavbar from "./DropdownNavbar";
import { NavLinks } from "@/lib/Types";
const Navlinks: NavLinks[] = [
  {
    name: "خانه",
    path: "/",
  },
  {
    name: "درباره ی ما",
    path: "/about",
  },
  {
    name: "محصولات",
    path: "/products",
  },
  {
    name: "سفارشات",
    path: "/orders",
  },
];
function Navbar() {
  const location = useLocation();

  return (
    <nav
      className={`flex items-center justify-between z-50 py-6  ${
        location.pathname === "/" ? "text-gray-100 px-6" : ""
      } `}>
      {/* cart bascket and theme toggle */}
      <div className="flex items-center gap-x-3">
        <HiOutlineShoppingBag
          className={`w-7 h-7 font-bold ${
            location.pathname === "/" ? "text-white" : "text-black"
          }  `}
        />
        {/* tiggle button */}
        <div className="hidden md:block">
          <Themetoggle />
        </div>
        <DropdownNavbar navlinks={Navlinks} />
      </div>
      {/* navlink */}
      <div>
        <ul className=" items-center  gap-x-4 hidden md:flex ">
          {Navlinks.map((link) => (
            <li>
              <Link
                className={`px-2 ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
                to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* logo login/register button */}
      <div className="flex items-center gap-x-6">
        {/* login/register button */}
        <div>
          <Button className="flex items-center justify-center gap-x-2">
            <Link
              to="/login"
              className="text-white text-semibold text-sm md:text-base">
              ورود
            </Link>
            <LuLogIn className="text-sm md:text-base text-white mt-1" />
          </Button>
        </div>
        <h1 className="font-bold text-lg">Panto</h1>
      </div>
    </nav>
  );
}

export default Navbar;
