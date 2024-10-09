// import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
// import { RootState } from "@/Store";

function ModeToggle() {
  // const theme = useSelector((state: RootState) => state.themeState);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>{/* {theme==="light"&&} */}</Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </>
  );
}

export default ModeToggle;
