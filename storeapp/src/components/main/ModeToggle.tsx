import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

function ModeToggle() {
  const theme = useSelector((state) => state.themeState);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>
            {theme==="light"&&}
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </>
  );
}

export default ModeToggle;
