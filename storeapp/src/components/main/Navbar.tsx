import { Link, redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Button } from "../ui/button";
import Themetoggle from "./Themetoggle";
import { LuLogIn } from "react-icons/lu";
import DropdownNavbar from "./DropdownNavbar";
import { NavLinks } from "@/lib/Types";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/features/user/userSlice";
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
];

function Navbar() {
  const location = useLocation();
  const cart = useSelector((state) => state.cartStore);
  const user = useSelector((state) => state.userState);
  const dispath = useDispatch();
  const restrictNav = user?.user?.username && [
    { name: "بررسی", path: ".checkout" },
    {
      name: "سفارشات",
      path: "/orders",
    },
  ];
  const restrictedNavlinks = [...Navlinks, ...(restrictNav || [])];
  console.log(restrictedNavlinks);

  return (
    <nav
      className={`flex items-center justify-between z-50 py-6  ${
        location.pathname === "/" ? "text-gray-100 px-6" : ""
      } `}>
      {/* cart bascket and theme toggle */}
      <div className="flex items-center gap-x-3 relative">
        <Link to="/cart" className="">
          <HiOutlineShoppingBag
            className={`w-9 h-9 font-bold dark:text-white ${
              location.pathname === "/" ? "text-white" : "text-black"
            }  `}
          />
        </Link>
        <span className="absolute top-0 right-0 w-5 h-5 bg-primary rounded-full text-sm mx-auto flex items-center justify-center">
          {cart.numItemsIncart}
        </span>

        {/* tiggle button */}
        <div className="hidden md:block">
          <Themetoggle />
        </div>
        <DropdownNavbar navlinks={restrictedNavlinks} />
        {user?.user?.username && (
          <span
            onClick={() => {
              dispath(logoutUser());
              redirect("/login");
            }}
            className="cursor-pointer hover:text-primary dark:text-white hidden md:block">
            خروج
          </span>
        )}
      </div>
      {/* navlink */}
      <div>
        <ul className=" items-center  gap-x-4 hidden md:flex ">
          {restrictedNavlinks.map((link) => (
            <li>
              <Link
                className={`px-2  dark:text-white  ${
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
          {user?.user?.username ? (
            <div className="flex items-center gap-x-3 flex-wrap px-3">
              <span className="dark:text-white">سلام</span>
              <span className="text-primary">{user?.user.username}</span>
            </div>
          ) : (
            <Button className="flex items-center justify-center gap-x-2">
              <Link
                to="/login"
                className="text-white text-semibold text-sm md:text-base">
                ورود
              </Link>
              <LuLogIn className="text-sm md:text-base text-white mt-1" />
            </Button>
          )}
        </div>
        <h1 className="font-bold text-lg dark:text-white">Panto</h1>
      </div>
    </nav>
  );
}

export default Navbar;
