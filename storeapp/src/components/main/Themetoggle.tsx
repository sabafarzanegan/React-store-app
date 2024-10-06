import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";
import { IoSettingsOutline } from "react-icons/io5";
import { setTheme } from "@/features/theme/themeSlice";

function Themetoggle() {
  const theme = useSelector((state) => state.themeState);
  const dispath = useDispatch();
  console.log(theme);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>
            {theme.theme == "light" && (
              <MdOutlineWbSunny className="text-white" />
            )}
            {theme.theme == "dark" && <FaRegMoon />}
            {theme.theme == "system" && <IoSettingsOutline />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup className="space-y-4">
            <DropdownMenuItem
              onClick={() => {
                dispath(setTheme("system"));
              }}
              className="">
              <IoSettingsOutline />
              <DropdownMenuShortcut>سیستم</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                dispath(setTheme("light"));
              }}>
              <MdOutlineWbSunny />
              <DropdownMenuShortcut>روشن</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                dispath(setTheme("dark"));
              }}>
              <FaRegMoon />
              <DropdownMenuShortcut>تیره</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Themetoggle;
